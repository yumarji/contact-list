//LISTA DE CONTACTOS

//Se creó lista de contactos con datos predefinidos
const listaContacto = ["Juan Perez", "Yuli Martinez", "Camilo Sexto"];

//Función para agregar un nuevo contacto
function agregar(nuevoContacto) {
  listaContacto.push(nuevoContacto);
  return listaContacto;
}

//Función para borrar un contacto
function borrar(contactoBorrado) {
  let indexaborrar = listaContacto.indexOf(contactoBorrado);
  listaContacto.splice(indexaborrar, 1);
  return contactoBorrado, listaContacto;
}

//Función para imprimir la lista de contactos
function imprimir() {
  for (let i = 0; i < listaContacto.length; i++) {
    console.log(listaContacto[i]);
  }
}

//Imprime lista de contactos predefinida
console.log(`1. Lista de contactos predefinida:`);
imprimir();

//Imprime lista de contactos con el nuevo elemento
console.log(`\n2. Lista de contactos con nuevo elemento:`);
imprimir(agregar("Heidy Jimenez"));

//Imprime lista de contactos con el contacto eliminado
console.log(`\n3. Lista de contactos con contacto eliminado:`);
imprimir(borrar("Yuli Martinez"));
