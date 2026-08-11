const {
  isWeekend,
  daysBetween,
  formatDate
} = require('../src/utils/dateUtils');

describe('dateUtils', () => {
  describe('isWeekend', () => {
    test('recognizes Saturday', () => {
      expect(isWeekend(new Date(2024, 5, 8))).toBe(true);
    });

    test('recognizes Sunday', () => {
      expect(isWeekend(new Date(2024, 5, 9))).toBe(true);
    });

    test('returns false for a weekday', () => {
      expect(isWeekend(new Date(2024, 5, 10))).toBe(false);
    });
  });

  describe('daysBetween', () => {
    test('returns the number of complete days', () => {
      const start = new Date(2024, 0, 1, 12);
      const end = new Date(2024, 0, 4, 12);

      expect(daysBetween(start, end)).toBe(3);
    });

    test('uses an absolute difference', () => {
      expect(daysBetween(new Date(2024, 0, 10), new Date(2024, 0, 7))).toBe(3);
    });

    test('rounds partial days down', () => {
      const morning = new Date(2024, 0, 1, 8);
      const evening = new Date(2024, 0, 2, 7);

      expect(daysBetween(morning, evening)).toBe(0);
    });
  });

  describe('formatDate', () => {
    test('formats a date with zero-padded month and day', () => {
      expect(formatDate(new Date(2024, 0, 5))).toBe('2024-01-05');
    });

    test('formats double-digit month and day', () => {
      expect(formatDate(new Date(2024, 10, 15))).toBe('2024-11-15');
    });
  });
});
