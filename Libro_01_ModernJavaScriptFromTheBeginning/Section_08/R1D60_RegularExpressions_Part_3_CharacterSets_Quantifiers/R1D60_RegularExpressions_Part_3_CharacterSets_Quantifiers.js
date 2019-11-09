console.log("R1D60_RegularExpressions_Part_3_CharacterSets_Quantifiers");

let re;
// literal characters
re = /hello/;
re = /hello/i;

// metacharacter symbols
re = /^h/i; // ^ Must start with
re = /^e/i; // ^ Must start with
re = /d$/i; // $ Must ends with
re = /world$/i; // $ Must ends with
re = /^world$/i; // ^$ Must ends and start with
re = /^Hello world$/i; // ^$ Must ends and start with
re = /^.ello world$/; // . Matches any One Character
// let str = "Hello world";
re = /gre?a?y/i; // ? optional characters
// let str = "grey";
// let str = "gray";
// let str = "griy";
re = /gre?a?y\?/i; // \ Escape characters
let str = "gray?";

// String to match
// let str = "Hello world";

// Brakets [] Characters sets
str = "grey?";
re = /gr[ae]y/i; // most be an a or i -- its better than /gre?a?y\?/i;

// Brakets [] Characters sets
str = "Fray";
re = /[GF]ray/; // most be a G or F

str = "Tray";
re = /[^GF]ray/; // [^<Lo que sea>] Match anything except G or F

str = "Gray";
re = /^[GF]ray/; // Most to begging with G or F

// Puedes escribir cualquier rango tanto de numeros como de letras

str = "Lray";
re = /[A-Z]ray/; // Match any uppercase letter

str = "pray";
re = /[a-z]ray/; // Match any lowercase letter

str = "Pray";
re = /[A-Za-z]ray/; // Match any lowercase and uppercase letter

str = "0ray";
re = /[0-9]ray/; // Match any number

str = "10ray";
re = /[0-9]ray/; // Match any number

str = "10ray";
re = /[0-9][0-9]ray/; // Match any number

// Braces {} - Quantifiers

str = "Hello";
re = /Hel{2}o/; // Match exactry How many times is specified insight the Braces the letter that take to validate is before braces
// Most occure exactly {m} amount of times

str = "Helllo";
re = /Hel{2}o/; // Match How many times is specified insight the Braces the letter that take to validate is before braces

str = "Helllo";
re = /Hel{2,4}o/; // Most occure between the range {m,n}

str = "Helllllllllo";
re = /Hel{2,}o/; // Most occure at least {m,} times

// Prentheses () - grouping

str = "0xxx";
re = /[0-9]x{3}/;

str = "0x0x0x";
re = /([0-9]x){3}/;

str = "0x0x0x0x";
re = /([0-9]x){3}/;

str = "0x0x0x0x";
re = /^([0-9]x){3}$/;

// Log results
let resuls = re.exec(str);
console.log(resuls);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT matched ${re.source}`);
  }
}

reTest(re, str);
