"use strict";

const dataSLider = [
    {
      id: 1,
      imageUrlSlide:
        "https://cdn.tatlerasia.com/tatlerasia/i/2023/05/09102627-coldplay-concert-kuala-lumpur-1_cover_1600x938.jpg",
      slideTitle: "slider title 1",
    },
    {
      id: 2,
      imageUrlSlide:
        "https://www.thisdayinmusic.com/wp-content/uploads/1977/03/GettyImages-1395967537.jpg",
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
        "https://9to5mac.com/wp-content/uploads/sites/6/2023/03/coldplay-header.jpg?quality=82&strip=all&w=1600",
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

  setInterval(() => {
   arrowRigthClick();
    }, 4000);