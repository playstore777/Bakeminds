const alarmClock = (setTime, timeToSet) => {
    //accessing Hours
    let setTimeHh = Number(setTime.split(":")[0]);
    let timeToSetHh = Number(timeToSet.split(":")[0]);

    //accessing Minutes
    let setTimeMm = Number(setTime.split(":")[1]);
    let timeToSetMm = Number(timeToSet.split(":")[1]);

    return calculateMoves(setTimeHh, setTimeMm, timeToSetHh, timeToSetMm);
};

const moveSetter = (totalTime, setTimeA, timeToSetA) => {
    let move = 0;

    if (
        calculateTime(totalTime, setTimeA, timeToSetA) <
        calculateTime(timeToSetA, setTimeA)
    ) {
        move += calculateTime(totalTime, setTimeA, timeToSetA);
    } else {
        move += calculateTime(timeToSetA, setTimeA);
    }
    console.log("move : ", move);

    return move;
};

const calculateTime = (from, to, extra) => {
    if (extra) {
        return Math.abs(from - to) + extra;
    }
    return Math.abs(from - to);
};

const calculateMoves = (setTimeHh, setTimeMm, timeToSetHh, timeToSetMm) => {
    let moves = 0;

    moves += moveSetter(24, setTimeHh, timeToSetHh);
    moves += moveSetter(60, setTimeMm, timeToSetMm);

    return moves;
};

console.log(alarmClock("07:00", "08:30"));
console.log(alarmClock("07:10", "08:30"));

console.log(alarmClock("23:45", "08:00"));
console.log(alarmClock("23:45", "08:10"));
console.log(alarmClock("23:00", "08:10"));
