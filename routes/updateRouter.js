const express = require("express");
const updateRouter = express.Router

updateRouter
    .route("/update/:animalId")

    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })

    .get((req,res) => {
        res.end("will send update page to you")
    })

    .post((req,res) => {
        res.end(`POST operation not supported on /update/:${animalId}`);
    })
    
    .put((res,req) => {
        res.write(`Updating the animal:${req.params.animalId}\n`)
        res.end(`Will update the animal:${req.body.name} with info: ${req.body.info}`);
    })

    .delete((res,req) => {
        res.end('deleting animal')
    });

    module.exports = updateRouter;