"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = require("../helpers/validar-campos");
const numeros_1 = require("../controllers/numeros");
const router = (0, express_1.Router)();
//Ruta: /api/resultados
//Obtener todos los resultados
router.get('/', numeros_1.getNumeros);
//guarda el resultado en base de dato y devuelve el total multiplicacion
router.post('/', [
    check('numero1', 'El numero1 es obligatorio').not().isEmpty(),
    check('numero2', 'El numero2 es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], numeros_1.postResultado);
//elimina todos los registros de la tabla
router.delete('/', numeros_1.deleteAllResultado);
exports.default = router;
//# sourceMappingURL=numero.js.map