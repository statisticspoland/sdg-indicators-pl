
  //am5.ready(function() {
function createMapWojKart(div, dane, jez, precyzja){

  am5.array.each(am5.registry.rootElements,
    function(root) {
      if (typeof root !== "undefined") {
        if (root.dom.id == div) {
          root.dispose();
        }
      }
    }
  );

  // Create root
  // console.log("dane...",dane);
  var root = am5.Root.new(div);

  if(jez != "en"){
    root.locale = am5locales_pl_PL;
  }
  //root.numberFormatter.set("numberFormat", "#,##0.0");

  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  // Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "none",
    panY: "none",
    wheelY: "none",
    projection: am5map.geoMercator(),
    layout: root.horizontalLayout
  }));

    // Create polygon series
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_polandLow,
    valueField: "value",
    calculateAggregates: true
  }));

  function formatNumberLocalized(value, precyzja, jez) {
  let parts = Number(value).toFixed(precyzja).split(".");

  // Dodaj separator tysięcy
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, jez === "pl" ? " " : ",");

  // Połącz z separatorem dziesiętnym
  const decimalSeparator = jez === "pl" ? "," : ".";
  return parts.join(decimalSeparator);
  }

  polygonSeries.mapPolygons.template.adapters.add("tooltipText", function(_, target) {
    const name = target.dataItem?.dataContext?.name;
    const value = target.dataItem?.dataContext?.value;

    if (name != null && !isNaN(value)) {
      const formattedValue = formatNumberLocalized(value, precyzja, jez);
      return `${name}: ${formattedValue}`;
    }

    if (name != null && isNaN(value)) {
      const noDataText = jez === "pl" ? "Brak danych" : "No data";
      return `${name}: ${noDataText}`;
    }

    return "";
  });

  polygonSeries.mapPolygons.template.setAll({
    //tooltipText: "{name}: {value.formatNumber('#,##0.0')}",
    fill: am5.color(0xbfbfbf),  //kolor dla braku danych
    stroke: am5.color(0xffffff) //kolor krawedzi
    //stroke: am5.color(0xe0ccff) //kolor krawedzi
  });

  polygonSeries.set("heatRules", [{
    target: polygonSeries.mapPolygons.template,
    dataField: "value",
    min: am5.color(0xc1d8f1),
    //min: am5.color(0xf0e6ff),
    max: am5.color(0xc1d8f1),
    //max: am5.color(0xb380ff),
    key: "fill"
  }]);

  function formatDecimal(value, precyzja, jez) {
  let formatted = Number(value).toFixed(precyzja);
  if (jez === "pl") {
    formatted = formatted.replace(".", ",");
  }
  return formatted;
  }

  polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
    const value = ev.target.dataItem.get("value");
    //heatLegend.showValue(ev.target.dataItem.get("value"));
  });

  //console.log("data_filtered", dane);
  polygonSeries.data.setAll(dane);


  var cities = [
    {
      title: "Białystok",
      latitude: 53.1439,
      longitude: 22.9409242,
      id: "PL-20"
    },
    {
      title: "Gdańsk",
      latitude:  54.2595652,
      longitude: 18.0626726,
      id: "PL-22"
    },
    {
      title: "Katowice",
      latitude: 50.5,
      longitude: 19.0,
      id: "PL-24"
    },
    {
      title: "Kielce",
      latitude: 50.7,
      longitude: 20.6,
      id: "PL-26"
    },
    {
      title: "Kraków",
      latitude: 49.951126,
      longitude: 20.0295279,
      id: "PL-12"
    },
    {
      title: "Łódź",
      latitude: 51.7,
      longitude: 19.5,
      id: "PL-10"
    },
    {
      title: "Lublin",
      latitude: 51.1729352,
      longitude: 22.5252236,
      id: "PL-06"
    },
    {
      title: "Olsztyn",
      latitude: 53.8041573,
      longitude: 20.5172955,
      id: "PL-28"
    },
    {
      title: "Opole",
      latitude: 50.8,
      longitude: 17.8,
      id: "PL-16"
    },
    {
      title: "Poznań",
      latitude:  52.3,
      longitude: 17.2,
      id: "PL-30"
    },
    {
      title: "Rzeszów",
      latitude: 49.8248861,
      longitude: 22.2113309,
      id: "PL-18"
    },
    {
      title: "Szczecin",
      latitude: 53.5,
      longitude: 15.5,
      id: "PL-32"
    },
    {
      title: "Warszawa",
      latitude: 52.3048888,
      longitude: 21.1970899,
      id: "PL-14"
    },
    {
      title: "Wrocław",
      latitude: 51.1989688,
      longitude: 16.5,
      id: "PL-02"
    },
    {
      title: "Zielona Góra",
      latitude: 52.1,
      longitude: 15.3,
      id: "PL-08"
    },
    {
      title: "Toruń",
      latitude: 53.0,
      longitude: 18.5,
      id: "PL-04"
    }
  ];

  for (var i = 0; i < cities.length; i++) {
    var ch = cities[i];
    const item = dane.find(obj => obj.id === ch.id);
    ch.value = item?.value;
  }

  //console.log(cities);

  let pointSeries = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  );

  const pointValues = cities
    .map(c => c.value)
    .filter(v => !isNaN(v));

  const minPointValue = Math.min(...pointValues);
  const maxPointValue = Math.max(...pointValues);

  function calculateEqualRanges(min, max, count) {
    const ranges = [];
    const step = (max - min) / count;

    for (let i = 0; i < count; i++) {
      const from = Math.round(min + step * i);
      const to   = Math.round(
        i === count - 1 ? max : min + step * (i + 1)
      );

      const r = 5*i+10;

      //console.log("from: ", from);
      //console.log("to: ", to);
      ranges.push({ min: from, max: to, radius: r});
    }

    return ranges;
  }

  const ranges = calculateEqualRanges(minPointValue, maxPointValue, 5);
  //console.log(ranges);

  function findRange(value, ranges) {
    return ranges.find(range => value >= range.min && value <= range.max);
  }

  function findRangeFromRadius(radius, ranges) {
    return ranges.find(range => radius == range.radius);
  }

  function radiusFromValue(value) {
    //if (maxPointValue === minPointValue) return 20;
    //const normalized = (value - minPointValue) / (maxPointValue - minPointValue);
    //return 5 + normalized * (40 - 5);
    return findRange(value, ranges).radius;
  }

  // Put the circle into the point series
  pointSeries.bullets.push(function(root, series, dataItem) {

    const value = dataItem.dataContext.value;
    const radius = radiusFromValue(value);

    let circle = am5.Circle.new(root, {
      radius: radius,
      fill: am5.color(0x67b7dc),
      fillOpacity: 1.0,
      stroke: am5.color(0xffffff),
      strokeWidth: 1
    });

    return am5.Bullet.new(root, { sprite: circle });
  });

  const numericValues = dane.map(o => o.value).filter(v => !isNaN(v));

  let startText, endText;
  let startColor = am5.color(0xc1d8f1);
  let endColor = am5.color(0x6794dc);

  if (numericValues.length > 0) {
    startText = formatNumberLocalized(Math.min(...numericValues), precyzja, jez);
    endText = formatNumberLocalized(Math.max(...numericValues), precyzja, jez);
  } else {
    // brak danych w ogóle
    startText = jez === "pl" ? "Brak danych" : "No data";
    endText = startText;

    // opcjonalnie ustaw oba kolory na szary
    startColor = endColor = am5.color(0xcccccc);
  }

  // Legend container
  var legendContainer = root.container.children.push(
    am5.Container.new(root, {
      layout: root.verticalLayout,
      x: am5.p100,
      centerX: am5.p100,
      y: am5.p50,
      centerY: am5.p50,
      width: 100
    })
  );

  // Legend data (example)
  var legendData = [
    { color: am5.color(0x67b7dc), radius:10},
    { color: am5.color(0x67b7dc), radius:15},
    { color: am5.color(0x67b7dc), radius:20},
    { color: am5.color(0x67b7dc), radius:25},
    { color: am5.color(0x67b7dc), radius:30}
  ];

  // Build legend items
  legendData.forEach(function(item) {
    var row = legendContainer.children.push(
      am5.Container.new(root, {
        layout: am5.GridLayout.new(root, {
          maxColumns: 2,
          fixedWidthGrid: true
        }),
        width: am5.p100,
        marginBottom: 5
      })
    );


    const matchedRange = findRangeFromRadius(item.radius, ranges);
    //console.log(matchedRange);

    item.label = `${matchedRange.min} - ${matchedRange.max}`;
    // Bullet
    row.children.push(
      am5.Circle.new(root, {
        radius: item.radius,
        fill: item.color,
        marginLeft: 50-item.radius
      })
    );

    // Label
    row.children.push(
      am5.Label.new(root, {
        text: item.label,
        fontSize: 13,
        fill: am5.color(0x000000)
      })
    );
  });


  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0xffeecc)
  });

  for (var i = 0; i < cities.length; i++) {
    var ch = cities[i];

    //console.log(ch);
    pointSeries.data.push({
      //latitude: 53.13333,
      //longitude: 23.16433
      geometry: { type: "Point", coordinates: [ch.longitude, ch.latitude] },
      id: ch.id,
      value: ch.value
    });
  }

  //console.log(polygonSeries.dataItems);
}
