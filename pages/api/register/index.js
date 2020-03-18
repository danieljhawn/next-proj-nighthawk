import db from "../../../models"

export default async function(req, res) {

    const user = await db.user.create({
        first_name: req.body.first_name
    });
    res.end(JSON.stringify(user));
}