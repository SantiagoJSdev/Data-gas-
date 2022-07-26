

import { Request, Response } from "express";


export const getNumeros = async (req: Request, res: Response) => {

    res.json({
        msg: 'getNumeros'
    });
}

export const postResultado = async (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'post',
        body
    });
}

export const deleteAllResultado = async (req: Request, res: Response) => {



    res.json({
        msg: 'delete',

    });
}

