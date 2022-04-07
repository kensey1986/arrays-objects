const persona = new Object();

persona.nombre = 'pepe';
persona.edad = 15;
persona.telefono = '5565656';
persona.estado = false;

const persona2 = new Object();

persona2.nombre = 'rosa';
persona2.edad = 55;
persona2.telefono = '4654654654';
persona2.estado = true;


const persona3 = new Object();

persona3.nombre = 'camilo';
persona3.edad = 55;
persona3.telefono = '456445454';
persona3.estado = true;

const persona4 = new Object();

persona4.nombre = 'camilo';
persona4.edad = 55;
persona4.telefono = '54545454';
persona4.estado = false;


const arrayObjeto = [];
 arrayObjeto.push(persona);
 arrayObjeto.push(persona2);
 arrayObjeto.push(persona3);
 arrayObjeto.push(persona4);

      console.log('===============arrayObjeto=====================');
      console.log(arrayObjeto);
      console.log('====================================');

     let parametroFiltro = 55;
    //  nombreFiltro='pepe';




    const otroArray = arrayObjeto.filter( item => {
        let dato = 'fallo';
        if (item["edad"] === parametroFiltro) {
           return dato;
        }
         console.log('dato ', dato);
        return null;
    } );

    console.log('=============otro array=======================');
    console.log(otroArray);
    console.log('====================================');

     const app = document.getElementById('app');

     otroArray.forEach(element => {
         app.innerHTML += `<li> ${element.nombre}</li>`
     });