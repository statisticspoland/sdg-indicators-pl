---
title: 'Pobierz wszystkie wskaźniki krajowe'
type: 'GET'
name: '/api/krajowe.json'
lang: 'pl'
---

Metoda pozwala na uzyskanie danych oraz metadanych dla wszystkich wskaźników krajowych w języku polskim.

### Parametry

<p>Usługa nie przyjmuje parametrów wejściowych.</p>

<p style='float:left;margin-top: 7px;'>Typem odpowiedzi jest</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<div id='exampleKraj'>

<h3 id="przykładowy-curl">Przykładowy Curl</h3>

<p><code class="highlighter-rouge">curl -X GET --header 'Accept: application/vnd.github.v3.raw' 'https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/krajowe.json'</code></p>

<h3 id="przykładowy-url">Przykładowy URL</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/krajowe.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge" id="show-data-kraj">
</code></p>

</div>


<script>

$.getJSON('http://sdg.gov.pl/api/krajowe.json', function(data) {
    $('#show-data-kraj').html(JSON.stringify(data, null, 2));
});

</script>
