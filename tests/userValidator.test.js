const { validateUser } = require('../src/validators/userValidator');

describe('validateUser', () => {
  test('accepts a user with a name and email', () => {
    expect(validateUser({ name: 'Asha', email: 'asha@example.com' })).toBe(true);
  });

  test('rejects a user without a name', () => {
    expect(validateUser({ email: 'asha@example.com' })).toBe(false);
  });

  test('rejects a user without an email', () => {
    expect(validateUser({ name: 'Asha' })).toBe(false);
  });

  test('rejects a missing user object', () => {
    expect(validateUser()).toBe(false);
  });

  test('only requires the baseline presence of an email', () => {
    expect(validateUser({ name: 'Asha', email: 'not-formatted' })).toBe(true);
  });
});
