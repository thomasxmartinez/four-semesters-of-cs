'use strict';

function isUnique (string) {
  var chars = {};
  for (var i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      return false;
    }
    chars[string[i]] = true;
  }
  return true;
}

console.log(isUnique('abcde'));

function checkPermutation (string1, string2) {
  var str1 = {};
  var str2 = {};
  if (string1.length !== string2.length) {
    return false;
  }
  for (var i = 0; i < string1.length; i++) {
    str1 += string1[i];
    console.log(str1);
  }
  for (var j = 0; j < string2.length; j++) {
    str2 += string2[j];
  }
  console.log(str1, str2);
  if (str1 !== str2) {
    return false;
  }
  return true;
}

console.log(checkPermutation('able', 'able'));
