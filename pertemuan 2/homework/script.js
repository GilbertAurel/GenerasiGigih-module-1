const title = document.getElementById("title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");
const image = document.querySelector("img");

function onSubmitFormHandler() {
  return alert("alert function");
}

fetch(
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const { name, album, artists } = data;

    title.innerText = name;
    album.innerText = album.name;
    artist.innerText = artists.map((artist) => `${artist.name} `);
    image.src = album.images[0].url;
  })
  .catch((error) => alert(error));
