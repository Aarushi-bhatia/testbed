const { unique, sum, average, chunk } = require('../src/utils/arrayUtils');

describe('arrayUtils', () => {
  describe('unique', () => {
    test('returns each value once in first-seen order', () => {
      expect(unique(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    });

    test('returns an empty array for empty input', () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe('sum', () => {
    test('adds all numbers', () => {
      expect(sum([4, 8, 15, 16])).toBe(43);
    });

    test('returns zero for an empty array', () => {
      expect(sum([])).toBe(0);
    });
  });

  describe('average', () => {
    test('calculates the numeric average', () => {
      expect(average([2, 4, 6, 8])).toBe(5);
    });

    test('returns zero for an empty array', () => {
      expect(average([])).toBe(0);
    });
  });

  describe('chunk', () => {
    test('splits values into requested sizes', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('returns no chunks for an empty array', () => {
      expect(chunk([], 3)).toEqual([]);
    });

    test('rejects a zero size', () => {
      expect(() => chunk([1, 2], 0)).toThrow('Chunk size must be positive');
    });

    test('rejects a negative size', () => {
      expect(() => chunk([1, 2], -1)).toThrow('Chunk size must be positive');
    });
  });
});
