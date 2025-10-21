const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const valid = members
    .filter((el) => typeof el === 'string')
    .map((el) => el.trim())
    .filter((el) => el.length > 0);

  const result = valid
    .map((el) => el[0].toUpperCase())
    .sort()
    .join('');

  return result || false;
}

module.exports = {
  createDreamTeam,
};
