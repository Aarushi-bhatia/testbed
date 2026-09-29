const {
  capitalize,
  reverse,
  truncate,
  isPalindrome,
  lowercase
} = require('../src/utils/stringUtils');

describe('stringUtils', () => {
  describe('capitalize', () => {
    test('capitalizes only the first character', () => {
      expect(capitalize('task manager')).toBe('Task manager');
    });

    test('returns an empty string unchanged', () => {
      expect(capitalize('')).toBe('');
    });

    test('preserves the remaining characters', () => {
      expect(capitalize('tASK')).toBe('TASK');
    });
  });

  describe('reverse', () => {
    test('reverses a word', () => {
      expect(reverse('pilot')).toBe('tolip');
    });

    test('reverses an empty string', () => {
      expect(reverse('')).toBe('');
    });
  });

  describe('truncate', () => {
    test('adds an ellipsis to a long string', () => {
      expect(truncate('automated agent', 9)).toBe('automated...');
    });

    test('does not truncate a string at the limit', () => {
      expect(truncate('task', 4)).toBe('task');
    });

    test('does not truncate a shorter string', () => {
      expect(truncate('task', 10)).toBe('task');
    });
  });

  describe('isPalindrome', () => {
    test('returns true for a matching reverse', () => {
      expect(isPalindrome('level')).toBe(true);
    });

    test('returns false for a non-palindrome', () => {
      expect(isPalindrome('tasks')).toBe(false);
    });

    test('keeps the baseline comparison case-sensitive', () => {
      expect(isPalindrome('Level')).toBe(false);
    });

    test('keeps spaces in the baseline comparison', () => {
      expect(isPalindrome('never odd or even')).toBe(false);
    });
  });

  describe('lowercase', () => {
    test('converts mixed case to lowercase', () => {
      expect(lowercase('Hello World')).toBe('hello world');
    });

    test('converts all caps to lowercase', () => {
      expect(lowercase('HELLO')).toBe('hello');
    });

    test('returns an empty string unchanged', () => {
      expect(lowercase('')).toBe('');
    });

    test('returns already lowercase strings unchanged', () => {
      expect(lowercase('hello')).toBe('hello');
    });

    test('preserves numbers and special characters', () => {
      expect(lowercase('ABC123!@#')).toBe('abc123!@#');
    });
  });
});