let navbar=document.querySelector(".navbar");
// Select the navbar element and its list items
const navList = navbar.querySelectorAll('li');
const totalNavList = navList.length;
// Select all the sections and count them
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
// Add click event listener to each navigation link
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');

  a.addEventListener('click', function () {
    // Remove "back-section" class from all sections
    removeBackSection();
    // Add "back-section" class to previously active section (if any)
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);  
      }
      // Remove "active" class from all navigation links
      navList[j].querySelector("a").classList.remove("active");
    }
    // Add "active" class to clicked navigation link
    this.classList.add("active");
    // Show corresponding section on page
    showSection(this);
  });
}
// Remove "back-section" class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
// Add "back-section" class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
// Show a specific section on the page
function showSection(element) {
  // Remove "active" class from all sections
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active")
  }
  // Get the ID of the target section
  const target = element.getAttribute("href").split("#")[1];
  // Add "active" class to target section
  document.querySelector("#" + target).classList.add("active");
} 
// Update navigation links based on current section
function updateNav(ele) {
  for (let i = 0; i < totalNavList; i++) {
    // Remove "active" class from all navigation links
    navList[i].querySelector("a").classList.remove("active");
    const target = ele.getAttribute("href").split("#")[1];
    // Add "active" class to navigation link corresponding to current section
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
//sticky navbar
window.addEventListener('scroll', () =>{
  let header=document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0)
});
// JavaScript code to trigger the animation on scroll
function handleScroll() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('appear');
    }
  });
}
// Event listener to trigger the animation on scroll
window.addEventListener('scroll', handleScroll);
    //toggler menu
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active")
    searchForms.classList.remove("active")
    cartItem.classList.remove("active")
}
let searchForms=document.querySelector(".search-form ");
document.querySelector("#search-btn").onclick = () =>{
searchForms.classList.toggle("active")
navbar.classList.remove("active")
cartItem.classList.remove("active")
}
let cartItem=document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () =>{
cartItem.classList.toggle("active")
navbar.classList.remove("active")
searchForms.classList.remove("active")
}
window.onscroll= () => {
  navbar.classList.remove("active")
  searchForms.classList.remove("active")
}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
    }
    function fadeOut(){
      setInterval(loader, 3000);
    }
    window.onload=fadeOut;

let shopItemData=[{
  id: 1,
  name: "testy & health-1",
  price: "15",
  normalRrice: "20",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBob3iN56dgHD-5_fTSBHTMEU90drzp-ukOk3NxQ0j1reHwQkdaL4jkvMWwQINVuEkB7M&usqp=CAU",
},
{
  id: 2,
  name: "testy & health-2",
  price: "15",
  normalRrice: "20",
  img: "data:image/jpeg;base64,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",
},
{
  id: 3,
  name: "testy & health-3",
  price: "15",
  normalRrice: "20",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSjPh_6MRxGu0mG-Hg5uNNOdbWuNdxhMW_5XALx1Wa7tzCOGsuvRgn9Cd-CBPVuXAPKM&usqp=CAU",
},
{
  id: 4,
  name: "testy & health-4",
  price: "15",
  normalRrice: "20",
  img: "data:image/jpeg;base64,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",
},
{
  id: 5,
  name: "testy & health-5",
  price: "15",
  normalRrice: "20",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazcaYtFZ-bxiIT4QIkEfXfa8vYTYlzUrobA&usqp=CAU",
},
{
  id: 6,
  name: "testy & health-6",
  price: "15",
  normalRrice: "20",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz91Tp8ydwJaG_mpBzMC4VMdw8xFURkyYqN5HZK1fsB_4TRA6HJzQpogh6BN0ik8yk9d8&usqp=CAU",
}];


let basket = JSON.parse(localStorage.getItem("data")) || [];
let shop = document.querySelector(".menu .box-container");
let totalPriceSpan = document.querySelector(".header .span");

let generateShop = () => {
  shop.innerHTML = shopItemData
    .map((el) => {
      let search = basket.find((x) => x.id === el.id) || {};
      return `
      <div class="box" id=product-${el.id}>
        <img src=${el.img}>
        <h3>${el.name}</h3>
        <div class="price">$${el.price} <span> $${el.normalRrice}</span></div>
        <div class="btns">
          <i onclick="decrement(${el.id})" class="fas fa-minus"></i>
          <div class="quantity" id=${el.id}>
            ${search.item || 0}
          </div>
          <i onclick="increment(${el.id})" class="fas fa-plus"></i>
        </div>
        <h2 onclick="increment(${el.id})" class="btn">add to cart</h2>
      </div>
      `;
    })
    .join("");
    calculation();
};
let increment = (id) => {
  let selectedItem = { id: id };
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  generateShop();
  update(selectedItem.id)
  generateCardItems();
  calculation();
};
let decrement = (id) => {
  let selectedItem = { id: id };
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    return;
  } else if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCardItems();
  localStorage.setItem("data", JSON.stringify(basket));
  generateShop();
  calculation();
 
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;
  document.getElementById(id).innerHTML = search.item;
  generateShop();
  generateCardItems()
  calculation();
  totalAmount();
}
let calculation = () => {
  let cardIcon = document.querySelector(".cardAmount");
  cardIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
generateShop();
let shopinCard=document.querySelector(".cart-items-container");
let generateCardItems = () => {
  if (basket.length !== 0) {
    // if basket is not empty, populate the shopping cart with item details
    shopinCard.innerHTML =totalPriceSpan.innerHTML +'<div class="box-container">' + basket.map((x) => {
      let {id,item}=x;
      let search=shopItemData.find((y) => y.id === id) || [];
      return `
      <div class="cart-item">
    <img src=${search.img} alt="">
    <div class="conten">
<div class="title-price-x">
    <h4 class="title-price">
        <h3>${search.name}</h3>
        <p class="card-item-price">price : <span> $${search.price}</span></p>
    </h4>
    <i onclick="removeItem(${id})" class="fas fa-times"></i>
</div>
<div class="btns">
<i onclick="decrement(${id})" class="fas fa-minus"></i>
  <div class="quantity" id=${id}>${item}</div>
<i onclick="increment(${id})" class="fas fa-plus"></i>
    </div>
    <h4 class="card-item-price">total price : <span> $${item * search.price}</span></h4>
</div>
</div>      `
    }).join("")+'</div>';
    calculation();
  } else {
    // if basket is empty, display a message indicating that the cart is empty
    shopinCard.innerHTML = `
      <h2 class="empty">cart is empty <i class="fa-solid fa-face-smile"></i></h2>
    `;
  }
  
};
generateCardItems();
// populate basket with data if needed
if (localStorage.getItem("data")) {
  basket = JSON.parse(localStorage.getItem("data"));
}
let removeItem = (id) => {
  let selectedItem = id;
  let newBasket = basket.filter((x) => x.id !== selectedItem);
  basket=newBasket;
  generateCardItems();
  totalAmount();
  generateShop();
  update(selectedItem);
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};
let clearCard=() => {
basket=[];
generateCardItems();
generateShop();
calculation();
totalAmount();
localStorage.setItem("data", JSON.stringify(basket))
}
let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let { item, id } = x;
      let search = shopItemData.find((y) => y.id === id) || [];
      return item * search.price;
    }).reduce((x, y) => x + y, 0);
     totalPriceSpan.innerHTML = `
     <div class="total-price-span">
      <h2 class="total-amount">Total bill : <span> $${amount}</span></h2>
<button onclick="clearCard()" class="removeall btn">clear card</button>
</div>
    `;
  } else {
    totalPriceSpan.innerHTML = "";
  }
  generateCardItems();
  localStorage.setItem("data", JSON.stringify(basket))
};
// Call the function once at the beginning
totalAmount();


