"use strick" ;

let formElement = document.getElementById("resgitration");

//submit - გვერდი რომ არ დარეფრეშდეს

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {}; // შეცდომის ობიექტი, თუ მომხმარებელს არ ექნება შეცდუმა ერორ ობიექტი ცაარიელი იქნება

  //username
  // usernameValue - ცვლადი
  // usernameValue - მომხმარებლის ჩაწერილი ინფო იქნება ჩაწერილი ამ ცვლადში

  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Username field can not be empty";
  }

  // password
  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  // თუ მომხმარებელს ამ ველში არაფერი ექნება ჩაწერილი ამოაგდებს Password field can not be empty

  // თუ პირველი პაროლი არ ემთხვევა მეორე პაროლს მაშინ ამოვარდება შეცდომა და ამოვარდება Passwords do not match

  if (passwValue == "") {
    errors.passw = "Password field can not be empty";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }

  // radio

  // radio

  //gender - ცვლადი

// რომელიმე ერთი ანუ ქალია თუ კაცია არის თუ არა მონიშნული ამით უნდა გადავუაროთ foreach-ს საშუალებით

  let gender = false;



  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

// ! შემობრუნებული ვარიანტი, საპირისპირო ჩანაწერი
// თუ მომხმარებელმა არაფერი მონიშნა გამოჩნდება ერორი და დაეწერება Please select Your Gender

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }

  //checkbox

  // ამ დროს გვაინტერესებს მონიშნულია თუ არა როგორც სქესის დროს და ვიყენებთ checked-ის საშუალებით 
  // თუ არ არის არცერთი მონიშნული აქაც გამოჩნდება ერორი თავისი წარწერით

  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "You must Agree Our Terms and Conditions";
  }

  // დავასელექთოთ ყველა ის პე ტექსტი რომ გასუფთავდეს კონკრეტული ტექსტი დასაბმითების შემდეგ.

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.innerText = " ";
  });


  // შეცდომები
  for (let item in errors) {
    console.log(item); // check; gender; passw;username

    // errorText -ცვლადი, დავასელექთოთ ყველა შეცდომის პე - აიდის საშუალებით, ყველას აქვს ერთნაირი პრინციპი, ყველას აწერია ერორ და მერე ნეიმ ატრიბუტი, ანუ ვწერთ "error-" + item

    let errorText = document.getElementById("error-" + item);

    // თუ მოხდა შეცდომა, და გვინდა შესაბამისი ტექსტის გაწერა ამისთვის ვწერთ 

    if (errorText) {
      errorText.textContent = errors[item];
    }
  }

  console.log(Object.keys(errors));
  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }

  console.log(errors);
});

// error objs
// let errors = {
//   check: "You must Agree Our Terms and Conditions",
//   gender: "Please select Your Gender",
//   passw: "Password field can not be empty",
//  username: "Username field can not be empty"
// }



// show hide password
let passwShow = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

showHidePassword = () => {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
};

icon.addEventListener("click", showHidePassword);
// function showHidePassword() {



// email validation - regex

let email = document.getElementById("emailfield");

function validationEmail() {
  let emailField = document.getElementById("emailfield").value;
  let errortextEmail = document.getElementById("emailError");
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailField.match(emailRegex)) {
    errortextEmail.textContent = "Your Email is Valid";
    errortextEmail.style.color = "green";
  } else {
    errortextEmail.textContent = "Your Email is Invalid";
    errortextEmail.style.color = "red";
  }

  if (emailField == "") {
    errortextEmail.textContent = "";
  }
}

email.addEventListener("keyup", validationEmail);