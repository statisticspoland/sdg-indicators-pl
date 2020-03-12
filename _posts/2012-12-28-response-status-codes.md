---
title: 'Kody odpowiedzi'
lang: 'pl'
---

<table id='api_table'>
  <tr>
    <th><b>Kod</b></th>
    <th><b>Opis</b></th>
    <th><b>Znaczenie</b></th>
  </tr>
  <tr>
    <td><b>200</b></td>
    <td>OK</td>
    <td>Sformuowane zapytanie jest prawidłowe</td>
  </tr>
  <tr>
    <td><b>302</b></td>
    <td>FOUND</td>
    <td>Żądany zasób jest chwilowo dostępny pod innym adresem a przyszłe odwołania do zasobu powinny być kierowane pod adres pierwotny</td>
  </tr>
  <tr>
    <td><b>304</b></td>
    <td>NOT MODIFIED</td>
    <td>Zawartość zasobu nie podległa zmianie według warunku przekazanego przez klienta</td>
  </tr>
  <tr>
    <td><b>400</b></td>
    <td>BAD REQUEST</td>
    <td>Nieprawidłowe zapytanie</td>
  </tr>
  <tr>
    <td><b>401</b></td>
    <td>UNAUTHORIZED</td>
    <td>Żądanie zasobu, który wymaga uwierzytelnienia</td>
  </tr>
  <tr>
    <td><b>403</b></td>
    <td>FORBIDDEN</td>
    <td>Serwer zrozumiał zapytanie, lecz konfiguracja bezpieczeństwa zabrania mu zwrócić żądany zasób</td>
  </tr>
  <tr>
    <td><b>404</b></td>
    <td>NOT FOUND</td>
    <td>Serwer nie odnalazł zasobu według podanego URL ani niczego co by wskazywało na istnienie takiego zasobu w przeszłości</td>
  </tr>
  <tr>
    <td><b>406</b></td>
    <td>NOT ACCEPTABLE</td>
    <td>Zażądany zasób nie jest w stanie zwrócić odpowiedzi mogącej być obsłużonej przez klienta według informacji podanych w zapytaniu</td>
  </tr>
  <tr>
    <td><b>410</b></td>
    <td>GONE</td>
    <td>Żądany zasób nie jest dłużej dostępny i nieznany jest jego ewentualny nowy adres URI</td>
  </tr>
  <tr>
    <td><b>500</b></td>
    <td>INTERNAL SERVER ERROR</td>
    <td>Serwer napotkał niespodziewane trudności, które uniemożliwiły zrealizowanie żądania</td>
  </tr>
  <tr>
    <td><b>502</b></td>
    <td>BAD GATEWAY</td>
    <td>Serwer otrzymał niepoprawną odpowiedź od serwera nadrzędnego i nie jest w stanie zrealizować żądania klienta</td>
  </tr>
  <tr>
    <td><b>503</b></td>
    <td>SERVICE UNAVAILABLE</td>
    <td>Serwer nie jest w stanie w danej chwili zrealizować zapytania klienta ze względu na przeciążenie</td>
  </tr>
  <tr>
    <td><b>504</b></td>
    <td>GATEWAY TIMEOUT</td>
    <td>Serwer nie otrzymał w ustalonym czasie odpowiedzi od wskazanego serwera</td>
  </tr>
</table>
