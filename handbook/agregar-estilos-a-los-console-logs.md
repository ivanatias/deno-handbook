---
title: ¿Cómo agregar estilos a los console logs?
date: 2023/03/11
excerpt: La mayoría de terminales modernos pueden mostrar los logs de programas con distintos colores y decoraciones de texto.
author: Iván Atias
authorUrl: https://ivanatias.codes
---

La mayoría de terminales modernos pueden mostrar los logs de programas con distintos colores y decoraciones de texto. Deno tiene soporte para CSS usando la sintáxis `%c` en los `console.log`. Acá algunos ejemplos extraídos de la documentación oficial de Deno:

## Hello World en color rojo:

```javascript
console.log('%cHello World', 'color: red')
```

## También puedes agregar backgrounds:

```javascript
console.log('%cHello World', 'background-color: blue')
```

## Otros estilos:

```javascript
console.log('%cHello World', 'text-decoration: underline')

console.log('%cHello World', 'text-decoration: line-through')

console.log('%cHello World', 'font-weight: bold')

console.log('%cHello World', 'color: red; font-weight: bold')

console.log('%cHello %cWorld', 'color: red', 'color: blue')

console.log('%cHello World', 'color: #FFC0CB')

console.log('%cHello World', 'color: rgb(255, 192, 203)')
```
