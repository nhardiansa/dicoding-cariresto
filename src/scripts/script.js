import {restaurants} from '../DATA.json'

const navbar = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const drawer = document.querySelector('.drawer')

const listContainer = document.querySelector('.resto-list')

hamburger.addEventListener('click', (e) => {
  drawer.classList.toggle('unhide')
})

close.addEventListener('click', (e) => {
  drawer.classList.toggle('unhide')
})

restaurants.forEach(e => {
  const el = document.createElement('div')
  const desc = e.description.split(' ').slice(0, 50).join(' ')
  el.classList.add('card')
  el.innerHTML = `
    <img
      src="${e.pictureId}"
      alt=""
    />
    <div class="content">
      <div class="heading">
        <h2>${e.name}</h2>
        <div class="rating">
          <span class="material-icons"> grade </span>
          <p>${e.rating}</p>
        </div>
      </div>
      <div class="city">
        <span class="material-icons"> place </span>
        <p>${e.city}</p>
      </div>
      <p class="description">${desc}</p>
    </div>
  `
  listContainer.appendChild(el)
})

window.onscroll = () => {
  navbar.classList.toggle('onScroll', window.scrollY > 10)
}