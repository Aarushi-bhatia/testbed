/**
 * Check that a user includes the two fields required by the task manager.
 * This intentionally checks presence only; formatting is left to callers.
 *
 * @param {Object} user user candidate
 * @returns {boolean} whether the candidate has a name and email
 */
function validateUser(user) {
  return Boolean(user && user.name && user.email);
}

module.exports = {
  validateUser
};
