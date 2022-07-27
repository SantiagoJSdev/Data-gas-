

import { Request, Response } from "express";
import { calculadora } from "../helpers/calculadora";
import { numeros } from "../models/Numero";



//funcion para obtener todos los resultados
export const getNumeros = async (req: Request, res: Response) => {

    const nums = await numeros.findAll();

    res.json(nums.map(({ total }: any) => total));
}


//funcion para guarda el resultado en base de dato y devuelve el total multiplicacion
export const postResultado = async (req: Request, res: Response) => {

    const { numero1, numero2 } = req.body;

    //realizo calculo de numeros grandes con una funcion helpers/calculadora
    let reg = /^[0-9]*(\.?)[0-9]+$/
    if (!reg.test(numero1) || !reg.test(numero2)) {
       return res.json({
            msg: 'Solo debe contener numeros',
        }) 
    }
    const total: string = calculadora(numero1, numero2);


    try {

        const num = await numeros.create({ total: total });

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


// eliminacion fisica en la base de datos
export const deleteAllResultado = async (req: Request, res: Response) => {

    await numeros.destroy({ where: {} });

    res.json({
        msg: 'Datos borrados'

    });
}

