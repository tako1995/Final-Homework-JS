let inputElement = document.getElementById("filterinput");
let ulResult = document.getElementById("result");
let listUsers = [];

function getUsers() {
  fetch("https://openwhyd.org/hot/electro?format=json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseData) => {
      responseData.data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = `${item.first_name} ${item.last_name} ${item.avatar}`;

      
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