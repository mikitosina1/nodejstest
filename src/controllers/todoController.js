const Todo = require('../models/Todo');

// Get all todos
const getTodos = async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
};

// Add a new todo
const addTodo = async (req, res) => {
	const { title } = req.body;
	const todo = new Todo({ title });
	await todo.save();
	res.status(201).json(todo);
};

// Update a todo
const updateTodo = async (req, res) => {
	const { id } = req.params;
	const { completed } = req.body;
	const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
	res.json(todo);
};

// Delete a todo
const deleteTodo = async (req, res) => {
	const { id } = req.params;
	await Todo.findByIdAndDelete(id);
	res.json({ message: 'Todo deleted' });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
