---
title: 'Response status codes'
lang: 'en'
---

### Success

Successes differ from errors in that their body may not be a simple response object with a code and a message. The headers however are consistent across all calls:

* `GET` returns `200 OK` on success,

```Status: 200 OK```
```{
    {
        id: thing_1,
        name: 'My first thing'
    },
    {
        id: thing_2,
        name: 'My second thing'
    }
}```

### Error

Error responses are simply returning [standard HTTP error codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) along with some additional information:

* The error code is sent back as a status header,
* The body includes an object describing both the code and message (for debugging and/or display purposes),

For a call with a bad request token for example:

```Status: 400 Bad Request```
```{
    code: 400,
    message: 'The server cannot or will not process the request due to an apparent client error.'
}```

For a call with an invalid authentication token for example:

```Status: 401 Access denied```
```{
    code: 401,
    message: 'Access denied: invalid authentication token.'
}```
