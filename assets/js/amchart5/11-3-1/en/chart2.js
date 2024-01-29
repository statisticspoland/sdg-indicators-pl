function createchart2(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2022 (2015=100)";
}
if (d==1) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2021 (2015=100)";
}
if (d==2) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2020 (2015=100)";
}
if (d==3) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2019 (2015=100)";
}
if (d==4) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2018 (2015=100)";
}
if (d==5) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2017 (2015=100)";
}
if (d==6) {
	document.getElementById("tytuł_2").innerHTML = "Population by place of residence in 2016 (2015=100)";
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
	"ogółem": 98.9,
	"year": "Białystok"
	}, {
	"w1": "2022",
	"ogółem": 92.8,
	"year": "Bydgoszcz"
	}, {
	"w1": "2022",
	"ogółem": 105.2,
	"year": "Gdańsk"
	}, {
	"w1": "2022",
	"ogółem": 94.1,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2022",
	"ogółem": 93.4,
	"year": "Katowice"
	}, {
	"w1": "2022",
	"ogółem": 92.8,
	"year": "Kielce"
	}, {
	"w1": "2022",
	"ogółem": 105.5,
	"year": "Kraków"
	}, {
	"w1": "2022",
	"ogółem": 97.2,
	"year": "Lublin"
	}, {
	"w1": "2022",
	"ogółem": 93.9,
	"year": "Łódź"
	}, {
	"w1": "2022",
	"ogółem": 97.0,
	"year": "Olsztyn"
	}, {
	"w1": "2022",
	"ogółem": 106.3,
	"year": "Opole"
	}, {
	"w1": "2022",
	"ogółem": 99.8,
	"year": "Poznań"
	}, {
	"w1": "2022",
	"ogółem": 106.1,
	"year": "Rzeszów"
	}, {
	"w1": "2022",
	"ogółem": 96.5,
	"year": "Szczecin"
	}, {
	"w1": "2022",
	"ogółem": 96.5,
	"year": "Toruń"
	}, {
	"w1": "2022",
	"ogółem": 106.7,
	"year": "Warszawa"
	}, {
	"w1": "2022",
	"ogółem": 106.0,
	"year": "Wrocław"
	}, {
	"w1": "2022",
	"ogółem": 100.4,
	"year": "Zielona Góra"
	}],
    // Data set #2
    [{
	"w1": "2021",
	"ogółem": 99.1,
	"year": "Białystok"
	}, {
	"w1": "2021",
	"ogółem": 93.9,
	"year": "Bydgoszcz"
	}, {
	"w1": "2021",
	"ogółem": 105.2,
	"year": "Gdańsk"
	}, {
	"w1": "2021",
	"ogółem": 95.4,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2021",
	"ogółem": 94.3,
	"year": "Katowice"
	}, {
	"w1": "2021",
	"ogółem": 93.7,
	"year": "Kielce"
	}, {
	"w1": "2021",
	"ogółem": 105.5,
	"year": "Kraków"
	}, {
	"w1": "2021",
	"ogółem": 97.7,
	"year": "Lublin"
	}, {
	"w1": "2021",
	"ogółem": 94.8,
	"year": "Łódź"
	}, {
	"w1": "2021",
	"ogółem": 97.6,
	"year": "Olsztyn"
	}, {
	"w1": "2021",
	"ogółem": 106.6,
	"year": "Opole"
	}, {
	"w1": "2021",
	"ogółem": 100.5,
	"year": "Poznań"
	}, {
	"w1": "2021",
	"ogółem": 105.6,
	"year": "Rzeszów"
	}, {
	"w1": "2021",
	"ogółem": 97.2,
	"year": "Szczecin"
	}, {
	"w1": "2021",
	"ogółem": 97.2,
	"year": "Toruń"
	}, {
	"w1": "2021",
	"ogółem": 106.8,
	"year": "Warszawa"
	}, {
	"w1": "2021",
	"ogółem": 106.1,
	"year": "Wrocław"
	}, {
	"w1": "2021",
	"ogółem": 100.7,
	"year": "Zielona Góra"
	}],
    // Data set #3
    [{
	"w1": "2020",
	"ogółem": 99.6,
	"year": "Białystok"
	}, {
	"w1": "2020",
	"ogółem": 95.3,
	"year": "Bydgoszcz"
	}, {
	"w1": "2020",
	"ogółem": 105.3,
	"year": "Gdańsk"
	}, {
	"w1": "2020",
	"ogółem": 97.4,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2020",
	"ogółem": 95.5,
	"year": "Katowice"
	}, {
	"w1": "2020",
	"ogółem": 94.6,
	"year": "Kielce"
	}, {
	"w1": "2020",
	"ogółem": 105.2,
	"year": "Kraków"
	}, {
	"w1": "2020",
	"ogółem": 98.4,
	"year": "Lublin"
	}, {
	"w1": "2020",
	"ogółem": 96.0,
	"year": "Łódź"
	}, {
	"w1": "2020",
	"ogółem": 98.4,
	"year": "Olsztyn"
	}, {
	"w1": "2020",
	"ogółem": 107.2,
	"year": "Opole"
	}, {
	"w1": "2020",
	"ogółem": 101.0,
	"year": "Poznań"
	}, {
	"w1": "2020",
	"ogółem": 104.6,
	"year": "Rzeszów"
	}, {
	"w1": "2020",
	"ogółem": 97.9,
	"year": "Szczecin"
	}, {
	"w1": "2020",
	"ogółem": 98.1,
	"year": "Toruń"
	}, {
	"w1": "2020",
	"ogółem": 106.7,
	"year": "Warszawa"
	}, {
	"w1": "2020",
	"ogółem": 106.0,
	"year": "Wrocław"
	}, {
	"w1": "2020",
	"ogółem": 101.0,
	"year": "Zielona Góra"
	}],
    // Data set #4
    [{
	"w1": "2019",
	"ogółem": 100.5,
	"year": "Białystok"
	}, {
	"w1": "2019",
	"ogółem": 97.9,
	"year": "Bydgoszcz"
	}, {
	"w1": "2019",
	"ogółem": 101.9,
	"year": "Gdańsk"
	}, {
	"w1": "2019",
	"ogółem": 99.9,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2019",
	"ogółem": 97.6,
	"year": "Katowice"
	}, {
	"w1": "2019",
	"ogółem": 98.4,
	"year": "Kielce"
	}, {
	"w1": "2019",
	"ogółem": 102.4,
	"year": "Kraków"
	}, {
	"w1": "2019",
	"ogółem": 99.7,
	"year": "Lublin"
	}, {
	"w1": "2019",
	"ogółem": 97.0,
	"year": "Łódź"
	}, {
	"w1": "2019",
	"ogółem": 99.2,
	"year": "Olsztyn"
	}, {
	"w1": "2019",
	"ogółem": 107.7,
	"year": "Opole"
	}, {
	"w1": "2019",
	"ogółem": 98.6,
	"year": "Poznań"
	}, {
	"w1": "2019",
	"ogółem": 105.5,
	"year": "Rzeszów"
	}, {
	"w1": "2019",
	"ogółem": 99.1,
	"year": "Szczecin"
	}, {
	"w1": "2019",
	"ogółem": 99.4,
	"year": "Toruń"
	}, {
	"w1": "2019",
	"ogółem": 102.7,
	"year": "Warszawa"
	}, {
	"w1": "2019",
	"ogółem": 101.1,
	"year": "Wrocław"
	}, {
	"w1": "2019",
	"ogółem": 101.8,
	"year": "Zielona Góra"
	}],
    // Data set #5
    [{
	"w1": "2018",
	"ogółem": 100.5,
	"year": "Białystok"
	}, {
	"w1": "2018",
	"ogółem": 98.5,
	"year": "Bydgoszcz"
	}, {
	"w1": "2018",
	"ogółem": 100.9,
	"year": "Gdańsk"
	}, {
	"w1": "2018",
	"ogółem": 100.1,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2018",
	"ogółem": 98.2,
	"year": "Katowice"
	}, {
	"w1": "2018",
	"ogółem": 98.9,
	"year": "Kielce"
	}, {
	"w1": "2018",
	"ogółem": 101.3,
	"year": "Kraków"
	}, {
	"w1": "2018",
	"ogółem": 99.7,
	"year": "Lublin"
	}, {
	"w1": "2018",
	"ogółem": 97.8,
	"year": "Łódź"
	}, {
	"w1": "2018",
	"ogółem": 99.4,
	"year": "Olsztyn"
	}, {
	"w1": "2018",
	"ogółem": 107.7,
	"year": "Opole"
	}, {
	"w1": "2018",
	"ogółem": 98.9,
	"year": "Poznań"
	}, {
	"w1": "2018",
	"ogółem": 103.0,
	"year": "Rzeszów"
	}, {
	"w1": "2018",
	"ogółem": 99.2,
	"year": "Szczecin"
	}, {
	"w1": "2018",
	"ogółem": 99.7,
	"year": "Toruń"
	}, {
	"w1": "2018",
	"ogółem": 101.9,
	"year": "Warszawa"
	}, {
	"w1": "2018",
	"ogółem": 100.8,
	"year": "Wrocław"
	}, {
	"w1": "2018",
	"ogółem": 101.1,
	"year": "Zielona Góra"
	}],
    // Data set #6
    [{
	"w1": "2017",
	"ogółem": 100.4,
	"year": "Białystok"
	}, {
	"w1": "2017",
	"ogółem": 99.1,
	"year": "Bydgoszcz"
	}, {
	"w1": "2017",
	"ogółem": 100.4,
	"year": "Gdańsk"
	}, {
	"w1": "2017",
	"ogółem": 100.4,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2017",
	"ogółem": 98.8,
	"year": "Katowice"
	}, {
	"w1": "2017",
	"ogółem": 99.4,
	"year": "Kielce"
	}, {
	"w1": "2017",
	"ogółem": 100.8,
	"year": "Kraków"
	}, {
	"w1": "2017",
	"ogółem": 99.7,
	"year": "Lublin"
	}, {
	"w1": "2017",
	"ogółem": 98.5,
	"year": "Łódź"
	}, {
	"w1": "2017",
	"ogółem": 99.8,
	"year": "Olsztyn"
	}, {
	"w1": "2017",
	"ogółem": 107.7,
	"year": "Opole"
	}, {
	"w1": "2017",
	"ogółem": 99.3,
	"year": "Poznań"
	}, {
	"w1": "2017",
	"ogółem": 102.0,
	"year": "Rzeszów"
	}, {
	"w1": "2017",
	"ogółem": 99.6,
	"year": "Szczecin"
	}, {
	"w1": "2017",
	"ogółem": 99.9,
	"year": "Toruń"
	}, {
	"w1": "2017",
	"ogółem": 101.2,
	"year": "Warszawa"
	}, {
	"w1": "2017",
	"ogółem": 100.4,
	"year": "Wrocław"
	}, {
	"w1": "2017",
	"ogółem": 100.8,
	"year": "Zielona Góra"
	}],
    // Data set #7
    [{
	"w1": "2016",
	"ogółem": 100.2,
	"year": "Białystok"
	}, {
	"w1": "2016",
	"ogółem": 99.5,
	"year": "Bydgoszcz"
	}, {
	"w1": "2016",
	"ogółem": 100.3,
	"year": "Gdańsk"
	}, {
	"w1": "2016",
	"ogółem": 100.2,
	"year": "Gorzów Wielkopolski"
	}, {
	"w1": "2016",
	"ogółem": 99.4,
	"year": "Katowice"
	}, {
	"w1": "2016",
	"ogółem": 99.8,
	"year": "Kielce"
	}, {
	"w1": "2016",
	"ogółem": 100.6,
	"year": "Kraków"
	}, {
	"w1": "2016",
	"ogółem": 99.9,
	"year": "Lublin"
	}, {
	"w1": "2016",
	"ogółem": 99.4,
	"year": "Łódź"
	}, {
	"w1": "2016",
	"ogółem": 99.7,
	"year": "Olsztyn"
	}, {
	"w1": "2016",
	"ogółem": 99.8,
	"year": "Opole"
	}, {
	"w1": "2016",
	"ogółem": 99.6,
	"year": "Poznań"
	}, {
	"w1": "2016",
	"ogółem": 100.8,
	"year": "Rzeszów"
	}, {
	"w1": "2016",
	"ogółem": 99.8,
	"year": "Szczecin"
	}, {
	"w1": "2016",
	"ogółem": 99.9,
	"year": "Toruń"
	}, {
	"w1": "2016",
	"ogółem": 100.6,
	"year": "Warszawa"
	}, {
	"w1": "2016",
	"ogółem": 100.3,
	"year": "Wrocław"
	}, {
	"w1": "2016",
	"ogółem": 100.4,
	"year": "Zielona Góra"
	}],
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
	var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
	xRenderer.labels.template.setAll({
    fontSize: 12,
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100
  });

  //xRenderer.labels.template.setAll({
  //  rotation: 0,
  //  centerY: am5.p50,
  //  centerX: am5.p50
  //});

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "year",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  xRenderer.grid.template.setAll({
    location: 1
  })

  xAxis.data.setAll(getData(d));

	var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30, strokeOpacity: 0.1, strokeWidth: 1 });
	yRenderer.labels.template.setAll({
		fontSize: 12,
		strokeOpacity: 0.1
	});

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxPrecision: precyzja,
    max: yMax,
    min: yMin,
    strictMinMax: true,
    baseValue: 100,
    renderer: yRenderer
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: fieldName,
      categoryXField: "year"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY.formatNumber('#,###.0')}",
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
