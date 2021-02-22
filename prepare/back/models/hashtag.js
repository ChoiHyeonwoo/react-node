module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        //id는 기본적으로 들어있음.
        name: {},
    }, {// 한글, 이모티콘
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',    
    })
    Hashtag.associate = (db) => {};
    return Hashtag;
}