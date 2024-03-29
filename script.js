// variables for menu
const btn = document.querySelector('.hamburguer-btn');
const menu = document.querySelector('.menu-mobile');
const li = document.querySelectorAll('.menu-mobile li');
const logo = document.querySelector('.logo-placeholder');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const listItem = Array.from(li);
// functions for menu
const menuTgl = () => {
  menu.classList.toggle('visibility');
  logo.classList.toggle('visibility');
  btn.classList.toggle('active');
  header.classList.toggle('active');
};
btn.addEventListener('click', menuTgl);
listItem.forEach((child) => { child.addEventListener('click', menuTgl); });

// this is the data for the cards which later on i will start changing in order to make
// them dinamically

const dataProjects = [
  {
    name: 'Pokemon',
    info: 'Pokemon is a web-app that simulates a Pokedex showing the pokemon of a certain type. The user can choose the type of pokemon they want to see. The app will show the pokemon of that type. The user can see the name, type, and image of the pokemon. The user can also see the games the pokemon is in.',
    tec: ['Javascripts', 'jest', 'Webpack', 'css', 'html'],
    img: 'img/projects-ss/pokemon.png',
    imgCard: 'img/projects-ss/pokemon.png',
    seelive: 'https://fourteen98.github.io/Pokemon/dist/',
    linkCode: 'https://github.com/Fourteen98/Pokemon',
  },
  {
    name: 'To-do List',
    info: 'This project is made with a template for webpack. User can write some task to be done. After adding this task to the list they can mark them as completed and then delete them.',
    tec: ['JavaScript', 'css', 'html'],
    img: 'img/projects-ss/todo-list.PNG',
    imgCard: 'img/projects-ss/card-todoList.PNG',
    seelive: 'https://aizjicod.github.io/to-do-list/dist/',
    linkCode: 'https://github.com/aizjicod/to-do-list',
  },
  {
    name: 'Math-Magicians',
    info: 'On this app, I will be using react to create a single web page which will include a calculator as well as quotes on another instance of the page',
    tec: ['JavaScript', 'React', 'css'],
    img: 'img/projects-ss/calculator.png',
    imgCard: 'img/projects-ss/card-calculator.png',
    seelive: 'https://calculatorapp-aiziji.netlify.app/',
    linkCode: 'https://github.com/aizjicod/math-magicians',
  },
  {
    name: 'Space Travelers Hub',
    info: ' It was done using the SpaceEx API. On this website, you can check SpaceEx rockets and missions, and book them so they appear on the My Profile tab, on the profile you can follow links directly to their respective Wikipedia page.',
    tec: ['React', 'Redux', 'Javascript', 'css', 'html', 'Jest'],
    img: 'img/projects-ss/space-travelers.png',
    imgCard: 'img/projects-ss/space-travelers.png',
    seelive: 'https://stellular-kataifi-d33ffc.netlify.app/',
    linkCode: 'https://github.com/lucas-crodrigues/space-trav-hub',
  },
  {
    name: 'Weather app',
    info: 'This app was created using an API. the user can search for a certain location. after the location is fetch it will return a list of different location that matches the input.',
    tec: ['Redux', 'React', 'JavaScript', 'API'],
    img: 'img/projects-ss/weather.png',
    imgCard: 'img/projects-ss/weather.png',
    seelive: 'https://weather-aiziji.netlify.app/',
    linkCode: 'https://github.com/aizjicod/weather-app-react',
  },
  {
    name: 'Bike rental',
    info: 'A Rails API as a backend, and React front-end project. The user can signup or log in, then it will be redirected to the home page after a successful login. The user can see all the models of bikes on the page, after clicking them the user can add a reservation to a specific bike and if the user wants to add or delete a reservation.',
    tec: ['React', 'Redux', 'HTML', 'CSS', 'API', 'Ruby on Rails'],
    img: 'img/projects-ss/bike-rental.png',
    imgCard: 'img/projects-ss/card-bike-rental.png',
    seelive: 'https://ducati-rentals.netlify.app/',
    linkCode: 'https://github.com/AbrahaKahsay/final-capstone-frontend',
  },
];

// from this point on i will create a function which will create the cards
// of the works section in a dinamic way.

const wraperCard = document.querySelector('.card-wrapper');
const createCards = (num) => {
  const cardWorks = document.createElement('div');
  cardWorks.classList.add('card-works');
  cardWorks.style.backgroundImage = `linear-gradient(rgba(25, 25, 25, 0.5), rgba(0, 0, 0, 0.8)),url(${num.imgCard})`;
  const card = document.createElement('div');
  card.classList.add('card-content');
  const h2 = document.createElement('h2');
  h2.textContent = `${num.name}`;
  card.appendChild(h2);
  const p = document.createElement('p');
  p.textContent = `${num.info}`;
  card.appendChild(p);
  const ul = document.createElement('ul');
  ul.classList.add('tecnologies-used');
  card.appendChild(ul);
  if ((num.tec).length > 2) {
    for (let j = 0; j < 2; j += 1) {
      const liCard = document.createElement('li');
      liCard.textContent = `${num.tec[j]}`;
      ul.appendChild(liCard);
    }
    const liCard = document.createElement('li');
    liCard.textContent = 'more...';
    ul.appendChild(liCard);
  } else {
    for (let j = 0; j < (num.tec).length; j += 1) {
      const liCard = document.createElement('li');
      liCard.textContent = `${num.tec[j]}`;
      ul.appendChild(liCard);
    }
  }
  const divBtn = document.createElement('div');
  divBtn.classList.add('action-btn');
  card.appendChild(divBtn);
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('project-btn');
  projectBtn.textContent = 'see project';
  divBtn.appendChild(projectBtn);
  cardWorks.appendChild(card);
  wraperCard.appendChild(cardWorks);
  // end of works
};

// from this part on i will create a function which will create the popup
// for the cards in a dinamic way

const popup = document.querySelector('.popup');
const createPopup = (num) => {
  const popWrapper = document.createElement('div');
  popWrapper.classList.add('wrapper-pop', 'visibility');
  popup.appendChild(popWrapper);
  const titlePop = document.createElement('div');
  titlePop.classList.add('title-pop');
  popWrapper.appendChild(titlePop);
  const popTitle = document.createElement('h2');
  popTitle.classList.add('title');
  popTitle.textContent = num.name;
  titlePop.appendChild(popTitle);
  const burgerBtn = document.createElement('div');
  burgerBtn.classList.add('hamburguer-btn', 'btn-popup');
  titlePop.appendChild(burgerBtn);
  for (let i = 0; i < 2; i += 1) {
    const bars = document.createElement('span');
    bars.classList.add('bar');
    burgerBtn.appendChild(bars);
  }
  const ulPopup = document.createElement('ul');
  ulPopup.classList.add('tecnologies-used');
  titlePop.appendChild(ulPopup);
  for (let i = 0; i < num.tec.length; i += 1) {
    const liPopup = document.createElement('li');
    liPopup.textContent = `${num.tec[i]}`;
    ulPopup.appendChild(liPopup);
  }
  const infPopup = document.createElement('div');
  infPopup.classList.add('information-pop');
  popWrapper.appendChild(infPopup);
  const imgInf = document.createElement('img');
  imgInf.setAttribute('src', num.img);
  imgInf.classList.add('img-project');
  infPopup.appendChild(imgInf);
  const secInf = document.createElement('section');
  secInf.classList.add('information');
  infPopup.appendChild(secInf);
  const secP = document.createElement('p');
  secP.classList.add('information-p');
  secP.textContent = `${num.info}`;
  secInf.appendChild(secP);
  const btnWrapper1 = document.createElement('a');
  const secBtn1 = document.createElement('buttton');
  secBtn1.classList.add('information-btn');
  btnWrapper1.setAttribute('href', `${num.seelive}`);
  secBtn1.textContent = 'see live';
  btnWrapper1.appendChild(secBtn1);
  secInf.appendChild(btnWrapper1);
  const btnImg1 = document.createElement('img');
  btnImg1.setAttribute('src', 'img/see-live.svg');
  secBtn1.appendChild(btnImg1);
  const btnWrapper2 = document.createElement('a');
  const secBtn2 = document.createElement('buttton');
  secBtn2.classList.add('information-btn');
  secBtn2.textContent = 'see source';
  btnWrapper2.setAttribute('href', `${num.linkCode}`);
  btnWrapper2.appendChild(secBtn2);
  secInf.appendChild(btnWrapper2);
  const btnImg2 = document.createElement('img');
  btnImg2.setAttribute('src', 'img/github-icon.svg');
  secBtn2.appendChild(btnImg2);
  // end of function for create popup
};
// creating of cards dinamically
for (let i = 0; i < dataProjects.length; i += 1) {
  createPopup(dataProjects[i]);
}
for (let i = 1; i < dataProjects.length; i += 1) {
  createCards(dataProjects[i]);
}
// variables for popup
const popWrapperLi = document.querySelectorAll('.wrapper-pop');
const popWrapper = Array.from(popWrapperLi);
const projectBtn = document.querySelectorAll('.project-btn');
const btnList = Array.from(projectBtn);
const popBtnClose = document.querySelectorAll('.btn-popup');
const btnCloseLi = Array.from(popBtnClose);

// functions for popup
for (let i = 0; i < btnList.length; i += 1) {
  btnList[i].addEventListener('click', () => {
    popWrapper[i].classList.toggle('visibility');
    header.classList.toggle('visibility');
    popup.classList.toggle('visibility');
    main.classList.toggle('blur');
  });
}
for (let i = 0; i < btnCloseLi.length; i += 1) {
  btnCloseLi[i].addEventListener('click', () => {
    popWrapper[i].classList.toggle('visibility');
    header.classList.toggle('visibility');
    popup.classList.toggle('visibility');
    main.classList.toggle('blur');
  });
}

// validation for email input

const form = document.getElementById('contact-form');
const inputEmail = document.getElementById('email-input');
const inputName = document.getElementById('name-input');
const inputTextarea = document.getElementById('textarea-input');
const spanEmail = document.querySelector('.email-span');

const showMsg = (email, msg, validation) => {
  email.classList.remove('error', 'succes');
  email.className = validation ? 'succes' : 'error';
  spanEmail.textContent = msg;
  spanEmail.classList.add(validation ? 'succes' : 'error');
  return validation;
};

const valSucces = (email) => showMsg(email, '', true);

const valError = (email, msg) => showMsg(email, msg, false);

const emailValidation = (email) => {
  // in input is blanck
  if (email.value.trim() === '') {
    return valError(email, 'this space is in blank');
  }

  const emailReg = /^[a-z_\-0-9\]+@+[a-z\-0-9]+(.com)$/;

  if (emailReg.test(email.value)) {
    return valSucces(email);
  }
  return valError(email, 'this email is invalid or is on uppercase, please fix the problem to continue');
};

// event listener for form

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValidation(inputEmail)) {
    form.submit();
  }
});

form.addEventListener('input', () => {
  localStorage.setItem('emailValue', `${inputEmail.value}`);
  localStorage.setItem('nameValue', `${inputName.value}`);
  localStorage.setItem('textareaValue', `${inputTextarea.value}`);
});

inputName.value = localStorage.getItem('nameValue');
inputEmail.value = localStorage.getItem('emailValue');
inputTextarea.value = localStorage.getItem('textareaValue');

// add blur effect after hovering a card
// variables
const cardNodeList = document.querySelectorAll('.card-works');
const cardArr = Array.from(cardNodeList);

// functions

// add blur to other cards while mantaining focus on the hover card
const blurCards = (id) => {
  cardArr.forEach((card, index) => {
    if (index !== id) {
      card.classList.add('blur');
    } else {
      card.style.zIndex = '50';
    }
  });
};

cardArr.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    blurCards(index);
  });
  card.addEventListener('mouseleave', () => {
    cardArr.forEach((card) => {
      card.classList.remove('blur');
      card.style.zIndex = '1';
    });
  });
});
