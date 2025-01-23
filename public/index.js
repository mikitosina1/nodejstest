const express = require('express');
const app = express();
// console.log(app);

app.get('/', (req, res) => {
	res.send('Hello, DDEV and Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
