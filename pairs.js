// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// For example:

// charCount("A", "apple") ➞ 0

// charCount("c", "Chamber of Secrets") ➞ 1

// charCount("a", "Katakeet Laila") ➞ 4

// ***NOTE THAT YOUR OUTPUT MUST BE CASE-SENSITIVE!***

// ***HINT: USE THE SPREAD OPERATOR***

// */

const charCount = (a,b) => {
    let sum = 0;
    for (i=0 ; i < b.length ; i++){
    if (a === b[i]) sum++;
    }
return sum;
};

//Test your solution

console.log(charCount("A", "apple")); //Returns 0
console.log(charCount("c", "Chamber of Secrets")); //Returns 1
console.log(charCount("a", "Katakeet Laila")); //Returns 4


/*
Write a function that returns an array that:

-Has all duplicate elements removed.
-Is sorted from greatest to least value.

For example:

uniqueSort([1, 2, 4, 3, 2, 1, 4]) ➞ [4, 3, 2, 1]

*/
//let chars = ['A', 'B', 'A', 'C', 'B'];

function uniqueSort(a) {
    let uniqueChars = [ ...new Set(a)];
    return uniqueChars.sort().reverse();

 }
console.log(uniqueSort([1, 2, 4, 3, 2, 1, 4]))
//Test your solution

//console.log(uniqueSort([1, 2, 4, 3, 2, 1, 4])); //Returns [4, 3, 2, 1]
//console.log(
// uniqueSort([6, 620, 3021, 24, 13, 620.5, 999, 620, 6, 11, 58, 58, 13])
// ); //Returns [3021, 999, 620.5, 620, 58, 24, 13, 11, 6]


/*
Create a function that takes an object and returns the keys and values as separate arrays. 

For example:

keysAndValues =({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

*/
// keysAndValue ={ a: "Apple", b: "Microsoft", c: "Google" }

// const keysAndValues = (object) => {

// };
keysAndValues = (object) => {
  return [  Object.keys(object), Object.values(object)]
}

//Test your solution

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })); // Returns [["a, "b". "c"], ["Apple", "Microsoft", "Google"]]
// console.log(keysAndValues({ 1: "Laila", 2: "Zainab", 3: "Hajar", 4: "Ahmed" })); //Returns [["1", "2", "3", "4"], ${}