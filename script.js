// variables for menu
const btn = document.querySelector('.hamburguer-btn');
const menu = document.querySelector('.menu-mobile');
const li = document.querySelectorAll('.menu-mobile li');
const logo = document.querySelector('.logo-placeholder');
const header = document.querySelector('.header');
const main = document.querySelector(".main")
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
// this is the data for the cards which later on i will start changing in order to make them dinamically
const data__projects = [
    {name: "Profesional Art Printing Data 1",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository'},
    {name: "Profesional Art Printing Data 2",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository'},
    {name: "Profesional Art Printing Data 3",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository'},
    {name: "Profesional Art Printing Data 4",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository'},
    {name:"'Profesional Art Printing Data 5",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository'},
    {name: 'Profesional Art Printing Data 6',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tec: ['bootstrap', 'css', 'html', 'ruby'],
    img: 'img/card-bg.png',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository'},
  ]
  // from this point on i will create a function which will create the cards of the works section in a dinamic way.
  const wraper__card = document.querySelector(".card-wrapper")
  const createCards = (num) => {
  const card__works = document.createElement("div")
  card__works.classList.add("card-works")
  const card = document.createElement('div');
  card.classList.add("card-content");
  const h2 = document.createElement('h2');
  h2.textContent = `${num.name}`;
  card.appendChild(h2);
  const p = document.createElement("p");
  p.textContent = `${num.info}`;
  card.appendChild(p);
  const ul = document.createElement("ul");
  ul.classList.add("tecnologies-used");
  card.appendChild(ul);
  for (let j = 0; j < (num.tec).length; j++) {
    const li__card = document.createElement("li");
    li__card.textContent = `${num.tec[j]}`;
    ul.appendChild(li__card);
  }
  const div__btn = document.createElement("div");
  div__btn.classList.add("action-btn")
  card.appendChild(div__btn);
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("project-btn")
  projectBtn.textContent = "see project"
  div__btn.appendChild(projectBtn);
  projectBtn.addEventListener('click', popupTgl = () => {
    header.classList.toggle('visibility');
    popup.classList.toggle('visibility');
    main.classList.toggle('blur');
  });
  card__works.appendChild(card);
  wraper__card.appendChild(card__works);
  // end of works
}
// from this part on i will create a function which will create the popup for the cards in a dinamic way
const popup = document.querySelector(".popup")
const createPopup = (num) => {
const pop__wrapper = document.createElement("div")
pop__wrapper.classList.add(`wrapper-pop`,"visibility")
popup.appendChild(pop__wrapper);
  const title__pop = document.createElement("div");
  title__pop.classList.add("title-pop");
  pop__wrapper.appendChild(title__pop);
  const pop_title = document.createElement("h2");
  pop_title.classList.add("title");
  pop_title.textContent = num.name;
  title__pop.appendChild(pop_title)
  const burger__btn = document.createElement("div");
  burger__btn.classList.add("hamburguer-btn", "btn-popup");
  title__pop.appendChild(burger__btn)
  for (let i = 0; i < 2; i++) {
    const bars = document.createElement("span");
    bars.classList.add("bar");
    burger__btn.appendChild(bars)
  }
  const ul__popup = document.createElement("ul");
  ul__popup.classList.add("tecnologies-used");
  title__pop.appendChild(ul__popup);
  for (let i = 0; i < data__projects[0].tec.length; i++) {
    const li__popup = document.createElement("li");
    li__popup.textContent = `${num.tec[i]}`;
    ul__popup.appendChild(li__popup)
  }
  const information__popup = document.createElement("div");
  information__popup.classList.add("information-pop");
  pop__wrapper.appendChild(information__popup);
  const img__inf = document.createElement('img');
  img__inf.setAttribute("src",num.img)
  img__inf.classList.add("img-project");
  information__popup.appendChild(img__inf);
  const sec__inf = document.createElement("section");
  sec__inf.classList.add("information");
  information__popup.appendChild(sec__inf);
  const sec__p = document.createElement("p");
  sec__p.classList.add("information-p");
  sec__p.textContent = `${num.info}`;
  sec__inf.appendChild(sec__p);
  const sec__Btn1 = document.createElement("button");
  sec__Btn1.classList.add("information-btn");
  sec__Btn1.textContent = 'see live';
  sec__inf.appendChild(sec__Btn1);
  const btn__img1 = document.createElement("img");
  btn__img1.setAttribute("src",'img/see-live.svg')
  sec__Btn1.appendChild(btn__img1);
  const sec__Btn2 = document.createElement("button");
  sec__Btn2.classList.add("information-btn");
  sec__Btn2.textContent = 'see source';
  sec__inf.appendChild(sec__Btn2);
  const btn__img2 = document.createElement("img");
  btn__img2.setAttribute("src",'img/github-icon.svg')
  sec__Btn2.appendChild(btn__img2);
  // end of function for create popup
}
// creating of cards dinamically
data__projects.forEach(num => {
  createCards(num);
  createPopup(num);
});
// variables for popup
const pop__wrapperLi = document.querySelectorAll(".wrapper-pop")
const pop__wrapper = Array.from(pop__wrapperLi);
const project__btn = document.querySelectorAll('.project-btn');
const btnList = Array.from(project__btn);
const pop_btnClose = document.querySelectorAll(".btn-popup");
const btnCloseLi = Array.from(pop_btnClose);
// functions for popup
for (let i = 1; i < btnList.length; i++) {
  btnList[i].addEventListener('click', () => {
    pop__wrapper[i - 1].classList.toggle('visibility');
  })
}
for (let i = 0; i < btnCloseLi.length; i++) {
  btnCloseLi[i].addEventListener('click', () => {
    pop__wrapper[i].classList.toggle('visibility');
    header.classList.toggle('visibility');
    popup.classList.toggle('visibility');
    main.classList.toggle('blur');
  })
}