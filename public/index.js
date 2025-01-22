const os = require('os');
// console.log(os);
const { MongoClient } = require('mongodb');
const uri = 'mongodb://mongodb:27017';
const client = new MongoClient(uri);

(async () => {
	try {
		await client.connect();
		console.log('Connected to MongoDB!');
	} finally {
		await client.close();
	}
})();
