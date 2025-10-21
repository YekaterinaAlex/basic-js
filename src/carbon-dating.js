const { act } = require('react');
const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  sampleActivity = sampleActivity.trim();
  if (sampleActivity === '') return false;
  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity >= MODERN_ACTIVITY) {
    return false;
  }
  const λ = Math.LN2 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / activity) / λ;
  const result = Math.ceil(t);
  return result;
}

module.exports = {
  dateSample,
};
