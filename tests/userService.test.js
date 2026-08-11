const userService = require('../src/services/userService');

describe('userService', () => {
  beforeEach(() => {
    userService.resetUsers();
  });

  test('creates a user with an id', () => {
    const user = userService.createUser({
      name: 'Asha',
      email: 'asha@example.com'
    });

    expect(user).toEqual({ id: 1, name: 'Asha', email: 'asha@example.com' });
  });

  test('assigns increasing ids to created users', () => {
    userService.createUser({ name: 'Asha', email: 'asha@example.com' });
    const second = userService.createUser({ name: 'Ravi', email: 'ravi@example.com' });

    expect(second.id).toBe(2);
  });

  test('retrieves a user by id', () => {
    const created = userService.createUser({ name: 'Asha', email: 'asha@example.com' });

    expect(userService.getUserById(created.id)).toEqual(created);
  });

  test('returns undefined for an unknown id', () => {
    expect(userService.getUserById(99)).toBeUndefined();
  });

  test('returns every created user', () => {
    const first = userService.createUser({ name: 'Asha', email: 'asha@example.com' });
    const second = userService.createUser({ name: 'Ravi', email: 'ravi@example.com' });

    expect(userService.getAllUsers()).toEqual([first, second]);
  });

  test('deletes a known user', () => {
    const user = userService.createUser({ name: 'Asha', email: 'asha@example.com' });

    expect(userService.deleteUser(user.id)).toBe(true);
    expect(userService.getUserById(user.id)).toBeUndefined();
  });

  test('does not delete an unknown user', () => {
    expect(userService.deleteUser(99)).toBe(false);
  });

  test('rejects an invalid user', () => {
    expect(() => userService.createUser({ name: 'Asha' }))
      .toThrow('A user must have a name and email');
  });

  test('allows duplicate emails in the baseline service', () => {
    userService.createUser({ name: 'Asha', email: 'shared@example.com' });
    const duplicate = userService.createUser({ name: 'Ravi', email: 'shared@example.com' });

    expect(duplicate.email).toBe('shared@example.com');
    expect(userService.getAllUsers()).toHaveLength(2);
  });
});
