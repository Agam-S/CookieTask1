import './style.css';
import { Cookie } from './models/Cookie';

//============== Array of Cookies ========================================

const cookies: Cookie[] = [];

function init() {
  const cookie1: Cookie = new Cookie('Cookie1');
  const cookie2: Cookie = new Cookie('Cookie2');

  cookies.push(cookie1);
  cookies.push(cookie2);

  //=================== Going through the selector ================================

  for (let c in cookies) {
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = cookies[c].name;
    newOption.value = String(cookies.indexOf(cookies[c]));
    cookieSelector.add(newOption);
  }

  cookieColour.value = cookies[0].colour;

  updateDisplay();
}

//===== Calling elements from HTML and declaring new ones =================================

const cookieSelector: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieSelector')
);

const cookieColour: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieColour-inp')
);

const cookiesDiv: HTMLElement = document.getElementById('cookiesDiv');

const colourButton: HTMLElement = document.getElementById('changeColour-btn');
colourButton.addEventListener('click', event => {
  changeColour();
});

const chipButton: HTMLElement = document.getElementById('addChocolateChip-btn');
chipButton.addEventListener('click', event => {
  addChocolateChip();
});

init();

//================ Functions ===================

function drawCookies() {
  cookiesDiv.innerHTML = '';
  for (let cookie in cookies) {
    let cookieDiv: HTMLElement = document.createElement('div');
    cookieDiv.innerHTML = String(cookies[cookie].chocolateChipNum);
    cookieDiv.classList.add('cookie');
    cookieDiv.id = cookies[cookie].name;
    cookieDiv.setAttribute(
      'style',
      `background-color: ${cookies[cookie].colour}`
    );
    cookiesDiv.appendChild(cookieDiv);
  }
}

function changeColour() {
  cookies[cookieSelector.value].colour = cookieColour.value;
  updateDisplay();
}

function addChocolateChip() {
  cookies[cookieSelector.value].chocolateChipNum++;
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
