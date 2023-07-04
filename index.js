for(var i=0;i<document.querySelectorAll("button").length;i++)
{

    
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttoninnerHTML=this.innerHTML;
        music(buttoninnerHTML);
        buttonanimation(buttoninnerHTML);
    });
}
document.addEventListener("keypress",function(event)
{
    music(event.key);
    buttonanimation(event.key);
});

function music(key) {
    switch (key) {
        case 'w':
    var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        case 'a':
    var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case 's':
    var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
        case 'd':
    var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case 'j':
    var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        case 'k':
    var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case 'l':
    var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        default:
        break;
}
}
function buttonanimation(key) {
    var buttonanime=document.querySelector("."+key);
    buttonanime.classList.add("pressed");
    setTimeout(function(){
        buttonanime.classList.remove("pressed");
    },100);
}