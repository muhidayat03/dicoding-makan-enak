import "../styles/main.css";
// import "./styles/responsive.css";
import Data from "../DATA.json";

const menu = document.querySelector("#menu");
// const hero = document.querySelector(".hero");
// const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");
const post = document.querySelector("#posts");
const hero = document.querySelector("#hero__container");
const content = document.querySelector("#content__section");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

console.log(Data, typeof Data);

let postsResult = "";

Data.restaurants.forEach((item) => {
  postsResult += ` <article class="post-item">
  <img class="post-item__thumbnail"
      src=${item.pictureId}
    alt=${item.name}>
  <div class="post-item__content">
      <h1 class="post-item__title"><a href="#">Kenapa
              ${item.name}</a></h1>
      <p class="post-item__description">${item.description}
      </p>
      <div class="post-item__footer">
          <p><span class="star">★</span> ${item.rating}</p>

          <p>${item.city}</p>
      </div>
  </div>
</article>`;
});

post.innerHTML = postsResult;

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

content.addEventListener("click", function () {
  drawer.classList.remove("open");
});
