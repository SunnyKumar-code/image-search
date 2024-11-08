document.addEventListener('DOMContentLoaded', () => {
    let url = 'https://api.unsplash.com/search/photos/?client_id=Bn0EgsVvcO3KK0Mh5uX_1tzHgMXAaAkDVJJaUAJLHQk&query=';
    let searchText = document.getElementById('searchInput');
    let searchbtn = document.getElementById('submit');
    let imageList = document.getElementById('imageList');

    searchbtn.addEventListener('click', () => {
        let search = searchText.value;
        getImages(search);
    });

    async function getImages(search) {
        
            let response = await fetch(`${url}${search}`);
            let data = await response.json();
            console.log(data.results);
            displayImages(data.results);
        
    }

    function displayImages(images) {
        imageList.innerHTML = ''; 
        images.forEach(image => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let dis = document.createElement('p');
            dis.textContent = image.alt_description;
            
            img.src = image.urls.small;
            img.alt = image.description;
            li.appendChild(img);
            li.appendChild(dis)
            imageList.appendChild(li);
        });
    }
});
