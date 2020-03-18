import db from "../../../models"

export default async function(req, res) {

    const user = await db.user.findOne({
        where: {
            first_name: 'Osei'
        }
    });
    res.end(JSON.stringify(user));
}