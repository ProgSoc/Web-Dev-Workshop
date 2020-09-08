const express = require('express') // Loading in the express library
const app = express() // Creating an app
const port = 3000 // Setting our port, 3000 is a default but feel free to change it

app.use(express.static('src')); // This lets our app load in files that are in the src directory

// This is a function that will be called when the user goes to the root of the url
app.get('/', (req, res) => {
  res.sendFile( __dirname + "/" + "index.html" ); // This will render the html as the webpage
})

// This request will retrieve a JSON object instead of a page
app.get('/example', (req, res) => {
	res.json({example: 1});
})

// This sets up the app to listen to any web traffic and run the requests
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})