// Validating a URL:
// For simple "yes/no" validation (does the string match the pattern?)
// test() is the most efficient and recommended method.

function isValidURL(url) {
  const urlRegex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return urlRegex.test(url);
}

console.log(isValidURL("www.google.com"));
console.log(isValidURL("invalid-url"));
console.log(isValidURL("www.facebook.com/food-application/about:section1"));
