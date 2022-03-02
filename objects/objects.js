const persona = new Object();

persona.nombre = 'pepe';
persona.edad = 15;
persona.telefono = '5565656';

const persona2 = new Object();

// persona2.nombre = 'juan';
persona2.edad = 16;
persona2.telefono = '4646465464';

// console.log(persona["nombre"]);

const myArray=[]
 myArray.push(persona);
 myArray.push(persona2);

 myArray.forEach(element => {
     console.log(element["nombre"]);
 });