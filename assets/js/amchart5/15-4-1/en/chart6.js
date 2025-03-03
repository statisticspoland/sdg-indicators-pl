function createchart6(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2023 (%)";
}
if (d==1) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2022 (%)";
}
if (d==2) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2021 (%)";
}
if (d==3) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2020 (%)";
}
if (d==4) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2019 (%)";
}
if (d==5) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2018 (%)";
}
if (d==6) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2017 (%)";
}
if (d==7) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2016 (%)";
}
if (d==8) {
	document.getElementById("tytuł_6").innerHTML = "Area of Special Protection Areas of birds in total area in 2015 (%)";
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
		"ogółem": 15.9,
		"year": "POLAND"
		}, {
		"w1": "2023",
		"ogółem": 14.9,
		"year": "Dolnośląskie"
		}, {
		"w1": "2023",
		"ogółem": 8.8,
		"year": "Kujawsko-Pomorskie"
		}, {
		"w1": "2023",
		"ogółem": 13.4,
		"year": "Lubelskie"
		}, {
		"w1": "2023",
		"ogółem": 21.0,
		"year": "Lubuskie"
		}, {
		"w1": "2023",
		"ogółem": 2.2,
		"year": "Łódzkie"
		}, {
		"w1": "2023",
		"ogółem": 8.8,
		"year": "Małopolskie"
		},{
		"w1": "2023",
		"ogółem": 12.1,
		"year": "Mazowieckie"
		}, {
		"w1": "2023",
		"ogółem": 1.5,
		"year": "Opolskie"
		}, {
		"w1": "2023",
		"ogółem": 28.5,
		"year": "Podkarpackie"
		}, {
		"w1": "2023",
		"ogółem": 28.7,
		"year": "Podlaskie"
		}, {
		"w1": "2023",
		"ogółem": 21.9,
		"year": "Pomorskie"
		}, {
		"w1": "2023",
		"ogółem": 5.1,
		"year": "Śląskie"
		}, {
		"w1": "2023",
		"ogółem": 1.9,
		"year": "Świętokrzyskie"
		}, {
		"w1": "2023",
		"ogółem": 23.8,
		"year": "Warmińsko-Mazurskie"
		}, {
		"w1": "2023",
		"ogółem": 13.7,
		"year": "Wielkopolskie"
		}, {
		"w1": "2023",
		"ogółem": 30.3,
		"year": "Zachodniopomorskie"
		}],

		// Data set #1
	    [{
			"w1": "2022",
			"ogółem": 15.9,
			"year": "POLAND"
			}, {
			"w1": "2022",
			"ogółem": 14.9,
			"year": "Dolnośląskie"
			}, {
			"w1": "2022",
			"ogółem": 8.8,
			"year": "Kujawsko-Pomorskie"
			}, {
			"w1": "2022",
			"ogółem": 13.4,
			"year": "Lubelskie"
			}, {
			"w1": "2022",
			"ogółem": 21.0,
			"year": "Lubuskie"
			}, {
			"w1": "2022",
			"ogółem": 2.2,
			"year": "Łódzkie"
			}, {
			"w1": "2022",
			"ogółem": 8.9,
			"year": "Małopolskie"
			},{
			"w1": "2022",
			"ogółem": 12.1,
			"year": "Mazowieckie"
			}, {
			"w1": "2022",
			"ogółem": 1.5,
			"year": "Opolskie"
			}, {
			"w1": "2022",
			"ogółem": 28.5,
			"year": "Podkarpackie"
			}, {
			"w1": "2022",
			"ogółem": 28.7,
			"year": "Podlaskie"
			}, {
			"w1": "2022",
			"ogółem": 21.9,
			"year": "Pomorskie"
			}, {
			"w1": "2022",
			"ogółem": 5.1,
			"year": "Śląskie"
			}, {
			"w1": "2022",
			"ogółem": 1.9,
			"year": "Świętokrzyskie"
			}, {
			"w1": "2022",
			"ogółem": 23.8,
			"year": "Warmińsko-Mazurskie"
			}, {
			"w1": "2022",
			"ogółem": 13.7,
			"year": "Wielkopolskie"
			}, {
			"w1": "2022",
			"ogółem": 30.3,
			"year": "Zachodniopomorskie"
			}],
				// Data set #2
				[{
					"w1": "2021",
					"ogółem": 15.7,
					"year": "POLAND"
					}, {
					"w1": "2021",
					"ogółem": 14.7,
					"year": "Dolnośląskie"
					}, {
					"w1": "2021",
					"ogółem": 8.8,
					"year": "Kujawsko-Pomorskie"
					}, {
					"w1": "2021",
					"ogółem": 13.4,
					"year": "Lubelskie"
					}, {
					"w1": "2021",
					"ogółem": 21.0,
					"year": "Lubuskie"
					}, {
					"w1": "2021",
					"ogółem": 2.2,
					"year": "Łódzkie"
					}, {
					"w1": "2021",
					"ogółem": 8.8,
					"year": "Małopolskie"
					},{
					"w1": "2021",
					"ogółem": 12.1,
					"year": "Mazowieckie"
					}, {
					"w1": "2021",
					"ogółem": 1.5,
					"year": "Opolskie"
					}, {
					"w1": "2021",
					"ogółem": 28.5,
					"year": "Podkarpackie"
					}, {
					"w1": "2021",
					"ogółem": 28.7,
					"year": "Podlaskie"
					}, {
					"w1": "2021",
					"ogółem": 20.0,
					"year": "Pomorskie"
					}, {
					"w1": "2021",
					"ogółem": 5.1,
					"year": "Śląskie"
					}, {
					"w1": "2021",
					"ogółem": 1.9,
					"year": "Świętokrzyskie"
					}, {
					"w1": "2021",
					"ogółem": 23.8,
					"year": "Warmińsko-Mazurskie"
					}, {
					"w1": "2021",
					"ogółem": 13.7,
					"year": "Wielkopolskie"
					}, {
					"w1": "2021",
					"ogółem": 30.3,
					"year": "Zachodniopomorskie"
					}],
						// Data set #3
						[{
							"w1": "2020",
							"ogółem": 15.7,
							"year": "POLAND"
							}, {
							"w1": "2020",
							"ogółem": 14.7,
							"year": "Dolnośląskie"
							}, {
							"w1": "2020",
							"ogółem": 8.8,
							"year": "Kujawsko-Pomorskie"
							}, {
							"w1": "2020",
							"ogółem": 13.4,
							"year": "Lubelskie"
							}, {
							"w1": "2020",
							"ogółem": 21.0,
							"year": "Lubuskie"
							}, {
							"w1": "2020",
							"ogółem": 2.2,
							"year": "Łódzkie"
							}, {
							"w1": "2020",
							"ogółem": 8.8,
							"year": "Małopolskie"
							},{
							"w1": "2020",
							"ogółem": 12.1,
							"year": "Mazowieckie"
							}, {
							"w1": "2020",
							"ogółem": 1.5,
							"year": "Opolskie"
							}, {
							"w1": "2020",
							"ogółem": 28.5,
							"year": "Podkarpackie"
							}, {
							"w1": "2020",
							"ogółem": 28.7,
							"year": "Podlaskie"
							}, {
							"w1": "2020",
							"ogółem": 19.9,
							"year": "Pomorskie"
							}, {
							"w1": "2020",
							"ogółem": 5.1,
							"year": "Śląskie"
							}, {
							"w1": "2020",
							"ogółem": 1.9,
							"year": "Świętokrzyskie"
							}, {
							"w1": "2020",
							"ogółem": 23.8,
							"year": "Warmińsko-Mazurskie"
							}, {
							"w1": "2020",
							"ogółem": 13.7,
							"year": "Wielkopolskie"
							}, {
							"w1": "2020",
							"ogółem": 30.3,
							"year": "Zachodniopomorskie"
							}],
							// Data set #4
							[{
								"w1": "2019",
								"ogółem": 15.7,
								"year": "POLAND"
								}, {
								"w1": "2019",
								"ogółem": 14.7,
								"year": "Dolnośląskie"
								}, {
								"w1": "2019",
								"ogółem": 8.8,
								"year": "Kujawsko-Pomorskie"
								}, {
								"w1": "2019",
								"ogółem": 13.4,
								"year": "Lubelskie"
								}, {
								"w1": "2019",
								"ogółem": 21.0,
								"year": "Lubuskie"
								}, {
								"w1": "2019",
								"ogółem": 2.2,
								"year": "Łódzkie"
								}, {
								"w1": "2019",
								"ogółem": 8.8,
								"year": "Małopolskie"
								},{
								"w1": "2019",
								"ogółem": 12.1,
								"year": "Mazowieckie"
								}, {
								"w1": "2019",
								"ogółem": 1.5,
								"year": "Opolskie"
								}, {
								"w1": "2019",
								"ogółem": 28.5,
								"year": "Podkarpackie"
								}, {
								"w1": "2019",
								"ogółem": 28.7,
								"year": "Podlaskie"
								}, {
								"w1": "2019",
								"ogółem": 19.9,
								"year": "Pomorskie"
								}, {
								"w1": "2019",
								"ogółem": 5.1,
								"year": "Śląskie"
								}, {
								"w1": "2019",
								"ogółem": 1.9,
								"year": "Świętokrzyskie"
								}, {
								"w1": "2019",
								"ogółem": 23.8,
								"year": "Warmińsko-Mazurskie"
								}, {
								"w1": "2019",
								"ogółem": 13.7,
								"year": "Wielkopolskie"
								}, {
								"w1": "2019",
								"ogółem": 30.3,
								"year": "Zachodniopomorskie"
								}],
							// Data set #5
							[{
								"w1": "2018",
								"ogółem": 15.7,
								"year": "POLAND"
								}, {
								"w1": "2018",
								"ogółem": 14.7,
								"year": "Dolnośląskie"
								}, {
								"w1": "2018",
								"ogółem": 8.8,
								"year": "Kujawsko-Pomorskie"
								}, {
								"w1": "2018",
								"ogółem": 13.4,
								"year": "Lubelskie"
								}, {
								"w1": "2018",
								"ogółem": 21.0,
								"year": "Lubuskie"
								}, {
								"w1": "2018",
								"ogółem": 2.2,
								"year": "Łódzkie"
								}, {
								"w1": "2018",
								"ogółem": 8.8,
								"year": "Małopolskie"
								},{
								"w1": "2018",
								"ogółem": 12.1,
								"year": "Mazowieckie"
								}, {
								"w1": "2018",
								"ogółem": 1.5,
								"year": "Opolskie"
								}, {
								"w1": "2018",
								"ogółem": 28.5,
								"year": "Podkarpackie"
								}, {
								"w1": "2018",
								"ogółem": 28.7,
								"year": "Podlaskie"
								}, {
								"w1": "2018",
								"ogółem": 19.9,
								"year": "Pomorskie"
								}, {
								"w1": "2018",
								"ogółem": 5.1,
								"year": "Śląskie"
								}, {
								"w1": "2018",
								"ogółem": 1.9,
								"year": "Świętokrzyskie"
								}, {
								"w1": "2018",
								"ogółem": 23.8,
								"year": "Warmińsko-Mazurskie"
								}, {
								"w1": "2018",
								"ogółem": 13.7,
								"year": "Wielkopolskie"
								}, {
								"w1": "2018",
								"ogółem": 30.3,
								"year": "Zachodniopomorskie"
								}],
							// Data set #6
							[{
								"w1": "2017",
								"ogółem": 15.7,
								"year": "POLAND"
								}, {
								"w1": "2017",
								"ogółem": 14.7,
								"year": "Dolnośląskie"
								}, {
								"w1": "2017",
								"ogółem": 8.8,
								"year": "Kujawsko-Pomorskie"
								}, {
								"w1": "2017",
								"ogółem": 13.4,
								"year": "Lubelskie"
								}, {
								"w1": "2017",
								"ogółem": 21.0,
								"year": "Lubuskie"
								}, {
								"w1": "2017",
								"ogółem": 2.2,
								"year": "Łódzkie"
								}, {
								"w1": "2017",
								"ogółem": 8.8,
								"year": "Małopolskie"
								},{
								"w1": "2017",
								"ogółem": 12.1,
								"year": "Mazowieckie"
								}, {
								"w1": "2017",
								"ogółem": 1.5,
								"year": "Opolskie"
								}, {
								"w1": "2017",
								"ogółem": 28.5,
								"year": "Podkarpackie"
								}, {
								"w1": "2017",
								"ogółem": 28.7,
								"year": "Podlaskie"
								}, {
								"w1": "2017",
								"ogółem": 19.9,
								"year": "Pomorskie"
								}, {
								"w1": "2017",
								"ogółem": 5.1,
								"year": "Śląskie"
								}, {
								"w1": "2017",
								"ogółem": 1.9,
								"year": "Świętokrzyskie"
								}, {
								"w1": "2017",
								"ogółem": 23.8,
								"year": "Warmińsko-Mazurskie"
								}, {
								"w1": "2017",
								"ogółem": 13.7,
								"year": "Wielkopolskie"
								}, {
								"w1": "2017",
								"ogółem": 30.3,
								"year": "Zachodniopomorskie"
								}],
								// Data set #7
								[{
									"w1": "2016",
									"ogółem": 15.8,
									"year": "POLAND"
									}, {
									"w1": "2016",
									"ogółem": 14.6,
									"year": "Dolnośląskie"
									}, {
									"w1": "2016",
									"ogółem": 8.8,
									"year": "Kujawsko-Pomorskie"
									}, {
									"w1": "2016",
									"ogółem": 13.4,
									"year": "Lubelskie"
									}, {
									"w1": "2016",
									"ogółem": 21.0,
									"year": "Lubuskie"
									}, {
									"w1": "2016",
									"ogółem": 2.2,
									"year": "Łódzkie"
									}, {
									"w1": "2016",
									"ogółem": 8.8,
									"year": "Małopolskie"
									},{
									"w1": "2016",
									"ogółem": 12.1,
									"year": "Mazowieckie"
									}, {
									"w1": "2016",
									"ogółem": 1.5,
									"year": "Opolskie"
									}, {
									"w1": "2016",
									"ogółem": 28.5,
									"year": "Podkarpackie"
									}, {
									"w1": "2016",
									"ogółem": 28.7,
									"year": "Podlaskie"
									}, {
									"w1": "2016",
									"ogółem": 19.9,
									"year": "Pomorskie"
									}, {
									"w1": "2016",
									"ogółem": 5.1,
									"year": "Śląskie"
									}, {
									"w1": "2016",
									"ogółem": 1.9,
									"year": "Świętokrzyskie"
									}, {
									"w1": "2016",
									"ogółem": 23.8,
									"year": "Warmińsko-Mazurskie"
									}, {
									"w1": "2016",
									"ogółem": 14.3,
									"year": "Wielkopolskie"
									}, {
									"w1": "2016",
									"ogółem": 30.3,
									"year": "Zachodniopomorskie"
									}],
										// Data set #8
										[{
											"w1": "2015",
											"ogółem": 15.8,
											"year": "POLAND"
											}, {
											"w1": "2015",
											"ogółem": 14.6,
											"year": "Dolnośląskie"
											}, {
											"w1": "2015",
											"ogółem": 8.8,
											"year": "Kujawsko-Pomorskie"
											}, {
											"w1": "2015",
											"ogółem": 13.4,
											"year": "Lubelskie"
											}, {
											"w1": "2015",
											"ogółem": 21.0,
											"year": "Lubuskie"
											}, {
											"w1": "2015",
											"ogółem": 2.2,
											"year": "Łódzkie"
											}, {
											"w1": "2015",
											"ogółem": 8.8,
											"year": "Małopolskie"
											},{
											"w1": "2015",
											"ogółem": 12.1,
											"year": "Mazowieckie"
											}, {
											"w1": "2015",
											"ogółem": 1.5,
											"year": "Opolskie"
											}, {
											"w1": "2015",
											"ogółem": 28.5,
											"year": "Podkarpackie"
											}, {
											"w1": "2015",
											"ogółem": 28.7,
											"year": "Podlaskie"
											}, {
											"w1": "2015",
											"ogółem": 19.9,
											"year": "Pomorskie"
											}, {
											"w1": "2015",
											"ogółem": 5.1,
											"year": "Śląskie"
											}, {
											"w1": "2015",
											"ogółem": 1.9,
											"year": "Świętokrzyskie"
											}, {
											"w1": "2015",
											"ogółem": 23.8,
											"year": "Warmińsko-Mazurskie"
											}, {
											"w1": "2015",
											"ogółem": 14.3,
											"year": "Wielkopolskie"
											}, {
											"w1": "2015",
											"ogółem": 30.3,
											"year": "Zachodniopomorskie"
											}]
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
	rotation: -45,
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
    tooltip: am5.Tooltip.new(root, {}),

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

	series.columns.template.adapters.add("fill", function(fill, target) {
		if (target.dataItem.get("categoryX") == "POLAND") {
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
