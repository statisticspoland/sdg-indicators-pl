---
title: 'Download titles for national indicators'
type: 'GET'
name: '/api/v1/en/national/list.json'
lang: 'en'
---

This method allows users to download titles for all national indicators in English.

### Parameters

<p>No input parameters</p>

<p style='float:left;margin-top: 7px;'>Response content type</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<div id='exampleKraj'>

<h3 id="przykładowy-curl">Curl example</h3>

<p><code class="highlighter-rouge">curl -H "Accept:application/vnd.github.v3.raw" "https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/en/national/list.json"</code></p>

<h3 id="przykładowy-url">Przykładowy URL</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/en/national/list.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Response code</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Response</h3>

<p><code class="highlighter-rouge" id="show-data-kraj-lista-en">
</code></p>

</div>

<script>

$.getJSON('https://sdg.gov.pl/api/v1/en/national/list.json', function(data) {
    $('#show-data-kraj-lista-en').html(JSON.stringify(data, null, 2));
});

</script>
