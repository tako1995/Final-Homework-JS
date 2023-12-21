"use strict";

// burger-menubar

let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  navigationElement.classList.toggle("navActive");
});

//
const dataSLider = [
    {
      id: 1,
      imageUrlSlide:
        "https://wallpapers.com/images/featured/coldplay-ldljmsho01pgdics.jpg",
      slideTitle: "slider title 1",
    },
    {
      id: 2,
      imageUrlSlide:
        "https://www.nbc.com/sites/nbcblog/files/media_mpx/thumbnails/mpxstatic-nbcmpx.nbcuni.com/image/341/887/SNL1838_15_Coldplay_Human_Heart_Fix_You.jpg",
      slideTitle: "slider title 2",
    },
    {
      id: 3,
      imageUrlSlide:
        "https://img.jakpost.net/c/2019/11/22/2019_11_22_82666_1574392699._large.jpg",
      slideTitle: "slider title 3",
    },
    {
      id: 4,
      imageUrlSlide:
        "https://dynamicmedia.livenationinternational.com/p/t/e/9b86afab-433d-44a3-882d-35fc894d4ee4.jpg?auto=webp&width=1507.2",
      slideTitle: "slider title 4",
    },
  ];
  
  // slider
  const sliderContent = document.getElementById("slider-content");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  let sliderIndex = 0;
  
  // სლაიდერის სტრუქტურის აწყობა
//div-ის შექმნა
function createDivTag() {
    let div = document.createElement("div");
  
    return div;
  }

  // სურათის შექმნა
function createImgTag(item) {
    let tagImage = document.createElement("img");
    tagImage.setAttribute("src", `${item.imageUrlSlide}`);
    tagImage.setAttribute("alt", `${item.slideTitle}`);
  
    // let tagImage = document.createElement("div");
    // tagImage.style.backgroundImage = `url(${item.imageUrlSlide})`;
    // tagImage.classList.add("bg-image");
  
    return tagImage;
  }
  
  // სათაურის შემქნა
  function createTitle(item) {
    let titleTag = document.createElement("h2");
    titleTag.textContent = `${item.slideTitle}`;
  
    return titleTag;
  }
  
  // dots - function
function createDots() {
    const dotsWraper = document.createElement("div");
    dotsWraper.classList.add("dots-Wraper");
  
    //რომ შეიქმნას იმდენი წერტილი რამდენი ფოტოც გვაქვს სლაიდში უნდა გადავუაროთ foreachi-ით
    
    dataSLider.forEach((element) => {
      const divChildDot = document.createElement("div");
      divChildDot.classList.add("dot-item");

    // კონკრეტული წერტილის დაჭერის დროს რომ გაიხსნას კონკრეტული ფოტო ამისთვის ვწერთ 

      divChildDot.setAttribute("data-id", element.id - 1);

      // setAttribute სახელის მინიჭება
      // getAttribute დაჭერის დროს სახელის ამოღება
  
      divChildDot.addEventListener("click", function (e) {
        //შევქმნათ ცვლადი
        //e.target.getAttribute - დაკლიკების დროს რომ ამოიღეს ის მნიშვნელობა რომელიც გვინდა, ანუ წერტილს რომ დავაჭერ ზუსტად ის ფოტო გვაჩვენოს
        
        let dotsId = e.target.getAttribute("data-id");
        // console.log(dotsId);
        sliderIndex = dotsId;
        slide();
      });
      dotsWraper.appendChild(divChildDot);
    });
  
    return dotsWraper;
  }
  
  // მთავარი სლაიდერს ფუნქცია,რომელი სლაიდი უნდა გამოჩნდეს
  function slide() {
    sliderContent.innerHTML = " "; //დივები ცალკცალკე რომ არ გახსნას ამისთვის ეს აუცილებლად უნდა ჩავუწეროთ

    const slideItem = createDivTag();
    const slideImgTag = createImgTag(dataSLider[sliderIndex]);
    const slideTitle = createTitle(dataSLider[sliderIndex]);
    const dots = createDots();
  
    slideItem.appendChild(slideImgTag);
    slideItem.appendChild(slideTitle);
  
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
  }
  
  slide();

  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = dataSLider.length - 1; //მე თუ ვარ პირველ სლაიდზე მინდა რომ გახდეს ბოლო ინდექსის მნიშვნელობა
      slide();
      return; //ვწყვეტ მუშაობას
    }
    sliderIndex--; //ვამცირებ ერთით, წინაზე გადასვლის დროს --
    slide();
  }

  function arrowRigthClick() {
    if (sliderIndex == dataSLider.length - 1) {
      sliderIndex = 0;
      slide(); 
      // ახალი დივი რომ შეიქმნას ახალი მნიშვნელობით მაგისთვის ვწერთ  slide();
      return; 
      
      //ვწყვეტ მუშაობას, სლაიდი ერთით აღარ იზრდება
    }

    sliderIndex++; //ვზრდით ერთით, შემდეგზე გადასვლის დროს ++
    slide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRigthClick);

  // setInterval(() => {
  //  arrowRigthClick();
  //   }, 4000);



    //form

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



