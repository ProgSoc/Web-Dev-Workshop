const express = require('express') // Loading in the express library
const bodyParser = require('body-parser') // This lets us read data from post requests
const app = express() // Creating an app
const port = 3000 // Setting our port, 3000 is a default but feel free to change it

subjects = []; // This should be a database so it can persist between restarts, but we'll get to that later

function calculateWAM() {
	//TODO: Calculate WAM
	return 0;
}

app.use(express.static('src')); // This lets our app load in files that are in the src directory

// Code I found online, I don't understand it and neither should you
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

// This is a function that will be called when the user goes to the root of the url
app.get('/', (req, res) => {
  res.sendFile( __dirname + "/" + "index.html" ); // This will render the html as the webpage
})

// This request will retrieve a JSON object instead of a page
// Note: In the future when we learn about templating and page states, this logic will be moved to the / call
app.get('/subjects', (req, res) => {
	res.json({
		subjects: subjects,
		wam: calculateWAM()
	});
})

//This receives the subject data and adds it to the list
app.post('/subject', (req, res) => {
	console.log(req.body);
	//TODO: Validate Data
	subjects.push(req.body);
	res.sendStatus(200); // Lets the poster know the request succeeded
})

// This sets up the app to listen to any web traffic and run the requests
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})