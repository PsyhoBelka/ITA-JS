function unshiftM(arr) {
    const args = [...arguments];
    if (args.length === 0) {
        return;
    }
    if (arr.length === 0) {
        return;
    }

    let newArr = [];

    for (let i = 1; i < args.length; i++) {
        newArr = [...newArr, args[i]];
    }
    for (let i = 0; i < arr.length; i++) {
        newArr = [...newArr, arr[i]];
    }

    return newArr.length;
}

function test() {
    console.log(`unshiftM([1, 2, 3], "12") = ${unshiftM([1, 2, 3], "12")}`);
    console.log(`unshiftM([1, 2, 3], "12", 4, 5) = ${unshiftM([1, 2, 3], "12", 4, 5)}`);
}