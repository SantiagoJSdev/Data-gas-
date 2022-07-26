"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllResultado = exports.postResultado = exports.getNumeros = void 0;
const calculadora_1 = require("../helpers/calculadora");
const Numero_1 = require("../models/Numero");
const getNumeros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nums = yield Numero_1.numeros.findAll();
    res.json(nums);
});
exports.getNumeros = getNumeros;
const postResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero1, numero2 } = req.body;
    const total = (0, calculadora_1.calculadora)(numero1, numero2);
    try {
        const num = yield Numero_1.numeros.create({ total: total.toString() });
        res.json({
            msg: 'postUsuario ok',
            num
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postResultado = postResultado;
const deleteAllResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eliminacion fisica en la base de datos
    yield Numero_1.numeros.destroy({ where: {} });
    res.json({
        msg: 'Datos borrados'
    });
});
exports.deleteAllResultado = deleteAllResultado;
//# sourceMappingURL=numeros.js.map