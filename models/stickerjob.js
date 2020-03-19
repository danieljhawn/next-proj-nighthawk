module.exports = (sequelize, Sequelize) => {

    const Model = sequelize.define('stickerjob', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        width: {
            type: Sequelize.INTEGER
        },
        height: {
            type: Sequelize.INTEGER
        },
        shape: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    })

    return Model
}