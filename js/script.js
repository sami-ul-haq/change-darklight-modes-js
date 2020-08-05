// On Click
function changeTheme(){
        changeIcon();
        bodyAndHeader();
        changeParaColor();
        changeHeadColor();
        footerColor();
}

// Revert Changes
function revertChanges(){

    let backGround = document.body.style.backgroundColor="#ffffff";
    let spanColor = document.querySelector('.leftNav span').style.color = "#0493d3";
    let iColor = document.querySelector('.rightNav i').style.backgroundColor = "#ffffff";
    let headerColor = document.querySelector('header').style.backgroundColor = "#ffffff";

    let changeIcon = document.getElementById('icons');
    changeIcon.innerHTML = `<i class="fas fa-moon" onclick="changeTheme()"></i>`;
    changeIcon.style.color = "#000000" ;
    
    let paragraphs = document.getElementsByTagName("p");
    for ( let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "#000000";
    }

    let headings = document.getElementsByTagName("a");
    for ( let i = 0; i < headings.length; i++) {
        headings[i].style.color = "#000000";
    }

    let  footColor= document.querySelectorAll('footer a');
    for ( let i = 0; i < footColor.length; i++) {
        footColor[i].style.color = "#000000";
    }

}

// For Dark Theme Using Functions

function bodyAndHeader(){
    let backGround = document.body.style.backgroundColor="#000000";
    let spanColor = document.querySelector('.leftNav span').style.color = "#FFE77A";
    let iColor = document.querySelector('.rightNav i').style.backgroundColor = "#000000";
    let headerColor = document.querySelector('header').style.backgroundColor = "#000000";
}

function changeIcon(){
    let changeIcon = document.getElementById('icons');
    changeIcon.innerHTML = `<i class="fas fa-sun" onclick="revertChanges()"></i>`;
    changeIcon.style.color = "#FFFFFF"  
}

function changeParaColor(){
    
    let paragraphs = document.getElementsByTagName("p");
    for ( let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "#EAEAEA";
    }
}

function changeHeadColor(){
    
    let headings = document.getElementsByTagName("a");
    for ( let i = 0; i < headings.length; i++) {
        headings[i].style.color = "#FAFBFC";
    }
}

function footerColor(){

    let  footColor= document.querySelectorAll('footer a');
    for ( let i = 0; i < footColor.length; i++) {
        footColor[i].style.color = "#888888";
    }
}

// End