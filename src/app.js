require('dotenv').config(); //arquivo => .env
const express = require('express'); 
const { sequelize } = require('./models');
const routes = require('./routers/router')
const app = express(); // inicialização do servidor

app.use(express.json()); // resposta via json
// process.env ? PORT : 3000

app.use('/api', routes)
/*Criar  
        */


sequelize.authenticate()
.then(() => {
    console.log("Conexao com o banco de dados deu  certo");

})
.catch(err => {
    console.error("Erro ao se conecta no banco", err)
})

const PORT = process.env.PORT || 3000;
    //LISTEN -> Ouvir 
    //ouvindona possivel ou na porta 3000

app.listen(PORT, () => {


    console.log('----------------------------')
    console.log(`Running on http://${PORT}`)
    console.log('----------------------------')
});
