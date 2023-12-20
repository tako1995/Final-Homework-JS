"use strict"

let divWrapperPost = document.getElementById("api-info");

let overlayPost = document.getElementById("overlayPost");
let postContent = document.getElementById("postContent");
let overlayClose= document.getElementById("close");
let addIcon = document.getElementById ("add");
let overlayAdd = document.getElementById ("overlay-add");
let formAdd = document.getElementById ("form-id");


function ajaxPosts (url, callbackFunction) {
    let requist = new XMLHttpRequest();
    requist.open("get",url); 
    requist.addEventListener ("load", function() {

 let data = JSON.parse(requist.responseText);

 callbackFunction(data);



    });

    requist.send();
}

ajaxPosts( "https://jsonplaceholder.typicode.com/posts", function (data){


data.forEach((element) => {
    createPost(element);
     });

});



function createPost (item) {
   
    let divElement = document.createElement("div");
    
    divElement.classList.add("post");

    divElement.setAttribute("data-id", item.id );


    let h2PostId = document.createElement ("h2");


    h2PostId.textContent = item.id;



    let h3POSTtitle = document.createElement ("h3");
    h3POSTtitle.textContent = item.title;


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete the post";
    deleteBtn.classList.add("deleteBtn"); 



    deleteBtn.setAttribute("data-id", item.id);


    divElement.appendChild(h2PostId);
    divElement.appendChild(h3POSTtitle);
    divElement.appendChild(deleteBtn);


    divElement.addEventListener("click", function (e) {
        let id = e.currentTarget.getAttribute("data-id");
        
        let urlNewLink = `https://jsonplaceholder.typicode.com/posts/${id}`;

    
        ajaxPosts(urlNewLink,function(info){
            // console.log(info);
            overlayFnc(info);

        })   
        
        console.log("data-id-value",id);

        overlayPost.classList.add("activePost");   
    });


    deleteBtn.addEventListener("click", function(event){
        event.stopImmediatePropagation();
 

let deleteBtnId  = event.target.getAttribute("data-id");
console.log("წაშლის ღილაკის აიდის მნიშვნელობა",deleteBtnId);



fetch(`https://jsonplaceholder.typicode.com/posts/${deleteBtnId}`,{
    method:"DELETE",
}).then(() => divElement.remove());
    });



divWrapperPost .appendChild(divElement);

// console.log(divElement);

}


function overlayFnc (item) {
    let p = document.createElement ("p");
    p.textContent = item.body;

    postContent.appendChild(p);
}



overlayClose.addEventListener("click", function() {
    overlayPost.classList.remove("activePost");

 
    postContent.innerHTML = " ";
})

// პოსტის დამატება

addIcon.addEventListener("click", function(){
    overlayAdd.classList.add("overlayAddActive")
});

formAdd.addEventListener("submit", function(e) {
e.preventDefault(); 


let postNewObj ={
    title: e.target[0].value
}
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postNewObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((x) => {
      overlayAdd.classList.remove("overlayAddActive");
      createPost(x);
    });
});


///search


let inputElement = document.getElementById("filterinput");
let ulResult = document.getElementById("result");
let listUsers = [];

function getUsers() {
  fetch("https://reqres.in/api/users?page=1", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseData) => {
      responseData.data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = `${item.first_name} ${item.last_name}`;

      
        listUsers.push(li);
        // console.log(listUsers);

        ulResult.appendChild(li);
      });
    })
    .catch((error) => console.log(error));
}

getUsers();

function filterDataUsers(searchItem) {
  listUsers.forEach((item) => {
    // item => titouli listi
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hideList");
    } else {
      item.classList.add("hideList");
    }
  });
}

inputElement.addEventListener("keyup", function (event) {
  // console.log(event.target);
  filterDataUsers(event.target.value);
});
