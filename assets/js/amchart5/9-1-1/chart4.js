function createchart4(div, yMin, yMax, precyzja, lata, d){

//console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_4").innerHTML = "Odsetek długości dróg publicznych o nawierzchni twardej ulepszonej ogółem (%)";
}
if (d==1) {
	document.getElementById("tytuł_4").innerHTML = "Odsetek długości dróg publicznych o nawierzchni twardej ulepszonej w miastach (%)";
}
if (d==2) {
	document.getElementById("tytuł_4").innerHTML = "Odsetek długości dróg publicznych o nawierzchni twardej ulepszonej na wsi (%)";
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
    [{"w1":"POLSKA","w2":"ogółem","2015":64.0,"2023":69.9},{"w1":"Dolnośląskie","w2":"ogółem","2015":76.4,"2023":79.9},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":56.6,"2023":65.9},{"w1":"Lubelskie","w2":"ogółem","2015":56.5,"2023":61.9},{"w1":"Lubuskie","w2":"ogółem","2015":50.8,"2023":52.4},{"w1":"Łódzkie","w2":"ogółem","2015":70.7,"2023":78.6},{"w1":"Małopolskie","w2":"ogółem","2015":74.2,"2023":76.9},{"w1":"Mazowieckie","w2":"ogółem","2015":63.9,"2023":71.4},{"w1":"Opolskie","w2":"ogółem","2015":74.9,"2023":79.0},{"w1":"Podkarpackie","w2":"ogółem","2015":74.1,"2023":78.4},{"w1":"Podlaskie","w2":"ogółem","2015":44.5,"2023":50.3},{"w1":"Pomorskie","w2":"ogółem","2015":53.5,"2023":65.8},{"w1":"Śląskie","w2":"ogółem","2015":79.8,"2023":84.7},{"w1":"Świętokrzyskie","w2":"ogółem","2015":70.3,"2023":79.4},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":54.4,"2023":60.7},{"w1":"Wielkopolskie","w2":"ogółem","2015":64.4,"2023":69.1},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":63.8,"2023":67.9}],
    // Data set #2
    [{"w1":"POLSKA","w2":"miasto","2015":13.4,"2023":14.5},{"w1":"Dolnośląskie","w2":"miasto","2015":20.9,"2023":21.7},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":9.5,"2023":10.2},{"w1":"Lubelskie","w2":"miasto","2015":7.0,"2023":7.8},{"w1":"Lubuskie","w2":"miasto","2015":11.5,"2023":12.0},{"w1":"Łódzkie","w2":"miasto","2015":12.5,"2023":14.0},{"w1":"Małopolskie","w2":"miasto","2015":14.1,"2023":14.4},{"w1":"Mazowieckie","w2":"miasto","2015":12.8,"2023":14.1},{"w1":"Opolskie","w2":"miasto","2015":15.1,"2023":17.6},{"w1":"Podkarpackie","w2":"miasto","2015":12.9,"2023":14.0},{"w1":"Podlaskie","w2":"miasto","2015":6.8,"2023":7.7},{"w1":"Pomorskie","w2":"miasto","2015":12.6,"2023":15.0},{"w1":"Śląskie","w2":"miasto","2015":37.3,"2023":40.0},{"w1":"Świętokrzyskie","w2":"miasto","2015":9.2,"2023":11.6},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":8.4,"2023":8.9},{"w1":"Wielkopolskie","w2":"miasto","2015":12.1,"2023":13.4},{"w1":"Zachodniopomorskie","w2":"miasto","2015":14.9,"2023":15.7}],
    // Data set #3
    [{"w1":"POLSKA","w2":"wieś","2015":50.6,"2023":55.4},{"w1":"Dolnośląskie","w2":"wieś","2015":55.5,"2023":58.2},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":47.1,"2023":55.6},{"w1":"Lubelskie","w2":"wieś","2015":49.5,"2023":54.1},{"w1":"Lubuskie","w2":"wieś","2015":39.3,"2023":40.3},{"w1":"Łódzkie","w2":"wieś","2015":58.2,"2023":64.6},{"w1":"Małopolskie","w2":"wieś","2015":60.0,"2023":62.5},{"w1":"Mazowieckie","w2":"wieś","2015":51.2,"2023":57.3},{"w1":"Opolskie","w2":"wieś","2015":59.8,"2023":61.4},{"w1":"Podkarpackie","w2":"wieś","2015":61.2,"2023":64.4},{"w1":"Podlaskie","w2":"wieś","2015":37.8,"2023":42.7},{"w1":"Pomorskie","w2":"wieś","2015":40.9,"2023":50.9},{"w1":"Śląskie","w2":"wieś","2015":42.5,"2023":44.7},{"w1":"Świętokrzyskie","w2":"wieś","2015":61.1,"2023":67.8},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":46.1,"2023":51.8},{"w1":"Wielkopolskie","w2":"wieś","2015":52.2,"2023":55.7},{"w1":"Zachodniopomorskie","w2":"wieś","2015":48.9,"2023":52.2}]
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
  if (target.dataItem.get("categoryX") == "POLSKA") {
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
