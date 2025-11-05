// ========== STEP 2: Dynamic Project Gallery ==========
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const details = btn.nextElementSibling;
    details.classList.toggle("hidden");
    btn.textContent = details.classList.contains("hidden")
      ? "Show Details"
      : "Hide Details";
  });
});

// ========== STEP 3: Form Validation ==========
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
  form.reset();
});

// ========== STEP 4 (Bonus): Typed.js Animation ==========
const typing = new Typed("#typing", {
  strings: ["Web Developer.", "Problem Solver.", "Lifelong Learner."],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});
