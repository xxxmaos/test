// import axios from "/axios";
// import Handlebars from "./Handlebars";
// const Handlebars = require("handlebars");
const ul = document.querySelectorAll(".mui_list");
//编译模板的里的内容
// const template = Handlebars.compile(templateDom.innerHTML);
//把后台获取到的数据student渲染到页面
// container.innerHTML = template(student);
const url = "http://124.221.249.219:8000/api/recommendations";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.offical);

    const offical = data.offical;
    const tatsujin = data.tatsujin;
    const column = data.column;

    offical.forEach((item) => {
      ul[0].innerHTML += `
      <li class="mui_list__item">
       <div class="mui_list__box">
         <div class="mui_list__media">
           <img class="mui_list__img" src="${item.cover}">
          </div>
          <div class="mui_list__bd">
           <h3 class="mui_list__tit c_txt1">${item.title}</h3>
          </div>
        </li>`;
    });

    tatsujin.forEach((item) => {
      ul[1].innerHTML += `
      <li class="mui_list__item">
       <div class="mui_list__box">
         <div class="mui_list__media">
           <img class="mui_list__img" src="${item.cover}">
          </div>
          <div class="mui_list__bd">
           <h3 class="mui_list__tit c_txt1">${item.title}</h3>
          </div>
        </li>`;
    });

    column.forEach((item) => {
      ul[2].innerHTML += `
      <li class="mui_list__item">
       <div class="mui_list__box">
         <div class="mui_list__media">
           <img class="mui_list__img" src="${item.cover}">
          </div>
          <div class="mui_list__bd">
           <h3 class="mui_list__tit c_txt1">${item.title}</h3>
          </div>
        </li>`;
    });
  });
