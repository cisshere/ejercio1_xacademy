/* 1) Escribir un programa que, dada una edad, imprima en consola
 si la persona es mayor de 18 años y puede conducir. */

const mayorDe18 = () => {
    let edad = prompt("Ingrese su edad");
    edad = parseInt(edad);
    if (edad >= 18) {
        return ("Es mayor de edad, puede conducir");
    } else {
        return ("Es menor de edad, no puede conducir");
    }
}

console.log(mayorDe18());

/* 2) Escribir un programa que, dada una nota (número),
 imprima en consola la calificación según la nota. */


const calificacion = () => {
    let nota = prompt("Ingrese una nota");
    nota = parseFloat(nota);

    switch (true) {
        case nota >= 0 && nota <= 3:
            return "Muy deficiente";
        case nota >= 3 && nota <= 5:
            return "Insuficiente";
        case nota > 5 && nota <= 6:
            return "Suficiente";
        case nota > 6 && nota <= 7:
            return "Bien";
        case nota > 7 && nota <= 9:
            return "Notable";
        case nota > 9 && nota <= 10:
            return "Sobresaliente";
        default:
            return "las notas son del 0 al 10";
    }
}

console.log(calificacion());


/* 3) Realizar un script que escriba una pirámide del 1 al 6. */

const piramideRepetitiva = (niveles) => {
    for (let i = 1; i <= niveles; i++) {
        let linea = ' ';
        for (let a = 1; a <= i; a++) {
            linea += i;
        }
        console.log(linea);
    }
}

piramideRepetitiva(6);

/* 4) Realizar un script que escriba una pirámide del 1 al 6. */

const piramide = (niveles) => {
    for(let i = 1; i <= niveles; i++){
        let linea = ' ';
        for (let a = 1; a <= i; a++){
            linea += a;
        }
        console.log(linea);
    }
}

piramide(6);