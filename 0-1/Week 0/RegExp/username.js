function isValidUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  return usernameRegex.test(username);
}

let result1 = isValidUsername("my_user123"); // Output: true
let result2 = isValidUsername("short"); // Output: false
let result3 = isValidUsername("too_long_username_example"); // Output: false
let result4 = isValidUsername("user with space"); // Output: false
