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
    name: 'multi-work series',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/work-img.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
  {
    name: 'Profesional Art Printing Data 1',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
  {
    name: 'Profesional Art Printing Data 2',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
  {
    name: 'Profesional Art Printing Data 3',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
  {
    name: 'Profesional Art Printing Data 4',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
  {
    name: "'Profesional Art Printing Data 5",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
  {
    name: 'Profesional Art Printing Data 6',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
];

// from this point on i will create a function which will create the cards
// of the works section in a dinamic way.

const wraperCard = document.querySelector('.card-wrapper');
const createCards = (num) => {
  const cardWorks = document.createElement('div');
  cardWorks.classList.add('card-works');
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
  for (let j = 0; j < (num.tec).length; j += 1) {
    const liCard = document.createElement('li');
    liCard.textContent = `${num.tec[j]}`;
    ul.appendChild(liCard);
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
  for (let i = 0; i < dataProjects[0].tec.length; i += 1) {
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
  const secBtn1 = document.createElement('button');
  secBtn1.classList.add('information-btn');
  secBtn1.textContent = 'see live';
  secInf.appendChild(secBtn1);
  const btnImg1 = document.createElement('img');
  btnImg1.setAttribute('src', 'img/see-live.svg');
  secBtn1.appendChild(btnImg1);
  const secBtn2 = document.createElement('button');
  secBtn2.classList.add('information-btn');
  secBtn2.textContent = 'see source';
  secInf.appendChild(secBtn2);
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