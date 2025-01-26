const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();

const startServer = async () => {
	try {
		await connectDB();

		const app = express();

		app.set('view engine', 'ejs');
		app.set('views', './views');
		app.use(bodyParser.urlencoded({ extended: true }));  // Для обработки форм
		app.use(bodyParser.json());

		app.use('/api/todos', todoRoutes);

		app.get('/', async (req, res) => {
			const todos = await Todo.find();
			res.render('index', { todos });
		});

		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	} catch (error) {
		console.error('Failed to connect to MongoDB:', error);
		process.exit(1);
	}
};

startServer().catch((error) => {
	console.error('Failed to start the server:', error);
});
