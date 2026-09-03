window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      el.classList.add("active");

      if (el.id === "skills" && !skillsAnimated) {
        animateSkillCircles();
        skillsAnimated = true;
      }
    }
  });
});
/* Typing Animation */
const texts = [
  "AI / ML Engineer",
  "Data Analyst",
  "Python Programmer",
  "Data Science"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1200);
  }

  setTimeout(type, 120);
})();

/* ================= CIRCULAR SKILL ANIMATION ================= */
const skillCircles = document.querySelectorAll(".circle-skill");
let skillsAnimated = false;

function animateSkillCircles() {
  skillCircles.forEach(skill => {
    const percent = parseInt(skill.dataset.percent);
    const progress = skill.querySelector(".progress");
    const number = skill.querySelector(".circle-text h3");

    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference;

    let current = 0;
    const step = percent / 40; // animation speed

    const interval = setInterval(() => {
      current += step;
      if (current >= percent) {
        current = percent;
        clearInterval(interval);
      }

      const offset =
        circumference - (current / 100) * circumference;
      progress.style.strokeDashoffset = offset;
      number.textContent = Math.round(current) + "%";
    }, 30);
  });
}
