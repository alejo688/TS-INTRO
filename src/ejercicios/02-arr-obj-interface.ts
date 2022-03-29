/*
    ===== Código de TypeScript =====
*/

// Arreglos

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

habilidades.push('Tank');

//console.log(habilidades);

// La interfaz es el asegurar que un objeto cumpla con unas condiciones especificas
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

// Objetos

const personaje: Personaje = {
    nombre: 'Strinder',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);