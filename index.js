const moon = document.getElementById('moon');

window.addEventListener('scroll' , function(){
    let offset = window.pageYoffset; 
    moon.style.bottom = offset * 0.5 + 'px' ;
});

//Selecionar o elemento lua

const mooon = document.querySelector('#moon');

// Função para animar a subida
function animateMoon(){
    let position = 0;
    setInterval(function(){
        position++;
        moon.style.top = position + 'px';
        //Mover a lua para baixo a cada loop
        position++;
        moon.style.top = position + 'px';
    }, 16);
}

