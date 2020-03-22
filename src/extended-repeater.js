module.exports = function repeater(
    str, {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    }) {

    const add = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
    return (str + add + separator).repeat(repeatTimes).slice(0, -separator.length);
};
