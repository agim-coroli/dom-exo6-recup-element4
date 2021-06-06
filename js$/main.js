// 1. Affiche le h3 qui est le premier enfant de la div content
let a = document.getElementsByTagName("div")[0].firstElementChild
console.log(a);

// 2. Affiche le titreNiv3
let b = document.getElementsByTagName("h3")[1]
console.log(b);

// 3. Affiche l'élément qui précède le titreNiv3
let c = document.getElementsByTagName("h3")[1].previousElementSibling
console.log(c);

// 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let d = document.getElementsByTagName("p")[1].nextElementSibling
console.log(d);

// 5. Affiche le parent des éléments ayant comme class "important" 
let e = Array.from(document.getElementsByClassName("important"))
e.forEach(element => {
    console.log(element.parentNode);
});

// 6. Affiche le premier enfant, du parent de "listElements"
let f = document.getElementsByTagName("ul")[0].firstElementChild
console.log(f);

// 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let g = document.getElementsByTagName("li")[3].nextElementSibling
console.log(g);

// 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let h = document.getElementsByTagName("p")[3].nextElementSibling.nextElementSibling
console.log(h);

// // 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let i = document.getElementsByTagName("span")[1].parentElement.nextElementSibling
console.log(i);

// // 10. En partant de Nicolas, affiche Primo
let j = document.getElementsByTagName("b")[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild
console.log(j);

// 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let k = document.querySelector(".grandParagraphe")
console.log(k);

// // 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle
let l = Array.from(document.querySelectorAll("li"))
l.forEach(elt => {
    console.log(elt);
});