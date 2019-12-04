function quipi(str) {
    let regexStr = /[@~]+|[\/*+\-\(\)]/g
    let regexNum = /@+~+|@+|~+/g
    let regexNoOp = /[\/\*\+\-\(\)]/g
    let numbers = str.match(regexStr)
    let num = numbers[0]

    function convertToNormal(num) {
        num = num.match(regexNum).map((x, i, arr) => {
            if (x.match(/@+~/g) !== null) {
                return (x.replace(/~+/g, '~').length - 1) * 10 ** (arr.length - i - 1)
            } else {
                if (x.includes('~')) {
                    return x.replace(/~/g, 0)
                } else {
                    return x.length
                }
            }
        })
        return num
    }

    let normNums = []
    numbers.forEach(x => {
        if (x !== '*' || x !== '/' || x !== '+' || x !== '-') {
            !x.match(regexNoOp) ? normNums.push(convertToNormal(x)) : 0;
        }
    })

    normNums = normNums.map(x => {
        return x.reduce((ac, cur) => ac + cur, 0)
    })

    let i = 0;
    let k = 0;
    while (i < numbers.length) {
        if (!'/*-+()'.includes(numbers[i])) {
            numbers[i] = normNums[k];
            i++;
            k++;
        } else {
            i++;
        }
    }
    return new Function(`return ${numbers.join('')}`)
}

let str = '@@@@~~@@@~@@*(@@@-@@@)+@~@+@@@@/@@'
let str2 = '@~@@+@@~~'

console.log(str)
console.log(quipi(str))
console.log(f = quipi(str)())