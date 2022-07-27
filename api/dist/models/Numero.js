"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.numeros = connection_1.db.define('numeros', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    // numero2: {
    //     type: DataTypes.INTEGER,
    // },
}, {
// timestamps: true
});
//# sourceMappingURL=Numero.js.map