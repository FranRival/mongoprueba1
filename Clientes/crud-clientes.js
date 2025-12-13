
async function crearCliente(coleccion) {
  const nuevosClientes = [{
    nombre: "Yoselin",
    email: "abc@gmail.com",
    direccion: "la Antartida",
    stock: 34
  }, {
    nombre: "Clara",
    email: "def@gmail.com",
    direccion: "Fuerte Knox",
    stock:5
  }, {
    nombre: "Nicole",
    email: "ghi@gmail.com",
    direccion: "La luna 503",
    stock:6,
  }, {
    nombre: "Melisa",
    email: "jkl@gmail.com",
    direccion: "Springfield 123",
    stock:7,
  },{
    nombre:"Ariadna",
    email: "mno@gmail.com",
    direccion:"Av. Siempre viva",
    stock:23,
  }]

  const resultado = await coleccion.insertMany(nuevosClientes);
  console.log("✅ Clientes creados.");
  console.log("Cantidad creada:", resultado.insertedCount);
  
}



//1) Agregar Usuario
async function agregarUsuario(usuarios, nombre, edad, email, direccion) {
  const nuevosUsuarios = { nombre, edad, email, direccion }
  const resultado = await usuarios.insertOne(nuevosUsuarios);
  console.log(`✅ Usuario agregado ${nombre}`);

}

//2) eliminar direccion email que contenga @
async function usuariosCorruptosEliminarPorGmail(coleccion) {
  const resultado = await coleccion.deleteMany({
    email: { $regex: /@gmail\.com$/i }   // <-- elimina todos los que terminen en @gmail.com
  });

  console.log(`📌 Total de usuarios eliminados con @gmail.com: ${resultado.deletedCount}`);
}



module.exports = {crearCliente, agregarUsuario, usuariosCorruptosEliminarPorGmail}
