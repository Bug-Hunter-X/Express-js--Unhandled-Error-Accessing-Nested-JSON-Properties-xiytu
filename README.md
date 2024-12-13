# Express.js: Unhandled Error Accessing Nested JSON Properties

This repository demonstrates a common error in Express.js applications when handling JSON request bodies: attempting to access nested properties without checking if they exist.  This can lead to unexpected crashes or errors.

## Bug
The `bug.js` file shows the problematic code. It attempts to access `req.body.address.city` without verifying if `req.body`, `req.body.address`, or `req.body.address.city` are defined.

## Solution
The `bugSolution.js` file demonstrates a robust solution using optional chaining and nullish coalescing to safely access the nested properties. This approach avoids errors by providing default values if the nested properties are missing.

## How to run
1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install the Express.js dependency.
4. Run `node bug.js` (for the buggy code) or `node bugSolution.js` (for the solution).
5. Send a POST request to `http://localhost:3000/data` with a JSON payload (e.g., using Postman or curl).  Try sending requests with and without the 'address' and 'city' properties to see the difference in behavior.