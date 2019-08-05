var express =  require("express")
var bodyParser = require("body-parser")

var funcaoFrases = require("./sipider")
var app = express();


//Setando o gerenciador de views
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set("view engine", 'ejs')
// Fim da configuração do gerenciado de views


app.get("/", function(req, res){
  res.render('index')
  
})
app.post("/pesquisa", function(req, res){
  console.log(req.body.termo)
  if(req.body.termo != ""){
    console.log(req.body.termo)
    funcaoFrases.funcaoFrases(req.body.termo)
    res.redirect("/frases")
  }
})

app.get("/frases", function(req, res){
  res.render('frases',{frases: funcaoFrases.array})
})

app.listen(8080, function(){
  console.log("rodando...")
})


    


