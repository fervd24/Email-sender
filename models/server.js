const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/contact', require("../routes/contact"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servier listening on port ${this.port}...`);
        })
    }
}

module.exports = Server;