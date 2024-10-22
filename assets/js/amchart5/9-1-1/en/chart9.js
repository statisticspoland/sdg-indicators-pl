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
	    [{"w1":"POLAND","w2":"regionalne","2015":191483,"2023":81569},{"w1":"Dolnośląskie","w2":"regionalne","2015":9272,"2023":2770},{"w1":"Kujawsko-Pomorskie","w2":"regionalne","2015":26568,"2023":7949},{"w1":"Lubelskie","w2":"regionalne","2015":17814,"2023":6483},{"w1":"Lubuskie","w2":"regionalne","2015":6238,"2023":3501},{"w1":"Łódzkie","w2":"regionalne","2015":12600,"2023":6123},{"w1":"Małopolskie","w2":"regionalne","2015":3023,"2023":4256},{"w1":"Mazowieckie","w2":"regionalne","2015":30436,"2023":4605},{"w1":"Opolskie","w2":"regionalne","2015":3505,"2023":824},{"w1":"Podkarpackie","w2":"regionalne","2015":6137,"2023":5091},{"w1":"Podlaskie","w2":"regionalne","2015":8949,"2023":7647},{"w1":"Pomorskie","w2":"regionalne","2015":11728,"2023":10728},{"w1":"Śląskie","w2":"regionalne","2015":6481,"2023":893},{"w1":"Świętokrzyskie","w2":"regionalne","2015":3412,"2023":3716},{"w1":"Warmińsko-Mazurskie","w2":"regionalne","2015":12870,"2023":4470},{"w1":"Wielkopolskie","w2":"regionalne","2015":12797,"2023":3710},{"w1":"Zachodniopomorskie","w2":"regionalne","2015":19653,"2023":8803}],
	    // Data set #2
	    [{"w1":"POLAND","w2":"podmiejskie","2015":351801,"2023":266668},{"w1":"Dolnośląskie","w2":"podmiejskie","2015":27221,"2023":21639},{"w1":"Kujawsko-Pomorskie","w2":"podmiejskie","2015":39944,"2023":25570},{"w1":"Lubelskie","w2":"podmiejskie","2015":30667,"2023":15499},{"w1":"Lubuskie","w2":"podmiejskie","2015":15883,"2023":11789},{"w1":"Łódzkie","w2":"podmiejskie","2015":20231,"2023":17751},{"w1":"Małopolskie","w2":"podmiejskie","2015":7422,"2023":4083},{"w1":"Mazowieckie","w2":"podmiejskie","2015":56062,"2023":26353},{"w1":"Opolskie","w2":"podmiejskie","2015":9771,"2023":12577},{"w1":"Podkarpackie","w2":"podmiejskie","2015":18118,"2023":23865},{"w1":"Podlaskie","w2":"podmiejskie","2015":15205,"2023":12916},{"w1":"Pomorskie","w2":"podmiejskie","2015":18495,"2023":18213},{"w1":"Śląskie","w2":"podmiejskie","2015":16019,"2023":7626},{"w1":"Świętokrzyskie","w2":"podmiejskie","2015":9601,"2023":9705},{"w1":"Warmińsko-Mazurskie","w2":"podmiejskie","2015":16317,"2023":10240},{"w1":"Wielkopolskie","w2":"podmiejskie","2015":31262,"2023":29163},{"w1":"Zachodniopomorskie","w2":"podmiejskie","2015":19583,"2023":19679}],
	    // Data set #3
	    [{"w1":"POLAND","w2":"miejskie","2015":2092,"2023":752},{"w1":"Dolnośląskie","w2":"miejskie","2015":135,"2023":301},{"w1":"Kujawsko-Pomorskie","w2":"miejskie","2015":131,"2023":0},{"w1":"Lubelskie","w2":"miejskie","2015":20,"2023":0},{"w1":"Lubuskie","w2":"miejskie","2015":62,"2023":0},{"w1":"Łódzkie","w2":"miejskie","2015":100,"2023":0},{"w1":"Małopolskie","w2":"miejskie","2015":89,"2023":0},{"w1":"Mazowieckie","w2":"miejskie","2015":476,"2023":10},{"w1":"Opolskie","w2":"miejskie","2015":70,"2023":70},{"w1":"Podkarpackie","w2":"miejskie","2015":60,"2023":0},{"w1":"Podlaskie","w2":"miejskie","2015":50,"2023":35},{"w1":"Pomorskie","w2":"miejskie","2015":220,"2023":60},{"w1":"Śląskie","w2":"miejskie","2015":253,"2023":228},{"w1":"Świętokrzyskie","w2":"miejskie","2015":0,"2023":0},{"w1":"Warmińsko-Mazurskie","w2":"miejskie","2015":313,"2023":0},{"w1":"Wielkopolskie","w2":"miejskie","2015":62,"2023":0},{"w1":"Zachodniopomorskie","w2":"miejskie","2015":51,"2023":48}]
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
