import db from "../../../models"

export default async function(req, res) {

    const user = await db.user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    });
    res.end(JSON.stringify(user));
}