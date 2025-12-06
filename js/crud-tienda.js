
async function crearProducto(producto) {
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

  const resultado = await producto.insertMany(nuevosProductos);
  console.log("✅ Usuario creado con ID:", resultado.insertedId);
}
