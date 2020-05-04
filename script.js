checkbox1.addEventListener('click',function(){
    let themeChanger = document.getElementsByTagName('head')[0].children[3];
    if(this.checked) themeChanger.href="styles/variables1.css";
    else themeChanger.href="styles/variables2.css"
})