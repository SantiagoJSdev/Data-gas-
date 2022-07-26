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
const getNumeros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'getNumeros'
    });
});
exports.getNumeros = getNumeros;
const postResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json({
        msg: 'post',
        body
    });
});
exports.postResultado = postResultado;
const deleteAllResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: 'delete',
    });
});
exports.deleteAllResultado = deleteAllResultado;
//# sourceMappingURL=numeros.js.map