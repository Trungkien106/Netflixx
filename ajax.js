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



