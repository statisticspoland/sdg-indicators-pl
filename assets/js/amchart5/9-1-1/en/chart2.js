function createchart2(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_2").innerHTML = "Density of population total (persons per square kilometres)";
}
if (d==1) {
	document.getElementById("tytuł_2").innerHTML = "Density of population in urban area (persons per square kilometres)";
}
if (d==2) {
	document.getElementById("tytuł_2").innerHTML = "Density of population in rural area (persons per square kilometres)";
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
    [{"w1":"POLAND","w2":"ogółem","2015":122.9,"2023":119.9},{"w1":"Dolnośląskie","w2":"ogółem","2015":145.6,"2023":144.3},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":116.1,"2023":111.1},{"w1":"Lubelskie","w2":"ogółem","2015":85.2,"2023":80.0},{"w1":"Lubuskie","w2":"ogółem","2015":72.8,"2023":69.7},{"w1":"Łódzkie","w2":"ogółem","2015":136.9,"2023":129.7},{"w1":"Małopolskie","w2":"ogółem","2015":222.1,"2023":225.9},{"w1":"Mazowieckie","w2":"ogółem","2015":150.4,"2023":155.0},{"w1":"Opolskie","w2":"ogółem","2015":105.8,"2023":99.5},{"w1":"Podkarpackie","w2":"ogółem","2015":119.2,"2023":116.1},{"w1":"Podlaskie","w2":"ogółem","2015":58.9,"2023":56.4},{"w1":"Pomorskie","w2":"ogółem","2015":126.0,"2023":120.7},{"w1":"Śląskie","w2":"ogółem","2015":370.6,"2023":350.3},{"w1":"Świętokrzyskie","w2":"ogółem","2015":107.4,"2023":99.8},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":59.6,"2023":56.2},{"w1":"Wielkopolskie","w2":"ogółem","2015":116.5,"2023":116.9},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":74.7,"2023":71.2}],
    // Data set #2
    [{"w1":"POLAND","w2":"miasto","2015":1061.9,"2023":952.4},{"w1":"Dolnośląskie","w2":"miasto","2015":909.9,"2023":884.8},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":1500.9,"2023":1364.6},{"w1":"Lubelskie","w2":"miasto","2015":1009.8,"2023":885.9},{"w1":"Lubuskie","w2":"miasto","2015":762.2,"2023":712.3},{"w1":"Łódzkie","w2":"miasto","2015":1358.2,"2023":1178.3},{"w1":"Małopolskie","w2":"miasto","2015":987.5,"2023":964.1},{"w1":"Mazowieckie","w2":"miasto","2015":1585.9,"2023":1539.7},{"w1":"Opolskie","w2":"miasto","2015":676.8,"2023":582.9},{"w1":"Podkarpackie","w2":"miasto","2015":733.2,"2023":670.5},{"w1":"Podlaskie","w2":"miasto","2015":778.3,"2023":747.6},{"w1":"Pomorskie","w2":"miasto","2015":1392.6,"2023":784.4},{"w1":"Śląskie","w2":"miasto","2015":930.1,"2023":850.7},{"w1":"Świętokrzyskie","w2":"miasto","2015":833.2,"2023":651.3},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":1422.0,"2023":1297.5},{"w1":"Wielkopolskie","w2":"miasto","2015":1253.3,"2023":1142.1},{"w1":"Zachodniopomorskie","w2":"miasto","2015":829.0,"2023":755.3}],
	// Data set #3
    [{"w1":"POLAND","w2":"wieś","2015":52.5,"2023":52.5},{"w1":"Dolnośląskie","w2":"wieś","2015":50.5,"2023":52.9},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":49.1,"2023":49.1},{"w1":"Lubelskie","w2":"wieś","2015":47.7,"2023":45.0},{"w1":"Lubuskie","w2":"wieś","2015":27.2,"2023":26.7},{"w1":"Łódzkie","w2":"wieś","2015":54.0,"2023":53.2},{"w1":"Małopolskie","w2":"wieś","2015":128.5,"2023":132.6},{"w1":"Mazowieckie","w2":"wieś","2015":57.2,"2023":58.6},{"w1":"Opolskie","w2":"wieś","2015":55.4,"2023":51.7},{"w1":"Podkarpackie","w2":"wieś","2015":75.1,"2023":73.7},{"w1":"Podlaskie","w2":"wieś","2015":24.3,"2023":23.2},{"w1":"Pomorskie","w2":"wieś","2015":47.6,"2023":50.3},{"w1":"Śląskie","w2":"wieś","2015":122.4,"2023":123.3},{"w1":"Świętokrzyskie","w2":"wieś","2015":63.1,"2023":58.9},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":25.0,"2023":23.7},{"w1":"Wielkopolskie","w2":"wieś","2015":55.4,"2023":58.1},{"w1":"Zachodniopomorskie","w2":"wieś","2015":25.0,"2023":24.3}]
  ];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

//root.locale = am5locales_pl_PL;
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
  var legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    })
  );

	legend.labels.template.setAll({
	  fontSize: 12,
	});

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
  xRenderer.labels.template.setAll({
    fontSize: 12,
    rotation: -45,
    centerY: am5.p50,
    centerX: am5.p100
  });

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "w1",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  xRenderer.grid.template.setAll({
    location: 1
  })

  //xAxis.data.setAll(dane);
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
      categoryXField: "w1"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}, {name}: {valueY.formatNumber('#,###.0')}",
      width: am5.percent(75),
      tooltipY: 0,
      strokeOpacity: 0
    });


series.columns.template.adapters.add("fill", function(fill, target) {
  if (target.dataItem.get("categoryX") == "POLAND") {
    if (series.get("name") == "2023"){
      return am5.color(0x674EA7);
    }
    else {
      return am5.color(0x9D86D8);
    }
  }
  else {
    return fill;
  }
});


    //series.data.setAll(dane);
    series.data.setAll(getData(d));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    series.bullets.push(function() {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          fill: root.interfaceColors.get("alternativeText"),
          centerY: 0,
          centerX: am5.p50,
          populateText: true
        })
      });
    });

    legend.data.push(series);
  }


  lata.forEach((item, i) => {
    makeSeries(item, item);
  });

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
}
