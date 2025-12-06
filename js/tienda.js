// ==== IMPORTS ====
const { MongoClient } = require("mongodb");
const crud = require("./js/crud.js");

// ==== CONFIG ====
const uri = "mongodb+srv://PrimerUsuario:1234567891A!@prototipo11nov25.d37xl51.mongodb.net/?retryWrites=true&w=majority&appName=Prototipo11nov25"; // pon tu cadena
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("cursoMongo"); // cambia a tu base
    const usuarios = db.collection("usuarios");

    // ========== EJEMPLOS BÁSICOS ==========






    
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();




