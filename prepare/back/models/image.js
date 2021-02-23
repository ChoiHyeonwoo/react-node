module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        //id는 기본적으로 들어있음.
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {// 한글, 이모티콘
        charset: 'utf8',
        collate: 'utf8_general_ci',    
    })
    Image.associate = (db) => {};
    return Image;
}