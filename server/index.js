const express = require("express")
const next = require("next")
require("dotenv").config()
 const PORT = 3243
 const app = next({dev: process.env.NODE_ENV !== 'production'})
 const handle = app.getRequestHandler();

 app
    .prepare()
    .then(() => {
        const server = express()
        const routes = require('./routes/index.js')

        server.use('/api', routes(server))

        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(PORT, err => {
            if(err) throw err;
            console.log(`>_ Read on $(PORT)`)
        })
    }).catch(error => {
        console.log(error)
        process.exit(1)
    })