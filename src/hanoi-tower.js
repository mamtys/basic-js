module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = 2**disksNumber - 1;
    //turns * 3600 / turnsSpeed will not pass 
    const seconds = turns / (turnsSpeed / 3600);
    return {turns, seconds}
}