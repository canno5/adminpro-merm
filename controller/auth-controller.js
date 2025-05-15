const Users = require("../Model/AdminSchema");
const Contact = require("../Model/Contact");

const home = async (req, res) => {
    try {
        res.status(200).send("Hello from router World Conreoller");
    } catch (error) {
        console.log(error);
    }

}
const register = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        const userExist = await Users.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User Alreay Exits" });
        }

        const userCreated = await Users.create({ name, phone, email, password });
        res.status(201).json({
            msg: "registraction sucessfully",
            token: await userCreated.genrateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        res.status(404).send("The Err Server " + error);

    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await Users.findOne({ email: email });
        if (!userExist) {
            return res.status(401).json({ message: "Invaild Credentails" });
        }
        const user = await userExist.passwordCompare(password);
        
        if (user) {
            res.status(201).json({
                msg: "login sucessfully",
                token: await userExist.genrateToken(),
                userId: userExist._id.toString()
            });
        } else {
            res.status(401).json({ message: "Invaild Credentails" });
        }
    } catch (error) {
        res.status(404).send("The Err logn " + error);

    }

}
const user = async (req, res) => {
    try {
        const userData = req.user;
        res.status(200).json({ userData });
    } catch (err) {
        console.log("error from the user route " + err);
    }

}

module.exports = { home, register, login, user };