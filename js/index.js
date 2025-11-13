// Importar el cliente de MongoDB
const { MongoClient } = require("mongodb");

// Reemplaza con tu cadena de conexión desde Atlas
const uri = "mongodb+srv://PrimerUsuario:1234567891A!@prototipo11nov25.d37xl51.mongodb.net/?appName=Prototipo11nov25";

const client = new MongoClient(uri);

async function main() {
  try {
    // Conectar al cluster
    await client.connect();
    console.log("✅ Conectado correctamente a MongoDB Atlas");

    // Seleccionar la base de datos (se crea automáticamente si no existe)
    const db = client.db("cursoMongo");

    // Seleccionar la colección
    const usuarios = db.collection("usuarios");

    // Insertar un documento
    const resultado = await usuarios.insertOne({
      nombre: "Emmanuel",
      edad: 28,
      pais: "México",
      ocupacion: "Programador en práctica"
    });

    console.log("Documento insertado con ID:", resultado.insertedId);
  } catch (error) {
    console.error("❌ Error al conectar o insertar:", error);
  } finally {
    // Cerrar la conexión
    await client.close();
  }
}

main();
