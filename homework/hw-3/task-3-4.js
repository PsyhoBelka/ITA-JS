function reverseM(arr) {
    if (arr.length === 0) {
        return [];
    }
    let i = 0, k = arr.length;
    while (i < k) {
        [arr[i], arr[k]] = [arr[k], arr[i]];
        i++;
        k--;
    }
}

function test() {
    console.log(`reverseM([1, 2, 3, 4, 5]) = ${reverseM([1, 2, 3, 4, 5])}`);
    console.log(`reverseM([1, 2, 3, 4]) = ${reverseM([1, 2, 3, 4])}`);
    console.log(`reverseM([1]) = ${reverseM([1])}`);
    console.log(`reverseM([]) = ${reverseM([])}`);
}