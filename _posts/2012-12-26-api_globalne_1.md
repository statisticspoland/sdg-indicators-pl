---
title: 'Pobierz wszystkie wskaźniki globalne z danego celu'
type: 'GET'
name: '/api/v1/globalne/{cel}.json'
lang: 'pl'
---

Metoda pozwala na uzyskanie danych oraz metadanych dla wszystkich wskaźników globalnych dla wybranego celu w języku polskim.

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

<div id='example1'>

<h3 id="przykładowy-curl">Przykładowy Curl</h3>

<p><code class="highlighter-rouge">curl -H "Accept:application/vnd.github.v3.raw" "https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/globalne/1.json"</code></p>

<h3 id="przykładowy-url">Przykładowy URL</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/globalne/1.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Kod odpowiedzi</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Odpowiedź</h3>

<p><code class="highlighter-rouge" id="show-data-glob-1">
</code></p>

</div>


<script>

$.getJSON('https://sdg.gov.pl/api/v1/globalne/1.json', function(data) {
    $('#show-data-glob-1').html(JSON.stringify(data, null, 2));
});

</script>
