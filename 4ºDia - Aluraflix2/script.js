const res = document.querySelector('#res')
var elementMovieList = document.getElementById('listaFilmes')
var filmeFavorito = []
var i = 0

function adicionarFilme() {
    //Validador de link
    if(document.querySelector('#filme').value.indexOf('.jpg') != -1) {
        filmeFavorito[i] = document.querySelector('#filme').value
        try {
            extrairTexto(filmeFavorito[i])
        } catch (error) {
            console.log('erro', error)
        }

    } else {
        return alert('Link inválido! Try again!')
    }

    elementMovieList.innerHTML += '<a href="'+'./index.html"'+'target="_blank"'+'>'+'<img src='+filmeFavorito[i]+'>'+'</a>'
    document.getElementById('filme').value = ''
    i++
}

//Extrator de Texto apartir de uma Imagem
async function extrairTexto(img) {

    const worker = await Tesseract.createWorker({
        logger: m => console.log(m)
    });
    
    (async () => {
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(img);
        res.innerHTML = '<p>'+text+'</p>';
        console.log(text);
        await worker.terminate();
        return text;
    })();
}

//Filtro de string para fazer pesquisa

//DESAFIOS

//1 testar se o endereço adcionado é de fato o de uma imagem
//2 se o usuário clicar no filme, redireciona-lo para o trailer no youtube
//3 adcionar os links do filmes e dos trailers em LISTAS