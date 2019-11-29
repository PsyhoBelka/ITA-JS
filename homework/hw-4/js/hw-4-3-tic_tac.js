function ticTac(board, size) {

    let v = fillArr(size);
    let h = fillArr(size);
    let d = fillArr(2);
    let drawCount = 0;

    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            board[i][k] === 1 ? board[i][k] = -1 : 0;
            board[i][k] === 2 ? board[i][k] = 1 : 0;
            board[i][k] === 0 ? drawCount++ : 0;
        }
    }

    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            const ix1 = size - (size - k);
            const ix2 = size - (k + 1);

            v[i] += board[i][ix1];
            h[i] += board[ix1][i];

            i === 0 ? d[i] += board[ix1][ix1] : 0;
            i === 1 ? d[i] += board[ix2][ix1] : 0;
        }
    }

    const find_1 = (x) => {
        return x === -size;
    };

    const find_2 = (x) => {
        return x === size;
    };

    if (h.find(find_1) || v.find(find_1) || d.find(find_1)) {
        return 1; //win p1
    } else if (h.find(find_2) || v.find(find_2) || d.find(find_2)) {
        return 2; //win p2
    } else if (drawCount !== 0) {
        return -1;
    } else {
        return 0;
    }
}

function fillArr(size) {
    return Array(size).fill(0);
}

function test_4_3() {
    console.log(ticTac([
        [0, 2, 1],
        [1, 0, 0],
        [0, 2, 2]
    ], 3));
    console.log(ticTac([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ], 3));
    console.log(ticTac([
        [1, 2, 1],
        [1, 0, 0],
        [1, 2, 2]
    ], 3));
    console.log(ticTac([
        [1, 2, 2],
        [2, 1, 1],
        [1, 2, 2]
    ], 3));
}
