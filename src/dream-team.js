module.exports = function createDreamTeam(members) {

  if (members == null || typeof members[Symbol.iterator] !== 'function')
    return false; 

  return members
    .filter(el => typeof el === 'string')
    .map(el => el.trim()[0])
    .sort((a,b) => a.localeCompare(b))
    .join('')
    .toUpperCase();
};