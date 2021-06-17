const express = require("express");
const addRouter = express.Router

addRouter
    .route("/add")

    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })

    .get((req,res) => {
        res.end("will send update page to you")
    })

    .post((req,res) => {
        res.end(`Will add the animal: ${req.body.name} with info: ${req.body.info}`);
    })
    
    .put((res,req) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /add");
    })

    .delete((res,req) => {
        res.end('DELETE operation not supported on /add')
    });

    module.exports = addRouter;