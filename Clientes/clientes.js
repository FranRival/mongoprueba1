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


    const db = client.db("prototypo11nov25"); // tu base de datos


    // ========== EJEMPLOS BÁSICOS ==========



    const productos = db.collection("productos");
    const clientes = db.collection("clientes");
    const ordenes = db.collection("ordenes");


    const resProductos = await productos.insertMany([
      { nombre: "Laptop", precio: 20000, categoria: "Electrónica", stock: 12 },
      { nombre: "Playera roja", precio: 180, categoria: "Ropa", stock: 50 },
      { nombre: "Pantalón mezclilla", precio: 850, categoria: "Ropa", stock: 30 },
      { nombre: "Silla gamer", precio: 4500, categoria: "Muebles", stock: 8 },
      { nombre: "Mouse inalámbrico", precio: 350, categoria: "Electrónica", stock: 40 }
    ])

    console.log(`✅ Se insertaron ${resProductos.insertedCount} productos`);


    const resClientes = await clientes.insertMany([
      { nombre: "Ana López", email: "ana@example.com", direccion: "CDMX", edad: 29 },
      { nombre: "Carlos Pérez", email: "carlos@example.com", direccion: "Guadalajara", edad: 34 },
      { nombre: "María Torres", email: "maria@example.com", direccion: "Monterrey", edad: 41 }
    ])

    console.log(`✅ Se insertaron ${resClientes.insertedCount} clientes`);


  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();




