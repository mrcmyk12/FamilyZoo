const express = require("express");
const morgan = require("morgan");
const homeRouter = require('./routes/homeRouter');
const addRouter = require('./routes/addRouter');
const infoRouter = require('./routes/infoRouter');
const updateRouter = require('./routes/updateRouter');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/home', homeRouter)
app.use('/add', addRouter)
app.use('/info/animalId', infoRouter)
app.use('/update/:animalId', updateRouter)


app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});