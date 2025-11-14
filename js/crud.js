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
     await actualizarUsuario(usuarios);
    // await eliminarUsuario(usuarios);

  } catch (error) {
    console.error("❌ Error general:", error);
  } finally {
    await client.close();
  }
}

main();


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

async function leerUsuarios(usuarios) {
  const lista = await usuarios.find().toArray();
  console.log("📋 Usuarios registrados:");
  console.table(lista);
}


async function actualizarUsuario(usuarios) {
  const filtro = { nombre: "Eduardo" }; // Buscará por nombre
  const cambios = { $set: { nombre: "Carla",edad:29, ocupacion: "Bailarina" } };

  const resultado = await usuarios.updateOne(filtro, cambios);

  if (resultado.modifiedCount > 0) {
    console.log("✅ Usuario actualizado correctamente");
  } else {
    console.log("⚠️ No se encontró el usuario a actualizar");
  }
}


async function mas25(usuarios) {
  const edadMaxima = {edad: 23}
  if (usuarios>=25) {
    console.log()
    
  }
}



async function eliminarUsuario(usuarios) {
  const filtro = { nombre: "Carlos" };

  const resultado = await usuarios.deleteOne(filtro);

  if (resultado.deletedCount > 0) {
    console.log("🗑️ Usuario eliminado correctamente");
  } else {
    console.log("⚠️ No se encontró el usuario a eliminar");
  }
}
