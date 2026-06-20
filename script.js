const roles = [
    "BCA Student",
    "Web Developer",
    "Python Learner",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    const typingText = document.getElementById("typing-text");

    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollPercent =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = scrollPercent + "%";
});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        }else{
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");

resumeBtn.addEventListener("click", () => {
    resumeModal.style.display = "flex";
});

closeResume.addEventListener("click", () => {
    resumeModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === resumeModal){
        resumeModal.style.display = "none";
    }
});