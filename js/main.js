// //获取meta节点
// const metaNode = document.querySelector("meta[name=viewport]");

// //定义设计稿宽度为375
// const designWidth = 375;

// //计算当前屏幕的宽度与设计稿比例
// const scale = document.documentElement.clientWidth / designWidth;

// //通过设置meta元素中content的initial-scale值达到移动端适配
// meta.content =
//   "initial-scale=" +
//   scale +
//   ",minimum-scale=" +
//   scale +
//   ",maximum-scale=" +
//   scale +
//   ",user-scalable=no";
const designWidth = 375; // 设计稿宽度
const remPx = 100; // 在屏幕宽度375px，的时候，设置根元素字体大小 100px
const scale = window.innerWidth / designWidth; //计算当前屏幕的宽度与设计稿比例
// 根据屏幕宽度 动态计算根元素的 字体大小
document.documentElement.style.fontSize = scale * remPx + "px";

const btns = document.querySelectorAll(".mui_tab__btn");
const recommends = btns[0];
const ranks = btns[1];
const search = document.querySelector(".search_bar__input");

console.log(ranks);

ranks.addEventListener("click", function () {
  window.location.href = "list.html";
});

recommends.addEventListener("click", function () {
  window.location.href = "main.html";
});

search.addEventListener("click", function () {
  window.location.href = "search.html";
});
