const deleteBtn = document.querySelector(".delete");
const input = document.querySelector(".search_bar__input1 c_input");
const url = "http://124.221.249.219:8000/api/search?";
let value = "";
if (input.value == "") {
  value = "";
} else {
  value = input.value;
}

deleteBtn.addEventListener("click", function () {
  window.location.href = "main.html";
});

fetch(url + value)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
