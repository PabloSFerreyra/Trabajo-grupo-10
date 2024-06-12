const express = require("express");
const path = require("path");
const Router = express.Router();

Router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "lgn-reg.html"));
});

Router.get("/inicio", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "inicio.html"));
});

Router.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "productos.html"));
});

Router.get("/sobre-nosotros", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "sobre-nosotros.html"));
});

module.exports = Router;