---
title: 'Pobierz wszystkie wskaźniki globalne z danego celu'
type: 'GET'
name: '/api/globalne/{cel}'
lang: 'pl'
---

Metoda pozwala na uzyskanie danych oraz metadanych dla wszystkich wskaźników globalnych z wybrangeo celu w języku polskim.

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
</table>

<p style='float:left;margin-top: 7px;'>Typem odpowiedzi jest</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<button style='float:right;' onclick="ShowExample1()">Sprawdź dla pierwszego celu</button>

<div id='example1' style='display:none;'>

<h3 id="przykładowy-curl">Curl</h3>

<p><code class="highlighter-rouge">curl -X GET --header 'Accept: application/json' 'http://localhost:4000/sdg-indicators/api/globalne/1</code></p>

<h3 id="przykładowy-url">URL</h3>

<p><code class="highlighter-rouge">http://localhost:4000/sdg-indicators/api/globalne/1</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge">[
{
  "1":[

    {
      "1-1-1": [
        {
          "metadane": [

            {
                            "nazwa": " 1.1.1 Stopa ubóstwa według międzynarodowej granicy ubóstwa",

                            "cel": "Cel 1. Koniec z ubóstwem",

                            "zadanie": "1.1 Do 2030 roku wyeliminować skrajne ubóstwo na całym świecie aktualnie mierzone jako utrzymywanie się za mniej niż $1,25 dziennie",

                            "definicja": "Odsetek osób w gospodarstwach domowych, których dzienny dochód jest niższy od kwoty, określonej jako międzynarodowa granica ubóstwa (1,9 $ dziennie).",

                            "jednostka": "procent [%]",

                            "wymiary": "ogółem",

                            "metodologia": "Definicja wskaźnika: Odsetek osób z dochodem do dyspozycji poniżej progu zagrożenia ubóstwem, który określany jest dziennym dochodem do dyspozycji w wysokości 1,9 $. W celu zniwelowania różnic w mierzeniu ubóstwa ludnosci mieszkającej w różnych krajach zastosowano tzw. parytet siły nabywczej (PPP).  PPP to rodzaj kursów wymiany walut, które stosuje się w celu przeliczenia wskaźników ekonomicznych wyrażonych w walutach krajowych na wspólną umowną walutę.  Ze względu na zmieniające się realia ekonomiczno-społeczne, międzynarodowa granica ubóstwa musi być okresowo aktualizowana.  Obecny próg został określony w październiku 2015. Wcześniej, wg aktualizacji Banku Światowego z 2008 r. międzynarodowa granica ubóstwa wynosiła 1,25 $.",

                            "zrodlo": "Główny Urząd Statystyczny",

                            "czestotliwosc": "Dane roczne; od 2010 r.",

                            "uwagi": ""
                          }
          ],
          "dane": [
            {


            }
          ]
        }
      ]
    },

    {
      "1-2-1-a": [
        {
          "metadane": [

            {
                            "nazwa": " 1.2.1.a Stopa ubóstwa po transferach społecznych",

                            "cel": "Cel 1. Koniec z ubóstwem",

                            "zadanie": "1.2 Do 2030 roku zmniejszyć przynajmniej o połowę odsetek mężczyzn, kobiet i dzieci, cierpiących z powodu ubóstwa, we wszystkich jego wymiarach określonych zgodnie z krajowymi definicjami",

                            "definicja": "Odsetek osób, których ekwiwalentny dochód do dyspozycji (po uwzględnieniu w dochodach transferów społecznych), jest niższy od granicy ubóstwa ustalonej na poziomie 60% krajowej mediany ekwiwalentnych dochodów do dyspozycji.",

                            "jednostka": "procent [%]",

                            "wymiary": "ogółem, płeć, wiek",

                            "metodologia": "Wskaźnik obliczany jest na podstawie informacji uzyskanych z Badania EU-SILC. Badanie EU-SILC (Europejskie Badanie Dochodów i Warunków Życia) jest badaniem stałym (prowadzonym co roku), którego podmiotem są gospodarstwa domowe oraz osoby w wieku 16 lat i więcej w gospodarstwach domowych. Badanie ma charakter panelowy, tzn. wylosowaną grupę respondentów poddaje się kilkukrotnej obserwacji w odstępach czasu, dzięki czemu można zaobserwować i przeanalizować zmieniającą się sytuację, postawy, zachowania lub opinie badanej grupy. Badanie jest realizowane metodą wywiadu bezpośredniego z wykorzystaniem 2 kwestionariuszy  z których jeden służy do pozyskiwania danych dotyczących gospodarstw domowych, a drugi – danych o osobach indywidualnych.  Celem badania EU-SILC jest pozyskiwanie informacji, które umożliwiają ocenę warunków życia polskiego społeczeństwa oraz pozwalają porównać je z warunkami życia w innych krajach Unii Europejskiej. Służy temu przyjęta przez Eurostat jednolita metodologia.  W miarę potrzeb organów Unii Europejskiej w ramach badania EU-SILC prowadzone są również badania modułowe poświęcone wybranemu zagadnieniu (jest to dodatkowa ankieta realizowana jednocześnie z badaniem podstawowym). Główny Urząd Statystyczny wdrożył badanie EU-SILC w 2005 r. Jednostką badania jest gospodarstwo domowe, czyli osoby, które są lub nie są ze sobą spokrewnione, mieszkają razem i wspólnie utrzymują się (gospodarstwo domowe wieloosobowe). Gospodarstwo domowe może również tworzyć jedna osoba, która utrzymuje się samodzielnie, bez względu na to, czy mieszka sama, czy z innymi osobami (gospodarstwo domowe jednoosobowe). Ekwiwalentny dochód do dyspozycji jest to suma rocznych dochodów pieniężnych netto (po odliczeniu zaliczek na podatek dochodowy, podatków od dochodów z własności, składek na ubezpieczenie społeczne, zdrowotne) wszystkich członków gospodarstwa domowego pomniejszona o: podatki od nieruchomości, transfery pieniężne przekazane innym gospodarstwom domowym oraz saldo rozliczeń z urzędem skarbowym. Przy obliczeniach wyników z zakresu dochodów zastosowano zmodyfikowaną skalę ekwiwalentności OECD. Według tej skali:    • wagę 1 przypisuje się pierwszej osobie w gospodarstwie domowym w wieku 14 lat i więcej;   • wagę 0,5 – każdej następnej osobie w tym wieku;   • wagę 0,3 – każdemu dziecku w wieku poniżej 14 lat. Oznacza to, że granica ubóstwa skrajnego i relatywnego dla gospodarstwa 4-osobowego złożonego z dwóch osób dorosłych i dwojga dzieci jest 2,1 razy wyższa niż dla gospodarstwa 1-osobowego.",

                            "zrodlo": "Główny Urząd Statystyczny",

                            "czestotliwosc": "Dane roczne; od 2010 r.",

                            "uwagi": ""
                          }
          ],
          "dane": [
            {

                              "miasto/wieś": [
                                  {
                                      "ogółem": [
                                          {

                                              "2010" : "17.6",

                                              "2011" : "17.7",

                                              "2012" : "17.1",

                                              "2013" : "17.3",

                                              "2014" : "17.0",

                                              "2015" : "17.6",

                                              "2016" : "17.3",

                                              "2017" : "15.0",

                                              "2018" : "14.8"

                                          }
                                      ],
                                      "miasto": [
                                          {

                                              "2010" : "12.6",

                                              "2011" : "12.7",

                                              "2012" : "12.3",

                                              "2013" : "12.1",

                                              "2014" : "11.7",

                                              "2015" : "12.5",

                                              "2016" : "12.8",

                                              "2017" : "10.7",

                                              "2018" : "10.8"

                                          }
                                      ],
                                      "wieś": [
                                          {

                                              "2010" : "25.3",

                                              "2011" : "25.2",

                                              "2012" : "24.3",

                                              "2013" : "24.9",

                                              "2014" : "24.7",

                                              "2015" : "25.2",

                                              "2016" : "24.0",

                                              "2017" : "21.5",

                                              "2018" : "20.8"

                                          }
                                      ],
                                      "mężczyźni": [
                                          {

                                              "2010" : "17.4",

                                              "2011" : "17.8",

                                              "2012" : "17.1",

                                              "2013" : "17.3",

                                              "2014" : "17.2",

                                              "2015" : "18.1",

                                              "2016" : "17.1",

                                              "2017" : "15.1",

                                              "2018" : "14.6"

                                          }
                                      ],
                                      "kobiety": [
                                          {

                                              "2010" : "17.7",

                                              "2011" : "17.6",

                                              "2012" : "17.1",

                                              "2013" : "17.3",

                                              "2014" : "16.8",

                                              "2015" : "17.2",

                                              "2016" : "17.4",

                                              "2017" : "14.9",

                                              "2018" : "15.0"

                                          }
                                      ],
                                      "poniżej 6 lat": [
                                          {

                                              "2010" : "20.5",

                                              "2011" : "19.7",

                                              "2012" : "18.6",

                                              "2013" : "21.7",

                                              "2014" : "19.4",

                                              "2015" : "19.7",

                                              "2016" : "17.6",

                                              "2017" : "11.8",

                                              "2018" : "10.7"

                                          }
                                      ],
                                      "poniżej 18 lat": [
                                          {

                                              "2010" : "22.5",

                                              "2011" : "22.0",

                                              "2012" : "21.5",

                                              "2013" : "23.2",

                                              "2014" : "22.3",

                                              "2015" : "22.4",

                                              "2016" : "21.1",

                                              "2017" : "14.0",

                                              "2018" : "13.0"

                                          }
                                      ],
                                      "18-24 lata": [
                                          {

                                              "2010" : "20.9",

                                              "2011" : "20.7",

                                              "2012" : "21.8",

                                              "2013" : "21.5",

                                              "2014" : "22.0",

                                              "2015" : "22.6",

                                              "2016" : "23.5",

                                              "2017" : "20.9",

                                              "2018" : "21.1"

                                          }
                                      ],
                                      "18-64 lata": [
                                          {

                                              "2010" : "16.9",

                                              "2011" : "17.1",

                                              "2012" : "16.5",

                                              "2013" : "16.7",

                                              "2014" : "16.7",

                                              "2015" : "17.6",

                                              "2016" : "17.3",

                                              "2017" : "15.6",

                                              "2018" : "15.2"

                                          }
                                      ],
                                      "60 lat i więcej": [
                                          {

                                              "2010" : "14.0",

                                              "2011" : "14.5",

                                              "2012" : "14.0",

                                              "2013" : "12.3",

                                              "2014" : "12.3",

                                              "2015" : "13.0",

                                              "2016" : "14.0",

                                              "2017" : "15.0",

                                              "2018" : "16.2"

                                          }
                                      ],
                                      "65 lat i więcej": [
                                          {

                                              "2010" : "14.2",

                                              "2011" : "14.7",

                                              "2012" : "14.0",

                                              "2013" : "12.3",

                                              "2014" : "11.7",

                                              "2015" : "12.1",

                                              "2016" : "12.8",

                                              "2017" : "13.8",

                                              "2018" : "15.5"

                                          }
                                      ]
                                  }
                              ],
                              "płeć": [
                                  {
                                  }
                              ],
                              "wiek": [
                                  {
                                  }
                              ]


            }
          ]
        }
      ]
    }.....
   ]
  }
   ]</code></p>

</div>


<script>
function ShowExample1() {
  if($('#example1').css('display') == 'none')
  {
    $("#example1").css("display", "block");
  }else{
    $("#example1").css("display", "none");
  }
}
</script>
