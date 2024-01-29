function createchart4(div, yMin, yMax, precyzja, lata, d){

//console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_4").innerHTML = "Percentage of the length of public roads with improved hard surface total (%)";
}
if (d==1) {
	document.getElementById("tytuł_4").innerHTML = "Percentage of the length of public roads with improved hard surface in urban area (%)";
}
if (d==2) {
	document.getElementById("tytuł_4").innerHTML = "Percentage of the length of public roads with improved hard surface in rural area (%)";
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
		[{"w1":"POLAND","w2":"ogółem","2015":64.0,"2022":69.3},{"w1":"Dolnośląskie","w2":"ogółem","2015":76.4,"2022":80.5},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":56.6,"2022":64.2},{"w1":"Lubelskie","w2":"ogółem","2015":56.5,"2022":60.6},{"w1":"Lubuskie","w2":"ogółem","2015":50.8,"2022":51.7},{"w1":"Łódzkie","w2":"ogółem","2015":70.7,"2022":77.7},{"w1":"Małopolskie","w2":"ogółem","2015":74.2,"2022":76.7},{"w1":"Mazowieckie","w2":"ogółem","2015":63.9,"2022":70.7},{"w1":"Opolskie","w2":"ogółem","2015":74.9,"2022":78.4},{"w1":"Podkarpackie","w2":"ogółem","2015":74.1,"2022":78.6},{"w1":"Podlaskie","w2":"ogółem","2015":44.5,"2022":49.5},{"w1":"Pomorskie","w2":"ogółem","2015":53.5,"2022":64.6},{"w1":"Śląskie","w2":"ogółem","2015":79.8,"2022":84.3},{"w1":"Świętokrzyskie","w2":"ogółem","2015":70.3,"2022":78.9},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":54.4,"2022":60.0},{"w1":"Wielkopolskie","w2":"ogółem","2015":64.4,"2022":68.6},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":63.8,"2022":68.4}],
    // Data set #2
    [{"w1":"POLAND","w2":"miasto","2015":13.4,"2022":14.4},{"w1":"Dolnośląskie","w2":"miasto","2015":20.9,"2022":20.8},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":9.5,"2022":10.1},{"w1":"Lubelskie","w2":"miasto","2015":7.0,"2022":7.6},{"w1":"Lubuskie","w2":"miasto","2015":11.5,"2022":11.9},{"w1":"Łódzkie","w2":"miasto","2015":12.5,"2022":13.8},{"w1":"Małopolskie","w2":"miasto","2015":14.1,"2022":14.2},{"w1":"Mazowieckie","w2":"miasto","2015":12.8,"2022":14.0},{"w1":"Opolskie","w2":"miasto","2015":15.1,"2022":17.4},{"w1":"Podkarpackie","w2":"miasto","2015":12.9,"2022":14.1},{"w1":"Podlaskie","w2":"miasto","2015":6.8,"2022":7.6},{"w1":"Pomorskie","w2":"miasto","2015":12.6,"2022":14.8},{"w1":"Śląskie","w2":"miasto","2015":37.3,"2022":39.7},{"w1":"Świętokrzyskie","w2":"miasto","2015":9.2,"2022":11.1},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":8.4,"2022":8.9},{"w1":"Wielkopolskie","w2":"miasto","2015":12.1,"2022":13.8},{"w1":"Zachodniopomorskie","w2":"miasto","2015":14.9,"2022":15.8}],
	// Data set #3
    [{"w1":"POLAND","w2":"wieś","2015":50.6,"2022":54.9},{"w1":"Dolnośląskie","w2":"wieś","2015":55.5,"2022":59.7},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":47.1,"2022":54.1},{"w1":"Lubelskie","w2":"wieś","2015":49.5,"2022":53.0},{"w1":"Lubuskie","w2":"wieś","2015":39.3,"2022":39.8},{"w1":"Łódzkie","w2":"wieś","2015":58.2,"2022":63.9},{"w1":"Małopolskie","w2":"wieś","2015":60.0,"2022":62.5},{"w1":"Mazowieckie","w2":"wieś","2015":51.2,"2022":56.7},{"w1":"Opolskie","w2":"wieś","2015":59.8,"2022":61.0},{"w1":"Podkarpackie","w2":"wieś","2015":61.2,"2022":64.4},{"w1":"Podlaskie","w2":"wieś","2015":37.8,"2022":41.8},{"w1":"Pomorskie","w2":"wieś","2015":40.9,"2022":49.8},{"w1":"Śląskie","w2":"wieś","2015":42.5,"2022":44.7},{"w1":"Świętokrzyskie","w2":"wieś","2015":61.1,"2022":67.8},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":46.1,"2022":51.1},{"w1":"Wielkopolskie","w2":"wieś","2015":52.2,"2022":54.9},{"w1":"Zachodniopomorskie","w2":"wieś","2015":48.9,"2022":52.6}]
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
    layout: root.verticalLayout,
    //dx: 10,
    maxWidth: 475
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
