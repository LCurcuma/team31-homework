console.log("-----Vowel count-----");

function showNumberOfVowels(string) {
  let vowelLetters = ["a", "e", "i", "o", "u"];
  let arrayWithVowelLettersFromString = [];
  let arrayOfWords = string.split(" ");

  for (let word of arrayOfWords) {
    for (let letter of word) {
      if (vowelLetters.includes(letter)) {
        arrayWithVowelLettersFromString.push(letter);
      }
    }
  }

  return arrayWithVowelLettersFromString.length;
}

console.log(showNumberOfVowels("hello world"));
