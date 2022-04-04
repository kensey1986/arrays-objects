 let miPrimerArray= ['pepe', 555555, true, 'otra cosa', 'otro dato', 45454];
// console.log("🚀 ~ file: for_each.js ~ line 2 ~ miPrimerArray", miPrimerArray)

//  esto es un array
const persona = new Object();
 persona['nombre'] ='pepe';
 persona.edad = 55;
 persona.vivo = true;

miPrimerArray.push(persona);


console.log("🚀 ~ file: for_each.js ~ line 6 ~ miPrimerArray", miPrimerArray)
const appNodo = document.getElementById('app');
console.log("🚀 ~ file: for_each.js ~ line 8 ~ appNodo", appNodo);
 
    miPrimerArray.forEach(element => {
         appNodo.innerHTML +=  `<li> Esto es <strong>elemento llamado </strong> **= ${element.edad}  =**de mi array </li>`
     });


//  console.log(persona);


//  miPrimerArray.forEach((lista) => console.log(lista) );
 
//  for (let index = 0; index < miPrimerArray.length; index++) {
//     console.log('--for---')
//     console.log(miPrimerArray[index]);
     
//  }
 
//  function saludar (valores1, valores2){
//     console.log();
//  }


//  console.log('====================================');
//  console.log(miPrimerArray[3]);
//  console.log('====================================');

//  function mutandoArray (dato) {
//      miPrimerArray.push(dato);
//      miPrimerArray.push(555);
//      miPrimerArray.forEach((elementos) =>      console.log(elementos) );
//     }
    
//     miPrimerArray.push('salio de la funcion')
//     miPrimerArray.forEach((elementos) =>      console.log(elementos) );
 


 

//   for (let index=0; index<miPrimerArray.length; index++){
//       const elemento = miPrimerArray[index];
//       console.log(elemento);
//   }


// const otroArray = arrayObjeto.map( element => element.edad >12 )

//      console.log('====================================');
//      console.log(otroArray);
//      console.log('====================================');

//      const app = document.getElementById('app');

//      otroArray.forEach(element => {
//          app.innerHTML += `<li> ${element}</li>`
//      });