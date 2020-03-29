import db from "../../../models"
import jwt from "jsonwebtoken"
import config from '../../../config/config.json'
const env = process.env.NODE_ENV || 'development';

export default async function(req, res) {

    const token = req.headers.authorization.split(' ')[1]
    let stickerjob = null;

    jwt.verify(token, process.env.secretKey, async(err, userData) => {
        console.log(userData)
        if (err) {
            res.send("error");
        }
        if (userData) {
            stickerjob = await db.stickerjob.findAll({
                where: {
                    userId: userData.id
                }
            });
            console.log(stickerjob)
            res.json(stickerjob);
        }
    })

}