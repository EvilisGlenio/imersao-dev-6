function adicionarFilme() {
    var filmeFavorito = document.querySelector('#filme').value
    var elementMovieList = document.getElementById('listaFilmes')

    elementMovieList.innerHTML += '<img src='+filmeFavorito+'>'
    document.getElementById('filme').value = ''
}



//DESAFIOS

//1 testar se o endereço adcionado é de fato o de uma imagem
//2 se o usuário clicar no filme, redireciona-lo para o trailer no youtube
//3 adcionar os links do filmes e dos trailers em LISTAS