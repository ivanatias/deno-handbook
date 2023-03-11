---
title: ¿Cómo manejar las variables de entorno?
date: 2023/03/10
excerpt: Deno ofrece varias formas de acceder a las variables de entorno de manera sencilla a través de un objeto global propio del entorno.
author: Iván Atias
authorUrl: https://ivanatias.codes
---

Deno ofrece varias formas de acceder a las variables de entorno de manera sencilla a través de un objeto global propio del entorno. El nombre de este objeto como podrás imaginar, es `Deno`.

## `Deno.env`

`Deno.env` tiene métodos que te permiten establecer y leer variables de entorno. Ejemplo de uso de la documentación oficial:

```javascript
// Setters
Deno.env.set('FIREBASE_API_KEY', 'examplekey123')
Deno.env.set('FIREBASE_AUTH_DOMAIN', 'firebasedomain.com')

// Getters
console.log(Deno.env.get('FIREBASE_API_KEY')) // examplekey123
console.log(Deno.env.get('FIREBASE_AUTH_DOMAIN')) // firebasedomain.com

// Verificación
console.log(Deno.env.has('FIREBASE_AUTH_DOMAIN')) // true
```

## Usando un archivo `.env`:

También puedes colocar las variables de entorno en un archivo `.env` y leer las mismas usando el módulo `dotenv` de la [libreria standard](https://deno.land/std@0.179.0/dotenv/mod.ts) de Deno.

Supongamos que se tiene un archivo `.env` que luce de esta forma:

```shell
SOME_TOKEN = secret123token456
```

Para acceder a esta variable de entorno, puedes importar la función `load` de `dotenv` y usarla de la siguiente forma:

```javascript
import { load } from 'https://deno.land/std/dotenv/mod.ts'

const env = await load()
const token = env['SOME_TOKEN']

console.log(token) // "secret123token456"
```

Adicionalmente, también puedes cargar directamente las variables de entorno y utilizar el objeto global `Deno`:

```javascript
import 'https://deno.land/std/dotenv/load.ts'

console.log(Deno.env.get('SOME_TOKEN')) // "secret123token456"
```

Ten en cuenta que tienes que indicarle a Deno que tiene acceso a estas variables de entorno con los flags `--allow-env` y `--allow-read`.
