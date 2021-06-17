const express = require("express");
const infoRouter = express.Router

infoRouter
    .route("/info/:animalId")

    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })

    .get((req,res) => {
        res.end(`Will send details of the animal: ${req.params.animalId} to you`)
    })

    .post((req,res) => {
        res.end(`POST operation not supported on /info`);
    })
    
    .put((res,req) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /info");
    })

    .delete((res,req) => {
        res.end('DELETE operation not supported on /info')
    });

    module.exports = infoRouter;