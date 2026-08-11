const taskService = require('../src/services/taskService');

describe('taskService', () => {
  beforeEach(() => {
    taskService.resetTasks();
  });

  test('creates an incomplete task with an id', () => {
    const task = taskService.createTask(4, 'Write tests');

    expect(task).toEqual({
      id: 1,
      userId: 4,
      title: 'Write tests',
      completed: false
    });
  });

  test('retrieves a task by id', () => {
    const created = taskService.createTask(4, 'Write tests');

    expect(taskService.getTaskById(created.id)).toEqual(created);
  });

  test('returns undefined for an unknown task id', () => {
    expect(taskService.getTaskById(99)).toBeUndefined();
  });

  test('returns only the tasks assigned to a user', () => {
    const first = taskService.createTask(4, 'Write tests');
    taskService.createTask(5, 'Review tests');
    const second = taskService.createTask(4, 'Run tests');

    expect(taskService.getTasksForUser(4)).toEqual([first, second]);
  });

  test('returns an empty array when a user has no tasks', () => {
    taskService.createTask(4, 'Write tests');

    expect(taskService.getTasksForUser(8)).toEqual([]);
  });

  test('marks an existing task complete', () => {
    const task = taskService.createTask(4, 'Write tests');

    expect(taskService.completeTask(task.id)).toEqual({ ...task, completed: true });
    expect(taskService.getTaskById(task.id).completed).toBe(true);
  });

  test('returns undefined when completing an unknown task', () => {
    expect(taskService.completeTask(99)).toBeUndefined();
  });

  test('deletes an existing task', () => {
    const task = taskService.createTask(4, 'Write tests');

    expect(taskService.deleteTask(task.id)).toBe(true);
    expect(taskService.getTaskById(task.id)).toBeUndefined();
  });

  test('returns false when deleting an unknown task', () => {
    expect(taskService.deleteTask(99)).toBe(false);
  });

  test('permits an empty title in the baseline service', () => {
    expect(taskService.createTask(4, '').title).toBe('');
  });

  test('permits a task for an unverified user id in the baseline service', () => {
    expect(taskService.createTask(999, 'Orphan task').userId).toBe(999);
  });
});
