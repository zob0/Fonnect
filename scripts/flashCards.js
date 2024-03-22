// let cardsMata = [
//   {
//     tekst: "tekst1",
//     odgovor: "odgovor1",
//   },
//   {
//     tekst: "tekst2",
//     odgovor: "odgovor2",
//   },
//   {
//     tekst: "tekst3",
//     odgovor: "odgovor3",
//   },
//   {
//     tekst: "tekst4",
//     odgovor: "odgovor4",
//   },
//   {
//     tekst: "tekst5",
//     odgovor: "odgovor5",
//   },
// ];
// let cardsEkonomija = [
//   {
//     tekst: "tekst1ekonomija",
//     odgovor: "odgovor1ekonomija",
//   },
//   {
//     tekst: "tekst2ekonomija",
//     odgovor: "odgovor2ekonomija",
//   },
//   {
//     tekst: "tekst3ekonomija",
//     odgovor: "odgovor3ekonomija",
//   },
//   {
//     tekst: "tekst4ekonomija",
//     odgovor: "odgovor4ekonomija",
//   },
//   {
//     tekst: "tekst5ekonomija",
//     odgovor: "odgovor5ekonomija",
//   },
// ];
// // let arrayOfIndexes = [];
// // for (let i = 0; i < cards.length; i++) {
// //   let randomI = Math.floor(Math.random() * cards.length);
// //   while (arrayOfIndexes.includes(randomI))
// //     randomI = Math.floor(Math.random() * cards.length);
// //   arrayOfIndexes[i] = randomI;
// //   console.log(cards[randomI].tekst);
// // }

// let i = 0;
// let arrayOfIndexes = [];
// let cards;
// let dugme = document.getElementsByTagName("button")[0];
// dugme.addEventListener("click", () => {
//   switch (document.getElementsByTagName("select")[0].value) {
//     case "mata":
//       cards = cardsMata;
//       break;
//     case "eko":
//       cards = cardsEkonomija;
//       break;
//   }
//   let test = document.createElement("p");
//   let randomI = Math.floor(Math.random() * cards.length);
//   if (i == cards.length) {
//     console.log("prosle sve kartice");
//     return;
//   }
//   while (arrayOfIndexes.includes(randomI))
//     randomI = Math.floor(Math.random() * cards.length);
//   arrayOfIndexes[i++] = randomI;
//   console.log(cards[randomI].tekst);
//   test.value = cards[randomI].tekst;
//   document.getElementsByTagName("body")[0].appendChild(test);
// });
let cards = [
  {
    tekst: "Koja je razlika izmedu HTTP i HTTPs zahteva?",
    odgovor: "Ovaj drugi je toboze siguran",
  },
  {
    tekst: "Sta je 14. februara?",
    odgovor: "Osmi mart",
  },
  {
    tekst: "Sta nemaju radnici Nisa?",
    odgovor: "Prava i pecat",
  },
  {
    tekst:
      'Koje musko ime se uzvikuje sa krova na kraju filma "Kad porastem bicu kengur"?',
    odgovor: "Dusan",
  },
  {
    tekst:
      "U koje vreme je zena iz Pecenjevca vozom stigla na otvaranje Lidla?",
    odgovor: "5 do 5 iz Pecenjevca i 15 do 5 VOZOM",
  },
];
let flag = false;
let frontTekst = document.getElementById("front");
let backTekst = document.getElementById("back");
let i = 0;
let parnostKlika = 0;
let arrayOfIndexes = [];
let randomI = Math.floor(Math.random() * cards.length);
arrayOfIndexes[i++] = randomI;
frontTekst.innerHTML = cards[randomI].tekst;
backTekst.innerHTML = cards[randomI].odgovor;
let dugme = document.getElementsByTagName("button")[0];
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    if (flag) return;
    // if (i == cards.length && parnostKlika % 2 == 0) {
    //   return;
    // }
    card.classList.toggle("is-flipped");
  });
});
dugme.addEventListener("click", () => {
  if (i == cards.length && parnostKlika % 2 != 0) {
    flag = true;
    alert("odgovorili ste na sva pitanja");
    return;
  }
  console.log(i);
  console.log(parnostKlika);
  parnostKlika++;
  // console.log(dugme.innerHTML);
  if (dugme.innerHTML == "Odgovori") dugme.innerHTML = "Sledeca";
  else dugme.innerHTML = "Odgovori";
  if (parnostKlika % 2 == 0) {
    while (arrayOfIndexes.includes(randomI) && i < cards.length)
      randomI = Math.floor(Math.random() * cards.length);
    arrayOfIndexes[i++] = randomI;
    frontTekst.innerHTML = cards[randomI].tekst;
    backTekst.innerHTML = cards[randomI].odgovor;
  }
});
// dugme.addEventListener("click", () => {
//   switch (document.getElementsByTagName("select")[0].value) {
//     case "mata":
//       cards = cardsMata;
//       break;
//     case "eko":
//       cards = cardsEkonomija;
//       break;
//   }
//   let test = document.createElement("p");
//   if (i == cards.length) {
//     console.log("prosle sve kartice");
//     return;
//   }
//   while (arrayOfIndexes.includes(randomI))
//     randomI = Math.floor(Math.random() * cards.length);
//   console.log(cards[randomI].tekst);
//   test.value = cards[randomI].tekst;
//   document.getElementsByTagName("body")[0].appendChild(test);
// });
// // frontTekst.innerHTML = "test";
