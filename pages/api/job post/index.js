import bcrypt from 'bcrypt'
import db from "../../../models"

export default async function(req, res) {

    

    const user = await db.stickerjob.create({
        width: req.body.width,
        height: req.body.height,
        shape: req.body.shape,
        quantity: req.body.quantity,

    });
    res.end(JSON.stringify(user));
}