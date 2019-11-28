console.log("A look at the window object");

console.log(window);

console.log(window.CSS);

console.log(window.location);
console.log(location);

for (const x in window) {
  console.log(x);
}

console.log("WINDOWS METHODS OBJECTS AND PROPERTIES");

console.log("CONSOLE");
window.console.log("console.log()", "objeto dentro de window");

// window.alert("Hola Mundo");

console.log("ALERT");
// alert("hola mundo sin window");

console.log("PROMPT");
let name;
// name = prompt("Ingrese su nombre");
console.log(name);

console.log("CONFIRM");
// if (confirm("QUiere hacer esto")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

console.log("OUTER HIGHT and WEDTH");
console.log("outerHight", outerHeight);

console.log("outerWedth", outerWidth);

console.log("INNER HIGHT and WEDHT");
console.log("innerHight", innerHeight);
console.log("innerWeght", innerWidth);

console.log("SCROLL POINTS");
console.log("scrollY", scrollY);
console.log("scrollX", scrollX);

console.log("LOCATION OBJECT");

val = window.location;

console.log(val);
console.log(val.hostname);
console.log(val.port);
console.log(val.href);

// http://127.0.0.1:5500/?id=1
console.log(location.search);

console.log("REDIRECT");

// location.href = "https://google.com";

console.log("RELOAD");
// location.reload();

console.log("HISTORY OBJECT");
console.log("history", history);
console.log(
  "history.go(-1) me devuelve a la pagina anterior y si aumento en negativos va mas atras en la historia -2 -3 -4"
);
// history.go(-1);

console.log("history.lenght", history.length);

console.log("NAVIGATOR OBJECT");
console.log(navigator);

console.log("appName");
console.log(navigator.appName);

console.log("appVersion");
console.log(navigator.appVersion);

console.log("userAgent");
console.log(navigator.userAgent);

console.log("platform");
console.log(navigator.platform);

console.log("vendor");
console.log(navigator.vendor);

console.log("language");
console.log(navigator.language);
