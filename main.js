var arguments = process.argv

const phoneticNumberMap = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

function intToPhonetic (args) {
    let answer = ""

    for (let i = 2; i < args.length; i++) {
        let numStr = "" + args[i]

        for (let j = 0; j < numStr.length; j++) {
            let numChar = numStr.charAt(j)
            answer += phoneticNumberMap[numChar]
        }
        if(process.argv.length > 2){
            //if the number of arguments are greater than one, add we need to add at least one comma
            if(i < process.argv.length - 1){
                //but we don't want to print a trailing comma for our last number
                answer += ',';
            }
        }
    }
    return answer
}

console.log(intToPhonetic(arguments))