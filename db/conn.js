const mongoose = require("mongoose");
const URI = process.env.DATABASE_URI;
async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log("connection is sucessfully");
    } catch (error) {
        console.log("The Error " + error);
        process.exit(0);
    }
}
module.exports = connectDB;