import {Sequelize} from "sequelize";

const db = new Sequelize('crudjs','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
