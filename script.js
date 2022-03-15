//DECLARAÇÃO DA VARIÁVEIS
let bg = document.getElementById('bg');
let lua = document.getElementById('lua');
let montanha = document.getElementById('montanha');
let carro = document.getElementById('carro');
let texto = document.getElementById('texto');

//CRIANDO A FUNÇÃO DE MOVIMENTAÇÃO
window.addEventListener('scroll', function(){
    let valor = window.scrollY;

    bg.style.top = valor * 0.5 +'px';
    lua.style.left = -valor * 0.5 +'px';
    montanha.style.top = -valor * 0.15 + 'px';
    carro.style.top = valor * 0.15 + 'px';
    texto.style.top = valor * 1 + 'px';
});
