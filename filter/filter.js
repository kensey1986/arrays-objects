const persona = new Object();

persona.nombre = 'pepe';
persona.edad = 15;
persona.telefono = '5565656';
persona.estado = false;

const persona2 = new Object();

persona2.nombre = 'rosa';
persona2.edad = 10;
persona2.telefono = '4654654654';
persona2.estado = true;


const persona3 = new Object();

persona3.nombre = 'camilo';
persona3.edad = 30;
persona3.telefono = '456445454';
persona3.estado = true;


const arrayObjeto = [];

 arrayObjeto.push(persona);
 arrayObjeto.push(persona2);
 arrayObjeto.push(persona3);

      console.log('===============arrayObjeto=====================');
      console.log(arrayObjeto);
      console.log('====================================');

     let nombreFiltro = 'camilo'; 
     nombreFiltro='pepe';


    const otroArray = arrayObjeto.filter( item => item["nombre"] === `${nombreFiltro}`)

    console.log('=============otro array=======================');
    console.log(otroArray);
    console.log('====================================');

     const app = document.getElementById('app');

     otroArray.forEach(element => {
         app.innerHTML += `<li> ${element.nombre}</li>`
     });