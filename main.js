const vielaPoga = document.getElementById('vielas-poga');
const aprikojumsPoga = document.getElementById('aprikojums-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
const vielaRindas = document.getElementsByClassName('vielas');

/*  Poga Viela */
vielaPoga.addEventListener('click', function() {
    vielaPoga.classList.toggle('selected');
    for (let i = 0; i < aprikojumsRindas.length; i++) {
        /*   sarežģītāk bija šādi
        if (aprikojumsRindas[i].classList.contains('slepts')) {
            aprikojumsRindas[i].classList.remove('slepts');
        } else {
            aprikojumsRindas[i].classList.add('slepts');
        } */
        aprikojumsRindas[i].classList.toggle('slepts');
    }
});
/*  poga  Aprīkojums   */
aprikojumsPoga.addEventListener('click', function() {
    aprikojumsPoga.classList.toggle('selected');
    for (let i = 0; i < vielaRindas.length; i++) {
        vielaRindas[i].classList.toggle('slepts');
    }
});