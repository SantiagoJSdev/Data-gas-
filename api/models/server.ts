import express, {Application} from "express";
import numeroRautes from "../routes/numero";
import cors from "cors";

import {db} from "../db/connection";
import '../models/Numero'

class Server {

    private app: Application;
    private port: string;
    private paths = {
       numeros: '/api/resultados'
    } 


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        //defini mis rutas
        this.routes();
    }

    async dbConnection() {

        try {

            await db.sync({force: true});
            console.log('DataBase Online')
             
        } catch ( error: any ) {
            throw new Error( error );
            
        } 

    }

    middlewares() {

        //cors
        this.app.use ( cors() );

        //lectura del body
        this.app.use( express.json() );

        //carpeta publica
        this.app.use( express.static('public') )
    }

    routes() {

        this.app.use(this.paths.numeros, numeroRautes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server is listening on port' + this.port );
        })
    }

}

export default Server