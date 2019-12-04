function decode(str) {
    let sentences = str
        .split(/[.!?]/)
        .map(x => {
            return x
                .toString()
                .replace(/[,"'`]/g, '')
                .trim()
        })
        .filter(x => {
            return x.length > 0
        });
    let i = 0;
    let codePhrase = [];
    let sentenseDiv = [];
    let stop = false;
    while (!stop) {
        codePhrase.push(sentences[i].split(' '));
        codePhrase = codePhrase.flat();
        sentenseDiv.push(i);
        i += codePhrase.length + 1;
        i > sentences.length ? stop = true : 0;
    }
    let res = [];
    let j = 1;
    let k = 0;
    while (j < sentences.length) {
        if (sentences[j].includes(codePhrase[k])) {
            j++;
        } else {
            let decodedWord = sentences[j].split(' ')[codePhrase[k].length - 1];
            if (j === sentenseDiv[0] + 1) {
                res.push('.');
                decodedWord = decodedWord[0].toUpperCase() + decodedWord.slice(1);
                sentenseDiv.shift();
            }
            res.push(decodedWord);
            k++;
            j++;
        }
    }
    res.push('.');
    return res.join(' ').replace(/\s\./g, '.').replace(/^\.\s/, '');
}

console.log(decode('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse.' +
    ' The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her.' +
    ' Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. ' +
    'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'));