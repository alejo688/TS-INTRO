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

interface PersonajeEnderRing {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar( personaje: PersonajeEnderRing, curarX: number ): void {
    personaje.pv += curarX;

    console.log( personaje );
}

const nuevoPersonaje: PersonajeEnderRing = {
    nombre: 'Lucius',
    pv: 50,
    mostrarHP() {
        console.log( 'Puntos de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHP();


// const resultadoSuma: number = sumar(10,20);

// const resultadoResta: number = restar(10,10);

// const resultadoMultiplicacion = multiplicar(5, 0, 10);

// console.group("Operaciones");
// console.log(resultadoSuma);
// console.log(resultadoResta);
// console.log(resultadoMultiplicacion);
// console.groupEnd();
