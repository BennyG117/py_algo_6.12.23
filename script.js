
//   Given an array of strings
//!   return the number of times each string occurs (a frequency / hash table)


const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
// {"a": 1, "a": 2, "a": 3}



const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};
// {}



const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    const freqTable = {} //create new list for frequency of variables to show
for (let i = 0; i < arr.length; i++) { //for loop to iterate through the array
    let letter = arr[i]; //create letter variable to equal arr[i] so it show the variable instead of the index position
    if (freqTable[letter]) {  //if letter exists, then ++
        freqTable[letter]++;
    } else { //if letter doesn't exist then make letter = 1
        freqTable[letter] = 1;
    }
}
// console.log(freqTable); //log array table
return freqTable;
}
console.log(makeFrequencyTable(arr1));
console.log("===========\n");

console.log(makeFrequencyTable(arr2));
console.log("===========\n");

console.log(makeFrequencyTable(arr3));
console.log("===========\n");

// ===================
//! the below will only show the index position of 0,1,2,3,4, etc of the array, but the above solution shows the variable that exists in that position*
// function makeFrequencyTable(arr) {
//     const freqTable = {} //create new list for frequency of variables to show
// for (let i = 0; i < arr.length; i++) { //for loop to iterate through the array
//     if (freqTable[i]) {  //if i exists, then ++
//         freqTable[i]++;
//     } else { //if i doesn't exist then make i = 1
//         freqTable[i] = 1;
//     }
// }
// console.log(freqTable);
// return freqTable;
// }
// console.log(makeFrequencyTable(arr1));
// console.log("===========\n");

// console.log(makeFrequencyTable(arr2));
// console.log("===========\n");

// console.log(makeFrequencyTable(arr3));
// console.log("===========\n");