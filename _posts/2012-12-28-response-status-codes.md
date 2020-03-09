---
title: 'Kody odpowiedzi'
lang: 'pl'
---

### Kod powodzenia

Kod powodzenia OK zwraca zawartość żądanego dokumentu, w tym przypadku plik .json.

* `GET` zwraca `200 OK` gdy zapytanie się powiodło,

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

### Kod błędu

Kod błędu Bad Request oznacza nieprawidłowe zapytanie (błąd składni po stronie użytkownika).

Błąd może wyglądać następująco:

```Status: 400 Bad Request```
```{
    code: 400,
    message: 'The server cannot or will not process the request due to an apparent client error.'
}```

Kod błędu Access denied oznacza nieautoryzowany dostęp ( wymagane jest uwierzytelnienie ).

Błąd może wyglądać następująco:

```Status: 401 Access denied```
```{
    code: 401,
    message: 'Access denied: invalid authentication token.'
}```
