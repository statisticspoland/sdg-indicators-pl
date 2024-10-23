function createchart7(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2023";
}
if (d==1) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2022";
}
if (d==2) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2021";
}
if (d==3) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2020";
}
if (d==4) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2019";
}
if (d==5) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2018";
}
if (d==6) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2017";
}

if (d==7) {
	document.getElementById("tytuł_7").innerHTML = "Parkings in Park and Ride system in 2016";
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
			"w1": "2023",
			"ogółem": 37,
			"city": "Wrocław"
			}, {
			"w1": "2023",
			"ogółem": 17,
			"city": "Warszawa"
			}, {
			"w1": "2023",
			"ogółem": 8,
			"city": "Gdańsk"
			}, {
			"w1": "2023",
			"ogółem": 6,
			"city": "Kraków"
			}, {
			"w1": "2023",
			"ogółem": 5,
			"city": "Bydgoszcz"
			}, {
			"w1": "2023",
			"ogółem": 4,
			"city": "Lublin"
			}, {
			"w1": "2023",
			"ogółem": 4,
			"city": "Poznań"
			}, {
			"w1": "2023",
			"ogółem": 4,
			"city": "Szczecin"
			}, {
			"w1": "2023",
			"ogółem": 3,
			"city": "Katowice"
			}, {
			"w1": "2023",
			"ogółem": 3,
			"city": "Opole"
			}, {
			"w1": "2023",
			"ogółem": 5,
			"city": "Toruń"
			}, {
			"w1": "2023",
			"ogółem": 1,
			"city": "Białystok"
			}, {
			"w1": "2023",
			"ogółem": 0,
			"city": "Gorzów Wielkopolski"
			}, {
			"w1": "2023",
			"ogółem": 1,
			"city": "Kielce"
			}],


    // Data set #1
    [{
	"w1": "2022",
	"ogółem": 35,
	"city": "Wrocław"
	}, {
	"w1": "2022",
	"ogółem": 16,
	"city": "Warszawa"
	}, {
	"w1": "2022",
	"ogółem": 11,
	"city": "Gdańsk"
	}, {
	"w1": "2022",
	"ogółem": 6,
	"city": "Kraków"
	}, {
	"w1": "2022",
	"ogółem": 5,
	"city": "Bydgoszcz"
	}, {
	"w1": "2022",
	"ogółem": 4,
	"city": "Lublin"
	}, {
	"w1": "2022",
	"ogółem": 4,
	"city": "Poznań"
	}, {
	"w1": "2022",
	"ogółem": 4,
	"city": "Szczecin"
	}, {
	"w1": "2022",
	"ogółem": 3,
	"city": "Katowice"
	}, {
	"w1": "2022",
	"ogółem": 3,
	"city": "Opole"
	}, {
	"w1": "2022",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2022",
	"ogółem": 1,
	"city": "Białystok"
	}, {
	"w1": "2022",
	"ogółem": 1,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2022",
	"ogółem": 1,
	"city": "Kielce"
	}],
	// Data set #2
    [{
	"w1": "2021",
	"ogółem": 34,
	"city": "Wrocław"
	}, {
	"w1": "2021",
	"ogółem": 16,
	"city": "Warszawa"
	}, {
	"w1": "2021",
	"ogółem": 11,
	"city": "Gdańsk"
	}, {
	"w1": "2021",
	"ogółem": 5,
	"city": "Kraków"
	}, {
	"w1": "2021",
	"ogółem": 4,
	"city": "Poznań"
	}, {
	"w1": "2021",
	"ogółem": 3,
	"city": "Katowice"
	}, {
	"w1": "2021",
	"ogółem": 3,
	"city": "Lublin"
	}, {
	"w1": "2021",
	"ogółem": 3,
	"city": "Szczecin"
	}, {
	"w1": "2021",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2021",
	"ogółem": 2,
	"city": "Opole"
	}, {
	"w1": "2021",
	"ogółem": 1,
	"city": "Białystok"
	}, {
	"w1": "2021",
	"ogółem": 1,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2021",
	"ogółem": 1,
	"city": "Kielce"
	}, {
	"w1": "2021",
	"ogółem": 0,
	"city": "Bydgoszcz"
	}],
    // Data set #3
    [{
	"w1": "2020",
	"ogółem": 25,
	"city": "Wrocław"
	}, {
	"w1": "2020",
	"ogółem": 16,
	"city": "Warszawa"
	}, {
	"w1": "2020",
	"ogółem": 11,
	"city": "Gdańsk"
	}, {
	"w1": "2020",
	"ogółem": 5,
	"city": "Kraków"
	}, {
	"w1": "2020",
	"ogółem": 3,
	"city": "Katowice"
	}, {
	"w1": "2020",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2020",
	"ogółem": 2,
	"city": "Szczecin"
	}, {
	"w1": "2020",
	"ogółem": 1,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2020",
	"ogółem": 1,
	"city": "Kielce"
	}, {
	"w1": "2020",
	"ogółem": 1,
	"city": "Lublin"
	}, {
	"w1": "2020",
	"ogółem": 1,
	"city": "Opole"
	}, {
	"w1": "2020",
	"ogółem": 1,
	"city": "Poznań"
	}, {
	"w1": "2020",
	"ogółem": 0,
	"city": "Białystok"
	}, {
	"w1": "2020",
	"ogółem": 0,
	"city": "Bydgoszcz"
	}],
    // Data set #4
    [{
	"w1": "2019",
	"ogółem": 25,
	"city": "Wrocław"
	}, {
	"w1": "2019",
	"ogółem": 16,
	"city": "Warszawa"
	}, {
	"w1": "2019",
	"ogółem": 10,
	"city": "Gdańsk"
	}, {
	"w1": "2019",
	"ogółem": 5,
	"city": "Kraków"
	}, {
	"w1": "2019",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2019",
	"ogółem": 2,
	"city": "Szczecin"
	}, {
	"w1": "2019",
	"ogółem": 1,
	"city": "Kielce"
	}, {
	"w1": "2019",
	"ogółem": 1,
	"city": "Lublin"
	}, {
	"w1": "2019",
	"ogółem": 1,
	"city": "Poznań"
	}, {
	"w1": "2019",
	"ogółem": 0,
	"city": "Białystok"
	}, {
	"w1": "2019",
	"ogółem": 0,
	"city": "Bydgoszcz"
	}, {
	"w1": "2019",
	"ogółem": 0,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2019",
	"ogółem": 0,
	"city": "Katowice"
	}, {
	"w1": "2019",
	"ogółem": 0,
	"city": "Opole"
	}],
    // Data set #5
    [{
	"w1": "2018",
	"ogółem": 16,
	"city": "Warszawa"
	}, {
	"w1": "2018",
	"ogółem": 13,
	"city": "Wrocław"
	}, {
	"w1": "2018",
	"ogółem": 9,
	"city": "Gdańsk"
	}, {
	"w1": "2018",
	"ogółem": 4,
	"city": "Kraków"
	}, {
	"w1": "2018",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2018",
	"ogółem": 2,
	"city": "Szczecin"
	}, {
	"w1": "2018",
	"ogółem": 1,
	"city": "Kielce"
	}, {
	"w1": "2018",
	"ogółem": 1,
	"city": "Opole"
	}, {
	"w1": "2018",
	"ogółem": 1,
	"city": "Poznań"
	}, {
	"w1": "2018",
	"ogółem": 0,
	"city": "Białystok"
	}, {
	"w1": "2018",
	"ogółem": 0,
	"city": "Bydgoszcz"
	}, {
	"w1": "2018",
	"ogółem": 0,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2018",
	"ogółem": 0,
	"city": "Katowice"
	}, {
	"w1": "2018",
	"ogółem": 0,
	"city": "Lublin"
	}],
    // Data set #6
    [{
	"w1": "2017",
	"ogółem": 14,
	"city": "Warszawa"
	}, {
	"w1": "2017",
	"ogółem": 9,
	"city": "Gdańsk"
	}, {
	"w1": "2017",
	"ogółem": 7,
	"city": "Wrocław"
	}, {
	"w1": "2017",
	"ogółem": 3,
	"city": "Kraków"
	}, {
	"w1": "2017",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2017",
	"ogółem": 1,
	"city": "Szczecin"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Białystok"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Bydgoszcz"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Katowice"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Kielce"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Lublin"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Opole"
	}, {
	"w1": "2017",
	"ogółem": 0,
	"city": "Poznań"
	}],
    // Data set #7
    [{
	"w1": "2016",
	"ogółem": 14,
	"city": "Warszawa"
	}, {
	"w1": "2016",
	"ogółem": 8,
	"city": "Gdańsk"
	}, {
	"w1": "2016",
	"ogółem": 7,
	"city": "Wrocław"
	}, {
	"w1": "2016",
	"ogółem": 3,
	"city": "Toruń"
	}, {
	"w1": "2016",
	"ogółem": 2,
	"city": "Kraków"
	}, {
	"w1": "2016",
	"ogółem": 1,
	"city": "Szczecin"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Białystok"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Bydgoszcz"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Gorzów Wielkopolski"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Katowice"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Kielce"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Lublin"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Opole"
	}, {
	"w1": "2016",
	"ogółem": 0,
	"city": "Poznań"
	}],
  ];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

root.numberFormatter.set("numberFormat", "#,###");

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
    baseValue: 0,
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
      tooltipText: "{categoryX}: {valueY.formatNumber('#,###')}",
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
