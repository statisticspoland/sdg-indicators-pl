function createchart2(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_2").innerHTML = "Gęstość zaludnienia ogółem (os/km<sup>2</sup>)";
}
if (d==1) {
	document.getElementById("tytuł_2").innerHTML = "Gęstość zaludnienia w miastach (os/km<sup>2</sup>)";
}
if (d==2) {
	document.getElementById("tytuł_2").innerHTML = "Gęstość zaludnienia na wsi (os/km<sup>2</sup>)";
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
    [{"w1":"POLSKA","w2":"ogółem","2015":122.9,"2022":120.8},{"w1":"Dolnośląskie","w2":"ogółem","2015":145.6,"2022":144.8},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":116.1,"2022":111.7},{"w1":"Lubelskie","w2":"ogółem","2015":85.2,"2022":80.6},{"w1":"Lubuskie","w2":"ogółem","2015":72.8,"2022":70.1},{"w1":"Łódzkie","w2":"ogółem","2015":136.9,"2022":130.5},{"w1":"Małopolskie","w2":"ogółem","2015":222.1,"2022":225.8},{"w1":"Mazowieckie","w2":"ogółem","2015":150.4,"2022":155.0},{"w1":"Opolskie","w2":"ogółem","2015":105.8,"2022":100.1},{"w1":"Podkarpackie","w2":"ogółem","2015":119.2,"2022":116.5},{"w1":"Podlaskie","w2":"ogółem","2015":58.9,"2022":56.6},{"w1":"Pomorskie","w2":"ogółem","2015":126.0,"2022":128.6},{"w1":"Śląskie","w2":"ogółem","2015":370.6,"2022":352.4},{"w1":"Świętokrzyskie","w2":"ogółem","2015":107.4,"2022":100.6},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":59.6,"2022":56.5},{"w1":"Wielkopolskie","w2":"ogółem","2015":116.5,"2022":117.1},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":74.7,"2022":71.6}],
    // Data set #2
    [{"w1":"POLSKA","w2":"miasto","2015":1061.9,"2022":999.9},{"w1":"Dolnośląskie","w2":"miasto","2015":909.9,"2022":894.9},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":1500.9,"2022":1377.5},{"w1":"Lubelskie","w2":"miasto","2015":1009.8,"2022":897.8},{"w1":"Lubuskie","w2":"miasto","2015":762.2,"2022":718.3},{"w1":"Łódzkie","w2":"miasto","2015":1358.2,"2022":1230.8},{"w1":"Małopolskie","w2":"miasto","2015":987.5,"2022":988.3},{"w1":"Mazowieckie","w2":"miasto","2015":1585.9,"2022":1573.6},{"w1":"Opolskie","w2":"miasto","2015":676.8,"2022":588.2},{"w1":"Podkarpackie","w2":"miasto","2015":733.2,"2022":675.1},{"w1":"Podlaskie","w2":"miasto","2015":778.3,"2022":751.6},{"w1":"Pomorskie","w2":"miasto","2015":1392.6,"2022":1370.9},{"w1":"Śląskie","w2":"miasto","2015":930.1,"2022":862.4},{"w1":"Świętokrzyskie","w2":"miasto","2015":833.2,"2022":664.6},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":1422.0,"2022":1308.1},{"w1":"Wielkopolskie","w2":"miasto","2015":1253.3,"2022":1151.2},{"w1":"Zachodniopomorskie","w2":"miasto","2015":829.0,"2022":764.4}],
	// Data set #3
    [{"w1":"POLSKA","w2":"wieś","2015":52.5,"2022":52.6},{"w1":"Dolnośląskie","w2":"wieś","2015":50.5,"2022":52.8},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":49.1,"2022":49.1},{"w1":"Lubelskie","w2":"wieś","2015":47.7,"2022":45.2},{"w1":"Lubuskie","w2":"wieś","2015":27.2,"2022":26.7},{"w1":"Łódzkie","w2":"wieś","2015":54.0,"2022":53.4},{"w1":"Małopolskie","w2":"wieś","2015":128.5,"2022":132.3},{"w1":"Mazowieckie","w2":"wieś","2015":57.2,"2022":58.5},{"w1":"Opolskie","w2":"wieś","2015":55.4,"2022":51.8},{"w1":"Podkarpackie","w2":"wieś","2015":75.1,"2022":73.9},{"w1":"Podlaskie","w2":"wieś","2015":24.3,"2022":23.2},{"w1":"Pomorskie","w2":"wieś","2015":47.6,"2022":51.1},{"w1":"Śląskie","w2":"wieś","2015":122.4,"2022":123.2},{"w1":"Świętokrzyskie","w2":"wieś","2015":63.1,"2022":59.6},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":25.0,"2022":23.8},{"w1":"Wielkopolskie","w2":"wieś","2015":55.4,"2022":57.8},{"w1":"Zachodniopomorskie","w2":"wieś","2015":25.0,"2022":24.4}]
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
  if (target.dataItem.get("categoryX") == "POLSKA") {
    if (series.get("name") == "2022"){
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
