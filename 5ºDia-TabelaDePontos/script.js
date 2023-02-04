var paulo = {
        nome: 'Paulo',
        vitoria: 10,
        empate: 0,
        derrota:0,
        pontos:0
}
var rafa = {
        nome: 'Rafa',
        vitoria: 8,
        empate: 0,
        derrota:0,
        pontos:0
}
var gui = {
        nome: 'Gui',
        vitoria: 9,
        empate: 0,
        derrota:0,
        pontos:0
}

const elementoTabela = document.querySelector('#tabelaJogadores')
escreveTabela()

function escreveTabela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${paulo.nome}</td>
            <td>${paulo.vitoria}</td>
            <td>${paulo.empate}</td>
            <td>${paulo.derrota}</td>
            <td>${paulo.pontos}</td>
            <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
            <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>
    `

    elementoTabela.innerHTML += `
        <tr>
            <td>${rafa.nome}</td>
            <td>${rafa.vitoria}</td>
            <td>${rafa.empate}</td>
            <td>${rafa.derrota}</td>
            <td>${rafa.pontos}</td>
            <td><button onClick="adicionarVitoria(rafa)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(rafa)">Empate</button></td>
            <td><button onClick="adicionarDerrota(rafa)">Derrota</button></td>
        </tr>
    `
    elementoTabela.innerHTML += `
        <tr>
            <td>${gui.nome}</td>
            <td>${gui.vitoria}</td>
            <td>${gui.empate}</td>
            <td>${gui.derrota}</td>
            <td>${gui.pontos}</td>
            <td><button onClick="adicionarVitoria(gui)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(gui)">Empate</button></td>
            <td><button onClick="adicionarDerrota(gui)">Derrota</button></td>
        </tr>
    `
}

function adicionarVitoria(jogador) { 
    jogador.vitoria++
    jogador.pontos+=3
    escreveTabela()

}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    escreveTabela()
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    escreveTabela()
}


//DESAFIOS:
//1 Adcionar outros jogadores (pode começar com prompt)
//2 Personalizar para seu game favorito. (ou outra coisa)
//3 Postar nas redes sociais os meus projetos. E o mais impotante, aperfeiçoá-los