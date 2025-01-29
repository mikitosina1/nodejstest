const Todo = require('../models/Todo');

// Get all todos
const getTodos = async (req, res) => {
	try {
		let todos = await Todo.find();
		res.render('index', { todos });
	} catch (error) {
		res.status(500).json({ message: 'Ошибка получения todos' });
	}
};

// Add new
const addTodo = async (req, res) => {
	let title = req.body.title;
	let description = req.body.description;
	let todo = new Todo({"title": title, "description": description});
	await todo.save();
	res.status(201).json(todo);
};

// Update
const updateTodo = async (req, res) => {
	let { id } = req.body;
	let { completed } = req.body;
	let todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
	res.json(todo);
};

// Delete
const deleteTodo = async (req, res) => {
	let { id } = req.body;
	await Todo.findByIdAndDelete(id);
	res.json({ message: 'Todo deleted' });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
