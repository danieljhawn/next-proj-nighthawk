module.exports = (sequelize, Sequelize) => {

    const Stickerjob = sequelize.define('stickerjob', {
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
        totalCost: {
            type: Sequelize.DECIMAL
        },
        userId: {
            type: Sequelize.INTEGER
            // allowNull: false
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    })

    // stickerJob.associate = function(models) {
    //     stickerJob.belongsTo(models.user)
    // }

    return Stickerjob
}