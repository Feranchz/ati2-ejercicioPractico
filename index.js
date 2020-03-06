const express = require('express');
const app = express();
const getResults = require('./lib/scrapper.js');

app.set("view engine", "pug");
app.set("views", "views/")

app.get('/', async function(req, res, next){
    const result = await getResults(req.query.search);
    res.render("index", result);
});

app.listen(3000, () => {
    console.log("Iniciado");
})