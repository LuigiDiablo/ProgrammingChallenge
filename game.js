

document.addEventListener('keydown', startGame);
let pointsPlayerA = 0;
let pointsPlayerB = 0;
let round = 1;

function startGame(e) {
    // window.alert(` ${e.code} and ${e.code}`);
    if(e.which == 32) { // check for space press
        document.getElementById('space').style.display = 'none';
        let startCase = document.getElementById('start-case');
        startCase.classList.remove('start-case');
    }
}

function nextGame() {
    // show necessary html elements
    const statsTag = document.getElementById('stats');
    const middleWrapperTag = document.getElementById('middle-wrapper');
    const areaBottomTag = document.getElementById('area-bottom');
    const selectionTag = document.getElementById('selection');
    const toStatsTag = document.getElementById('to-stats');
    
    statsTag.style.display = 'none';
    middleWrapperTag.style.display = 'block';
    areaBottomTag.style.display = 'block';
    selectionTag.style.display = 'block';
    toStatsTag.style.display = 'none';

    // reset all values
    const roundsTag = document.getElementById('rounds');
    const pointsPlayerATag = document.getElementById('points-player-a');
    const pointsPlayerBTag = document.getElementById('points-player-b');

    pointsPlayerA = 0;
    pointsPlayerB = 0;
    round = 1;

    roundsTag.innerHTML = `ROUND ${round}`;
    pointsPlayerATag.innerHTML = `${pointsPlayerA}P`;
    pointsPlayerBTag.innerHTML = `${pointsPlayerB}P`;
}

function play(selectedItem) {

    let choicePlayerB = Math.floor((Math.random() * 3) + 1);
    // choices:
    // 1 => rock
    // 2 => paper 
    // 3 => scissors
    if (choicePlayerB === 1) choicePlayerB = 'rock';
    if (choicePlayerB === 2) choicePlayerB = 'paper';
    if (choicePlayerB === 3) choicePlayerB = 'scissors';
    const pointsPlayerATag = document.getElementById('points-player-a');
    const pointsPlayerBTag = document.getElementById('points-player-b');
    const roundsTag = document.getElementById('rounds');
    const choicePlayerATag = document.getElementById('choice-player-a');
    const choicePlayerBTag = document.getElementById('choice-player-b');
    const selectionTag = document.getElementById('selection');
    const toStatsTag = document.getElementById('to-stats');
    let winningPlayer = 0;

    winningPlayer = fight(selectedItem, choicePlayerB);

    console.log(`PlayerA select: ${selectedItem}`);
    console.log(`PlayerB select: ${choicePlayerB}`);

    console.log(`winningPlayer: ${winningPlayer}`);

    if (winningPlayer === 1) {
        pointsPlayerA++;
        pointsPlayerATag.innerHTML = `${pointsPlayerA}P`;
    }
    if (winningPlayer === 2) {
        pointsPlayerB++;
        pointsPlayerBTag.innerHTML = `${pointsPlayerB}P`;
    }
    roundsTag.innerHTML = `ROUND ${round}`;
    if (round === 100) {
        selectionTag.style.display = 'none';
        // Prevent to click button with spam.
        setTimeout(() => {
            toStatsTag.style.display = 'flex';
        }, 1000);
    } else {
        round++;
    }

    choicePlayerATag.innerHTML = selectedItem;
    choicePlayerBTag.innerHTML = choicePlayerB;
}

function play100(selectedItem) {
    const neededRounds = 100 - round;
    var test;
    for(i = 0; i <= neededRounds; i++) {
        play(selectedItem);
        test = i;
    }
    console.log(`i = ${test}`);
}

function fight(x, y) {
    // 0 => tie
    // 1 => PlayerA win
    // 2 => PlayerB win
    let winningPlayer = 0;
    if (x === 'rock') {
        if (y === 'scissors') {
            // rock vs scissors => Player A win
            winningPlayer = 1;
        }
        if (y === 'paper') {
            // rock vs paper => Player B win
            winningPlayer = 2;
        }
    }
    if (x === 'paper') {
        if (y === 'rock') {
            // paper vs rock => Player A win
            winningPlayer = 1;
        }
        if (y === 'scissors') {
            // paper vs scissors => Player B win
            winningPlayer = 2;
        }
    }
    if (x === 'scissors') {
        if (y === 'paper') {
            // scissors vs paper => Player A win
            winningPlayer = 1;
        }
        if (y === 'rock') {
            // scissors vs rock => Player B win
            winningPlayer = 2;
        }
    }
    return winningPlayer;
}

function goToStats() {
    const statsTag = document.getElementById('stats');
    const middleWrapperTag = document.getElementById('middle-wrapper');
    const statsTextTag = document.getElementById('stats-text');
    const areaBottomTag = document.getElementById('area-bottom');

    const ties = round - pointsPlayerA - pointsPlayerB;
    let winner;

    if (pointsPlayerA > pointsPlayerB) winner = 'Winner is: Player A';
    if (pointsPlayerB > pointsPlayerA) winner = 'Winner is: Player B';
    if (pointsPlayerA === pointsPlayerB) winner = 'TIE! No winner';

    statsTag.style.display = 'block';
    middleWrapperTag.style.display = 'none';
    areaBottomTag.style.display = 'none';
    statsTextTag.innerHTML = `
    Player A wins ${pointsPlayerA} of ${round} games.<br>
    Player B wins ${pointsPlayerB} of ${round} games.<br>
    Tie: ${ties} of ${round} games.<br>
    ${winner}  (${pointsPlayerA} to ${pointsPlayerB} wins.)
    `
}

