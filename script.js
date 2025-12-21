//Add projects dynamically
let projects = ["Calculator App", "To-Do List", "Number Guessing Game"];
let projectList = document.getElementById("project-list");

projects.forEach(p => {
    let li = document.createElement("li");
    li.innerText = p;
    projectList.appendChild(li);
});

//Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let msg = document.getElementById("formMessage");

    // Phone number pattern (10 digits)
        const phonePattern = /^[0-9]{10}$/;


    if (name === "" || email === "" || phone === "" || message === "") {
        msg.innerText = "All fields are required!";
        msg.style.color = "red";
        return;
    } else if (!email.includes("@")) {
        msg.innerText = "Please enter a valid email!";
        msg.style.color = "red";
        return;
    }  else if (!phonePattern.test(phone)) {
        msg.innerText = "Please enter a valid 10 digit number";
        msg.style.color = "red";
        return;
    }else {
        msg.innerText = "Message sent successfully!";
        msg.style.color = "green";
    }
});

//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

//for Toggle button
let toggleBtn = document.getElementById("btnToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});

 

