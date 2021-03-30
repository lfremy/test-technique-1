function convert(number) {

    
    let roman = "";

    if(number  >= 1 && number <= 100){
        let romanEquivalent = {
      
        
        'C':100,
        'XC':90,
        'L':50, 
        'XL':40,
        "X":10,
        'IX':9,
        'V':5,
        'IV':4, 
        'I':1
        
        };

        

        // Boucler dans l'objet
        for (let key in romanEquivalent){


            while (number >= romanEquivalent[key]){
            // Incrémenter la string de la clé 
            roman += key;
            //Décrementer le nombre de la VALEUR de la clé + poursuivre la boucle
            number -= romanEquivalent[key];
    
             }
       
        }

    
    
    
    }
    return roman;
}

module.exports = convert;