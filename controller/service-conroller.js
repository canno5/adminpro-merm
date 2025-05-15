const Services = require("../Model/servicesSchema");

const servicesData = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Services.create(bodyData);        
        res.status(201).json({ messge: data });


    } catch (err) {
        res.status(401).json({ message: err });
    }
}
const services = async (req, res) => {
    try {
        const responce = await Services.find();
        if (!responce) {
            res.status(404).json({ msg: "No service found" });
        }
        res.status(200).json({ msg: responce });
       
    } catch (err) {
        res.status(404).json({ message: err });

    }
}
module.exports = { services, servicesData };