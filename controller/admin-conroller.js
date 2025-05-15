const Admin = require("../Model/AdminSchema");
const Contact = require("../Model/Contact");
const getAllUser = async (req, res, next) => {
    try {
        const dataUser = await Admin.find().select({ password: 0 });
        if (!dataUser || dataUser.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        res.status(200).json({ dataUser });

    } catch (err) {
        next(err);
    }
}
const getAllContats = async (req, res, next) => {
    try {
        const dataUser = await Contact.find();
        if (!dataUser || dataUser.length === 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        res.status(200).json({ dataUser });
    } catch (err) {
        next(err);
    }
}

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Admin.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);

    } catch (err) {
        next(err);
    }
}

const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateUser = await Admin.updateOne({ _id: id }, { $set: data })
        return res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
}



const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Admin.deleteOne({ _id: id });
        return res.status(200).send("Users Deleted Sucessfully");

    } catch (err) {
        next(err);
    }
}

const deleteContatsById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).send("Contacts Deleted Sucessfully");

    } catch (err) {
        next(err);
    }
}


const getContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const realData = await Contact.findOne({ _id: id }, {password: 0});
        res.status(200).json(realData);
        console.log(realData);

    } catch (err) {
        console.log(err)
        res.status(404).send("The Err contact "+ err);
    }
}


const updateContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const realData = await Contact.updateOne({ _id: id }, { $set: data });
        res.status(200).send("Updated Sucessfully Contact");
        console.log(realData);

    } catch (err) {
        console.log(err)
        res.status(404).send(err);
    }
}



module.exports = { getAllUser, getAllContats, deleteUserById, getUserById, updateUserById, deleteContatsById, getContactById, updateContactById };