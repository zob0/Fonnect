// let dugme = document.getElementById("dugme");
// let dugmeR = document.getElementById("dugmeR");
// let array = { pera: "Pera", mika: "Mika", zika: "Zika" };
// dugme.addEventListener("click", () => {
//   console.log(array);
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   if (Object.keys(array).indexOf(username) == -1) {
//     console.log("nema korisnika");
//   } else if (
//     Object.keys(array).indexOf(username) ==
//     Object.values(array).indexOf(password)
//   ) {
//     console.log("bravo");
//   } else {
//     console.log("ne valja");
//   }
// });

// dugmeR.addEventListener("click", () => {
//   let username = document.getElementById("usernameR").value;
//   let password = document.getElementById("passwordR").value;
//   let email = document.getElementById("email").value;
//   if (validateRegister(username, password, email)) {
//     array[username] = password;
//     console.log("dodat korisnik");
//   }
// });

// function validateRegister(username, password, email) {
//   let flag = true;
//   //   if (
//   //     !email.includes("@") ||
//   //     email.length < 8 ||
//   //     username.length == 0 ||
//   //     password.length == 0 ||
//   //     email.charAt(0) == "@" ||
//   //     email.charAt(email.length - 1) == "@"
//   //   ) {
//   //     return false;
//   //   }
//   //   return true;
//   if (username.length == 0) {
//     let message = document.createElement("p");
//     message.innerHTML += "username ne valja";
//     document.getElementById("usernameContainer").appendChild(message);
//     flag = false;
//   }
//   if (password.length == 0) {
//     let message = document.createElement("p");
//     message.innerHTML = "password ne valja";
//     document.getElementById("passwordContainer").appendChild(message);
//     flag = false;
//   }
//   if (
//     email.length < 8 ||
//     !email.includes("@") ||
//     email.charAt(0) == "@" ||
//     email.charAt(email.length - 1) == "@"
//   ) {
//     let message = document.createElement("p");
//     message.innerHTML = "email ne valja";
//     console.log(message);
//     document.getElementById("emailContainer").appendChild(message);
//     flag = false;
//   }
//   return flag;
// }
let username;
let password;

document.getElementById("dugmence").addEventListener("click", () => {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  if (username == "") {
    alert("morate uneti username");
    return;
  }
  if (password == "") {
    alert("morate uneti password");
    return;
  }
  if (!(username == "bobo" && password == "bobo")) {
    alert("pogresan username ili sifra");
    return;
  }
  // window.location.href = "/index2.html";
  location.href = "/main.html";
});
