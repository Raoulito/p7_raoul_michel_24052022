const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Checks if the user is authenticated
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, `${process.env.JWT_KEY}`);
        const userId = decodedToken.userId;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "Unauthorized user !";
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | "Unauthorized request !" });
    }
};
