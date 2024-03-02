//Import the express package module here
const express = require('express'); 
//Create an instance to initialize express
const app = express(); 
//Define the port number
const  port = 3000; 
//Define a GET request handler
app.get('/', (req, res) => { 
  // Create and send the response to the GET endpoint
  res.send('Hello Kubernetes! Please Run Me Tester!');
});
//Run the server on the port defined above
app.listen(port, () => { 
  //Add a log when the server starts
  console.log(`Server started on port ${port}`); 
});
