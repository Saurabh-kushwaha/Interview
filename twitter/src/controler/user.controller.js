const express = require("express");
const User = require('../model/user.model')
let router = express.Router();

router.get("/", async (req, res) => {
    try {
        let userGet = await User.find();
        res.status(200).json(userGet);
    } catch (e) {
        res.status(400).json(e.message);
    }
});

router.post("/", async (req, res) => {
    try {
        let userPost = await User.create(req.body);
        console.log(userPost);
        res.status(201).json(userPost);
    } catch (e) {
        res.status(400).json(e.message);
    }
})

module.exports = router;