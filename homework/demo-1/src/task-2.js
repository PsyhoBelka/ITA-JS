function checkEnvelops(env1, env2) {

    switch (typeof env1) {
        case 'number':
        case 'function':
        case 'boolean':
        case 'string':
        case 'symbol':
        case 'undefined':
            return help;
    }

    if (!(
        env1.hasOwnProperty(a) ||
        env1.hasOwnProperty(b) ||
        env2.hasOwnProperty(c) ||
        env2.hasOwnProperty(d)
    )) {
        return help;
    }

    if (
        (env1.a < env2.c && env1.b < env2.d) ||
        (env1.a < env2.d && env1.b < env2.c)
    ) {

    }
}

function envSquare(a, b) {
    return a * b;
}

function help() {

}