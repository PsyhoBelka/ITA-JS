function nextVersion(version) {
    if (!version || version.length === 0) {
        return 'Bad version!';
    }

    let arr = [...version];
    let out = [];
    let inc = 1;

    while (arr.length > 0) {
        let last = arr.pop();
        if (last.toString() !== '.') {
            last = Number.parseInt(last.toString());
            last = inc === 1 ? last + inc : last;
            out.unshift(last >= 10 ? 0 : last);
            inc = last >= 10 ? 1 : 0;
        } else {
            out.unshift(last);
        }
    }
    if (inc === 1) {
        out.unshift(1, '.');
    }

    return out.join('');
}

function test_4_2() {
    console.log(nextVersion());
    console.log(nextVersion('0'));
    console.log(nextVersion('1'));
    console.log(nextVersion('0.9'));
    console.log(nextVersion('1.2.3.8'));
    console.log(nextVersion('1.2.3.9'));
    console.log(nextVersion('1.9.3.8'));
    console.log(nextVersion('1.2.9.9'));
    console.log(nextVersion('1.9.9.9'));
    console.log(nextVersion('9.9.9.9'));
}