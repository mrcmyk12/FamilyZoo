const express = require("express");
const homeRouter = express.Router

homeRouter
    .route("/")

    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })

    .get((req,res) => {
        res.end("will send all animals to you")
    })

    .post((req,res) => {
        res.end(`POST operation not supported on /home`);
    })
    
    .put((res,req) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /home");
    })

    .delete((res,req) => {
        res.end('DELETE operation not supported on /home')
    });

    module.exports = homeRouter;