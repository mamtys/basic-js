module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!date instanceof Date) {
    throw new Error('wrong argument');
  }
  if (Object.prototype.hasOwnProperty.call(date, 'getMonth')) {
    throw new Error('wrong argument');
  }

  const month = date.getMonth();
  if (month >= 11 || month <=1) {
    return 'winter';
  }
  if (month >= 8) {
    return 'autumn'
  }
  if (month >= 5) {
    return 'summer';
  }
  if (month >=2) {
    return 'spring';
  }
};
