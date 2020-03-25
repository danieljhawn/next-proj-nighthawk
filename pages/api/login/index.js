import db from "../../../models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from '../../../config/config.json'
const env = process.env.NODE_ENV || 'development';

export default async function(req, res) {

    switch (req.method) {
        case 'POST':
        case 'post':
            const user = await db.user.findOne({
                where: {
                    email: req.body.email,
                }
            });

            const result = await bcrypt.compare(req.body.password, user.password)
            if (result) {
                const token = jwt.sign({ id: user.id, email: user.email }, config[env].secretKey)
                res.json({
                        id: user.id,
                        email: user.email,
                        token
                    })
                    // res.end(JSON.stringify(user));
            } else {
                res.end("login failed")
            }

            break;

        default:
            break;
    }

}