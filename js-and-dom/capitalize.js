//  "hello" "heLLO" -> "Hello"
const capitalize = (word) => {
  // get the first letter of the word
  const firstLetter = word[0];
  // age the rest of the word
  const restOfTheWord = word.substring(1);
  // upcase the letter combine the upcased first letter and the rest downcased
  return `${firstLetter.toUpperCase()}${restOfTheWord.toLowerCase()}`;
};

console.log(capitalize("hello"));
console.log(capitalize("heLLO"));
console.warn(capitalize("WORLD"));
