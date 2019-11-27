function sliceM(arr, begin = 0, end = arr.length) {
    const arrLen = arr.length;
    if (arrLen === 0) {
        return;
    }

    let newArr = [];
    if (begin < 0) {
        begin = arrLen + begin;
    }
    if (end < 0) {
        end = arrLen + end - 1;
    }

    for (let i = begin; i < end; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

function test() {
    console.log(`sliceM([1, 2, 3, 4, 5, 6]) = ${sliceM([1, 2, 3, 4, 5, 6])}`);
    console.log(`sliceM([1, 2, 3, 4, 5, 6], 2) = ${sliceM([1, 2, 3, 4, 5, 6], 2)}`);
    console.log(`sliceM([1, 2, 3, 4, 5, 6], 2, 4) = ${sliceM([1, 2, 3, 4, 5, 6], 2, 4)}`);
    console.log(`sliceM([1, 2, 3, 4, 5, 6], -2) = ${sliceM([1, 2, 3, 4, 5, 6], -2)}`);
    console.log(`sliceM([1, 2, 3, 4, 5, 6], -2, -1) = ${sliceM([1, 2, 3, 4, 5, 6], -2, -1)}`);
    console.log(`sliceM([1, 2, 3, 4, 5, 6], -4, -1) = ${sliceM([1, 2, 3, 4, 5, 6], -4, -1)}`);
}