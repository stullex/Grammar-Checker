let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
//The .split() method returns a new array of substrings based on a given string.
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
let longWord = "breathtaking"; //the new created Variable from the lengthCheck method
let count = 0;

storyWords.forEach(() => {
  count++;
}); //count++ adds a 1 to *let count* with every Item the .forEach method finds in the Array

//console.log(count)

storyWords = storyWords.filter((word) => {
  if (word != unnecessaryWord) {
    return word;
  } //removes all the "literally" word in the Array
  // IF IT'S NOT (!=) equal to *unnecessaryWord* it returns every other word.
});

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } //replaces the mispelled word with "beautiful" in the whole Array
  else {
    return word;
  }
});

const badWordIndex = storyWords.findIndex((word) => {
  if (word === badWord) {
    return word;
  } //helps us to find a specific element we set in the *badWord* variable and returns the index position of the story Array
});
//console.log(badWordIndex) = 78

storyWords[78] = "really";
//uses the filtered Array Index we've searched for in the badWordIndex and replaces it with the word "really"

lengthCheck = storyWords.every((word) => {
  if (word.length <= 10) {
    return word;
  } //here we finde out, that the only word in the story, that is longer than 10 charakters, is "breathtaking" so i created a var *let longWord* that assigns the Array Value "breathtaking" to it. We use this find the Index and replace the Value
});
//console.log(lengthCheck)

/*const replaceLongWord = storyWords.findIndex(word => {
    if (word === longWord){
        return word
    } 
}) 
console.log(replaceLongWord) Output = 111*/
storyWords[111] = "stunning";



console.log(storyWords.join(" "));
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object).
//using the Quotationg Mark "" prints the string without any additional commas, brackets[], or Quotation Marks "" to the console.




/*Output:

Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.

*/
