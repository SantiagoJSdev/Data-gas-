

import { Request, Response } from "express";
import { calculadora } from "../helpers/calculadora";
import { numeros } from "../models/Numero";
 


export const getNumeros = async (req: Request, res: Response) => {

    const nums = await numeros.findAll();

    res.json(nums);
}

export const postResultado = async (req: Request, res: Response) => {

    const { numero1, numero2 } = req.body;

    const total: BigInt = calculadora(numero1, numero2);

    try {

        const num = await numeros.create({total: total.toString()});
        res.json({
            msg: 'postUsuario ok',
            num
        })
 

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el admin'
        })

    }

}

export const deleteAllResultado = async (req: Request, res: Response) => {
 
  
    // eliminacion fisica en la base de datos
    await numeros.destroy({where: {}});

    res.json({
        msg: 'Datos borrados'

    });
}

