// ==== IMPORTS ====
const { MongoClient } = require("mongodb");
const { actualizarUsuario,eliminarUsuario } = require("./js/crud.js");

// ==== CONFIG ====
const uri = "mongodb+srv://PrimerUsuario:1234567891A!@prototipo11nov25.d37xl51.mongodb.net/?appName=Prototipo11nov25"; // pon tu cadena
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("cursoMongo"); // cambia a tu base
    const usuarios = db.collection("usuarios");

    // ========== EJEMPLOS BÁSICOS ==========

    // INSERTAR
    // const resultado = await usuarios.insertOne({ nombre: "Mariela", edad: 19 });

     

       // await eliminarUsuario(usuarios);

        /* await actualizarUsuario(
          usuarios,
          {nombre: "Mariela"},
        {$set:{pais:"Croacia"}}); */

    // BUSCAR TODO
   // const lista = await usuarios.find().toArray();
    //console.table(lista);

    // BUSCAR ORDENADO
    // const ordenados = await usuarios.find().sort({ edad: 1 }).toArray();
    // console.table(ordenados);

    // ACTUALIZAR
    // await usuarios.updateOne({ nombre: "Luis" }, { $set: { edad: 30 } });

    // ELIMINAR
    // await usuarios.deleteOne({ nombre: "Luis" });

  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();
