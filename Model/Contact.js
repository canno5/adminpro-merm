const { Schema, model } = require("mongoose");
const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

const Contact = model("Contacts", contactSchema);
module.exports = Contact;   

