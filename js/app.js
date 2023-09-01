const menu = [
  {
    id: 1,
    title: "Caffè Misto",
    category: "Filter Coffee",
    price: 29.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-28_720x720.png",
    desc: `(Milk Filter Coffee) Brewed, balanced, dense filter coffee and milk.`,
  },
  {
    id: 2,
    title: "Filter Coffee",
    category: "Filter Coffee",
    price: 26.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-27_720x720.png",
    desc: `Brewed, balanced, intense filter coffee.`,
  },
  {
    id: 3,
    title: "Cold Brew",
    category: "Filter Coffee",
    price: 34.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-29_720x720.png",
    desc: `(Cold Brew Coffee) Cold coffee prepared by steeping coarsely ground coffee beans in cold water for 20 hours.`,
  },
  {
    id: 4,
    title: "Caffè Americano",
    category: "Espresso Based",
    price: 26.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-21_720x720.png",
    desc: `Intense espresso flavor diluted with hot water.`,
  },
  {
    id: 5,
    title: "Iced Caffè Americano",
    category: "Espresso Based",
    price: 26.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-22_720x720.png",
    desc: `Iced presentation of intense espresso flavor diluted with water.`,
  },
  {
    id: 6,
    title: "Flat White",
    category: "Espresso Based",
    price: 29.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-5_720x720.png",
    desc: `Latte with latte art, prepared with extra espresso for a more intense coffee experience.`,
  },
  {
    id: 7,
    title: "Brownie Cheesecake",
    category: "Cheesecakes",
    price: 59.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-98_720x720.png",
    desc: `Unique cheesecake flavor prepared with brownie base and special chocolate sauce.`,
  },
  {
    id: 8,
    title: "Lemon Cheesecake",
    category: "Cheesecakes",
    price: 59.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-97_720x720.png",
    desc: `Indispensable for your coffee break, cheesecake decorated with a special cheese filling combined with a crispy biscuit base and lemon sauce.`,
  },
  {
    id: 9,
    title: "Raspberry Cheesecake",
    category: "Cheesecakes",
    price: 64.99,
    img: "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-99_720x720.png",
    desc: `Cheesecake with butter biscuit base and special cheese filling, decorated with raspberry sauce.`,
  },
];

// Select HTML properties
const CATEGORIES = ["All", "Filter Coffee", "Espresso Based", "Cheesecakes"];
const FILTERBUTTONS = document.querySelector(".btn-container");
const MENUITEMS = document.querySelector(".section-center");

// Create category filter buttons
CATEGORIES.forEach((category) => {
  const button = document.createElement("button");
  button.textContent = category;
  button.id = category.toLocaleLowerCase();
  button.className = "button";
  FILTERBUTTONS.appendChild(button);
});

// Function to category filter
const filterCategory = (category) => {
  const filteredMenu = menu.filter((item) => item.category === category);
  return filteredMenu;
};

// The filtering process of the menu displayed according to the button you clicked
FILTERBUTTONS.childNodes.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.textContent;
    if (category === "All") {
      displayMenuItems(menu);
    } else {
      const filteredMenu = filterCategory(category);
      displayMenuItems(filteredMenu);
    }
  });
});

// Displaying menu items on the screen
function displayMenuItems(menuList) {
  MENUITEMS.innerHTML = "";
  menuList.forEach((element) => {
    MENUITEMS.innerHTML += `<div class="menu-items col-lg-6 col-sm-12">
      <img src=${element.img} class="photo">
      <div class="menu-info">
          <div class="menu-title">
          <h4>${element.title}</h4>
          <h4 class="price">${element.price} ₺</h4>
          </div>
          <div class="menu-text">
          ${element.desc}
          </div>
      </div>
      </div>`;
  });
}

// Show all menu items on page load
displayMenuItems(menu);
