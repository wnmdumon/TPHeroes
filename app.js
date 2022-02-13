const express = require('express'); // requerir express
const path = require('path');  // rutas
const app = express();    // guardar en app las propiedades

app.use(express.static('public'))
const PORT = 3030;



// routing



    


app.get('/', (req, res) => {
    let home = path.join(__dirname, '/views/index.html');
    res.sendFile(home);

    
})

app.get('/babbage', (req, res) => {
    let babbage = path.join(__dirname, '/views/babbage.html');
    res.sendFile(babbage);
})

app.get('/berners-lee', (req, res) => {
    let berners = path.join(__dirname, '/views/berners-lee.html');
    res.sendFile(berners);
})

app.get('/clarke', (req, res) => {
    let clarke = path.join(__dirname, '/views/clarke.html');
    res.sendFile(clarke);
})

app.get('/hamilton', (req, res) => {
    let hamilton = path.join(__dirname, '/views/hamilton.html');
    res.sendFile(hamilton)
})

app.get('/hopper', (req, res) => {
    let hopper = path.join(__dirname, '/views/hopper.html');
    res.sendFile(hopper)
})

app.get('/index', (req, res) => {
    let home = path.join(__dirname, '/views/index.html');
    res.sendFile(home);

    
})

app.get('/lovelace', (req, res) => {
    let lovelace = path.join(__dirname, '/views/lovelace.html');
    res.sendFile(lovelace)
})

app.get('/turing', (req, res) => {
    let turing =  path.join(__dirname, '/views/turing.html');
    res.sendFile(turing);

})