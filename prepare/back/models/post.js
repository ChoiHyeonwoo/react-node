module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        //id는 기본적으로 들어있음.
        content: {},
    }, {// 한글, 이모티콘
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',    
    })
    Post.associate = (db) => {};
    return Post;
}