"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = void 0;
var Decimal = require('decimal.js-light');
const calculadora = (a, b) => {
    Decimal.config({ precision: 75 });
    let cal = new Decimal(a.toString());
    let resultado = cal.mul(b.toString()).toFixed();
    return resultado.toString();
    // return BigInt(a) * BigInt(b)
};
exports.calculadora = calculadora;
//# sourceMappingURL=calculadora.js.map