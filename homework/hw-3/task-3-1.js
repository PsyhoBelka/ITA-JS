function fillM(arr, value, start = 0, end = arr.length) {
    if (!value) {
        return arr;
    }
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    if (Array.isArray(arr)) {
        for (let i = start; i < end; i++) {
            //FIXME? not specified!
            if (i > arr.length - 1) {
                break;
            }
            arr[i] = value;
        }
    } else {
        for (let i = start; i < end; i++) {
            arr[i] = arr;
        }
    }

    return arr;
}

function test() {
    console.log(`fillM([1, 2, 3, 4, 5]) = ${fillM([1, 2, 3, 4, 5])}`);
    console.log(`fillM([1, 2, 3, 4, 5], 3) = ${fillM([1, 2, 3, 4, 5], 3)}`);
    console.log(`fillM([1, 2, 3, 4, 5], 3, 2) = ${fillM([1, 2, 3, 4, 5], 3, 2)}`);
    console.log(`fillM([1, 2, 3, 4, 5], 3, 2, 7) = ${fillM([1, 2, 3, 4, 5], 3, 2, 7)}`);
    console.log(`fillM([1, 2, 3, 4, 5], 3, -2, 4) = ${fillM([1, 2, 3, 4, 5], 3, -2, 4)}`);
    console.log(`fillM([1, 2, 3, 4, 5], 3, -2, -4) = ${fillM([1, 2, 3, 4, 5], 3, -2, -4)}`);
}