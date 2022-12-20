const express = require("express");
require("dotenv").config();
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");
const app = express();

connectDB();

app.use(express.json());
app.use('/api/products', productRoutes);

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
});