console.log("R1D59_RegularExpressions_Part_2_MetacharacterSymbols");

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

re = /h*llo world/; // Match any character 0 or more
str = "heello world?";

// String to match
// let str = "Hello world";

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
