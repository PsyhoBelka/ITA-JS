function joinM(arr, separator = '') {
    if (arr.length === 0) {
        return;
    }

    const last = arr[arr.length - 1];
    let newArr = '';
    for (let arrKey of arr) {
        if (arrKey !== last) {
            newArr = newArr + arrKey.toString() + separator.toString();
        } else {
            newArr = newArr + arrKey.toString();
        }
    }

    return newArr;
}

function test() {
    console.log(`joinM([1, 2, 3]) = ${joinM([1, 2, 3])}`);
    console.log(`joinM([1, 2, 3], '-') = ${joinM([1, 2, 3], '-')}`);
    console.log(`joinM([1, 2, 3], 3) = ${joinM([1, 2, 3], 3)}`);
}