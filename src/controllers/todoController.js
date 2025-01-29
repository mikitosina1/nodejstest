const Todo = require('../models/Todo');

// Get all todos
const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.render('index', { todos });
	} catch (error) {
		res.status(500).json({ message: 'Ошибка получения todos' });
	}
};

// Add new
const addTodo = async (req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const todo = new Todo({"title": title, "description": description});
	await todo.save();
	res.status(201).json(todo);
};

// Update
const updateTodo = async (req, res) => {
	const { id } = req.params;
	const { completed } = req.body;
	const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
	res.json(todo);
};

// Delete
const deleteTodo = async (req, res) => {
	const { id } = req.params;
	await Todo.findByIdAndDelete(id);
	res.json({ message: 'Todo deleted' });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
