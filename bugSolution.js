const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Safely access nested properties using optional chaining and nullish coalescing
  const city = data?.address?.city ?? 'Unknown'; 
  res.send(`City: ${city}`);
});
app.listen(3000, () => console.log('Server listening on port 3000'));