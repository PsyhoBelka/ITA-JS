function spliceM(arr, start = 0, count) {
    const args = [...arguments];
    const arrLen = arr.length;
    const argsLen = args.length;
    if (argsLen === 0) {
        return;
    }
    if (start < 0) {
        start = arrLen + start;
    }
    if (start > arrLen) {
        start = arrLen;
    }
    if (!count) {
        count = arrLen - start;
    }

    let newArr = [];
    for (let i = start; i < ((start + count) > arrLen ? arrLen : (start + count)); i++) {
        newArr.push(arr[i]);
    }
    if (argsLen > 3) {
        for (let i = 3; i < argsLen; i++) {
            newArr.push(args[i]);
        }
    }

    return newArr;
}

function test() {
    console.log(`spliceM([1, 2, "222", 4, 5], 2, 4) = ${spliceM([1, 2, "222", 4, 5], 2, 4)}`);
    console.log(`spliceM([1, 2, "222", 4, 5], 2, 4, 4, 5, 6, "3") = ${spliceM([1, 2, "222", 4, 5], 2, 4, 4, 5, 6, "3")}`);
}