// ==== IMPORTS ====
const { MongoClient } = require("mongodb");
const crud = require("./crud-clientes.js");
const { crearCliente } = require("./crud-clientes.js");

// ==== CONFIG ====
const uri = "mongodb+srv://PrimerUsuario:1234567891A!@prototipo11nov25.d37xl51.mongodb.net/?retryWrites=true&w=majority&appName=Prototipo11nov25"; // pon tu cadena
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("Clientes"); // cambia a tu base
    const datosDeClientes = db.collection("DatosClientes");

    // ========== EJEMPLOS BÁSICOS ==========

    await crearCliente(datosDeClientes)





    
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();




