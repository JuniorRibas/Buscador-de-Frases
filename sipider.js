var request = require("request");
var cheerio = require("cheerio");
var arrayFrases = []

 function frases(termo){
     arrayFrases.length = 0; 
  request('https://www.pensador.com/'+termo,function(err, res, body){
        if(err) console.log("Erro = " + err);
        var $ = cheerio.load(body);
        $('.phrases-list div').each(function(){
            if ($(this).find('p.frase').text().trim() != ""){
                var frase = $(this).find('p.frase').text().trim();
                arrayFrases.push($(this).find('p.frase').text().trim());    
            }
        })
        console.log("retornou as frases")
        return arrayFrases;
    })
     
}

module.exports = {
    funcaoFrases: function(termo){
        console.log("Importouuuu")
        var retorno = frases(termo);
        setTimeout(function() {
            return retorno
        }, 3000);
        
    },
    array: arrayFrases
}




