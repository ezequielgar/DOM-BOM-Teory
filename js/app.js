function cambiartitulo(){
    console.log('Aqui estoy dentro de la funcion cambiarTitulo')
    // traer el titulo o h1
    let vtitulo = document.querySelector('#titulo');
    console.log(vtitulo);
    // innerHTML -> sirve para cambiar la cadena de texto del objeto html
    vtitulo.innerHTML = 'Titulo modificado';
    // modificar la clase del objeto
    vtitulo.className = 'text-warning display-4'
}