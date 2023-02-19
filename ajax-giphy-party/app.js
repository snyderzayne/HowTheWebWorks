console.log("Let's get this party started!");

const input = document.querySelector("#input");
const search = document.querySelector("#searchImg");
const removeAll = document.querySelector("#clear");

search.addEventListener("click", function (e) {
  e.preventDefault();
  createImg();
});

removeAll.addEventListener("click", function (e) {
  e.preventDefault();
  imageDiv.innerHTML = "";
});

async function getGif(keyword) {
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=ay2JpZMux8eFE7kr9UYeEfOqlhTjzqHX`
  );
  console.log(res.data)
  let randomNum = Math.floor(Math.random()*50)
  // console.log(res.data[1].images.original.url);
  const { resData } = res.data;
  console.log(resData[randomNum].images.original.url); //return when it works
}

const imageDiv = document.querySelector("#images");

function createImg() {
  let newImg = document.createElement("img");
  newImg.src = getGif(input.value);
  imageDiv.append(newImg);
}
