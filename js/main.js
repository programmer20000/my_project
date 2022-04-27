let ButtonChageColor = document.getElementById("ButtonChaBackgroundColor");
let button1 = document.getElementById("ButtobHtml");
let button2 = document.getElementById("ButtobCss");
let button3 = document.getElementById("ButtonJs"); 
let block1 = document.getElementById("block")
let block2  = document.getElementById("block_content");

let ListColor = [
    "rgb(20,20,20)",
    "rgb(255,255,255)"
]

let ButtonColor = function(){
    const background = ListColor[Math.floor(Math.random() * ListColor.length)]
    document.body.style.background = background

}

ButtonChageColor.addEventListener('click',e=>ButtonColor());

button1.addEventListener('click',e=>{
    block2.style.backgroundImage = "url('../css/image/image_html.png')"
    block2.style.backgroundRepeat = "no-repeat"
    block2.style.justifyItems = "center"
});

button2.addEventListener('click',e=>{
    block2.style.backgroundImage = "url('../css/image/image_css.png')"
    block2.style.backgroundRepeat = "no-repeat"
    block2.style.justifyItems = "center"

});

button3.addEventListener('click',e=>{
    block2.style.backgroundImage = "url('../css/image//image_js.png')"
    block2.style.backgroundRepeat = "no-repeat"
    block2.style.justifyItems = "center"

});