let tasks = [];
let nextTaskId = 1;

/**
 * Create and store a task. Task titles and user IDs are accepted as supplied.
 *
 * @param {number} userId owner identifier
 * @param {string} title task title
 * @returns {Object} newly stored task
 */
function createTask(userId, title) {
  const createdTask = {
    id: nextTaskId,
    userId,
    title,
    completed: false
  };

  nextTaskId += 1;
  tasks.push(createdTask);
  return createdTask;
}

/**
 * Find a task by identifier.
 *
 * @param {number} id task identifier
 * @returns {Object|undefined} matching task, if any
 */
function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}

/**
 * Return every task assigned to one user.
 *
 * @param {number} userId owner identifier
 * @returns {Object[]} tasks for that user
 */
function getTasksForUser(userId) {
  return tasks.filter((task) => task.userId === userId);
}

/**
 * Mark an existing task complete.
 *
 * @param {number} id task identifier
 * @returns {Object|undefined} completed task, if found
 */
function completeTask(id) {
  const task = getTaskById(id);

  if (!task) {
    return undefined;
  }

  task.completed = true;
  return task;
}

/**
 * Delete one task from the in-memory collection.
 *
 * @param {number} id task identifier
 * @returns {boolean} whether a task was removed
 */
function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

/**
 * Clear in-memory state. This is intended for tests and local experimentation.
 *
 * @returns {void}
 */
function resetTasks() {
  tasks = [];
  nextTaskId = 1;
}

module.exports = {
  createTask,
  getTaskById,
  getTasksForUser,
  completeTask,
  deleteTask,
  resetTasks
};
