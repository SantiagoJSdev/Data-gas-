

import { Sequelize } from "sequelize";


export const db = new Sequelize('datagas', 'postgres', '18112844Mia', {
    host: 'localhost',
    dialect: 'postgres' 
})

//  export default db



 