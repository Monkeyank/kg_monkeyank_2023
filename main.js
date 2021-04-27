var arguments = process.argv;

const phoneticNumberMap = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// Runtime: O(n * m)
// n = # of input integers
// m = # of digits in the longest number

/**
    * @param {integer} input Integers seperated by spaces
*/
function intToPhonetic (args) {

    let answer = "";
    
    // Loop through each number's digits

    for (let i = 2; i < args.length; i++) {
        let str = "" + args[i];

        for (let j = 0; j < str.length; j++) {
            let char = str.charAt(j);

            // Appends each phonetic representation to the answer string

            answer += phoneticNumberMap[char];
        }
        answer += ",";
    }
    return answer.substring(0, answer.length - 1);
}

console.log(intToPhonetic(arguments));
