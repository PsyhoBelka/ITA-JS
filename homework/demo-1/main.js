function chessBoard(height, width, symbol) {
    const separator = ' ';
    if (!height || !width || !symbol) {
        return help;
    }

    if (height < 0 || width < 0) {
        return help;
    }

    let out = '';
    for (let i = 0; i < height; i++) {
        for (let k = 0; k <= width; k++) {
            out += symbol;
            if (k === width) {
                out += '\n'
            } else {
                out += ' ';
            }
        }
    }

    return out;
}

function help() {
    return {
        status: 'failed',
        reason: 'Please input like bla-bla-bla...',
    };
}

console.log(chessBoard(4, 4, '*'));