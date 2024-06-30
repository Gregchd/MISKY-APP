import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    console.log(req.cookies);
    const { token } = req.cookies;

    if (!token) {
        console.log(token);
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token is not valid" });

        req.user = user;
        next();
    });
};
