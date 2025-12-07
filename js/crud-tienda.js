
async function crearProducto(coleccion) {
  const nuevosProductos = [{
    nombre: "Playera",
    precio: 180,
    categoria: "Ropa"
  }, {
    nombre: "Pantalon",
    precio: 800,
    categoria: "Ropa"
  }, {
    nombre: "Toalla",
    precio: 300,
    categoria: "Hogar"
  }, {
    nombre: "Almohada",
    precio: 500,
    categoria: "Hogar"
  }]

  const resultado = await coleccion.insertMany(nuevosProductos);
  console.log("✅ Productos creados.");
  console.log("Cantidad creada:", resultado.insertedCount);
  
}


module.exports = {crearProducto}
