const {
  capitalize,
  lowercase,
  reverse,
  truncate,
  isPalindrome
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

  describe('lowercase', () => {
    test('converts a mixed-case string to lowercase', () => {
      expect(lowercase('Hello World')).toBe('hello world');
    });

    test('returns an empty string unchanged', () => {
      expect(lowercase('')).toBe('');
    });

    test('leaves an already lowercase string unchanged', () => {
      expect(lowercase('tasks')).toBe('tasks');
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
});
