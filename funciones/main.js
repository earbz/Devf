// Funciones
// function nombredelafuncion(){}

// function mostrar MostrarHorario(){
//     let fecha = new Date()
//     hora=fecha.getHours()+':'+ fecha.getMinutes()+':'+fecha.getSeconds
// }

// EJERCICIO SUMA
//     let x =Number(prompt('Numero1'));
//     let y =Number(prompt('Numero2'));

//         function suma(x,y){
//         let total = x + y;
//         console.log(total)
// }
// suma(x,y);

// EJERCICIO RESTA 

// let x =Number(prompt('Numero1'));
// let y =Number(prompt('Numero2'));
// let z=Number(prompt('Numero3'));

//         function resta(x,y,z){
//         let total = x - y - z;
//         console.log(total)
// }
// resta(x,y,z);

// EJERCICIO MULTIPLICACION
// let x =Number(prompt('Numero1'));
// let y =Number(prompt('Numero2'));


//         function multiplicacion(x,y){
        
//         for (let i= 1 ; i<=y; i++){
//             console.log(x,'x',i,'=', x * i )

//         }
// }
// multiplicacion(x,y);

// ---------------------------------------------
// const aleatorio = function(){
//     let num =Math.random()
//     num*=100
//     let entero = Math.floor(num)
//     console.log('entero', entero)
//     return entero
// }   
//     const suma = function(a,b){
//         let res = a + b
//         return res
//     }
//     const total=suma(aleatorio(), aleatorio())
//     console.log(total)
// ------------------------------------------------
const suma = function(a,b){
    let res = a + b
    return res
}
    const total = suma(aleatorio(), aleatorio())
    console.log(total)

    const saludo = () => {
        return 'hola'
    }