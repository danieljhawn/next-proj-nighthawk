import bcrypt from 'bcrypt'
import db from "../../../models"

export default async function(req, res) {

    const hash = await bcrypt.hash(req.body.password, 10);

    const user = await db.user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash,

    });
    res.end(JSON.stringify(user));
}