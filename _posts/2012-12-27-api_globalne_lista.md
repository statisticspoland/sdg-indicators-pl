---
title: 'Pobierz nazwy wskaźników globalnych'
type: 'GET'
name: '/api/globalne/lista.json'
lang: 'pl'
---

Metoda pozwala na uzyskanie tytułów wszystkich wskaźników globalnych w języku polskim.

### Parametry

<p>Usługa nie przyjmuje parametrów wejściowych.</p>

<p style='float:left;margin-top: 7px;'>Typem odpowiedzi jest</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<div id='example'>

<h3 id="przykładowy-curl">Przykładowy Curl</h3>

<p><code class="highlighter-rouge">curl -X GET --header 'Accept: application/json' 'https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/globalne/lista.json'</code></p>

<h3 id="przykładowy-url">Przykładowy URL</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/globalne/lista.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge" id="show-data-glob-lista">
</code></p>

</div>


<script>

$.getJSON('http://sdg.gov.pl/api/globalne/lista.json', function(data) {
    $('#show-data-glob-lista').html(JSON.stringify(data, null, 2));
});

</script>
