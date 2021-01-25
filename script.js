document.querySelector('.date').innerHTML = new Date().toLocaleString()

var image = document.querySelector('#ic')

function changeImg(){
    if(image.src.match('imagens/iconedotopo.jpg')){
        image.src = 'imagens/chapolindesenho.jpg'
    }else {
        image.src = 'imagens/iconedotopo.jpg'
    }
}

var texto = document.getElementById('title')

function changeText(){
    if(texto.innerHTML =  'Roberto Mario Gómez y Bolaños - O Inigualável'){
        texto.innerHTML =  'Chespirito'
        texto.style.fontSize = '50px'
       
    } else {
        texto.innerHTML = 'Roberto Mario Gómez y Bolaños - O Inigualável'
        texto.style.fontSize = '50px'
}
}