function replaceLetter(word){
    word=word.replace("ę","e");
    word=word.replace("ó","o");
    word=word.replace("ą","a");
    word=word.replace("ś","s");
    word=word.replace("ł","l");
    word=word.replace("Ł","L");
    word=word.replace("ż","z");
    word=word.replace("ź","z");
    word=word.replace("ć","c");
    word=word.replace("ń","n");

    word=word.replace(" ","_");
    return word;
}

function createCityMap(div){
  console.log("tworzenie mapy z miastami");
  var root  = am5.Root.new(div);

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  // Create the map chart
  // https://www.amcharts.com/docs/v5/charts/map-chart/
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "rotateX",
    panY: "translateY",
    projection: am5map.geoMercator()
  }));


  // Create main polygon series for countries
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_polandLow
  }));


  // Create point series for markers
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
  var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

  var currentActiveBullet;

  var firstClick = true;
  var warsawPoint = chart.series.push(
    am5map.MapPointSeries.new(root, {})
  );
  var warsaw = warsawPoint.pushDataItem({ latitude: 52.22977, longitude: 21.01178 });
  warsawPoint.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        fill: am5.color(0xffcc00),
        radius: 7,
        tooltipY: 0,
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
        tooltipText: "{title}"
      })
    });
  });

  pointSeries.bullets.push(function () {
    var circle = am5.Circle.new(root, {
      radius: 4,
      tooltipY: 0,
      fill: am5.color(0xddccff),
      stroke: root.interfaceColors.get("background"),
      strokeWidth: 2,
      tooltipText: "{title}",
      toggleKey: "active"
      //active: true
    });

    circle.events.on("click", function(ev) {
      if (firstClick){ warsawPoint.bullets.clear(); firstClick = false;}
      //console.log(ev.target.dataItem.dataContext.title);
      var city = ev.target.dataItem.dataContext.title;
      changeMapImg(replaceLetter(city));
      createTable(city);
      changeCityDesc(city);
    });

    circle.states.create("hover", {
      fill: am5.color(0xffcc00)
    });

    circle.states.create("active", {
      fill: am5.color(0xffcc00),
      radius: 7
    });

    circle.on("active", function(active, target) {
      if (currentActiveBullet) {
        currentActiveBullet.set("active", false);
      }
      if (active) {
        currentActiveBullet = target;
      }
      else {
        currentActiveBullet = undefined;
      }
    });

    return am5.Bullet.new(root, {
      sprite: circle
    });
  });


  var cities = [
    {
      title: "Białystok",
      latitude: 53.13333,
      longitude: 23.16433
    },
    {
      title: "Bydgoszcz",
      latitude: 53.1235,
      longitude: 18.00762
    },
    {
      title: "Gdańsk",
      latitude:  54.35205,
      longitude: 18.64637
    },
    {
      title: "Katowice",
      latitude: 50.25841,
      longitude: 19.02754
    },
    {
      title: "Kielce",
      latitude: 50.87033,
      longitude: 20.62752
    },
    {
      title: "Kraków",
      latitude: 50.06143,
      longitude: 19.93658
    },
    {
      title: "Łódź",
      latitude: 51.75,
      longitude: 19.46667
    },
    {
      title: "Lublin",
      latitude: 51.25,
      longitude: 22.56667
    },
    {
      title: "Olsztyn",
      latitude: 53.77995,
      longitude: 20.49416
    },
    {
      title: "Opole",
      latitude: 50.67211,
      longitude: 17.92533
    },
    {
      title: "Poznań",
      latitude:  52.40692,
      longitude: 16.92993
    },
    {
      title: "Rzeszów",
      latitude: 50.04132,
      longitude: 21.99901
    },
    {
      title: "Szczecin",
      latitude: 53.42894,
      longitude: 14.55302
    },
    {
      title: "Warszawa",
      latitude: 52.22977,
      longitude: 21.01178
    },
    {
      title: "Wrocław",
      latitude: 51.1,
      longitude: 17.03333
    },
    {
      title: "Zielona Góra",
      latitude: 51.93548,
      longitude: 15.50643
    },
    {
      title: "Gorzów Wielkopolski",
      latitude: 52.7310,
      longitude: 15.2430
    },
    {
      title: "Toruń",
      latitude: 53.0117,
      longitude: 18.6129
    }
  ];

  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    addCity(city.longitude, city.latitude, city.title);
  }

  function addCity(longitude, latitude, title) {
    pointSeries.data.push({
      geometry: { type: "Point", coordinates: [longitude, latitude] },
      title: title
    });
  }

  // Make stuff animate on load
  chart.appear(1000, 100);

}
