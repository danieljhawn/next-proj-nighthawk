import db from "../../../models"
import bcrypt from "bcrypt"

export default async function(req, res) {

    const user = await db.user.findOne({
        where: {
            email: req.body.email,
        }
    });

    const result = await bcrypt.compare(req.body.password, user.password)
    if (result) {
        res.end(JSON.stringify(user));
    } else { res.end("login failed") }

}