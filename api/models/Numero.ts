
import { DataTypes } from "sequelize";
import  {db}  from "../db/connection";


export const numeros =  db.define('numeros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero1: {
        type: DataTypes.INTEGER,
    },
    numero2: {
        type: DataTypes.INTEGER,
    },
    
}, {
    // timestamps: true
});