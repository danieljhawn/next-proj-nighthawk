import db from "../../../models"
import jwt from "jsonwebtoken"
import config from '../../../config/config.json'
const env = process.env.NODE_ENV || 'development';

export default async function (req, res) {
    const token = req.headers.authorization.split(' ')[1]
    console.log("this is our token ", token)
    const stickerjob = {}

    jwt.verify(token, config[env].secretKey, async (err, userData) => {
        console.log(userData)
        if (err) {
            res.send("error");
            console.log("verify is not working")
        }
        if (userData) {
            console.log("order edited")
            // stickerjob = await db.stickerjob.create({
            //     width: req.body.width,
            //     height: req.body.height,
            //     shape: req.body.shape,
            //     quantity: req.body.quantity,
            //     totalCost: req.body.totalCost,
            //     userId: userData.id

            User.findById(userId).then(user => {
                console.log(user);
            }).catch(function (err) {
                console.log("findById failed with error: " + err);
                return null;

            })


            // stickerjob = await db.stickerjob.findAll({
            //     where: {
            //         userId: userData.id
            //     }
            // });
            // console.log(stickerjob)
            // res.json(stickerjob);

        });
}
    })

    // res.end(JSON.stringify(stickerjob));

}