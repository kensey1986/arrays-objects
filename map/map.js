const persona = new Object();

persona.nombre = 'pepe';
persona.edad = 15;
persona.telefono = '5565656';
persona.sueldo = 150000;

const persona2 = new Object();

persona2.nombre = 'rosa';
persona2.edad = 10;
persona2.telefono = '4654654654';
persona2.sueldo = 185000;

const persona3 = new Object();

persona3.nombre = 'camilo';
persona3.edad = 17;
persona3.telefono = '416545465';
persona3.sueldo = 85000;


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

//  const unArraymas = arrayObjeto.map((elemento)=> console.log('hola'))
    // const otroArray = arrayObjeto.map( (element) => {
    //     let dato = 'este no cumple';
    //     if (element.edad >12 && element.sueldo > 100000) {
    //         dato = 'si encontro';
    //     }
    //     return dato ;
    // } );

    const otroArray = arrayObjeto.map( (element) => {
        let dato;
        if (element.edad >12 && element.sueldo > 100000) {
            dato = element;
        }
        return dato ;
    } );
     console.log('====================================');
     console.log(otroArray);
     console.log('====================================');

     const appNodo = document.getElementById('app');

     otroArray.forEach((element) => {
        if (element !== undefined) {
            appNodo.innerHTML += `<li> ${element.nombre} - ${element.sueldo} </li>`
        } 

        //  element? appNodo.innerHTML += `<li> ${element.nombre} - ${element.sueldo} </li>`: null
     });

     const meses =[ { mes: 'enero', diafestivo: 15}, 'Febrero']