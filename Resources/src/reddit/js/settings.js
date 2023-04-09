
var chsecon = localStorage.getItem("pass");
if(chsecon){
    document.getElementById("chckbox").checked = true; 
    showsepa();
}

img = localStorage.getItem("background");
if(img){
  nimg = "url("+img+")";
document.body.style.backgroundImage = nimg; 
}else{
  document.body.style.backgroundImage = "url(bg.jpg)"; 
}


var chcbgsel = localStorage.getItem("background");

if(chcbgsel){

    if(chcbgsel == "bg.jpg"){
        document.getElementById("bgcb1").checked = true;
    }else{
        if(chcbgsel == "gray-bg.jpg"){
            document.getElementById("bgcb2").checked = true;
        }else{
            document.getElementById("bgurlchc").checked = true;
            document.getElementById("bgurl").style.display = "block";
            document.getElementById("bgurlinp").value = chcbgsel;
            
        }
    }
}else{

    document.getElementById("bgcb1").checked = true;
}


function showsepa(){
    var cbox = document.getElementById("chckbox").checked; 

    if(cbox == true){
        document.getElementById("setpzone").style.display = "block";
    }else{
        localStorage.removeItem("pass");
        localStorage.setItem("passpr", "off");
        document.getElementById("setpzone").style.display = "none";
        
    }
     
}

function showbgurl(){
    var cbox = document.getElementById("bgurlchc").checked; 

if(cbox == true){
    document.getElementById("bgurl").style.display = "block";
    document.getElementById("bgcb1").checked = false;
    document.getElementById("bgcb2").checked = false;
}else{
    document.getElementById("bgurl").style.display = "none";
    
}
}


function bgcb1(){
    var cbox = document.getElementById("bgcb1").checked; 

if(cbox == true){
    document.getElementById("bgcb2").checked = false;
    document.getElementById("bgurlchc").checked = false;
    document.getElementById("bgurl").style.display = "none";
    localStorage.setItem("background", "bg.jpg");
    location.reload();

}
}

function bgcb2(){
    var cbox = document.getElementById("bgcb2").checked; 

if(cbox == true){
    document.getElementById("bgcb1").checked = false;
    document.getElementById("bgurlchc").checked = false;
    document.getElementById("bgurl").style.display = "none";
    localStorage.setItem("background", "gray-bg.jpg");
    location.reload();
}
}


function setbgurl(){
    var cbox = document.getElementById("bgurlchc").checked; 
    var cinpt = document.getElementById("bgurlinp").value;

if(cbox == true){

    if(cinpt == ""){
        document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
        document.body.style.overflow = "hidden";
        document.getElementById("calert").style.display = "block"; 
        document.getElementById("alerth").innerHTML = "Important!!!"
        document.getElementById("alertp").innerHTML = "Fill in the url field"
    }else{
        urlinp = document.getElementById("bgurlinp").value;
        localStorage.setItem("background", urlinp);
        location.reload();
    }
   
}
}

function delbgtest(){
    localStorage.removeItem("background")
}

function resetconf(){
    document.getElementById("resetbtnzone").style.display = "none";
    document.getElementById("resetarea").style.display = "block";
}

function resetall(){

    var cbox = document.getElementById("reschc").checked;

    if(cbox == true){
    localStorage.removeItem("pass");
    localStorage.removeItem("passpr");
    localStorage.removeItem("background");
    document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
    document.body.style.overflow = "hidden";
    document.getElementById("calert").style.display = "block"; 
    document.getElementById("alerth").innerHTML = "Success";
    document.getElementById("alertp").innerHTML = "Reset successful";
    document.getElementById("alertoff").style.display = "none";
    document.getElementById("alertrefresh").style.display = "block";


    }else{
        document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
        document.body.style.overflow = "hidden";
        document.getElementById("calert").style.display = "block"; 
        document.getElementById("alerth").innerHTML = "Important!!!"
        document.getElementById("alertp").innerHTML = "Please confirm checkbox"
        

    }

    
}



function alertoff(){

    document.getElementById("calert").style.display = "none"; 
    document.getElementById("setzone").style.filter = "blur(0px)"; 
    document.body.style.overflow = "";
}

function alertrefresh(){

document.getElementById("calert").style.display = "none"; 
document.getElementById("setzone").style.filter = "blur(0px)"; 
document.body.style.overflow = "";
window.location.assign("settings.html");
}


