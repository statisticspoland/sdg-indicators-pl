---
title: 'Response status codes'
lang: 'en'
---

<table id='api_table'>
  <tr>
    <th><b>Status code</b></th>
    <th><b>Definition</b></th>
    <th><b>Message</b></th>
  </tr>
  <tr>
    <td><b>200</b></td>
    <td>OK</td>
    <td>The request was successful and the response body contains the representation requested</td>
  </tr>
  <tr>
    <td><b>302</b></td>
    <td>FOUND</td>
    <td>A common redirect response; you can GET the representation at the URI in the Location response header</td>
  </tr>
  <tr>
    <td><b>304</b></td>
    <td>NOT MODIFIED</td>
    <td>There is no new data to return</td>
  </tr>
  <tr>
    <td><b>400</b></td>
    <td>BAD REQUEST</td>
    <td>The request was invalid or cannot be otherwise served</td>
  </tr>
  <tr>
    <td><b>401</b></td>
    <td>UNAUTHORIZED</td>
    <td>The authentication credentials are missing, or if supplied are not valid or not sufficient to access the resource</td>
  </tr>
  <tr>
    <td><b>403</b></td>
    <td>FORBIDDEN</td>
    <td>The request has been refused</td>
  </tr>
  <tr>
    <td><b>404</b></td>
    <td>NOT FOUND</td>
    <td>The URI requested is invalid or the resource requested does not exists</td>
  </tr>
  <tr>
    <td><b>406</b></td>
    <td>NOT ACCEPTABLE</td>
    <td>The request specified an invalid format</td>
  </tr>
  <tr>
    <td><b>410</b></td>
    <td>GONE</td>
    <td>This resource is gone</td>
  </tr>
  <tr>
    <td><b>500</b></td>
    <td>INTERNAL SERVER ERROR</td>
    <td>Something is horribly wrong</td>
  </tr>
  <tr>
    <td><b>502</b></td>
    <td>BAD GATEWAY</td>
    <td>The service is down or being upgraded</td>
  </tr>
  <tr>
    <td><b>503</b></td>
    <td>SERVICE UNAVAILABLE</td>
    <td>The service is up, but overloaded with requests</td>
  </tr>
  <tr>
    <td><b>504</b></td>
    <td>GATEWAY TIMEOUT</td>
    <td>Servers are up, but the request couldn’t be serviced due to some failure within our stack</td>
  </tr>
</table>
