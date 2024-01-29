function createchart1(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2022 roku (km<sup>2</sup>)";
}
if (d==1) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2021 roku (km<sup>2</sup>)";
}
if (d==2) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2020 roku (km<sup>2</sup>)";
}
if (d==3) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2019 roku (km<sup>2</sup>)";
}
if (d==4) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2018 roku (km<sup>2</sup>)";
}
if (d==5) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2017 roku (km<sup>2</sup>)";
}
if (d==6) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2016 roku (km<sup>2</sup>)";
}
if (d==7) {
	document.getElementById("tytuł_1").innerHTML = "Powierzchnia miast w 2015 roku (km<sup>2</sup>)";
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
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2022",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2022",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2022",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2022",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2022",
	"ogółem": 278,
	"year": "Zielona Góra"
	}, {
	"w1": "2022",
	"ogółem": 266,
	"year": "Gdańsk"
	}, {
	"w1": "2022",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2022",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2022",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2022",
	"ogółem": 149,
	"year": "Opole"
	}, {
	"w1": "2022",
	"ogółem": 148,
	"year": "Lublin"
	}, {
	"w1": "2022",
	"ogółem": 129,
	"year": "Rzeszów"
	}, {
	"w1": "2022",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2022",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2022",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2022",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2022",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #2
	[{
	"w1": "2021",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2021",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2021",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2021",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2021",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2021",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2021",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2021",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2021",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2021",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2021",
	"ogółem": 149,
	"year": "Opole"
	}, {
	"w1": "2021",
	"ogółem": 148,
	"year": "Lublin"
	}, {
	"w1": "2021",
	"ogółem": 129,
	"year": "Rzeszów"
	}, {
	"w1": "2021",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2021",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2021",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2021",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2021",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #3
	[{
	"w1": "2020",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2020",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2020",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2020",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2020",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2020",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2020",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2020",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2020",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2020",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2020",
	"ogółem": 149,
	"year": "Opole"
	}, {
	"w1": "2020",
	"ogółem": 148,
	"year": "Lublin"
	}, {
	"w1": "2020",
	"ogółem": 126,
	"year": "Rzeszów"
	}, {
	"w1": "2020",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2020",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2020",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2020",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2020",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #4
	[{
	"w1": "2019",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2019",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2019",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2019",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2019",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2019",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2019",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2019",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2019",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2019",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2019",
	"ogółem": 149,
	"year": "Opole"
	}, {
	"w1": "2019",
	"ogółem": 148,
	"year": "Lublin"
	}, {
	"w1": "2019",
	"ogółem": 126,
	"year": "Rzeszów"
	}, {
	"w1": "2019",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2019",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2019",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2019",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2019",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #5
	[{
	"w1": "2018",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2018",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2018",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2018",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2018",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2018",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2018",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2018",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2018",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2018",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2018",
	"ogółem": 149,
	"year": "Opole"
	}, {
	"w1": "2018",
	"ogółem": 147,
	"year": "Lublin"
	}, {
	"w1": "2018",
	"ogółem": 120,
	"year": "Rzeszów"
	}, {
	"w1": "2018",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2018",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2018",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2018",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2018",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #6
	[{
	"w1": "2017",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2017",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2017",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2017",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2017",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2017",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2017",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2017",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2017",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2017",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2017",
	"ogółem": 149,
	"year": "Opole"
	}, {
	"w1": "2017",
	"ogółem": 147,
	"year": "Lublin"
	}, {
	"w1": "2017",
	"ogółem": 120,
	"year": "Rzeszów"
	}, {
	"w1": "2017",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2017",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2017",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2017",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2017",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #7
	[{
	"w1": "2016",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2016",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2016",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2016",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2016",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2016",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2016",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2016",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2016",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2016",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2016",
	"ogółem": 147,
	"year": "Lublin"
	}, {
	"w1": "2016",
	"ogółem": 117,
	"year": "Rzeszów"
	}, {
	"w1": "2016",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2016",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2016",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2016",
	"ogółem": 97,
	"year": "Opole"
	}, {
	"w1": "2016",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2016",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}],
    // Data set #8
	[{
	"w1": "2015",
	"ogółem": 517,
	"year": "Warszawa"
	}, {
	"w1": "2015",
	"ogółem": 327,
	"year": "Kraków"
	}, {
	"w1": "2015",
	"ogółem": 301,
	"year": "Szczecin"
	}, {
	"w1": "2015",
	"ogółem": 293,
	"year": "Łódź"
	}, {
	"w1": "2015",
	"ogółem": 293,
	"year": "Wrocław"
	}, {
	"w1": "2015",
	"ogółem": 277,
	"year": "Zielona Góra"
	}, {
	"w1": "2015",
	"ogółem": 262,
	"year": "Gdańsk"
	}, {
	"w1": "2015",
	"ogółem": 262,
	"year": "Poznań"
	}, {
	"w1": "2015",
	"ogółem": 176,
	"year": "Bydgoszcz"
	}, {
	"w1": "2015",
	"ogółem": 165,
	"year": "Katowice"
	}, {
	"w1": "2015",
	"ogółem": 147,
	"year": "Lublin"
	}, {
	"w1": "2015",
	"ogółem": 117,
	"year": "Rzeszów"
	}, {
	"w1": "2015",
	"ogółem": 116,
	"year": "Toruń"
	}, {
	"w1": "2015",
	"ogółem": 110,
	"year": "Kielce"
	}, {
	"w1": "2015",
	"ogółem": 102,
	"year": "Białystok"
	}, {
	"w1": "2015",
	"ogółem": 97,
	"year": "Opole"
	}, {
	"w1": "2015",
	"ogółem": 88,
	"year": "Olsztyn"
	}, {
	"w1": "2015",
	"ogółem": 86,
	"year": "Gorzów Wielkopolski"
	}]
  ];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

root.locale = am5locales_pl_PL;
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
