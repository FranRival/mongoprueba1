
async function crearProducto(coleccion) {
  const nuevosProductos = [{
    nombre: "teclado",
    precio: 180,
    categoria: "gaming",
    stock: 34
  }, {
    nombre: "telefono",
    precio: 800,
    categoria: "gaming",
    stock:5
  }, {
    nombre: "tablet",
    precio: 300,
    categoria: "gaming",
    stock:6,
  }, {
    nombre: "computadora",
    precio: 500,
    categoria: "gaming",
    stock:7,
  },{
    nombre:"Consola",
    precio: 900,
    categoria:"Gaming",
    stock:23,
  }]

  const resultado = await coleccion.insertMany(nuevosProductos);
  console.log("✅ Productos creados.");
  console.log("Cantidad creada:", resultado.insertedCount);
  
}


module.exports = {crearProducto}
