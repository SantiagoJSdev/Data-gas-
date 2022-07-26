import { Router } from "express";
import { deleteAllResultado, getNumeros, postResultado } from "../controllers/numeros";
 

const router = Router();


router.get('/',       getNumeros)
router.post('/',      postResultado)
router.delete('/',    deleteAllResultado)


export default router