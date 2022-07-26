"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const numeros_1 = require("../controllers/numeros");
const router = (0, express_1.Router)();
router.get('/', numeros_1.getNumeros);
router.post('/', numeros_1.postResultado);
router.delete('/', numeros_1.deleteAllResultado);
exports.default = router;
//# sourceMappingURL=numero.js.map