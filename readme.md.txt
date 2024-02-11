# Ethexplorer

Ethexplorer is a blockchain explorer application for the Ethereum network. It allows users to explore Ethereum addresses, transactions, and blocks.

#Youtube vedio url :

http://

# Technology Stack

# Frontend
- React.js: Front-end library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- Moment.js: Library for parsing, validating, manipulating, and displaying dates and times.
- Bootstrap: Front-end framework for designing responsive and mobile-first websites.

# Backend
- Express.js: Web application framework for Node.js.
- Moralis: API service for interacting with the Ethereum blockchain.

# Steps to Run the Project

1. Clone the repository:


2. Navigate to the project directory:


3. Install dependencies for both frontend and backend:


4. Start the backend server:


4. Start the backend server:


6. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

# Features

- Display live information about Ethereum, including price, market cap, transactions, and latest blocks.
- Search for Ethereum addresses, transactions, blocks, tokens, or domain names.
- Set up alerts for specific Ethereum addresses.
- Allow users to specify different notification methods (e.g., email, SMS, push notification) for each alert.
- Show all details about transactions, including logs, internal transactions, and token prices.

# Project Structure

ethexplorer/
│
├── frontend/ # Frontend directory
│ ├── src/ # Source code for frontend
│ ├── public/ # Public assets for frontend
│ ├── package.json # Frontend dependencies and scripts
│ └── ...
│
├── backend/ # Backend directory
│ ├── src/ # Source code for backend
│ ├── config.js # Configuration file for backend (e.g., API keys)
│ ├── package.json # Backend dependencies and scripts
│ └── ...
│
└── README.md # Project README file


## Approach

The project follows a full-stack approach using React.js for the frontend and Express.js for the backend. The frontend communicates with the backend server to fetch data from the Ethereum blockchain using the Moralis API service. Clean code practices, modular design, and separation of concerns are followed to ensure maintainability and scalability of the project.

#Youtube vedio url :

http://