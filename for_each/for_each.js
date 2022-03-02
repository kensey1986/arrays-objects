 let miPrimerArray= ['pepe', 555555, true, 'otra cosa'];
 miPrimerArray.forEach((elementos) =>      console.log(elementos) );
 
 console.log('====================================');
 console.log(miPrimerArray[3]);
 console.log('====================================');

 function mutandoArray (dato) {
     miPrimerArray.push(dato);
     miPrimerArray.push(555);
     miPrimerArray.forEach((elementos) =>      console.log(elementos) );
    }
    
    miPrimerArray.push('salio de la funcion')
    miPrimerArray.forEach((elementos) =>      console.log(elementos) );
 


 

//   for (let index=0; index<miPrimerArray.length; index++){
//       const elemento = miPrimerArray[index];
//       console.log(elemento);
//   }