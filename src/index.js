const express = require("express");
const { Sequelize } = require('sequelize');

let sequelize = new Sequelize('biblioteca', '', '', {
    host: '',
    port: 3308,
    dialect: 'mysql',
});

async function conectarConBd() {

    try {
        await sequelize.authenticate();
        console.log('Conexion Exitosa');
    } catch (error) {
        console.error('Error de conexion con BD:', error);
    }
}

conectarConBd()

const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "Hola, Saludos desde Node"});
})

app.get("/libro", async function(req, res){
    
    const [ results ] = await sequelize.query("SELECT * from libros");

    return res.json(results);

});

app.get("/categoria", async function(req, res){
    
    const [ results ] = await sequelize.query("SELECT * from categorias");

    return res.json(results);

});


app.listen(5000, function(){
    console.log("Servidor iniciado en http://localhost:5000");
});

app.listen(5000, function(){
    console.log("Servidor iniciado en http://localhost:5000");
});