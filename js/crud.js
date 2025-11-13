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
