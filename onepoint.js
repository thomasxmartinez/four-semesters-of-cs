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
  }
  for (var j = 0; j < string2.length; j++) {
    str2 += string2[j];
  }
  if (str1 !== str2) {
    return false;
  }
  return true;
}

console.log(checkPermutation('able', 'able'));

function urlIfy (str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += '%20';
      i++;
    }
    newStr += str[i];
  }

  return newStr;
}

console.log(urlIfy('I like to race horses'));
