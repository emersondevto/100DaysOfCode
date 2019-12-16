# ¿Qué es Node.js?

Node.JS es la tecnología que ayuda a correr código en el backend
JavaScript runtime construido en el motor V8JS de Chrome

V8 esta construido en C++, esto quiere decir que puedes hacer una aplicación en C++ agregar el motor V8 y extender las funcionalidades de tu app con JavaScript.

Node.JS y JavaScript son implementaciones de JavaScript. JavaScript para el frontend tiene unas características y objetos propios del frontend, y Node.JS es javascript con características y objetos propios para el backend.

Chrome envía a V8 el script de JS para ser interpretado y recibir una respuesta.
Node.JS envía a V8 el script de JS para ser interpretado y recibir una respuesta.

Tanto V8 como Chrome y Node.JS están escritos en C++, por consiguiente cada uno tiene escrito en su runtime características objetos y apis que le permiten interactuar ya sea con el backend (filesystem) como en el frontend (DOM).

C++ Bindings Es lo que permite a Chrome o a Node.JS tener sus características peculiares con sus objetos.

# ¿Por qué usar Node.js?

Es altamente demandado en la industria.

- Node.js is a runtime javascript built on Chrome's V8 JavaScript engine. 
  Ya lo profundizamos en ¿Qué es Node.js?
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
  non-blocking I/O
    Es una forma de I/O que permite que otros procesos continúen antes de que la trasmisión de datos haya finalizado.
  event-driven
    Es la arquitectura de software dominante en las aplicaciónes web las cuales responden a eventos ya sea por otras aplicaciónes, por dispositivos físicos IoT o por la interacción del teclado o mouse con objetos visuales.

- Node.js package ecosystem, npm is the larges ecosystem of open source libraries in the world.