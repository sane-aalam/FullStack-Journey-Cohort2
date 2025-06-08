// String Methods(W3School) 🙂

//1. String length
function StringLength(str) {
  console.log("orignal string", str);
  let newStr = str.length;
  console.log("size of string", newStr);
}
StringLength("Raj");

//2. JavaScript String charAt()
function stringCharAt(str) {
  console.log("orignal string", str);
  let newStr = str.charAt(0);
  console.log("char at index 0", newStr);
}

stringCharAt("HakiratCohort");

//3. String charCodeAt()
// return ASCI VALUE - current index of char

function stringCharCodeAt(str) {
  console.log("orignal string", str);
  let newStr = str.charCodeAt(0);
  let newStr1 = str.charCodeAt(1);
  console.log("char at index 0", newStr);
  console.log("char at index 1", newStr1);
}

stringCharCodeAt("CohortWeb");
// ASIC Value (return)
//   char at index 0 67
//   char at index 1 111

// 4. String at()

function stringAt(str) {
  console.log("orignal string", str);
  let newStr = str.at(0);
  console.log("at index of 0", newStr);
}

stringAt("Hakiratcohort");

// 5. Property Access [ ]
// same to array element you can access using index value

function stringAccess(str) {
  console.log("index 0 char", str[0]);
  console.log("index 1 char", str[1]);
  console.log("index 2 char", str[2]);
  console.log("index 3 char", str[3]);
}

stringAccess("HakiratCohort");

// 6.String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// [startIndexValue, EndIndexValue] "startpoint between endpoint of string"

function stringSlice(str) {
  console.log("orignal string", str);
  let newStr = str.slice(0, 5);
  console.log("slice1 -", newStr);
  let newStr1 = str.slice(0, 10);
  console.log(newStr1);
}

stringSlice("Apple, Banana, Kiwi");

//7. String substring()
// substring - (startIndexValue,EndIndexValue)
// stubstring - [yahan se tak]

function stringSubString(str) {
  console.log("original string -", str);
  let newstr = str.substring(0, 5);
  console.log("between index-", newstr);
}

stringSubString("Apple,Banana,Kiwi,PenApple");

// 8. string substr()
// The difference is that the second parameter specifies the length of the extracted part.
// If you omit the second parameter, substr() will slice out the rest of the string.
function stringSubStr(str) {
  console.log("original string -", str);
  let newStr = str.substr(0, 5);
  console.log("after substr -", newStr);
}

stringSubStr("Apple, Banana, Kiwi");

//9. String toUpperCase

function StringToUpperCase(str) {
  console.log("origial string -", str);
  let newstr = str.toUpperCase();
  console.log("to uppercase string of result -", newstr);
  let text1 = "helloworld";
  let text2 = text1.toLowerCase();
  console.log(text2);
}
StringToUpperCase("apple");

// 10. String toLowerCase

function StringToLowerCase(str) {
  console.log("original string -", str);
  let toLowerCaseString = str.toLowerCase();
  console.log("to lower case string of result -", toLowerCaseString);
}

StringToLowerCase("apple");

// 11. String concat() - Merge string
// The concat() method can be used instead of the plus operator. These two lines do the same:

function stringConcat(text1, text2) {
  console.log("both of string before merge -", text1, text2);
  let concatStr = text1.concat(" ", text2);
  console.log("both of string after merge -", concatStr);
}

let text1 = "Hello";
let text2 = "World";
stringConcat(text1, text2);

// 12. String trim()

function StringTrim(str) {
  console.log("original string length -", str.length);
  console.log("original string", str);
  let newstr = str.trim();
  console.log("after triming of string", newstr);
}

StringTrim("        Hello world");

// 13. string trimStart()
// remove the white space of string(starting point)

function StringTrimStart(str) {
  console.log("original string length -", str.length);
  console.log("original string", str);
  let newstr = str.trimStart();
  console.log("after triming of string", newstr);
}

StringTrimStart("        Hello world");

// 14. string trimEnd()
// remove the white space of string

function stringTrimEnd(str) {
  console.log("original string length -", str.length);
  console.log("original string", str);
  let newstr = str.trimEnd();
  console.log("after triming of string", newstr);
}

stringTrimEnd("Hello world, This       ");

// 15. string PadStart()
// It pads a string with another string (multiple times) until it reaches a given length.
// The padStart() method is a string method.

function stringPadStart() {
  let text = "5";
  let padded = text.padStart(4, "0");
  console.log("result of string", padded);
}

stringPadStart();

// 16. string Repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

function stringRepeat(str) {
  console.log("original string - ", str);
  let newstr = str.repeat(3);
  console.log("repeated result - ", newstr);
}

stringRepeat("Hello");

// 16. Replace Method

function stringReplaceMethod(str) {
  console.log("original string -", str);
  let newstr = str.replace("h", "a");
  console.log("replaced string after perfroming the method -", newstr);
}

stringReplaceMethod("hakirat");

// 17. String split()
