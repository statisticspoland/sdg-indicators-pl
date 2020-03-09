---
title: 'Pobierz wskaźnik krajowy'
type: 'GET'
name: '/en/api/krajowe/{cel}/{num}'
lang: 'en'
---

Metoda pozwala na uzyskanie danych oraz metadanych dla wybranych wskaźników krajowych w języku polskim.

### Parametry

<table id='api_table'>
  <tr>
    <th><b>Parametry</b></th>
    <th><b>Opis</b></th>
  </tr>
  <tr>
    <td><b>cel</b></td>
    <td>numer celu w którym znajduje się wskaźnik ( od 1 do 17 )</td>
  </tr>
  <tr>
    <td><b>num</b></td>
    <td>numer wskaźnika</td>
  </tr>
</table>

<p style='float:left;margin-top: 7px;'>Typem odpowiedzi jest</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<button style='float:right;' onclick="ShowExampleKraj2()">Sprawdź dla wskaźnika 1-1-a</button>

<div id='exampleKraj2' style='display:none;'>

<h3 id="przykładowy-curl">Curl</h3>

<p><code class="highlighter-rouge">curl -X GET --header 'Accept: application/json' 'http://localhost:4000/sdg-indicators/api/krajowe/1/1-1-a</code></p>

<h3 id="przykładowy-url">URL</h3>

<p><code class="highlighter-rouge">http://localhost:4000/sdg-indicators/api/krajowe/1/1-1-a</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge">
{
  "1-1-a-0": [
    {
      "metadane": [

        {
                        "nazwa": "1.1.a Stopa ubóstwa relatywnego",

                        "cel": "Cel 1. Koniec z ubóstwem",

                        "priorytet": "Wzrost realnych dochodów gospodarstw domowych, który powinien przełożyć się na spadek wskaźnika zagrożenia ubóstwem relatywnym",

                        "definicja": "Odsetek osób w gospodarstwach domowych żyjących poniżej relatywnej granicy ubóstwa, za którą przyjmuje się 50% średnich wydatków ogółu gospodarstw domowych.",

                        "jednostka": "procent [%]",

                        "wymiary": "ogółem, wiek",

                        "metodologia": "Wskaźnik obliczany jest na podstawie informacji uzyskanych z Badania budżetów gospodarstw domowych. Badanie budżetów gospodarstw domowych prowadzone jest metodą reprezentacyjną, opartą na próbie losowej, która daje możliwość uogólniania z określonym błędem, uzyskanych wyników na wszystkie gospodarstwa domowe w kraju. Od 1993 r. badanie budżetów prowadzone jest metodą rotacji miesięcznej, tzn., że w ciągu roku w każdym miesiącu badane są inne gospodarstwa domowe. Badaniem objęte są gospodarstwa domowe jedno- i wieloosobowe. Biorą w nim również udział gospodarstwa domowe obywateli państw obcych zamieszkujących w Polsce na stałe lub przez dłuższy okres czasu i posługujących się językiem polskim. Celem badania jest umożliwienie dokonywania analiz poziomu życia ludności, a także oceny wpływu różnych czynników na kształtowanie się poziomu i zróżnicowania sytuacji bytowej podstawowych grup gospodarstw domowych. Badanie budżetów gospodarstw domowych dostarcza szczegółowych informacji o:   • poziomie i strukturze realizowanych wydatków, źródłach pozyskiwania towarów i usług;   • poziomie spożycia podstawowych artykułów żywnościowych w ujęciu ilościowym oraz w przeliczeniu na wartości energetyczne i składniki odżywcze;    • cenach płaconych przez gospodarstwa domowe za wybrane towary i usługi  poziomie i źródłach osiąganych dochodów  wyposażeniu gospodarstw domowych w dobra trwałego użytku;   • warunkach mieszkaniowych;   • subiektywnej ocenie sytuacji materialnej gospodarstw domowych;    • strukturze demograficzno-społecznej gospodarstw domowych, tj. o liczbie, wieku, płci, wykształceniu, niepełnosprawności, aktywności ekonomicznej osób wchodzących w skład badanego gospodarstwa domowego. Gospodarstwo domowe stanowią osoby, które są lub nie są ze sobą spokrewnione, mieszkają razem i wspólnie utrzymują się (gospodarstwo wieloosobowe). Gospodarstwo domowe może również tworzyć jedna osoba, która utrzymuje się samodzielnie, bez względu na to, czy mieszka sama, czy z innymi osobami (gospodarstwo jednoosobowe). Relatywna granica ubóstwa szacowana jest co roku przez GUS na podstawie wyników Badania budżetów gospodarstw domowych. Wydatki obejmują wydatki na towary i usługi konsumpcyjne oraz pozostałe wydatki:  • Wydatki na towary i usługi konsumpcyjne przeznaczone są na zaspokojenie potrzeb gospodarstwa domowego. Obejmują one towary zakupione za gotówkę (również przy użyciu karty płatniczej lub kredytowej), na kredyt, otrzymane bezpłatnie oraz spożycie naturalne (towary i usługi konsumpcyjne pobrane na potrzeby gospodarstwa domowego z działalności rolniczej bądź działalności gospodarczej na własny rachunek). Towary konsumpcyjne obejmują dobra nietrwałego użytkowania (np.: żywność, napoje, lekarstwa), półtrwałego użytkowania (np.: odzież, książki, zabawki) i trwałego użytkowania (np.: samochody, pralki, lodówki, telewizory). Pozostałe wydatki, które składają się z: darów przekazanych innym gospodarstwom domowym i instytucjom niekomercyjnym, niektórych podatków, w tym podatku od spadków i darowizn, podatku od nieruchomości, opłaty za wieczyste użytkowanie gruntu, zaliczek na podatek od dochodów osobistych oraz składek na ubezpieczenia społeczne płaconych samodzielnie przez podatnika, pozostałych rodzajów wydatków nie przeznaczonych bezpośrednio na cele konsumpcyjne, w tym strat pieniężnych, odszkodowań za wyrządzone szkody.",

                        "zrodlo": "Główny Urząd Statystyczny",

                        "czestotliwosc": "Dane roczne; od 2010 r.",

                        "uwagi": ""
                      }
      ],
      "dane": [
        {
                      "wiek": [
                          {
                              "ogółem": [
                                  {

                                      "2010" :   "17.4",

                                      "2011" :   "16.9",

                                      "2012" :   "16.3",

                                      "2013" :   "16.2",

                                      "2014" :   "16.2",

                                      "2015" :   "15.5",

                                      "2016" :   "13.9",

                                      "2017" :   "13.4",

                                      "2018" :   "14.2"

                                  }
                              ],
                              "osoby w wieku 0-17 lat": [
                                  {

                                      "2010" :   "23.7",

                                      "2011" :   "23.1",

                                      "2012" :   "22.0",

                                      "2013" :   "21.8",

                                      "2014" :   "21.8",

                                      "2015" :   "20.6",

                                      "2016" :   "16.4",

                                      "2017" :   "15.3",

                                      "2018" :   "16.2"

                                  }
                              ],
                              "osoby w wieku 65 lat i więcej": [
                                  {

                                      "2010" :   "12.0",

                                      "2011" :   "11.2",

                                      "2012" :   "10.7",

                                      "2013" :   "9.9",

                                      "2014" :   "10.6",

                                      "2015" :   "10.6",

                                      "2016" :   "10.3",

                                      "2017" :   "11.0",

                                      "2018" :   "11.5"

                                  }
                              ]
                          }
                      ]}
      ]
    }
  ]
}
</code></p>

</div>


<script>
function ShowExampleKraj2() {
  if($('#exampleKraj2').css('display') == 'none')
  {
    $("#exampleKraj2").css("display", "block");
  }else{
    $("#exampleKraj2").css("display", "none");
  }
}
</script>
