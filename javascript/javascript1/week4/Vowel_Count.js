console.log("-----Vowel count-----");

function showNumberOfVowels(string) {
  const vowelLetters = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let letter of string.toLowerCase()) {
    for (let vowel of vowelLetters) {
      if (letter === vowel) {
        vowelCount++;
      }
    }
  }

  return vowelCount;
}

console.log(showNumberOfVowels("hello world"));
