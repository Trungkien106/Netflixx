$.ajax({
    type: "GET",
    url: "https://61cc3137198df60017aebf25.mockapi.io/api/netflixapi",
    success: function (dataMoviesLarge) {
        renderMoviesLarge(dataMoviesLarge)
    },
});

function renderMoviesLarge(movies){
    var html = movies.map(movie => {
        return `<img src="${movie.image}" class="thinh_hanh">`
    })
    document.querySelector('.thinh_hanh').innerHTML = html.join('\n');
}


//Hàm call api của slide ảnh nhỏ
function callApiSmall(method, url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            renderMoviesSmall(JSON.parse(this.responseText)); 
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
};

//Hàm render html của slide ảnh nhỏ
function renderMoviesSmall(movies){
    var html = movies.map(function(movie){
        return `<img src="${movie.image}" alt="${movie.alt}" class="row_poster">`
    })
    const row_posters = document.querySelectorAll('.row_postersSmall')
    for (const row_poster of row_posters) {
        row_poster.innerHTML = html.join('\n');
    }
    
}

callApiSmall('get','https://61c18bf39dbcca0017c81f5f.mockapi.io/api/movies-small');

