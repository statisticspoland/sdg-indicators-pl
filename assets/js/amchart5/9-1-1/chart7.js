function createchart7(div, yMax){

//console.log("tworzenie chart7");

<!-- Chart code -->

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new(div);

root.locale = am5locales_pl_PL;
root.numberFormatter.set("numberFormat", "#,###.0");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout,
  //dx: 10,
  maxWidth: 475

}));

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
//chart.set("scrollbarX", am5.Scrollbar.new(root, {
//  orientation: "horizontal"
//}));

var data = [{
  "woj": "POLSKA",
  "miasto": 59.4,
  "wieś": 40.6
}, {
  "woj": "Dolnośląskie",
  "miasto": 67.1,
  "wieś": 32.9
}, {
  "woj": "Kujawsko-Pomorskie",
  "miasto": 57.9,
  "wieś": 42.1
}, {
  "woj": "Lubelskie",
  "miasto": 46.2,
  "wieś": 53.8
}, {
  "woj": "Lubuskie",
  "miasto": 64.0,
  "wieś": 36.0
}, {
  "woj": "Łódzkie",
  "miasto": 61.9,
  "wieś": 38.1
}, {
  "woj": "Małopolskie",
  "miasto": 47.8,
  "wieś": 52.2
}, {
  "woj": "Mazowieckie",
  "miasto": 64.8,
  "wieś": 35.2
}, {
  "woj": "Opolskie",
  "miasto": 52.8,
  "wieś": 47.2
}, {
  "woj": "Podkarpackie",
  "miasto": 41.0,
  "wieś": 59.0
}, {
  "woj": "Podlaskie",
  "miasto": 60.7,
  "wieś": 39.3
}, {
  "woj": "Pomorskie",
  "miasto": 62.1,
  "wieś": 37.9
}, {
  "woj": "Śląskie",
  "miasto": 75.7,
  "wieś": 24.3
}, {
  "woj": "Świętokrzyskie",
  "miasto": 45.1,
  "wieś": 54.9
}, {
  "woj": "Warmińsko-Mazurskie",
  "miasto": 58.7,
  "wieś": 41.3
}, {
  "woj": "Wielkopolskie",
  "miasto": 52.9,
  "wieś": 47.1
}, {
  "woj": "Zachodniopomorskie",
  "miasto": 67.9,
  "wieś": 32.1
}]


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
xRenderer.labels.template.setAll({
  fontSize: 12,
  rotation: -45,
  centerY: am5.p50,
  centerX: am5.p100
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "woj",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

xRenderer.grid.template.setAll({
  location: 1
})

xAxis.data.setAll(data);

var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30 });
yRenderer.labels.template.setAll({
  fontSize: 12,
  strokeOpacity: 0.1
});

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  max: yMax,
  //numberFormat: "#'%'",
  numberFormat: "#",
  strictMinMax: true,
  calculateTotals: true,
  renderer: yRenderer
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}));

legend.labels.template.setAll({
  fontSize: 12,
});

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    stacked: true,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: fieldName,
    valueYShow: "valueYTotalPercent",
    categoryXField: "woj"
  }));

  series.columns.template.setAll({
    tooltipText: "{categoryX}, {name}: {valueYTotalPercent.formatNumber('#,###.0')}%",
    tooltipY: am5.percent(10)
  });




  series.columns.template.adapters.add("fill", function(fill, target) {
  if (target.dataItem.get("categoryX") == "POLSKA") {
    if (series.get("name") == "wieś"){
      return am5.color(0x674EA7);
    }
    else {
      return am5.color(0x9D86D8);
    }
  }
  else {
    return fill;
  }
  });




  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  //series.bullets.push(function() {
  //  return am5.Bullet.new(root, {
  //    sprite: am5.Label.new(root, {
  //      text: "{valueYTotalPercent.formatNumber('#,###.0')}%",
  //      fill: root.interfaceColors.get("alternativeText"),
  //      centerY: am5.p50,
  //      centerX: am5.p50,
  //      populateText: true
  //    })
  //  });
  //});

  legend.data.push(series);
}


makeSeries("miasto", "miasto");
makeSeries("wieś", "wieś");


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}
