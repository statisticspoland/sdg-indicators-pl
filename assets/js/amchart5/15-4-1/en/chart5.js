function createchart5(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2023";
}
if (d==1) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2022";
}
if (d==2) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2021";
}
if (d==3) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2020";
}
if (d==4) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2019";
}
if (d==5) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2018";
}
if (d==6) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2017";
}
if (d==7) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2016";
}
if (d==8) {
	document.getElementById("tytuł_5").innerHTML = "Number of monuments of nature per 100 km<sup>2</sup> in 2015";
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
			// Data set #0
			[{
			"w1": "2023",
			"ogółem": 11.1,
			"city": "Zachodniopomorskie"
			}, {
			"w1": "2023",
			"ogółem": 12.7,
			"city": "Wielkopolskie"
			}, {
			"w1": "2023",
			"ogółem": 9.5,
			"city": "Warmińsko-Mazurskie"
			}, {
			"w1": "2023",
			"ogółem": 6.7,
			"city": "Świętokrzyskie"
			}, {
			"w1": "2023",
			"ogółem": 12.0,
			"city": "Śląskie"
			}, {
			"w1": "2023",
			"ogółem": 14.5,
			"city": "Pomorskie"
			}, {
			"w1": "2023",
			"ogółem": 9.7,
			"city": "Podlaskie"
			}, {
			"w1": "2023",
			"ogółem": 12.6,
			"city": "Podkarpackie"
			}, {
			"w1": "2023",
			"ogółem": 7.8,
			"city": "Opolskie"
			}, {
			"w1": "2023",
			"ogółem": 11.3,
			"city": "Mazowieckie"
			}, {
			"w1": "2023",
			"ogółem": 15.0,
			"city": "Małopolskie"
			}, {
			"w1": "2023",
			"ogółem": 11.5,
			"city": "Łódzkie"
			}, {
			"w1": "2023",
			"ogółem": 10.1,
			"city": "Lubuskie"
			}, {
			"w1": "2023",
			"ogółem": 5.7,
			"city": "Lubelskie"
			}, {
			"w1": "2023",
			"ogółem": 12.9,
			"city": "Kujawsko-Pomorskie"
			}, {
			"w1": "2023",
			"ogółem": 13.2,
			"city": "Dolnośląskie"
			}, {
			"w1": "2023",
			"ogółem": 11.1,
			"city": "POLAND"
			}],
			// Data set #1
			[{
				"w1": "2022",
				"ogółem": 11.3,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2022",
				"ogółem": 12.8,
				"city": "Wielkopolskie"
				}, {
				"w1": "2022",
				"ogółem": 9.4,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2022",
				"ogółem": 6.7,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2022",
				"ogółem": 11.9,
				"city": "Śląskie"
				}, {
				"w1": "2022",
				"ogółem": 15.2,
				"city": "Pomorskie"
				}, {
				"w1": "2022",
				"ogółem": 9.7,
				"city": "Podlaskie"
				}, {
				"w1": "2022",
				"ogółem": 12.3,
				"city": "Podkarpackie"
				}, {
				"w1": "2022",
				"ogółem": 7.6,
				"city": "Opolskie"
				}, {
				"w1": "2022",
				"ogółem": 11.7,
				"city": "Mazowieckie"
				}, {
				"w1": "2022",
				"ogółem": 14.9,
				"city": "Małopolskie"
				}, {
				"w1": "2022",
				"ogółem": 11.7,
				"city": "Łódzkie"
				}, {
				"w1": "2022",
				"ogółem": 10.1,
				"city": "Lubuskie"
				}, {
				"w1": "2022",
				"ogółem": 5.8,
				"city": "Lubelskie"
				}, {
				"w1": "2022",
				"ogółem": 13.1,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2022",
				"ogółem": 13.2,
				"city": "Dolnośląskie"
				}, {
				"w1": "2022",
				"ogółem": 11.2,
				"city": "POLAND"
				}],
			// Data set #2
			[{
				"w1": "2021",
				"ogółem": 11.6,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2021",
				"ogółem": 13.2,
				"city": "Wielkopolskie"
				}, {
				"w1": "2021",
				"ogółem": 9.5,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2021",
				"ogółem": 6.5,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2021",
				"ogółem": 11.8,
				"city": "Śląskie"
				}, {
				"w1": "2021",
				"ogółem": 15.1,
				"city": "Pomorskie"
				}, {
				"w1": "2021",
				"ogółem": 9.8,
				"city": "Podlaskie"
				}, {
				"w1": "2021",
				"ogółem": 11.8,
				"city": "Podkarpackie"
				}, {
				"w1": "2021",
				"ogółem": 7.2,
				"city": "Opolskie"
				}, {
				"w1": "2021",
				"ogółem": 11.7,
				"city": "Mazowieckie"
				}, {
				"w1": "2021",
				"ogółem": 14.7,
				"city": "Małopolskie"
				}, {
				"w1": "2021",
				"ogółem": 12.1,
				"city": "Łódzkie"
				}, {
				"w1": "2021",
				"ogółem": 10.1,
				"city": "Lubuskie"
				}, {
				"w1": "2021",
				"ogółem": 5.7,
				"city": "Lubelskie"
				}, {
				"w1": "2021",
				"ogółem": 13.1,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2021",
				"ogółem": 13.0,
				"city": "Dolnośląskie"
				}, {
				"w1": "2021",
				"ogółem": 11.2,
				"city": "POLAND"
				}],
			// Data set #3
			[{
				"w1": "2020",
				"ogółem": 11.8,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2020",
				"ogółem": 13.5,
				"city": "Wielkopolskie"
				}, {
				"w1": "2020",
				"ogółem": 9.5,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2020",
				"ogółem": 6.3,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2020",
				"ogółem": 11.9,
				"city": "Śląskie"
				}, {
				"w1": "2020",
				"ogółem": 15.0,
				"city": "Pomorskie"
				}, {
				"w1": "2020",
				"ogółem": 9.9,
				"city": "Podlaskie"
				}, {
				"w1": "2020",
				"ogółem": 11.7,
				"city": "Podkarpackie"
				}, {
				"w1": "2020",
				"ogółem": 7.0,
				"city": "Opolskie"
				}, {
				"w1": "2020",
				"ogółem": 11.6,
				"city": "Mazowieckie"
				}, {
				"w1": "2020",
				"ogółem": 14.5,
				"city": "Małopolskie"
				}, {
				"w1": "2020",
				"ogółem": 11.8,
				"city": "Łódzkie"
				}, {
				"w1": "2020",
				"ogółem": 10.0,
				"city": "Lubuskie"
				}, {
				"w1": "2020",
				"ogółem": 5.7,
				"city": "Lubelskie"
				}, {
				"w1": "2020",
				"ogółem": 13.0,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2020",
				"ogółem": 12.8,
				"city": "Dolnośląskie"
				}, {
				"w1": "2020",
				"ogółem": 11.2,
				"city": "POLAND"
				}],
			// Data set #4
			[{
				"w1": "2019",
				"ogółem": 11.5,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2019",
				"ogółem": 12.6,
				"city": "Wielkopolskie"
				}, {
				"w1": "2019",
				"ogółem": 9.6,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2019",
				"ogółem": 6.2,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2019",
				"ogółem": 11.9,
				"city": "Śląskie"
				}, {
				"w1": "2019",
				"ogółem": 15.2,
				"city": "Pomorskie"
				}, {
				"w1": "2019",
				"ogółem": 9.7,
				"city": "Podlaskie"
				}, {
				"w1": "2019",
				"ogółem": 11.4,
				"city": "Podkarpackie"
				}, {
				"w1": "2019",
				"ogółem": 7.0,
				"city": "Opolskie"
				}, {
				"w1": "2019",
				"ogółem": 11.5,
				"city": "Mazowieckie"
				}, {
				"w1": "2019",
				"ogółem": 14.4,
				"city": "Małopolskie"
				}, {
				"w1": "2019",
				"ogółem": 13.2,
				"city": "Łódzkie"
				}, {
				"w1": "2019",
				"ogółem": 10.0,
				"city": "Lubuskie"
				}, {
				"w1": "2019",
				"ogółem": 5.7,
				"city": "Lubelskie"
				}, {
				"w1": "2019",
				"ogółem": 13.7,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2019",
				"ogółem": 12.8,
				"city": "Dolnośląskie"
				}, {
				"w1": "2019",
				"ogółem": 11.2,
				"city": "POLAND"
				}],
			// Data set #5
			[{
				"w1": "2018",
				"ogółem": 12.0,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2018",
				"ogółem": 12.8,
				"city": "Wielkopolskie"
				}, {
				"w1": "2018",
				"ogółem": 9.9,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2018",
				"ogółem": 6.1,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2018",
				"ogółem": 12.1,
				"city": "Śląskie"
				}, {
				"w1": "2018",
				"ogółem": 15.2,
				"city": "Pomorskie"
				}, {
				"w1": "2018",
				"ogółem": 9.7,
				"city": "Podlaskie"
				}, {
				"w1": "2018",
				"ogółem": 10.2,
				"city": "Podkarpackie"
				}, {
				"w1": "2018",
				"ogółem": 7.0,
				"city": "Opolskie"
				}, {
				"w1": "2018",
				"ogółem": 11.4,
				"city": "Mazowieckie"
				}, {
				"w1": "2018",
				"ogółem": 14.5,
				"city": "Małopolskie"
				}, {
				"w1": "2018",
				"ogółem": 13.3,
				"city": "Łódzkie"
				}, {
				"w1": "2018",
				"ogółem": 9.9,
				"city": "Lubuskie"
				}, {
				"w1": "2018",
				"ogółem": 5.8,
				"city": "Lubelskie"
				}, {
				"w1": "2018",
				"ogółem": 13.9,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2018",
				"ogółem": 12.9,
				"city": "Dolnośląskie"
				}, {
				"w1": "2018",
				"ogółem": 11.2,
				"city": "POLAND"
				}],
			// Data set #6
			[{
				"w1": "2017",
				"ogółem": 12.7,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2017",
				"ogółem": 12.9,
				"city": "Wielkopolskie"
				}, {
				"w1": "2017",
				"ogółem": 10.2,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2017",
				"ogółem": 6.2,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2017",
				"ogółem": 12.4,
				"city": "Śląskie"
				}, {
				"w1": "2017",
				"ogółem": 15.3,
				"city": "Pomorskie"
				}, {
				"w1": "2017",
				"ogółem": 9.8,
				"city": "Podlaskie"
				}, {
				"w1": "2017",
				"ogółem": 9.5,
				"city": "Podkarpackie"
				}, {
				"w1": "2017",
				"ogółem": 7.5,
				"city": "Opolskie"
				}, {
				"w1": "2017",
				"ogółem": 11.8,
				"city": "Mazowieckie"
				}, {
				"w1": "2017",
				"ogółem": 14.6,
				"city": "Małopolskie"
				}, {
				"w1": "2017",
				"ogółem": 17.0,
				"city": "Łódzkie"
				}, {
				"w1": "2017",
				"ogółem": 9.9,
				"city": "Lubuskie"
				}, {
				"w1": "2017",
				"ogółem": 6.0,
				"city": "Lubelskie"
				}, {
				"w1": "2017",
				"ogółem": 14.8,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2017",
				"ogółem": 12.6,
				"city": "Dolnośląskie"
				}, {
				"w1": "2017",
				"ogółem": 11.6,
				"city": "POLAND"
				}],
			// Data set #7
			[{
				"w1": "2016",
				"ogółem": 12.9,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2016",
				"ogółem": 13.1,
				"city": "Wielkopolskie"
				}, {
				"w1": "2016",
				"ogółem": 10.6,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2016",
				"ogółem": 6.1,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2016",
				"ogółem": 12.4,
				"city": "Śląskie"
				}, {
				"w1": "2016",
				"ogółem": 15.4,
				"city": "Pomorskie"
				}, {
				"w1": "2016",
				"ogółem": 9.9,
				"city": "Podlaskie"
				}, {
				"w1": "2016",
				"ogółem": 9.0,
				"city": "Podkarpackie"
				}, {
				"w1": "2016",
				"ogółem": 7.5,
				"city": "Opolskie"
				}, {
				"w1": "2016",
				"ogółem": 12.0,
				"city": "Mazowieckie"
				}, {
				"w1": "2016",
				"ogółem": 14.2,
				"city": "Małopolskie"
				}, {
				"w1": "2016",
				"ogółem": 17.8,
				"city": "Łódzkie"
				}, {
				"w1": "2016",
				"ogółem": 9.8,
				"city": "Lubuskie"
				}, {
				"w1": "2016",
				"ogółem": 6.0,
				"city": "Lubelskie"
				}, {
				"w1": "2016",
				"ogółem": 14.8,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2016",
				"ogółem": 12.7,
				"city": "Dolnośląskie"
				}, {
				"w1": "2016",
				"ogółem": 11.7,
				"city": "POLAND"
				}],
			// Data set #8
			[{
				"w1": "2015",
				"ogółem": 12.9,
				"city": "Zachodniopomorskie"
				}, {
				"w1": "2015",
				"ogółem": 13.0,
				"city": "Wielkopolskie"
				}, {
				"w1": "2015",
				"ogółem": 10.6,
				"city": "Warmińsko-Mazurskie"
				}, {
				"w1": "2015",
				"ogółem": 6.1,
				"city": "Świętokrzyskie"
				}, {
				"w1": "2015",
				"ogółem": 12.5,
				"city": "Śląskie"
				}, {
				"w1": "2015",
				"ogółem": 15.4,
				"city": "Pomorskie"
				}, {
				"w1": "2015",
				"ogółem": 9.9,
				"city": "Podlaskie"
				}, {
				"w1": "2015",
				"ogółem": 8.7,
				"city": "Podkarpackie"
				}, {
				"w1": "2015",
				"ogółem": 7.3,
				"city": "Opolskie"
				}, {
				"w1": "2015",
				"ogółem": 12.0,
				"city": "Mazowieckie"
				}, {
				"w1": "2015",
				"ogółem": 14.4,
				"city": "Małopolskie"
				}, {
				"w1": "2015",
				"ogółem": 18.0,
				"city": "Łódzkie"
				}, {
				"w1": "2015",
				"ogółem": 9.6,
				"city": "Lubuskie"
				}, {
				"w1": "2015",
				"ogółem": 6.0,
				"city": "Lubelskie"
				}, {
				"w1": "2015",
				"ogółem": 14.8,
				"city": "Kujawsko-Pomorskie"
				}, {
				"w1": "2015",
				"ogółem": 12.7,
				"city": "Dolnośląskie"
				}, {
				"w1": "2015",
				"ogółem": 11.7,
				"city": "POLAND"
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

	series.columns.template.adapters.add("fill", function(fill, target) {
        if (target.dataItem.get("categoryY") == "POLAND") {
        	return am5.color(0x674EA7);
        }
        else {
          return fill;
        }
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
