const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  let time;

  try {
    time = Date.prototype.getTime.call(date);
  } catch {
    throw new Error("Invalid date!");
  }

  if (Number.isNaN(time)) {
    throw new Error("Invalid date!");
  }

  const month = Date.prototype.getMonth.call(date);

  const seasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];

  return seasons[month];
}

module.exports = {
  getSeason,
};
