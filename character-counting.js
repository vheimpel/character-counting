//TODO: Get input for command line?
//TODO: Split the string into individual letters?
//TODO: Loop through each letter
//TODO: Compare letters, if letter[i] !=== letter[i]+1 return letter
//TODO: Count the letters somehow

// function countLetters(word) {
//   var letter = word.split
//   for (letter of word) {
//     console.log(letter)
//   }
// }

// var noSpaces = word.split(" ").join("");

// var word = process.argv[2];
var word = "Lighthouse Labs";

wordNoSpace = word.replace(/\s/g,'');
var countLetters={}
var repeats=[];

for(i = 0, length = wordNoSpace.length; i < length; i++) {
    var l = wordNoSpace.charAt(i)
    countLetters[l] = (isNaN(countLetters[l]) ? 1 : countLetters[l] + 1);
}

console.log(wordNoSpace)
console.log(countLetters)