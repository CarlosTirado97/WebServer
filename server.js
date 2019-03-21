var express = require('express')
var app = express();
var hbs = require('hbs');
require('./hbs/helpers/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'carlos',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {

    });
});


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
})