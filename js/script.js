console.log("js/script.js")

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("dark-mode-html");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
        themeToggle.style.backgroundColor = "#ffb8d6";
        themeToggle.style.color = "#000000";
    } else {
        themeToggle.textContent = "Dark Mode";
        themeToggle.style.backgroundColor = "#333333";
        themeToggle.style.color = "#ffffff";
    }
});


const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");
toggleSkills.addEventListener("click",function(){
    skillsSection.classList.toggle("hidden");
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click",function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name===""||email===""){
        alert("Please fill in all required fields.");
    } else{
        alert("Form submitted successfully!");
    }
});