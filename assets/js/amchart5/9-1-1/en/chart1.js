function createchart1(div, yMin, yMax, precyzja, lata, d){

console.log("ROOT: "+root);

if (d==0) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Poland <br />(2015=100)";
}
if (d==1) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Dolnośląskie Voivodeship (2015=100)";
}
if (d==2) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Kujawsko-pomorskie Voivodeship (2015=100)";
}
if (d==3) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Lubelskie Voivodeship (2015=100)";
}
if (d==4) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Lubuskie Voivodeship (2015=100)";
}
if (d==5) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Łódzkie Voivodeship (2015=100)";
}
if (d==6) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Małopolskie Voivodeship (2015=100)";
}
if (d==7) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Mazowieckie Voivodeship (2015=100)";
}
if (d==8) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Opolskie Voivodeship (2015=100)";
}
if (d==9) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Podkarpackie Voivodeship (2015=100)";
}
if (d==10) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Podlaskie Voivodeship (2015=100)";
}
if (d==11) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in	Pomorskie Voivodeship (2015=100)";
}
if (d==12) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Śląskie Voivodeship (2015=100)";
}
if (d==13) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Świętokrzyskie Voivodeship (2015=100)";
}
if (d==14) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Warmińsko-Mazurskie Voivodeship (2015=100)";
}
if (d==15) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Wielkopolskie Voivodeship (2015=100)";
}
if (d==16) {
	document.getElementById("tytuł_1").innerHTML = "Population by place of residence in Zachodniopomorskie Voivodeship (2015=100)";
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
	"total": 100.0,
	"in urban area": 99.8,
	"in rural area": 100.2,
	"year": "2016"
	}, {
	"w1": "Polska",
	"total": 100.0,
	"in urban area": 99.8,
	"in rural area": 100.4,
	"year": "2017"
	}, {
	"w1": "Polska",
	"total": 99.9,
	"in urban area": 99.6,
	"in rural area": 100.5,
	"year": "2018"
	}, {
	"w1": "Polska",
	"total": 99.9,
	"in urban area": 99.4,
	"in rural area": 100.5,
	"year": "2019"
	}, {
	"w1": "Polska",
	"total": 99.1,
	"in urban area": 98.3,
	"in rural area": 100.3,
	"year": "2020"
	}, {
	"w1": "Polska",
	"total": 98.6,
	"in urban area": 97.7,
	"in rural area": 100.1,
	"year": "2021"
	}, {
	"w1": "Polska",
	"total": 98.3,
	"in urban area": 97.1,
	"in rural area": 100.0,
	"year": "2022"
	}],
    // Data set #2
    [{
	"w1": "dolnośląskie",
	"total": 100.0,
	"in urban area": 99.7,
	"in rural area": 100.7,
	"year": "2016"
	}, {
	"w1": "dolnośląskie",
	"total": 99.9,
	"in urban area": 99.4,
	"in rural area": 101.2,
	"year": "2017"
	}, {
	"w1": "dolnośląskie",
	"total": 99.9,
	"in urban area": 99.1,
	"in rural area": 101.7,
	"year": "2018"
	}, {
	"w1": "dolnośląskie",
	"total": 99.9,
	"in urban area": 98.8,
	"in rural area": 102.3,
	"year": "2019"
	}, {
	"w1": "dolnośląskie",
	"total": 100.1,
	"in urban area": 98.3,
	"in rural area": 104.3,
	"year": "2020"
	}, {
	"w1": "dolnośląskie",
	"total": 99.8,
	"in urban area": 97.8,
	"in rural area": 104.3,
	"year": "2021"
	}, {
	"w1": "dolnośląskie",
	"total": 99.4,
	"in urban area": 97.1,
	"in rural area": 104.7,
	"year": "2022"
	}],
	// Data set #3
    [{
	"w1": "kujawsko-pomorskie",
	"total": 99.9,
	"in urban area": 99.6,
	"in rural area": 100.3,
	"year": "2016"
	}, {
	"w1": "kujawsko-pomorskie",
	"total": 99.8,
	"in urban area": 99.3,
	"in rural area": 100.7,
	"year": "2017"
	}, {
	"w1": "kujawsko-pomorskie",
	"total": 99.6,
	"in urban area": 98.7,
	"in rural area": 100.9,
	"year": "2018"
	}, {
	"w1": "kujawsko-pomorskie",
	"total": 99.3,
	"in urban area": 98.1,
	"in rural area": 101.2,
	"year": "2019"
	}, {
	"w1": "kujawsko-pomorskie",
	"total": 97.4,
	"in urban area": 95.6,
	"in rural area": 100.1,
	"year": "2020"
	}, {
	"w1": "kujawsko-pomorskie",
	"total": 96.7,
	"in urban area": 94.5,
	"in rural area": 100.0,
	"year": "2021"
	}, {
	"w1": "kujawsko-pomorskie",
	"total": 96.2,
	"in urban area": 93.7,
	"in rural area": 99.8,
	"year": "2022"
	}],
	// Data set #4
    [{
	"w1": "lubelskie",
	"total": 99.7,
	"in urban area": 100.1,
	"in rural area": 99.3,
	"year": "2016"
	}, {
	"w1": "lubelskie",
	"total": 99.4,
	"in urban area": 100.0,
	"in rural area": 98.8,
	"year": "2017"
	}, {
	"w1": "lubelskie",
	"total": 99.0,
	"in urban area": 99.6,
	"in rural area": 98.4,
	"year": "2018"
	}, {
	"w1": "lubelskie",
	"total": 98.5,
	"in urban area": 99.1,
	"in rural area": 98.0,
	"year": "2019"
	}, {
	"w1": "lubelskie",
	"total": 96.1,
	"in urban area": 96.1,
	"in rural area": 96.1,
	"year": "2020"
	}, {
	"w1": "lubelskie",
	"total": 95.3,
	"in urban area": 95.3,
	"in rural area": 95.2,
	"year": "2021"
	}, {
	"w1": "lubelskie",
	"total": 94.6,
	"in urban area": 94.6,
	"in rural area": 94.6,
	"year": "2022"
	}],
	// Data set #5
    [{
	"w1": "lubuskie",
	"total": 99.9,
	"in urban area": 99.9,
	"in rural area": 100.1,
	"year": "2016"
	}, {
	"w1": "lubuskie",
	"total": 99.9,
	"in urban area": 99.8,
	"in rural area": 100.1,
	"year": "2017"
	}, {
	"w1": "lubuskie",
	"total": 99.7,
	"in urban area": 99.6,
	"in rural area": 99.7,
	"year": "2018"
	}, {
	"w1": "lubuskie",
	"total": 99.4,
	"in urban area": 99.3,
	"in rural area": 99.5,
	"year": "2019"
	}, {
	"w1": "lubuskie",
	"total": 97.6,
	"in urban area": 97.2,
	"in rural area": 98.3,
	"year": "2020"
	}, {
	"w1": "lubuskie",
	"total": 96.8,
	"in urban area": 96.1,
	"in rural area": 98.2,
	"year": "2021"
	}, {
	"w1": "lubuskie",
	"total": 96.3,
	"in urban area": 95.2,
	"in rural area": 98.2,
	"year": "2022"
	}],
	// Data set #6
    [{
	"w1": "łódzkie",
	"total": 99.7,
	"in urban area": 99.4,
	"in rural area": 100.1,
	"year": "2016"
	}, {
	"w1": "łódzkie",
	"total": 99.3,
	"in urban area": 98.8,
	"in rural area": 100.2,
	"year": "2017"
	}, {
	"w1": "łódzkie",
	"total": 98.9,
	"in urban area": 98.1,
	"in rural area": 100.3,
	"year": "2018"
	}, {
	"w1": "łódzkie",
	"total": 98.4,
	"in urban area": 97.3,
	"in rural area": 100.3,
	"year": "2019"
	}, {
	"w1": "łódzkie",
	"total": 96.9,
	"in urban area": 95.4,
	"in rural area": 99.4,
	"year": "2020"
	}, {
	"w1": "łódzkie",
	"total": 96.0,
	"in urban area": 94.2,
	"in rural area": 99.1,
	"year": "2021"
	}, {
	"w1": "łódzkie",
	"total": 95.4,
	"in urban area": 93.4,
	"in rural area": 98.8,
	"year": "2022"
	}],
	// Data set #7
    [{
	"w1": "małopolskie",
	"total": 100.3,
	"in urban area": 100.2,
	"in rural area": 100.4,
	"year": "2016"
	}, {
	"w1": "małopolskie",
	"total": 100.6,
	"in urban area": 100.2,
	"in rural area": 100.9,
	"year": "2017"
	}, {
	"w1": "małopolskie",
	"total": 100.8,
	"in urban area": 100.2,
	"in rural area": 101.4,
	"year": "2018"
	}, {
	"w1": "małopolskie",
	"total": 101.1,
	"in urban area": 100.6,
	"in rural area": 101.7,
	"year": "2019"
	}, {
	"w1": "małopolskie",
	"total": 101.8,
	"in urban area": 100.9,
	"in rural area": 102.6,
	"year": "2020"
	}, {
	"w1": "małopolskie",
	"total": 101.7,
	"in urban area": 100.6,
	"in rural area": 102.8,
	"year": "2021"
	}, {
	"w1": "małopolskie",
	"total": 101.7,
	"in urban area": 100.3,
	"in rural area": 102.9,
	"year": "2022"
	}],
	// Data set #8
    [{
	"w1": "mazowieckie",
	"total": 100.3,
	"in urban area": 100.3,
	"in rural area": 100.3,
	"year": "2016"
	}, {
	"w1": "mazowieckie",
	"total": 100.7,
	"in urban area": 100.7,
	"in rural area": 100.5,
	"year": "2017"
	}, {
	"w1": "mazowieckie",
	"total": 101.0,
	"in urban area": 101.2,
	"in rural area": 100.7,
	"year": "2018"
	}, {
	"w1": "mazowieckie",
	"total": 101.4,
	"in urban area": 101.7,
	"in rural area": 100.9,
	"year": "2019"
	}, {
	"w1": "mazowieckie",
	"total": 103.2,
	"in urban area": 103.7,
	"in rural area": 102.2,
	"year": "2020"
	}, {
	"w1": "mazowieckie",
	"total": 103.1,
	"in urban area": 103.6,
	"in rural area": 102.1,
	"year": "2021"
	}, {
	"w1": "mazowieckie",
	"total": 103.0,
	"in urban area": 103.6,
	"in rural area": 101.9,
	"year": "2022"
	}],
	// Data set #9
    [{
	"w1": "opolskie",
	"total": 99.7,
	"in urban area": 99.6,
	"in rural area": 99.8,
	"year": "2016"
	}, {
	"w1": "opolskie",
	"total": 99.4,
	"in urban area": 101.0,
	"in rural area": 97.6,
	"year": "2017"
	}, {
	"w1": "opolskie",
	"total": 99.0,
	"in urban area": 101.7,
	"in rural area": 96.2,
	"year": "2018"
	}, {
	"w1": "opolskie",
	"total": 98.7,
	"in urban area": 101.2,
	"in rural area": 96.0,
	"year": "2019"
	}, {
	"w1": "opolskie",
	"total": 96.0,
	"in urban area": 98.3,
	"in rural area": 93.4,
	"year": "2020"
	}, {
	"w1": "opolskie",
	"total": 95.2,
	"in urban area": 97.3,
	"in rural area": 93.0,
	"year": "2021"
	}, {
	"w1": "opolskie",
	"total": 94.6,
	"in urban area": 96.4,
	"in rural area": 92.7,
	"year": "2022"
	}],
	// Data set #10
    [{
	"w1": "podkarpackie",
	"total": 100.0,
	"in urban area": 99.8,
	"in rural area": 100.1,
	"year": "2016"
	}, {
	"w1": "podkarpackie",
	"total": 100.1,
	"in urban area": 99.8,
	"in rural area": 100.2,
	"year": "2017"
	}, {
	"w1": "podkarpackie",
	"total": 100.1,
	"in urban area": 99.7,
	"in rural area": 100.3,
	"year": "2018"
	}, {
	"w1": "podkarpackie",
	"total": 100.0,
	"in urban area": 100.3,
	"in rural area": 99.7,
	"year": "2019"
	}, {
	"w1": "podkarpackie",
	"total": 98.5,
	"in urban area": 98.3,
	"in rural area": 98.7,
	"year": "2020"
	}, {
	"w1": "podkarpackie",
	"total": 98.0,
	"in urban area": 97.9,
	"in rural area": 98.1,
	"year": "2021"
	}, {
	"w1": "podkarpackie",
	"total": 97.7,
	"in urban area": 97.3,
	"in rural area": 98.0,
	"year": "2022"
	}],
	// Data set #11
    [{
	"w1": "podlaskie",
	"total": 99.8,
	"in urban area": 100.0,
	"in rural area": 99.6,
	"year": "2016"
	}, {
	"w1": "podlaskie",
	"total": 99.6,
	"in urban area": 99.9,
	"in rural area": 99.3,
	"year": "2017"
	}, {
	"w1": "podlaskie",
	"total": 99.4,
	"in urban area": 99.8,
	"in rural area": 98.8,
	"year": "2018"
	}, {
	"w1": "podlaskie",
	"total": 99.1,
	"in urban area": 99.6,
	"in rural area": 98.4,
	"year": "2019"
	}, {
	"w1": "podlaskie",
	"total": 97.3,
	"in urban area": 97.9,
	"in rural area": 96.4,
	"year": "2020"
	}, {
	"w1": "podlaskie",
	"total": 96.6,
	"in urban area": 97.2,
	"in rural area": 95.8,
	"year": "2021"
	}, {
	"w1": "podlaskie",
	"total": 96.2,
	"in urban area": 96.7,
	"in rural area": 95.4,
	"year": "2022"
	}],
	// Data set #12
    [{
	"w1": "pomorskie",
	"total": 100.3,
	"in urban area": 100.0,
	"in rural area": 101.0,
	"year": "2016"
	}, {
	"w1": "pomorskie",
	"total": 100.7,
	"in urban area": 99.9,
	"in rural area": 102.2,
	"year": "2017"
	}, {
	"w1": "pomorskie",
	"total": 101.1,
	"in urban area": 99.9,
	"in rural area": 103.3,
	"year": "2018"
	}, {
	"w1": "pomorskie",
	"total": 101.6,
	"in urban area": 100.1,
	"in rural area": 104.2,
	"year": "2019"
	}, {
	"w1": "pomorskie",
	"total": 102.2,
	"in urban area": 100.2,
	"in rural area": 105.8,
	"year": "2020"
	}, {
	"w1": "pomorskie",
	"total": 102.2,
	"in urban area": 99.7,
	"in rural area": 106.7,
	"year": "2021"
	}, {
	"w1": "pomorskie",
	"total": 102.2,
	"in urban area": 99.3,
	"in rural area": 107.5,
	"year": "2022"
	}],
	// Data set #13
    [{
	"w1": "śląskie",
	"total": 99.7,
	"in urban area": 99.6,
	"in rural area": 100.3,
	"year": "2016"
	}, {
	"w1": "śląskie",
	"total": 99.5,
	"in urban area": 99.2,
	"in rural area": 100.6,
	"year": "2017"
	}, {
	"w1": "śląskie",
	"total": 99.2,
	"in urban area": 98.7,
	"in rural area": 100.9,
	"year": "2018"
	}, {
	"w1": "śląskie",
	"total": 98.8,
	"in urban area": 98.2,
	"in rural area": 101.0,
	"year": "2019"
	}, {
	"w1": "śląskie",
	"total": 96.5,
	"in urban area": 95.3,
	"in rural area": 100.5,
	"year": "2020"
	}, {
	"w1": "śląskie",
	"total": 95.7,
	"in urban area": 94.3,
	"in rural area": 100.4,
	"year": "2021"
	}, {
	"w1": "śląskie",
	"total": 95.1,
	"in urban area": 93.6,
	"in rural area": 100.2,
	"year": "2022"
	}],
	// Data set #14
    [{
	"w1": "świętokrzyskie",
	"total": 99.7,
	"in urban area": 99.5,
	"in rural area": 99.8,
	"year": "2016"
	}, {
	"w1": "świętokrzyskie",
	"total": 99.2,
	"in urban area": 99.1,
	"in rural area": 99.4,
	"year": "2017"
	}, {
	"w1": "świętokrzyskie",
	"total": 98.8,
	"in urban area": 99.2,
	"in rural area": 98.4,
	"year": "2018"
	}, {
	"w1": "świętokrzyskie",
	"total": 98.2,
	"in urban area": 99.8,
	"in rural area": 96.8,
	"year": "2019"
	}, {
	"w1": "świętokrzyskie",
	"total": 95.4,
	"in urban area": 96.2,
	"in rural area": 94.8,
	"year": "2020"
	}, {
	"w1": "świętokrzyskie",
	"total": 94.5,
	"in urban area": 95.1,
	"in rural area": 94.0,
	"year": "2021"
	}, {
	"w1": "świętokrzyskie",
	"total": 93.7,
	"in urban area": 94.1,
	"in rural area": 93.4,
	"year": "2022"
	}],
	// Data set #15
    [{
	"w1": "warmińsko-mazurskie",
	"total": 99.8,
	"in urban area": 99.7,
	"in rural area": 99.9,
	"year": "2016"
	}, {
	"w1": "warmińsko-mazurskie",
	"total": 99.6,
	"in urban area": 99.5,
	"in rural area": 99.7,
	"year": "2017"
	}, {
	"w1": "warmińsko-mazurskie",
	"total": 99.3,
	"in urban area": 99.1,
	"in rural area": 99.4,
	"year": "2018"
	}, {
	"w1": "warmińsko-mazurskie",
	"total": 98.8,
	"in urban area": 99.0,
	"in rural area": 98.5,
	"year": "2019"
	}, {
	"w1": "warmińsko-mazurskie",
	"total": 96.2,
	"in urban area": 96.6,
	"in rural area": 95.7,
	"year": "2020"
	}, {
	"w1": "warmińsko-mazurskie",
	"total": 95.5,
	"in urban area": 95.7,
	"in rural area": 95.2,
	"year": "2021"
	}, {
	"w1": "warmińsko-mazurskie",
	"total": 94.9,
	"in urban area": 94.8,
	"in rural area": 95.0,
	"year": "2022"
	}],
	// Data set #16
    [{
	"w1": "wielkopolskie",
	"total": 100.2,
	"in urban area": 99.8,
	"in rural area": 100.6,
	"year": "2016"
	}, {
	"w1": "wielkopolskie",
	"total": 100.4,
	"in urban area": 99.8,
	"in rural area": 101.1,
	"year": "2017"
	}, {
	"w1": "wielkopolskie",
	"total": 100.5,
	"in urban area": 99.4,
	"in rural area": 101.9,
	"year": "2018"
	}, {
	"w1": "wielkopolskie",
	"total": 100.7,
	"in urban area": 99.1,
	"in rural area": 102.6,
	"year": "2019"
	}, {
	"w1": "wielkopolskie",
	"total": 100.9,
	"in urban area": 98.7,
	"in rural area": 103.6,
	"year": "2020"
	}, {
	"w1": "wielkopolskie",
	"total": 100.7,
	"in urban area": 98.3,
	"in rural area": 103.7,
	"year": "2021"
	}, {
	"w1": "wielkopolskie",
	"total": 100.5,
	"in urban area": 97.6,
	"in rural area": 104.0,
	"year": "2022"
	}],
	// Data set #17
    [{
	"w1": "zachodniopomorskie",
	"total": 99.9,
	"in urban area": 99.8,
	"in rural area": 100.1,
	"year": "2016"
	}, {
	"w1": "zachodniopomorskie",
	"total": 99.7,
	"in urban area": 99.8,
	"in rural area": 99.6,
	"year": "2017"
	}, {
	"w1": "zachodniopomorskie",
	"total": 99.4,
	"in urban area": 99.4,
	"in rural area": 99.7,
	"year": "2018"
	}, {
	"w1": "zachodniopomorskie",
	"total": 99.2,
	"in urban area": 99.0,
	"in rural area": 99.6,
	"year": "2019"
	}, {
	"w1": "zachodniopomorskie",
	"total": 97.1,
	"in urban area": 96.9,
	"in rural area": 97.6,
	"year": "2020"
	}, {
	"w1": "zachodniopomorskie",
	"total": 96.5,
	"in urban area": 96.0,
	"in rural area": 97.4,
	"year": "2021"
	}, {
	"w1": "zachodniopomorskie",
	"total": 95.9,
	"in urban area": 95.2,
	"in rural area": 97.4,
	"year": "2022"
	}]
  ];

  return data[index];
}

    // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(div);

//root.locale = am5locales_pl_PL;
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
