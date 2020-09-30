const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// CONNECT DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// DEFINE ROUTES
app.use('/api/auth', require("./routes/auth"))
app.use('/api/user', require("./routes/user"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
