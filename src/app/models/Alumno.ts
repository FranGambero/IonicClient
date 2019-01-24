export class Alumno {
    id? : number;
    nombre? : string;
    ciudad? : string;
    cpostal? : number;
    email? : string;
    curso? : number;

    constructor(
        id? : number,
    nombre? : string,
    ciudad? : string,
    cpostal? : number,
    email? : string,
    curso? : number
    ) {
        this.id = id || null;
        this.nombre = nombre || '';
        this.ciudad = ciudad || '';
        this.cpostal = cpostal || null;
        this.email = email || '';
        this.curso = curso || null;
    }
}