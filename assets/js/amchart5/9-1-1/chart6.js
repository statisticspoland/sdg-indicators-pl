function createchart6(div){

//console.log("tworzenie chart6");

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
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  maxTooltipDistance: 0,
  pinchZoomX:true
}));

var date = new Date();
date.setHours(0, 0, 0, 0);
var value = 100;

function generateData() {
  value = Math.round((Math.random() * 10 - 4.2) + value);
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

var xRenderer = am5xy.AxisRendererX.new(root, {});
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
  max: 10,
  renderer: yRenderer
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series1 = chart.series.push(am5xy.LineSeries.new(root, {
    name: "gminy bez miast na prawach powiatu",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    legendValueText: "{valueY}",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{valueY}"
    })
  }));
  var series2 = chart.series.push(am5xy.LineSeries.new(root, {
    name: "miasta na prawach powiatu",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    legendValueText: "{valueY}",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{valueY}"
    })
  }));

  //date = new Date();
  //console.log("date "+date);
  //date.setHours(0, 0, 0, 0);
  //value = 0;

  var data1 = [{"date":"2015","value":6.3},{"date":"2016","value":5.6},{"date":"2017","value":6.7},{"date":"2018","value":7.6},{"date":"2019","value":5.8},{"date":"2020","value":5.9},{"date":"2021","value":5.7},{"date":"2022","value":7.1}];
  var data2 = [{"date":"2015","value":9.1},{"date":"2016","value":5.8},{"date":"2017","value":6.2},{"date":"2018","value":7.3},{"date":"2019","value":6.9},{"date":"2020","value":6.2},{"date":"2021","value":5.9},{"date":"2022","value":6.2}];
  
  
  series1.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy",
  dateFields: ["date"]
  });
  series2.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy",
  dateFields: ["date"]
  });
  
  
  series1.data.setAll(data1);
  series2.data.setAll(data2);
  console.log("data1 "+JSON.stringify(data1))
  console.log("data2 "+JSON.stringify(data2))


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series1.appear();
  series2.appear();


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);


// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
//chart.set("scrollbarX", am5.Scrollbar.new(root, {
//  orientation: "horizontal"
//}));
//
//chart.set("scrollbarY", am5.Scrollbar.new(root, {
//  orientation: "vertical"
//}));
//
//
// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.bottomAxesContainer.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50,
  layout: root.verticalLayout
}));

legend.labels.template.setAll({
  fontSize: 12,
});

// When legend item container is hovered, dim all the series except the hovered one
legend.itemContainers.template.events.on("pointerover", function(e) {
  var itemContainer = e.target;

  // As series list is data of a legend, dataContext is series
  var series = itemContainer.dataItem.dataContext;

  chart.series.each(function(chartSeries) {
    if (chartSeries != series) {
      chartSeries.strokes.template.setAll({
        strokeOpacity: 0.15,
        stroke: am5.color(0x000000)
      });
    } else {
      chartSeries.strokes.template.setAll({
        strokeWidth: 3
      });
    }
  })
})

// When legend item container is unhovered, make all series as they are
legend.itemContainers.template.events.on("pointerout", function(e) {
  var itemContainer = e.target;
  var series = itemContainer.dataItem.dataContext;

  chart.series.each(function(chartSeries) {
    chartSeries.strokes.template.setAll({
      strokeOpacity: 1,
      strokeWidth: 1,
      stroke: chartSeries.get("fill")
    });
  });
})

legend.itemContainers.template.set("width", am5.p100);
legend.valueLabels.template.setAll({
  x: am5.percent(100),
  centerX: am5.percent(100),
  layout: root.verticalLayout
});

// It's is important to set legend data after all the events are set on template, otherwise events won't be copied
legend.data.setAll(chart.series.values);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}