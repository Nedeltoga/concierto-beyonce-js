// Tu código va aquí: 

/* Parte 1 */
let edad=16

if(edad < 14) {
    console.log ("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")
} if (edad >= 14 && edad <= 17) {
    console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad.")
} if (edad > 17) {
    console.log ("Eres mayor de edad, puedes entrar.")
}


/* Parte 2 */

function gestionarAdmision (edad) {
    if(edad < 14) {
        console.log ("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")
    } if (edad >= 14 && edad <= 17) {
        console.log("Puedes entrar, pero sólo si te acompaña una persona mayor de edad.")
    } if (edad > 17) {
        console.log ("Eres mayor de edad, puedes entrar.")
    }
}


gestionarAdmision (0);
gestionarAdmision (8);
gestionarAdmision (12);
gestionarAdmision (14);
gestionarAdmision (17);
gestionarAdmision (18);
gestionarAdmision (35);
gestionarAdmision (99);


/* extra control de entradas - por experimentar más con JS-

let tieneTicket=1;
if(tieneTicket){
   console.log ("puede entrar")
} else {
    ("no puede entrar")
}

*/
