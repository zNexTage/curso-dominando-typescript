/*
    Funções em interface
 */
interface ISoma {
    (num1: number, num2: number): number; //Função
}

let primeiraSoma: ISoma;

primeiraSoma = (num1: number, num2: number): number => num1 + num2;
console.log("Função em interface");
console.log(primeiraSoma(20, 40));
console.log("************************************");
/***************************/

/*
    Métodos em interface
*/
console.log("Métodos em interface");
interface ICalculos {
    //Métodos
    somar: (a: number, b: number) => number;
    substrair: (a: number, b: number) => number;
    multiplicar: (a: number, b: number) => number;
    dividir: (a: number, b: number) => number;
}

let calculadora: ICalculos;

calculadora = {
    somar: (a, b) => a + b,
    dividir: (a, b) => a / b,
    multiplicar: (a, b) => a * b,
    substrair: (a, b) => a - b
}

console.log(calculadora.somar(10,20));
console.log(calculadora.dividir(20,5));
console.log(calculadora.multiplicar(5,5));
console.log(calculadora.substrair(1000,500));
