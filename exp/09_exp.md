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

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/gminy.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/js/amchart5/gminyMap.js"></script>

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
										<input class="form-check-input" type="radio" name="pw" id="inlineRadioGmin" value="Gmin" onclick="onChangeOption(this.value);" checked="checked">
										<label class="form-check-label" for="inlineRadioGmin" style="margin-top:  5px;">gminy</label>
									</div>
									<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
										<input class="form-check-input" type="radio" name="pw" id="inlineRadioPow" value="Pow" onclick="onChangeOption(this.value);">
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
										<div id="mapPow" hidden style="width: 100%;height: 700px"></div>
										<div id="mapWoj" hidden style="width: 100%;height: 700px"></div>
										<div id="mapGmin" style="width: 100%;height: 700px"></div>
									</div>
								</div>

								</div>

								<a href="{{ site.baseurl }}/assets/excel/exp/pl/9.1.1_PL.xlsx" target="_blank">
								<button style="float: right;margin-right: 0px;"><i class="fa fa-file-excel-o" alt="Pobierz Excel" title="Pobierz ranking jednostek w formacie Excel" style="font-size:20px;"></i></button>
								</a>

								<div style="overflow:auto; width:100%;">
									<h4><b>Interpretacja wskaźnika</b></h4>
									<p>Wskaźnik prezentuje udział ludności wiejskiej zamieszkałej w promieniu 2 km od drogi dostępnej przez cały rok w ogólnej liczbie ludności wiejskiej (w danym województwie/powiecie/gminie) w 2020 r.</p>
									<p>Za drogi spełniające warunek dostępności przez cały rok uznano drogi krajowe, wojewódzkie, powiatowe i gminne o nawierzchni z masy bitumicznej (asfaltu). Ze względu na specyfikę wskaźnika dane nie dotyczą miast na prawach powiatu (na mapie oznaczone szarymi obszarami).</p>
									<p>Im wyższa wartość wskaźnika, tym większy odsetek ludności wiejskiej w danym województwie lub powiecie ma dostęp do całorocznie przejezdnej drogi w odległości 2 km od swojego miejsca zamieszkania.</p>
								</div>
					  </div>
<!-----------------Wykresy--------------------------------------->

<div role="tabpanel" class="tab-pane" id="dashboard" style="scroll-margin-top: 500px;">

<!--<h4><b>Wskaźniki kontekstowe</b></h4>-->

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
					<input class="form-check-input" type="radio" name="dataset2" id="inlineRadio2_1" value="ogółem" onclick="createchart2('chart2', 0, 400, 0, ['2015', '2023'], 0);" checked="checked">
					<label class="form-check-label" for="inlineRadio2_1" style="margin-top:  5px;">ogółem</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset2" id="inlineRadio2_2" value="w miastach" onclick="createchart2('chart2', 0, 2000, 0, ['2015', '2023'], 1);">
					<label class="form-check-label" for="inlineRadio2_2" style="margin-top:  5px;">w miastach</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset2" id="inlineRadio2_3" value="na wsi" onclick="createchart2('chart2', 0, 140, 0, ['2015', '2023'], 2);">
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
			<div style="width: 86%; display: inline-block; margin-top: 15px; margin-bottom: 5px;"><b>Odsetek ludności zamieszkującej na wsi i w mieście w 2023 roku (%)</b></div>
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
					<input class="form-check-input" type="radio" name="dataset9" id="inlineRadio9_1" value="regionalne" onclick="createchart9('chart9', 0, 200000, 0, ['2015', '2023'], 0);" checked="checked">
					<label class="form-check-label" for="inlineRadio9_1" style="margin-top:  5px;">regionalne</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset9" id="inlineRadio9_2" value="podmiejskie" onclick="createchart9('chart9', 0, 400000, 0, ['2015', '2023'], 1);">
					<label class="form-check-label" for="inlineRadio9_2" style="margin-top:  5px;">podmiejskie</label>
				</div>
				<div class="form-check form-check-inline" style="display: inline-block;margin-left: 10px;">
					<input class="form-check-input" type="radio" name="dataset9" id="inlineRadio9_3" value="miejskie" onclick="createchart9('chart9', 0, 2500, 0, ['2015', '2023'], 2);">
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
							<p>Szczegółowa informacja nt. obliczeń dokonanych w oparciu o <a target="_blank" href="https://unstats.un.org/sdgs/metadata/files/Metadata-09-01-01.pdf" alt="Metodologia obliczania wskaźnika 9.1.1 SDG" title="Metodologia obliczania wskaźnika 9.1.1 SDG">metodologię ONZ</a>, znajduje się w <a target="_blank" href="{{ site.baseurl }}/assets/pdf/exp/pl/9.1.1_metryka.pdf" alt="Metodologia obliczania wskaźnika 9.1.1 SDG" title="Metodologia obliczania wskaźnika 9.1.1 SDG">metryce wskaźnika</a>.</p>
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

	var daneGmin = [{"id":201022,"value":98.34},{"id":201032,"value":89.35},{"id":201043,"value":74.09},{"id":201052,"value":99.52},{"id":201062,"value":99.04},{"id":202033,"value":19.24},{"id":202052,"value":99.3},{"id":202062,"value":89.76},{"id":202073,"value":46.75},{"id":203022,"value":99.52},{"id":203032,"value":99.75},{"id":203042,"value":99.93},{"id":203052,"value":71.09},{"id":203062,"value":99.97},{"id":204013,"value":58.14},{"id":204022,"value":95.85},{"id":204032,"value":85.4},{"id":204043,"value":68.29},{"id":205023,"value":70.86},{"id":205032,"value":99.98},{"id":205042,"value":100.0},{"id":205052,"value":99.36},{"id":205062,"value":99.86},{"id":206052,"value":100.0},{"id":206062,"value":99.15},{"id":206072,"value":100.0},{"id":206082,"value":100.0},{"id":206092,"value":99.71},{"id":207022,"value":100.0},{"id":207033,"value":35.75},{"id":207042,"value":100.0},{"id":208063,"value":58.47},{"id":208072,"value":99.97},{"id":208083,"value":19.85},{"id":208092,"value":100.0},{"id":208103,"value":59.13},{"id":208112,"value":100.0},{"id":208123,"value":77.84},{"id":208133,"value":32.38},{"id":208143,"value":22.55},{"id":209022,"value":95.03},{"id":209032,"value":100.0},{"id":209042,"value":100.0},{"id":209052,"value":100.0},{"id":209062,"value":100.0},{"id":209073,"value":58.49},{"id":209082,"value":100.0},{"id":210033,"value":61.47},{"id":210042,"value":99.99},{"id":210053,"value":17.63},{"id":210062,"value":100.0},{"id":210072,"value":100.0},{"id":211022,"value":99.83},{"id":211032,"value":99.78},{"id":211043,"value":43.45},{"id":212013,"value":39.83},{"id":212023,"value":67.88},{"id":212033,"value":74.77},{"id":212043,"value":53.77},{"id":212053,"value":53.38},{"id":213012,"value":99.41},{"id":213022,"value":99.36},{"id":213033,"value":62.51},{"id":214023,"value":51.89},{"id":214032,"value":95.11},{"id":214042,"value":79.26},{"id":214053,"value":34.02},{"id":214062,"value":99.36},{"id":214073,"value":35.57},{"id":214083,"value":47.9},{"id":215022,"value":100.0},{"id":215033,"value":36.32},{"id":215042,"value":99.76},{"id":216013,"value":67.33},{"id":216022,"value":96.41},{"id":216032,"value":100.0},{"id":216043,"value":33.05},{"id":216053,"value":51.78},{"id":216062,"value":99.17},{"id":217012,"value":100.0},{"id":217022,"value":99.4},{"id":217032,"value":100.0},{"id":217043,"value":50.47},{"id":217053,"value":72.56},{"id":218012,"value":95.53},{"id":218022,"value":100.0},{"id":218033,"value":95.78},{"id":218043,"value":61.75},{"id":218052,"value":93.0},{"id":219032,"value":100.0},{"id":219043,"value":53.58},{"id":219052,"value":100.0},{"id":219063,"value":53.0},{"id":219072,"value":100.0},{"id":219083,"value":58.17},{"id":220013,"value":63.85},{"id":220023,"value":79.44},{"id":220033,"value":75.06},{"id":220042,"value":94.15},{"id":220052,"value":99.16},{"id":220063,"value":70.05},{"id":221042,"value":99.04},{"id":221053,"value":25.51},{"id":221063,"value":30.07},{"id":221072,"value":100.0},{"id":221082,"value":100.0},{"id":222013,"value":23.77},{"id":222022,"value":85.5},{"id":222033,"value":67.59},{"id":223012,"value":96.52},{"id":223022,"value":97.85},{"id":223032,"value":99.89},{"id":223043,"value":81.25},{"id":223052,"value":99.66},{"id":223062,"value":100.0},{"id":223073,"value":43.6},{"id":223083,"value":58.96},{"id":223092,"value":96.2},{"id":224013,"value":56.06},{"id":224022,"value":100.0},{"id":224033,"value":100.0},{"id":224042,"value":100.0},{"id":224053,"value":39.6},{"id":224063,"value":58.82},{"id":224073,"value":30.56},{"id":225033,"value":29.36},{"id":225043,"value":29.48},{"id":225052,"value":100.0},{"id":225063,"value":69.55},{"id":225072,"value":100.0},{"id":226032,"value":79.69},{"id":226043,"value":77.42},{"id":226052,"value":69.51},{"id":226062,"value":91.91},{"id":401042,"value":98.77},{"id":401052,"value":100.0},{"id":401062,"value":100.0},{"id":401072,"value":100.0},{"id":401082,"value":100.0},{"id":401092,"value":100.0},{"id":402022,"value":60.67},{"id":402032,"value":70.9},{"id":402042,"value":50.43},{"id":402053,"value":4.43},{"id":402062,"value":75.09},{"id":402073,"value":27.65},{"id":402082,"value":82.1},{"id":402092,"value":8.55},{"id":402102,"value":5.1},{"id":403012,"value":99.52},{"id":403022,"value":98.88},{"id":403032,"value":93.98},{"id":403043,"value":53.29},{"id":403052,"value":98.91},{"id":403062,"value":99.66},{"id":403072,"value":99.29},{"id":403083,"value":8.7},{"id":404022,"value":51.98},{"id":404032,"value":99.42},{"id":404042,"value":89.21},{"id":404052,"value":68.27},{"id":404062,"value":99.39},{"id":404072,"value":100.0},{"id":405022,"value":96.1},{"id":405032,"value":95.45},{"id":405043,"value":50.76},{"id":405052,"value":91.95},{"id":405062,"value":92.27},{"id":406012,"value":97.38},{"id":406022,"value":96.7},{"id":406033,"value":64.73},{"id":406043,"value":58.36},{"id":406052,"value":100.0},{"id":406062,"value":100.0},{"id":407022,"value":98.78},{"id":407033,"value":59.22},{"id":407042,"value":95.65},{"id":407053,"value":36.71},{"id":407063,"value":73.36},{"id":407073,"value":62.4},{"id":407082,"value":92.63},{"id":407092,"value":99.98},{"id":408022,"value":100.0},{"id":408032,"value":100.0},{"id":408043,"value":65.66},{"id":408052,"value":100.0},{"id":408062,"value":99.86},{"id":408073,"value":34.18},{"id":408082,"value":99.95},{"id":408092,"value":99.84},{"id":409012,"value":96.46},{"id":409022,"value":96.1},{"id":409033,"value":56.24},{"id":409043,"value":66.96},{"id":410013,"value":42.62},{"id":410023,"value":58.25},{"id":410033,"value":51.59},{"id":410042,"value":89.4},{"id":410053,"value":63.35},{"id":411022,"value":95.67},{"id":411032,"value":100.0},{"id":411042,"value":100.0},{"id":411053,"value":46.71},{"id":411062,"value":100.0},{"id":411072,"value":99.95},{"id":412022,"value":100.0},{"id":412032,"value":99.33},{"id":412042,"value":100.0},{"id":412052,"value":99.09},{"id":412062,"value":96.05},{"id":413013,"value":64.57},{"id":413023,"value":48.48},{"id":413032,"value":98.77},{"id":413043,"value":57.33},{"id":414012,"value":100.0},{"id":414022,"value":100.0},{"id":414032,"value":99.88},{"id":414042,"value":99.02},{"id":414052,"value":98.71},{"id":414063,"value":58.43},{"id":414072,"value":98.15},{"id":414083,"value":99.72},{"id":414093,"value":46.25},{"id":414102,"value":100.0},{"id":414112,"value":98.92},{"id":415022,"value":100.0},{"id":415032,"value":99.97},{"id":415042,"value":99.95},{"id":415052,"value":100.0},{"id":415062,"value":97.74},{"id":415072,"value":99.28},{"id":415082,"value":99.99},{"id":415092,"value":97.68},{"id":416012,"value":79.97},{"id":416022,"value":99.15},{"id":416032,"value":66.98},{"id":416042,"value":82.4},{"id":416052,"value":11.47},{"id":416063,"value":24.38},{"id":417022,"value":86.27},{"id":417032,"value":99.17},{"id":417042,"value":97.46},{"id":417052,"value":96.89},{"id":418022,"value":97.96},{"id":418032,"value":97.05},{"id":418043,"value":72.73},{"id":418052,"value":98.59},{"id":418063,"value":64.13},{"id":418072,"value":99.99},{"id":418083,"value":77.22},{"id":418092,"value":100.0},{"id":418102,"value":94.62},{"id":418113,"value":89.3},{"id":418123,"value":81.76},{"id":418132,"value":98.3},{"id":419013,"value":72.9},{"id":419022,"value":99.85},{"id":419033,"value":59.05},{"id":419043,"value":61.49},{"id":419052,"value":100.0},{"id":419063,"value":57.33},{"id":601032,"value":96.29},{"id":601042,"value":95.03},{"id":601052,"value":99.22},{"id":601062,"value":88.32},{"id":601072,"value":97.91},{"id":601082,"value":96.65},{"id":601092,"value":89.38},{"id":601102,"value":97.48},{"id":601112,"value":98.82},{"id":601122,"value":90.99},{"id":601132,"value":100.0},{"id":601142,"value":100.0},{"id":601152,"value":99.05},{"id":601162,"value":98.73},{"id":601172,"value":93.8},{"id":601182,"value":99.99},{"id":601192,"value":97.11},{"id":602022,"value":99.65},{"id":602032,"value":94.26},{"id":602042,"value":80.66},{"id":602053,"value":82.97},{"id":602063,"value":99.5},{"id":602073,"value":76.29},{"id":602082,"value":78.28},{"id":602092,"value":88.73},{"id":602102,"value":94.86},{"id":602112,"value":78.63},{"id":602123,"value":50.6},{"id":602132,"value":90.61},{"id":602142,"value":95.65},{"id":603022,"value":100.0},{"id":603032,"value":98.24},{"id":603042,"value":99.76},{"id":603052,"value":100.0},{"id":603062,"value":100.0},{"id":603072,"value":100.0},{"id":603082,"value":100.0},{"id":603092,"value":100.0},{"id":603102,"value":99.21},{"id":603113,"value":71.38},{"id":603122,"value":93.89},{"id":603132,"value":98.14},{"id":603142,"value":99.63},{"id":603153,"value":99.2},{"id":604022,"value":98.72},{"id":604032,"value":99.97},{"id":604042,"value":99.99},{"id":604052,"value":99.8},{"id":604062,"value":100.0},{"id":604072,"value":99.94},{"id":604082,"value":100.0},{"id":605012,"value":98.99},{"id":605022,"value":99.63},{"id":605032,"value":77.77},{"id":605042,"value":81.27},{"id":605053,"value":26.66},{"id":605063,"value":76.91},{"id":605072,"value":85.95},{"id":606022,"value":100.0},{"id":606032,"value":99.91},{"id":606043,"value":99.53},{"id":606052,"value":99.6},{"id":606062,"value":96.79},{"id":606072,"value":100.0},{"id":606092,"value":99.66},{"id":606102,"value":99.63},{"id":606112,"value":98.38},{"id":607023,"value":77.66},{"id":607032,"value":99.97},{"id":607042,"value":93.61},{"id":607052,"value":96.48},{"id":607062,"value":99.99},{"id":607072,"value":96.62},{"id":607083,"value":69.79},{"id":607092,"value":99.39},{"id":607102,"value":99.77},{"id":608022,"value":96.39},{"id":608032,"value":74.45},{"id":608042,"value":98.42},{"id":608053,"value":93.94},{"id":608063,"value":15.53},{"id":608072,"value":92.93},{"id":608082,"value":91.08},{"id":608092,"value":60.79},{"id":608103,"value":20.63},{"id":608112,"value":93.71},{"id":608122,"value":95.53},{"id":608132,"value":99.99},{"id":609013,"value":52.66},{"id":609022,"value":99.81},{"id":609033,"value":66.59},{"id":609042,"value":99.91},{"id":609052,"value":96.21},{"id":609062,"value":99.63},{"id":609072,"value":100.0},{"id":609082,"value":100.0},{"id":609092,"value":98.09},{"id":609102,"value":100.0},{"id":609112,"value":100.0},{"id":609122,"value":100.0},{"id":609132,"value":99.15},{"id":609142,"value":99.99},{"id":609152,"value":99.99},{"id":609162,"value":99.39},{"id":610012,"value":96.09},{"id":610022,"value":94.57},{"id":610033,"value":12.84},{"id":610042,"value":94.82},{"id":610052,"value":99.9},{"id":610062,"value":99.63},{"id":611032,"value":99.94},{"id":611042,"value":99.18},{"id":611052,"value":99.41},{"id":611062,"value":98.64},{"id":611072,"value":100.0},{"id":611082,"value":99.53},{"id":611092,"value":99.99},{"id":611102,"value":99.93},{"id":611112,"value":100.0},{"id":612012,"value":99.1},{"id":612023,"value":96.88},{"id":612032,"value":95.31},{"id":612042,"value":95.98},{"id":612053,"value":49.92},{"id":612063,"value":47.16},{"id":612072,"value":91.68},{"id":613012,"value":100.0},{"id":613022,"value":100.0},{"id":613032,"value":98.57},{"id":613043,"value":32.85},{"id":613052,"value":99.99},{"id":613062,"value":99.54},{"id":613072,"value":99.12},{"id":614022,"value":90.74},{"id":614032,"value":92.97},{"id":614043,"value":52.29},{"id":614052,"value":89.2},{"id":614062,"value":89.02},{"id":614072,"value":95.58},{"id":614083,"value":44.59},{"id":614092,"value":94.58},{"id":614102,"value":93.34},{"id":614112,"value":92.5},{"id":615022,"value":91.14},{"id":615032,"value":96.71},{"id":615042,"value":88.96},{"id":615052,"value":94.59},{"id":615062,"value":89.38},{"id":615072,"value":88.25},{"id":615082,"value":95.69},{"id":616022,"value":99.99},{"id":616032,"value":100.0},{"id":616043,"value":47.73},{"id":616052,"value":97.62},{"id":616062,"value":100.0},{"id":617022,"value":97.65},{"id":617033,"value":67.63},{"id":617042,"value":97.95},{"id":617052,"value":96.86},{"id":618022,"value":97.36},{"id":618032,"value":98.17},{"id":618042,"value":98.9},{"id":618053,"value":79.15},{"id":618063,"value":84.11},{"id":618072,"value":97.28},{"id":618082,"value":98.86},{"id":618092,"value":92.93},{"id":618102,"value":100.0},{"id":618112,"value":98.33},{"id":618123,"value":64.23},{"id":618132,"value":91.19},{"id":619022,"value":98.73},{"id":619032,"value":96.01},{"id":619042,"value":88.75},{"id":619052,"value":96.9},{"id":619062,"value":97.05},{"id":619072,"value":99.76},{"id":619082,"value":95.5},{"id":620012,"value":99.77},{"id":620022,"value":90.28},{"id":620032,"value":99.82},{"id":620043,"value":79.48},{"id":620052,"value":100.0},{"id":620062,"value":98.49},{"id":620072,"value":99.7},{"id":620082,"value":98.96},{"id":620092,"value":99.43},{"id":620102,"value":98.07},{"id":620112,"value":99.65},{"id":620122,"value":99.55},{"id":620133,"value":64.5},{"id":620142,"value":99.84},{"id":620153,"value":62.44},{"id":801022,"value":99.99},{"id":801032,"value":99.78},{"id":801042,"value":99.99},{"id":801052,"value":99.28},{"id":801062,"value":99.74},{"id":801073,"value":63.73},{"id":802022,"value":93.01},{"id":802032,"value":70.29},{"id":802042,"value":82.71},{"id":802052,"value":96.95},{"id":802063,"value":50.37},{"id":802072,"value":93.03},{"id":803012,"value":99.79},{"id":803023,"value":54.27},{"id":803032,"value":99.98},{"id":803042,"value":99.34},{"id":803053,"value":24.97},{"id":803063,"value":70.21},{"id":804023,"value":20.43},{"id":804032,"value":99.09},{"id":804043,"value":56.83},{"id":804052,"value":99.72},{"id":804063,"value":60.84},{"id":804073,"value":95.52},{"id":804082,"value":99.86},{"id":805013,"value":60.81},{"id":805022,"value":99.34},{"id":805033,"value":42.98},{"id":805043,"value":31.25},{"id":805053,"value":22.55},{"id":806013,"value":68.07},{"id":806023,"value":61.27},{"id":806032,"value":100.0},{"id":806043,"value":62.72},{"id":806052,"value":99.57},{"id":807012,"value":88.15},{"id":807023,"value":23.74},{"id":807032,"value":98.49},{"id":807043,"value":54.67},{"id":807053,"value":71.86},{"id":808012,"value":96.86},{"id":808022,"value":97.57},{"id":808032,"value":99.7},{"id":808042,"value":99.97},{"id":808053,"value":56.39},{"id":808063,"value":61.99},{"id":809013,"value":50.67},{"id":809022,"value":99.99},{"id":809033,"value":48.98},{"id":809043,"value":40.67},{"id":809053,"value":36.28},{"id":809063,"value":73.43},{"id":809072,"value":100.0},{"id":809082,"value":97.04},{"id":809092,"value":99.47},{"id":810032,"value":39.58},{"id":810043,"value":53.28},{"id":810053,"value":56.24},{"id":810062,"value":86.1},{"id":810073,"value":49.66},{"id":810082,"value":97.84},{"id":810092,"value":91.43},{"id":811032,"value":95.22},{"id":811043,"value":36.69},{"id":811052,"value":99.47},{"id":811063,"value":41.74},{"id":811072,"value":99.03},{"id":811082,"value":99.93},{"id":811092,"value":100.0},{"id":811102,"value":99.11},{"id":812013,"value":69.53},{"id":812023,"value":76.95},{"id":812033,"value":56.64},{"id":1001022,"value":100.0},{"id":1001032,"value":100.0},{"id":1001042,"value":71.69},{"id":1001052,"value":97.4},{"id":1001062,"value":94.1},{"id":1001072,"value":97.72},{"id":1001083,"value":55.27},{"id":1002022,"value":99.55},{"id":1002033,"value":96.52},{"id":1002043,"value":50.99},{"id":1002052,"value":100.0},{"id":1002062,"value":100.0},{"id":1002072,"value":100.0},{"id":1002082,"value":99.65},{"id":1002092,"value":99.88},{"id":1002102,"value":99.83},{"id":1002113,"value":46.93},{"id":1003012,"value":99.49},{"id":1003023,"value":57.13},{"id":1003032,"value":99.53},{"id":1003042,"value":95.65},{"id":1003052,"value":99.88},{"id":1004022,"value":98.47},{"id":1004032,"value":100.0},{"id":1004042,"value":100.0},{"id":1004052,"value":99.73},{"id":1004063,"value":100.0},{"id":1004072,"value":98.38},{"id":1004082,"value":99.98},{"id":1005022,"value":95.97},{"id":1005032,"value":100.0},{"id":1005042,"value":93.26},{"id":1005052,"value":84.27},{"id":1005062,"value":99.35},{"id":1005072,"value":82.58},{"id":1005082,"value":96.02},{"id":1005092,"value":94.06},{"id":1005102,"value":100.0},{"id":1006022,"value":100.0},{"id":1006032,"value":100.0},{"id":1006073,"value":58.72},{"id":1006082,"value":99.95},{"id":1006103,"value":50.05},{"id":1006113,"value":50.01},{"id":1007012,"value":98.21},{"id":1007023,"value":74.48},{"id":1007032,"value":98.89},{"id":1007043,"value":54.31},{"id":1007052,"value":100.0},{"id":1007062,"value":91.49},{"id":1007072,"value":99.17},{"id":1007082,"value":99.2},{"id":1008032,"value":97.04},{"id":1008042,"value":98.13},{"id":1008052,"value":100.0},{"id":1008063,"value":97.22},{"id":1008072,"value":99.57},{"id":1009013,"value":66.37},{"id":1009022,"value":95.26},{"id":1009032,"value":99.86},{"id":1009043,"value":53.26},{"id":1009052,"value":91.54},{"id":1009062,"value":99.02},{"id":1009072,"value":99.51},{"id":1009082,"value":93.71},{"id":1010012,"value":92.73},{"id":1010022,"value":100.0},{"id":1010032,"value":98.01},{"id":1010042,"value":99.15},{"id":1010052,"value":72.76},{"id":1010062,"value":100.0},{"id":1010072,"value":99.71},{"id":1010083,"value":98.31},{"id":1010093,"value":57.95},{"id":1010102,"value":95.23},{"id":1010113,"value":52.92},{"id":1011012,"value":99.3},{"id":1011022,"value":99.3},{"id":1011033,"value":50.99},{"id":1011043,"value":66.42},{"id":1011052,"value":99.11},{"id":1011062,"value":99.96},{"id":1012022,"value":100.0},{"id":1012032,"value":99.95},{"id":1012042,"value":83.48},{"id":1012053,"value":38.66},{"id":1012062,"value":99.95},{"id":1012072,"value":98.07},{"id":1012082,"value":100.0},{"id":1012092,"value":97.64},{"id":1012102,"value":100.0},{"id":1012113,"value":55.49},{"id":1012122,"value":96.08},{"id":1012132,"value":95.71},{"id":1012142,"value":95.97},{"id":1013023,"value":72.37},{"id":1013032,"value":100.0},{"id":1013042,"value":98.64},{"id":1013052,"value":100.0},{"id":1013062,"value":99.75},{"id":1014023,"value":79.47},{"id":1014032,"value":96.84},{"id":1014042,"value":96.55},{"id":1014052,"value":93.96},{"id":1014062,"value":92.58},{"id":1014072,"value":99.76},{"id":1014082,"value":98.8},{"id":1014093,"value":74.36},{"id":1014102,"value":97.33},{"id":1014113,"value":31.52},{"id":1015013,"value":85.05},{"id":1015022,"value":95.49},{"id":1015032,"value":99.76},{"id":1015042,"value":98.8},{"id":1015052,"value":91.6},{"id":1015062,"value":95.84},{"id":1015072,"value":91.79},{"id":1015082,"value":98.55},{"id":1015092,"value":99.86},{"id":1016022,"value":96.51},{"id":1016032,"value":99.99},{"id":1016042,"value":89.85},{"id":1016052,"value":91.17},{"id":1016062,"value":99.61},{"id":1016072,"value":99.14},{"id":1016082,"value":92.34},{"id":1016092,"value":97.95},{"id":1016103,"value":99.45},{"id":1016112,"value":88.19},{"id":1017012,"value":82.64},{"id":1017022,"value":89.52},{"id":1017032,"value":46.11},{"id":1017042,"value":69.61},{"id":1017052,"value":75.56},{"id":1017062,"value":85.94},{"id":1017072,"value":68.52},{"id":1017082,"value":84.76},{"id":1017093,"value":35.14},{"id":1017102,"value":52.96},{"id":1018012,"value":99.98},{"id":1018022,"value":99.72},{"id":1018032,"value":99.35},{"id":1018043,"value":99.85},{"id":1018052,"value":99.76},{"id":1018062,"value":98.43},{"id":1018073,"value":51.59},{"id":1019023,"value":77.92},{"id":1019032,"value":99.8},{"id":1019042,"value":100.0},{"id":1020043,"value":44.79},{"id":1020052,"value":99.7},{"id":1020062,"value":99.19},{"id":1020072,"value":99.97},{"id":1020083,"value":85.8},{"id":1020092,"value":100.0},{"id":1021022,"value":100.0},{"id":1021032,"value":100.0},{"id":1021043,"value":97.74},{"id":1021052,"value":100.0},{"id":1201022,"value":100.0},{"id":1201032,"value":100.0},{"id":1201042,"value":100.0},{"id":1201052,"value":100.0},{"id":1201063,"value":85.16},{"id":1201072,"value":99.97},{"id":1201082,"value":100.0},{"id":1201092,"value":100.0},{"id":1202012,"value":99.83},{"id":1202023,"value":64.08},{"id":1202033,"value":72.55},{"id":1202042,"value":100.0},{"id":1202052,"value":100.0},{"id":1202062,"value":100.0},{"id":1202072,"value":99.73},{"id":1203013,"value":67.32},{"id":1203022,"value":100.0},{"id":1203033,"value":30.91},{"id":1203043,"value":25.73},{"id":1203053,"value":45.16},{"id":1204012,"value":100.0},{"id":1204023,"value":51.76},{"id":1204032,"value":100.0},{"id":1204042,"value":100.0},{"id":1204052,"value":99.87},{"id":1204062,"value":95.95},{"id":1204073,"value":66.17},{"id":1205023,"value":72.02},{"id":1205033,"value":51.72},{"id":1205042,"value":97.86},{"id":1205052,"value":87.03},{"id":1205062,"value":99.92},{"id":1205072,"value":100.0},{"id":1205082,"value":96.24},{"id":1205092,"value":85.04},{"id":1205102,"value":70.09},{"id":1206012,"value":86.88},{"id":1206022,"value":96.1},{"id":1206032,"value":100.0},{"id":1206042,"value":99.93},{"id":1206052,"value":97.11},{"id":1206063,"value":79.0},{"id":1206072,"value":88.57},{"id":1206082,"value":99.11},{"id":1206092,"value":100.0},{"id":1206103,"value":75.71},{"id":1206113,"value":51.93},{"id":1206123,"value":82.5},{"id":1206132,"value":100.0},{"id":1206143,"value":73.98},{"id":1206152,"value":96.92},{"id":1206162,"value":100.0},{"id":1206172,"value":99.78},{"id":1207032,"value":99.99},{"id":1207042,"value":100.0},{"id":1207052,"value":99.58},{"id":1207062,"value":99.92},{"id":1207072,"value":97.45},{"id":1207082,"value":100.0},{"id":1207092,"value":100.0},{"id":1207102,"value":99.99},{"id":1207112,"value":99.99},{"id":1207122,"value":100.0},{"id":1208012,"value":100.0},{"id":1208022,"value":100.0},{"id":1208032,"value":100.0},{"id":1208043,"value":99.73},{"id":1208053,"value":50.25},{"id":1208062,"value":100.0},{"id":1208072,"value":100.0},{"id":1209013,"value":52.42},{"id":1209022,"value":98.49},{"id":1209033,"value":64.02},{"id":1209042,"value":100.0},{"id":1209052,"value":100.0},{"id":1209062,"value":100.0},{"id":1209073,"value":55.78},{"id":1209082,"value":98.74},{"id":1209092,"value":99.94},{"id":1210022,"value":98.88},{"id":1210032,"value":92.63},{"id":1210042,"value":99.03},{"id":1210052,"value":100.0},{"id":1210062,"value":95.3},{"id":1210073,"value":41.0},{"id":1210082,"value":99.94},{"id":1210092,"value":82.85},{"id":1210102,"value":99.99},{"id":1210113,"value":54.9},{"id":1210122,"value":100.0},{"id":1210133,"value":24.29},{"id":1210142,"value":99.97},{"id":1210152,"value":100.0},{"id":1210163,"value":46.46},{"id":1211023,"value":26.6},{"id":1211033,"value":96.75},{"id":1211042,"value":100.0},{"id":1211052,"value":98.89},{"id":1211062,"value":100.0},{"id":1211072,"value":95.97},{"id":1211082,"value":89.04},{"id":1211092,"value":100.0},{"id":1211102,"value":98.06},{"id":1211112,"value":100.0},{"id":1211123,"value":27.55},{"id":1211132,"value":100.0},{"id":1211142,"value":99.81},{"id":1212032,"value":100.0},{"id":1212042,"value":99.05},{"id":1212053,"value":44.53},{"id":1212062,"value":99.8},{"id":1212073,"value":67.78},{"id":1213023,"value":48.26},{"id":1213033,"value":41.25},{"id":1213043,"value":47.65},{"id":1213052,"value":100.0},{"id":1213062,"value":100.0},{"id":1213072,"value":100.0},{"id":1213082,"value":100.0},{"id":1213093,"value":58.07},{"id":1214012,"value":93.2},{"id":1214023,"value":99.98},{"id":1214033,"value":74.75},{"id":1214042,"value":100.0},{"id":1214053,"value":74.1},{"id":1214062,"value":84.07},{"id":1215032,"value":99.84},{"id":1215042,"value":88.4},{"id":1215052,"value":99.96},{"id":1215063,"value":65.24},{"id":1215072,"value":100.0},{"id":1215082,"value":100.0},{"id":1215092,"value":100.0},{"id":1216013,"value":52.8},{"id":1216022,"value":95.85},{"id":1216032,"value":100.0},{"id":1216042,"value":99.95},{"id":1216053,"value":65.37},{"id":1216063,"value":74.02},{"id":1216072,"value":100.0},{"id":1216082,"value":99.93},{"id":1216092,"value":100.0},{"id":1216103,"value":52.41},{"id":1216112,"value":99.88},{"id":1216122,"value":99.99},{"id":1216133,"value":75.46},{"id":1216143,"value":83.45},{"id":1216153,"value":81.16},{"id":1216162,"value":98.15},{"id":1217022,"value":99.71},{"id":1217032,"value":99.85},{"id":1217042,"value":82.95},{"id":1217052,"value":93.5},{"id":1218013,"value":57.17},{"id":1218022,"value":100.0},{"id":1218033,"value":75.32},{"id":1218042,"value":98.02},{"id":1218052,"value":98.9},{"id":1218062,"value":99.58},{"id":1218072,"value":100.0},{"id":1218082,"value":99.94},{"id":1218093,"value":57.2},{"id":1218102,"value":99.88},{"id":1219012,"value":100.0},{"id":1219022,"value":100.0},{"id":1219032,"value":99.94},{"id":1219043,"value":57.27},{"id":1219053,"value":68.91},{"id":1401013,"value":58.35},{"id":1401022,"value":100.0},{"id":1401032,"value":99.99},{"id":1401042,"value":99.72},{"id":1401052,"value":100.0},{"id":1401063,"value":53.41},{"id":1402022,"value":93.11},{"id":1402033,"value":54.76},{"id":1402042,"value":97.38},{"id":1402052,"value":80.03},{"id":1402062,"value":96.88},{"id":1402072,"value":96.65},{"id":1402082,"value":94.49},{"id":1402092,"value":89.64},{"id":1403032,"value":100.0},{"id":1403042,"value":99.33},{"id":1403052,"value":99.88},{"id":1403062,"value":94.96},{"id":1403072,"value":96.61},{"id":1403082,"value":99.13},{"id":1403092,"value":97.0},{"id":1403103,"value":56.72},{"id":1403112,"value":99.77},{"id":1403122,"value":99.99},{"id":1403132,"value":99.66},{"id":1403143,"value":42.37},{"id":1404022,"value":99.45},{"id":1404032,"value":100.0},{"id":1404043,"value":100.0},{"id":1404052,"value":100.0},{"id":1405032,"value":99.6},{"id":1405043,"value":52.38},{"id":1405052,"value":98.59},{"id":1405062,"value":100.0},{"id":1406012,"value":100.0},{"id":1406022,"value":100.0},{"id":1406032,"value":100.0},{"id":1406042,"value":100.0},{"id":1406053,"value":61.92},{"id":1406062,"value":99.9},{"id":1406073,"value":76.32},{"id":1406083,"value":55.42},{"id":1406092,"value":99.93},{"id":1406113,"value":60.91},{"id":1407012,"value":100.0},{"id":1407022,"value":98.12},{"id":1407032,"value":100.0},{"id":1407042,"value":99.47},{"id":1407053,"value":62.88},{"id":1407062,"value":99.97},{"id":1407072,"value":99.89},{"id":1408022,"value":99.78},{"id":1408032,"value":99.79},{"id":1408043,"value":72.93},{"id":1408052,"value":99.88},{"id":1409012,"value":99.44},{"id":1409022,"value":99.95},{"id":1409033,"value":64.88},{"id":1409042,"value":99.16},{"id":1409052,"value":98.42},{"id":1409063,"value":99.9},{"id":1410012,"value":99.92},{"id":1410023,"value":36.68},{"id":1410032,"value":100.0},{"id":1410042,"value":100.0},{"id":1410052,"value":99.61},{"id":1410062,"value":99.95},{"id":1411022,"value":96.62},{"id":1411032,"value":93.85},{"id":1411042,"value":88.56},{"id":1411052,"value":96.38},{"id":1411062,"value":93.57},{"id":1411073,"value":34.94},{"id":1411082,"value":81.52},{"id":1411092,"value":90.11},{"id":1411102,"value":99.44},{"id":1412043,"value":100.0},{"id":1412052,"value":93.35},{"id":1412062,"value":98.47},{"id":1412073,"value":80.54},{"id":1412082,"value":99.61},{"id":1412093,"value":55.52},{"id":1412103,"value":95.01},{"id":1412112,"value":99.16},{"id":1412123,"value":62.5},{"id":1412132,"value":99.49},{"id":1412142,"value":99.2},{"id":1413022,"value":77.61},{"id":1413032,"value":98.03},{"id":1413042,"value":87.87},{"id":1413052,"value":87.38},{"id":1413062,"value":96.34},{"id":1413072,"value":93.52},{"id":1413082,"value":91.6},{"id":1413092,"value":85.89},{"id":1413102,"value":99.53},{"id":1414022,"value":99.45},{"id":1414032,"value":96.44},{"id":1414043,"value":71.79},{"id":1414052,"value":99.61},{"id":1414063,"value":46.11},{"id":1415012,"value":97.86},{"id":1415022,"value":97.23},{"id":1415032,"value":98.27},{"id":1415042,"value":98.84},{"id":1415052,"value":99.88},{"id":1415062,"value":99.97},{"id":1415072,"value":99.64},{"id":1415083,"value":55.99},{"id":1415092,"value":99.78},{"id":1415102,"value":99.97},{"id":1415112,"value":97.77},{"id":1416022,"value":83.08},{"id":1416032,"value":99.73},{"id":1416043,"value":5.97},{"id":1416052,"value":94.84},{"id":1416062,"value":95.97},{"id":1416072,"value":81.63},{"id":1416082,"value":74.62},{"id":1416092,"value":88.67},{"id":1416102,"value":61.41},{"id":1416112,"value":87.11},{"id":1417032,"value":99.36},{"id":1417043,"value":61.44},{"id":1417052,"value":98.96},{"id":1417062,"value":99.87},{"id":1417072,"value":99.79},{"id":1417082,"value":99.66},{"id":1418013,"value":75.96},{"id":1418023,"value":42.14},{"id":1418032,"value":100.0},{"id":1418043,"value":57.13},{"id":1418052,"value":100.0},{"id":1418063,"value":72.7},{"id":1419012,"value":99.79},{"id":1419023,"value":99.1},{"id":1419032,"value":99.99},{"id":1419042,"value":99.88},{"id":1419053,"value":38.26},{"id":1419063,"value":38.99},{"id":1419072,"value":100.0},{"id":1419082,"value":95.41},{"id":1419092,"value":92.73},{"id":1419102,"value":99.96},{"id":1419112,"value":97.46},{"id":1419122,"value":98.61},{"id":1419132,"value":99.56},{"id":1419142,"value":97.55},{"id":1419153,"value":47.99},{"id":1420032,"value":97.35},{"id":1420043,"value":99.09},{"id":1420052,"value":98.81},{"id":1420062,"value":98.59},{"id":1420072,"value":99.66},{"id":1420083,"value":98.68},{"id":1420092,"value":99.99},{"id":1420102,"value":89.65},{"id":1420113,"value":99.79},{"id":1420122,"value":100.0},{"id":1421033,"value":66.92},{"id":1421042,"value":100.0},{"id":1421052,"value":100.0},{"id":1421062,"value":100.0},{"id":1422023,"value":72.66},{"id":1422032,"value":98.58},{"id":1422042,"value":99.4},{"id":1422052,"value":98.19},{"id":1422062,"value":98.5},{"id":1422072,"value":99.96},{"id":1423012,"value":100.0},{"id":1423022,"value":99.4},{"id":1423032,"value":100.0},{"id":1423042,"value":98.86},{"id":1423052,"value":100.0},{"id":1423063,"value":65.51},{"id":1423072,"value":100.0},{"id":1423082,"value":98.79},{"id":1424012,"value":92.93},{"id":1424022,"value":99.99},{"id":1424032,"value":96.79},{"id":1424043,"value":30.7},{"id":1424052,"value":98.86},{"id":1424062,"value":99.42},{"id":1424072,"value":89.89},{"id":1425022,"value":100.0},{"id":1425033,"value":65.15},{"id":1425042,"value":98.95},{"id":1425052,"value":99.9},{"id":1425063,"value":99.27},{"id":1425072,"value":100.0},{"id":1425082,"value":95.86},{"id":1425092,"value":99.86},{"id":1425103,"value":71.55},{"id":1425112,"value":98.91},{"id":1425122,"value":99.88},{"id":1425132,"value":99.9},{"id":1426012,"value":99.59},{"id":1426022,"value":100.0},{"id":1426032,"value":99.37},{"id":1426042,"value":99.97},{"id":1426053,"value":72.18},{"id":1426062,"value":100.0},{"id":1426072,"value":99.56},{"id":1426082,"value":99.72},{"id":1426092,"value":97.37},{"id":1426102,"value":99.98},{"id":1426112,"value":83.72},{"id":1426122,"value":99.9},{"id":1426132,"value":100.0},{"id":1427022,"value":99.42},{"id":1427032,"value":99.72},{"id":1427042,"value":85.52},{"id":1427052,"value":88.7},{"id":1427062,"value":95.96},{"id":1427072,"value":95.67},{"id":1428022,"value":99.64},{"id":1428032,"value":99.85},{"id":1428042,"value":96.76},{"id":1428052,"value":97.26},{"id":1428062,"value":99.96},{"id":1428072,"value":99.59},{"id":1428082,"value":99.67},{"id":1429022,"value":95.62},{"id":1429032,"value":96.39},{"id":1429042,"value":99.68},{"id":1429053,"value":63.22},{"id":1429062,"value":95.52},{"id":1429072,"value":95.6},{"id":1429082,"value":99.21},{"id":1429092,"value":76.16},{"id":1430012,"value":99.99},{"id":1430023,"value":99.96},{"id":1430032,"value":99.85},{"id":1430042,"value":100.0},{"id":1430053,"value":39.92},{"id":1432013,"value":72.05},{"id":1432022,"value":100.0},{"id":1432032,"value":99.33},{"id":1432042,"value":100.0},{"id":1432053,"value":38.6},{"id":1432063,"value":77.59},{"id":1432072,"value":100.0},{"id":1433022,"value":99.98},{"id":1433032,"value":99.74},{"id":1433042,"value":99.64},{"id":1433053,"value":57.42},{"id":1433062,"value":99.8},{"id":1433072,"value":96.87},{"id":1433082,"value":96.22},{"id":1433092,"value":99.92},{"id":1434052,"value":100.0},{"id":1434063,"value":99.95},{"id":1434072,"value":100.0},{"id":1434082,"value":97.27},{"id":1434093,"value":62.18},{"id":1434102,"value":97.67},{"id":1434113,"value":56.53},{"id":1434123,"value":45.15},{"id":1435012,"value":99.84},{"id":1435022,"value":97.1},{"id":1435032,"value":97.9},{"id":1435042,"value":99.34},{"id":1435053,"value":45.79},{"id":1435062,"value":89.88},{"id":1436012,"value":100.0},{"id":1436022,"value":99.88},{"id":1436032,"value":99.22},{"id":1436042,"value":99.71},{"id":1436053,"value":55.5},{"id":1437013,"value":64.37},{"id":1437022,"value":99.54},{"id":1437033,"value":97.17},{"id":1437042,"value":97.73},{"id":1437052,"value":94.1},{"id":1437063,"value":55.58},{"id":1438023,"value":42.98},{"id":1438032,"value":98.31},{"id":1438042,"value":98.78},{"id":1438053,"value":89.63},{"id":1601022,"value":95.76},{"id":1601033,"value":65.24},{"id":1601043,"value":59.77},{"id":1601052,"value":99.92},{"id":1601062,"value":100.0},{"id":1602013,"value":47.98},{"id":1602022,"value":99.69},{"id":1602033,"value":58.79},{"id":1602043,"value":56.89},{"id":1603022,"value":99.88},{"id":1603032,"value":100.0},{"id":1603042,"value":100.0},{"id":1603052,"value":100.0},{"id":1603062,"value":100.0},{"id":1604013,"value":65.66},{"id":1604023,"value":55.88},{"id":1604032,"value":98.44},{"id":1604043,"value":70.06},{"id":1605013,"value":57.7},{"id":1605023,"value":36.41},{"id":1605032,"value":99.94},{"id":1605042,"value":100.0},{"id":1605053,"value":29.59},{"id":1606012,"value":99.77},{"id":1606023,"value":50.04},{"id":1606032,"value":99.38},{"id":1606042,"value":99.44},{"id":1606052,"value":100.0},{"id":1607013,"value":63.91},{"id":1607022,"value":99.33},{"id":1607033,"value":74.07},{"id":1607042,"value":99.79},{"id":1607053,"value":41.08},{"id":1607063,"value":60.15},{"id":1607073,"value":49.64},{"id":1607082,"value":99.94},{"id":1607092,"value":96.11},{"id":1608013,"value":64.88},{"id":1608023,"value":59.95},{"id":1608033,"value":54.33},{"id":1608043,"value":45.52},{"id":1608052,"value":80.57},{"id":1608062,"value":90.68},{"id":1608072,"value":98.63},{"id":1609012,"value":100.0},{"id":1609022,"value":100.0},{"id":1609032,"value":100.0},{"id":1609042,"value":100.0},{"id":1609052,"value":100.0},{"id":1609062,"value":99.56},{"id":1609073,"value":63.81},{"id":1609083,"value":80.86},{"id":1609092,"value":99.99},{"id":1609103,"value":70.9},{"id":1609112,"value":99.89},{"id":1609123,"value":100.0},{"id":1609132,"value":100.0},{"id":1610013,"value":75.12},{"id":1610023,"value":63.73},{"id":1610032,"value":99.99},{"id":1610043,"value":40.88},{"id":1611012,"value":99.86},{"id":1611022,"value":99.41},{"id":1611033,"value":28.35},{"id":1611043,"value":67.73},{"id":1611053,"value":41.49},{"id":1611063,"value":73.5},{"id":1611073,"value":43.89},{"id":1801032,"value":84.26},{"id":1801052,"value":66.43},{"id":1801083,"value":38.99},{"id":1802013,"value":65.95},{"id":1802022,"value":99.24},{"id":1802032,"value":97.52},{"id":1802042,"value":100.0},{"id":1802052,"value":100.0},{"id":1802062,"value":98.96},{"id":1803023,"value":74.61},{"id":1803032,"value":99.96},{"id":1803042,"value":100.0},{"id":1803052,"value":100.0},{"id":1803063,"value":65.46},{"id":1803072,"value":99.82},{"id":1804032,"value":99.94},{"id":1804042,"value":90.86},{"id":1804052,"value":75.92},{"id":1804062,"value":97.84},{"id":1804073,"value":61.29},{"id":1804082,"value":99.83},{"id":1804092,"value":85.6},{"id":1804102,"value":92.35},{"id":1804112,"value":78.84},{"id":1805022,"value":100.0},{"id":1805032,"value":100.0},{"id":1805042,"value":100.0},{"id":1805053,"value":72.03},{"id":1805062,"value":72.34},{"id":1805072,"value":100.0},{"id":1805082,"value":100.0},{"id":1805092,"value":99.96},{"id":1805112,"value":99.9},{"id":1806012,"value":99.72},{"id":1806023,"value":65.08},{"id":1806032,"value":93.47},{"id":1806042,"value":100.0},{"id":1806052,"value":99.9},{"id":1806062,"value":97.72},{"id":1807012,"value":99.66},{"id":1807023,"value":89.04},{"id":1807033,"value":81.42},{"id":1807043,"value":50.83},{"id":1807052,"value":100.0},{"id":1807062,"value":100.0},{"id":1807072,"value":100.0},{"id":1807083,"value":68.32},{"id":1807092,"value":100.0},{"id":1807102,"value":96.58},{"id":1808022,"value":27.33},{"id":1808032,"value":47.38},{"id":1808042,"value":81.2},{"id":1808053,"value":45.48},{"id":1809023,"value":79.66},{"id":1809032,"value":96.92},{"id":1809042,"value":99.28},{"id":1809053,"value":75.9},{"id":1809063,"value":71.16},{"id":1809072,"value":96.5},{"id":1809082,"value":98.59},{"id":1810022,"value":99.52},{"id":1810032,"value":100.0},{"id":1810042,"value":100.0},{"id":1810052,"value":99.61},{"id":1810062,"value":99.63},{"id":1810072,"value":99.56},{"id":1811022,"value":100.0},{"id":1811032,"value":100.0},{"id":1811042,"value":100.0},{"id":1811052,"value":99.96},{"id":1811062,"value":97.89},{"id":1811073,"value":76.07},{"id":1811083,"value":80.55},{"id":1811092,"value":82.17},{"id":1811102,"value":91.37},{"id":1812012,"value":87.36},{"id":1812022,"value":49.82},{"id":1812032,"value":91.09},{"id":1812042,"value":81.91},{"id":1812053,"value":36.05},{"id":1812063,"value":31.24},{"id":1812073,"value":82.19},{"id":1813012,"value":94.44},{"id":1813023,"value":96.9},{"id":1813032,"value":83.0},{"id":1813042,"value":99.26},{"id":1813052,"value":88.67},{"id":1813062,"value":91.74},{"id":1813072,"value":98.26},{"id":1813082,"value":90.19},{"id":1813092,"value":92.03},{"id":1813102,"value":95.32},{"id":1814022,"value":58.69},{"id":1814032,"value":98.65},{"id":1814042,"value":99.9},{"id":1814053,"value":66.38},{"id":1814062,"value":99.97},{"id":1814073,"value":74.83},{"id":1814082,"value":99.11},{"id":1814092,"value":86.88},{"id":1815012,"value":99.81},{"id":1815022,"value":97.89},{"id":1815033,"value":39.03},{"id":1815043,"value":75.15},{"id":1815052,"value":100.0},{"id":1816023,"value":82.47},{"id":1816033,"value":72.31},{"id":1816042,"value":82.43},{"id":1816052,"value":99.58},{"id":1816063,"value":73.72},{"id":1816072,"value":97.39},{"id":1816082,"value":93.09},{"id":1816092,"value":88.32},{"id":1816102,"value":100.0},{"id":1816113,"value":75.88},{"id":1816122,"value":98.51},{"id":1816132,"value":98.93},{"id":1816143,"value":69.64},{"id":1817022,"value":100.0},{"id":1817032,"value":99.66},{"id":1817042,"value":99.32},{"id":1817052,"value":87.54},{"id":1817062,"value":93.76},{"id":1817073,"value":42.31},{"id":1817082,"value":83.4},{"id":1818022,"value":97.0},{"id":1818032,"value":98.44},{"id":1818042,"value":98.69},{"id":1818053,"value":59.02},{"id":1818062,"value":99.51},{"id":1819012,"value":99.67},{"id":1819022,"value":100.0},{"id":1819032,"value":100.0},{"id":1819043,"value":56.86},{"id":1819052,"value":100.0},{"id":1820013,"value":82.68},{"id":1820022,"value":98.3},{"id":1820032,"value":77.22},{"id":1820043,"value":43.42},{"id":1821012,"value":97.66},{"id":1821022,"value":92.11},{"id":1821033,"value":34.34},{"id":1821042,"value":97.84},{"id":1821052,"value":87.37},{"id":2001022,"value":89.89},{"id":2001032,"value":66.41},{"id":2001043,"value":35.8},{"id":2001052,"value":71.7},{"id":2001062,"value":42.27},{"id":2001072,"value":40.94},{"id":2002013,"value":64.8},{"id":2002023,"value":8.44},{"id":2002032,"value":84.09},{"id":2002042,"value":65.55},{"id":2002052,"value":54.57},{"id":2002063,"value":48.25},{"id":2002073,"value":62.4},{"id":2002082,"value":74.01},{"id":2002093,"value":73.42},{"id":2002103,"value":7.37},{"id":2002112,"value":92.62},{"id":2002123,"value":69.61},{"id":2002133,"value":40.02},{"id":2002143,"value":59.96},{"id":2002152,"value":79.11},{"id":2003032,"value":87.83},{"id":2003042,"value":64.44},{"id":2003052,"value":94.13},{"id":2003062,"value":79.95},{"id":2003072,"value":96.3},{"id":2003082,"value":85.45},{"id":2004022,"value":86.61},{"id":2004032,"value":77.31},{"id":2004043,"value":35.5},{"id":2004053,"value":42.19},{"id":2004062,"value":95.89},{"id":2005022,"value":95.07},{"id":2005032,"value":91.72},{"id":2005042,"value":81.43},{"id":2005052,"value":68.2},{"id":2005062,"value":87.13},{"id":2005073,"value":27.82},{"id":2005082,"value":83.74},{"id":2005092,"value":94.34},{"id":2006022,"value":95.67},{"id":2006032,"value":95.47},{"id":2006042,"value":100.0},{"id":2006053,"value":74.36},{"id":2006062,"value":94.42},{"id":2007013,"value":39.05},{"id":2007022,"value":90.9},{"id":2007032,"value":95.78},{"id":2007043,"value":51.0},{"id":2007052,"value":74.53},{"id":2007062,"value":96.31},{"id":2007072,"value":92.3},{"id":2007082,"value":79.14},{"id":2007092,"value":99.73},{"id":2008013,"value":80.62},{"id":2008022,"value":97.52},{"id":2008032,"value":95.72},{"id":2008043,"value":34.16},{"id":2008052,"value":98.86},{"id":2008063,"value":34.47},{"id":2008072,"value":84.46},{"id":2009022,"value":97.11},{"id":2009032,"value":89.25},{"id":2009042,"value":99.11},{"id":2009052,"value":97.83},{"id":2010023,"value":47.61},{"id":2010032,"value":94.75},{"id":2010042,"value":92.92},{"id":2010052,"value":99.99},{"id":2010062,"value":96.38},{"id":2010072,"value":94.36},{"id":2010082,"value":99.9},{"id":2010092,"value":99.81},{"id":2011013,"value":47.98},{"id":2011022,"value":98.39},{"id":2011032,"value":100.0},{"id":2011043,"value":21.66},{"id":2011052,"value":99.37},{"id":2011062,"value":89.3},{"id":2011072,"value":98.96},{"id":2011083,"value":50.4},{"id":2011093,"value":67.06},{"id":2011102,"value":97.8},{"id":2012012,"value":100.0},{"id":2012022,"value":98.86},{"id":2012032,"value":100.0},{"id":2012042,"value":99.24},{"id":2012052,"value":99.33},{"id":2012062,"value":99.66},{"id":2012072,"value":98.42},{"id":2012082,"value":99.15},{"id":2012092,"value":99.43},{"id":2013023,"value":39.03},{"id":2013033,"value":54.56},{"id":2013042,"value":99.98},{"id":2013052,"value":100.0},{"id":2013062,"value":99.59},{"id":2013072,"value":100.0},{"id":2013082,"value":99.84},{"id":2013093,"value":89.13},{"id":2013102,"value":100.0},{"id":2014022,"value":100.0},{"id":2014032,"value":94.43},{"id":2014042,"value":99.98},{"id":2014052,"value":92.13},{"id":2201012,"value":86.24},{"id":2201023,"value":43.1},{"id":2201032,"value":92.88},{"id":2201042,"value":100.0},{"id":2201052,"value":37.92},{"id":2201063,"value":51.6},{"id":2201072,"value":95.31},{"id":2201082,"value":76.88},{"id":2201092,"value":99.65},{"id":2201102,"value":88.71},{"id":2202023,"value":45.11},{"id":2202032,"value":94.23},{"id":2202043,"value":41.11},{"id":2202052,"value":86.24},{"id":2203023,"value":30.95},{"id":2203032,"value":91.35},{"id":2203043,"value":61.74},{"id":2203052,"value":80.47},{"id":2203062,"value":68.55},{"id":2203072,"value":82.82},{"id":2204022,"value":100.0},{"id":2204032,"value":99.91},{"id":2204042,"value":99.86},{"id":2204052,"value":99.99},{"id":2204062,"value":99.63},{"id":2204072,"value":97.3},{"id":2204082,"value":98.73},{"id":2205012,"value":99.25},{"id":2205023,"value":73.61},{"id":2205032,"value":95.7},{"id":2205042,"value":95.62},{"id":2205052,"value":92.16},{"id":2205062,"value":99.0},{"id":2205072,"value":99.43},{"id":2205083,"value":80.96},{"id":2206022,"value":90.61},{"id":2206032,"value":94.85},{"id":2206042,"value":98.9},{"id":2206052,"value":88.43},{"id":2206062,"value":79.76},{"id":2206072,"value":88.96},{"id":2206082,"value":68.61},{"id":2207022,"value":100.0},{"id":2207032,"value":99.77},{"id":2207043,"value":42.0},{"id":2207052,"value":100.0},{"id":2207062,"value":100.0},{"id":2208032,"value":69.87},{"id":2208042,"value":98.84},{"id":2208052,"value":84.56},{"id":2209032,"value":98.21},{"id":2209042,"value":99.98},{"id":2209062,"value":100.0},{"id":2209073,"value":49.72},{"id":2209082,"value":99.32},{"id":2210023,"value":61.32},{"id":2210032,"value":89.57},{"id":2210042,"value":99.79},{"id":2210052,"value":100.0},{"id":2211023,"value":0.0},{"id":2211043,"value":45.06},{"id":2211052,"value":94.02},{"id":2211062,"value":86.45},{"id":2211072,"value":96.67},{"id":2212022,"value":100.0},{"id":2212032,"value":99.58},{"id":2212042,"value":99.77},{"id":2212053,"value":62.72},{"id":2212062,"value":99.99},{"id":2212072,"value":100.0},{"id":2212082,"value":99.34},{"id":2212092,"value":87.27},{"id":2212102,"value":99.18},{"id":2213013,"value":3.15},{"id":2213042,"value":90.39},{"id":2213052,"value":85.46},{"id":2213062,"value":73.35},{"id":2213072,"value":93.66},{"id":2213082,"value":85.84},{"id":2213093,"value":34.49},{"id":2213102,"value":90.73},{"id":2213112,"value":98.55},{"id":2213122,"value":93.87},{"id":2213132,"value":81.95},{"id":2214023,"value":68.65},{"id":2214032,"value":99.62},{"id":2214043,"value":56.31},{"id":2214052,"value":100.0},{"id":2214062,"value":96.12},{"id":2215042,"value":97.36},{"id":2215052,"value":95.68},{"id":2215062,"value":89.68},{"id":2215072,"value":99.99},{"id":2215082,"value":98.64},{"id":2215092,"value":97.58},{"id":2215102,"value":98.31},{"id":2216013,"value":57.62},{"id":2216022,"value":94.89},{"id":2216032,"value":91.08},{"id":2216042,"value":88.44},{"id":2216053,"value":61.26},{"id":2401042,"value":99.87},{"id":2401052,"value":100.0},{"id":2401062,"value":100.0},{"id":2401073,"value":55.2},{"id":2402022,"value":54.87},{"id":2402032,"value":100.0},{"id":2402043,"value":23.02},{"id":2402052,"value":99.36},{"id":2402062,"value":99.48},{"id":2402072,"value":99.78},{"id":2402082,"value":99.38},{"id":2402093,"value":60.41},{"id":2402102,"value":99.94},{"id":2403042,"value":98.87},{"id":2403052,"value":99.72},{"id":2403062,"value":100.0},{"id":2403072,"value":100.0},{"id":2403082,"value":100.0},{"id":2403092,"value":98.89},{"id":2403103,"value":49.96},{"id":2403113,"value":73.19},{"id":2403122,"value":100.0},{"id":2404013,"value":31.47},{"id":2404022,"value":99.79},{"id":2404032,"value":100.0},{"id":2404042,"value":99.97},{"id":2404052,"value":99.96},{"id":2404063,"value":32.59},{"id":2404072,"value":99.9},{"id":2404082,"value":99.97},{"id":2404092,"value":99.76},{"id":2404102,"value":99.98},{"id":2404112,"value":100.0},{"id":2404123,"value":99.88},{"id":2404132,"value":99.96},{"id":2404142,"value":99.52},{"id":2404152,"value":99.99},{"id":2404162,"value":100.0},{"id":2405032,"value":100.0},{"id":2405042,"value":100.0},{"id":2405052,"value":99.98},{"id":2405063,"value":75.19},{"id":2405073,"value":71.73},{"id":2405082,"value":99.95},{"id":2406013,"value":44.19},{"id":2406023,"value":34.85},{"id":2406032,"value":99.79},{"id":2406042,"value":99.97},{"id":2406052,"value":100.0},{"id":2406062,"value":100.0},{"id":2406072,"value":100.0},{"id":2406082,"value":99.56},{"id":2406092,"value":100.0},{"id":2407022,"value":100.0},{"id":2407032,"value":88.28},{"id":2407042,"value":92.77},{"id":2407052,"value":87.83},{"id":2407062,"value":92.07},{"id":2407072,"value":74.3},{"id":2407083,"value":52.52},{"id":2408042,"value":100.0},{"id":2408052,"value":97.96},{"id":2409023,"value":74.58},{"id":2409032,"value":99.82},{"id":2409042,"value":99.15},{"id":2409053,"value":38.83},{"id":2410012,"value":100.0},{"id":2410022,"value":100.0},{"id":2410032,"value":100.0},{"id":2410042,"value":100.0},{"id":2410053,"value":59.9},{"id":2410062,"value":100.0},{"id":2411022,"value":100.0},{"id":2411033,"value":58.83},{"id":2411042,"value":98.12},{"id":2411053,"value":61.07},{"id":2411062,"value":100.0},{"id":2411072,"value":100.0},{"id":2411082,"value":100.0},{"id":2412013,"value":37.14},{"id":2412022,"value":100.0},{"id":2412032,"value":100.0},{"id":2412042,"value":100.0},{"id":2412052,"value":100.0},{"id":2413052,"value":100.0},{"id":2413062,"value":99.83},{"id":2413072,"value":100.0},{"id":2413082,"value":99.88},{"id":2413092,"value":99.99},{"id":2414042,"value":100.0},{"id":2414052,"value":100.0},{"id":2415052,"value":100.0},{"id":2415062,"value":99.99},{"id":2415072,"value":98.01},{"id":2415082,"value":100.0},{"id":2415092,"value":100.0},{"id":2416032,"value":100.0},{"id":2416042,"value":100.0},{"id":2416053,"value":63.16},{"id":2416063,"value":56.51},{"id":2416073,"value":75.34},{"id":2416083,"value":52.12},{"id":2416093,"value":99.95},{"id":2416102,"value":100.0},{"id":2417022,"value":99.46},{"id":2417032,"value":100.0},{"id":2417042,"value":99.79},{"id":2417052,"value":100.0},{"id":2417062,"value":99.99},{"id":2417072,"value":100.0},{"id":2417082,"value":99.98},{"id":2417092,"value":100.0},{"id":2417102,"value":100.0},{"id":2417112,"value":99.92},{"id":2417122,"value":100.0},{"id":2417132,"value":100.0},{"id":2417142,"value":100.0},{"id":2417152,"value":100.0},{"id":2601013,"value":69.39},{"id":2601022,"value":100.0},{"id":2601033,"value":100.0},{"id":2601043,"value":100.0},{"id":2601052,"value":100.0},{"id":2601063,"value":81.44},{"id":2601072,"value":100.0},{"id":2601083,"value":99.79},{"id":2602012,"value":99.2},{"id":2602023,"value":57.8},{"id":2602033,"value":65.64},{"id":2602042,"value":99.92},{"id":2602052,"value":100.0},{"id":2602063,"value":45.77},{"id":2602072,"value":100.0},{"id":2602082,"value":99.92},{"id":2602093,"value":99.15},{"id":2603012,"value":97.32},{"id":2603022,"value":100.0},{"id":2603033,"value":78.27},{"id":2603043,"value":99.44},{"id":2603053,"value":74.39},{"id":2604012,"value":95.69},{"id":2604023,"value":75.73},{"id":2604033,"value":65.28},{"id":2604043,"value":71.55},{"id":2604053,"value":76.47},{"id":2604062,"value":99.9},{"id":2604073,"value":77.65},{"id":2604083,"value":96.65},{"id":2604092,"value":93.84},{"id":2604102,"value":99.36},{"id":2604112,"value":86.85},{"id":2604123,"value":99.45},{"id":2604133,"value":99.78},{"id":2604143,"value":98.71},{"id":2604153,"value":93.98},{"id":2604162,"value":92.56},{"id":2604172,"value":99.98},{"id":2604182,"value":97.29},{"id":2604192,"value":99.23},{"id":2605012,"value":93.95},{"id":2605022,"value":99.4},{"id":2605033,"value":56.73},{"id":2605043,"value":99.89},{"id":2605052,"value":99.98},{"id":2605062,"value":99.61},{"id":2605072,"value":99.9},{"id":2605083,"value":75.16},{"id":2606012,"value":74.41},{"id":2606023,"value":69.73},{"id":2606032,"value":99.48},{"id":2606043,"value":45.07},{"id":2606053,"value":61.22},{"id":2606062,"value":89.43},{"id":2606072,"value":70.44},{"id":2606082,"value":90.34},{"id":2607022,"value":99.72},{"id":2607032,"value":100.0},{"id":2607043,"value":55.82},{"id":2607053,"value":48.98},{"id":2607062,"value":98.57},{"id":2608013,"value":90.46},{"id":2608022,"value":96.83},{"id":2608032,"value":97.06},{"id":2608043,"value":57.8},{"id":2608052,"value":99.52},{"id":2609022,"value":100.0},{"id":2609033,"value":100.0},{"id":2609043,"value":58.43},{"id":2609052,"value":99.98},{"id":2609062,"value":100.0},{"id":2609072,"value":96.69},{"id":2609082,"value":99.68},{"id":2609093,"value":49.0},{"id":2610022,"value":99.83},{"id":2610032,"value":100.0},{"id":2610042,"value":99.98},{"id":2610053,"value":18.82},{"id":2611022,"value":84.99},{"id":2611032,"value":98.68},{"id":2611042,"value":99.18},{"id":2611053,"value":48.34},{"id":2612012,"value":99.89},{"id":2612022,"value":99.37},{"id":2612033,"value":99.89},{"id":2612043,"value":72.66},{"id":2612053,"value":54.9},{"id":2612062,"value":100.0},{"id":2612073,"value":53.04},{"id":2612083,"value":96.21},{"id":2613012,"value":99.69},{"id":2613022,"value":99.98},{"id":2613032,"value":100.0},{"id":2613042,"value":99.87},{"id":2613052,"value":98.16},{"id":2613063,"value":54.28},{"id":2801032,"value":93.37},{"id":2801043,"value":74.46},{"id":2801052,"value":82.25},{"id":2801063,"value":55.45},{"id":2802022,"value":94.23},{"id":2802033,"value":26.35},{"id":2802042,"value":89.18},{"id":2802053,"value":67.74},{"id":2802062,"value":96.26},{"id":2802072,"value":99.25},{"id":2803022,"value":85.82},{"id":2803032,"value":99.04},{"id":2803043,"value":68.6},{"id":2803052,"value":96.59},{"id":2803062,"value":95.68},{"id":2804012,"value":99.9},{"id":2804022,"value":93.71},{"id":2804032,"value":99.77},{"id":2804042,"value":100.0},{"id":2804052,"value":97.79},{"id":2804063,"value":86.94},{"id":2804073,"value":69.13},{"id":2804082,"value":99.05},{"id":2804093,"value":77.93},{"id":2805022,"value":97.09},{"id":2805032,"value":87.81},{"id":2805042,"value":95.58},{"id":2805052,"value":90.11},{"id":2806042,"value":95.01},{"id":2806052,"value":99.52},{"id":2806062,"value":82.94},{"id":2806083,"value":72.47},{"id":2806102,"value":96.32},{"id":2807032,"value":81.58},{"id":2807043,"value":38.15},{"id":2807052,"value":81.27},{"id":2807063,"value":47.56},{"id":2807073,"value":66.54},{"id":2808022,"value":96.59},{"id":2808032,"value":99.46},{"id":2808043,"value":77.11},{"id":2808053,"value":57.63},{"id":2808062,"value":98.9},{"id":2809022,"value":97.18},{"id":2809032,"value":84.77},{"id":2809042,"value":96.46},{"id":2809053,"value":43.9},{"id":2810023,"value":50.36},{"id":2810032,"value":97.55},{"id":2810042,"value":96.03},{"id":2810052,"value":99.08},{"id":2811012,"value":87.81},{"id":2811022,"value":71.87},{"id":2811032,"value":82.0},{"id":2811043,"value":64.35},{"id":2812022,"value":92.36},{"id":2812032,"value":93.55},{"id":2812042,"value":89.55},{"id":2812052,"value":91.55},{"id":2813032,"value":93.36},{"id":2813043,"value":46.52},{"id":2813052,"value":92.52},{"id":2813062,"value":98.51},{"id":2814013,"value":70.61},{"id":2814023,"value":60.66},{"id":2814033,"value":66.18},{"id":2814042,"value":70.89},{"id":2814052,"value":99.69},{"id":2814063,"value":68.33},{"id":2814072,"value":90.45},{"id":2814082,"value":91.17},{"id":2814093,"value":69.72},{"id":2814102,"value":86.39},{"id":2814112,"value":96.03},{"id":2814122,"value":96.44},{"id":2815022,"value":79.95},{"id":2815032,"value":88.75},{"id":2815042,"value":94.86},{"id":2815052,"value":85.01},{"id":2815063,"value":49.95},{"id":2815073,"value":45.39},{"id":2815083,"value":56.05},{"id":2815092,"value":87.03},{"id":2816013,"value":81.26},{"id":2816023,"value":52.09},{"id":2816033,"value":56.08},{"id":2816043,"value":57.36},{"id":2817022,"value":97.72},{"id":2817032,"value":99.76},{"id":2817043,"value":57.87},{"id":2817052,"value":96.31},{"id":2817062,"value":99.45},{"id":2817072,"value":96.22},{"id":2817083,"value":99.3},{"id":2818012,"value":80.79},{"id":2818022,"value":86.17},{"id":2818033,"value":42.09},{"id":2819012,"value":70.97},{"id":2819022,"value":51.69},{"id":2819033,"value":30.92},{"id":3001023,"value":98.51},{"id":3001032,"value":99.49},{"id":3001043,"value":57.71},{"id":3001053,"value":45.31},{"id":3002022,"value":99.54},{"id":3002032,"value":100.0},{"id":3002043,"value":31.19},{"id":3002052,"value":99.82},{"id":3002062,"value":99.33},{"id":3002073,"value":42.1},{"id":3002083,"value":71.61},{"id":3003023,"value":60.27},{"id":3003032,"value":82.97},{"id":3003042,"value":99.35},{"id":3003053,"value":60.01},{"id":3003062,"value":98.93},{"id":3003072,"value":99.99},{"id":3003082,"value":98.82},{"id":3003093,"value":51.05},{"id":3003103,"value":38.14},{"id":3004013,"value":65.01},{"id":3004023,"value":47.25},{"id":3004033,"value":59.34},{"id":3004042,"value":100.0},{"id":3004052,"value":99.78},{"id":3004063,"value":59.35},{"id":3004073,"value":65.94},{"id":3005012,"value":94.68},{"id":3005023,"value":28.9},{"id":3005032,"value":92.21},{"id":3005043,"value":73.77},{"id":3005053,"value":79.04},{"id":3006013,"value":81.6},{"id":3006023,"value":46.74},{"id":3006032,"value":100.0},{"id":3006043,"value":81.61},{"id":3007012,"value":85.84},{"id":3007022,"value":89.07},{"id":3007032,"value":96.02},{"id":3007042,"value":95.52},{"id":3007053,"value":99.54},{"id":3007062,"value":78.92},{"id":3007072,"value":97.66},{"id":3007083,"value":97.25},{"id":3007093,"value":79.35},{"id":3007102,"value":86.87},{"id":3007112,"value":100.0},{"id":3008012,"value":100.0},{"id":3008022,"value":100.0},{"id":3008033,"value":55.5},{"id":3008042,"value":99.92},{"id":3008052,"value":99.35},{"id":3008062,"value":99.49},{"id":3008072,"value":99.64},{"id":3009022,"value":99.88},{"id":3009032,"value":100.0},{"id":3009043,"value":83.11},{"id":3009052,"value":100.0},{"id":3009063,"value":40.61},{"id":3009072,"value":100.0},{"id":3009082,"value":99.98},{"id":3009092,"value":100.0},{"id":3009102,"value":100.0},{"id":3009113,"value":51.57},{"id":3010013,"value":51.69},{"id":3010022,"value":76.8},{"id":3010032,"value":86.0},{"id":3010043,"value":54.06},{"id":3010052,"value":79.23},{"id":3010062,"value":94.41},{"id":3010073,"value":39.1},{"id":3010082,"value":58.26},{"id":3010092,"value":84.11},{"id":3010103,"value":50.7},{"id":3010112,"value":94.06},{"id":3010123,"value":46.77},{"id":3010132,"value":56.91},{"id":3010142,"value":32.05},{"id":3011023,"value":70.95},{"id":3011032,"value":94.78},{"id":3011043,"value":91.28},{"id":3011053,"value":77.9},{"id":3012023,"value":67.69},{"id":3012033,"value":69.36},{"id":3012043,"value":39.02},{"id":3012052,"value":100.0},{"id":3012063,"value":29.52},{"id":3013012,"value":100.0},{"id":3013022,"value":100.0},{"id":3013033,"value":74.74},{"id":3013043,"value":76.1},{"id":3013052,"value":100.0},{"id":3013062,"value":99.79},{"id":3013072,"value":96.59},{"id":3014012,"value":96.27},{"id":3014022,"value":89.0},{"id":3014033,"value":63.74},{"id":3014043,"value":29.29},{"id":3015012,"value":71.63},{"id":3015023,"value":23.16},{"id":3015032,"value":94.39},{"id":3015043,"value":46.51},{"id":3015053,"value":45.59},{"id":3015063,"value":43.91},{"id":3016013,"value":55.45},{"id":3016023,"value":43.36},{"id":3016032,"value":99.67},{"id":3017023,"value":87.57},{"id":3017033,"value":70.27},{"id":3017042,"value":99.9},{"id":3017052,"value":99.81},{"id":3017063,"value":88.37},{"id":3017072,"value":99.91},{"id":3017082,"value":100.0},{"id":3018012,"value":96.39},{"id":3018022,"value":99.23},{"id":3018033,"value":65.24},{"id":3018042,"value":99.73},{"id":3018052,"value":98.7},{"id":3018063,"value":68.98},{"id":3018073,"value":29.02},{"id":3019022,"value":99.88},{"id":3019033,"value":99.84},{"id":3019043,"value":78.98},{"id":3019053,"value":99.9},{"id":3019062,"value":97.3},{"id":3019073,"value":60.68},{"id":3019083,"value":70.3},{"id":3019093,"value":72.89},{"id":3020013,"value":59.34},{"id":3020022,"value":100.0},{"id":3020033,"value":52.85},{"id":3020042,"value":100.0},{"id":3020052,"value":99.99},{"id":3020063,"value":53.32},{"id":3021033,"value":76.82},{"id":3021042,"value":98.68},{"id":3021052,"value":100.0},{"id":3021062,"value":100.0},{"id":3021072,"value":99.99},{"id":3021083,"value":59.67},{"id":3021093,"value":80.87},{"id":3021103,"value":62.8},{"id":3021113,"value":46.53},{"id":3021123,"value":60.25},{"id":3021132,"value":99.76},{"id":3021143,"value":73.63},{"id":3021152,"value":99.96},{"id":3021163,"value":61.56},{"id":3021172,"value":99.67},{"id":3022013,"value":81.55},{"id":3022023,"value":78.04},{"id":3022033,"value":60.69},{"id":3022042,"value":100.0},{"id":3022053,"value":66.77},{"id":3023022,"value":99.98},{"id":3023032,"value":94.69},{"id":3023042,"value":99.57},{"id":3023052,"value":86.55},{"id":3023062,"value":96.71},{"id":3023072,"value":94.04},{"id":3023083,"value":56.18},{"id":3024022,"value":81.75},{"id":3024032,"value":100.0},{"id":3024042,"value":100.0},{"id":3024053,"value":64.15},{"id":3024063,"value":43.47},{"id":3024073,"value":49.63},{"id":3024083,"value":66.36},{"id":3025012,"value":100.0},{"id":3025022,"value":100.0},{"id":3025032,"value":100.0},{"id":3025043,"value":44.38},{"id":3025052,"value":100.0},{"id":3026012,"value":100.0},{"id":3026023,"value":82.72},{"id":3026033,"value":80.22},{"id":3026043,"value":55.6},{"id":3027022,"value":85.49},{"id":3027033,"value":79.35},{"id":3027042,"value":99.45},{"id":3027052,"value":99.14},{"id":3027062,"value":76.2},{"id":3027073,"value":57.27},{"id":3027082,"value":93.46},{"id":3027092,"value":95.44},{"id":3028022,"value":90.48},{"id":3028033,"value":40.93},{"id":3028042,"value":90.5},{"id":3028053,"value":51.41},{"id":3028062,"value":93.0},{"id":3028072,"value":87.41},{"id":3029012,"value":99.32},{"id":3029022,"value":99.96},{"id":3029033,"value":69.96},{"id":3030012,"value":99.99},{"id":3030023,"value":70.67},{"id":3030033,"value":54.49},{"id":3030043,"value":42.65},{"id":3030053,"value":47.75},{"id":3031023,"value":30.81},{"id":3031033,"value":39.57},{"id":3031042,"value":75.61},{"id":3031053,"value":65.62},{"id":3031062,"value":68.99},{"id":3031072,"value":90.93},{"id":3031082,"value":74.09},{"id":3201022,"value":89.32},{"id":3201033,"value":37.98},{"id":3201043,"value":71.39},{"id":3202012,"value":98.74},{"id":3202023,"value":44.75},{"id":3202033,"value":79.57},{"id":3202042,"value":100.0},{"id":3202053,"value":69.34},{"id":3202063,"value":45.22},{"id":3203013,"value":61.92},{"id":3203023,"value":28.75},{"id":3203033,"value":49.33},{"id":3203052,"value":100.0},{"id":3203063,"value":19.78},{"id":3204023,"value":61.43},{"id":3204033,"value":65.3},{"id":3204043,"value":58.97},{"id":3204052,"value":100.0},{"id":3204062,"value":99.57},{"id":3204073,"value":56.96},{"id":3205012,"value":83.36},{"id":3205023,"value":19.09},{"id":3205032,"value":97.42},{"id":3205043,"value":57.34},{"id":3205072,"value":82.59},{"id":3205083,"value":38.82},{"id":3206012,"value":91.63},{"id":3206023,"value":74.93},{"id":3206033,"value":46.68},{"id":3206043,"value":65.63},{"id":3206053,"value":43.61},{"id":3206063,"value":60.52},{"id":3206072,"value":84.5},{"id":3206083,"value":47.71},{"id":3206092,"value":81.66},{"id":3207013,"value":46.09},{"id":3207023,"value":63.46},{"id":3207033,"value":45.6},{"id":3207043,"value":7.47},{"id":3207052,"value":99.01},{"id":3207063,"value":71.17},{"id":3208022,"value":98.27},{"id":3208033,"value":43.28},{"id":3208042,"value":99.47},{"id":3208052,"value":97.08},{"id":3208062,"value":100.0},{"id":3208072,"value":99.62},{"id":3209012,"value":90.91},{"id":3209022,"value":93.91},{"id":3209033,"value":54.35},{"id":3209042,"value":95.01},{"id":3209053,"value":66.74},{"id":3209063,"value":56.46},{"id":3209073,"value":57.33},{"id":3209082,"value":83.99},{"id":3210013,"value":29.21},{"id":3210022,"value":97.25},{"id":3210033,"value":39.87},{"id":3210043,"value":66.71},{"id":3210052,"value":99.53},{"id":3211012,"value":100.0},{"id":3211022,"value":100.0},{"id":3211033,"value":25.53},{"id":3211043,"value":27.82},{"id":3212012,"value":96.08},{"id":3212022,"value":100.0},{"id":3212033,"value":44.41},{"id":3212042,"value":99.96},{"id":3212053,"value":36.19},{"id":3212062,"value":98.58},{"id":3213032,"value":96.95},{"id":3213042,"value":99.07},{"id":3213052,"value":97.49},{"id":3213062,"value":99.67},{"id":3214023,"value":55.04},{"id":3214033,"value":42.38},{"id":3214042,"value":94.86},{"id":3214053,"value":60.17},{"id":3214062,"value":95.37},{"id":3214082,"value":100.0},{"id":3214092,"value":89.69},{"id":3214102,"value":95.26},{"id":3214113,"value":64.67},{"id":3215023,"value":73.17},{"id":3215033,"value":62.47},{"id":3215043,"value":63.46},{"id":3215052,"value":95.52},{"id":3215062,"value":99.39},{"id":3216022,"value":99.98},{"id":3216033,"value":65.09},{"id":3216042,"value":99.51},{"id":3216052,"value":98.85},{"id":3216062,"value":100.0},{"id":3217023,"value":52.45},{"id":3217033,"value":52.81},{"id":3217043,"value":49.4},{"id":3217052,"value":97.42},{"id":3218013,"value":67.48},{"id":3218023,"value":19.05},{"id":3218032,"value":88.58},{"id":3218043,"value":52.2},{"id":3218053,"value":55.31}]

	createMapPow("mapPow", danePow, "pl");
	createMapWoj("mapWoj", daneWoj, "pl");
	createMapGmin("mapGmin", daneGmin, "pl");
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
//	}, {
//	"w1": "Polska",
//	"ogółem": 97.9,
//	"miasto": 96.6,
//	"wieś": 99.9,
//	"year": "2023"
//	}];


//var dane2_org = [{"w1":"POLSKA","w2":"ogółem","2015":122.9,"2023":119.9},{"w1":"POLSKA","w2":"miasto","2015":1061.9,"2023":952.4},{"w1":"POLSKA","w2":"wieś","2015":52.5,"2023":52.5},{"w1":"Dolnośląskie","w2":"ogółem","2015":145.6,"2023":144.3},{"w1":"Dolnośląskie","w2":"miasto","2015":909.9,"2023":884.8},{"w1":"Dolnośląskie","w2":"wieś","2015":50.5,"2023":52.9},{"w1":"Kujawsko-Pomorskie","w2":"ogółem","2015":116.1,"2023":111.1},{"w1":"Kujawsko-Pomorskie","w2":"miasto","2015":1500.9,"2023":1364.6},{"w1":"Kujawsko-Pomorskie","w2":"wieś","2015":49.1,"2023":49.1},{"w1":"Lubelskie","w2":"ogółem","2015":85.2,"2023":80.0},{"w1":"Lubelskie","w2":"miasto","2015":1009.8,"2023":885.9},{"w1":"Lubelskie","w2":"wieś","2015":47.7,"2023":45.0},{"w1":"Lubuskie","w2":"ogółem","2015":72.8,"2023":69.7},{"w1":"Lubuskie","w2":"miasto","2015":762.2,"2023":712.3},{"w1":"Lubuskie","w2":"wieś","2015":27.2,"2023":26.7},{"w1":"Łódzkie","w2":"ogółem","2015":136.9,"2023":129.7},{"w1":"Łódzkie","w2":"miasto","2015":1358.2,"2023":1178.3},{"w1":"Łódzkie","w2":"wieś","2015":54.0,"2023":53.2},{"w1":"Małopolskie","w2":"ogółem","2015":222.1,"2023":225.9},{"w1":"Małopolskie","w2":"miasto","2015":987.5,"2023":964.1},{"w1":"Małopolskie","w2":"wieś","2015":128.5,"2023":132.6},{"w1":"Mazowieckie","w2":"ogółem","2015":150.4,"2023":155.0},{"w1":"Mazowieckie","w2":"miasto","2015":1585.9,"2023":1539.7},{"w1":"Mazowieckie","w2":"wieś","2015":57.2,"2023":58.6},{"w1":"Opolskie","w2":"ogółem","2015":105.8,"2023":99.5},{"w1":"Opolskie","w2":"miasto","2015":676.8,"2023":582.9},{"w1":"Opolskie","w2":"wieś","2015":55.4,"2023":51.7},{"w1":"Podkarpackie","w2":"ogółem","2015":119.2,"2023":116.1},{"w1":"Podkarpackie","w2":"miasto","2015":733.2,"2023":670.5},{"w1":"Podkarpackie","w2":"wieś","2015":75.1,"2023":73.7},{"w1":"Podlaskie","w2":"ogółem","2015":58.9,"2023":56.4},{"w1":"Podlaskie","w2":"miasto","2015":778.3,"2023":747.6},{"w1":"Podlaskie","w2":"wieś","2015":24.3,"2023":23.2},{"w1":"Pomorskie","w2":"ogółem","2015":126.0,"2023":120.7},{"w1":"Pomorskie","w2":"miasto","2015":1392.6,"2023":784.4},{"w1":"Pomorskie","w2":"wieś","2015":47.6,"2023":50.3},{"w1":"Śląskie","w2":"ogółem","2015":370.6,"2023":350.3},{"w1":"Śląskie","w2":"miasto","2015":930.1,"2023":850.7},{"w1":"Śląskie","w2":"wieś","2015":122.4,"2023":123.3},{"w1":"Świętokrzyskie","w2":"ogółem","2015":107.4,"2023":99.8},{"w1":"Świętokrzyskie","w2":"miasto","2015":833.2,"2023":651.3},{"w1":"Świętokrzyskie","w2":"wieś","2015":63.1,"2023":58.9},{"w1":"Warmińsko-Mazurskie","w2":"ogółem","2015":59.6,"2023":56.2},{"w1":"Warmińsko-Mazurskie","w2":"miasto","2015":1422.0,"2023":1297.5},{"w1":"Warmińsko-Mazurskie","w2":"wieś","2015":25.0,"2023":23.7},{"w1":"Wielkopolskie","w2":"ogółem","2015":116.5,"2023":116.9},{"w1":"Wielkopolskie","w2":"miasto","2015":1253.3,"2023":1142.1},{"w1":"Wielkopolskie","w2":"wieś","2015":55.4,"2023":58.1},{"w1":"Zachodniopomorskie","w2":"ogółem","2015":74.7,"2023":71.2},{"w1":"Zachodniopomorskie","w2":"miasto","2015":829.0,"2023":755.3},{"w1":"Zachodniopomorskie","w2":"wieś","2015":25.0,"2023":24.3}];
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



			createchart1("chart1", 96, 101, 1, ["ogółem", "miasto", "wieś"], 0);

			createchart2("chart2", 0, 400, 0, ["2015", "2023"], 0);

			createchart3("chart3", dane3, ["krajowe", "wojewódzkie", "powiatowe", "gminne"]);

			createchart4("chart4", 0, 100, 0, ["2015", "2022"], 0);

			createchart5("chart5", dane5, 0, 60, 0, ["2015", "2022"]);

			createchart6("chart6");

			createchart7("chart7", 100);

			createchart8("chart8", 30);

			createchart9("chart9", 0, 200000, 0, ["2015", "2023"], 0);



			}); // end am5.ready()


$('label').tooltip({
        placement : 'top'
    });





function wyborWoj() {
    var wojBox = document.getElementById("wojBox");
    var selectedWoj = wojBox.options[wojBox.selectedIndex].index;
    console.log(selectedWoj);
		if(selectedWoj===0){    
		createchart1('chart1', 96, 101, 1, ['ogółem', 'miasto', 'wieś'], 0);
		}
		if(selectedWoj===1){    
		createchart1('chart1', 96, 106, 1, ['ogółem', 'miasto', 'wieś'], 1);
		}
		if(selectedWoj===2){    
		createchart1('chart1', 92, 102, 1, ['ogółem', 'miasto', 'wieś'], 2);
		}		
		if(selectedWoj===3){    
		createchart1('chart1', 93, 101, 1, ['ogółem', 'miasto', 'wieś'], 3);
		}		
		if(selectedWoj===4){    
		createchart1('chart1', 94, 101, 1, ['ogółem', 'miasto', 'wieś'], 4);
		}
		if(selectedWoj===5){    
		createchart1('chart1', 92, 101, 1, ['ogółem', 'miasto', 'wieś'], 5);
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
		createchart1('chart1', 96, 101, 1, ['ogółem', 'miasto', 'wieś'], 9);
		}
		if(selectedWoj===10){    
		createchart1('chart1', 95, 100, 1, ['ogółem', 'miasto', 'wieś'], 10);
		}
		if(selectedWoj===11){    
		createchart1('chart1', 98, 109, 1, ['ogółem', 'miasto', 'wieś'], 11);
		}
		if(selectedWoj===12){    
		createchart1('chart1', 92, 102, 1, ['ogółem', 'miasto', 'wieś'], 12);
		}
		if(selectedWoj===13){    
		createchart1('chart1', 92, 100, 1, ['ogółem', 'miasto', 'wieś'], 13);
		}
		if(selectedWoj===14){    
		createchart1('chart1', 94, 100, 1, ['ogółem', 'miasto', 'wieś'], 14);
		}
		if(selectedWoj===15){    
		createchart1('chart1', 96, 105, 1, ['ogółem', 'miasto', 'wieś'], 15);
		}
		if(selectedWoj===16){    
		createchart1('chart1', 94, 101, 1, ['ogółem', 'miasto', 'wieś'], 16);
		}
   }





				function onChangeOption(value){
					//console.log(value);

					var wojMap = document.getElementById("mapWoj");
					var powMap = document.getElementById("mapPow");
					var gminMap = document.getElementById("mapGmin");

					if(value==="Woj"){
						wojMap.removeAttribute("hidden");
						powMap.setAttribute("hidden", "hidden");
						gminMap.setAttribute("hidden", "hidden");
					}
					if(value==="Pow"){
						powMap.removeAttribute("hidden");
						wojMap.setAttribute("hidden", "hidden");
						gminMap.setAttribute("hidden", "hidden");
					}
					if(value==="Gmin"){
						gminMap.removeAttribute("hidden");
						wojMap.setAttribute("hidden", "hidden");
						powMap.setAttribute("hidden", "hidden");
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
