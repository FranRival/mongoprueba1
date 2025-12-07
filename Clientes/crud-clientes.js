
async function crearCliente(coleccion) {
  const nuevosClientes = [{
    nombre: "teclado",
    email: "abc@gmail.com",
    direccion: "la Antartida",
    stock: 34
  }, {
    nombre: "telefono",
    email: "def@gmail.com",
    direccion: "Fuerte Knox",
    stock:5
  }, {
    nombre: "tablet",
    email: "ghi@gmail.com",
    direccion: "La luna 503",
    stock:6,
  }, {
    nombre: "computadora",
    email: "jkl@gmail.com",
    direccion: "Springfield 123",
    stock:7,
  },{
    nombre:"Consola",
    email: "mno@gmail.com",
    direccion:"Av. Siempre viva",
    stock:23,
  }]

  const resultado = await coleccion.insertMany(nuevosClientes);
  console.log("✅ Clientes creados.");
  console.log("Cantidad creada:", resultado.insertedCount);
  
}


module.exports = {crearCliente}
