var teamA;
var teamB;

function start(log) {
    teamA = new Array(11);
    teamB = new Array(11);

    parse(log);
}

function parse(entries) {
    // console.log(entries[0]);
    for (i = 0; i < entries.length; i++) {
        // console.log(entries[i]);
        entry = entries[i];

        teamSym = entry.charAt(0);
        teamNum = entry.match(/\d+/g)[0];
        colorSym = entry.charAt(entry.length - 1);

        if (teamSym == 'A')
            addCard(teamA, teamNum, colorSym);
        else
            addCard(teamB, teamNum, colorSym);

        if (teamA.length < 7 || teamB.length < 7) {
            console.log("Game over!" + whoWin());
            break;
        }
        whoWin();
    }
    console.log('[' + teamA.length + ', ' + teamB.length + ']');
}

function addCard(team, number, color) {
    // console.log(team, number, color);
    if (team.length <= 7) return;

    switch (color) {
        case 'Y':
            if (team[number] == 'Y') {
                team.splice(number, 1);
            } else {
                team[number] = color;
            }
            break;
        case 'R':
            team.splice(number, 1);
            break;
    }

    return team;
}

function whoWin() {
    if (teamA.length < 7)
        return 'TeamB win!';
    if (teamB.length < 7)
        return 'TeamA win!';
    return 'Draw!'
}


start(["A3Y", "B6R"]);
start(["A3Y", "A3Y"]);
start(["B1R", "B2R", "B3R", "B4R", "B5R"]);
start(["A3Y", "B6R", "A2Y", "B4Y", "A8Y", "B1R", "B9R", "B2R", "B7R", "B10R"]);
start([]);
