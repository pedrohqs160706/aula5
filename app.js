'use strict'


const funcionarios = [
{   
    nome: "Maria Souza",
    cargo: "designer",
    imagem: "maria.jpn"
    }{
    nome:"João Sila",
    cargo: "DBA",
    imagem: "joao.jpg"
    }{
    nome:"Hugo Pereira",
    cargo: "FrontEnd",
    imagem: "hugo.jpg"
    }{
    nome:"Ana Maria",
    cargo: "BackEnd",
    imagem: "ana.jpg"
    }
]

function criarCards(funcionários){
    //*<div class="card-container" id="card-container">
        //cards criados pelo JS
        //<div class="card">
            //<img src="./img/maria.jpg" alt="Maria Souza">
            //<div>
                //<h2>Maria</h2>
                //<p>Designer</p>
            //</div>
        //</img></div>

        const container = document.getElementById('card-container')

        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.getElement('img')
imagem.src = `.\img\${funcionarios.imagem}`
        imagem.alt = funcionarios.nome

        const divContainer = document.createElement('div')

        const nome = document.createElement('h2')
        nome.textContent = funcionarios.nome


        const cargo = document.createElement('p')
        cargo.textContent = funcionarios.cargo

        divContainer.replaceChildren('nome, cago')
        card.replaceChildren('imagem, divContainer')


        container.appendChild(card)
}
funcionarios.forEach(criarCards)