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
    block1.style.backgroundImage = "url('../css/image/image_html.png')"
});

button2.addEventListener('click',e=>{
    block1.style.backgroundImage = "url('../css/image/image_css.png')"
});

button3.addEventListener('click',e=>{
    block1.style.backgroundImage = "url('../css/image//image_js.png')"
});