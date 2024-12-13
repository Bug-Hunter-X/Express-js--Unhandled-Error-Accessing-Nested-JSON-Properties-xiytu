const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Accessing nested properties without checking for existence
  const city = data.address.city; 
  //Error occurs if address or city is undefined
  res.send(`City: ${city}`);
});
app.listen(3000, () => console.log('Server listening on port 3000'));