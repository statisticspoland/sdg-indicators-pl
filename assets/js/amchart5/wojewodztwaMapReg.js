
  //am5.ready(function() {
function createMapWoj(div, dane, jez){
  
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
  //console.log("Tworzenie mapy...");
  var root = am5.Root.new(div);

  if(jez != "en"){
    root.locale = am5locales_pl_PL;
  }
  root.numberFormatter.set("numberFormat", "#,##0.0");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  // Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "none",
    projection: am5map.geoMercator(),
    layout: root.horizontalLayout
  }));

    // Create polygon series
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_polandLow,
    valueField: "value",
    calculateAggregates: true
  }));

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}: {value.formatNumber('#,##0.0')}",
    fill: am5.color(0xbfbfbf),  //kolor dla braku danych
    stroke: am5.color(0x99ff99) //kolor krawedzi
    //stroke: am5.color(0xe0ccff) //kolor krawedzi
  });

  polygonSeries.set("heatRules", [{
    target: polygonSeries.mapPolygons.template,
    dataField: "value",
    min: am5.color(0x99ff99),
    //min: am5.color(0xf0e6ff),
    max: am5.color(0x006600),
    //max: am5.color(0xb380ff),
    key: "fill"
  }]);

  polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
    heatLegend.showValue(ev.target.dataItem.get("value"));
  });

  polygonSeries.data.setAll(dane);

  var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
    orientation: "vertical",
    startColor: am5.color(0x99ff99),
    //startColor: am5.color(0xf0e6ff),
    endColor: am5.color(0x006600),
    //endColor: am5.color(0xb380ff),
    startText: Math.min(...dane.map(o => o.value)).toFixed(1),
    //startText: 89.00,
    endText: Math.max(...dane.map(o => o.value), 0).toFixed(1),
    //endText: 100.00,
    stepCount: 5,
    height: 300
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
