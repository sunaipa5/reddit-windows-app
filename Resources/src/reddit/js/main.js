function regif() {
    var pass = document.getElementById("pass").value;

    if(pass == ""){
        document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
        document.body.style.overflow = "hidden";
        document.getElementById("calert").style.display = "block"; 
        document.getElementById("alerth").innerHTML = "Important!!!"
        document.getElementById("alertp").innerHTML = "There are empty fields"

    }else{
        var passmach = document.getElementById("passconf").value;
        if(passmach == pass){
            localStorage.setItem("pass", pass);
            localStorage.setItem("passpr", "on");
            document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
            document.body.style.overflow = "hidden";
            document.getElementById("calert").style.display = "block"; 
            document.getElementById("alertp").innerHTML = "Password change successful";
            document.getElementById("alertoff").style.display = "none";
            document.getElementById("alertrefresh").style.display = "block";
        }else{
            if(passmach == ""){
                document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
                document.body.style.overflow = "hidden";
                document.getElementById("calert").style.display = "block"; 
                document.getElementById("alerth").innerHTML = "Important!!!"
                document.getElementById("alertp").innerHTML = "Re-enter can not be left empty."
            }else{
                document.getElementById("setzone").style.filter = "brightness(60%)","blur(5px)"; 
                document.body.style.overflow = "hidden";
                document.getElementById("calert").style.display = "block"; 
                document.getElementById("alerth").innerHTML = "Important!!!"
                document.getElementById("alertp").innerHTML = "Password does not match"
            }
          
        }
        
    }
    
}






function loginf() {
    var pass = document.getElementById("pass").value;
    var spass = localStorage.getItem("pass");

    if (pass == spass) {

        window.location.assign("index.html");
    

    } else {
        document.getElementById("pass").style.backgroundColor= "red";
    }
}

var input = document.getElementById("pass");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var pass = document.getElementById("pass").value;
    var spass = localStorage.getItem("pass");

    if (pass == spass) {

        window.location.assign("index.html");
    

    } else {
        document.getElementById("pass").style.backgroundColor= "red";
    }
  }
});