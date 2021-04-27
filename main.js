var arguments = process.argv;

const phoneticNumberMap = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

function intToPhonetic (args) {
    let answer = "";

    for (let i = 2; i < args.length; i++) {
        let numStr = "" + args[i];

        for (let j = 0; j < numStr.length; j++) {
            let numChar = numStr.charAt(j);

            answer += phoneticNumberMap[numChar];
        }
        answer += ",";
    }
    return answer.substring(0, answer.length - 1);

}

console.log(intToPhonetic(arguments));