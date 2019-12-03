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