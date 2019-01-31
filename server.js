const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const data = require('./recipeData.js');
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(`${__dirname}/src/assets`));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) =>
	res.send(path.join(__dirname, 'build', 'index.html')),
);
app.get('/api/recipes', (req, res) => res.send(data));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
