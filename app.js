
const accessKey = "thUQ3sZmWO8z_IlMSamJpC5FbqAJe5ET950SnsVdWJg";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-input");
const searchResult = document.querySelector(".result");
const showMoreBtn = document.getElementById("show-more-btn");
const showLessBtn = document.getElementById("show-less-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${12}`

    const response = await fetch(url);
    const data = await response.json();

    searchResult.innerHTML = ""
    // console.log(data);
    let results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "inline";
    if(page > 1){
    showLessBtn.style.display = "inline";
    } else{
        showLessBtn.style.display = "none"
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchBox.value == ""){
        window.alert("DUHHHHHH!!!!!")
    } else{
        page = 1;
        searchImages();
    }
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages()
})
showLessBtn.addEventListener("click", function() {
    if (page > 1) {
        page--;
        searchImages();
    }
});