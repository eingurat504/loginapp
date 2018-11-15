
//using sequelize in users model
module.exports = function(sequelize, DataTypes){
    var user = sequelize.define('user',{
        name: DataTypes.TEXT,
        username: DataTypes.TEXT,
        password: DataTypes.TEXT,
        email: DataTypes.TEXT
    });

    return user;
}
