/*
    ===== Código de TypeScript =====
*/


function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

const restar = (numero1: number, numero2: number): number => numero1 - numero2;

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultadoSuma: number = sumar(10,20);

const resultadoResta: number = restar(20,10);

const resultadoMultiplicacion = multiplicar(5, 0, 10);

console.group("Operaciones");
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.groupEnd();
