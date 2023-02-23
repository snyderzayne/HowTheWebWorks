console.log("Let's get this party started!");

const input = document.querySelector("#input");
const search = document.querySelector("#searchImg");
const removeAll = document.querySelector("#clear");

search.addEventListener("click", function (e) {
  e.preventDefault();
  createImg();
  input.value = "";
});

removeAll.addEventListener("click", function (e) {
  e.preventDefault();
  imageDiv.innerHTML = "";
  input.value = "";
});

async function getGif(keyword) {
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=ay2JpZMux8eFE7kr9UYeEfOqlhTjzqHX`
  );
  const resData = res.data;
  console.log(resData)
  let randomNum = Math.floor(Math.random()*50)
  // console.log(res.data[1].images.original.url);
  // const { resData } = res.data;
  console.log(resData.data[randomNum])
  return resData.data[randomNum].images.original.url; //return when it works
}

const imageDiv = document.querySelector("#images");

async function createImg() {
  let newImg = document.createElement("img");
  newImg.src = await getGif(input.value);
  imageDiv.append(newImg);
}
