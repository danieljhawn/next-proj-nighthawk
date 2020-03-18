import db from "../../../models"

export default async function(req, res) {

    const user = await db.user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,

    });
    res.end(JSON.stringify(user));
}