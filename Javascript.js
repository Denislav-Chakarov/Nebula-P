let burger = document.getElementById("burger");
let navBar = document.getElementById("navBar");
let navLinks = document.querySelectorAll('.nav-links li')
let darkness = document.getElementById("dark");
let stopScroll = document.getElementById("stopS");

function navMenu(){
    //Toggle 
    burger.addEventListener('click',()=>{

        navBar.classList.toggle('nav-bar-active');
        darkness.classList.toggle('darkness-active');
        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
        
    })
        burger.classList.toggle('toggle');
        document.body.classList.toggle('stopScrolling');
        
    })
    
}
navMenu();

function DiveIn(){
    document.getElementById("SecondContentLocation").scrollIntoView({ behavior: 'smooth' });
}

function DiveIn2(){
    document.getElementById("row1").scrollIntoView({ behavior: 'smooth' });
}

function DiveIn3(){
    document.getElementById("row2").scrollIntoView({ behavior: 'smooth' });
}

function DiveIn4(){
    document.getElementById("row3").scrollIntoView({ behavior: 'smooth' });
}

var checked = 0;
function DisableBubbles(){
    if(checked == 0){
        document.getElementById("BubblesDisable").textContent = "Enable Bubbles";  
        checked++;
    }
    else{
        document.getElementById("BubblesDisable").textContent = "Disable Bubbles";  
        checked = 0;
    }
    document.getElementById("bubbles").classList.toggle('Bubbles-active'); 
}

