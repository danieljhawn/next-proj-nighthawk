import bcrypt from 'bcrypt'
import db from "../../../models"
import jwt from "jsonwebtoken"

export default async function(req, res) {
    //where does token come from?
    const token = req.body.token

    jwt.verify(token, "secret", (err, userData) => {
        if (err) res.send("error")
        console.log(userData);

        if (userData) {
            const user = await db.stickerjob.create({
                width: req.body.width,
                height: req.body.height,
                shape: req.body.shape,
                quantity: req.body.quantity,
                totalCost: req.body.totalCost,
                userId: userData.id

            });
        }
    })

    res.end(JSON.stringify(user));
}