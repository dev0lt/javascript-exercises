const palindromes = function (word) {
  let wordLowerCase = word
    .toLowerCase()
    .split("")
    .filter((w) => w.match(/[a-z0-9]/g))
    .join("");
  let reversedWord = wordLowerCase.split("").reverse().join("");
  return wordLowerCase === reversedWord ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
