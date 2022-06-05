const url = "http://124.221.249.219:8000/api/ranking";
const ul = document.querySelector(".rank_list");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.top3);
    data.forEach((item) => {
      const name = item.top3;
      let str = "";
      //   for (let i = 0; i <)
      name.forEach((item) => {
        str += `
        <li class="rakn_song_list__item">
                <span class="rakn_song_list__name c_txt1">${item.title}</span>-
                <span class="rakn_song_list__singer c_txt2">${item.artist}</span>
        </li>
        `;
      });

      ul.innerHTML += `
        <li class="rank_list__item c_bg2">
           <div class="rank_list__bd">
             <h2 class="rank_list__tit">${item.title}</h2>
                
             <ol class="rakn_song_list">
             ${str}
             </ol>
             
           </div>
           <div class="rank_list__media"><img class="rank_list__img" src="${item.cover}"></div>
        </li>
        `;
    });
  });
