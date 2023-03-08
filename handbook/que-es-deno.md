---
title: ¿Qué es Deno?
date: 2022-03-08
excerpt: Deno es un entorno de ejecución de JavaScript y TypeScript basado en el motor V8 y escrito en Rust por Ryan Dahl.
author: Iván Atias
authorUrl: https://ivanatias.codes
---

# ¿Qué es Deno?

Deno es un entorno de ejecución de JavaScript y TypeScript basado en el motor V8 de Chrome y escrito en Rust por Ryan Dahl, creador de Node.js.

## El propósito de Deno

Deno fue creado con la idea de corregir algunas de las fallas que cometió Ryan Dahl cuando creó y diseñó Node.js. Deno es seguro por defecto y ofrece una excelente experiencia de desarrollo.

Algunas de sus features más importantes serían:

- Adaptado a los estándares de la plataforma web nativa. Usa módulos ECMAScript, web workers, soporte de la API de `fetch`, etc.
- Es seguro por defecto. Por defecto, Deno no tiene acceso al sistema de archivos, red o entorno a menos que sea explicitamente provisto de estos permisos.
- Tiene soporte para TypeScript sin necesidad de configurar absolutamente nada.
- Nos entrega un sólo ejecutable (`deno`).
- Tiene formateador de código y linter (`deno fmt` y `deno lint`), un test runner (`deno test`) e incluso una extensión para VScode.
- Puede empaquetar scripts en un sólo archivo de JavaScript o en un ejecutable.
- Tiene soporte para el uso de módulos de npm.

## Filosofía detras de Deno

Deno está pensado para mejorar la productividad y ser un entorno de scripting totalmente seguro.

Este toma el rol tanto de un entorno de ejecución, como de un manejador de paquetes. Como manejador de paquetes, utiliza un protocolo estándar para cargar paquetes a través de URLs.
