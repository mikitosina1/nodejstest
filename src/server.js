const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();

const startServer = async () => {
	try {
		await connectDB();
		console.log('MongoDB connection established');

		const app = express();
		app.use(bodyParser.json());

		app.use('/api/todos', todoRoutes);

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
