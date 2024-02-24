# Code Translator, Optimizer, and Reviewer

This project is a full-stack application that allows users to translate, optimize, and review their code. It uses a React front-end and an Express.js back-end, and communicates with the Google Generative AI.

## Prerequisites

- Node.js
- npm

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repo:

bash
git clone https://github.com/yourusername/your-repo-name.git



Install NPM packages in both the client and server directories:
cd client
npm install

cd server
npm install

Create a .env file in the root directory of the server:

Open the .env file and add your API key:
API_KEY=your_api_key_here

Replace your_api_key_here with your actual API key.


Usage
Start the server:
cd server
node 


The server will start on the port specified in the PORT environment variable, or port 3000 if PORT is not set.

Start the client:
cd client
npm start

The client will start on port 3000, or another port if 3000 is in use.

