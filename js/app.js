function cambiartitulo() {
  console.log("Aqui estoy dentro de la funcion cambiarTitulo");
  // traer el titulo o h1

  // let vtitulo = document.querySelector('#titulo');
  // Otra manera de traer el H1

  let vtitulo = document.getElementById("titulo");
  console.log(vtitulo);
  // innerHTML -> sirve para cambiar la cadena de texto del objeto html
  vtitulo.innerHTML = "Titulo modificado";
  // modificar la clase del objeto
  vtitulo.className = "text-warning display-4";
}

function verMas() {
  console.log("desde la funcion ver mas");
  // buscar el elemento padre
  let contPadre = document.querySelector("#articulo");
  console.log(contPadre);
  let btnVermas = document.querySelector("#btnVermas");
  if (btnVermas.innerHTML == "Ver mas") {
    // opcion 1 'camino corto'

    // contPadre.innerHTML += `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente earum, quae necessitatibus repellendus nihil praesentium, quod voluptatum aut minima fugiat consectetur reiciendis beatae nam.</p>` ;

    // opcion 2 'camino largo'
    
    // 1-crear el elemento
    let parrafo = document.createElement(`p`);
    // 2- trabajar el elemento creado
    parrafo.innerHTML = "se agrega parrafo de prueba";
    parrafo.className = "lead";
    // 3- insertar elemento en el maquetado
    contPadre.appendChild(parrafo);
    console.log(btnVermas);
    btnVermas.innerHTML = "Ocultar";
    btnVermas.className = "btn btn-danger";
  } else {
    console.log("se oculta texto de btn");
    // borrar el parrafo del DOM
    console.log(contPadre.hasChildNodes()); //devuelve True o False
    console.log(contPadre.children); // devuelve arreglo con los nodos hijos
    if (contPadre.hasChildNodes() && contPadre.children.length == 2) {
      // aqui remuevo nodo
      contPadre.removeChild(contPadre.children[1]);
      // cambiar el texto del btn
      btnVermas.innerHTML = "Ver mas";
      btnVermas.className = "btn btn-primary";
    }
  }
}
// la propiedad par a acceder al texto de  un imput es value , no innerHTML


