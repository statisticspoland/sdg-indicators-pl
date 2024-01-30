
function createMapPow(div, dane, jez){

  console.log("tworzenie mapy");

  // Create root
  root = am5.Root.new(div);

  if(jez != "en"){
    root.locale = am5locales_pl_PL;
  }
  root.numberFormatter.set("numberFormat", "#,###.00");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  //set ids to polygon
  for (var i = 0; i < am4geodata_powiaty.features.length; i++){
      am4geodata_powiaty.features[i].id = am4geodata_powiaty.features[i].properties.JPT_KOD_JE;
      am4geodata_powiaty.features[i].properties.value = "BRAK DANYCH";
  }
  //console.log(am4geodata_powiaty);

  // Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "none",
    projection: am5map.geoMercator(),
    layout: root.horizontalLayout
  }));

  // Create polygon series
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am4geodata_powiaty,
    valueField: "value",
    calculateAggregates: true,
    reverseGeodata: true
  }));

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{JPT_NAZWA_}: {value}",
    fill: am5.color(0xbfbfbf),  //kolor dla braku danych
    stroke: am5.color(0xe0ccff) //kolor krawedzi
  });


  polygonSeries.set("heatRules", [{
    target: polygonSeries.mapPolygons.template,
    dataField: "value",
    /*min: am5.color(0xf0e6ff),
    max: am5.color(0xb380ff),
    key: "fill",*/
    customFunction: function(sprite, min, max, value) {
      var diff = (max-min)/5;
      console.log(diff);
      if(value <= max && value > max-diff){
        sprite.set("fill", am5.color(0xb380ff));
      }
      else if (value <= max-diff && value > max-2*diff) {
        sprite.set("fill", am5.color(0xc299ff));
      }
      else if (value <= max-2*diff && value > max-3*diff){
        sprite.set("fill", am5.color(0xccaaff));
      }
      else if(value <= max-3*diff && value > max-4*diff){
        sprite.set("fill", am5.color(0xe3d1ff));
      }
      else{
        sprite.set("fill", am5.color(0xf0e6ff));
      }
      if (value == "BRAK DANYCH"){
        sprite.set("fill", am5.color(0xbfbfbf));
      }
    }
  }]);

  polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
    heatLegend.showValue(ev.target.dataItem.get("value"));
  });

  polygonSeries.data.setAll(dane);

  var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
    orientation: "vertical",
    startColor: am5.color(0xf0e6ff),
    endColor: am5.color(0xb380ff),
    //startText: Math.min(...dane.map(o => o.value), 0).toPrecision(2),
    startText: 51.00,
    //endText: Math.max(...dane.map(o => o.value), 0).toPrecision(2),
    endText: 100.00,
    stepCount: 5,
    height: 400
  }));

  heatLegend.startLabel.setAll({
    fontSize: 12,
    fill: heatLegend.get("startColor")
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
