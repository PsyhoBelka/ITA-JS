function meeting(rooms, needs) {
    const validator = new Validator();

    if (!validator.isArray(rooms) || !validator.isNumber(needs)) {
        return 'Game off';
    }

    let output = [];
    [...rooms].map(el => el[1] - el[0].length < 0 ? 0 : el[1] - el[0].length).reduce((acc, el) => {
        if (needs > 0) {
            output.push(needs > el ? el : needs);
            needs -= el;
        }
    }, 0);
    if (output.reduce((acc, el) => acc += el) < needs) {
        return 'Not enough!';
    }

    return output;
}

class Validator {
    isArray(array) {
        return Array.isArray(array) || array.length > 0;
    }

    isNumber(number) {
        return Number.isInteger(number) && number;
    }
}

function getRooms() {
    return Array.from([
        ['xxxx', 4],
        ['xxxxxx', 6],
        ['xxxxx', 8],
        ['', 5],
        ['xxxx', 5],
        ['xxx', 7],
        ['xx', 8],
    ]);
}

function test_4_1() {
    console.log(`meeting(getRooms()) = ${meeting(getRooms())}`);
    console.log(`meeting(getRooms(), 4) = ${meeting(getRooms(), 4)}`);
    console.log(`meeting(getRooms(), 10) = ${meeting(getRooms(), 10)}`);
    console.log(`meeting(getRooms(), 40) = ${meeting(getRooms(), 10)}`);
}