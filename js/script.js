
function changeTheme(){
    changeIcon();
    changeParaColor();
    changeHeadColor();
    footerColor();
    let backGround = document.body.style.backgroundColor="#000000";
    let spanColor = document.querySelector('.leftNav span').style.color = "#FFE77A";
    let headerColor = document.querySelector('header').style.backgroundColor = "#000000";
}


function changeIcon(){
    let changeIcon = document.getElementById('icons');
    changeIcon.innerHTML = `<i class="fas fa-sun"></i>`;
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



