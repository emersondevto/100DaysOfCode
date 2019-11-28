console.log("R1D60_RegularExpressions_Part_4_ShorthandCharacterClasses");

let re;
let str;

// Shorthand character Classes

re = /\w/; // Word character - alphanumeric or _
str = "3x3x3x";

re = /\w+/; // + one or more
str = "3x3x3X";

// Don't match
re = /\w/;
str = "!";
str = "Ñ";

// Match
re = /\W/; // Non-word characters
str = "-";
str = " ";
str = "Ñ";

// Don't match
str = "P";
str = "i";
str = "1";

// Match
re = /\d/; // Match any digit
str = "1";
str = "1x";
re = /\d+/; // Match any digit 0 or more times
str = "105d6";

// Don't match
str = "i";
str = ".";

// Match
re = /\D/; // Non-digits
str = "i";
str = ".";

// Don't Match
str = "0";
str = "x0";

// Match
re = /\s/; // Match whitespace char
str = " ";

// Don't Match
str = "0";

// Match
re = /\S/; // Match non-whitespace char
str = "0";

// Don't Match
str = " ";

// Match
re = /Hell\b/; // Word boundary
str = "Hello to Hell";

// Assertions

// Match
re = /x(?=y)/; // Match x only if is follow by y
str = "xy";

// Don't match
str = "xd";

// Match
re = /x(?!y)/; // Match x only if not is following by y
str = "xsxdxg";

// Don't match
// str = "xy";

// Log results
let resuls = re.exec(str);
console.log(resuls);

function reTest(re, str) {
  if (re.exec(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT matched ${re.source}`);
  }
}

reTest(re, str);
