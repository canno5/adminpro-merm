const Contact = require("../Model/Contact");

const contact = async (req,res)=>{
    try {
        const { name, email, message } = req.body;       
        await Contact.create({name, email, message});
    
        res.status(200).json({message: 'message send Sucessfully'});


    } catch (err) {
        console.log(err);
        res.status(500).json("message not delivered "+err);
        
    }

}
module.exports = contact;