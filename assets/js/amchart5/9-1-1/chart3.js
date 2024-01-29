//function createStackedRotatedBarChart(div, dane, yMax, yMin, precyzja, wymiary){
function createchart3(div, dane, wymiary){
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new(div);

    root.locale = am5locales_pl_PL;
    root.numberFormatter.set("numberFormat", "#,###.");

    var myTheme = am5.Theme.new(root);

    myTheme.rule("Grid", ["base"]).setAll({
      strokeOpacity: 0.1
    });


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      myTheme
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomY",
      layout: root.verticalLayout,
	  maxWidth: 475
	  //scale: 0.8
    }));

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    //chart.set("scrollbarY", am5.Scrollbar.new(root, {
    //  orientation: "vertical"
    //}));

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root, {});
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: yRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    yRenderer.grid.template.setAll({
      location: 1
    });

    yRenderer.labels.template.setAll({
      fontSize: 12,
    });

    yAxis.data.setAll(dane);

    var xRenderer = am5xy.AxisRendererX.new(root, { strokeOpacity: 0.1 });
    xRenderer.labels.template.setAll({
      fontSize: 12,
    });

    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      //maxPrecision: precyzja,
      //max: yMax,
      //min: yMin,
      renderer: xRenderer
    }));

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }));

    legend.labels.template.setAll({
  	  fontSize: 12,
  	});
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        fontSize: 12,
        baseAxis: yAxis,
        valueXField: fieldName,
        categoryYField: "year"
      }));

      series.columns.template.setAll({
        tooltipText: "{categoryY}, {name}: {valueX.formatNumber('#,###.')}",
        tooltipY: am5.percent(90)
      });
      series.data.setAll(dane);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: "{valueX}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            fontSize: 12,
            populateText: true,
            rotation: -90
          })
        });
      });

      legend.data.push(series);
    }

    wymiary.forEach((item, i) => {
      makeSeries(item, item);
    });


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

}
