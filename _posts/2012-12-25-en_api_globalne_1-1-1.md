---
title: 'Download global indicator'
type: 'GET'
name: '/en/api/globalne/{goal}/{num}'
lang: 'en'
---

This method allows users to download data and metadata for chosen global indicators in english.

### Parameters

<table id='api_table'>
  <tr>
    <th><b>Name</b></th>
    <th><b>Description</b></th>
  </tr>
  <tr>
    <td><b>goal</b></td>
    <td>number of indicator's goal ( 1 - 17 )</td>
  </tr>
  <tr>
    <td><b>num</b></td>
    <td>numer of indicator</td>
  </tr>
</table>

<p style='float:left;margin-top: 7px;'>Response content type</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<button style='float:right;' onclick="ShowExample2()">Check for indicator 1-1-1</button>

<div id='example2' style='display:none;'>

<h3 id="przykładowy-curl">Curl</h3>

<p><code class="highlighter-rouge">curl -X GET --header 'Accept: application/json' 'http://localhost:4000/sdg-indicators/en/api/globalne/1/1-1-1</code></p>

<h3 id="przykładowy-url">URL</h3>

<p><code class="highlighter-rouge">http://localhost:4000/sdg-indicators/en/api/globalne/1/1-1-1</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Response code</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Response</h3>

<p><code class="highlighter-rouge">[
      {
         "metadata":[
                       {
                          "nazwa":" 1.1.1 Stopa ubóstwa według międzynarodowej granicy ubóstwa",
                          "cel":"Cel 1. Koniec z ubóstwem",
                          "zadanie":"1.1 Do 2030 roku wyeliminować skrajne ubóstwo na całym świecie aktualnie mierzone jako utrzymywanie się za mniej niż $1,25 dziennie",
                          "definicja":"Odsetek osób w gospodarstwach domowych, których dzienny dochód jest niższy od kwoty, określonej jako międzynarodowa granica ubóstwa (1,9 $ dziennie).",
                          "jednostka":"procent [%]",
                          "wymiary":"ogółem",
                          "metodologia":"Definicja wskaźnika: Odsetek osób z dochodem do dyspozycji poniżej progu zagrożenia ubóstwem, który określany jest dziennym dochodem do dyspozycji w wysokości 1,9 $. W celu zniwelowania różnic w mierzeniu ubóstwa ludnosci mieszkającej w różnych krajach zastosowano tzw. parytet siły nabywczej (PPP). PPP to rodzaj kursów wymiany walut, które stosuje się w celu przeliczenia wskaźników ekonomicznych wyrażonych w walutach krajowych na wspólną umowną walutę. Ze względu na zmieniające się realia ekonomiczno-społeczne, międzynarodowa granica ubóstwa musi być okresowo aktualizowana. Obecny próg został określony w październiku 2015. Wcześniej, wg aktualizacji Banku Światowego z 2008 r. międzynarodowa granica ubóstwa wynosiła 1,25 $.",
                          "zrodlo":"Główny Urząd Statystyczny",
                          "czestotliwosc":"Dane roczne; od 2010 r.",
                          "uwagi":""
                       }
          ],
         "data":[
                       {
                        "ogółem":[
                           {
                              "2010":"0.2",
                              "2011":"0.3",
                              "2012":"0.3",
                              "2013":"0.2",
                              "2014":"0.4",
                              "2015":"0.4",
                              "2016":"0.5",
                              "2017":"0.3",
                              "2018":"0.3"
                           }
                        ]
                     }
          ]
      }
   ]</code></p>

</div>


<script>
function ShowExample2() {
  if($('#example2').css('display') == 'none')
  {
    $("#example2").css("display", "block");
  }else{
    $("#example2").css("display", "none");
  }
}
</script>
