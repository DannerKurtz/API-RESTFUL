const mongoose = require("mongoose");

async function main(){

    try {
        await mongoose.connect("mongodb+srv://kurtzdanner:<pass>@api-restful.as1f1bk.mongodb.net/?retryWrites=true&w=majority&appName=API-RESTFUL");

        console.log("conectado ao banco de dados!");

    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main