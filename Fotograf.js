let page = 1;

async function getPhotos(currentPage = 1) {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${currentPage}&limit=12`
  );
  const data = await response.json();
  return data;
}
function renderImages(data) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";
  data.forEach((el) => {
    const div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "150px";
    const img = document.createElement("img");
    img.src = el.download_url;
    div.appendChild(img);
    wrapper.appendChild(div);
  });
}

getPhotos().then((data) => {
  renderImages(data);
});

const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");

btnLeft.addEventListener("click", () => {
  if (page <= 1) {
    return;
  }

  page -= 1;
  getPhotos(page).then((data) => {
    renderImages(data);
  });
});

btnRight.addEventListener("click", () => {
  page += 1;
  getPhotos(page).then((data) => {
    renderImages(data);
  });
});

// przyciski na dole strony w prawo w lewo

// przycisk w prawo dodaje +1 do page i wywołuje getPhotos jeszcze raze

// w lewo tak samo tylko -1

// generator formularzy
// const form=[
//     {name: 'test', label: 'l1', type:'text'},
//     {name: 'age', label: 'l2', type:'number'}
// ]
