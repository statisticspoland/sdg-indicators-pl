function createchart8(div, yMax){

//console.log("tworzenie chart8");

<!-- Chart code -->

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new(div);

root.locale = am5locales_pl_PL;
root.numberFormatter.set("numberFormat", "#,###.0");


root.dateFormatter.setAll({
  dateFormat: "yyyy",
  dateFields: ["valueX"]
});



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
  layout: root.verticalLayout
}));


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "zoomX"
}));
cursor.lineY.set("visible", false);

var date = new Date();
date.setHours(0, 0, 0, 0);
var value = 100;

function generateData() {
  value = Math.round((Math.random() * 10 - 5) + value);
  am5.time.add(date, "day", 1);
  return {
    date: date.getTime(),
    value: value
  };
}

function generateDatas(count) {
  var data = [];
  for (var i = 0; i < count; ++i) {
    data.push(generateData());
  }
  return data;
}


var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
xRenderer.labels.template.setAll({
  fontSize: 12
});
// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  baseInterval: {
    timeUnit: "year",
    count: 1
  },
  gridIntervals: [
    { timeUnit: "year", count: 1 }
    ],
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30 });
yRenderer.labels.template.setAll({
  fontSize: 12,
  strokeOpacity: 0.1
});

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  max: yMax,
  renderer: yRenderer
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "miasta",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));
var series2 = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "małe miasta i przedmieścia",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));
var series3 = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "obszary wiejskie",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

  var data1 = [{"date":"2015","value":15.4},{"date":"2016","value":14.6},{"date":"2017","value":13.8},{"date":"2018","value":12.6},{"date":"2019","value":12.4},{"date":"2020","value":10.8},{"date":"2021","value":12.1},{"date":"2022","value":10.5}];
  var data2 = [{"date":"2015","value":20.0},{"date":"2016","value":18.0},{"date":"2017","value":17.4},{"date":"2018","value":15.3},{"date":"2019","value":15.3},{"date":"2020","value":13.7},{"date":"2021","value":14.1},{"date":"2022","value":14.2}];
  var data3 = [{"date":"2015","value":29.3},{"date":"2016","value":26.6},{"date":"2017","value":23.3},{"date":"2018","value":24.6},{"date":"2019","value":24.0},{"date":"2020","value":24.2},{"date":"2021","value":23.2},{"date":"2022","value":22.1}];
  series1.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy",
  dateFields: ["date"]
  });
  series2.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy",
  dateFields: ["date"]
  });
  series3.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy",
  dateFields: ["date"]
  });

//series.columns.template.setAll({ strokeOpacity: 0 })


// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
//chart.set("scrollbarX", am5.Scrollbar.new(root, {
//  orientation: "horizontal"
//}));

series1.data.setAll(data1);
series2.data.setAll(data2);
series3.data.setAll(data3);

// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}));


legend.labels.template.setAll({
  fontSize: 12,
});


// Add an HTML-enabled title
//chart.children.unshift(am5.Label.new(root, {
//  interactive: true,
//  html: "<div style=\"text-align: center;\"><a href=\"https://www.onet.pl\" target=\"_blank\" title=\"Przejdź do tablicy z danymi\">Tablica</a></div>",
//  x: am5.percent(5),
//  y: am5.percent(98),
//  centerX: am5.percent(0),
//  paddingTop: 0,
//  paddingBottom: 0
//}));





// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series1.appear(1000);
series2.appear(1000);
series3.appear(1000);
legend.data.push(series1);
legend.data.push(series2);
legend.data.push(series3);
chart.appear(1000, 100);

}