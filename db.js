const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'rudransh@1', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;