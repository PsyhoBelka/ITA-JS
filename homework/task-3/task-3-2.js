function popM(arr) {
    if (arr.length === 0) {
        return;
    }
    let newArr = [];

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i];
        }
    } else {
        return;
    }

    return arr[arr.length - 1];
}

function test() {
    console.log(`popM([1, 2, 3, 4, 5]) = ${popM([1, 2, 3, 4, 5])}`);
    console.log(`popM([]) = ${popM([])}`);
    console.log(`popM({}) = ${popM({})}`);
}