
import { DataTypes } from "sequelize";
import  {db}  from "../db/connection";


export const numeros =  db.define('numeros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // numero2: {
    //     type: DataTypes.INTEGER,
    // },
    
}, {
    // timestamps: true
});