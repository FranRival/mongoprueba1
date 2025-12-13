// ==== IMPORTS ====
const { MongoClient } = require("mongodb");
const crud = require("./crud-clientes.js");
const { crearCliente } = require("./crud-clientes.js");
const { agregarUsuario } = require("./crud-clientes.js")
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
    //await crearCliente(datosDeClientes, {nombre:"Lorena", email:"123@gmail.com",direccion:"DC gotica"})

   // await agregarUsuario(datosDeClientes, "Lorena", 22, "Halkovia")

    //await crud.usuariosCorruptosEliminarPorGmail(datosDeClientes) //creo que esta linea causa el error en la terminal





    //const cursor = db.collection('DatosClientes').find({ email: 'def@gmail.com' });
    //console.log(cursor);
    

    await crud.agregarUsuario(datosDeClientes, {
  nombre: "Lorena",
  edad: 22,
  email: "lorena@outlook.com",
  direccion: "Halkovia"
});

const todos = await datosDeClientes.find().toArray();
console.log("📦 DOCUMENTOS REALES EN ESTA COLECCIÓN:");
console.log(todos);


    
  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();




