/* 
    vous avez trois bouteille rangé dans l'ordre croissant de 1 à 3,
    la bouteille 2 contient le tiers de la bouteille une, et la bouteille 3 contient la moitié le la bouteille 2

    on vous demande d'écrire un programme qui permettra de remplir les bouteilles selon les calculs suivants

    la bouteille n°1 est constitué de 30 billes, les 30 billes sont les 30 nombres premiers compris entre 1 et 110;

    la bouteille n°2  est constitué de l'addition successive de trois élément de la bouteille n° 1;

    la bouteille n°3 est constitué des billes de la bouteille n°2 qui augmenté de 2 sont des multiples de trois



    ensuite vous concatenerez tous les tableaux , et donnerez la somme de tous les nombres du tableau obtenue;

    vous retournez cette somme et le modulo par deux de cette somme;




*/


// l'algorithme

function TestUltime() {

    let bouteille1 = [],
        bouteille2 = [],
        bouteille3 = [];
    let compteur = 0;
    for (let i = 1; i <= 130; i++) {
        if (!(IfDivisibleParLesAutresNombres(i))) {
            bouteille1.push(i)
            compteur++
        }
        if (compteur === 30) {
            break;
        }

    }

    let compt = 0;
    let association = 0;
    for (let i = 0; i < bouteille1.length; i++) {
        association += bouteille1[i];
        compt++;
        if (compt === 3) {
            bouteille2.push(association);
            compt = 0;
            association = 0;
        }
    }

    for (let i = 0; i < bouteille2.length; i++) {
        let c = bouteille2[i] + 2
        if (c % 3 === 0) {
            bouteille3.push(bouteille2[i]);
        }
    }

    const allTab = bouteille1.concat(bouteille2).concat(bouteille3);
    let sommeFinal = 0;
    let i = 0;
    while (i < allTab.length) {
        sommeFinal += allTab[i];
        i++;
    }

    return [sommeFinal, sommeFinal % 2]

}





const IfDivisibleParLesAutresNombres = (nombre) => {
    let verif = false;
    for (let s = 1; s <= 130; s++) {
        if (s !== 1 && s !== nombre) {
            if (nombre % s === 0) {
                verif = true;
            }
        }
    }
    return verif;
}

console.log(TestUltime());