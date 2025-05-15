const jwt = require("jsonwebtoken");
const Admin = require("../Model/AdminSchema");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res
            .status(401)
            .json({ msg: "Unauthorization http token is not provid" });
    }
    // console.log("token from auth middlware", token);
    try {
        const isVerfied = jwt.verify(token, process.env.SECRET_KEY);
        console.log(isVerfied);
        const userData = await Admin.findById(isVerfied.userId).select({ password: 0 });
        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        next();

    } catch (err) {
        return res
            .status(401)
            .json({ msg: "Unauthorization. Invalid token." });
    }
}
module.exports = authMiddleware;