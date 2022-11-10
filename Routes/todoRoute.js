const router = require('express').Router();
const TodoList = require('../view/TodoList.jsx');
const { Todo } = require('../db/models');

router.get('/', async (req, res) => {
  const todos = await Todo.findAll({ raw: true });
  res.renderComponent(TodoList, { title: 'Todo list', todos });
});

router.post('/', async (req, res) => {
  const { title, url, important } = req.body;
  const data = await Todo.create({
    userId: null, title, url, important,
  });

  res.json(data);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await Todo.destroy({ where: { id } });
  res.json(data);
});

module.exports = router;
