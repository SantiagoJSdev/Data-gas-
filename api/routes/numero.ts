import { Router } from "express";
const { check } = require('express-validator');
import { validarCampos } from "../helpers/validar-campos";

import { deleteAllResultado, getNumeros, postResultado } from "../controllers/numeros";
 

const router = Router();

//Obtener todos los resultados
router.get('/',       getNumeros)

//guarda el resultado en base de dato y devuelve el resultado
router.post('/', [
    check('numero1','El numero1 es obligatorio').not().isEmpty(),
    check('numero2','El numero2 es obligatorio').not().isEmpty(),
    validarCampos

],  postResultado)

//elimina todos los registros de la tabla
router.delete('/',    deleteAllResultado)


export default router