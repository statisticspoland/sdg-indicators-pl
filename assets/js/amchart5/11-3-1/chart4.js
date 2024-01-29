function createchart4(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: POLSKA - miasta (osoby)";
}
if (d==1) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Białystok (osoby)";
}
if (d==2) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Bydgoszcz (osoby)";
}
if (d==3) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Gdańsk (osoby)";
}
if (d==4) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Gorzów Wielkopolski (osoby)";
}
if (d==5) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Katowice (osoby)";
}
if (d==6) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Kielce (osoby)";
}
if (d==7) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Kraków (osoby)";
}
if (d==8) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Lublin (osoby)";
}
if (d==9) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Łódź (osoby)";
}
if (d==10) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Olsztyn (osoby)";
}
if (d==11) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Opole (osoby)";
}
if (d==12) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Poznań (osoby)";
}
if (d==13) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Rzeszów (osoby)";
}
if (d==14) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Szczecin (osoby)";
}
if (d==15) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Toruń (osoby)";
}
if (d==16) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Warszawa (osoby)";
}
if (d==17) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Wrocław (osoby)";
}
if (d==18) {
	document.getElementById("tytuł_4").innerHTML = "Saldo migracji na pobyt stały: Zielona Góra (osoby)";
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
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 209140,
	"wymeldowania ogółem": 233454,
	"year": "2016"
	}, {
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 221644,
	"wymeldowania ogółem": 246847,
	"year": "2017"
	}, {
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 251975,
	"wymeldowania ogółem": 278048,
	"year": "2018"
	}, {
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 262833,
	"wymeldowania ogółem": 288247,
	"year": "2019"
	}, {
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 202199,
	"wymeldowania ogółem": 238772,
	"year": "2020"
	}, {
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 221549,
	"wymeldowania ogółem": 268301,
	"year": "2021"
	}, {
	"w1": "POLSKA - miasta",
	"zameldowania ogółem": 203837,
	"wymeldowania ogółem": 255933,
	"year": "2022"
	}],
    // Data set #2
    [{
	"w1": "Białystok",
	"zameldowania ogółem": 2728,
	"wymeldowania ogółem": 2778,
	"year": "2016"
	}, {
	"w1": "Białystok",
	"zameldowania ogółem": 2954,
	"wymeldowania ogółem": 2979,
	"year": "2017"
	}, {
	"w1": "Białystok",
	"zameldowania ogółem": 3070,
	"wymeldowania ogółem": 3401,
	"year": "2018"
	}, {
	"w1": "Białystok",
	"zameldowania ogółem": 3076,
	"wymeldowania ogółem": 3508,
	"year": "2019"
	}, {
	"w1": "Białystok",
	"zameldowania ogółem": 2426,
	"wymeldowania ogółem": 2982,
	"year": "2020"
	}, {
	"w1": "Białystok",
	"zameldowania ogółem": 2697,
	"wymeldowania ogółem": 3275,
	"year": "2021"
	}, {
	"w1": "Białystok",
	"zameldowania ogółem": 2656,
	"wymeldowania ogółem": 3174,
	"year": "2022"
	}],
    // Data set #3
    [{
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 2336,
	"wymeldowania ogółem": 3147,
	"year": "2016"
	}, {
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 2345,
	"wymeldowania ogółem": 3234,
	"year": "2017"
	}, {
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 2770,
	"wymeldowania ogółem": 3826,
	"year": "2018"
	}, {
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 3010,
	"wymeldowania ogółem": 3996,
	"year": "2019"
	}, {
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 1973,
	"wymeldowania ogółem": 3674,
	"year": "2020"
	}, {
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 2109,
	"wymeldowania ogółem": 4091,
	"year": "2021"
	}, {
	"w1": "Bydgoszcz",
	"zameldowania ogółem": 1989,
	"wymeldowania ogółem": 3805,
	"year": "2022"
	}],
    // Data set #4
    [{
	"w1": "Gdańsk",
	"zameldowania ogółem": 2571,
	"wymeldowania ogółem": 4029,
	"year": "2016"
	}, {
	"w1": "Gdańsk",
	"zameldowania ogółem": 5309,
	"wymeldowania ogółem": 4505,
	"year": "2017"
	}, {
	"w1": "Gdańsk",
	"zameldowania ogółem": 6781,
	"wymeldowania ogółem": 4813,
	"year": "2018"
	}, {
	"w1": "Gdańsk",
	"zameldowania ogółem": 7691,
	"wymeldowania ogółem": 4570,
	"year": "2019"
	}, {
	"w1": "Gdańsk",
	"zameldowania ogółem": 4869,
	"wymeldowania ogółem": 3790,
	"year": "2020"
	}, {
	"w1": "Gdańsk",
	"zameldowania ogółem": 5559,
	"wymeldowania ogółem": 4552,
	"year": "2021"
	}, {
	"w1": "Gdańsk",
	"zameldowania ogółem": 5167,
	"wymeldowania ogółem": 4303,
	"year": "2022"
	}],
    // Data set #5
    [{
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 1215,
	"wymeldowania ogółem": 1081,
	"year": "2016"
	}, {
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 1152,
	"wymeldowania ogółem": 1196,
	"year": "2017"
	}, {
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 1256,
	"wymeldowania ogółem": 1322,
	"year": "2018"
	}, {
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 1233,
	"wymeldowania ogółem": 1479,
	"year": "2019"
	}, {
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 996,
	"wymeldowania ogółem": 1372,
	"year": "2020"
	}, {
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 985,
	"wymeldowania ogółem": 1514,
	"year": "2021"
	}, {
	"w1": "Gorzów Wielkopolski",
	"zameldowania ogółem": 886,
	"wymeldowania ogółem": 1538,
	"year": "2022"
	}],
    // Data set #6
    [{
	"w1": "Katowice",
	"zameldowania ogółem": 2471,
	"wymeldowania ogółem": 3308,
	"year": "2016"
	}, {
	"w1": "Katowice",
	"zameldowania ogółem": 2783,
	"wymeldowania ogółem": 3508,
	"year": "2017"
	}, {
	"w1": "Katowice",
	"zameldowania ogółem": 3020,
	"wymeldowania ogółem": 3772,
	"year": "2018"
	}, {
	"w1": "Katowice",
	"zameldowania ogółem": 3149,
	"wymeldowania ogółem": 3843,
	"year": "2019"
	}, {
	"w1": "Katowice",
	"zameldowania ogółem": 2709,
	"wymeldowania ogółem": 3074,
	"year": "2020"
	}, {
	"w1": "Katowice",
	"zameldowania ogółem": 3557,
	"wymeldowania ogółem": 3640,
	"year": "2021"
	}, {
	"w1": "Katowice",
	"zameldowania ogółem": 2800,
	"wymeldowania ogółem": 3288,
	"year": "2022"
	}],
    // Data set #7
    [{
	"w1": "Kielce",
	"zameldowania ogółem": 1507,
	"wymeldowania ogółem": 1729,
	"year": "2016"
	}, {
	"w1": "Kielce",
	"zameldowania ogółem": 1366,
	"wymeldowania ogółem": 1936,
	"year": "2017"
	}, {
	"w1": "Kielce",
	"zameldowania ogółem": 1696,
	"wymeldowania ogółem": 2278,
	"year": "2018"
	}, {
	"w1": "Kielce",
	"zameldowania ogółem": 1849,
	"wymeldowania ogółem": 2323,
	"year": "2019"
	}, {
	"w1": "Kielce",
	"zameldowania ogółem": 1475,
	"wymeldowania ogółem": 1826,
	"year": "2020"
	}, {
	"w1": "Kielce",
	"zameldowania ogółem": 1694,
	"wymeldowania ogółem": 2168,
	"year": "2021"
	}, {
	"w1": "Kielce",
	"zameldowania ogółem": 1471,
	"wymeldowania ogółem": 2158,
	"year": "2022"
	}],
    // Data set #8
    [{
	"w1": "Kraków",
	"zameldowania ogółem": 7432,
	"wymeldowania ogółem": 5625,
	"year": "2016"
	}, {
	"w1": "Kraków",
	"zameldowania ogółem": 8207,
	"wymeldowania ogółem": 6205,
	"year": "2017"
	}, {
	"w1": "Kraków",
	"zameldowania ogółem": 11253,
	"wymeldowania ogółem": 6539,
	"year": "2018"
	}, {
	"w1": "Kraków",
	"zameldowania ogółem": 13974,
	"wymeldowania ogółem": 7002,
	"year": "2019"
	}, {
	"w1": "Kraków",
	"zameldowania ogółem": 8680,
	"wymeldowania ogółem": 6177,
	"year": "2020"
	}, {
	"w1": "Kraków",
	"zameldowania ogółem": 10463,
	"wymeldowania ogółem": 7226,
	"year": "2021"
	}, {
	"w1": "Kraków",
	"zameldowania ogółem": 9244,
	"wymeldowania ogółem": 7358,
	"year": "2022"
	}],
    // Data set #9
    [{
	"w1": "Lublin",
	"zameldowania ogółem": 2952,
	"wymeldowania ogółem": 3175,
	"year": "2016"
	}, {
	"w1": "Lublin",
	"zameldowania ogółem": 3074,
	"wymeldowania ogółem": 3353,
	"year": "2017"
	}, {
	"w1": "Lublin",
	"zameldowania ogółem": 3634,
	"wymeldowania ogółem": 3789,
	"year": "2018"
	}, {
	"w1": "Lublin",
	"zameldowania ogółem": 4141,
	"wymeldowania ogółem": 3948,
	"year": "2019"
	}, {
	"w1": "Lublin",
	"zameldowania ogółem": 3073,
	"wymeldowania ogółem": 3255,
	"year": "2020"
	}, {
	"w1": "Lublin",
	"zameldowania ogółem": 3461,
	"wymeldowania ogółem": 3838,
	"year": "2021"
	}, {
	"w1": "Lublin",
	"zameldowania ogółem": 2946,
	"wymeldowania ogółem": 3545,
	"year": "2022"
	}],
    // Data set #10
    [{
	"w1": "Łódź",
	"zameldowania ogółem": 3696,
	"wymeldowania ogółem": 4528,
	"year": "2016"
	}, {
	"w1": "Łódź",
	"zameldowania ogółem": 3714,
	"wymeldowania ogółem": 4951,
	"year": "2017"
	}, {
	"w1": "Łódź",
	"zameldowania ogółem": 4234,
	"wymeldowania ogółem": 5432,
	"year": "2018"
	}, {
	"w1": "Łódź",
	"zameldowania ogółem": 4448,
	"wymeldowania ogółem": 5534,
	"year": "2019"
	}, {
	"w1": "Łódź",
	"zameldowania ogółem": 3356,
	"wymeldowania ogółem": 4694,
	"year": "2020"
	}, {
	"w1": "Łódź",
	"zameldowania ogółem": 3855,
	"wymeldowania ogółem": 5149,
	"year": "2021"
	}, {
	"w1": "Łódź",
	"zameldowania ogółem": 3784,
	"wymeldowania ogółem": 4884,
	"year": "2022"
	}],
    // Data set #11
    [{
	"w1": "Olsztyn",
	"zameldowania ogółem": 1844,
	"wymeldowania ogółem": 1809,
	"year": "2016"
	}, {
	"w1": "Olsztyn",
	"zameldowania ogółem": 1915,
	"wymeldowania ogółem": 2050,
	"year": "2017"
	}, {
	"w1": "Olsztyn",
	"zameldowania ogółem": 2165,
	"wymeldowania ogółem": 2580,
	"year": "2018"
	}, {
	"w1": "Olsztyn",
	"zameldowania ogółem": 2292,
	"wymeldowania ogółem": 2688,
	"year": "2019"
	}, {
	"w1": "Olsztyn",
	"zameldowania ogółem": 1788,
	"wymeldowania ogółem": 2132,
	"year": "2020"
	}, {
	"w1": "Olsztyn",
	"zameldowania ogółem": 1862,
	"wymeldowania ogółem": 2136,
	"year": "2021"
	}, {
	"w1": "Olsztyn",
	"zameldowania ogółem": 1586,
	"wymeldowania ogółem": 2009,
	"year": "2022"
	}],
    // Data set #12
    [{
	"w1": "Opole",
	"zameldowania ogółem": 1199,
	"wymeldowania ogółem": 1115,
	"year": "2016"
	}, {
	"w1": "Opole",
	"zameldowania ogółem": 1219,
	"wymeldowania ogółem": 1144,
	"year": "2017"
	}, {
	"w1": "Opole",
	"zameldowania ogółem": 1442,
	"wymeldowania ogółem": 1174,
	"year": "2018"
	}, {
	"w1": "Opole",
	"zameldowania ogółem": 1542,
	"wymeldowania ogółem": 1352,
	"year": "2019"
	}, {
	"w1": "Opole",
	"zameldowania ogółem": 1231,
	"wymeldowania ogółem": 1155,
	"year": "2020"
	}, {
	"w1": "Opole",
	"zameldowania ogółem": 1278,
	"wymeldowania ogółem": 1268,
	"year": "2021"
	}, {
	"w1": "Opole",
	"zameldowania ogółem": 1194,
	"wymeldowania ogółem": 1167,
	"year": "2022"
	}],
    // Data set #13
    [{
	"w1": "Poznań",
	"zameldowania ogółem": 4842,
	"wymeldowania ogółem": 6650,
	"year": "2016"
	}, {
	"w1": "Poznań",
	"zameldowania ogółem": 4893,
	"wymeldowania ogółem": 6762,
	"year": "2017"
	}, {
	"w1": "Poznań",
	"zameldowania ogółem": 5880,
	"wymeldowania ogółem": 7767,
	"year": "2018"
	}, {
	"w1": "Poznań",
	"zameldowania ogółem": 6416,
	"wymeldowania ogółem": 8109,
	"year": "2019"
	}, {
	"w1": "Poznań",
	"zameldowania ogółem": 4820,
	"wymeldowania ogółem": 6543,
	"year": "2020"
	}, {
	"w1": "Poznań",
	"zameldowania ogółem": 5645,
	"wymeldowania ogółem": 6848,
	"year": "2021"
	}, {
	"w1": "Poznań",
	"zameldowania ogółem": 4673,
	"wymeldowania ogółem": 6223,
	"year": "2022"
	}],
    // Data set #14
    [{
	"w1": "Rzeszów",
	"zameldowania ogółem": 2925,
	"wymeldowania ogółem": 1722,
	"year": "2016"
	}, {
	"w1": "Rzeszów",
	"zameldowania ogółem": 3146,
	"wymeldowania ogółem": 2117,
	"year": "2017"
	}, {
	"w1": "Rzeszów",
	"zameldowania ogółem": 3501,
	"wymeldowania ogółem": 2219,
	"year": "2018"
	}, {
	"w1": "Rzeszów",
	"zameldowania ogółem": 3747,
	"wymeldowania ogółem": 2284,
	"year": "2019"
	}, {
	"w1": "Rzeszów",
	"zameldowania ogółem": 2825,
	"wymeldowania ogółem": 1968,
	"year": "2020"
	}, {
	"w1": "Rzeszów",
	"zameldowania ogółem": 3450,
	"wymeldowania ogółem": 2153,
	"year": "2021"
	}, {
	"w1": "Rzeszów",
	"zameldowania ogółem": 2895,
	"wymeldowania ogółem": 2126,
	"year": "2022"
	}],
    // Data set #15
    [{
	"w1": "Szczecin",
	"zameldowania ogółem": 3396,
	"wymeldowania ogółem": 3293,
	"year": "2016"
	}, {
	"w1": "Szczecin",
	"zameldowania ogółem": 3677,
	"wymeldowania ogółem": 3565,
	"year": "2017"
	}, {
	"w1": "Szczecin",
	"zameldowania ogółem": 4120,
	"wymeldowania ogółem": 3883,
	"year": "2018"
	}, {
	"w1": "Szczecin",
	"zameldowania ogółem": 4579,
	"wymeldowania ogółem": 3939,
	"year": "2019"
	}, {
	"w1": "Szczecin",
	"zameldowania ogółem": 3042,
	"wymeldowania ogółem": 3370,
	"year": "2020"
	}, {
	"w1": "Szczecin",
	"zameldowania ogółem": 3163,
	"wymeldowania ogółem": 3908,
	"year": "2021"
	}, {
	"w1": "Szczecin",
	"zameldowania ogółem": 3054,
	"wymeldowania ogółem": 3700,
	"year": "2022"
	}],
    // Data set #16
    [{
	"w1": "Toruń",
	"zameldowania ogółem": 1795,
	"wymeldowania ogółem": 2053,
	"year": "2016"
	}, {
	"w1": "Toruń",
	"zameldowania ogółem": 1934,
	"wymeldowania ogółem": 2025,
	"year": "2017"
	}, {
	"w1": "Toruń",
	"zameldowania ogółem": 2112,
	"wymeldowania ogółem": 2483,
	"year": "2018"
	}, {
	"w1": "Toruń",
	"zameldowania ogółem": 2157,
	"wymeldowania ogółem": 2521,
	"year": "2019"
	}, {
	"w1": "Toruń",
	"zameldowania ogółem": 1784,
	"wymeldowania ogółem": 2119,
	"year": "2020"
	}, {
	"w1": "Toruń",
	"zameldowania ogółem": 1871,
	"wymeldowania ogółem": 2368,
	"year": "2021"
	}, {
	"w1": "Toruń",
	"zameldowania ogółem": 1649,
	"wymeldowania ogółem": 2334,
	"year": "2022"
	}],
    // Data set #17
    [{
	"w1": "Warszawa",
	"zameldowania ogółem": 19274,
	"wymeldowania ogółem": 11659,
	"year": "2016"
	}, {
	"w1": "Warszawa",
	"zameldowania ogółem": 20590,
	"wymeldowania ogółem": 12743,
	"year": "2017"
	}, {
	"w1": "Warszawa",
	"zameldowania ogółem": 25619,
	"wymeldowania ogółem": 14716,
	"year": "2018"
	}, {
	"w1": "Warszawa",
	"zameldowania ogółem": 26203,
	"wymeldowania ogółem": 15968,
	"year": "2019"
	}, {
	"w1": "Warszawa",
	"zameldowania ogółem": 18294,
	"wymeldowania ogółem": 13828,
	"year": "2020"
	}, {
	"w1": "Warszawa",
	"zameldowania ogółem": 20089,
	"wymeldowania ogółem": 16517,
	"year": "2021"
	}, {
	"w1": "Warszawa",
	"zameldowania ogółem": 18879,
	"wymeldowania ogółem": 16112,
	"year": "2022"
	}],
    // Data set #18
    [{
	"w1": "Wrocław",
	"zameldowania ogółem": 7318,
	"wymeldowania ogółem": 5290,
	"year": "2016"
	}, {
	"w1": "Wrocław",
	"zameldowania ogółem": 7443,
	"wymeldowania ogółem": 6057,
	"year": "2017"
	}, {
	"w1": "Wrocław",
	"zameldowania ogółem": 8730,
	"wymeldowania ogółem": 7257,
	"year": "2018"
	}, {
	"w1": "Wrocław",
	"zameldowania ogółem": 9742,
	"wymeldowania ogółem": 7666,
	"year": "2019"
	}, {
	"w1": "Wrocław",
	"zameldowania ogółem": 7794,
	"wymeldowania ogółem": 6507,
	"year": "2020"
	}, {
	"w1": "Wrocław",
	"zameldowania ogółem": 8261,
	"wymeldowania ogółem": 7301,
	"year": "2021"
	}, {
	"w1": "Wrocław",
	"zameldowania ogółem": 8030,
	"wymeldowania ogółem": 7004,
	"year": "2022"
	}],
    // Data set #19
    [{
	"w1": "Zielona Góra",
	"zameldowania ogółem": 1453,
	"wymeldowania ogółem": 994,
	"year": "2016"
	}, {
	"w1": "Zielona Góra",
	"zameldowania ogółem": 1677,
	"wymeldowania ogółem": 1131,
	"year": "2017"
	}, {
	"w1": "Zielona Góra",
	"zameldowania ogółem": 1787,
	"wymeldowania ogółem": 1185,
	"year": "2018"
	}, {
	"w1": "Zielona Góra",
	"zameldowania ogółem": 2118,
	"wymeldowania ogółem": 1251,
	"year": "2019"
	}, {
	"w1": "Zielona Góra",
	"zameldowania ogółem": 1396,
	"wymeldowania ogółem": 1044,
	"year": "2020"
	}, {
	"w1": "Zielona Góra",
	"zameldowania ogółem": 1429,
	"wymeldowania ogółem": 1149,
	"year": "2021"
	}, {
	"w1": "Zielona Góra",
	"zameldowania ogółem": 1339,
	"wymeldowania ogółem": 1201,
	"year": "2022"
	}]
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
