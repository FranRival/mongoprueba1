
async function crearProducto(usuarios) {
  const nuevosUsuarios = [{
    nombre: "Ximena",
    edad: 18,
    pais: "DF",
    ocupacion: "Cazafantasmas"
  }, {
    nombre: "Eduardo",
    edad: 87,
    pais: "Colombia",
    ocupacion: "Constructor"
  }, {
    nombre: "Paco",
    edad: 33,
    pais: "Venezuela",
    ocupacion: "sastre"
  }, {
    nombre: "Antonia",
    edad: 21,
    pais: "Espana",
    ocupacion: "Camarera"
  }]

  const resultado = await usuarios.insertMany(nuevosUsuarios);
  console.log("✅ Usuario creado con ID:", resultado.insertedId);
}
