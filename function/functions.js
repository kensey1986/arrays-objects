
/**
 * 
 * @param {numero} numero 
 * @returns retorna un numero multiplicado por si mismo
 */

function dobleDeUnNumero(numero, parametro2) {
    const resp = validadorNumero(numero);
    if (resp !== 'ok') {
        console.log('Solo Numeros por favor!!')
        return;
    } 
    return numero * numero;
  }


  const validadorNumero = (dato) => { 
       if (typeof(dato)==='number') {
           return 'ok';
       } 
       return null;
  }