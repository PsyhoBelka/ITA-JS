function pushM(arr1) {
    const args = [...arguments];

    for (let i = 1; i < args.length; i++) {
        arr1 = [...arr1, args[i]];
    }

    return arr1.length;
}

function test() {
    console.log(`pushM([1, 2], "333") = ${pushM([1, 2], "333")}`);
    console.log(`pushM([1, 2], [3, 4, 5]) = ${pushM([1, 2], [3, 4, 5])}`);
    console.log(`pushM("123", [4, 5], 6, 7) = ${pushM("123", [4, 5], 6, 7)}`);
    console.log(`pushM([], [4, 5], 6, 7) = ${pushM([], [4, 5], 6, 7)}`);
}