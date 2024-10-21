const accessKey = "zvTmqnSnMGthg-3etEoVBsjDUsziBqPHk2HrJmBkmLs";
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.content');
const loadButton  = document.querySelector("#load");


const fetchImages = async(query) =>{
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page28&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(photo =>{
        const imageElement = document.createElement('div');
        imageElement.innerHTML=`<img src="${photo.urls.regular}"/>`

        imagesContainer.appendChild(imageElement);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText!=''){
        fetchImages(inputText);
    }else{
        imagesContainer.innerHTML=`<h2>Please enter a search query</h2>`
    }
});

loadButton.addEventListener('click', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText!=''){
        fetchImages(inputText);
    }else{
        imagesContainer.innerHTML=`<h2>Please enter a search query</h2>`
    }
});
