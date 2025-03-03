function createchart7(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2023 r. (%)";
}
if (d==1) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2022 r. (%)";
}
if (d==2) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2021 r. (%)";
}
if (d==3) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2020 r. (%)";
}
if (d==4) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2019 r. (%)";
}
if (d==5) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2018 r. (%)";
}
if (d==6) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2017 r. (%)";
}
if (d==7) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2016 r. (%)";
}
if (d==8) {
	document.getElementById("tytuł_7").innerHTML = "Powierzchnia specjalnych obszarów ochrony siedlisk w powierzchni ogółem w 2015 r. (%)";
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
		"ogółem": 11.2,
		"year": "POLSKA"
		}, {
		"w1": "2023",
		"ogółem": 17.8,
		"year": "Dolnośląskie"
		}, {
		"w1": "2023",
		"ogółem": 4.9,
		"year": "Kujawsko-Pomorskie"
		}, {
		"w1": "2023",
		"ogółem": 6.6,
		"year": "Lubelskie"
		}, {
		"w1": "2023",
		"ogółem": 14.9,
		"year": "Lubuskie"
		}, {
		"w1": "2023",
		"ogółem": 3.0,
		"year": "Łódzkie"
		}, {
		"w1": "2023",
		"ogółem": 10.1,
		"year": "Małopolskie"
		},{
		"w1": "2023",
		"ogółem": 5.5,
		"year": "Mazowieckie"
		}, {
		"w1": "2023",
		"ogółem": 3.0,
		"year": "Opolskie"
		}, {
		"w1": "2023",
		"ogółem": 19.7,
		"year": "Podkarpackie"
		}, {
		"w1": "2023",
		"ogółem": 26.9,
		"year": "Podlaskie"
		}, {
		"w1": "2023",
		"ogółem": 10.3,
		"year": "Pomorskie"
		}, {
		"w1": "2023",
		"ogółem": 7.6,
		"year": "Śląskie"
		}, {
		"w1": "2023",
		"ogółem": 13.3,
		"year": "Świętokrzyskie"
		}, {
		"w1": "2023",
		"ogółem": 10.7,
		"year": "Warmińsko-Mazurskie"
		}, {
		"w1": "2023",
		"ogółem": 8.2,
		"year": "Wielkopolskie"
		}, {
		"w1": "2023",
		"ogółem": 18.7,
		"year": "Zachodniopomorskie"
		}],

		// Data set #1
	    [{
			"w1": "2022",
			"ogółem": 11.2,
			"year": "POLSKA"
			}, {
			"w1": "2022",
			"ogółem": 17.8,
			"year": "Dolnośląskie"
			}, {
			"w1": "2022",
			"ogółem": 4.9,
			"year": "Kujawsko-Pomorskie"
			}, {
			"w1": "2022",
			"ogółem": 6.6,
			"year": "Lubelskie"
			}, {
			"w1": "2022",
			"ogółem": 14.9,
			"year": "Lubuskie"
			}, {
			"w1": "2022",
			"ogółem": 3.0,
			"year": "Łódzkie"
			}, {
			"w1": "2022",
			"ogółem": 10.1,
			"year": "Małopolskie"
			},{
			"w1": "2022",
			"ogółem": 5.5,
			"year": "Mazowieckie"
			}, {
			"w1": "2022",
			"ogółem": 3.0,
			"year": "Opolskie"
			}, {
			"w1": "2022",
			"ogółem": 19.7,
			"year": "Podkarpackie"
			}, {
			"w1": "2022",
			"ogółem": 26.9,
			"year": "Podlaskie"
			}, {
			"w1": "2022",
			"ogółem": 10.3,
			"year": "Pomorskie"
			}, {
			"w1": "2022",
			"ogółem": 7.5,
			"year": "Śląskie"
			}, {
			"w1": "2022",
			"ogółem": 13.3,
			"year": "Świętokrzyskie"
			}, {
			"w1": "2022",
			"ogółem": 10.7,
			"year": "Warmińsko-Mazurskie"
			}, {
			"w1": "2022",
			"ogółem": 8.2,
			"year": "Wielkopolskie"
			}, {
			"w1": "2022",
			"ogółem": 18.7,
			"year": "Zachodniopomorskie"
			}],
					// Data set #2
					[{
						"w1": "2021",
						"ogółem": 11.2,
						"year": "POLSKA"
						}, {
						"w1": "2021",
						"ogółem": 17.7,
						"year": "Dolnośląskie"
						}, {
						"w1": "2021",
						"ogółem": 4.9,
						"year": "Kujawsko-Pomorskie"
						}, {
						"w1": "2021",
						"ogółem": 6.6,
						"year": "Lubelskie"
						}, {
						"w1": "2021",
						"ogółem": 14.9,
						"year": "Lubuskie"
						}, {
						"w1": "2021",
						"ogółem": 2.9,
						"year": "Łódzkie"
						}, {
						"w1": "2021",
						"ogółem": 10.1,
						"year": "Małopolskie"
						},{
						"w1": "2021",
						"ogółem": 5.5,
						"year": "Mazowieckie"
						}, {
						"w1": "2021",
						"ogółem": 3.0,
						"year": "Opolskie"
						}, {
						"w1": "2021",
						"ogółem": 19.7,
						"year": "Podkarpackie"
						}, {
						"w1": "2021",
						"ogółem": 26.9,
						"year": "Podlaskie"
						}, {
						"w1": "2021",
						"ogółem": 9.7,
						"year": "Pomorskie"
						}, {
						"w1": "2021",
						"ogółem": 7.5,
						"year": "Śląskie"
						}, {
						"w1": "2021",
						"ogółem": 13.3,
						"year": "Świętokrzyskie"
						}, {
						"w1": "2021",
						"ogółem": 10.7,
						"year": "Warmińsko-Mazurskie"
						}, {
						"w1": "2021",
						"ogółem": 8.2,
						"year": "Wielkopolskie"
						}, {
						"w1": "2021",
						"ogółem": 18.7,
						"year": "Zachodniopomorskie"
						}],
									// Data set #3
									[{
										"w1": "2020",
										"ogółem": 11.2,
										"year": "POLSKA"
										}, {
										"w1": "2020",
										"ogółem": 17.7,
										"year": "Dolnośląskie"
										}, {
										"w1": "2020",
										"ogółem": 4.9,
										"year": "Kujawsko-Pomorskie"
										}, {
										"w1": "2020",
										"ogółem": 6.6,
										"year": "Lubelskie"
										}, {
										"w1": "2020",
										"ogółem": 15.0,
										"year": "Lubuskie"
										}, {
										"w1": "2020",
										"ogółem": 2.9,
										"year": "Łódzkie"
										}, {
										"w1": "2020",
										"ogółem": 10.1,
										"year": "Małopolskie"
										},{
										"w1": "2020",
										"ogółem": 5.4,
										"year": "Mazowieckie"
										}, {
										"w1": "2020",
										"ogółem": 2.9,
										"year": "Opolskie"
										}, {
										"w1": "2020",
										"ogółem": 19.7,
										"year": "Podkarpackie"
										}, {
										"w1": "2020",
										"ogółem": 26.9,
										"year": "Podlaskie"
										}, {
										"w1": "2020",
										"ogółem": 9.7,
										"year": "Pomorskie"
										}, {
										"w1": "2020",
										"ogółem": 7.5,
										"year": "Śląskie"
										}, {
										"w1": "2020",
										"ogółem": 13.3,
										"year": "Świętokrzyskie"
										}, {
										"w1": "2020",
										"ogółem": 10.7,
										"year": "Warmińsko-Mazurskie"
										}, {
										"w1": "2020",
										"ogółem": 8.1,
										"year": "Wielkopolskie"
										}, {
										"w1": "2020",
										"ogółem": 18.6,
										"year": "Zachodniopomorskie"
										}],
											// Data set #4
											[{
												"w1": "2019",
												"ogółem": 11.2,
												"year": "POLSKA"
												}, {
												"w1": "2019",
												"ogółem": 17.8,
												"year": "Dolnośląskie"
												}, {
												"w1": "2019",
												"ogółem": 4.9,
												"year": "Kujawsko-Pomorskie"
												}, {
												"w1": "2019",
												"ogółem": 6.6,
												"year": "Lubelskie"
												}, {
												"w1": "2019",
												"ogółem": 15.0,
												"year": "Lubuskie"
												}, {
												"w1": "2019",
												"ogółem": 2.9,
												"year": "Łódzkie"
												}, {
												"w1": "2019",
												"ogółem": 10.1,
												"year": "Małopolskie"
												},{
												"w1": "2019",
												"ogółem": 5.4,
												"year": "Mazowieckie"
												}, {
												"w1": "2019",
												"ogółem": 2.9,
												"year": "Opolskie"
												}, {
												"w1": "2019",
												"ogółem": 19.8,
												"year": "Podkarpackie"
												}, {
												"w1": "2019",
												"ogółem": 26.9,
												"year": "Podlaskie"
												}, {
												"w1": "2019",
												"ogółem": 9.7,
												"year": "Pomorskie"
												}, {
												"w1": "2019",
												"ogółem": 7.5,
												"year": "Śląskie"
												}, {
												"w1": "2019",
												"ogółem": 13.3,
												"year": "Świętokrzyskie"
												}, {
												"w1": "2019",
												"ogółem": 10.7,
												"year": "Warmińsko-Mazurskie"
												}, {
												"w1": "2019",
												"ogółem": 8.1,
												"year": "Wielkopolskie"
												}, {
												"w1": "2019",
												"ogółem": 18.6,
												"year": "Zachodniopomorskie"
												}],
									// Data set #5
									[{
										"w1": "2018",
										"ogółem": 11.2,
										"year": "POLSKA"
										}, {
										"w1": "2018",
										"ogółem": 17.8,
										"year": "Dolnośląskie"
										}, {
										"w1": "2018",
										"ogółem": 4.9,
										"year": "Kujawsko-Pomorskie"
										}, {
										"w1": "2018",
										"ogółem": 6.6,
										"year": "Lubelskie"
										}, {
										"w1": "2018",
										"ogółem": 15.0,
										"year": "Lubuskie"
										}, {
										"w1": "2018",
										"ogółem": 2.9,
										"year": "Łódzkie"
										}, {
										"w1": "2018",
										"ogółem": 10.1,
										"year": "Małopolskie"
										},{
										"w1": "2018",
										"ogółem": 5.4,
										"year": "Mazowieckie"
										}, {
										"w1": "2018",
										"ogółem": 2.9,
										"year": "Opolskie"
										}, {
										"w1": "2018",
										"ogółem": 19.8,
										"year": "Podkarpackie"
										}, {
										"w1": "2018",
										"ogółem": 26.9,
										"year": "Podlaskie"
										}, {
										"w1": "2018",
										"ogółem": 9.7,
										"year": "Pomorskie"
										}, {
										"w1": "2018",
										"ogółem": 7.5,
										"year": "Śląskie"
										}, {
										"w1": "2018",
										"ogółem": 13.3,
										"year": "Świętokrzyskie"
										}, {
										"w1": "2018",
										"ogółem": 10.7,
										"year": "Warmińsko-Mazurskie"
										}, {
										"w1": "2018",
										"ogółem": 8.1,
										"year": "Wielkopolskie"
										}, {
										"w1": "2018",
										"ogółem": 18.6,
										"year": "Zachodniopomorskie"
										}],
					// Data set #6
					[{
						"w1": "2017",
						"ogółem": 11.2,
						"year": "POLSKA"
						}, {
						"w1": "2017",
						"ogółem": 17.8,
						"year": "Dolnośląskie"
						}, {
						"w1": "2017",
						"ogółem": 4.9,
						"year": "Kujawsko-Pomorskie"
						}, {
						"w1": "2017",
						"ogółem": 6.6,
						"year": "Lubelskie"
						}, {
						"w1": "2017",
						"ogółem": 15.0,
						"year": "Lubuskie"
						}, {
						"w1": "2017",
						"ogółem": 2.9,
						"year": "Łódzkie"
						}, {
						"w1": "2017",
						"ogółem": 10.1,
						"year": "Małopolskie"
						},{
						"w1": "2017",
						"ogółem": 5.4,
						"year": "Mazowieckie"
						}, {
						"w1": "2017",
						"ogółem": 2.9,
						"year": "Opolskie"
						}, {
						"w1": "2017",
						"ogółem": 19.8,
						"year": "Podkarpackie"
						}, {
						"w1": "2017",
						"ogółem": 26.9,
						"year": "Podlaskie"
						}, {
						"w1": "2017",
						"ogółem": 9.7,
						"year": "Pomorskie"
						}, {
						"w1": "2017",
						"ogółem": 7.5,
						"year": "Śląskie"
						}, {
						"w1": "2017",
						"ogółem": 13.3,
						"year": "Świętokrzyskie"
						}, {
						"w1": "2017",
						"ogółem": 10.7,
						"year": "Warmińsko-Mazurskie"
						}, {
						"w1": "2017",
						"ogółem": 8.1,
						"year": "Wielkopolskie"
						}, {
						"w1": "2017",
						"ogółem": 18.6,
						"year": "Zachodniopomorskie"
						}],
				// Data set #7
				[{
					"w1": "2016",
					"ogółem": 11.2,
					"year": "POLSKA"
					}, {
					"w1": "2016",
					"ogółem": 17.8,
					"year": "Dolnośląskie"
					}, {
					"w1": "2016",
					"ogółem": 4.9,
					"year": "Kujawsko-Pomorskie"
					}, {
					"w1": "2016",
					"ogółem": 6.6,
					"year": "Lubelskie"
					}, {
					"w1": "2016",
					"ogółem": 15.0,
					"year": "Lubuskie"
					}, {
					"w1": "2016",
					"ogółem": 2.9,
					"year": "Łódzkie"
					}, {
					"w1": "2016",
					"ogółem": 10.1,
					"year": "Małopolskie"
					},{
					"w1": "2016",
					"ogółem": 5.4,
					"year": "Mazowieckie"
					}, {
					"w1": "2016",
					"ogółem": 2.9,
					"year": "Opolskie"
					}, {
					"w1": "2016",
					"ogółem": 19.8,
					"year": "Podkarpackie"
					}, {
					"w1": "2016",
					"ogółem": 26.9,
					"year": "Podlaskie"
					}, {
					"w1": "2016",
					"ogółem": 9.7,
					"year": "Pomorskie"
					}, {
					"w1": "2016",
					"ogółem": 7.5,
					"year": "Śląskie"
					}, {
					"w1": "2016",
					"ogółem": 13.4,
					"year": "Świętokrzyskie"
					}, {
					"w1": "2016",
					"ogółem": 10.7,
					"year": "Warmińsko-Mazurskie"
					}, {
					"w1": "2016",
					"ogółem": 8.1,
					"year": "Wielkopolskie"
					}, {
					"w1": "2016",
					"ogółem": 18.6,
					"year": "Zachodniopomorskie"
					}],
									// Data set #8
									[{
										"w1": "2015",
										"ogółem": 11.2,
										"year": "POLSKA"
										}, {
										"w1": "2015",
										"ogółem": 17.8,
										"year": "Dolnośląskie"
										}, {
										"w1": "2015",
										"ogółem": 4.9,
										"year": "Kujawsko-Pomorskie"
										}, {
										"w1": "2015",
										"ogółem": 6.6,
										"year": "Lubelskie"
										}, {
										"w1": "2015",
										"ogółem": 15.0,
										"year": "Lubuskie"
										}, {
										"w1": "2015",
										"ogółem": 2.9,
										"year": "Łódzkie"
										}, {
										"w1": "2015",
										"ogółem": 10.1,
										"year": "Małopolskie"
										},{
										"w1": "2015",
										"ogółem": 5.4,
										"year": "Mazowieckie"
										}, {
										"w1": "2015",
										"ogółem": 2.9,
										"year": "Opolskie"
										}, {
										"w1": "2015",
										"ogółem": 19.8,
										"year": "Podkarpackie"
										}, {
										"w1": "2015",
										"ogółem": 26.9,
										"year": "Podlaskie"
										}, {
										"w1": "2015",
										"ogółem": 9.7,
										"year": "Pomorskie"
										}, {
										"w1": "2015",
										"ogółem": 7.5,
										"year": "Śląskie"
										}, {
										"w1": "2015",
										"ogółem": 13.4,
										"year": "Świętokrzyskie"
										}, {
										"w1": "2015",
										"ogółem": 10.7,
										"year": "Warmińsko-Mazurskie"
										}, {
										"w1": "2015",
										"ogółem": 8.1,
										"year": "Wielkopolskie"
										}, {
										"w1": "2015",
										"ogółem": 18.6,
										"year": "Zachodniopomorskie"
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
		if (target.dataItem.get("categoryX") == "POLSKA") {
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
