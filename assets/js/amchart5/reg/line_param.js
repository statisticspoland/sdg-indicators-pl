function createchartLineParam(div, dane, idx, jez, precyzja){

  //console.log(jez);

  var translate = ""
  if (jez != "en") {
    translate = "Polska"
  } else {
    translate = "Poland"
  };


  const wojTemp = [translate,"Dolnośląskie","Kujawsko-Pomorskie","Lubelskie","Lubuskie","Łódzkie","Małopolskie","Mazowieckie","Opolskie","Podkarpackie","Podlaskie","Pomorskie","Śląskie","Świętokrzyskie","Warmińsko-Mazurskie","Wielkopolskie","Zachodniopomorskie"];

  const woj = wojTemp.map(str => str + '_'.repeat(idx));

    if (jez === "en") {
    dane.forEach(obj => {
      if (obj.Polska !== undefined) {
        obj.Poland = obj.Polska;
        delete obj.Polska;
      };
      if (obj.Polska_ !== undefined) {
        obj.Poland_ = obj.Polska_;
        delete obj.Polska_;
      };
      if (obj.Polska__ !== undefined) {
        obj.Poland__ = obj.Polska__;
        delete obj.Polska__;
      };
    });
    };

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

//console.log("TUTAJ");
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
  //root.numberFormatter.set("numberFormat", "# ###,0")
}
else
{
  root.numberFormatter.set("numberFormat", "#,###.0")
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
    "Zachodniopomorskie": 0xcc00cc,
    "Polska_": 0x6794dc,
    "Poland_": 0x6794dc,
    "Dolnośląskie_": 0x33A1FF,
    "Kujawsko-Pomorskie_": 0x9B59B6,
    "Lubelskie_": 0x27AE60,
    "Lubuskie_": 0xF1C40F,
    "Łódzkie_": 0xE67E22,
    "Małopolskie_": 0x12876f,
    "Mazowieckie_": 0xC0392B,
    "Opolskie_": 0xd5b6e2,
    "Podkarpackie_": 0x2ECC71,
    "Podlaskie_": 0x3333ff,
    "Pomorskie_": 0xE74C3C,
    "Śląskie_": 0x16A085,
    "Świętokrzyskie_": 0xD35400,
    "Warmińsko-Mazurskie_": 0x2980B9,
    "Wielkopolskie_": 0x27AEAE,
    "Zachodniopomorskie_": 0xcc00cc,
    "Polska__": 0x6794dc,
    "Poland__": 0x6794dc,
    "Dolnośląskie__": 0x33A1FF,
    "Kujawsko-Pomorskie__": 0x9B59B6,
    "Lubelskie__": 0x27AE60,
    "Lubuskie__": 0xF1C40F,
    "Łódzkie__": 0xE67E22,
    "Małopolskie__": 0x12876f,
    "Mazowieckie__": 0xC0392B,
    "Opolskie__": 0xd5b6e2,
    "Podkarpackie__": 0x2ECC71,
    "Podlaskie__": 0x3333ff,
    "Pomorskie__": 0xE74C3C,
    "Śląskie__": 0x16A085,
    "Świętokrzyskie__": 0xD35400,
    "Warmińsko-Mazurskie__": 0x2980B9,
    "Wielkopolskie__": 0x27AEAE,
    "Zachodniopomorskie__": 0xcc00cc
  };

for(const w of wojToSerie){

    var series2 = chart.series.push(am5xy.LineSeries.new(root, {
      name: w.replace('_','').replace('_',''),
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: w,
      valueXField: "year",
      legendLabelText: "{name}: {valueY}",
      stroke: am5.color(wojColors[w])
      /*tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: w.replace('_','').replace('_','')+": {valueY}"
      })*/
    }));

    var tooltip = am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: w.replace('_','').replace('_','') + ": {valueY}",
      getFillFromSprite: false
    });

    tooltip.get("background").setAll({
      fill: am5.color(wojColors[w])
    });

    series2.set("tooltip", tooltip);

    series2.data.processor = am5.DataProcessor.new(root, {
    dateFormat: "yyyy",
    dateFields: ["year"]
    });

    series2.strokes.template.setAll({
      strokeWidth: 3  // increase this number to make line thicker
    });

    if (w === "Polska" || w === "Poland" || w === "Polska_" || w === "Poland_" || w === "Polska__" || w === "Poland__"){
      series2.strokes.template.setAll({
        strokeWidth: 5  // increase this number to make line thicker
      });
    }

    series2.data.setAll(cleanedData);
    series2.appear();

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
