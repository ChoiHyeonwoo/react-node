module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        //id는 기본적으로 들어있음.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {// 한글, 이모티콘
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',    
    })
    Comment.associate = (db) => {};
    return Comment;
}