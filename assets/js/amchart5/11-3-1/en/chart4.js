function createchart4(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: POLAND - cities (inhabitants)";
}
if (d==1) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Białystok (inhabitants)";
}
if (d==2) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Bydgoszcz (inhabitants)";
}
if (d==3) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Gdańsk (inhabitants)";
}
if (d==4) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Gorzów Wielkopolski (inhabitants)";
}
if (d==5) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Katowice (inhabitants)";
}
if (d==6) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Kielce (inhabitants)";
}
if (d==7) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Kraków (inhabitants)";
}
if (d==8) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Lublin (inhabitants)";
}
if (d==9) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Łódź (inhabitants)";
}
if (d==10) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Olsztyn (inhabitants)";
}
if (d==11) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Opole (inhabitants)";
}
if (d==12) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Poznań (inhabitants)";
}
if (d==13) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Rzeszów (inhabitants)";
}
if (d==14) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Szczecin (inhabitants)";
}
if (d==15) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Toruń (inhabitants)";
}
if (d==16) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Warszawa (inhabitants)";
}
if (d==17) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Wrocław (inhabitants)";
}
if (d==18) {
	document.getElementById("tytuł_4").innerHTML = "Net migration for permanent residence: Zielona Góra (inhabitants)";
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
    [{
	"w1": "POLAND - cities",
	"registrations for permanent residence": 209140,
	"registrations of departure": 233454,
	"year": "2016"
	}, {
	"w1": "POLAND - cities",
	"registrations for permanent residence": 221644,
	"registrations of departure": 246847,
	"year": "2017"
	}, {
	"w1": "POLAND - cities",
	"registrations for permanent residence": 251975,
	"registrations of departure": 278048,
	"year": "2018"
	}, {
	"w1": "POLAND - cities",
	"registrations for permanent residence": 262833,
	"registrations of departure": 288247,
	"year": "2019"
	}, {
	"w1": "POLAND - cities",
	"registrations for permanent residence": 202199,
	"registrations of departure": 238772,
	"year": "2020"
	}, {
	"w1": "POLAND - cities",
	"registrations for permanent residence": 221549,
	"registrations of departure": 268301,
	"year": "2021"
	}, {
	"w1": "POLAND - cities",
	"registrations for permanent residence": 203837,
	"registrations of departure": 255933,
	"year": "2022"
	}],
    // Data set #2
    [{
	"w1": "Białystok",
	"registrations for permanent residence": 2728,
	"registrations of departure": 2778,
	"year": "2016"
	}, {
	"w1": "Białystok",
	"registrations for permanent residence": 2954,
	"registrations of departure": 2979,
	"year": "2017"
	}, {
	"w1": "Białystok",
	"registrations for permanent residence": 3070,
	"registrations of departure": 3401,
	"year": "2018"
	}, {
	"w1": "Białystok",
	"registrations for permanent residence": 3076,
	"registrations of departure": 3508,
	"year": "2019"
	}, {
	"w1": "Białystok",
	"registrations for permanent residence": 2426,
	"registrations of departure": 2982,
	"year": "2020"
	}, {
	"w1": "Białystok",
	"registrations for permanent residence": 2697,
	"registrations of departure": 3275,
	"year": "2021"
	}, {
	"w1": "Białystok",
	"registrations for permanent residence": 2656,
	"registrations of departure": 3174,
	"year": "2022"
	}],
    // Data set #3
    [{
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 2336,
	"registrations of departure": 3147,
	"year": "2016"
	}, {
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 2345,
	"registrations of departure": 3234,
	"year": "2017"
	}, {
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 2770,
	"registrations of departure": 3826,
	"year": "2018"
	}, {
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 3010,
	"registrations of departure": 3996,
	"year": "2019"
	}, {
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 1973,
	"registrations of departure": 3674,
	"year": "2020"
	}, {
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 2109,
	"registrations of departure": 4091,
	"year": "2021"
	}, {
	"w1": "Bydgoszcz",
	"registrations for permanent residence": 1989,
	"registrations of departure": 3805,
	"year": "2022"
	}],
    // Data set #4
    [{
	"w1": "Gdańsk",
	"registrations for permanent residence": 2571,
	"registrations of departure": 4029,
	"year": "2016"
	}, {
	"w1": "Gdańsk",
	"registrations for permanent residence": 5309,
	"registrations of departure": 4505,
	"year": "2017"
	}, {
	"w1": "Gdańsk",
	"registrations for permanent residence": 6781,
	"registrations of departure": 4813,
	"year": "2018"
	}, {
	"w1": "Gdańsk",
	"registrations for permanent residence": 7691,
	"registrations of departure": 4570,
	"year": "2019"
	}, {
	"w1": "Gdańsk",
	"registrations for permanent residence": 4869,
	"registrations of departure": 3790,
	"year": "2020"
	}, {
	"w1": "Gdańsk",
	"registrations for permanent residence": 5559,
	"registrations of departure": 4552,
	"year": "2021"
	}, {
	"w1": "Gdańsk",
	"registrations for permanent residence": 5167,
	"registrations of departure": 4303,
	"year": "2022"
	}],
    // Data set #5
    [{
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 1215,
	"registrations of departure": 1081,
	"year": "2016"
	}, {
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 1152,
	"registrations of departure": 1196,
	"year": "2017"
	}, {
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 1256,
	"registrations of departure": 1322,
	"year": "2018"
	}, {
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 1233,
	"registrations of departure": 1479,
	"year": "2019"
	}, {
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 996,
	"registrations of departure": 1372,
	"year": "2020"
	}, {
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 985,
	"registrations of departure": 1514,
	"year": "2021"
	}, {
	"w1": "Gorzów Wielkopolski",
	"registrations for permanent residence": 886,
	"registrations of departure": 1538,
	"year": "2022"
	}],
    // Data set #6
    [{
	"w1": "Katowice",
	"registrations for permanent residence": 2471,
	"registrations of departure": 3308,
	"year": "2016"
	}, {
	"w1": "Katowice",
	"registrations for permanent residence": 2783,
	"registrations of departure": 3508,
	"year": "2017"
	}, {
	"w1": "Katowice",
	"registrations for permanent residence": 3020,
	"registrations of departure": 3772,
	"year": "2018"
	}, {
	"w1": "Katowice",
	"registrations for permanent residence": 3149,
	"registrations of departure": 3843,
	"year": "2019"
	}, {
	"w1": "Katowice",
	"registrations for permanent residence": 2709,
	"registrations of departure": 3074,
	"year": "2020"
	}, {
	"w1": "Katowice",
	"registrations for permanent residence": 3557,
	"registrations of departure": 3640,
	"year": "2021"
	}, {
	"w1": "Katowice",
	"registrations for permanent residence": 2800,
	"registrations of departure": 3288,
	"year": "2022"
	}],
    // Data set #7
    [{
	"w1": "Kielce",
	"registrations for permanent residence": 1507,
	"registrations of departure": 1729,
	"year": "2016"
	}, {
	"w1": "Kielce",
	"registrations for permanent residence": 1366,
	"registrations of departure": 1936,
	"year": "2017"
	}, {
	"w1": "Kielce",
	"registrations for permanent residence": 1696,
	"registrations of departure": 2278,
	"year": "2018"
	}, {
	"w1": "Kielce",
	"registrations for permanent residence": 1849,
	"registrations of departure": 2323,
	"year": "2019"
	}, {
	"w1": "Kielce",
	"registrations for permanent residence": 1475,
	"registrations of departure": 1826,
	"year": "2020"
	}, {
	"w1": "Kielce",
	"registrations for permanent residence": 1694,
	"registrations of departure": 2168,
	"year": "2021"
	}, {
	"w1": "Kielce",
	"registrations for permanent residence": 1471,
	"registrations of departure": 2158,
	"year": "2022"
	}],
    // Data set #8
    [{
	"w1": "Kraków",
	"registrations for permanent residence": 7432,
	"registrations of departure": 5625,
	"year": "2016"
	}, {
	"w1": "Kraków",
	"registrations for permanent residence": 8207,
	"registrations of departure": 6205,
	"year": "2017"
	}, {
	"w1": "Kraków",
	"registrations for permanent residence": 11253,
	"registrations of departure": 6539,
	"year": "2018"
	}, {
	"w1": "Kraków",
	"registrations for permanent residence": 13974,
	"registrations of departure": 7002,
	"year": "2019"
	}, {
	"w1": "Kraków",
	"registrations for permanent residence": 8680,
	"registrations of departure": 6177,
	"year": "2020"
	}, {
	"w1": "Kraków",
	"registrations for permanent residence": 10463,
	"registrations of departure": 7226,
	"year": "2021"
	}, {
	"w1": "Kraków",
	"registrations for permanent residence": 9244,
	"registrations of departure": 7358,
	"year": "2022"
	}],
    // Data set #9
    [{
	"w1": "Lublin",
	"registrations for permanent residence": 2952,
	"registrations of departure": 3175,
	"year": "2016"
	}, {
	"w1": "Lublin",
	"registrations for permanent residence": 3074,
	"registrations of departure": 3353,
	"year": "2017"
	}, {
	"w1": "Lublin",
	"registrations for permanent residence": 3634,
	"registrations of departure": 3789,
	"year": "2018"
	}, {
	"w1": "Lublin",
	"registrations for permanent residence": 4141,
	"registrations of departure": 3948,
	"year": "2019"
	}, {
	"w1": "Lublin",
	"registrations for permanent residence": 3073,
	"registrations of departure": 3255,
	"year": "2020"
	}, {
	"w1": "Lublin",
	"registrations for permanent residence": 3461,
	"registrations of departure": 3838,
	"year": "2021"
	}, {
	"w1": "Lublin",
	"registrations for permanent residence": 2946,
	"registrations of departure": 3545,
	"year": "2022"
	}],
    // Data set #10
    [{
	"w1": "Łódź",
	"registrations for permanent residence": 3696,
	"registrations of departure": 4528,
	"year": "2016"
	}, {
	"w1": "Łódź",
	"registrations for permanent residence": 3714,
	"registrations of departure": 4951,
	"year": "2017"
	}, {
	"w1": "Łódź",
	"registrations for permanent residence": 4234,
	"registrations of departure": 5432,
	"year": "2018"
	}, {
	"w1": "Łódź",
	"registrations for permanent residence": 4448,
	"registrations of departure": 5534,
	"year": "2019"
	}, {
	"w1": "Łódź",
	"registrations for permanent residence": 3356,
	"registrations of departure": 4694,
	"year": "2020"
	}, {
	"w1": "Łódź",
	"registrations for permanent residence": 3855,
	"registrations of departure": 5149,
	"year": "2021"
	}, {
	"w1": "Łódź",
	"registrations for permanent residence": 3784,
	"registrations of departure": 4884,
	"year": "2022"
	}],
    // Data set #11
    [{
	"w1": "Olsztyn",
	"registrations for permanent residence": 1844,
	"registrations of departure": 1809,
	"year": "2016"
	}, {
	"w1": "Olsztyn",
	"registrations for permanent residence": 1915,
	"registrations of departure": 2050,
	"year": "2017"
	}, {
	"w1": "Olsztyn",
	"registrations for permanent residence": 2165,
	"registrations of departure": 2580,
	"year": "2018"
	}, {
	"w1": "Olsztyn",
	"registrations for permanent residence": 2292,
	"registrations of departure": 2688,
	"year": "2019"
	}, {
	"w1": "Olsztyn",
	"registrations for permanent residence": 1788,
	"registrations of departure": 2132,
	"year": "2020"
	}, {
	"w1": "Olsztyn",
	"registrations for permanent residence": 1862,
	"registrations of departure": 2136,
	"year": "2021"
	}, {
	"w1": "Olsztyn",
	"registrations for permanent residence": 1586,
	"registrations of departure": 2009,
	"year": "2022"
	}],
    // Data set #12
    [{
	"w1": "Opole",
	"registrations for permanent residence": 1199,
	"registrations of departure": 1115,
	"year": "2016"
	}, {
	"w1": "Opole",
	"registrations for permanent residence": 1219,
	"registrations of departure": 1144,
	"year": "2017"
	}, {
	"w1": "Opole",
	"registrations for permanent residence": 1442,
	"registrations of departure": 1174,
	"year": "2018"
	}, {
	"w1": "Opole",
	"registrations for permanent residence": 1542,
	"registrations of departure": 1352,
	"year": "2019"
	}, {
	"w1": "Opole",
	"registrations for permanent residence": 1231,
	"registrations of departure": 1155,
	"year": "2020"
	}, {
	"w1": "Opole",
	"registrations for permanent residence": 1278,
	"registrations of departure": 1268,
	"year": "2021"
	}, {
	"w1": "Opole",
	"registrations for permanent residence": 1194,
	"registrations of departure": 1167,
	"year": "2022"
	}],
    // Data set #13
    [{
	"w1": "Poznań",
	"registrations for permanent residence": 4842,
	"registrations of departure": 6650,
	"year": "2016"
	}, {
	"w1": "Poznań",
	"registrations for permanent residence": 4893,
	"registrations of departure": 6762,
	"year": "2017"
	}, {
	"w1": "Poznań",
	"registrations for permanent residence": 5880,
	"registrations of departure": 7767,
	"year": "2018"
	}, {
	"w1": "Poznań",
	"registrations for permanent residence": 6416,
	"registrations of departure": 8109,
	"year": "2019"
	}, {
	"w1": "Poznań",
	"registrations for permanent residence": 4820,
	"registrations of departure": 6543,
	"year": "2020"
	}, {
	"w1": "Poznań",
	"registrations for permanent residence": 5645,
	"registrations of departure": 6848,
	"year": "2021"
	}, {
	"w1": "Poznań",
	"registrations for permanent residence": 4673,
	"registrations of departure": 6223,
	"year": "2022"
	}],
    // Data set #14
    [{
	"w1": "Rzeszów",
	"registrations for permanent residence": 2925,
	"registrations of departure": 1722,
	"year": "2016"
	}, {
	"w1": "Rzeszów",
	"registrations for permanent residence": 3146,
	"registrations of departure": 2117,
	"year": "2017"
	}, {
	"w1": "Rzeszów",
	"registrations for permanent residence": 3501,
	"registrations of departure": 2219,
	"year": "2018"
	}, {
	"w1": "Rzeszów",
	"registrations for permanent residence": 3747,
	"registrations of departure": 2284,
	"year": "2019"
	}, {
	"w1": "Rzeszów",
	"registrations for permanent residence": 2825,
	"registrations of departure": 1968,
	"year": "2020"
	}, {
	"w1": "Rzeszów",
	"registrations for permanent residence": 3450,
	"registrations of departure": 2153,
	"year": "2021"
	}, {
	"w1": "Rzeszów",
	"registrations for permanent residence": 2895,
	"registrations of departure": 2126,
	"year": "2022"
	}],
    // Data set #15
    [{
	"w1": "Szczecin",
	"registrations for permanent residence": 3396,
	"registrations of departure": 3293,
	"year": "2016"
	}, {
	"w1": "Szczecin",
	"registrations for permanent residence": 3677,
	"registrations of departure": 3565,
	"year": "2017"
	}, {
	"w1": "Szczecin",
	"registrations for permanent residence": 4120,
	"registrations of departure": 3883,
	"year": "2018"
	}, {
	"w1": "Szczecin",
	"registrations for permanent residence": 4579,
	"registrations of departure": 3939,
	"year": "2019"
	}, {
	"w1": "Szczecin",
	"registrations for permanent residence": 3042,
	"registrations of departure": 3370,
	"year": "2020"
	}, {
	"w1": "Szczecin",
	"registrations for permanent residence": 3163,
	"registrations of departure": 3908,
	"year": "2021"
	}, {
	"w1": "Szczecin",
	"registrations for permanent residence": 3054,
	"registrations of departure": 3700,
	"year": "2022"
	}],
    // Data set #16
    [{
	"w1": "Toruń",
	"registrations for permanent residence": 1795,
	"registrations of departure": 2053,
	"year": "2016"
	}, {
	"w1": "Toruń",
	"registrations for permanent residence": 1934,
	"registrations of departure": 2025,
	"year": "2017"
	}, {
	"w1": "Toruń",
	"registrations for permanent residence": 2112,
	"registrations of departure": 2483,
	"year": "2018"
	}, {
	"w1": "Toruń",
	"registrations for permanent residence": 2157,
	"registrations of departure": 2521,
	"year": "2019"
	}, {
	"w1": "Toruń",
	"registrations for permanent residence": 1784,
	"registrations of departure": 2119,
	"year": "2020"
	}, {
	"w1": "Toruń",
	"registrations for permanent residence": 1871,
	"registrations of departure": 2368,
	"year": "2021"
	}, {
	"w1": "Toruń",
	"registrations for permanent residence": 1649,
	"registrations of departure": 2334,
	"year": "2022"
	}],
    // Data set #17
    [{
	"w1": "Warszawa",
	"registrations for permanent residence": 19274,
	"registrations of departure": 11659,
	"year": "2016"
	}, {
	"w1": "Warszawa",
	"registrations for permanent residence": 20590,
	"registrations of departure": 12743,
	"year": "2017"
	}, {
	"w1": "Warszawa",
	"registrations for permanent residence": 25619,
	"registrations of departure": 14716,
	"year": "2018"
	}, {
	"w1": "Warszawa",
	"registrations for permanent residence": 26203,
	"registrations of departure": 15968,
	"year": "2019"
	}, {
	"w1": "Warszawa",
	"registrations for permanent residence": 18294,
	"registrations of departure": 13828,
	"year": "2020"
	}, {
	"w1": "Warszawa",
	"registrations for permanent residence": 20089,
	"registrations of departure": 16517,
	"year": "2021"
	}, {
	"w1": "Warszawa",
	"registrations for permanent residence": 18879,
	"registrations of departure": 16112,
	"year": "2022"
	}],
    // Data set #18
    [{
	"w1": "Wrocław",
	"registrations for permanent residence": 7318,
	"registrations of departure": 5290,
	"year": "2016"
	}, {
	"w1": "Wrocław",
	"registrations for permanent residence": 7443,
	"registrations of departure": 6057,
	"year": "2017"
	}, {
	"w1": "Wrocław",
	"registrations for permanent residence": 8730,
	"registrations of departure": 7257,
	"year": "2018"
	}, {
	"w1": "Wrocław",
	"registrations for permanent residence": 9742,
	"registrations of departure": 7666,
	"year": "2019"
	}, {
	"w1": "Wrocław",
	"registrations for permanent residence": 7794,
	"registrations of departure": 6507,
	"year": "2020"
	}, {
	"w1": "Wrocław",
	"registrations for permanent residence": 8261,
	"registrations of departure": 7301,
	"year": "2021"
	}, {
	"w1": "Wrocław",
	"registrations for permanent residence": 8030,
	"registrations of departure": 7004,
	"year": "2022"
	}],
    // Data set #19
    [{
	"w1": "Zielona Góra",
	"registrations for permanent residence": 1453,
	"registrations of departure": 994,
	"year": "2016"
	}, {
	"w1": "Zielona Góra",
	"registrations for permanent residence": 1677,
	"registrations of departure": 1131,
	"year": "2017"
	}, {
	"w1": "Zielona Góra",
	"registrations for permanent residence": 1787,
	"registrations of departure": 1185,
	"year": "2018"
	}, {
	"w1": "Zielona Góra",
	"registrations for permanent residence": 2118,
	"registrations of departure": 1251,
	"year": "2019"
	}, {
	"w1": "Zielona Góra",
	"registrations for permanent residence": 1396,
	"registrations of departure": 1044,
	"year": "2020"
	}, {
	"w1": "Zielona Góra",
	"registrations for permanent residence": 1429,
	"registrations of departure": 1149,
	"year": "2021"
	}, {
	"w1": "Zielona Góra",
	"registrations for permanent residence": 1339,
	"registrations of departure": 1201,
	"year": "2022"
	}]
  ];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

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
    fontSize: 12
  });

  //xRenderer.labels.template.setAll({
  //  rotation: 0,
  //  centerY: am5.p50,
  //  centerX: am5.p50
  //});

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "year",
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
      categoryXField: "year"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}, {name}: {valueY.formatNumber('#,###')}",
      //width: am5.p75,
      tooltipY: 0,
      strokeOpacity: 0
    });

    series.data.setAll(getData(d));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    //series.bullets.push(function() {
    //  return am5.Bullet.new(root, {
    //    locationY: 0.5,
    //    sprite: am5.Label.new(root, {
    //      text: "{valueY}",
    //      fill: am5.color("#000000"),
    //      centerY: am5.p50,
    //      centerX: am5.p50,
    //      populateText: true
    //    })
    //  });
    //});

    legend.data.push(series);
  }

  lata.forEach((item, i) => {
    makeSeries(item, item);
  });

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);

}
