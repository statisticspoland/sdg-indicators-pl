function createchart1(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w Polsce <br />(rok 2015=100)";
}
if (d==1) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie dolnośląskim (rok 2015=100)";
}
if (d==2) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie kujawsko-pomorskim (rok 2015=100)";
}
if (d==3) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie lubelskim (rok 2015=100)";
}
if (d==4) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie lubuskim (rok 2015=100)";
}
if (d==5) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie łódzkim (rok 2015=100)";
}
if (d==6) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie małopolskim (rok 2015=100)";
}
if (d==7) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie mazowieckim (rok 2015=100)";
}
if (d==8) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie opolskim (rok 2015=100)";
}
if (d==9) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie podkarpackim (rok 2015=100)";
}
if (d==10) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie podlaskim (rok 2015=100)";
}
if (d==11) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie pomorskim (rok 2015=100)";
}
if (d==12) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie śląskim (rok 2015=100)";
}
if (d==13) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie świętokrzyskim (rok 2015=100)";
}
if (d==14) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie warmińsko-mazurskim (rok 2015=100)";
}
if (d==15) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie wielkopolskim (rok 2015=100)";
}
if (d==16) {
	document.getElementById("tytuł_1").innerHTML = "Dynamika zmian liczby ludności w województwie zachodniopomorskim (rok 2015=100)";
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
	"w1": "Polska",
	"ogółem": 100.0,
	"miasto": 99.8,
	"wieś": 100.2,
	"year": "2016"
	}, {
	"w1": "Polska",
	"ogółem": 100.0,
	"miasto": 99.8,
	"wieś": 100.4,
	"year": "2017"
	}, {
	"w1": "Polska",
	"ogółem": 99.9,
	"miasto": 99.6,
	"wieś": 100.5,
	"year": "2018"
	}, {
	"w1": "Polska",
	"ogółem": 99.9,
	"miasto": 99.4,
	"wieś": 100.5,
	"year": "2019"
	}, {
	"w1": "Polska",
	"ogółem": 99.1,
	"miasto": 98.3,
	"wieś": 100.3,
	"year": "2020"
	}, {
	"w1": "Polska",
	"ogółem": 98.6,
	"miasto": 97.7,
	"wieś": 100.1,
	"year": "2021"
	}, {
	"w1": "Polska",
	"ogółem": 98.3,
	"miasto": 97.1,
	"wieś": 100.0,
	"year": "2022"
	}],
    // Data set #2
    [{
	"w1": "dolnośląskie",
	"ogółem": 100.0,
	"miasto": 99.7,
	"wieś": 100.7,
	"year": "2016"
	}, {
	"w1": "dolnośląskie",
	"ogółem": 99.9,
	"miasto": 99.4,
	"wieś": 101.2,
	"year": "2017"
	}, {
	"w1": "dolnośląskie",
	"ogółem": 99.9,
	"miasto": 99.1,
	"wieś": 101.7,
	"year": "2018"
	}, {
	"w1": "dolnośląskie",
	"ogółem": 99.9,
	"miasto": 98.8,
	"wieś": 102.3,
	"year": "2019"
	}, {
	"w1": "dolnośląskie",
	"ogółem": 100.1,
	"miasto": 98.3,
	"wieś": 104.3,
	"year": "2020"
	}, {
	"w1": "dolnośląskie",
	"ogółem": 99.8,
	"miasto": 97.8,
	"wieś": 104.3,
	"year": "2021"
	}, {
	"w1": "dolnośląskie",
	"ogółem": 99.4,
	"miasto": 97.1,
	"wieś": 104.7,
	"year": "2022"
	}],
	// Data set #3
    [{
	"w1": "kujawsko-pomorskie",
	"ogółem": 99.9,
	"miasto": 99.6,
	"wieś": 100.3,
	"year": "2016"
	}, {
	"w1": "kujawsko-pomorskie",
	"ogółem": 99.8,
	"miasto": 99.3,
	"wieś": 100.7,
	"year": "2017"
	}, {
	"w1": "kujawsko-pomorskie",
	"ogółem": 99.6,
	"miasto": 98.7,
	"wieś": 100.9,
	"year": "2018"
	}, {
	"w1": "kujawsko-pomorskie",
	"ogółem": 99.3,
	"miasto": 98.1,
	"wieś": 101.2,
	"year": "2019"
	}, {
	"w1": "kujawsko-pomorskie",
	"ogółem": 97.4,
	"miasto": 95.6,
	"wieś": 100.1,
	"year": "2020"
	}, {
	"w1": "kujawsko-pomorskie",
	"ogółem": 96.7,
	"miasto": 94.5,
	"wieś": 100.0,
	"year": "2021"
	}, {
	"w1": "kujawsko-pomorskie",
	"ogółem": 96.2,
	"miasto": 93.7,
	"wieś": 99.8,
	"year": "2022"
	}],
	// Data set #4
    [{
	"w1": "lubelskie",
	"ogółem": 99.7,
	"miasto": 100.1,
	"wieś": 99.3,
	"year": "2016"
	}, {
	"w1": "lubelskie",
	"ogółem": 99.4,
	"miasto": 100.0,
	"wieś": 98.8,
	"year": "2017"
	}, {
	"w1": "lubelskie",
	"ogółem": 99.0,
	"miasto": 99.6,
	"wieś": 98.4,
	"year": "2018"
	}, {
	"w1": "lubelskie",
	"ogółem": 98.5,
	"miasto": 99.1,
	"wieś": 98.0,
	"year": "2019"
	}, {
	"w1": "lubelskie",
	"ogółem": 96.1,
	"miasto": 96.1,
	"wieś": 96.1,
	"year": "2020"
	}, {
	"w1": "lubelskie",
	"ogółem": 95.3,
	"miasto": 95.3,
	"wieś": 95.2,
	"year": "2021"
	}, {
	"w1": "lubelskie",
	"ogółem": 94.6,
	"miasto": 94.6,
	"wieś": 94.6,
	"year": "2022"
	}],
	// Data set #5
    [{
	"w1": "lubuskie",
	"ogółem": 99.9,
	"miasto": 99.9,
	"wieś": 100.1,
	"year": "2016"
	}, {
	"w1": "lubuskie",
	"ogółem": 99.9,
	"miasto": 99.8,
	"wieś": 100.1,
	"year": "2017"
	}, {
	"w1": "lubuskie",
	"ogółem": 99.7,
	"miasto": 99.6,
	"wieś": 99.7,
	"year": "2018"
	}, {
	"w1": "lubuskie",
	"ogółem": 99.4,
	"miasto": 99.3,
	"wieś": 99.5,
	"year": "2019"
	}, {
	"w1": "lubuskie",
	"ogółem": 97.6,
	"miasto": 97.2,
	"wieś": 98.3,
	"year": "2020"
	}, {
	"w1": "lubuskie",
	"ogółem": 96.8,
	"miasto": 96.1,
	"wieś": 98.2,
	"year": "2021"
	}, {
	"w1": "lubuskie",
	"ogółem": 96.3,
	"miasto": 95.2,
	"wieś": 98.2,
	"year": "2022"
	}],
	// Data set #6
    [{
	"w1": "łódzkie",
	"ogółem": 99.7,
	"miasto": 99.4,
	"wieś": 100.1,
	"year": "2016"
	}, {
	"w1": "łódzkie",
	"ogółem": 99.3,
	"miasto": 98.8,
	"wieś": 100.2,
	"year": "2017"
	}, {
	"w1": "łódzkie",
	"ogółem": 98.9,
	"miasto": 98.1,
	"wieś": 100.3,
	"year": "2018"
	}, {
	"w1": "łódzkie",
	"ogółem": 98.4,
	"miasto": 97.3,
	"wieś": 100.3,
	"year": "2019"
	}, {
	"w1": "łódzkie",
	"ogółem": 96.9,
	"miasto": 95.4,
	"wieś": 99.4,
	"year": "2020"
	}, {
	"w1": "łódzkie",
	"ogółem": 96.0,
	"miasto": 94.2,
	"wieś": 99.1,
	"year": "2021"
	}, {
	"w1": "łódzkie",
	"ogółem": 95.4,
	"miasto": 93.4,
	"wieś": 98.8,
	"year": "2022"
	}],
	// Data set #7
    [{
	"w1": "małopolskie",
	"ogółem": 100.3,
	"miasto": 100.2,
	"wieś": 100.4,
	"year": "2016"
	}, {
	"w1": "małopolskie",
	"ogółem": 100.6,
	"miasto": 100.2,
	"wieś": 100.9,
	"year": "2017"
	}, {
	"w1": "małopolskie",
	"ogółem": 100.8,
	"miasto": 100.2,
	"wieś": 101.4,
	"year": "2018"
	}, {
	"w1": "małopolskie",
	"ogółem": 101.1,
	"miasto": 100.6,
	"wieś": 101.7,
	"year": "2019"
	}, {
	"w1": "małopolskie",
	"ogółem": 101.8,
	"miasto": 100.9,
	"wieś": 102.6,
	"year": "2020"
	}, {
	"w1": "małopolskie",
	"ogółem": 101.7,
	"miasto": 100.6,
	"wieś": 102.8,
	"year": "2021"
	}, {
	"w1": "małopolskie",
	"ogółem": 101.7,
	"miasto": 100.3,
	"wieś": 102.9,
	"year": "2022"
	}],
	// Data set #8
    [{
	"w1": "mazowieckie",
	"ogółem": 100.3,
	"miasto": 100.3,
	"wieś": 100.3,
	"year": "2016"
	}, {
	"w1": "mazowieckie",
	"ogółem": 100.7,
	"miasto": 100.7,
	"wieś": 100.5,
	"year": "2017"
	}, {
	"w1": "mazowieckie",
	"ogółem": 101.0,
	"miasto": 101.2,
	"wieś": 100.7,
	"year": "2018"
	}, {
	"w1": "mazowieckie",
	"ogółem": 101.4,
	"miasto": 101.7,
	"wieś": 100.9,
	"year": "2019"
	}, {
	"w1": "mazowieckie",
	"ogółem": 103.2,
	"miasto": 103.7,
	"wieś": 102.2,
	"year": "2020"
	}, {
	"w1": "mazowieckie",
	"ogółem": 103.1,
	"miasto": 103.6,
	"wieś": 102.1,
	"year": "2021"
	}, {
	"w1": "mazowieckie",
	"ogółem": 103.0,
	"miasto": 103.6,
	"wieś": 101.9,
	"year": "2022"
	}],
	// Data set #9
    [{
	"w1": "opolskie",
	"ogółem": 99.7,
	"miasto": 99.6,
	"wieś": 99.8,
	"year": "2016"
	}, {
	"w1": "opolskie",
	"ogółem": 99.4,
	"miasto": 101.0,
	"wieś": 97.6,
	"year": "2017"
	}, {
	"w1": "opolskie",
	"ogółem": 99.0,
	"miasto": 101.7,
	"wieś": 96.2,
	"year": "2018"
	}, {
	"w1": "opolskie",
	"ogółem": 98.7,
	"miasto": 101.2,
	"wieś": 96.0,
	"year": "2019"
	}, {
	"w1": "opolskie",
	"ogółem": 96.0,
	"miasto": 98.3,
	"wieś": 93.4,
	"year": "2020"
	}, {
	"w1": "opolskie",
	"ogółem": 95.2,
	"miasto": 97.3,
	"wieś": 93.0,
	"year": "2021"
	}, {
	"w1": "opolskie",
	"ogółem": 94.6,
	"miasto": 96.4,
	"wieś": 92.7,
	"year": "2022"
	}],
	// Data set #10
    [{
	"w1": "podkarpackie",
	"ogółem": 100.0,
	"miasto": 99.8,
	"wieś": 100.1,
	"year": "2016"
	}, {
	"w1": "podkarpackie",
	"ogółem": 100.1,
	"miasto": 99.8,
	"wieś": 100.2,
	"year": "2017"
	}, {
	"w1": "podkarpackie",
	"ogółem": 100.1,
	"miasto": 99.7,
	"wieś": 100.3,
	"year": "2018"
	}, {
	"w1": "podkarpackie",
	"ogółem": 100.0,
	"miasto": 100.3,
	"wieś": 99.7,
	"year": "2019"
	}, {
	"w1": "podkarpackie",
	"ogółem": 98.5,
	"miasto": 98.3,
	"wieś": 98.7,
	"year": "2020"
	}, {
	"w1": "podkarpackie",
	"ogółem": 98.0,
	"miasto": 97.9,
	"wieś": 98.1,
	"year": "2021"
	}, {
	"w1": "podkarpackie",
	"ogółem": 97.7,
	"miasto": 97.3,
	"wieś": 98.0,
	"year": "2022"
	}],
	// Data set #11
    [{
	"w1": "podlaskie",
	"ogółem": 99.8,
	"miasto": 100.0,
	"wieś": 99.6,
	"year": "2016"
	}, {
	"w1": "podlaskie",
	"ogółem": 99.6,
	"miasto": 99.9,
	"wieś": 99.3,
	"year": "2017"
	}, {
	"w1": "podlaskie",
	"ogółem": 99.4,
	"miasto": 99.8,
	"wieś": 98.8,
	"year": "2018"
	}, {
	"w1": "podlaskie",
	"ogółem": 99.1,
	"miasto": 99.6,
	"wieś": 98.4,
	"year": "2019"
	}, {
	"w1": "podlaskie",
	"ogółem": 97.3,
	"miasto": 97.9,
	"wieś": 96.4,
	"year": "2020"
	}, {
	"w1": "podlaskie",
	"ogółem": 96.6,
	"miasto": 97.2,
	"wieś": 95.8,
	"year": "2021"
	}, {
	"w1": "podlaskie",
	"ogółem": 96.2,
	"miasto": 96.7,
	"wieś": 95.4,
	"year": "2022"
	}],
	// Data set #12
    [{
	"w1": "pomorskie",
	"ogółem": 100.3,
	"miasto": 100.0,
	"wieś": 101.0,
	"year": "2016"
	}, {
	"w1": "pomorskie",
	"ogółem": 100.7,
	"miasto": 99.9,
	"wieś": 102.2,
	"year": "2017"
	}, {
	"w1": "pomorskie",
	"ogółem": 101.1,
	"miasto": 99.9,
	"wieś": 103.3,
	"year": "2018"
	}, {
	"w1": "pomorskie",
	"ogółem": 101.6,
	"miasto": 100.1,
	"wieś": 104.2,
	"year": "2019"
	}, {
	"w1": "pomorskie",
	"ogółem": 102.2,
	"miasto": 100.2,
	"wieś": 105.8,
	"year": "2020"
	}, {
	"w1": "pomorskie",
	"ogółem": 102.2,
	"miasto": 99.7,
	"wieś": 106.7,
	"year": "2021"
	}, {
	"w1": "pomorskie",
	"ogółem": 102.2,
	"miasto": 99.3,
	"wieś": 107.5,
	"year": "2022"
	}],
	// Data set #13
    [{
	"w1": "śląskie",
	"ogółem": 99.7,
	"miasto": 99.6,
	"wieś": 100.3,
	"year": "2016"
	}, {
	"w1": "śląskie",
	"ogółem": 99.5,
	"miasto": 99.2,
	"wieś": 100.6,
	"year": "2017"
	}, {
	"w1": "śląskie",
	"ogółem": 99.2,
	"miasto": 98.7,
	"wieś": 100.9,
	"year": "2018"
	}, {
	"w1": "śląskie",
	"ogółem": 98.8,
	"miasto": 98.2,
	"wieś": 101.0,
	"year": "2019"
	}, {
	"w1": "śląskie",
	"ogółem": 96.5,
	"miasto": 95.3,
	"wieś": 100.5,
	"year": "2020"
	}, {
	"w1": "śląskie",
	"ogółem": 95.7,
	"miasto": 94.3,
	"wieś": 100.4,
	"year": "2021"
	}, {
	"w1": "śląskie",
	"ogółem": 95.1,
	"miasto": 93.6,
	"wieś": 100.2,
	"year": "2022"
	}],
	// Data set #14
    [{
	"w1": "świętokrzyskie",
	"ogółem": 99.7,
	"miasto": 99.5,
	"wieś": 99.8,
	"year": "2016"
	}, {
	"w1": "świętokrzyskie",
	"ogółem": 99.2,
	"miasto": 99.1,
	"wieś": 99.4,
	"year": "2017"
	}, {
	"w1": "świętokrzyskie",
	"ogółem": 98.8,
	"miasto": 99.2,
	"wieś": 98.4,
	"year": "2018"
	}, {
	"w1": "świętokrzyskie",
	"ogółem": 98.2,
	"miasto": 99.8,
	"wieś": 96.8,
	"year": "2019"
	}, {
	"w1": "świętokrzyskie",
	"ogółem": 95.4,
	"miasto": 96.2,
	"wieś": 94.8,
	"year": "2020"
	}, {
	"w1": "świętokrzyskie",
	"ogółem": 94.5,
	"miasto": 95.1,
	"wieś": 94.0,
	"year": "2021"
	}, {
	"w1": "świętokrzyskie",
	"ogółem": 93.7,
	"miasto": 94.1,
	"wieś": 93.4,
	"year": "2022"
	}],
	// Data set #15
    [{
	"w1": "warmińsko-mazurskie",
	"ogółem": 99.8,
	"miasto": 99.7,
	"wieś": 99.9,
	"year": "2016"
	}, {
	"w1": "warmińsko-mazurskie",
	"ogółem": 99.6,
	"miasto": 99.5,
	"wieś": 99.7,
	"year": "2017"
	}, {
	"w1": "warmińsko-mazurskie",
	"ogółem": 99.3,
	"miasto": 99.1,
	"wieś": 99.4,
	"year": "2018"
	}, {
	"w1": "warmińsko-mazurskie",
	"ogółem": 98.8,
	"miasto": 99.0,
	"wieś": 98.5,
	"year": "2019"
	}, {
	"w1": "warmińsko-mazurskie",
	"ogółem": 96.2,
	"miasto": 96.6,
	"wieś": 95.7,
	"year": "2020"
	}, {
	"w1": "warmińsko-mazurskie",
	"ogółem": 95.5,
	"miasto": 95.7,
	"wieś": 95.2,
	"year": "2021"
	}, {
	"w1": "warmińsko-mazurskie",
	"ogółem": 94.9,
	"miasto": 94.8,
	"wieś": 95.0,
	"year": "2022"
	}],
	// Data set #16
    [{
	"w1": "wielkopolskie",
	"ogółem": 100.2,
	"miasto": 99.8,
	"wieś": 100.6,
	"year": "2016"
	}, {
	"w1": "wielkopolskie",
	"ogółem": 100.4,
	"miasto": 99.8,
	"wieś": 101.1,
	"year": "2017"
	}, {
	"w1": "wielkopolskie",
	"ogółem": 100.5,
	"miasto": 99.4,
	"wieś": 101.9,
	"year": "2018"
	}, {
	"w1": "wielkopolskie",
	"ogółem": 100.7,
	"miasto": 99.1,
	"wieś": 102.6,
	"year": "2019"
	}, {
	"w1": "wielkopolskie",
	"ogółem": 100.9,
	"miasto": 98.7,
	"wieś": 103.6,
	"year": "2020"
	}, {
	"w1": "wielkopolskie",
	"ogółem": 100.7,
	"miasto": 98.3,
	"wieś": 103.7,
	"year": "2021"
	}, {
	"w1": "wielkopolskie",
	"ogółem": 100.5,
	"miasto": 97.6,
	"wieś": 104.0,
	"year": "2022"
	}],
	// Data set #17
    [{
	"w1": "zachodniopomorskie",
	"ogółem": 99.9,
	"miasto": 99.8,
	"wieś": 100.1,
	"year": "2016"
	}, {
	"w1": "zachodniopomorskie",
	"ogółem": 99.7,
	"miasto": 99.8,
	"wieś": 99.6,
	"year": "2017"
	}, {
	"w1": "zachodniopomorskie",
	"ogółem": 99.4,
	"miasto": 99.4,
	"wieś": 99.7,
	"year": "2018"
	}, {
	"w1": "zachodniopomorskie",
	"ogółem": 99.2,
	"miasto": 99.0,
	"wieś": 99.6,
	"year": "2019"
	}, {
	"w1": "zachodniopomorskie",
	"ogółem": 97.1,
	"miasto": 96.9,
	"wieś": 97.6,
	"year": "2020"
	}, {
	"w1": "zachodniopomorskie",
	"ogółem": 96.5,
	"miasto": 96.0,
	"wieś": 97.4,
	"year": "2021"
	}, {
	"w1": "zachodniopomorskie",
	"ogółem": 95.9,
	"miasto": 95.2,
	"wieś": 97.4,
	"year": "2022"
	}]
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
    baseValue: 100,
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
      tooltipText: "{categoryX}, {name}: {valueY.formatNumber('#,###.0')}",
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
