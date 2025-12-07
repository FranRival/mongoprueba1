// ==== IMPORTS ====
const { MongoClient } = require("mongodb");
const crud = require("./crud-tienda.js");
const { crearProducto } = require("./crud-tienda.js");

// ==== CONFIG ====
const uri = "mongodb+srv://PrimerUsuario:1234567891A!@prototipo11nov25.d37xl51.mongodb.net/?retryWrites=true&w=majority&appName=Prototipo11nov25"; // pon tu cadena
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("Tienda"); // cambia a tu base
    const interiorTienda = db.collection("interiorTienda");

    // ========== EJEMPLOS BÁSICOS ==========

    await crearProducto(interiorTienda)





    
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();




