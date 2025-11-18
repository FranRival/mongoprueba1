const { MongoClient } = require("mongodb");

// Usa tu propia cadena (reemplaza usuario y contraseña)
const uri = "mongodb+srv://PrimerUsuario:1234567891A!@prototipo11nov25.d37xl51.mongodb.net/?appName=Prototipo11nov25";

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("cursoMongo");
    const usuarios = db.collection("usuarios");

    // Llamar las funciones CRUD aquí:
    // await crearUsuario(usuarios);
    // await leerUsuarios(usuarios);
    // await actualizarUsuario(usuarios);
    // await eliminarUsuario(usuarios);

    //const resultado = await usuarios.find({edad:{$gt:25}}).toArray()
    //console.table(resultado);

    //const porPais = await usuarios.find({pais: "Italia"}).toArray()
    //console.table(porPais)

    //const todosLosPaises = await usuarios.find({},{projection:{nombre: 1,pais:1}}).toArray()
    //console.table(todosLosPaises)

    const ordenarPorEdad = await usuarios.find().sort({edad:1}).toArray()
    console.table(ordenarPorEdad)


    

  } catch (error) {
    console.error("❌ Error general:", error);
  } finally {
    await client.close();
  }
}

main();
//aplicando prueba de master a main

async function crearUsuario(usuarios) {
  const nuevosUsuarios = [{
    nombre: "Ximena",
    edad: 18,
    pais: "DF",
    ocupacion: "Cazafantasmas"
  },{
    nombre:"Eduardo",
    edad:87,
    pais: "Colombia",
    ocupacion: "Constructor"
  },{
    nombre:"Paco",
    edad: 33,
    pais: "Venezuela",
    ocupacion: "sastre"
  },{
    nombre: "Antonia",
    edad: 21,
    pais: "Espana",
    ocupacion: "Camarera"
  }]

  const resultado = await usuarios.insertMany(nuevosUsuarios);
  console.log("✅ Usuario creado con ID:", resultado.insertedId);
}

//1) Agregar Usuario
async function agregarUsuario(usuarios, nombre, edad,pais) {
  const resultado = await usuarios.insertOne(nuevosUsuarios);
  console.log(`✅ Usuario agregado ${nombre}`);
}



async function leerUsuarios(usuarios) {
  const lista = await usuarios.find().toArray();
  console.log("📋 Usuarios registrados:");
  console.table(lista);
}


async function actualizarUsuario(usuarios, filtro,cambios) {

  const resultado = await usuarios.updateOne(filtro, cambios,{upsert:false});

  if (resultado.modifiedCount > 0) {
    console.log("✅ Usuario actualizado correctamente");
  } else {
    console.log("⚠️ No se encontró el usuario a actualizar");
  }
}


async function eliminarUsuario(usuarios, nombre) {
  const filtro = { nombre:"Lorena"};

  const resultado = await usuarios.deleteOne(filtro);

  if (resultado.deletedCount > 0) {
    console.log("🗑️ Usuario eliminado correctamente");
  } else {
    console.log("⚠️ No se encontró el usuario a eliminar");
  }
}

module.exports = { actualizarUsuario, eliminarUsuario, agregarUsuario };