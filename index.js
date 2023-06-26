// server.js (backend)
const bodyParser = require('body-parser');  
require('dotenv').config();
const express = require('express');
const app = express();


const { PORT, CORS_ORIGIN } = process.env;
const cors = require('cors');

const usersRoutes = require("./routes/users-routes");
const teachersRoutes = require("./routes/teachers-routes");
const uploadImageRoutes = require("./routes/upload-image-routes");


app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/teachers", teachersRoutes);
app.use("/upload", uploadImageRoutes);

app.use(bodyParser.json());
app.use(cors());


app.get('/', (_req, res) => {
  res.send("Welcome to TeachMe API");
});  

// Start the server  

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });  
  
  

