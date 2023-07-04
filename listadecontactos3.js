//Lista de Contactos

//Se crea lista de contactos inicial
//(id, nombre, apellidos, teléfono, ubicación: ciudad y dirección) como objetos.
let listaContacto = [
  {
    id: 1,
    nombre: "Joe",
    apellidos: "Arroyo",
    telefono: 3015263322,
    ubicacion: {
      ciudad: "Cartagena",
      direccion: "Manga Av Jimenez 43-45",
    },
  },
];

let mayor = 1;

// Función para agregar un nuevo contacto, la cual coloca incrementa el id automáticamente y valida si el contacto ya existe en la lista.
let agregarContacto = (name, lastName, phone, city, direction) => {
  for (const contact of listaContacto) {
    if (
      contact.nombre == name &&
      contact.apellidos == lastName &&
      contact.telefono == phone &&
      contact.ubicacion.ciudad == city &&
      contact.ubicacion.direccion == direction
    ) {
      console.log(
        `\nEl contacto ${name} ${lastName} ya existe en la lista, y no puede volver a agregarse.`
      );
      return;
    }
  }

  const nuevoContacto = {
    id: mayor + 1,
    nombre: name,
    apellidos: lastName,
    telefono: phone,
    ubicacion: {
      ciudad: city,
      direccion: direction,
    },
  };
  listaContacto.push(nuevoContacto);
  console.log(`\nLista de contactos con nuevo elemento ${name} ${lastName} :`);
  imprimir(listaContacto);
  mayor = nuevoContacto.id;
};

//Función para eliminar un contacto, la cual valida si el contacto a eliminar existe.
const eliminarContacto = (contactoBorrado) => {
  // let indice = listaContacto.map((item) => item.id).indexOf(contactoBorrado);
  let indice = listaContacto.findIndex((item) => item.id === contactoBorrado);

  if (indice != -1) {
    listaContacto.splice(indice, 1);
    console.log(
      `\nLista de contactos con contacto con id: ${contactoBorrado} eliminado:`
    );
    imprimir(listaContacto);
  } else {
    console.log(
      `\nEl contacto con id: ${contactoBorrado} no se encuentra en la lista y no puedo ser eliminado.`
    );
  }
};

//Función para actualizar el nombre de un contacto, la cual valida si el contacto a actualizar existe.
const actualizarContacto = (id, valorActual, valorNuevo) => {
  let indice = listaContacto.map((item) => item.id).indexOf(id);

  if (listaContacto[indice].nombre == valorActual) {
    listaContacto[indice].nombre = valorNuevo;
    console.log(
      `\nEl contacto con id: ${id} fue modificado ${valorActual} por ${valorNuevo}.`
    );
    imprimir(listaContacto);
  } else if (listaContacto[indice].apellidos == valorActual) {
    listaContacto[indice].apellidos = valorNuevo;
    console.log(
      `\nEl contacto con id: ${id} fue modificado ${valorActual} por ${valorNuevo}.`
    );
    imprimir(listaContacto);
  } else if (listaContacto[indice].telefono == valorActual) {
    listaContacto[indice].telefono = valorNuevo;
    console.log(
      `\nEl contacto con id: ${id} fue modificado ${valorActual} por ${valorNuevo}.`
    );
    imprimir(listaContacto);
  } else if (listaContacto[indice].ubicacion.ciudad == valorActual) {
    listaContacto[indice].ubicacion.ciudad = valorNuevo;
    console.log(
      `\nEl contacto con id: ${id} fue modificado ${valorActual} por ${valorNuevo}.`
    );
    imprimir(listaContacto);
  } else if (listaContacto[indice].ubicacion.direccion == valorActual) {
    listaContacto[indice].ubicacion.direccion = valorNuevo;
    console.log(
      `\nEl contacto con id: ${id} fue modificado ${valorActual} por ${valorNuevo}.`
    );
    imprimir(listaContacto);
  } else {
    console.log(
      `\nNo se actualizó el contacto con Id ${id}, porque no se encontró ${valorActual} en la lista de contactos.`
    );
  }
};

//Función para imprimir la lista de contactos
function imprimir() {
  for (lista in listaContacto) {
    console.log(`
        Id: ${listaContacto[lista].id}
        nombres: ${listaContacto[lista].nombre}
        apellidos: ${listaContacto[lista].apellidos}
        telefono: ${listaContacto[lista].telefono}
        ciudad: ${listaContacto[lista].ubicacion.ciudad}
        dirección: ${listaContacto[lista].ubicacion.direccion}`);
  }
}

//Impresión de la lista de contactos inicial
console.log(`Lista de contactos inicial:`);
imprimir();

//Llamado a las funciones
agregarContacto("Gilberto", "Santa Rosa", 6554565, "Bogotá", "Cra 43A #5B-18");

agregarContacto("Jerry", "Rivera", 3003925625, "Cali", "Cra 1 #2-3");

agregarContacto("Jerry", "Rivera", 3003925625, "Cali", "Cra 1 #2-3");

eliminarContacto(3);

agregarContacto("Juan Luis", "Guerra", 6554896, "Bucaramanga", "Cra 9 #55");

agregarContacto(
  "Celia",
  "Cruz",
  4586922,
  "San Andres",
  "Calle de la cruz No.5-33"
);

//Actualiza el nombre de un contacto
actualizarContacto(2, "Santa Rosa", "Peralta");
