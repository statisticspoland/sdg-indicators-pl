function createchart9(div, yMin, yMax, precyzja, lata, d){

//console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_9").innerHTML = "Krajowe linie regularnej komunikacji autobusowej - regionalne (km)";
}
if (d==1) {
	document.getElementById("tytuł_9").innerHTML = "Krajowe linie regularnej komunikacji autobusowej - podmiejskie (km)";
}
if (d==2) {
	document.getElementById("tytuł_9").innerHTML = "Krajowe linie regularnej komunikacji autobusowej - miejskie (km)";
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
    [{"w1":"POLSKA","w2":"regionalne","2015":191483,"2024":94166},{"w1":"Dolnośląskie","w2":"regionalne","2015":9272,"2024":2219},{"w1":"Kujawsko-Pomorskie","w2":"regionalne","2015":26568,"2024":6304},{"w1":"Lubelskie","w2":"regionalne","2015":17814,"2024":6079},{"w1":"Lubuskie","w2":"regionalne","2015":6238,"2024":3438},{"w1":"Łódzkie","w2":"regionalne","2015":12600,"2024":12651},{"w1":"Małopolskie","w2":"regionalne","2015":3023,"2024":3007},{"w1":"Mazowieckie","w2":"regionalne","2015":30436,"2024":5814},{"w1":"Opolskie","w2":"regionalne","2015":3505,"2024":768},{"w1":"Podkarpackie","w2":"regionalne","2015":6137,"2024":3931},{"w1":"Podlaskie","w2":"regionalne","2015":8949,"2024":11875},{"w1":"Pomorskie","w2":"regionalne","2015":11728,"2024":11346},{"w1":"Śląskie","w2":"regionalne","2015":6481,"2024":1052},{"w1":"Świętokrzyskie","w2":"regionalne","2015":3412,"2024":3689},{"w1":"Warmińsko-Mazurskie","w2":"regionalne","2015":12870,"2024":3952},{"w1":"Wielkopolskie","w2":"regionalne","2015":12797,"2024":4155},{"w1":"Zachodniopomorskie","w2":"regionalne","2015":19653,"2024":13886}],
    // Data set #2
    [{"w1":"POLSKA","w2":"podmiejskie","2015":351801,"2024":273866},{"w1":"Dolnośląskie","w2":"podmiejskie","2015":27221,"2024":21765},{"w1":"Kujawsko-Pomorskie","w2":"podmiejskie","2015":39944,"2024":24476},{"w1":"Lubelskie","w2":"podmiejskie","2015":30667,"2024":15208},{"w1":"Lubuskie","w2":"podmiejskie","2015":15883,"2024":11737},{"w1":"Łódzkie","w2":"podmiejskie","2015":20241,"2024":14509},{"w1":"Małopolskie","w2":"podmiejskie","2015":7422,"2024":5292},{"w1":"Mazowieckie","w2":"podmiejskie","2015":56062,"2024":34715},{"w1":"Opolskie","w2":"podmiejskie","2015":9771,"2024":12982},{"w1":"Podkarpackie","w2":"podmiejskie","2015":18118,"2024":20415},{"w1":"Podlaskie","w2":"podmiejskie","2015":15205,"2024":16780},{"w1":"Pomorskie","w2":"podmiejskie","2015":18495,"2024":17387},{"w1":"Śląskie","w2":"podmiejskie","2015":16019,"2024":6578},{"w1":"Świętokrzyskie","w2":"podmiejskie","2015":9601,"2024":10103},{"w1":"Warmińsko-Mazurskie","w2":"podmiejskie","2015":16317,"2024":15603},{"w1":"Wielkopolskie","w2":"podmiejskie","2015":31262,"2024":30621},{"w1":"Zachodniopomorskie","w2":"podmiejskie","2015":19583,"2024":15695}],
    // Data set #3
    [{"w1":"POLSKA","w2":"miejskie","2015":2092,"2024":820},{"w1":"Dolnośląskie","w2":"miejskie","2015":135,"2024":301},{"w1":"Kujawsko-Pomorskie","w2":"miejskie","2015":131,"2024":0},{"w1":"Lubelskie","w2":"miejskie","2015":20,"2024":0},{"w1":"Lubuskie","w2":"miejskie","2015":62,"2024":0},{"w1":"Łódzkie","w2":"miejskie","2015":100,"2024":0},{"w1":"Małopolskie","w2":"miejskie","2015":89,"2024":0},{"w1":"Mazowieckie","w2":"miejskie","2015":476,"2024":10},{"w1":"Opolskie","w2":"miejskie","2015":70,"2024":95},{"w1":"Podkarpackie","w2":"miejskie","2015":60,"2024":0},{"w1":"Podlaskie","w2":"miejskie","2015":50,"2024":30},{"w1":"Pomorskie","w2":"miejskie","2015":220,"2024":59},{"w1":"Śląskie","w2":"miejskie","2015":253,"2024":252},{"w1":"Świętokrzyskie","w2":"miejskie","2015":0,"2024":0},{"w1":"Warmińsko-Mazurskie","w2":"miejskie","2015":313,"2024":64},{"w1":"Wielkopolskie","w2":"miejskie","2015":62,"2024":0},{"w1":"Zachodniopomorskie","w2":"miejskie","2015":51,"2024":9}]
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
  if (target.dataItem.get("categoryX") == "POLSKA") {
    if (series.get("name") == "2024"){
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
