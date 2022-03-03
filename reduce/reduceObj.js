 const dataBase = [
     {
         nombre: 'carlos',
         salario: "alto"
     },
     {
        nombre: 'sofia',
        salario: "medio"
    },
    {
        nombre: 'monica',
        salario: "alto"
    },
    {
        nombre: 'pepe',
        salario: "bajo"
    },
    {
        nombre: 'carla',
        salario: "bajo"
    },
    {
        nombre: 'eduardo',
        salario: "medio"
    },
    {
        nombre: 'paola',
        salario: "bajo"
    },
 ];

 const respuesta = dataBase
    .map( item => item.salario )
    .reduce( (obj, item) => {
     console.log(item);
     console.log(!obj[item]);
         if (!obj[item]) {
             obj[item] = 1;
         } else{
             obj[item] = obj[item] + 1;
         }
         return obj;
 }, {} );

 console.log('====================================');
 console.log(respuesta);
 console.log('====================================');

  const nuevoArray = [];
  nuevoArray.push(respuesta);
  const app = document.getElementById('app');
//   nuevoArray.forEach(element => {
//          if (element["alto"]) {
//              app.innerHTML += `<li> Alto: ${element.alto}</li>`
//          }
//          if (element["medio"]) {
//              app.innerHTML += `<li> Medio: ${element.medio}</li>`
//          }
//          if (element["bajo"]) {
//              app.innerHTML += `<li> bajo: ${element.bajo}</li>`
//          }
//      });

 nuevoArray.forEach(element => {
     app.innerHTML += `<li> Alto: ${element.alto}</li>`
     app.innerHTML += `<li> Medio: ${element.medio}</li>`
     app.innerHTML += `<li> bajo: ${element.bajo}</li>`
  });
