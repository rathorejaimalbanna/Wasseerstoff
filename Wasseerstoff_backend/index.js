// Importing necessary modules
import Express from 'express';
import Moralis from 'moralis'; 
import cors from 'cors'; 
import { API_KEY } from './config.js';
import { ethRouter } from './router.js';

// Creating an Express application instance
const app = Express();

// Setting the port number for the server
const port = 3200;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(Express.json());

// Using the Ethereum router for handling Ethereum-related routes
app.use('/', ethRouter);

// Initializing Moralis with the API key and starting the server
Moralis.start({
  apiKey: API_KEY,
}).then(() => {
  // Starting the Express server
  app.listen(port, () => {
    console.log(`Server is live at port ${port}`); // Logging server start-up message
  });
});
