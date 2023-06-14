require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const cors = require('cors');


app.get('/', (_req, res) => {
    res.send("Welcome to TeachMe API");
  });
  

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
  