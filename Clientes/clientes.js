// ==== IMPORTS ====
const { MongoClient } = require("mongodb");
const crud = require("./crud-clientes.js");
//const { crearCliente } = require("./crud-clientes.js");
//const { usuariosCorruptosEliminarlos } = require("./crud-clientes.js");

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

    //await crearCliente(datosDeClientes)
    //await crearCliente(datosDeClientes, {nombre:"Lorena", email:"123@gmail.com",direccion:"DC gotica", stock:23})

    //await crud.agregarUsuario(usuarios, {nombre: "Lorena", edad: 22, pais: "Halkovia"})

    await crud.usuariosCorruptosEliminarPorGmail(datosDeClientes) //creo que esta linea causa el error en la terminal




    const cursor = db.collection('DatosClientes').find({ email: 'def@gmail.com' });
    console.log(cursor);
    

    
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();




