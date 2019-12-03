let str = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';
console.log(str);
b = str.split(/[.!?]/);
console.log(b);
c = b.map(x => {
    return x.toString()
        .replace(/[,"'`]/g, '').trim()
}).filter(x => {
    return x.length > 0
});
console.log(c);


let str = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'
console.log(str)
b = str.split(/\.|!|\?/)
console.log(b)
c = b.map(x => {
    return x.toString()
        .replace(/,|"|'|`/g, '').trim()
}).filter(x => {
    return x.length > 0
})
console.log(c)
d = []
i = 0;
stop = false;
while (!stop) {
    d.push(c[i]);
    i < c.length ? i += c[i].length : stop = true;
    i = c[i.length];
}
console.log(d);


let str = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.\n' +
    'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'
// console.log(str)
let b = str.split(/\.|!|\?/)
// console.log(b)
let c = b.map(x => {
    return x.toString()
        .replace(/,|"|'|`/g, '').trim()
}).filter(x => {
    return x.length > 0
})
console.log(c.length)
let d = c.join(' ')
console.log(d)
let i = 0
let e = []
let stop = false;
while (!stop) {
    console.log(i, c.length)
    e.push(c[i].split(' '))
    e = e.flat()
    console.log(e)
    if (i > c.length) {
        stop = true
        console.log(stop)
    } else {
        i += e.length + 1
    }

}

console.log(e.flat());