---
title: 'Pobierz nazwy wskaźników krajowych'
type: 'GET'
name: '/api/krajowe/lista'
lang: 'pl'
---

Metoda pozwala na uzyskanie danych oraz metadanych dla wszystkich wskaźników krajowych w języku polskim.

### Parametry

<table id='api_table'>
  <tr>
    <th><b>Parametry</b></th>
    <th><b>Opis</b></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>

<p style='float:left;margin-top: 7px;'>Typem odpowiedzi jest</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<button style='float:right;' onclick="ShowExampleKraj()">Sprawdź dla wskaźników krajowych</button>

<div id='exampleKraj' style='display:none;'>

<h3 id="przykładowy-curl">Curl</h3>

<p><code class="highlighter-rouge">curl -X GET --header 'Accept: application/json' 'http://localhost:4000/sdg-indicators/api/krajowe</code></p>

<h3 id="przykładowy-url">URL</h3>

<p><code class="highlighter-rouge">http://localhost:4000/sdg-indicators/api/krajowe</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge">
{
  "krajowe":[

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
                  }
                  ....
              ]
          },

          {
            "17":[
                    {
                        "17-9-1": [
                          {
                            "metadane": [

                              {
                                              "nazwa": "17.9.1 Równowartość w dolarach USA pomocy finansowej na rzecz krajów rozwijających się ",

                                              "cel": "Cel 17. Partnerstwa na rzecz celów",

                                              "zadanie": "17.9 Zwiększyć międzynarodowe wsparcie na rzecz wdrażania efektywnej i ukierunkowanej budowy potencjału, by wesprzeć narodowe plany realizacji wszystkich celów Zrównoważonego Rozwoju w krajach rozwijających się, w tym poprzez współpracę Północ – Południe, Południe – Południe oraz współpracę trójstronną",

                                              "definicja": "Wyrażona w dolarach USA wartość wydatkowanej oficjalnej pomocy rozwojowej (ODA) w krajach rozwijających się przeznaczona na budowanie potencjału i planowanie na szczeblu krajowym.",

                                              "jednostka": "mln USD (ceny bieżące)",

                                              "wymiary": "ogółem",

                                              "metodologia": "Do&nbsp;Oficjalnej Pomocy Rozwojowej&nbsp;(ang.&nbsp;Official Development Assistance&nbsp;&ndash; ODA)&nbsp;zaliczane są&nbsp;darowizny i pożyczki przekazywane przez instytucje rządowe lub organizacje międzynarodowe, mające na celu wsparcie rozwoju gospodarczego i dobrobytu w krajach rozwijających się. Pożyczki są uważane jako ODA wtedy, gdy zawierają element darowizny o wartości udzielanej pomocy przynajmniej:  45% dla kraj&oacute;w najsłabiej rozwiniętych i innych kraj&oacute;w o niskich dochodach (least developed countries and other low income countires &ndash; LDCs &amp; other LICs), wyliczony przy stopie dyskontowej 9%, 15% dla kraj&oacute;w o średnich i niskich dochodach (lower middle income countries &ndash; LMICs), wyliczony przy stopie dyskontowej 7%, 10% dla kraj&oacute;w o średniowysokim dochodzie (upper middle income countries &ndash; UMICs), wyliczony przy stopie dyskontowej 6%.  Do ODA&nbsp;zaliczana jest&nbsp;r&oacute;wnież pomoc techniczna, mająca na celu rozw&oacute;j zasob&oacute;w ludzkich, podniesienie kwalifikacji oraz możliwości technicznych i produkcyjnych kraj&oacute;w rozwijających się. Pomoc ta polega między innymi na przekazywaniu wiedzy i doświadczeń w postaci szkoleń, delegowania ekspert&oacute;w, inicjowania badań i/lub pokrywania wynikających z tego koszt&oacute;w. Do ODA&nbsp;nie zalicza się&nbsp;dotacji przeznaczonych na wydatki wojskowe. Warunkiem zaklasyfikowania wsp&oacute;łpracy jako Oficjalnej Pomocy Rozwojowej jest to, aby kraj partnerski, na rzecz kt&oacute;rego udzielane jest wsparcie, znajdował się na liście Komitetu Pomocy Rozwojowej OECD (Development Assistance Committee). W zależności od sposobu realizacji pomocy możemy wyr&oacute;żnić :  pomoc dwustronną&nbsp;&ndash; podejmowana przez donatora bezpośrednio w kraju partnerskim bądź poprzez organizację międzynarodową w formie wpłaty celowej na rzecz kraju partnerskiego (earmarked contribution) lub w formie wpłaty na określony program/fundusz zarządzany przez organizację, pomoc wielostronną&nbsp;&ndash; udzielana w formie wpłat do budżet&oacute;w og&oacute;lnych organizacji międzynarodowych, kt&oacute;rych lista jest corocznie aktualizowana przez Sekretariat DAC OECD.  Oficjalna Pomoc Rozwojowa w Polsce świadczona jest na podstawie ustawy o wsp&oacute;łpracy rozwojowej z dnia 16 września 2011 r. (Dz.U. 2011 r., Nr 234, poz. 1386). Polska wsp&oacute;łpraca rozwojowa prowadzona jest w oparciu o Wieloletni Program Wsp&oacute;łpracy Rozwojowej opracowywany na okres minimum 4 lat. Ustawa definiuje wsp&oacute;łpracę rozwojową jako og&oacute;ł działań podejmowanych przez organy administracji rządowej w celu udzielenia państwom rozwijającym się pomocy rozwojowej, pomocy humanitarnej oraz realizację działań edukacyjnych na rzecz podniesienia świadomości i zrozumienia problem&oacute;w i wsp&oacute;łzależności globalnych. Za zagadnienia związane z pomocą rozwojową w Polsce odpowiedzialne jest Ministerstwo Spraw Zagranicznych, kt&oacute;re opracowało &bdquo;Wieloletni program wsp&oacute;łpracy rozwojowej na lata 2016-2020', w oparciu o kt&oacute;ry polska wsp&oacute;łpraca rozwojowa koncentruje się na krajach Partnerstwa Wschodniego (Białoruś, Gruzja, Mołdawia, Ukraina) oraz Afryki, Azji i Bliskiego Wschodu (Etiopia, Kenia, Liban, Mjanma, Palestyna, Senegal, Tanzania, Ugandę). Polska wsp&oacute;łpraca rozwojowa służy wzmocnieniu rząd&oacute;w prawa i wspieraniu reform decentralizacyjnych oraz zwalczaniu korupcji, a także przestrzeganiu praw człowieka i swob&oacute;d obywatelskich. Wśr&oacute;d cel&oacute;w wsp&oacute;łpracy rozwojowej są: poprawa opieki zdrowotnej i dostępu do edukacji oraz wsparcie dla przedsiębiorczości i rolnictwa, a także ochrona środowiska naturalnego, w tym zapobieganie skutkom klęsk żywiołowych. Działania objęte programem finansowane są ze środk&oacute;w Ministerstwa Spraw Zagranicznych, rezerwy celowej budżetu państwa przeznaczonej na wsp&oacute;łpracę rozwojową i funduszy innych resort&oacute;w.",

                                              "zrodlo": "Ministerstwo Spraw Zagranicznych",

                                              "czestotliwosc": "Dane roczne; od 2010 r.",

                                              "uwagi": "Do 2017 r. obowiązywała metodologia DAC OECD zbierania danych na temat pomocy rozwojowej w formacie CRS (Creditor Reporting System), która pozwalała na oznaczanie sektora wsparcia jedynie przy przepływach dwustronnych. Do wskaźnika nie zaliczono wydatków w ramach pomocy wielostronnej w formie wpłat do budżetów ogólnych organizacji międzynarodowych, które działają w obszarze budowania potencjału krajów rozwijających się. Od 2018 r. wiodący wskaźnik ODA jest prezentowany w formie ekwiwalentu grantu, uwzględniającej jedynie element grantu pomnożony przez wartość danego przepływu. Nie obowiązuje przy tym podział na wydatkowanie ODA brutto i netto. Dodatkowo trwają prace nad włączeniem do ODA innych przepływów, np. kwot zmobilizowanych przez sektor publiczny z instrumentów sektora prywatnego. Aktualnie konstruowany jest alternatywny do ODA wskaźnik TOSSD (Total Oficial Support for Sustainable Development), który będzie mierzył środki przeznaczane na wdrożenie SDGs."
                                            }
                            ],
                            "dane": [
                              {


                              }
                            ]
                          }
                        ]
                      }
                      ]
                    ]
                  }
                }
              ]
            }

</code></p>

</div>


<script>
function ShowExampleKraj() {
  if($('#exampleKraj').css('display') == 'none')
  {
    $("#exampleKraj").css("display", "block");
  }else{
    $("#exampleKraj").css("display", "none");
  }
}
</script>
