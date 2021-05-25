import { menu } from './data.js';
const menuContainer = document.querySelector('.section-center')
const buttonContainer = document.querySelector('.btn-container')
const menuCategory = [];

document.addEventListener('DOMContentLoaded', function () {
  createMenu(menu)
  filterButtonType();
  createButton()

});

buttonContainer.onclick= function(e){
  let category = e.target.value
  let filterMenu;
  if(category != "All"){
    filterMenu = menu.filter(item => item.category == category)
    createMenu(filterMenu)
  }else{
    createMenu(menu)
  }

}
const createMenu = (items) => {
  let menu = items.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12" id=${item.id}>
                  <img src="${item.img}" alt="${item.title}" class="photo">
                  <div class="menu-info">
                    <div class="menu-title">
                      <h4>${item.title}</h4>
                      <h4 class="price">${item.price}</h4>
                    </div>
                    <div class="menu-text">${item.desc}</div>
                  </div>
                </div>`;
  });
  menu = menu.join(" ");
  menuContainer.innerHTML = menu;
}
let createButton = () => {
  for (let i = 0; i < menuCategory.length; i++) {
    let button = `<button value="${menuCategory[i]}" class="btn btn-outline-dark btn-item">${menuCategory[i]}</button>`;
    buttonContainer.innerHTML += button;
  }
  

}
 let filterButtonType = () => {
  menuCategory.push("All");
  menu.forEach(item => {
    if(!menuCategory.includes(item.category)){
      menuCategory.push(item.category)
    }
  })

}
