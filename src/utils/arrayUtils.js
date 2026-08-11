/**
 * Return each distinct value from an array, keeping its first occurrence.
 *
 * @param {Array} arr source values
 * @returns {Array} unique values
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Add every numeric value in an array.
 *
 * @param {number[]} arr numeric values
 * @returns {number} total
 */
function sum(arr) {
  return arr.reduce((total, value) => total + value, 0);
}

/**
 * Calculate the average of an array of numeric values.
 *
 * @param {number[]} arr numeric values
 * @returns {number} average, or zero for no values
 */
function average(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return sum(arr) / arr.length;
}

/**
 * Split an array into equally sized groups except for a possible final group.
 *
 * @param {Array} arr source values
 * @param {number} size number of items per group
 * @returns {Array[]} groups of values
 * @throws {Error} when size is not positive
 */
function chunk(arr, size) {
  if (size <= 0) {
    throw new Error('Chunk size must be positive');
  }

  const chunks = [];

  for (let index = 0; index < arr.length; index += size) {
    chunks.push(arr.slice(index, index + size));
  }

  return chunks;
}

module.exports = {
  unique,
  sum,
  average,
  chunk
};
