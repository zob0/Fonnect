class Kviz {
  arrayOfQuestions = [];
  constructor(questions) {
    this.arrayOfQuestions = questions;
  }
}
class Question {
  arrayOfAnswers = [];
  answerIndex = 0;
  constructor(answers, index) {
    this.arrayOfAnswers = answers;
    this.answerIndex = index;
  }
}
let flag = true;
let odgovori = ["odgovor1", "odgovor2", "odgovor3"];
let q1 = new Question(odgovori, 0);
let q2 = new Question(odgovori, 1);
let q3 = new Question(odgovori, 2);
let q = [q1, q2, q3];
let k = new Kviz(q);
let dugme = document.getElementsByTagName("button")[0];
dugme.addEventListener("click", () => {
  let odgovor1 = document.querySelector("input[name=odgovor1]:checked").value;
  let odgovor2 = document.querySelector("input[name=odgovor2]:checked").value;
  let odgovor3 = document.querySelector("input[name=odgovor3]:checked").value;
  let oTemp = [odgovor1, odgovor2, odgovor3];
  for (let i = 0; i <= k.arrayOfQuestions.length; i++) {
    if (oTemp[i] != k.arrayOfQuestions[i].arrayOfAnswers[k.answerIndex]) {
      flag = false;
      console.log("pogresan odgovor");
    }
  }
});
