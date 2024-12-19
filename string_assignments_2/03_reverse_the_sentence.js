// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "this        is a     cup";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let string = "";
let reversedSentence = "";

for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
        string += sentence[index];
        continue;
    }
    
    reversedSentence = string + reversedSentence;
    reversedSentence = sentence[index] + reversedSentence;
    string = "";
}

reversedSentence = string + reversedSentence;
console.log(reversedSentence);