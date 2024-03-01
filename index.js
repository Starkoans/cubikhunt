const express = require('express')
const projectsRouter = require('./routes/projects.route')
const {json} = require("express");
const cors = require('cors');

const APP = express()
const PORT = 3001;
APP.use(cors());
APP.use(json());
APP.use("/api", projectsRouter);

APP.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})