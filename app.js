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

    // INSERTAR
    // const resultado = await usuarios.insertOne({ nombre: "Mariela", edad: 19 });

    // await listarUsuarios(usuarios)


    // await eliminarUsuario(usuarios);

    /* await agregarUsuario(
      usuarios,
      {nombre: "Maritza"},
    {$set:{pais:"China"}}); */

    //await crud.agregarUsuario(usuarios, {nombre: "Lorena", edad: 22, pais: "Halkovia"})

   // await crud.eliminarPorPais(usuarios,"Moldavia")

   

   
    await crud.generacionUsuarios(usuarios)


    // await eliminarVariosPorNombre(usuarios,"Lorena")
     //await crud.eliminarEdadVacia(usuarios,null)
    // await crud.eliminarNombreObjeto(usuarios)


     

     //await crud.edadObjetoEliminar(usuarios)

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




