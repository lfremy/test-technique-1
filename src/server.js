
// Outils requis
const express = require('express');
const ejs = require ('ejs');

//Importer la fonction convert()
const converter = require ('./converter');


// Exécuter express
const server = express();

// Modèle de rendu
server.engine ("ejs", ejs.renderFile);
server.set('views', './src/views');


server.use(express.urlencoded({ extended: false }));
server.use(express.static ('./src/assets'));//CSS



// Page d'accueil
server.get("/", (request, response)=> {
    response.render('home.ejs');
})

//Page result
server.post("/result", (request, response)=>{
    
    let resultat = request.body;

    let number = JSON.stringify(Number(resultat['result']));
    let roman = converter(number); 
    let message = roman;
    
    response.render('result.ejs',{message});
    
})
// Ecoute du port
server.listen(8080, () =>{
    console.log("Serveur runnig at port 8080");
});