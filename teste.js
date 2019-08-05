var request =  require('request')
var cheerio = require('cheerio')


    request("https://www.facebook.com/", function(erro, response, html){
        if(erro) console.log("Erro = " + erro);
        var $ = cheerio.load(html)

        console.log(html)
    })