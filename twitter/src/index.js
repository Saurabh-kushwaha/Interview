const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const userController = require("../src/controler/user.controller");
const PORT = 8000;
let DB_URL = "mongodb://127.0.0.1:27017/twitter";

const connect = () => {
    return mongoose.connect(DB_URL);
}

let app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userController);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`PORT IS WORKING ON ${PORT}`);
    } catch(e){
        console.log(e.message);
    }
})