const { validateUser } = require('../validators/userValidator');

let users = [];
let nextUserId = 1;

/**
 * Create and store a user in this process's in-memory collection.
 *
 * @param {Object} user user details
 * @returns {Object} newly stored user
 * @throws {Error} when the required user fields are missing
 */
function createUser(user) {
  if (!validateUser(user)) {
    throw new Error('A user must have a name and email');
  }

  const createdUser = {
    id: nextUserId,
    name: user.name,
    email: user.email
  };

  nextUserId += 1;
  users.push(createdUser);
  return createdUser;
}

/**
 * Find a stored user by numeric identifier.
 *
 * @param {number} id user identifier
 * @returns {Object|undefined} matching user, if any
 */
function getUserById(id) {
  return users.find((user) => user.id === id);
}

/**
 * Return all stored users in creation order.
 *
 * @returns {Object[]} users
 */
function getAllUsers() {
  return users;
}

/**
 * Remove a user with the supplied identifier.
 *
 * @param {number} id user identifier
 * @returns {boolean} whether a user was removed
 */
function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
}

/**
 * Clear in-memory state. This is intended for tests and local experimentation.
 *
 * @returns {void}
 */
function resetUsers() {
  users = [];
  nextUserId = 1;
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  deleteUser,
  resetUsers
};
