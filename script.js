console.log("javascript is connected");

document.addEventListener("DOMContentLoaded", function() {
    const formResult = document.getElementById("Result");
    const message1 = document.getElementById("message1");
    const themeBtn = document.getElementById("themeBtn");

    function setTheme(isDark) {
        document.body.classList.toggle("dark", isDark);
        if (themeBtn) {
            themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
            themeBtn.setAttribute("aria-pressed", String(isDark));
        }
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    if (themeBtn) {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme === "dark");
        themeBtn.addEventListener("click", function() {
            setTheme(!document.body.classList.contains("dark"));
        });
    }

    function addComingSoonWithRemover(messageElem) {
        messageElem.textContent = '';

        const textSpan = document.createElement('span');
        textSpan.textContent = 'coming soon! ';

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'small-remove';
        removeBtn.textContent = 'OK';
        removeBtn.title = 'Remove message';
        removeBtn.addEventListener('click', function() {
            messageElem.textContent = '';
        });

        messageElem.appendChild(textSpan);
        messageElem.appendChild(removeBtn);
    }

    document.getElementById("button1").addEventListener("click", function() {
        addComingSoonWithRemover(message1);
    });

    document.getElementById("button2").addEventListener("click", function() {
        const nameInput = document.getElementById("yourname");
        const gradeInput = document.getElementById("yourgrade");
        const yourname = nameInput.value.trim();
        const yourgrade = gradeInput.value.trim();

        if (yourname === "" && yourgrade === "") {
            formResult.textContent = "Please enter your name and your grade.";
        } else if (yourgrade === "") {
            formResult.textContent = "Please enter your grade.";
        } else if (yourname === "") {
            formResult.textContent = "Please enter your name.";
        } else {
            formResult.textContent = "Your data has been submitted!";
            nameInput.value = "";
            gradeInput.value = "";
            nameInput.focus();
        }
    });
});

const images = [
"img5.jpg",
"img6.jpg",
"img7.jpg",
"img8.jpg"
];

let currentImage = 0;

const galleryImage =
document.getElementById("galleryImage");

document.getElementById("next")
.addEventListener("click", () => {

currentImage++;

if(currentImage >= images.length){
currentImage = 0;
}

galleryImage.src = images[currentImage];
});

document.getElementById("prev")
.addEventListener("click", () => {

currentImage--;

if(currentImage < 0){
currentImage = images.length - 1;
}

galleryImage.src = images[currentImage];
});
setInterval(() => {

currentImage++;

if(currentImage >= images.length){
currentImage = 0;
}

galleryImage.src = images[currentImage];

}, 4000);