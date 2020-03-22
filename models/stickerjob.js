module.exports = (sequelize, Sequelize) => {

    const stickerJob = sequelize.define('stickerjob', {
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
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    })

    stickerJob.associate = function(models) {
        stickerJob.belongsTo(models.user)
    }

    return stickerJob
}