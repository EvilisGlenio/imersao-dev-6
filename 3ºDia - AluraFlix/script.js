var moviesList = [
'https://m.media-amazon.com/images/M/MV5BMjE4NzIxODg2MF5BMl5BanBnXkFtZTcwNTYyNjQ4OA@@._V1_FMjpg_UX1000_.jpg',
'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg',
'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
'https://m.media-amazon.com/images/M/MV5BYTkxM2JmMTctMjFlYi00YjY4LThiYTctYmNlZDBmYTBmOWRhXkEyXkFqcGdeQXVyMTE3NTk2NjYz._V1_.jpg',
'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_.jpg',
'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg',
]

var titleList = [
    'Pacific Rim','Arrival', 'Interestrelar',
    'Dune', 'Star Trek', 'Star Wars'

]

moviesList.forEach((string, index, array) =>{
    if(!string.endsWith('.jpg')){
        alert('O endereço da imagem do filme '+(index+1)+' esta incorreto')
    }
})
//FOR
/*for (let i = 0; i < moviesList.length; i++) {
    document.write('<img src='+ moviesList[i] +'>')   
}*/

//WHILE
/*var index = 0
while(moviesList.length > index) {
    document.write('<img src='+ moviesList[index] +'>')  
    index++
}*/

//FOREACH
moviesList.forEach((string,index,array) => {
    document.write(
        '<div>'+
            '<h3>'+ titleList[index] +'</h3>'+
            '<img src='+ moviesList[index] +'>'
        +'</div>')

})




//DESAFIOS:
//1 FAZER MAIS DE UMA ESTRUTURA DE REPETIÇÃO ok
//2 GARANTIR QUE O LINK SEMPRE TERMINARÁ COM .JPG ok
//3 CRIAR UMA LISTA COM O NOME DOS FILMES E EXIBIR MA TELA