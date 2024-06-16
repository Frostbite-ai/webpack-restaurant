import {Menu} from './menu';
import  {Homepage} from './homepage'
import {Contact} from './contact'
import './style.css';

const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const contactBtn = document.getElementById("contact")
// const aboutBtn = document.getElementById("about")

const content = document.getElementById("content")


content.appendChild(Homepage());

menuBtn.onclick = () => {
    content.innerHTML = '';
    content.appendChild(Menu());
}

homeBtn.onclick = () => {
    content.innerHTML = '';
    content.appendChild(Homepage());
}


contactBtn.onclick = () => {
    content.innerHTML = '';
    content.appendChild(Contact());
}

