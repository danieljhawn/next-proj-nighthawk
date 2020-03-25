import bcrypt from 'bcrypt'
import db from "../../../models"
import jwt from "jsonwebtoken"
import config from '../../../config/config.json'
const env = process.env.NODE_ENV || 'development';


export default async function(req, res) {
    //where does token come from?
    const token = req.headers.authorization.split(' ')[1]
    console.log("this is our token ", token)
        // let userData = req.body;
    const stickerjob = {}

    jwt.verify(token, config[env].secretKey, async(err, userData) => {
        console.log(userData)
        if (err) {
            res.send("error");
            console.log("verify is not working")
        }
        // console.log("backend stickerjob", userData);
        if (userData) {
            console.log("job created")
            stickerjob = await db.stickerjob.create({
                width: req.body.width,
                height: req.body.height,
                shape: req.body.shape,
                quantity: req.body.quantity,
                totalCost: req.body.totalCost,
                userId: userData.id

            });
        }
    })

    res.end(JSON.stringify(stickerjob));

}