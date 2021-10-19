---
title: 'Download sex-disaggregated global indicators'
type: 'GET'
name: '/api/v1/en/global/sex_g.json'
lang: 'en'
---

This method allows users to download data and metadata for all global sex-disaggregated global indicators in English.

### Parameters

<p>No input parameters</p>

<p style='float:left;margin-top: 7px;'>Response content type</p>
<select style='float:left;padding: 0px 15px;width: 155px;margin-left: 10px;text-align-last: center;'>
  <option>application/json</option>
</select>

<div id='exampleGlobSex'>

<h3 id="przykładowy-curl">Curl example</h3>

<p><code class="highlighter-rouge">curl -H "Accept:application/vnd.github.v3.raw" "https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/en/global/sex_g.json"</code></p>

<h3 id="przykładowy-url">URL example</h3>

<p><code class="highlighter-rouge">https://api.github.com/repos/statisticspoland/sdg-indicators-pl/contents/api/v1/en/global/sex_g.json</code></p>

<h3 id="przykładowy-kod-odpowiedzi">Response code</h3>

<p><code class="highlighter-rouge">200</code></p>

<h3 id="przykładowa-odpowiedź">Response</h3>

<p><code class="highlighter-rouge" id="show-data-GlobSex">
</code></p>

</div>


<script>

$.getJSON('https://sdg.gov.pl/api/v1/en/global/sex_g.json', function(data) {
    $('#show-data-GlobSex').html(JSON.stringify(data, null, 2));
});

</script>
