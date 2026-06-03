console.log("Portfolio Loaded");
document.querySelector("form").addEventListener("submit", function(event){

    let name = document.querySelector("input[type='text']").value;

    if(name.trim() === ""){
        alert("Please enter your name");
        event.preventDefault();
    }

});