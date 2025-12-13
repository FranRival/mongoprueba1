
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



async function eliminarUsuariosDuplicados(coleccion) {
  // 1️⃣ Encontrar duplicados
  const duplicados = await coleccion.aggregate([
    {
      $group: {
        _id: "$email",              // agrupamos por email
        ids: { $addToSet: "$_id" }, // guardamos todos los _id
        count: { $sum: 1 }          // contamos cuántos hay
      }
    },
    { $match: { count: { $gt: 1 } } } // solo los que tienen más de 1
  ]).toArray();

  // 2️⃣ Borrar todos menos el primero
  let totalEliminados = 0;
  for (const dup of duplicados) {
    const [keep, ...remove] = dup.ids; // keep = primer id
    const resultado = await coleccion.deleteMany({ _id: { $in: remove } });
    totalEliminados += resultado.deletedCount;
  }

  console.log(`📌 Usuarios duplicados eliminados: ${totalEliminados}`);
}



module.exports = {crearCliente, agregarUsuario, usuariosCorruptosEliminarPorGmail, eliminarUsuariosDuplicados}
