'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {
  user: sequelize.import('./user'),
};

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     // const model = sequelize['import'](path.join(__dirname, file));
//     // db[model.name] = model;
//     var model = sequelize.import(path.join(__dirname, file));
//     // models[model.name] = models;
//   });

// Object.keys(db).forEach(modelName => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models);
//   }
// });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
// export default db;
