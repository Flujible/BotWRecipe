const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./recipeData.js");
const port = 3001;

app.use(express.static("src/assets"));
app.use(cors());

app.get("/api/recipes", (req, res) => res.send(data));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
