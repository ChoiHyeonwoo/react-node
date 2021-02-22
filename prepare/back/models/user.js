module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        //id는 기본적으로 들어있음.
        email: {},
        nickname: {},
        password: {},
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',    // 한글
    })
    User.associate = (db) => {};
    return User;
}