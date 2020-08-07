var jFruit = document.getElementById("txtFruit");
var jShowFruit = document.getElementById("btnShowFruit");
var jImgFruit = document.getElementById("imgFruit");


jShowFruit.addEventListener('click', showresult);


function showresult() {
    var getFruit = jFruit.nodeValue;
    jImgFruit.setAttribute('src', 'images/' + getFruit + '.jpg');
}