const EL_list = document.getElementById("list-container");
function runNumbers() {
  for (let i = 10; i <= 200; i += 2) {
    EL_list.innerHTML += `<li>${i}</li>`;
  }
}

let userInfo = {
  name: "daniel",
  age: 23,
  email: "d@notmyrealmail.com",
  phone: "058666666:smiling_imp:",
  address: {
    city: "tlv",
    street: "not found",
    number: 666,
  },
};
const EL_objectList = document.getElementById("object-list");

function runObject(object) {
  let html = "<ul>";

  for (let key in object) {
    if (typeof object[key] === "object") {
      html += `<li> ${key} => ${runObject(object[key])}</li>`;
    } else {
      html += `<li>${key}===> ${object[key]}</li>`;
    }
  }
  html += `</ul>`;

  return html;
}

EL_objectList.innerHTML = runObject(userInfo);
EL_objectList.classList.add("text-info", "bg-dark");

let userInformation = [
  {
    title: "shampoo",
    price: 23.4,
    category: "shower",
    barcode: "4043945",
    color: getRandomColor(),
  },
  {
    title: "cornflakes",
    price: 60,
    category: "food",
    barcode: "A-5455",
    color: getRandomColor(),
  },
  {
    title: "Cola",
    price: 80.5,
    category: "drinks",
    barcode: "B-986453",
    color: getRandomColor(),
  },
  {
    title: "Bamba red",
    price: 90.3,
    category: "food",
    barcode: "C-68645",
    color: getRandomColor(),
  },
];

const EL_userInformation = document.getElementById("array-list");

function createCards(array) {
  for (let key of array) {
    EL_userInformation.innerHTML += `  <div class="card" style="width: 18rem; background-color: ${key.color};margin: 20px 20px ">
<div class="card-header">Featured</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">title===>${key.title}</li>
  <li class="list-group-item">price===>${key.price}</li>
  <li class="list-group-item">category===>${key.category}</li>
  <li class="list-group-item">barcode===>${key.barcode}</li>
</ul>
</div>`;
  }
}
createCards(userInformation);

//create a random background color of cards
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let txt = "We are the so-called Vikings from the north.";
console.log(txt);
