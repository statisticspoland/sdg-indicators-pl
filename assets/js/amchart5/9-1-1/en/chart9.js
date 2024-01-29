function createchart9(div, yMin, yMax, precyzja, lata, d){

//console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_9").innerHTML = "National regular bus transport lines - regional (km)";
}
if (d==1) {
	document.getElementById("tytuł_9").innerHTML = "National regular bus transport lines - suburban (km)";
}
if (d==2) {
	document.getElementById("tytuł_9").innerHTML = "National regular bus transport lines - urban (km)";
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
			[{"w1":"POLAND","w2":"regionalne","2015":191483,"2022":75701},{"w1":"Dolnośląskie","w2":"regionalne","2015":9272,"2022":2615},{"w1":"Kujawsko-Pomorskie","w2":"regionalne","2015":26568,"2022":5006},{"w1":"Lubelskie","w2":"regionalne","2015":17814,"2022":6270},{"w1":"Lubuskie","w2":"regionalne","2015":6238,"2022":4195},{"w1":"Łódzkie","w2":"regionalne","2015":12600,"2022":5240},{"w1":"Małopolskie","w2":"regionalne","2015":3023,"2022":2697},{"w1":"Mazowieckie","w2":"regionalne","2015":30436,"2022":4407},{"w1":"Opolskie","w2":"regionalne","2015":3505,"2022":908},{"w1":"Podkarpackie","w2":"regionalne","2015":6137,"2022":6611},{"w1":"Podlaskie","w2":"regionalne","2015":8949,"2022":7782},{"w1":"Pomorskie","w2":"regionalne","2015":11728,"2022":9645},{"w1":"Śląskie","w2":"regionalne","2015":6481,"2022":1205},{"w1":"Świętokrzyskie","w2":"regionalne","2015":3412,"2022":380},{"w1":"Warmińsko-Mazurskie","w2":"regionalne","2015":12870,"2022":4018},{"w1":"Wielkopolskie","w2":"regionalne","2015":12797,"2022":7766},{"w1":"Zachodniopomorskie","w2":"regionalne","2015":19653,"2022":6956}],
	    // Data set #2
	    [{"w1":"POLAND","w2":"podmiejskie","2015":351801,"2022":250547},{"w1":"Dolnośląskie","w2":"podmiejskie","2015":27221,"2022":23288},{"w1":"Kujawsko-Pomorskie","w2":"podmiejskie","2015":39944,"2022":23160},{"w1":"Lubelskie","w2":"podmiejskie","2015":30667,"2022":15262},{"w1":"Lubuskie","w2":"podmiejskie","2015":15883,"2022":12656},{"w1":"Łódzkie","w2":"podmiejskie","2015":20231,"2022":14888},{"w1":"Małopolskie","w2":"podmiejskie","2015":7422,"2022":3594},{"w1":"Mazowieckie","w2":"podmiejskie","2015":56062,"2022":21302},{"w1":"Opolskie","w2":"podmiejskie","2015":9771,"2022":13488},{"w1":"Podkarpackie","w2":"podmiejskie","2015":18118,"2022":22649},{"w1":"Podlaskie","w2":"podmiejskie","2015":15205,"2022":10939},{"w1":"Pomorskie","w2":"podmiejskie","2015":18495,"2022":17578},{"w1":"Śląskie","w2":"podmiejskie","2015":16019,"2022":7857},{"w1":"Świętokrzyskie","w2":"podmiejskie","2015":9601,"2022":6580},{"w1":"Warmińsko-Mazurskie","w2":"podmiejskie","2015":16317,"2022":7760},{"w1":"Wielkopolskie","w2":"podmiejskie","2015":31262,"2022":27344},{"w1":"Zachodniopomorskie","w2":"podmiejskie","2015":19583,"2022":22202}],
	    // Data set #3
	    [{"w1":"POLAND","w2":"miejskie","2015":2092,"2022":808},{"w1":"Dolnośląskie","w2":"miejskie","2015":135,"2022":218},{"w1":"Kujawsko-Pomorskie","w2":"miejskie","2015":131,"2022":0},{"w1":"Lubelskie","w2":"miejskie","2015":20,"2022":0},{"w1":"Lubuskie","w2":"miejskie","2015":62,"2022":0},{"w1":"Łódzkie","w2":"miejskie","2015":100,"2022":138},{"w1":"Małopolskie","w2":"miejskie","2015":89,"2022":0},{"w1":"Mazowieckie","w2":"miejskie","2015":476,"2022":10},{"w1":"Opolskie","w2":"miejskie","2015":70,"2022":70},{"w1":"Podkarpackie","w2":"miejskie","2015":60,"2022":0},{"w1":"Podlaskie","w2":"miejskie","2015":50,"2022":35},{"w1":"Pomorskie","w2":"miejskie","2015":220,"2022":60},{"w1":"Śląskie","w2":"miejskie","2015":253,"2022":229},{"w1":"Świętokrzyskie","w2":"miejskie","2015":0,"2022":0},{"w1":"Warmińsko-Mazurskie","w2":"miejskie","2015":313,"2022":0},{"w1":"Wielkopolskie","w2":"miejskie","2015":62,"2022":0},{"w1":"Zachodniopomorskie","w2":"miejskie","2015":51,"2022":48}]
	  ];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

//root.locale = am5locales_pl_PL;
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

	var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30, strokeOpacity: 0.1 });
	yRenderer.labels.template.setAll({
		fontSize: 12
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
      tooltipText: "{categoryX}, {name}: {valueY.formatNumber('#,###')}",
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
