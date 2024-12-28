
// const num1 = +prompt("birinshi raqam kiriting")
// const num2 = +prompt("ikkinchi raqam kiriting")
// const num3 = confirm("qoshmoqchimisiz")

// if (num1 == +prompt + num2 == +prompt){
//     console.log(num1 + num2);
// }

// const num1 = +prompt("Birinchi raqam kiriting"); 
// const num2 = +prompt("Ikkinchi raqam kiriting");
// const num3 = confirm("Qoshmoqchimisiz?"); 

// if (num3) {  
//     console.log(num1 + num2); 
//     document.body.append(num3)
    
// } else {
//     console.log("Qoshish amalga oshirilmadi"); 
// }


// const operator = prompt("1) winter \n 2) summer \n 3) spring \n 4)autumn")
// const bot = document.createElement("h2")

// if(operator == 1){
//     bot.textContent = "issiro kiyin"
// }else if(operator == 2){
//     bot.textContent ="kopro su ich"
// }else if(operator == 3){
//     bot.textContent = "kamro aksir"
// }else if(operator == 4){
//     bot.textContent = "zonti op yur"
// }


// const userName = document.createElement("h2");
// const userSurname = document.createElement("h2");
// const userAge = document.createElement("h2");

// const name = prompt("Ismingizni kiriting:");
// const surname = prompt("Familyangizni kiriting:");
// const age = prompt("Yoshingizni kiriting:");
// const KottaKichik = confirm("Ism familiangizni kotta kichik kilmoqchimisiz?");

// if (name && surname && age !== null) {
//   if (KottaKichik) {
//     userName.textContent = `Ism: ${name.toUpperCase()}`;
//     userSurname.textContent = `Familya: ${surname.toUpperCase()}`;
//   } else {
//     userName.textContent = `Ism: ${name.toLowerCase()}`;
//     userSurname.textContent = `Familya: ${surname.toLowerCase()}`;
//   }
  
//   userAge.textContent = `Yosh: ${age}`;
  
//   document.body.append(userName, userSurname, userAge);
// } else {
//   alert("Iltimos ism, familia, va yoshni kiriting.");
// }



const userName = document.createElement("h1");
userName.style.color = "aqua";
userName.style.textAlign = "center"
userName.style.fontSize = "50px"

const userSurname = document.createElement("h2");
userSurname.style.color = "green";
userSurname.style.textAlign = "center"
userSurname.style.fontSize = "50px"

const userAge = document.createElement("h2");
userAge.style.color = "yellow";
userAge.style.textAlign = "center"
userAge.style.fontSize = "50px"


const name = prompt("Ismingizni kiriting:");
const surname = prompt("Familyangizni kiriting:");
const age = prompt("Yoshingizni kiriting:");

if (name && surname && age ) {
  userName.textContent = `Ism: ${name}`;
  userSurname.textContent = `Familya: ${surname}`;
  userAge.textContent = `Yosh: ${age}`;

  document.body.append(userName, userSurname, userAge);
}
 else {
  alert("Iltimos ism familangiz ni kiriting");
}
