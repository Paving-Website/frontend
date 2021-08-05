var mainMenu = document.querySelector('.mainMenu');
var closeMenu = document.querySelector('.closeMenu');
var openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

function isNumber(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9+ ]/.test(ch))){
        alert("digits only");
        evt.preventDefault();
    }
}
function isAlphabet(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[a-zA-Z0-9 -]/.test(ch))){
        evt.preventDefault();
    }
}
// when you click, set counter to that
var counter = 1;

function setCounter(n){
    counter = n;
}

setInterval(function(){
    
    if(counter===1){
        document.querySelector('.slide').style.transition = '0.01s';
    }
    else{
        document.querySelector('.slide').style.transition ='2s';
    }
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) counter = 1;
}, 3000);