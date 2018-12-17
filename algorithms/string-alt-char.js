// const str = "AABAAB"; //2
// const str = "AAAA"; //3
// const str = "BBBBB"; //4
// const str = "ABABABAB"; //0
// const str = "BABABA"; //0
const str = "AAABBB"; //4
let arr = str.split("");
console.log(arr);

// This solution will not work if string is huge !
function alternating() {
    let c = arr.shift();
    let count = 0;

    while (arr.length > 0) {
        let temp = arr.shift();
        if (c === temp) {
            count++;
        }
        c = temp;
        console.log(temp);
    }

    console.log(count);
    return count;
}

let count  = alternating(); 