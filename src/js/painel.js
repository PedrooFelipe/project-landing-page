const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
const totalImagens = imagensPainel.length - 1;

function esconderImagem(){
    imagensPainel.forEach(imagem =>{
        imagem.classList.remove('mostrar');
    });
};
function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
};

setaAvancar.addEventListener('click', function(){
    if (imagemAtual === totalImagens - 1){
        setaAvancar.style.display = 'none';
    }
    if(imagemAtual !== totalImagens - 1){
        setaVoltar.style.display = 'inline';
    };
    imagemAtual++;
    esconderImagem();
    mostrarImagem();
});

setaVoltar.style.display = 'none';
setaVoltar.addEventListener('click', function(){
    if (imagemAtual === 1){
        setaVoltar.style.display = 'none';
    }
    if(imagemAtual !== totalImagens - 1){
        setaAvancar.style.display = 'inline';
    };  

    imagemAtual--;   

    esconderImagem();
    mostrarImagem();
});