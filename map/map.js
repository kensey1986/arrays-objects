const persona = new Object();

persona.nombre = 'pepe';
persona.edad = 15;
persona.telefono = '5565656';

const persona2 = new Object();

persona2.nombre = 'rosa';
persona2.edad = 10;
persona2.telefono = '4654654654';

const persona3 = new Object();

persona3.nombre = 'camilo';
persona3.edad = 17;
persona3.telefono = '416545465';

const arrayObjeto = [];

 arrayObjeto.push(persona);
 arrayObjeto.push(persona2);
 arrayObjeto.push(persona3);

//  const newArray = [];
//  for (let index = 0; index < arrayObjeto.length; index++) {
//      const element = arrayObjeto[index];
  
//      newArray.push(element.nombre + ' +** +')
  
//  }
//      console.log('============datos========================');
//      console.log(arrayObjeto);
//      console.log('====================================');
//      console.log('============newArray========================');
//      console.log(newArray);
//      console.log('====================================');

const otroArray = arrayObjeto.map( element => element.edad >12 )

     console.log('====================================');
     console.log(otroArray);
     console.log('====================================');

     const app = document.getElementById('app');

     otroArray.forEach(element => {
         app.innerHTML += `<li> ${element}</li>`
     });