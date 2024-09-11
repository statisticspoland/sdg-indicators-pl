function createchart4(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_4").innerHTML = "Active bus stops (with trolleybus) and trams<br/>per 10 km<sup>2</sup> in 2022";
}
if (d==1) {
	document.getElementById("tytuł_4").innerHTML = "Active bus stops (with trolleybus) and trams<br/>per 10 km<sup>2</sup> in 2021";
}
if (d==2) {
	document.getElementById("tytuł_4").innerHTML = "Active bus stops (with trolleybus) and trams<br/>per 10 km<sup>2</sup> in 2020";
}
if (d==3) {
	document.getElementById("tytuł_4").innerHTML = "Active bus stops (with trolleybus) and trams<br/>per 10 km<sup>2</sup> in 2019";
}
if (d==4) {
	document.getElementById("tytuł_4").innerHTML = "Active bus stops (with trolleybus) and trams<br/>per 10 km<sup>2</sup> in 2018";
}

am5.array.each(am5.registry.rootElements, 
	function(root) {
		if (typeof root !== "undefined") {
			if (root.dom.id == div) {
				root.dispose();
			}
		}
	}
);

	function getData(index) {
		var data = [
    // Data set #1
    [{
	"w1": "2022",
	"ogółem": 13.9,
	"city": "Zielona Góra"
	}, {
	"w1": "2022",
	"ogółem": 56.7,
	"city": "Wrocław"
	}, {
	"w1": "2022",
	"ogółem": 82.7,
	"city": "Warszawa"
	}, {
	"w1": "2022",
	"ogółem": 62.0,
	"city": "Toruń"
	}, {
	"w1": "2022",
	"ogółem": 41.6,
	"city": "Szczecin"
	}, {
	"w1": "2022",
	"ogółem": 49.9,
	"city": "Rzeszów"
	}, {
	"w1": "2022",
	"ogółem": 53.7,
	"city": "Poznań"
	}, {
	"w1": "2022",
	"ogółem": 32.0,
	"city": "Opole"
	}, {
	"w1": "2022",
	"ogółem": 49.9,
	"city": "Olsztyn"
	}, {
	"w1": "2022",
	"ogółem": 71.4,
	"city": "Łódź"
	}, {
	"w1": "2022",
	"ogółem": 52.2,
	"city": "Lublin"
	}, {
	"w1": "2022",
	"ogółem": 57.7,
	"city": "Kraków"
	}, {
	"w1": "2022",
	"ogółem": 54.5,
	"city": "Kielce"
	}, {
	"w1": "2022",
	"ogółem": 43.9,
	"city": "Katowice"
	}, {
	"w1": "2022",
	"ogółem": 45.0,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2022",
	"ogółem": 46.7,
	"city": "Gdańsk"
	}, {
	"w1": "2022",
	"ogółem": 56.7,
	"city": "Bydgoszcz"
	}, {
	"w1": "2022",
	"ogółem": 68.0,
	"city": "Białystok"
	}],
    // Data set #2
    [{
	"w1": "2021",
	"ogółem": 13.6,
	"city": "Zielona Góra"
	}, {
	"w1": "2021",
	"ogółem": 59.0,
	"city": "Wrocław"
	}, {
	"w1": "2021",
	"ogółem": 82.0,
	"city": "Warszawa"
	}, {
	"w1": "2021",
	"ogółem": 61.1,
	"city": "Toruń"
	}, {
	"w1": "2021",
	"ogółem": 41.6,
	"city": "Szczecin"
	}, {
	"w1": "2021",
	"ogółem": 50.5,
	"city": "Rzeszów"
	}, {
	"w1": "2021",
	"ogółem": 52.4,
	"city": "Poznań"
	}, {
	"w1": "2021",
	"ogółem": 32.3,
	"city": "Opole"
	}, {
	"w1": "2021",
	"ogółem": 49.8,
	"city": "Olsztyn"
	}, {
	"w1": "2021",
	"ogółem": 69.7,
	"city": "Łódź"
	}, {
	"w1": "2021",
	"ogółem": 52.2,
	"city": "Lublin"
	}, {
	"w1": "2021",
	"ogółem": 56.5,
	"city": "Kraków"
	}, {
	"w1": "2021",
	"ogółem": 52.9,
	"city": "Kielce"
	}, {
	"w1": "2021",
	"ogółem": 43.9,
	"city": "Katowice"
	}, {
	"w1": "2021",
	"ogółem": 41.5,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2021",
	"ogółem": 46.7,
	"city": "Gdańsk"
	}, {
	"w1": "2021",
	"ogółem": 56.4,
	"city": "Bydgoszcz"
	}, {
	"w1": "2021",
	"ogółem": 68.0,
	"city": "Białystok"
	}],
	// Data set #3
	[{
	"w1": "2020",
	"ogółem": 15.2,
	"city": "Zielona Góra"
	}, {
	"w1": "2020",
	"ogółem": 56.0,
	"city": "Wrocław"
	}, {
	"w1": "2020",
	"ogółem": 81.2,
	"city": "Warszawa"
	}, {
	"w1": "2020",
	"ogółem": 61.5,
	"city": "Toruń"
	}, {
	"w1": "2020",
	"ogółem": 41.1,
	"city": "Szczecin"
	}, {
	"w1": "2020",
	"ogółem": 50.6,
	"city": "Rzeszów"
	}, {
	"w1": "2020",
	"ogółem": 52.6,
	"city": "Poznań"
	}, {
	"w1": "2020",
	"ogółem": 32.3,
	"city": "Opole"
	}, {
	"w1": "2020",
	"ogółem": 49.3,
	"city": "Olsztyn"
	}, {
	"w1": "2020",
	"ogółem": 70.2,
	"city": "Łódź"
	}, {
	"w1": "2020",
	"ogółem": 51.2,
	"city": "Lublin"
	}, {
	"w1": "2020",
	"ogółem": 56.4,
	"city": "Kraków"
	}, {
	"w1": "2020",
	"ogółem": 53.4,
	"city": "Kielce"
	}, {
	"w1": "2020",
	"ogółem": 43.9,
	"city": "Katowice"
	}, {
	"w1": "2020",
	"ogółem": 41.3,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2020",
	"ogółem": 46.1,
	"city": "Gdańsk"
	}, {
	"w1": "2020",
	"ogółem": 55.9,
	"city": "Bydgoszcz"
	}, {
	"w1": "2020",
	"ogółem": 67.1,
	"city": "Białystok"
	}],
	// Data set #4
	[{
	"w1": "2019",
	"ogółem": 15.2,
	"city": "Zielona Góra"
	}, {
	"w1": "2019",
	"ogółem": 53.4,
	"city": "Wrocław"
	}, {
	"w1": "2019",
	"ogółem": 80.2,
	"city": "Warszawa"
	}, {
	"w1": "2019",
	"ogółem": 62.2,
	"city": "Toruń"
	}, {
	"w1": "2019",
	"ogółem": 41.1,
	"city": "Szczecin"
	}, {
	"w1": "2019",
	"ogółem": 46.9,
	"city": "Rzeszów"
	}, {
	"w1": "2019",
	"ogółem": 52.2,
	"city": "Poznań"
	}, {
	"w1": "2019",
	"ogółem": 31.7,
	"city": "Opole"
	}, {
	"w1": "2019",
	"ogółem": 48.4,
	"city": "Olsztyn"
	}, {
	"w1": "2019",
	"ogółem": 69.6,
	"city": "Łódź"
	}, {
	"w1": "2019",
	"ogółem": 51.2,
	"city": "Lublin"
	}, {
	"w1": "2019",
	"ogółem": 56.4,
	"city": "Kraków"
	}, {
	"w1": "2019",
	"ogółem": 52.5,
	"city": "Kielce"
	}, {
	"w1": "2019",
	"ogółem": 41.3,
	"city": "Katowice"
	}, {
	"w1": "2019",
	"ogółem": 38.3,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2019",
	"ogółem": 44.8,
	"city": "Gdańsk"
	}, {
	"w1": "2019",
	"ogółem": 54.1,
	"city": "Bydgoszcz"
	}, {
	"w1": "2019",
	"ogółem": 67.1,
	"city": "Białystok"
	}],
	// Data set #5
	[{
	"w1": "2018",
	"ogółem": 14.7,
	"city": "Zielona Góra"
	}, {
	"w1": "2018",
	"ogółem": 54.1,
	"city": "Wrocław"
	}, {
	"w1": "2018",
	"ogółem": 84.0,
	"city": "Warszawa"
	}, {
	"w1": "2018",
	"ogółem": 62.2,
	"city": "Toruń"
	}, {
	"w1": "2018",
	"ogółem": 41.1,
	"city": "Szczecin"
	}, {
	"w1": "2018",
	"ogółem": 48.5,
	"city": "Rzeszów"
	}, {
	"w1": "2018",
	"ogółem": 52.2,
	"city": "Poznań"
	}, {
	"w1": "2018",
	"ogółem": 31.3,
	"city": "Opole"
	}, {
	"w1": "2018",
	"ogółem": 46.8,
	"city": "Olsztyn"
	}, {
	"w1": "2018",
	"ogółem": 69.3,
	"city": "Łódź"
	}, {
	"w1": "2018",
	"ogółem": 50.5,
	"city": "Lublin"
	}, {
	"w1": "2018",
	"ogółem": 58.5,
	"city": "Kraków"
	}, {
	"w1": "2018",
	"ogółem": 52.3,
	"city": "Kielce"
	}, {
	"w1": "2018",
	"ogółem": 41.3,
	"city": "Katowice"
	}, {
	"w1": "2018",
	"ogółem": 35.2,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2018",
	"ogółem": 44.5,
	"city": "Gdańsk"
	}, {
	"w1": "2018",
	"ogółem": 53.2,
	"city": "Bydgoszcz"
	}, {
	"w1": "2018",
	"ogółem": 67.1,
	"city": "Białystok"
	}]
	];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

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
    layout: root.verticalLayout
  }));

  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  //var legend = chart.children.push(
  //  am5.Legend.new(root, {
  //    centerX: am5.p50,
  //    x: am5.p50
  //  })
  //);

  //legend.labels.template.setAll({
  //fontSize: 12,
  //});

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 10 });
	yRenderer.labels.template.setAll({
    fontSize: 12,
    //rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100
  });

  //xRenderer.labels.template.setAll({
  //  rotation: 0,
  //  centerY: am5.p50,
  //  centerX: am5.p50
  //});

  var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "city",
    renderer: yRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  yRenderer.grid.template.setAll({
    location: 1
  })

  yAxis.data.setAll(getData(d));

	var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30, strokeOpacity: 0.1, strokeWidth: 1 });
	xRenderer.labels.template.setAll({
		fontSize: 12,
		strokeOpacity: 0.1
	});

  var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    maxPrecision: precyzja,
    max: yMax,
    min: yMin,
    strictMinMax: true,
    renderer: xRenderer
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: fieldName,
      categoryYField: "city"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryY}: {valueX.formatNumber('#,###.0')}",
      //width: am5.p75,
      tooltipY: 0,
      strokeOpacity: 0
    });

    series.data.setAll(getData(d));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    //series.bullets.push(function() {
    //  return am5.Bullet.new(root, {
    //    locationY: 0.5,
    //    sprite: am5.Label.new(root, {
    //      text: "{valueY}",
    //      fill: am5.color("#000000"),
    //      centerY: am5.p50,
    //      centerX: am5.p50,
    //      populateText: true
    //    })
    //  });
    //});

    //legend.data.push(series);
  }

  lata.forEach((item, i) => {
    makeSeries(item, item);
  });

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);

}
