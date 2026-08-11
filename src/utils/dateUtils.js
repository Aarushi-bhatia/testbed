const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Determine whether a date falls on Saturday or Sunday in local time.
 *
 * @param {Date} date date to inspect
 * @returns {boolean} whether the date is a weekend day
 */
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Return the whole-day difference between two date values.
 *
 * @param {Date} date1 first date
 * @param {Date} date2 second date
 * @returns {number} absolute number of full days between dates
 */
function daysBetween(date1, date2) {
  const difference = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(difference / MILLISECONDS_PER_DAY);
}

/**
 * Format a date using its local calendar year, month, and day.
 *
 * @param {Date} date date to format
 * @returns {string} date in YYYY-MM-DD form
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

module.exports = {
  isWeekend,
  daysBetween,
  formatDate
};
