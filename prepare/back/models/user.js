module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        //id는 기본적으로 들어있음.
        email: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',    // 한글
    })
    User.associate = (db) => {};
    return User;
}