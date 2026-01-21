function createchartScatter(div, dane, jez){

  //console.log(jez);
  //console.log(dane);

  var translate = ""
  if (jez != "en") {
    translate = "Polska"
  } else {
    translate = "Poland"
  };

  if (jez === "en") {
  dane.forEach(obj => {
    if (obj.Polska !== undefined) {
      obj.Poland = obj.Polska;
      delete obj.Polska;
    }
  });
  };

  const woj = [translate,"Dolnośląskie","Kujawsko-Pomorskie","Lubelskie","Lubuskie","Łódzkie","Małopolskie","Mazowieckie","Opolskie","Podkarpackie","Podlaskie","Pomorskie","Śląskie","Świętokrzyskie","Warmińsko-Mazurskie","Wielkopolskie","Zachodniopomorskie"];

  const wojToSerie = [];
  for (let item of dane) {
    for (const wo of woj) {
      if (item[wo] !== undefined) {
        // Convert string or float value to int using parseInt or Math.round
        item[wo] = parseFloat(item[wo], 10);
        // or: item[w] = Math.round(Number(item[w]));
        if (!wojToSerie.includes(wo)) {
          wojToSerie.push(wo);
        }
      }
    }
  }

//console.log(dane);


am5.array.each(am5.registry.rootElements,
	function(root) {
		if (typeof root !== "undefined") {
			if (root.dom.id == div) {
				root.dispose();
			}
		}
	}
);

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new(div);

//root.locale = am5locales_pl_PL;
//root.numberFormatter.set("numberFormat", "#,###.0");
if(jez != "en"){
  root.locale = am5locales_pl_PL;
}
else
{
  root.numberFormatter.set("numberFormat", "#,###")
}

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
  wheelX: "none",
  wheelY: "none",
  maxTooltipDistance: 0
  //pinchZoomX:true
}));


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
  //max: 1427063,
  strictMinMax: false,
  renderer: yRenderer
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  /*var series1 = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Polska",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "Polska",
    valueXField: "year",
    legendValueText: "{valueY}",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "Polska: {valueY}"
    })
  }));

  series1.data.processor = am5.DataProcessor.new(root, {
  dateFormat: "yyyy",
  dateFields: ["year"]
  });

  series1.data.setAll(dane);*/

  //const woj = ["Dolnośląskie","Kujawsko-Pomorskie","Lubelskie","Lubuskie","Łódzkie","Małopolskie","Mazowieckie","Opolskie","Podkarpackie","Podlaskie","Pomorskie","Śląskie","Świętokrzyskie","Warmińsko-Mazurskie","Wielkopolskie","Zachodniopomorskie"];

    const cleanedData = dane.map(obj => {
      const cleaned = {};

      for (const [key, value] of Object.entries(obj)) {
        if (!Number.isNaN(value)) {
          cleaned[key] = value;
        }
      }

      return cleaned;
    });

    const wojColors = {
      "Polska": 0x6794dc,
      "Poland": 0x6794dc,
      "Dolnośląskie": 0x33A1FF,
      "Kujawsko-Pomorskie": 0x9B59B6,
      "Lubelskie": 0x27AE60,
      "Lubuskie": 0xF1C40F,
      "Łódzkie": 0xE67E22,
      "Małopolskie": 0x12876f,
      "Mazowieckie": 0xC0392B,
      "Opolskie": 0xd5b6e2,
      "Podkarpackie": 0x2ECC71,
      "Podlaskie": 0x3333ff,
      "Pomorskie": 0xE74C3C,
      "Śląskie": 0x16A085,
      "Świętokrzyskie": 0xD35400,
      "Warmińsko-Mazurskie": 0x2980B9,
      "Wielkopolskie": 0x27AEAE,
      "Zachodniopomorskie": 0xcc00cc
    };

  for(const w of wojToSerie){

    /*var series2 = chart.series.push(am5xy.LineSeries.new(root, {
      name: w,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: w,
      valueXField: "year",
      legendLabelText: "{name}: {valueY}",
      stroke: am5.color(wojColors[w]),
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: w+": {valueY}"
      })
    }));

    series2.data.processor = am5.DataProcessor.new(root, {
    dateFormat: "yyyy",
    dateFields: ["year"]
    });

    series2.strokes.template.setAll({
      strokeWidth: 3  // increase this number to make line thicker
    });

    if (w === "Polska" || w === "Poland"){
      series2.strokes.template.setAll({
        strokeWidth: 5  // increase this number to make line thicker
      });
    }

    series2.data.setAll(cleanedData);
    series2.appear();
    */

    var series2 = chart.series.push(am5xy.LineSeries.new(root, {
      //calculateAggregates: true,
      name: w,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: w,
      valueXField: "year",
      legendLabelText: "{name}: {valueY}",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: w+": {valueY}"
      })
    }));

    series2.strokes.template.set("stroke", am5.color(0x000000)); // Or just clear it
    series2.strokes.template.set("strokeOpacity", 0); // Makes it invisible

    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    series2.bullets.push(function() {
      var graphics = am5.Triangle.new(root, {
        fill: am5.color(wojColors[w]),
        width: 15,
        height: 13
      });
      return am5.Bullet.new(root, {
        sprite: graphics
      });
    });

    series2.data.processor = am5.DataProcessor.new(root, {
    dateFormat: "yyyy",
    dateFields: ["year"]
    });

    series2.data.setAll(cleanedData);
    series2.appear(1000);
  }
  //date = new Date();
  //console.log("date "+date);
  //date.setHours(0, 0, 0, 0);
  //value = 0;

  //var data1 = [{"date":"2015","value":6.3},{"date":"2016","value":5.6},{"date":"2017","value":6.7},{"date":"2018","value":7.6},{"date":"2019","value":5.8},{"date":"2020","value":5.9},{"date":"2021","value":5.7},{"date":"2022","value":7.1}];
  //var data2 = [{"date":"2015","value":9.1},{"date":"2016","value":5.8},{"date":"2017","value":6.2},{"date":"2018","value":7.3},{"date":"2019","value":6.9},{"date":"2020","value":6.2},{"date":"2021","value":5.9},{"date":"2022","value":6.2}];

  //console.log("data1 "+JSON.stringify(data1))
  //console.log("data2 "+JSON.stringify(data2))


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  //series1.appear();



// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);


// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
/*chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));
//
chart.set("scrollbarY", am5.Scrollbar.new(root, {
  orientation: "vertical"
}));*/
//
//
// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.bottomAxesContainer.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50,
  layout: am5.GridLayout.new(root, {
    maxColumns: 3,
    fixedWidthGrid: true
  })
}));

legend.labels.template.setAll({
  fontSize: 12,
});

legend.valueLabels.template.setAll({
  fontSize: 12,
  fontWeight: "400"
});

legend.data.setAll(chart.series.values);

chart.appear(1000, 100);

}
