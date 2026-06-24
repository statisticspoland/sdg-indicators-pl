
  //am5.ready(function() {
function createMapWojStep(div, dane, jez, precyzja){

  am5.array.each(am5.registry.rootElements,
    function(root) {
      if (typeof root !== "undefined") {
        if (root.dom.id == div) {
          root.dispose();
        }
      }
    }
  );

  // Create root
  // console.log("dane...",dane);
  var root = am5.Root.new(div);

  if(jez != "en"){
    root.locale = am5locales_pl_PL;
  }
  //root.numberFormatter.set("numberFormat", "#,##0.0");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  // Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "none",
    panY: "none",
    wheelY: "none",
    projection: am5map.geoMercator(),
    layout: root.horizontalLayout
  }));

  chart.chartContainer.set("background", am5.Rectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 1
  }));
    // Create polygon series
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_polandLow,
    valueField: "value",
    calculateAggregates: true
  }));

  function formatNumberLocalized(value, precyzja, jez) {
    let parts = Number(value).toFixed(precyzja).split(".");

    // Dodaj separator tysięcy
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, jez === "pl" ? " " : ",");

    // Połącz z separatorem dziesiętnym
    const decimalSeparator = jez === "pl" ? "," : ".";
    return parts.join(decimalSeparator);
  }

  polygonSeries.mapPolygons.template.adapters.add("tooltipText", function(_, target) {
    const name = target.dataItem?.dataContext?.name;
    const value = target.dataItem?.dataContext?.value;

    if (name != null && value==0) {
      const formattedValue = formatNumberLocalized(value, 0, jez);
      return `${name}: ${formattedValue}`;
    }

    if (name != null && !isNaN(value)) {
      const formattedValue = formatNumberLocalized(value, precyzja, jez);
      return `${name}: ${formattedValue}`;
    }

    if (name != null && isNaN(value)) {
      const noDataText = jez === "pl" ? "Brak danych" : "No data";
      return `${name}: ${noDataText}`;
    }

    return "";
  });

  polygonSeries.mapPolygons.template.setAll({
    //tooltipText: "{name}: {value.formatNumber('#,##0.0')}",
    templateField: "polygonSettings",
    fill: am5.color(0xbfbfbf),  //kolor dla braku danych
    stroke: am5.color(0xffffff) //kolor krawedzi
    //stroke: am5.color(0xe0ccff) //kolor krawedzi
  });

  const colors = [
    am5.color(0xc1d8f1), //min
    am5.color(0xafcaec),
    am5.color(0x9dbce8),
    am5.color(0x8bafe4),
    am5.color(0x79a1e0)//max
  ];

  function classifyValue(value, min, max, classes = 5) {
    const interval = (max - min) / classes;

    // zabezpieczenie przed wartością równą max
    if (value === max) {
      return classes - 1;
    }

    const index = Math.floor((value - min) / interval);

    return Math.max(0, Math.min(index, classes - 1));
  }


  const numericValues = dane.map(o => o.value).filter(v => !isNaN(v));
  const minV = Math.min(...numericValues);
  const maxV = Math.max(...numericValues);

  for(var i = 0; i < dane.length; i++) {

    console.log(dane[i]);

    const group = classifyValue(dane[i].value, minV, maxV);
    dane[i].polygonSettings = {
      fill: colors[group]
    }
  }

  function formatDecimal(value, precyzja, jez) {
    let formatted = Number(value).toFixed(precyzja);
    if (jez === "pl") {
      formatted = formatted.replace(".", ",");
    }
    return formatted;
  }

  polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
    const value = ev.target.dataItem.get("value");
    heatLegend.showValue(ev.target.dataItem.get("value"));
  });

  console.log("data_filtered", dane);
  polygonSeries.data.setAll(dane);

  let startText, endText;
  let startColor = am5.color(0xc1d8f1);
  let endColor = am5.color(0x6794dc);

  if (numericValues.length > 0) {
    if(Math.min(...numericValues)==0){
      startText = formatNumberLocalized(Math.min(...numericValues), 0, jez);
    }
    else{
      startText = formatNumberLocalized(Math.min(...numericValues), precyzja, jez);
    }
    endText = formatNumberLocalized(Math.max(...numericValues), precyzja, jez);
  } else {
    // brak danych w ogóle
    startText = jez === "pl" ? "Brak danych" : "No data";
    endText = startText;

    // opcjonalnie ustaw oba kolory na szary
    startColor = endColor = am5.color(0xcccccc);
  }

  var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
    orientation: "vertical",
    startColor: startColor,
    endColor: endColor,
    startText: startText,
    endText: endText,
    stepCount: 5,
    height: 300,
    background: am5.Rectangle.new(root, {
      fill: am5.color(0xffffff)
    })
  }));

  heatLegend.startLabel.setAll({
    fontSize: 12,
    fill: heatLegend.get("endColor")
  });

  heatLegend.endLabel.setAll({
    fontSize: 12,
    fill: heatLegend.get("endColor")
  });

  // change this to template when possible
  polygonSeries.events.on("datavalidated", function () {
    heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
    heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0xffeecc)
  });
}
