module.exports = function countCats(matrix) {
  return (matrix || [])
    .reduce((flatten, el) => flatten.concat(el), [])
    .filter(el => el === '^^')
    .length;
};
