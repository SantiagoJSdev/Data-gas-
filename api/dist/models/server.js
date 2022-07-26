"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const numero_1 = __importDefault(require("../routes/numero"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.paths = {
            numeros: '/api/resultados'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        //defini mis rutas
        this.routes();
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.numeros, numero_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is listening on port' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map