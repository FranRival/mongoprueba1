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

  } catch (error) {
    console.error("❌ Error general:", error);
  } finally {
    await client.close();
  }
}

main();

async function crearUsuario(usuarios) {
  const nuevo = {
    nombre: "Carlos",
    edad: 30,
    pais: "México",
    ocupacion: "Diseñador"
  };

  const resultado = await usuarios.insertOne(nuevo);
  console.log("✅ Usuario creado con ID:", resultado.insertedId);
}

async function leerUsuarios(usuarios) {
  const lista = await usuarios.find().toArray();
  console.log("📋 Usuarios registrados:");
  console.table(lista);
}
