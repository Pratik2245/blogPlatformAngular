require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes')
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("/uploads"))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDb connected successfully ');
    }).catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Server Working");
});
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `Server running on port ${process.env.PORT}`
    );
})