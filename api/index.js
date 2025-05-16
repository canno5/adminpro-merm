const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("../db/conn");
const path = require('path');
const authRoute = require("../router/route");
const contactRoute = require("../router/route");
const serviceRoute = require("../router/services-router");
const adminRoute  = require("../router/admin-route");
const errMiddleware = require("../middlewares/error-milddleware");
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};
const staticPath = path.join(__dirname, "../cliend/dist");
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errMiddleware);
app.use(express.static(staticPath));

app.get('/*',(rq,res)=>{
    res.sendFile(path.join(__dirname, '../cliend/dist', 'index.html'));
});

const PORT = 4000 || process.env.PORT;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("I am live to the port " + PORT);
    });
});
