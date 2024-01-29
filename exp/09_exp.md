---
title: Statystyki eksperymentalne SDG
permalink: /statistics_exp/09_exp/
layout: page_exp
---
<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
<script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
<script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart1.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart2.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart3.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart4.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart5.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart6.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart7.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart8.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/9-1-1/chart9.js"></script>
<script src="//cdn.amcharts.com/lib/5/locales/pl_PL.js"></script>

<script src="https://cdn.amcharts.com/lib/5/map.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/powiaty.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/powiatyMap.js"></script>

<script src="https://cdn.amcharts.com/lib/5/geodata/polandLow.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/wojewodztwaMap.js"></script>


<div id="main" class="main-content initiative-content">
		<section class="pl-banner-exp-indicator">
            <div class="pl-grid">
                <div class="pl-banner-content">
                  <h1 style="margin-top: 15px;margin-bottom: 22px;">
                  Statystyki eksperymentalne<br />
                  Cel 9 - Innowacyjność, Przemysł, Infrastruktura
                  </h1>
                </div>
            </div>
        </section>

        <div class="pl-grid initiative-description">
          <ol class="breadcrumb">
            <li><a title="Przejdź do strony głównej" href="{{ site.baseurl }}/statistics_exp">Strona Główna</a> / </li>
            <li class="active"> Wskaźnik 9.1.1</li>
          </ol>

				<!--<p style="font-size: 21px;"> Priorytet dla Polski - {{ t1.pl_priorytet }} </p>-->

          <h3>9.1.1 Odsetek ludności wiejskiej zamieszkałej w promieniu 2 km od dostępnej przez cały rok drogi</h3>
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#maps" aria-controls="data" role="tab" data-toggle="tab" title="Mapa">Mapa</a></li>
            <li role="presentation"><a href="#dashboard" aria-controls="metadata" role="tab" data-toggle="tab" title="Dashboard">Wskaźniki kontekstowe</a></li>
            <li role="presentation"><a href="#metodology" aria-controls="data" role="tab" data-toggle="tab" title="Metodologia">Metodologia</a></li>
            <li role="presentation"><a href="#sources" aria-controls="data" role="tab" data-toggle="tab" title="Źródła">Źródła</a></li>
            <!--<li role="presentation"><a href="#validation" aria-controls="data" role="tab" data-toggle="tab" title="Walidacja">Walidacja</a></li>-->
            <li role="presentation"><a href="#zr" aria-controls="data" role="tab" data-toggle="tab" title="Znaczenie dla zrównoważonego rozwoju">Znaczenie dla zrównoważonego rozwoju</a></li>
          </ul>


					<div class="tab-content">
<!--------------Mapy---------------------------------------------->
					  <div role="tabpanel" class="tab-pane active" id="maps" style="scroll-margin-top: 500px;">

								<br/>
								<!--<div id="options">
									<select onchange="onChangeOption(this.value);" style="padding-top: 5px;">
										<option value="Pow" selected="selected" >powiaty</option>
										<option value="Woj">województwa</option>
									</select>
								</div>-->

								<div id="selector">Wybierz:
									<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
										<input class="form-check-input" type="radio" name="pw" id="inlineRadioPow" value="Pow" onclick="onChangeOption(this.value);" checked="checked">
										<label class="form-check-label" for="inlineRadioPow" style="margin-top:  5px;">powiaty</label>
									</div>
									<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
										<input class="form-check-input" type="radio" name="pw" id="inlineRadioWoj" value="Woj" onclick="onChangeOption(this.value);">
										<label class="form-check-label" for="inlineRadioWoj" style="margin-top:  5px;">województwa</label>
									</div>
								</div>

								<br/>

								<div class="grid-container" style="display: grid; grid-template-columns: 1fr;grid-gap: 20px;">

								<div id = "map1" class="grid-child">
									<div id="mapdiv" style="width: 100%;height: 700px">
										<div id="mapPow" style="width: 100%;height: 700px"></div>
										<div id="mapWoj" hidden style="width: 100%;height: 700px"></div>
									</div>
								</div>

								</div>

								<div style="overflow:auto; width:100% px;">
									<h4><b>Interpretacja wskaźnika</b></h4>
									<p>Wskaźnik prezentuje udział ludności wiejskiej zamieszkałej w promieniu 2 km od drogi dostępnej przez cały rok w ogólnej liczbie ludności wiejskiej (w danym regionie) w 2020 r.</p>
									<p>Za drogi spełniające warunek dostępności przez cały rok uznano drogi krajowe, wojewódzkie, powiatowe i gminne o nawierzchni z masy bitumicznej (asfaltu).</p>
									<p>Im wyższa wartość wskaźnika, tym większy odsetek ludności wiejskiej w danym województwie lub powiecie ma dostęp do całorocznie przejezdnej drogi w odległości 2 km od swojego miejsca zamieszkania.</p>
								</div>
					  </div>
<!-----------------Wykresy--------------------------------------->

<div role="tabpanel" class="tab-pane" id="dashboard" style="scroll-margin-top: 500px;">

<h4><b>Wskaźniki kontekstowe</b></h4>

<p style="margin-bottom: 24px;">Znajdziesz tu zestaw wskaźników kontekstowych, dla których źródłem danych są oficjalne statystyki GUS. Zadaniem wskaźników kontekstowych jest uzupełnienie wyników statystyk eksperymentalnych, pogłębienie informacji na temat monitorowanego zjawiska oraz zapewnienie wsparcia w ocenie postępu w realizacji zrównoważonego rozwoju.</p>

	<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-gap: 5px;">

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 90%; display: inline-block;"><b id="tytuł_1">Dynamika zmian liczby ludności w Polsce <br />(rok 2015=100)</b></div>
			<div style="width: 86%; display: inline-block;">
				<label for="wojs" style="margin-top: 0px; margin-right: 5px; max-width: 100px; display: inline; font-weight: normal;">Wybierz:</label>
					<select id="wojBox" onchange="wyborWoj()" name="woj-name" style="padding: 5px;max-width: 250px; display: inline;">
						<option style="font-family: FiraSans" value="POLSKA" selected>POLSKA</option>
						<option style="font-family: FiraSans" value="Dolnośląskie">Dolnośląskie</option>
						<option style="font-family: FiraSans" value="Kujawsko-Pomorskie">Kujawsko-Pomorskie</option>
						<option style="font-family: FiraSans" value="Lubelskie">Lubelskie</option>
						<option style="font-family: FiraSans" value="Lubuskie">Lubuskie</option>
						<option style="font-family: FiraSans" value="Łódzkie">Łódzkie</option>
						<option style="font-family: FiraSans" value="Małopolskie">Małopolskie</option>
						<option style="font-family: FiraSans" value="Mazowieckie">Mazowieckie</option>
						<option style="font-family: FiraSans" value="Opolskie">Opolskie</option>
						<option style="font-family: FiraSans" value="Podkarpackie">Podkarpackie</option>
						<option style="font-family: FiraSans" value="Podlaskie">Podlaskie</option>
						<option style="font-family: FiraSans" value="Pomorskie">Pomorskie</option>
						<option style="font-family: FiraSans" value="Śląskie">Śląskie</option>
						<option style="font-family: FiraSans" value="Świętokrzyskie">Świętokrzyskie</option>
						<option style="font-family: FiraSans" value="Warmińsko-Mazurskie">Warmińsko-Mazurskie</option>
						<option style="font-family: FiraSans" value="Wielkopolskie">Wielkopolskie</option>
						<option style="font-family: FiraSans" value="Zachodniopomorskie">Zachodniopomorskie</option>
					</select>
			</div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 1" href="{{ site.baseurl }}/data/exp/9-1-1-chart1.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart1" style="height: 80%;"></div>
		</div>

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 86%; display: inline-block;"><b id="tytuł_2">Gęstość zaludnienia ogółem (os/km<sup>2</sup>)</b></div>
			<div id="selector" style="width: 86%; display: inline-block; margin-top: 26px;">Wybierz:
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset2" id="inlineRadio2_1" value="ogółem" onclick="createchart2('chart2', 0, 400, 0, ['2015', '2022'], 0);" checked="checked">
					<label class="form-check-label" for="inlineRadio2_1" style="margin-top:  5px;">ogółem</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset2" id="inlineRadio2_2" value="w miastach" onclick="createchart2('chart2', 0, 2000, 0, ['2015', '2022'], 1);">
					<label class="form-check-label" for="inlineRadio2_2" style="margin-top:  5px;">w miastach</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset2" id="inlineRadio2_3" value="na wsi" onclick="createchart2('chart2', 0, 140, 0, ['2015', '2022'], 2);">
					<label class="form-check-label" for="inlineRadio2_3" style="margin-top:  5px;">na wsi</label>
				</div>
			</div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 2" href="{{ site.baseurl }}/data/exp/9-1-1-chart2.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart2" style="height: 80%;"></div>
		</div>

	</div>

	<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-gap: 5px;">

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="margin-bottom: 23px; width: 86%;"><b>Długość dróg zamiejskich o twardej nawierzchni (km)</b></div>
			<div style="width: 86%; display: inline-block;"></div>
			<div style="width: 10%; display: inline-block; text-align: right; margin-bottom: 8px;">
				<a title="Link do pliku csv zawierającego dane do wykresu 3" href="{{ site.baseurl }}/data/exp/9-1-1-chart3.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart3" style="height: 80%;"></div>
		</div>

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 86%;"><b id="tytuł_4">Odsetek długości dróg publicznych o nawierzchni twardej ulepszonej ogółem (%)</b></div>
			<div id="selector" style="width: 86%; display: inline-block;">Wybierz:
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset4" id="inlineRadio4_1" value="ogółem" onclick="createchart4('chart4', 0, 100, 0, ['2015', '2022'], 0);" checked="checked">
					<label class="form-check-label" for="inlineRadio4_1" style="margin-top:  5px;">ogółem</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset4" id="inlineRadio4_2" value="w miastach" onclick="createchart4('chart4', 0, 40, 0, ['2015', '2022'], 1);">
					<label class="form-check-label" for="inlineRadio4_2" style="margin-top:  5px;">w miastach</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset4" id="inlineRadio4_3" value="na wsi" onclick="createchart4('chart4', 0, 80, 0, ['2015', '2022'], 2);">
					<label class="form-check-label" for="inlineRadio4_3" style="margin-top:  5px;">na wsi</label>
				</div>
			</div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 4" href="{{ site.baseurl }}/data/exp/9-1-1-chart4.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart4" style="height: 80%;"></div>
		</div>

	</div>

	<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-gap: 5px;">

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 86%; display: inline-block;"><b>Udział dróg powiatowych i gminnych o nawierzchni gruntowej w ogólnej długości dróg powiatowych i gminnych (%)</b></div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 5" href="{{ site.baseurl }}/data/exp/9-1-1-chart5.csv"><img alt="Grafika przedstawiająca plik csv" style="max-width: 30px; margin-top: 5px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart5" style="height: 85%;"></div>
		</div>

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 86%;"><b>Udział wydatków na drogi publiczne w wydatkach ogółem (%)</b></div>
			<div style="width: 86%; display: inline-block;"></div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 6" href="{{ site.baseurl }}/data/exp/9-1-1-chart6.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart6" style="height: 85%;"></div>
		</div>

	</div>

	<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-gap: 5px;">
		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 86%; display: inline-block; margin-top: 15px; margin-bottom: 5px;"><b>Odsetek ludności zamieszkującej na wsi i w mieście w 2022 roku (%)</b></div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 7" href="{{ site.baseurl }}/data/exp/9-1-1-chart7.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart7" style="height: 85%;"></div>
		</div>

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 86%; display: inline-block; margin-top: 15px; margin-bottom: 5px;"><b>Zagrożenie ubóstwem lub wykluczeniem społecznym <br />(%)</b></div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 8" href="{{ site.baseurl }}/data/exp/9-1-1-chart8.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart8" style="height: 85%;"></div>
		</div>

	</div>

	<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); grid-gap: 5px;">

		<div class="grid-child" style="width:100%; height: 500px;">
			<div style="width: 88%; display: inline-block;"><b id="tytuł_9">Krajowe linie regularnej komunikacji autobusowej - regionalne (km)</b></div>
			<div id="selector" style="width: 88%; display: inline-block;">Wybierz:
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset9" id="inlineRadio9_1" value="regionalne" onclick="createchart9('chart9', 0, 200000, 0, ['2015', '2022'], 0);" checked="checked">
					<label class="form-check-label" for="inlineRadio9_1" style="margin-top:  5px;">regionalne</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset9" id="inlineRadio9_2" value="podmiejskie" onclick="createchart9('chart9', 0, 400000, 0, ['2015', '2022'], 1);">
					<label class="form-check-label" for="inlineRadio9_2" style="margin-top:  5px;">podmiejskie</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset9" id="inlineRadio9_3" value="miejskie" onclick="createchart9('chart9', 0, 2500, 0, ['2015', '2022'], 2);">
					<label class="form-check-label" for="inlineRadio9_3" style="margin-top:  5px;">miejskie</label>
				</div>
			</div>
			<div style="width: 10%; display: inline-block; text-align: right;">
				<a title="Link do pliku csv zawierającego dane do wykresu 9" href="{{ site.baseurl }}/data/exp/9-1-1-chart9.csv"><img alt="Grafika przedstawiająca plik csv" style="vertical-align: bottom; max-width: 30px;" src="{{ site.baseurl }}/assets/img/icon_csv_dash.png"></a>
			</div>
			<div id="chart9" style="height: 90%;"></div>
		</div>

	</div>

</div>
<!---------------Metodologia------------------------------------>
						<div role="tabpanel" class="tab-pane" id="metodology" style="scroll-margin-top: 500px;">

							<h4><b>Jak obliczono wskaźnik?</b></h4>
							<p>W celu obliczenia wskaźnika zrealizowano następujące etapy:</p>

							<div class="grid-container" style="display: flex; grid-template-columns: 1fr, 1fr; grid-gap: 5px;">
								<div class="grid-child" style="width:25%; min-width:100px;">
									<img src="{{ site.baseurl }}/assets/img/metodologia_img_1.png" align="center" alt="Grafika ludzika" border="0" style="margin-top: 25px;"/>
								</div>
								<div class="grid-child" style="width:75%;">
									<p><b>1.</b> Wyznaczono tzw. maski (wyodrębnione fragmenty obszaru) do analiz terenów wiejskich (za pomocą wykluczenia obszarów miejskich z analizy) w oparciu o dane z bazy PRG.</p>
									<p><b>2.</b> Z bazy BDOT10k wyznaczono drogi spełniające warunek dostępności przez cały rok.</p>
									<p><b>3.</b> Wyznaczono bufor dróg o promieniu 2 km.</p>
									<p><b>4.</b> W oparciu o dane z bazy WorldPop obliczono liczbę ludności w granicach bufora dróg oraz liczbę ludności ogółem dla obszarów wiejskich.</p>
									<p><b>5.</b> Na postawie danych z punktu 4 dokonano przeliczeń wskaźnika 9.1.1. Odsetek ludności wiejskiej zamieszkałej w promieniu 2 km od dostępnej przez cały rok drogi.</p>
								</div>
							</div>
							<p>Szczegółowa informacja nt. obliczeń dokonanych w oparciu o <a target="_blank" href="https://unstats.un.org/sdgs/metadata/files/Metadata-09-01-01.pdf" alt="Metodologia obliczania wskaźnika 9.1.1 SDG" title="Metodologia obliczania wskaźnika 9.1.1 SDG">metodologię ONZ</a>, znajduje się w metryce wskaźnika na <a target="_blank" href="https://sdg.gov.pl/statistics_glob/9-1-1/" alt="Metodologia obliczania wskaźnika 9.1.1 SDG" title="Metodologia obliczania wskaźnika 9.1.1 SDG">Platformie SDG.</a></p>
						</div>
<!--------------Źródła----------------------------------------->
						<div role="tabpanel" class="tab-pane" id="sources" style="scroll-margin-top: 500px;">

							<h4><b>Jakie źródła wykorzystano do obliczenia wskaźnika?</b></h4>
							<p>Wskaźnik został obliczony w oparciu o <a target="_blank" href="https://unstats.un.org/sdgs/metadata/files/Metadata-09-01-01.pdf" alt="Metodologia obliczania wskaźnika 9.1.1 SDG" title="Metodologia obliczania wskaźnika 9.1.1 SDG">metodologię wskaźnika zaproponowaną przez ONZ</a> za pomocą danych z trzech źródeł: dwóch baz prowadzonych przez GUGiK (BDOT10k i PRG), a także z bazy WorldPop.</p>

							<div class="grid-container" style="display: flex; grid-template-columns: 1fr, 1fr; grid-gap: 5px;">
								<div class="grid-child" style="width:15%; min-width:100px;">
									<img src="{{ site.baseurl }}/assets/img/zrodla_img_1.png" align="center" alt="Grafika mapy" border="0"/>
								</div>
								<div class="grid-child" style="width:85%;">
								<br/>
									<p style="margin-top: 0.4em;"><a target="_blank" href="https://www.geoportal.gov.pl/pl/dane/baza-danych-obiektow-topograficznych-bdot10k/" alt="Baza Danych Obiektów Topograficznych (BDOT10k)" title="Baza Danych Obiektów Topograficznych (BDOT10k)"><b>Baza Danych Obiektów Topograficznych (BDOT10k)</b></a> to wektorowa baza danych zawierająca lokalizację przestrzenną obiektów topograficznych wraz z ich podstawową charakterystyką opisową, odpowiadająca w szczegółowości tradycyjnej mapie topograficznej w skali 1:10000. Baza zawiera informacje o rodzaju i kategorii dróg, rodzaju nawierzchni drogi, a także o szerokości i długości drogi.</p>
								</div>
							</div>

							<div class="grid-container" style="display: flex; grid-template-columns: 1fr, 1fr; grid-gap: 5px;">
								<div class="grid-child" style="width:15%; min-width:100px;">
									<img src="{{ site.baseurl }}/assets/img/zrodla_img_2.png" align="center" alt="Grafika kuli ziemskiej" border="0"/>
								</div>
								<div class="grid-child" style="width:85%;">
								<br/>
									<p style="margin-top: 0.4em;"><a target="_blank" href="https://www.geoportal.gov.pl/pl/dane/panstwowy-rejestr-granic-prg/" alt="Państwowy Rejestr Granic (PRG)" title="Państwowy Rejestr Granic (PRG)"><b>Państwowy Rejestr Granic (PRG)</b></a> jest urzędową bazą danych stanowiącą podstawę dla innych systemów informacji przestrzennej. W rejestrze PRG gromadzi się dane obejmujące obszar całego kraju w zakresie przebiegu m.in. granic oraz powierzchni jednostek trójstopniowego podziału terytorialnego kraju (tj. województw, powiatów, gmin).</p>
								</div>
							</div>

							<div class="grid-container" style="display: flex; grid-template-columns: 1fr, 1fr; grid-gap: 5px;">
								<div class="grid-child" style="width:15%; min-width:100px;">
									<img src="{{ site.baseurl }}/assets/img/zrodla_img_3.png" align="center" alt="Grafika ludzi" border="0"/>
								</div>
								<div class="grid-child" style="width:85%;">
								<br/>
									<p style="margin-top: 0.9em;">Baza <a target="_blank" href="https://www.worldpop.org/" alt="Baza WorldPop" title="Baza WorldPop"><b>WorldPop</b></a> zawiera <a title="Link do pliku txt zawierającego cytowanie Worldpop" target="_blank" href="{{ site.baseurl }}/assets/txt/worldpop_cytowanie.txt">dane</a> o wysokiej rozdzielczości dotyczące rozmieszczenia ludności świata. Zestawy danych przedstawiają szacunkową liczbę osób mieszkających w każdej komórce siatki w postaci rastra o rozdzielczości 100x100m.</p>
								</div>
							</div>

						</div>
<!---------------Walidacja------------------------------------->
						<div role="tabpanel" class="tab-pane" id="validation" style="scroll-margin-top: 500px;">

							<h4><b>Walidacja</b></h4>
							<p>Opis walidacji...</p>

							<!--<p>Wskaźnik eksperymentalny</p>-->
						</div>
<!-------------------Znaczenie dla ZR----------------------------->
						<div role="tabpanel" class="tab-pane" id="zr" style="scroll-margin-top: 500px;">

							<div class="grid-container" style="display: flex; grid-template-columns: 1fr, 1fr; grid-gap: 5px;">
								<div class="grid-child" style="width:20%; min-width:100px;">
									<img src="{{ site.baseurl }}/assets/img/znaczenie_zr_img_1.png" align="center" alt="Znaczenie dla zrównoważonego rozwoju" border="0"/>
								</div>
								<div class="grid-child" style="width:80%;">
									<br />
									<p style="margin-top: 0;"><b>Jakie jest znaczenie wskaźnika dla zrównoważonego rozwoju?</b></p>
									<p>Zapewnienie mieszkańcom wsi dostępu do całorocznej infrastruktury drogowej zwiększa szanse rozwojowe obszarów wiejskich. Poprawa warunków drogowych wpływa na zmniejszenie kosztów transportu i czasu podróży, a także zwiększa możliwości zatrudnienia mieszkańców wsi i ich mobilność zawodową. Całoroczny dostęp do dróg przyczynia się także do poprawy jakości życia mieszkańców obszarów wiejskich, zwiększając ich dostęp do usług publicznych i zapobiegając wykluczeniu społecznemu.</p>
								</div>
							</div>

							<div class="grid-container" style="display: flex; grid-template-columns: 1fr, 1fr; grid-gap: 5px;">
								<div class="grid-child" style="width:20%; min-width:100px;">
									<img src="{{ site.baseurl }}/assets/img/znaczenie_zr_img_2.png" align="center" alt="Znaczenie dla zrównoważonego rozwoju" border="0"/>
								</div>
								<div class="grid-child" style="width:80%;">
									<br/>
									<br/>
									<p style="margin-top: 5px;"><b>Korzyści dla jednostek samorządu terytorialnego</b></p>
									<p>Dane wskaźnika dostarczają informacji, które mogą być wykorzystane przy tworzeniu polityk m.in. transportowych i infrastrukturalnych, zwłaszcza przy planowaniu rozwoju sieci dróg na terenach wiejskich.</p>

								</div>
							</div>

						</div>

					</div>
        </div>

</div>

<script>

am5.ready(function() {

	var danePow = [{"id":201,"value":95.3949062811},{"id":202,"value":95.5807026199},{"id":203,"value":96.9999545838},{"id":204,"value":86.8478696152},{"id":205,"value":99.8622609405},{"id":206,"value":99.7792810855},{"id":207,"value":100.0},{"id":208,"value":99.3797122703},{"id":209,"value":98.5806104976},{"id":210,"value":99.9960865042},{"id":211,"value":99.8341444584},{"id":212,"value":99.9154470931},{"id":213,"value":97.3966823607},{"id":214,"value":92.7956362737},{"id":215,"value":99.870061449},{"id":216,"value":96.1477771651},{"id":217,"value":99.9140714319},{"id":218,"value":97.0409809333},{"id":219,"value":99.9962569516},{"id":220,"value":97.3808502123},{"id":221,"value":99.543119556},{"id":222,"value":93.4975616571},{"id":223,"value":97.5958482667},{"id":224,"value":99.9874519626},{"id":225,"value":96.8423931482},{"id":226,"value":83.4384827805},{"id":401,"value":99.5062761932},{"id":402,"value":51.094259939},{"id":403,"value":97.6648475236},{"id":404,"value":84.8929115817},{"id":405,"value":91.3865921298},{"id":406,"value":97.6948534381},{"id":407,"value":97.0509938681},{"id":408,"value":99.9039579911},{"id":409,"value":96.6684325163},{"id":410,"value":85.4486093283},{"id":411,"value":99.1971149447},{"id":412,"value":99.1243705325},{"id":413,"value":97.8941010488},{"id":414,"value":99.5163867084},{"id":415,"value":99.2660186197},{"id":416,"value":70.6311122406},{"id":417,"value":95.8809570055},{"id":418,"value":98.2716217359},{"id":419,"value":99.858540198},{"id":601,"value":96.4923657831},{"id":602,"value":89.6946651051},{"id":603,"value":98.8975456133},{"id":604,"value":99.7990980305},{"id":605,"value":88.8068611304},{"id":606,"value":99.3156337759},{"id":607,"value":97.0788616188},{"id":608,"value":88.4496132485},{"id":609,"value":99.528562519},{"id":610,"value":97.1393712297},{"id":611,"value":99.6046374497},{"id":612,"value":92.5619205434},{"id":613,"value":99.5991031902},{"id":614,"value":92.8627476176},{"id":615,"value":91.5969356571},{"id":616,"value":99.4991625072},{"id":617,"value":96.7527226265},{"id":618,"value":97.3935175124},{"id":619,"value":96.6239354345},{"id":620,"value":98.6412808118},{"id":801,"value":99.8075247852},{"id":802,"value":91.7243802624},{"id":803,"value":99.8533897799},{"id":804,"value":98.8928937934},{"id":805,"value":94.8872822844},{"id":806,"value":99.2164105342},{"id":807,"value":95.8366255804},{"id":808,"value":99.2178375193},{"id":809,"value":98.6436871998},{"id":810,"value":85.5148166613},{"id":811,"value":99.2404071784},{"id":812,"value":93.9282893401},{"id":1001,"value":95.1437401833},{"id":1002,"value":99.5629050071},{"id":1003,"value":98.5970515011},{"id":1004,"value":99.5906150346},{"id":1005,"value":93.48791985},{"id":1006,"value":99.7635009332},{"id":1007,"value":98.7340062695},{"id":1008,"value":98.4932863784},{"id":1009,"value":97.7150211838},{"id":1010,"value":96.7966834431},{"id":1011,"value":99.6038253445},{"id":1012,"value":96.5880226286},{"id":1013,"value":99.1374814427},{"id":1014,"value":97.1258451003},{"id":1015,"value":96.9417540474},{"id":1016,"value":96.2707517816},{"id":1017,"value":75.4733096117},{"id":1018,"value":99.5867945914},{"id":1019,"value":99.8599991115},{"id":1020,"value":99.6830663237},{"id":1021,"value":99.5965380308},{"id":1201,"value":99.9953710286},{"id":1202,"value":99.9481278357},{"id":1203,"value":99.8293661448},{"id":1204,"value":99.2115428374},{"id":1205,"value":93.714863554},{"id":1206,"value":97.3746157664},{"id":1207,"value":99.3690962186},{"id":1208,"value":99.93551043},{"id":1209,"value":99.7995837679},{"id":1210,"value":95.2435350476},{"id":1211,"value":98.3401150966},{"id":1212,"value":99.7435482073},{"id":1213,"value":99.88006266},{"id":1214,"value":96.9449558833},{"id":1215,"value":98.7004729965},{"id":1216,"value":99.180597676},{"id":1217,"value":94.387341272},{"id":1218,"value":99.6786413373},{"id":1219,"value":99.7129460594},{"id":1401,"value":99.8838584679},{"id":1402,"value":92.8505398896},{"id":1403,"value":98.8413585696},{"id":1404,"value":99.7500970119},{"id":1405,"value":99.6398405535},{"id":1406,"value":99.8940330101},{"id":1407,"value":99.6597789681},{"id":1408,"value":99.8425656157},{"id":1409,"value":99.3684216228},{"id":1410,"value":99.9059654979},{"id":1411,"value":91.9202322819},{"id":1412,"value":98.0345632043},{"id":1413,"value":91.4093729438},{"id":1414,"value":99.1730104335},{"id":1415,"value":99.2789863003},{"id":1416,"value":84.6645098035},{"id":1417,"value":99.5757644446},{"id":1418,"value":99.125708708},{"id":1419,"value":98.586606111},{"id":1420,"value":97.9524285627},{"id":1421,"value":99.9714320145},{"id":1422,"value":98.1778413179},{"id":1423,"value":99.6072099616},{"id":1424,"value":97.032773465},{"id":1425,"value":98.311782497},{"id":1426,"value":98.9197628588},{"id":1427,"value":94.4355016353},{"id":1428,"value":99.0279241239},{"id":1429,"value":92.9984796179},{"id":1430,"value":99.9748773855},{"id":1432,"value":99.7334491257},{"id":1433,"value":98.5584618237},{"id":1434,"value":99.698878228},{"id":1435,"value":97.8070220674},{"id":1436,"value":99.5590879961},{"id":1437,"value":97.7351683946},{"id":1438,"value":94.0670663261},{"id":1601,"value":99.0129603807},{"id":1602,"value":99.9330882382},{"id":1603,"value":99.9719754463},{"id":1604,"value":99.0266934329},{"id":1605,"value":99.9859884253},{"id":1606,"value":99.4186453224},{"id":1607,"value":99.4478990009},{"id":1608,"value":94.016182209},{"id":1609,"value":99.9609613998},{"id":1610,"value":99.9177250119},{"id":1611,"value":99.8515395353},{"id":1801,"value":73.0392461939},{"id":1802,"value":99.4248590516},{"id":1803,"value":99.9051741066},{"id":1804,"value":90.2139191378},{"id":1805,"value":99.1826223849},{"id":1806,"value":98.4121168702},{"id":1807,"value":98.8772327435},{"id":1808,"value":62.7444262939},{"id":1809,"value":97.9930668924},{"id":1810,"value":99.8057728372},{"id":1811,"value":96.3843936897},{"id":1812,"value":87.6639770287},{"id":1813,"value":92.1722294089},{"id":1814,"value":91.829875399},{"id":1815,"value":99.6388487633},{"id":1816,"value":96.7726652468},{"id":1817,"value":86.8260139895},{"id":1818,"value":98.3491073358},{"id":1819,"value":99.9281167377},{"id":1820,"value":92.3882886481},{"id":1821,"value":90.0023546426},{"id":2001,"value":77.9065334955},{"id":2002,"value":77.9803680538},{"id":2003,"value":84.5966043809},{"id":2004,"value":83.1524292338},{"id":2005,"value":86.8578205584},{"id":2006,"value":96.6324898235},{"id":2007,"value":87.61469981},{"id":2008,"value":94.8483721067},{"id":2009,"value":95.8291703498},{"id":2010,"value":96.7622167212},{"id":2011,"value":97.8709136046},{"id":2012,"value":98.7090954889},{"id":2013,"value":99.8945705111},{"id":2014,"value":95.3702686238},{"id":2201,"value":87.970051421},{"id":2202,"value":87.9807515933},{"id":2203,"value":84.1202725989},{"id":2204,"value":99.5912075987},{"id":2205,"value":96.0158613794},{"id":2206,"value":89.7208238568},{"id":2207,"value":99.7419578951},{"id":2208,"value":88.0080366972},{"id":2209,"value":99.2608400561},{"id":2210,"value":98.1441028827},{"id":2211,"value":94.53572206},{"id":2212,"value":99.2231742925},{"id":2213,"value":85.1677584341},{"id":2214,"value":98.5543369051},{"id":2215,"value":97.6552276699},{"id":2216,"value":95.480158187},{"id":2401,"value":99.9961588266},{"id":2402,"value":91.8428774207},{"id":2403,"value":99.7002223512},{"id":2404,"value":99.9294372318},{"id":2405,"value":99.9881607068},{"id":2406,"value":99.8791716536},{"id":2407,"value":89.9557365692},{"id":2408,"value":98.801627773},{"id":2409,"value":98.7887148348},{"id":2410,"value":100.0},{"id":2411,"value":99.462338},{"id":2412,"value":99.7826554465},{"id":2413,"value":99.9749055959},{"id":2414,"value":100.0},{"id":2415,"value":99.7112123544},{"id":2416,"value":99.946023101},{"id":2417,"value":99.9346147268},{"id":2601,"value":99.9785569471},{"id":2602,"value":99.8217508637},{"id":2603,"value":99.052816973},{"id":2604,"value":96.9419554938},{"id":2605,"value":98.8393463798},{"id":2606,"value":83.1740711399},{"id":2607,"value":99.633347062},{"id":2608,"value":98.7217065827},{"id":2609,"value":99.3136964419},{"id":2610,"value":99.9357264989},{"id":2611,"value":94.4740354096},{"id":2612,"value":99.0956582044},{"id":2613,"value":99.6609206333},{"id":2801,"value":87.0832497807},{"id":2802,"value":94.40905027},{"id":2803,"value":94.7732057107},{"id":2804,"value":99.6085240251},{"id":2805,"value":93.6294019501},{"id":2806,"value":94.3443446182},{"id":2807,"value":83.1231903744},{"id":2808,"value":98.3692835706},{"id":2809,"value":93.0686179051},{"id":2810,"value":95.9575868887},{"id":2811,"value":90.4261685887},{"id":2812,"value":91.6043515589},{"id":2813,"value":96.4784576711},{"id":2814,"value":86.3403622358},{"id":2815,"value":84.5759865652},{"id":2816,"value":95.4004990115},{"id":2817,"value":98.5342353658},{"id":2818,"value":89.9553011097},{"id":2819,"value":64.5178991439},{"id":3001,"value":99.2823049303},{"id":3002,"value":99.776759475},{"id":3003,"value":94.2625198729},{"id":3004,"value":99.9461135125},{"id":3005,"value":95.4421131604},{"id":3006,"value":99.97792973},{"id":3007,"value":93.5884607527},{"id":3008,"value":99.8445096556},{"id":3009,"value":99.7976416759},{"id":3010,"value":75.9490152272},{"id":3011,"value":97.272778575},{"id":3012,"value":99.6328460333},{"id":3013,"value":99.2137561927},{"id":3014,"value":90.2497071025},{"id":3015,"value":78.2722306955},{"id":3016,"value":99.1226972872},{"id":3017,"value":99.9219175365},{"id":3018,"value":99.3058005988},{"id":3019,"value":99.1999233624},{"id":3020,"value":99.9648406751},{"id":3021,"value":99.3524060074},{"id":3022,"value":99.2256986513},{"id":3023,"value":95.889485293},{"id":3024,"value":97.2167014704},{"id":3025,"value":99.9996976169},{"id":3026,"value":99.4367940461},{"id":3027,"value":93.3187405444},{"id":3028,"value":90.114622328},{"id":3029,"value":99.7688981188},{"id":3030,"value":99.4424916256},{"id":3031,"value":79.7405593631},{"id":3201,"value":89.1727215976},{"id":3202,"value":99.582093679},{"id":3203,"value":97.0325975101},{"id":3204,"value":99.3499324912},{"id":3205,"value":86.7573636785},{"id":3206,"value":88.167795523},{"id":3207,"value":97.2265305357},{"id":3208,"value":99.0412079562},{"id":3209,"value":84.896995676},{"id":3210,"value":96.528202606},{"id":3211,"value":99.9983417512},{"id":3212,"value":97.3415712975},{"id":3213,"value":98.3196197869},{"id":3214,"value":93.2671101224},{"id":3215,"value":98.4095177033},{"id":3216,"value":99.7523775165},{"id":3217,"value":86.7969233328},{"id":3218,"value":89.3849988929}];

	var daneWoj = [{"id":"PL-02","value":97.223785641},{"id":"PL-04","value":94.4174451195},{"id":"PL-06","value":96.3942170481},{"id":"PL-08","value":96.8237887052},{"id":"PL-10","value":96.5128258255},{"id":"PL-12","value":98.3907790671},{"id":"PL-14","value":98.012883452},{"id":"PL-16","value":99.210081905},{"id":"PL-18","value":94.2844886674},{"id":"PL-20","value":89.8130658568},{"id":"PL-22","value":94.7017846298},{"id":"PL-24","value":98.471359928},{"id":"PL-26","value":97.4958489946},{"id":"PL-28","value":92.3905090752},{"id":"PL-30","value":95.6207943758},{"id":"PL-32","value":94.3770711078},{"id":"PL-PL","value":96.1862414329}];

	createMapPow("mapPow", danePow, "pl");
	createMapWoj("mapWoj", daneWoj, "pl");

////////WYKRESY


//var dane1 = [{
//	"w1": "Polska",
//	"ogółem": 100.0,
//	"miasto": 99.8,
//	"wieś": 100.2,
//	"year": "2016"
//	}, {
//	"w1": "Polska",
//	"ogółem": 100.0,
//	"miasto": 99.8,
//	"wieś": 100.4,
//	"year": "2017"
//	}, {
//	"w1": "Polska",
//	"ogółem": 99.9,
//	"miasto": 99.6,
//	"wieś": 100.5,
//	"year": "2018"
//	}, {
//	"w1": "Polska",
//	"ogółem": 99.9,
//	"miasto": 99.4,
//	"wieś": 100.5,
//	"year": "2019"
//	}, {
//	"w1": "Polska",
//	"ogółem": 99.1,
//	"miasto": 98.3,
//	"wieś": 100.3,
//	"year": "2020"
//	}, {
//	"w1": "Polska",
//	"ogółem": 98.6,
//	"miasto": 97.7,
//	"wieś": 100.1,
//	"year": "2021"
//	}, {
//	"w1": "Polska",
//	"ogółem": 98.3,
//	"miasto": 97.1,
//	"wieś": 100.0,
//	"year": "2022"
//	}];


//var dane2_org = [{"w1":"POLSKA","w2":"ogółem","2015":122.9,"2022":120.8},{"w1":"POLSKA","w2":"miasto","2015":1061.9,"2022":999.9},{"w1":"POLSKA","w2":"wieś","2015":52.5,"2022":52.6},{"w1":"Dolnośląskie","w2":"ogółem","2015":145.6,"2022":144.8},{"w1":"Dolnośląskie","w2":"miasto","2015":909.9,"2022":894.9},{"w1":"Dolnośląskie","w2":"wieś","2015":50.5,"2022":52.8},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":116.1,"2022":111.7},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":1500.9,"2022":1377.5},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":49.1,"2022":49.1},{"w1":"Lubelskie","w2":"ogółem","2015":85.2,"2022":80.6},{"w1":"Lubelskie","w2":"miasto","2015":1009.8,"2022":897.8},{"w1":"Lubelskie","w2":"wieś","2015":47.7,"2022":45.2},{"w1":"Lubuskie","w2":"ogółem","2015":72.8,"2022":70.1},{"w1":"Lubuskie","w2":"miasto","2015":762.2,"2022":718.3},{"w1":"Lubuskie","w2":"wieś","2015":27.2,"2022":26.7},{"w1":"Łódzkie","w2":"ogółem","2015":136.9,"2022":130.5},{"w1":"Łódzkie","w2":"miasto","2015":1358.2,"2022":1230.8},{"w1":"Łódzkie","w2":"wieś","2015":54.0,"2022":53.4},{"w1":"Małopolskie","w2":"ogółem","2015":222.1,"2022":225.8},{"w1":"Małopolskie","w2":"miasto","2015":987.5,"2022":988.3},{"w1":"Małopolskie","w2":"wieś","2015":128.5,"2022":132.3},{"w1":"Mazowieckie","w2":"ogółem","2015":150.4,"2022":155.0},{"w1":"Mazowieckie","w2":"miasto","2015":1585.9,"2022":1573.6},{"w1":"Mazowieckie","w2":"wieś","2015":57.2,"2022":58.5},{"w1":"Opolskie","w2":"ogółem","2015":105.8,"2022":100.1},{"w1":"Opolskie","w2":"miasto","2015":676.8,"2022":588.2},{"w1":"Opolskie","w2":"wieś","2015":55.4,"2022":51.8},{"w1":"Podkarpackie","w2":"ogółem","2015":119.2,"2022":116.5},{"w1":"Podkarpackie","w2":"miasto","2015":733.2,"2022":675.1},{"w1":"Podkarpackie","w2":"wieś","2015":75.1,"2022":73.9},{"w1":"Podlaskie","w2":"ogółem","2015":58.9,"2022":56.6},{"w1":"Podlaskie","w2":"miasto","2015":778.3,"2022":751.6},{"w1":"Podlaskie","w2":"wieś","2015":24.3,"2022":23.2},{"w1":"Pomorskie","w2":"ogółem","2015":126.0,"2022":128.6},{"w1":"Pomorskie","w2":"miasto","2015":1392.6,"2022":1370.9},{"w1":"Pomorskie","w2":"wieś","2015":47.6,"2022":51.1},{"w1":"Śląskie","w2":"ogółem","2015":370.6,"2022":352.4},{"w1":"Śląskie","w2":"miasto","2015":930.1,"2022":862.4},{"w1":"Śląskie","w2":"wieś","2015":122.4,"2022":123.2},{"w1":"Świętokrzyskie","w2":"ogółem","2015":107.4,"2022":100.6},{"w1":"Świętokrzyskie","w2":"miasto","2015":833.2,"2022":664.6},{"w1":"Świętokrzyskie","w2":"wieś","2015":63.1,"2022":59.6},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":59.6,"2022":56.5},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":1422.0,"2022":1308.1},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":25.0,"2022":23.8},{"w1":"Wielkopolskie","w2":"ogółem","2015":116.5,"2022":117.1},{"w1":"Wielkopolskie","w2":"miasto","2015":1253.3,"2022":1151.2},{"w1":"Wielkopolskie","w2":"wieś","2015":55.4,"2022":57.8},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":74.7,"2022":71.6},{"w1":"Zachodniopomorskie","w2":"miasto","2015":829.0,"2022":764.4},{"w1":"Zachodniopomorskie","w2":"wieś","2015":25.0,"2022":24.4}];
//var dane2 = $(dane2_org).filter(function (i,n){
//	return n.w2==='miasto';
//	});


var dane3 = [{
	"year": "2015",
	"krajowe": 15094.4,
	"wojewódzkie": 24433.9,
	"powiatowe": 101458.1,
	"gminne": 91828.0
	}, {
	"year": "2022",
	"krajowe": 15367.5,
	"wojewódzkie": 24571.7,
	"powiatowe": 102055.5,
	"gminne": 112080.6
	}];


//var dane4_org = [{"w1":"POLSKA","w2":"ogółem","2015":64.0,"2022":69.3},{"w1":"POLSKA","w2":"miasto","2015":13.4,"2022":14.4},{"w1":"POLSKA","w2":"wieś","2015":50.6,"2022":54.9},{"w1":"Dolnośląskie","w2":"ogółem","2015":76.4,"2022":80.5},{"w1":"Dolnośląskie","w2":"miasto","2015":20.9,"2022":20.8},{"w1":"Dolnośląskie","w2":"wieś","2015":55.5,"2022":59.7},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":56.6,"2022":64.2},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":9.5,"2022":10.1},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":47.1,"2022":54.1},{"w1":"Lubelskie","w2":"ogółem","2015":56.5,"2022":60.6},{"w1":"Lubelskie","w2":"miasto","2015":7.0,"2022":7.6},{"w1":"Lubelskie","w2":"wieś","2015":49.5,"2022":53.0},{"w1":"Lubuskie","w2":"ogółem","2015":50.8,"2022":51.7},{"w1":"Lubuskie","w2":"miasto","2015":11.5,"2022":11.9},{"w1":"Lubuskie","w2":"wieś","2015":39.3,"2022":39.8},{"w1":"Łódzkie","w2":"ogółem","2015":70.7,"2022":77.7},{"w1":"Łódzkie","w2":"miasto","2015":12.5,"2022":13.8},{"w1":"Łódzkie","w2":"wieś","2015":58.2,"2022":63.9},{"w1":"Małopolskie","w2":"ogółem","2015":74.2,"2022":76.7},{"w1":"Małopolskie","w2":"miasto","2015":14.1,"2022":14.2},{"w1":"Małopolskie","w2":"wieś","2015":60.0,"2022":62.5},{"w1":"Mazowieckie","w2":"ogółem","2015":63.9,"2022":70.7},{"w1":"Mazowieckie","w2":"miasto","2015":12.8,"2022":14.0},{"w1":"Mazowieckie","w2":"wieś","2015":51.2,"2022":56.7},{"w1":"Opolskie","w2":"ogółem","2015":74.9,"2022":78.4},{"w1":"Opolskie","w2":"miasto","2015":15.1,"2022":17.4},{"w1":"Opolskie","w2":"wieś","2015":59.8,"2022":61.0},{"w1":"Podkarpackie","w2":"ogółem","2015":74.1,"2022":78.6},{"w1":"Podkarpackie","w2":"miasto","2015":12.9,"2022":14.1},{"w1":"Podkarpackie","w2":"wieś","2015":61.2,"2022":64.4},{"w1":"Podlaskie","w2":"ogółem","2015":44.5,"2022":49.5},{"w1":"Podlaskie","w2":"miasto","2015":6.8,"2022":7.6},{"w1":"Podlaskie","w2":"wieś","2015":37.8,"2022":41.8},{"w1":"Pomorskie","w2":"ogółem","2015":53.5,"2022":64.6},{"w1":"Pomorskie","w2":"miasto","2015":12.6,"2022":14.8},{"w1":"Pomorskie","w2":"wieś","2015":40.9,"2022":49.8},{"w1":"Śląskie","w2":"ogółem","2015":79.8,"2022":84.3},{"w1":"Śląskie","w2":"miasto","2015":37.3,"2022":39.7},{"w1":"Śląskie","w2":"wieś","2015":42.5,"2022":44.7},{"w1":"Świętokrzyskie","w2":"ogółem","2015":70.3,"2022":78.9},{"w1":"Świętokrzyskie","w2":"miasto","2015":9.2,"2022":11.1},{"w1":"Świętokrzyskie","w2":"wieś","2015":61.1,"2022":67.8},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":54.4,"2022":60.0},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":8.4,"2022":8.9},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":46.1,"2022":51.1},{"w1":"Wielkopolskie","w2":"ogółem","2015":64.4,"2022":68.6},{"w1":"Wielkopolskie","w2":"miasto","2015":12.1,"2022":13.8},{"w1":"Wielkopolskie","w2":"wieś","2015":52.2,"2022":54.9},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":63.8,"2022":68.4},{"w1":"Zachodniopomorskie","w2":"miasto","2015":14.9,"2022":15.8},{"w1":"Zachodniopomorskie","w2":"wieś","2015":48.9,"2022":52.6}];
//var dane4 = $(dane4_org).filter(function (i,n){
//	return n.w2==='miasto';
//	});


var dane5 = [{"w1":"POLSKA","w2":"ogółem","2015":34.66,"2022":29.07},{"w1":"Dolnośląskie","w2":"ogółem","2015":22.03,"2022":18.51},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":40.39,"2022":31.67},{"w1":"Lubelskie","w2":"ogółem","2015":44.48,"2022":40.10},{"w1":"Lubuskie","w2":"ogółem","2015":51.01,"2022":51.26},{"w1":"Łódzkie","w2":"ogółem","2015":26.02,"2022":19.53},{"w1":"Małopolskie","w2":"ogółem","2015":19.94,"2022":17.57},{"w1":"Mazowieckie","w2":"ogółem","2015":36.21,"2022":28.92},{"w1":"Opolskie","w2":"ogółem","2015":23.88,"2022":20.56},{"w1":"Podkarpackie","w2":"ogółem","2015":23.98,"2022":19.99},{"w1":"Podlaskie","w2":"ogółem","2015":56.21,"2022":51.02},{"w1":"Pomorskie","w2":"ogółem","2015":46.90,"2022":32.87},{"w1":"Śląskie","w2":"ogółem","2015":16.62,"2022":13.14},{"w1":"Świętokrzyskie","w2":"ogółem","2015":21.50,"2022":15.93},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":48.28,"2022":40.50},{"w1":"Wielkopolskie","w2":"ogółem","2015":33.99,"2022":28.38},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":35.53,"2022":31.92}];


//var dane9_org = [{"w1":"POLSKA","w2":"regionalne","2015":191483,"2022":75701},{"w1":"POLSKA","w2":"podmiejskie","2015":351801,"2022":250547},{"w1":"POLSKA","w2":"miejskie","2015":2092,"2022":808},{"w1":"Dolnośląskie","w2":"regionalne","2015":9272,"2022":2615},{"w1":"Dolnośląskie","w2":"podmiejskie","2015":27221,"2022":23288},{"w1":"Dolnośląskie","w2":"miejskie","2015":135,"2022":218},{"w1":"Kujawsko-Pomorskie","w2":"regionalne","2015":26568,"2022":5006},{"w1":"Kujawsko-Pomorskie","w2":"podmiejskie","2015":39944,"2022":23160},{"w1":"Kujawsko-Pomorskie","w2":"miejskie","2015":131,"2022":0},{"w1":"Lubelskie","w2":"regionalne","2015":17814,"2022":6270},{"w1":"Lubelskie","w2":"podmiejskie","2015":30667,"2022":15262},{"w1":"Lubelskie","w2":"miejskie","2015":20,"2022":0},{"w1":"Lubuskie","w2":"regionalne","2015":6238,"2022":4195},{"w1":"Lubuskie","w2":"podmiejskie","2015":15883,"2022":12656},{"w1":"Lubuskie","w2":"miejskie","2015":62,"2022":0},{"w1":"Łódzkie","w2":"regionalne","2015":12600,"2022":5240},{"w1":"Łódzkie","w2":"podmiejskie","2015":20231,"2022":14888},{"w1":"Łódzkie","w2":"miejskie","2015":100,"2022":138},{"w1":"Małopolskie","w2":"regionalne","2015":3023,"2022":2697},{"w1":"Małopolskie","w2":"podmiejskie","2015":7422,"2022":3594},{"w1":"Małopolskie","w2":"miejskie","2015":89,"2022":0},{"w1":"Mazowieckie","w2":"regionalne","2015":30436,"2022":4407},{"w1":"Mazowieckie","w2":"podmiejskie","2015":56062,"2022":21302},{"w1":"Mazowieckie","w2":"miejskie","2015":476,"2022":10},{"w1":"Opolskie","w2":"regionalne","2015":3505,"2022":908},{"w1":"Opolskie","w2":"podmiejskie","2015":9771,"2022":13488},{"w1":"Opolskie","w2":"miejskie","2015":70,"2022":70},{"w1":"Podkarpackie","w2":"regionalne","2015":6137,"2022":6611},{"w1":"Podkarpackie","w2":"podmiejskie","2015":18118,"2022":22649},{"w1":"Podkarpackie","w2":"miejskie","2015":60,"2022":0},{"w1":"Podlaskie","w2":"regionalne","2015":8949,"2022":7782},{"w1":"Podlaskie","w2":"podmiejskie","2015":15205,"2022":10939},{"w1":"Podlaskie","w2":"miejskie","2015":50,"2022":35},{"w1":"Pomorskie","w2":"regionalne","2015":11728,"2022":9645},{"w1":"Pomorskie","w2":"podmiejskie","2015":18495,"2022":17578},{"w1":"Pomorskie","w2":"miejskie","2015":220,"2022":60},{"w1":"Śląskie","w2":"regionalne","2015":6481,"2022":1205},{"w1":"Śląskie","w2":"podmiejskie","2015":16019,"2022":7857},{"w1":"Śląskie","w2":"miejskie","2015":253,"2022":229},{"w1":"Świętokrzyskie","w2":"regionalne","2015":3412,"2022":380},{"w1":"Świętokrzyskie","w2":"podmiejskie","2015":9601,"2022":6580},{"w1":"Świętokrzyskie","w2":"miejskie","2015":0,"2022":0},{"w1":"Warmińsko-Mazurskie","w2":"regionalne","2015":12870,"2022":4018},{"w1":"Warmińsko-Mazurskie","w2":"podmiejskie","2015":16317,"2022":7760},{"w1":"Warmińsko-Mazurskie","w2":"miejskie","2015":313,"2022":0},{"w1":"Wielkopolskie","w2":"regionalne","2015":12797,"2022":7766},{"w1":"Wielkopolskie","w2":"podmiejskie","2015":31262,"2022":27344},{"w1":"Wielkopolskie","w2":"miejskie","2015":62,"2022":0},{"w1":"Zachodniopomorskie","w2":"regionalne","2015":19653,"2022":6956},{"w1":"Zachodniopomorskie","w2":"podmiejskie","2015":19583,"2022":22202},{"w1":"Zachodniopomorskie","w2":"miejskie","2015":51,"2022":48}];
//var dane9 = $(dane9_org).filter(function (i,n){
//	return n.w2==='regionalne';
//	});


//console.log(dane1);
//console.log(dane7);



			createchart1("chart1", 97, 101, 1, ["ogółem", "miasto", "wieś"], 0);

			createchart2("chart2", 0, 400, 0, ["2015", "2022"], 0);

			createchart3("chart3", dane3, ["krajowe", "wojewódzkie", "powiatowe", "gminne"]);

			createchart4("chart4", 0, 100, 0, ["2015", "2022"], 0);

			createchart5("chart5", dane5, 0, 60, 0, ["2015", "2022"]);

			createchart6("chart6");

			createchart7("chart7", 100);

			createchart8("chart8", 30);

			createchart9("chart9", 0, 200000, 0, ["2015", "2022"], 0);



			}); // end am5.ready()


$('label').tooltip({
        placement : 'top'
    });





function wyborWoj() {
    var wojBox = document.getElementById("wojBox");
    var selectedWoj = wojBox.options[wojBox.selectedIndex].index;
    console.log(selectedWoj);
		if(selectedWoj===0){    
		createchart1('chart1', 97, 101, 1, ['ogółem', 'miasto', 'wieś'], 0);
		}
		if(selectedWoj===1){    
		createchart1('chart1', 97, 105, 1, ['ogółem', 'miasto', 'wieś'], 1);
		}
		if(selectedWoj===2){    
		createchart1('chart1', 93, 102, 1, ['ogółem', 'miasto', 'wieś'], 2);
		}		
		if(selectedWoj===3){    
		createchart1('chart1', 94, 101, 1, ['ogółem', 'miasto', 'wieś'], 3);
		}		
		if(selectedWoj===4){    
		createchart1('chart1', 95, 101, 1, ['ogółem', 'miasto', 'wieś'], 4);
		}
		if(selectedWoj===5){    
		createchart1('chart1', 93, 101, 1, ['ogółem', 'miasto', 'wieś'], 5);
		}
		if(selectedWoj===6){    
		createchart1('chart1', 100, 103, 1, ['ogółem', 'miasto', 'wieś'], 6);
		}		
		if(selectedWoj===7){    
		createchart1('chart1', 100, 104, 1, ['ogółem', 'miasto', 'wieś'], 7);
		}
		if(selectedWoj===8){    
		createchart1('chart1', 92, 102, 1, ['ogółem', 'miasto', 'wieś'], 8);
		}
		if(selectedWoj===9){    
		createchart1('chart1', 97, 101, 1, ['ogółem', 'miasto', 'wieś'], 9);
		}
		if(selectedWoj===10){    
		createchart1('chart1', 95, 100, 1, ['ogółem', 'miasto', 'wieś'], 10);
		}
		if(selectedWoj===11){    
		createchart1('chart1', 99, 108, 1, ['ogółem', 'miasto', 'wieś'], 11);
		}
		if(selectedWoj===12){    
		createchart1('chart1', 93, 101, 1, ['ogółem', 'miasto', 'wieś'], 12);
		}
		if(selectedWoj===13){    
		createchart1('chart1', 93, 100, 1, ['ogółem', 'miasto', 'wieś'], 13);
		}
		if(selectedWoj===14){    
		createchart1('chart1', 94, 100, 1, ['ogółem', 'miasto', 'wieś'], 14);
		}
		if(selectedWoj===15){    
		createchart1('chart1', 97, 104, 1, ['ogółem', 'miasto', 'wieś'], 15);
		}
		if(selectedWoj===16){    
		createchart1('chart1', 95, 101, 1, ['ogółem', 'miasto', 'wieś'], 16);
		}
   }





				function onChangeOption(value){
					//console.log(value);

					var wojMap = document.getElementById("mapWoj");
					var powMap = document.getElementById("mapPow");

					if(value==="Woj"){
						wojMap.removeAttribute("hidden");
						powMap.setAttribute("hidden", "hidden");
					}
					if(value==="Pow"){
						powMap.removeAttribute("hidden");
						wojMap.setAttribute("hidden", "hidden");
					}
				}

				$(document).ready(function() {
				    if (location.hash) {
				        $("a[href='" + location.hash + "']").tab("show");
								//console.log("doc1");
				    }
				    $(document.body).on("click", "a[data-toggle]", function(event) {
				        location.hash = this.getAttribute("href");
								//ładowanie mapy
								if(location.hash === "#maps"){
									console.log(location.hash);
									//reload();
								}
				    });
				});
				$(window).on("popstate", function() {
				    var anchor = location.hash || $("a[data-toggle='tab']").first().attr("href");
				    $("a[href='" + anchor + "']").tab("show");
				});

				var currentLink = null;
				        function changeLinkColor(link){
				            if(currentLink!=null){
				                currentLink.style.color = link.style.color;
				            }
				            link.style.color = 'blue';
				            currentLink = link;
				        }
</script>
