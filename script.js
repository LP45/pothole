function myfunction(){
    let username = prompt("what is your username?")
    let password = prompt("what is your password?")
    if(username === "lorreno" && password ==="pierre")
    {
        alert("permession granted");
        pothole();
    }
        
    else{
        alert("Please try again")
    }
    }

myfunction();

function pothole(){
    pothole = prompt("Pothole Name?")
    return pothole;
}
// document.getElementById("added").innerHTML= pothole()