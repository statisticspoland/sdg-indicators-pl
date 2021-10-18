---
title: 'Pobierz dane dla wszystkich wskaźników krajowych'
type: 'GET'
name: '/api/v1/krajowe_dane.json'
lang: 'pl'
---

Metoda pozwala na uzyskanie danych dla wszystkich wskaźników krajowych w języku polskim.

### Parametry

<p>Usługa nie przyjmuje parametrów wejściowych.</p>

<p style='float:left;margin-top: 7px;'>Typ treści odpowiedzi</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<div id='exampleKraj'>

<h3 id="przykładowy-curl">Przykładowy Curl</h3>

<p><code class="highlighter-rouge">curl -H "Accept:application/vnd.github.v3.raw" "https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/krajowe_dane.json"</code></p>

<h3 id="przykładowy-url">Przykładowy URL</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/krajowe_dane.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge" id="show-data-kraj-dane">
</code></p>

</div>


<script>

$.getJSON('http://sdg.gov.pl/api/v1/krajowe_dane.json', function(data) {
    $('#show-data-kraj-dane').html(JSON.stringify(data, null, 2));
});

</script>
