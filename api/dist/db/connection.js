"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('datagas', 'postgres', '18112844Mia', {
    host: 'localhost',
    dialect: 'postgres'
});
//  export default db
//# sourceMappingURL=connection.js.map