function shiftM(arr) {
    if (arr.length === 0) {
        return;
    }

    const first = arr[0];
    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        newArr[i - 1] = arr[i];
    }
    arr = newArr;

    return first;
}

function test() {
    console.log(`shiftM([1, 2, 3, 4]) = ${shiftM([1, 2, 3, 4])}`);
    console.log(`shiftM([1, 2, 3, 4]) = ${shiftM([])}`);
}