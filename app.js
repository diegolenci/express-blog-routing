
const express = require("express");
const app = express();
const port = 3000;

//index
app.get('/posts', function (req,res) {
    res.send('lista dei post')
});
//show
app.get('/posts/:id', function (req,res) {
    res.send('dettagli dei post' + req.params.id)
});
//store
app.post('/posts', function (req,res) {
    res.send('creazione nuovo post')
});
//update
app.put('/posts/:id', function (req,res) {
    res.send('modifica integrale dei post' + req.params.id)
});
//modify
app.patch('/posts/:id', function (req,res) {
    res.send('modifica parziale dei post' + req.params.id)
});
//destroy
app.delete('/posts/:id', function (req,res) {
    res.send('eliminazione dei post' + req.params.id)
});

//attivazione server http localhost 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})