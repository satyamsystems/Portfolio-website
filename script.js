console.log("Portfolio Loaded");
document.querySelector("form").addEventListener("submit", function(event){

    let name = document.querySelector("input[type='text']").value;

    if(name.trim() === ""){
        alert("Please enter your name");
        event.preventDefault();
    }

});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});
const text = [
    "Java Developer",
    "C++ Programmer",
    "Web Development Learner"
];

let i = 0;

setInterval(() => {
    document.getElementById("typing").innerText = text[i];
    i = (i + 1) % text.length;
}, 2000);