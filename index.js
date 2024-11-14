

let searchForm = document.getElementById('search-form');
let searchBox = document.getElementById('search-box');
let searchResults = document.getElementById('search-results');
let showMoreBtn = document.getElementById('show-more-btn');

let accessKey = '1hxQGvhD6hMSiBzRMcDjDqyTPRpMIPoKv4_UjXEc4uU';

// https://api.unsplash.com/search/photos?page=1&query=office

let keyword = '';
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if(page === 1){
        searchResults.innerHTML = '';
    }
    const results = data.results;
    results.map((result) => {
        const img = document.createElement('img');
        img.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(img);
        searchResults.appendChild(imageLink);
    })
    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener('click', function(){
    page++;
    searchImages();
})