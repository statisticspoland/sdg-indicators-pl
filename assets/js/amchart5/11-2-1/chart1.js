function createchart1(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2024 r. (rok 2015=100)";
}
if (d==1) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2023 r. (rok 2015=100)";
}
if (d==2) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2022 r. (rok 2015=100)";
}
if (d==3) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2021 r. (rok 2015=100)";
}
if (d==4) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2020 r. (rok 2015=100)";
}
if (d==5) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2019 r. (rok 2015=100)";
}
if (d==6) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2018 r. (rok 2015=100)";
}
if (d==7) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2017 r. (rok 2015=100)";
}
if (d==8) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w 2016 r. (rok 2015=100)";
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
	"w1": "2024",
	"ogółem": 98.1,
	"city": "Białystok"
	}, {
	"w1": "2024",
	"ogółem": 91.1,
	"city": "Bydgoszcz"
	}, {
	"w1": "2024",
	"ogółem": 105.7,
	"city": "Gdańsk"
	}, {
	"w1": "2024",
	"ogółem": 92.7,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2024",
	"ogółem": 93.0,
	"city": "Katowice"
	}, {
	"w1": "2024",
	"ogółem": 91.2,
	"city": "Kielce"
	}, {
	"w1": "2024",
	"ogółem": 106.3,
	"city": "Kraków"
	}, {
	"w1": "2024",
	"ogółem": 96.4,
	"city": "Lublin"
	}, {
	"w1": "2024",
	"ogółem": 92.1,
	"city": "Łódź"
	}, {
	"w1": "2024",
	"ogółem": 95.9,
	"city": "Olsztyn"
	}, {
	"w1": "2024",
	"ogółem": 105.5,
	"city": "Opole"
	}, {
	"w1": "2024",
	"ogółem": 98.9,
	"city": "Poznań"
	}, {
	"w1": "2024",
	"ogółem": 106.7,
	"city": "Rzeszów"
	}, {
	"w1": "2024",
	"ogółem": 95.3,
	"city": "Szczecin"
	}, {
	"w1": "2024",
	"ogółem": 95.6,
	"city": "Toruń"
	}, {
	"w1": "2024",
	"ogółem": 106.9,
	"city": "Warszawa"
	}, {
	"w1": "2024",
	"ogółem": 105.8,
	"city": "Wrocław"
	}, {
	"w1": "2024",
	"ogółem": 100.1,
	"city": "Zielona Góra"
	}],
    // Data set #2
    [{
	"w1": "2023",
	"ogółem": 98.5,
	"city": "Białystok"
	}, {
	"w1": "2023",
	"ogółem": 91.8,
	"city": "Bydgoszcz"
	}, {
	"w1": "2023",
	"ogółem": 105.4,
	"city": "Gdańsk"
	}, {
	"w1": "2023",
	"ogółem": 93.1,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2023",
	"ogółem": 93.1,
	"city": "Katowice"
	}, {
	"w1": "2023",
	"ogółem": 92.0,
	"city": "Kielce"
	}, {
	"w1": "2023",
	"ogółem": 105.9,
	"city": "Kraków"
	}, {
	"w1": "2023",
	"ogółem": 96.7,
	"city": "Lublin"
	}, {
	"w1": "2023",
	"ogółem": 93.0,
	"city": "Łódź"
	}, {
	"w1": "2023",
	"ogółem": 96.5,
	"city": "Olsztyn"
	}, {
	"w1": "2023",
	"ogółem": 106.0,
	"city": "Opole"
	}, {
	"w1": "2023",
	"ogółem": 99.3,
	"city": "Poznań"
	}, {
	"w1": "2023",
	"ogółem": 106.1,
	"city": "Rzeszów"
	}, {
	"w1": "2023",
	"ogółem": 95.9,
	"city": "Szczecin"
	}, {
	"w1": "2023",
	"ogółem": 96.1,
	"city": "Toruń"
	}, {
	"w1": "2023",
	"ogółem": 106.7,
	"city": "Warszawa"
	}, {
	"w1": "2023",
	"ogółem": 106.0,
	"city": "Wrocław"
	}, {
	"w1": "2023",
	"ogółem": 100.2,
	"city": "Zielona Góra"
	}],
    // Data set #3
    [{
	"w1": "2022",
	"ogółem": 98.9,
	"city": "Białystok"
	}, {
	"w1": "2022",
	"ogółem": 92.8,
	"city": "Bydgoszcz"
	}, {
	"w1": "2022",
	"ogółem": 105.2,
	"city": "Gdańsk"
	}, {
	"w1": "2022",
	"ogółem": 94.1,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2022",
	"ogółem": 93.4,
	"city": "Katowice"
	}, {
	"w1": "2022",
	"ogółem": 92.8,
	"city": "Kielce"
	}, {
	"w1": "2022",
	"ogółem": 105.5,
	"city": "Kraków"
	}, {
	"w1": "2022",
	"ogółem": 97.2,
	"city": "Lublin"
	}, {
	"w1": "2022",
	"ogółem": 93.9,
	"city": "Łódź"
	}, {
	"w1": "2022",
	"ogółem": 97.0,
	"city": "Olsztyn"
	}, {
	"w1": "2022",
	"ogółem": 106.3,
	"city": "Opole"
	}, {
	"w1": "2022",
	"ogółem": 99.8,
	"city": "Poznań"
	}, {
	"w1": "2022",
	"ogółem": 106.1,
	"city": "Rzeszów"
	}, {
	"w1": "2022",
	"ogółem": 96.5,
	"city": "Szczecin"
	}, {
	"w1": "2022",
	"ogółem": 96.5,
	"city": "Toruń"
	}, {
	"w1": "2022",
	"ogółem": 106.7,
	"city": "Warszawa"
	}, {
	"w1": "2022",
	"ogółem": 106.0,
	"city": "Wrocław"
	}, {
	"w1": "2022",
	"ogółem": 100.4,
	"city": "Zielona Góra"
	}],
	// Data set #4
    [{
	"w1": "2021",
	"ogółem": 99.1,
	"city": "Białystok"
	}, {
	"w1": "2021",
	"ogółem": 93.9,
	"city": "Bydgoszcz"
	}, {
	"w1": "2021",
	"ogółem": 105.2,
	"city": "Gdańsk"
	}, {
	"w1": "2021",
	"ogółem": 95.4,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2021",
	"ogółem": 94.3,
	"city": "Katowice"
	}, {
	"w1": "2021",
	"ogółem": 93.7,
	"city": "Kielce"
	}, {
	"w1": "2021",
	"ogółem": 105.5,
	"city": "Kraków"
	}, {
	"w1": "2021",
	"ogółem": 97.7,
	"city": "Lublin"
	}, {
	"w1": "2021",
	"ogółem": 94.8,
	"city": "Łódź"
	}, {
	"w1": "2021",
	"ogółem": 97.6,
	"city": "Olsztyn"
	}, {
	"w1": "2021",
	"ogółem": 106.6,
	"city": "Opole"
	}, {
	"w1": "2021",
	"ogółem": 100.5,
	"city": "Poznań"
	}, {
	"w1": "2021",
	"ogółem": 105.6,
	"city": "Rzeszów"
	}, {
	"w1": "2021",
	"ogółem": 97.2,
	"city": "Szczecin"
	}, {
	"w1": "2021",
	"ogółem": 97.2,
	"city": "Toruń"
	}, {
	"w1": "2021",
	"ogółem": 106.8,
	"city": "Warszawa"
	}, {
	"w1": "2021",
	"ogółem": 106.1,
	"city": "Wrocław"
	}, {
	"w1": "2021",
	"ogółem": 100.7,
	"city": "Zielona Góra"
	}],
    // Data set #5
    [{
	"w1": "2020",
	"ogółem": 99.6,
	"city": "Białystok"
	}, {
	"w1": "2020",
	"ogółem": 95.3,
	"city": "Bydgoszcz"
	}, {
	"w1": "2020",
	"ogółem": 105.3,
	"city": "Gdańsk"
	}, {
	"w1": "2020",
	"ogółem": 97.4,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2020",
	"ogółem": 95.5,
	"city": "Katowice"
	}, {
	"w1": "2020",
	"ogółem": 94.6,
	"city": "Kielce"
	}, {
	"w1": "2020",
	"ogółem": 105.2,
	"city": "Kraków"
	}, {
	"w1": "2020",
	"ogółem": 98.4,
	"city": "Lublin"
	}, {
	"w1": "2020",
	"ogółem": 96.0,
	"city": "Łódź"
	}, {
	"w1": "2020",
	"ogółem": 98.4,
	"city": "Olsztyn"
	}, {
	"w1": "2020",
	"ogółem": 107.2,
	"city": "Opole"
	}, {
	"w1": "2020",
	"ogółem": 101.0,
	"city": "Poznań"
	}, {
	"w1": "2020",
	"ogółem": 104.6,
	"city": "Rzeszów"
	}, {
	"w1": "2020",
	"ogółem": 97.9,
	"city": "Szczecin"
	}, {
	"w1": "2020",
	"ogółem": 98.1,
	"city": "Toruń"
	}, {
	"w1": "2020",
	"ogółem": 106.7,
	"city": "Warszawa"
	}, {
	"w1": "2020",
	"ogółem": 106.0,
	"city": "Wrocław"
	}, {
	"w1": "2020",
	"ogółem": 101.0,
	"city": "Zielona Góra"
	}],
    // Data set #6
    [{
	"w1": "2019",
	"ogółem": 100.5,
	"city": "Białystok"
	}, {
	"w1": "2019",
	"ogółem": 97.9,
	"city": "Bydgoszcz"
	}, {
	"w1": "2019",
	"ogółem": 101.9,
	"city": "Gdańsk"
	}, {
	"w1": "2019",
	"ogółem": 99.9,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2019",
	"ogółem": 97.6,
	"city": "Katowice"
	}, {
	"w1": "2019",
	"ogółem": 98.4,
	"city": "Kielce"
	}, {
	"w1": "2019",
	"ogółem": 102.4,
	"city": "Kraków"
	}, {
	"w1": "2019",
	"ogółem": 99.7,
	"city": "Lublin"
	}, {
	"w1": "2019",
	"ogółem": 97.0,
	"city": "Łódź"
	}, {
	"w1": "2019",
	"ogółem": 99.2,
	"city": "Olsztyn"
	}, {
	"w1": "2019",
	"ogółem": 107.7,
	"city": "Opole"
	}, {
	"w1": "2019",
	"ogółem": 98.6,
	"city": "Poznań"
	}, {
	"w1": "2019",
	"ogółem": 105.5,
	"city": "Rzeszów"
	}, {
	"w1": "2019",
	"ogółem": 99.1,
	"city": "Szczecin"
	}, {
	"w1": "2019",
	"ogółem": 99.4,
	"city": "Toruń"
	}, {
	"w1": "2019",
	"ogółem": 102.7,
	"city": "Warszawa"
	}, {
	"w1": "2019",
	"ogółem": 101.1,
	"city": "Wrocław"
	}, {
	"w1": "2019",
	"ogółem": 101.8,
	"city": "Zielona Góra"
	}],
    // Data set #7
    [{
	"w1": "2018",
	"ogółem": 100.5,
	"city": "Białystok"
	}, {
	"w1": "2018",
	"ogółem": 98.5,
	"city": "Bydgoszcz"
	}, {
	"w1": "2018",
	"ogółem": 100.9,
	"city": "Gdańsk"
	}, {
	"w1": "2018",
	"ogółem": 100.1,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2018",
	"ogółem": 98.2,
	"city": "Katowice"
	}, {
	"w1": "2018",
	"ogółem": 98.9,
	"city": "Kielce"
	}, {
	"w1": "2018",
	"ogółem": 101.3,
	"city": "Kraków"
	}, {
	"w1": "2018",
	"ogółem": 99.7,
	"city": "Lublin"
	}, {
	"w1": "2018",
	"ogółem": 97.8,
	"city": "Łódź"
	}, {
	"w1": "2018",
	"ogółem": 99.4,
	"city": "Olsztyn"
	}, {
	"w1": "2018",
	"ogółem": 107.7,
	"city": "Opole"
	}, {
	"w1": "2018",
	"ogółem": 98.9,
	"city": "Poznań"
	}, {
	"w1": "2018",
	"ogółem": 103.0,
	"city": "Rzeszów"
	}, {
	"w1": "2018",
	"ogółem": 99.2,
	"city": "Szczecin"
	}, {
	"w1": "2018",
	"ogółem": 99.7,
	"city": "Toruń"
	}, {
	"w1": "2018",
	"ogółem": 101.9,
	"city": "Warszawa"
	}, {
	"w1": "2018",
	"ogółem": 100.8,
	"city": "Wrocław"
	}, {
	"w1": "2018",
	"ogółem": 101.1,
	"city": "Zielona Góra"
	}],
    // Data set #8
    [{
	"w1": "2017",
	"ogółem": 100.4,
	"city": "Białystok"
	}, {
	"w1": "2017",
	"ogółem": 99.1,
	"city": "Bydgoszcz"
	}, {
	"w1": "2017",
	"ogółem": 100.4,
	"city": "Gdańsk"
	}, {
	"w1": "2017",
	"ogółem": 100.4,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2017",
	"ogółem": 98.8,
	"city": "Katowice"
	}, {
	"w1": "2017",
	"ogółem": 99.4,
	"city": "Kielce"
	}, {
	"w1": "2017",
	"ogółem": 100.8,
	"city": "Kraków"
	}, {
	"w1": "2017",
	"ogółem": 99.7,
	"city": "Lublin"
	}, {
	"w1": "2017",
	"ogółem": 98.5,
	"city": "Łódź"
	}, {
	"w1": "2017",
	"ogółem": 99.8,
	"city": "Olsztyn"
	}, {
	"w1": "2017",
	"ogółem": 107.7,
	"city": "Opole"
	}, {
	"w1": "2017",
	"ogółem": 99.3,
	"city": "Poznań"
	}, {
	"w1": "2017",
	"ogółem": 102.0,
	"city": "Rzeszów"
	}, {
	"w1": "2017",
	"ogółem": 99.6,
	"city": "Szczecin"
	}, {
	"w1": "2017",
	"ogółem": 99.9,
	"city": "Toruń"
	}, {
	"w1": "2017",
	"ogółem": 101.2,
	"city": "Warszawa"
	}, {
	"w1": "2017",
	"ogółem": 100.4,
	"city": "Wrocław"
	}, {
	"w1": "2017",
	"ogółem": 100.8,
	"city": "Zielona Góra"
	}],
    // Data set #9
    [{
	"w1": "2016",
	"ogółem": 100.2,
	"city": "Białystok"
	}, {
	"w1": "2016",
	"ogółem": 99.5,
	"city": "Bydgoszcz"
	}, {
	"w1": "2016",
	"ogółem": 100.3,
	"city": "Gdańsk"
	}, {
	"w1": "2016",
	"ogółem": 100.2,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2016",
	"ogółem": 99.4,
	"city": "Katowice"
	}, {
	"w1": "2016",
	"ogółem": 99.8,
	"city": "Kielce"
	}, {
	"w1": "2016",
	"ogółem": 100.6,
	"city": "Kraków"
	}, {
	"w1": "2016",
	"ogółem": 99.9,
	"city": "Lublin"
	}, {
	"w1": "2016",
	"ogółem": 99.4,
	"city": "Łódź"
	}, {
	"w1": "2016",
	"ogółem": 99.7,
	"city": "Olsztyn"
	}, {
	"w1": "2016",
	"ogółem": 99.8,
	"city": "Opole"
	}, {
	"w1": "2016",
	"ogółem": 99.6,
	"city": "Poznań"
	}, {
	"w1": "2016",
	"ogółem": 100.8,
	"city": "Rzeszów"
	}, {
	"w1": "2016",
	"ogółem": 99.8,
	"city": "Szczecin"
	}, {
	"w1": "2016",
	"ogółem": 99.9,
	"city": "Toruń"
	}, {
	"w1": "2016",
	"ogółem": 100.6,
	"city": "Warszawa"
	}, {
	"w1": "2016",
	"ogółem": 100.3,
	"city": "Wrocław"
	}, {
	"w1": "2016",
	"ogółem": 100.4,
	"city": "Zielona Góra"
	}],
  ];

  return data[index];
}

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
    categoryField: "city",
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
      categoryXField: "city"
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
