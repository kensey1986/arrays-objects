
 const validadorSoloNumero = (dato) =>{
     if (typeof(dato)==='number') {
         return 'ok';
     } 
     console.log('retornara null')
     return null;
 }
 const soloPositivos = (dato) => {
     if (validadorSoloNumero() !== null) {
         if (dato<0 && dato !== 0) {
             dato = dato *-1;
             return dato;
         }
     }
     return dato;
 }
 module.export = { validadorSoloNumero, soloPositivos};