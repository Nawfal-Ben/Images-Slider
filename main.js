// Variables
const slideNumber = document.querySelector(".slide")
const slides = Array.from(document.getElementsByTagName("img"))
const prevBtn = document.querySelector(".prev")
const bullets = Array.from(document.getElementsByTagName("li"))
const nextBtn = document.querySelector(".next")

// the current slide
current = 1
prevBtn.addEventListener("click", () => {
    if (!prevBtn.classList.contains("disabled")) {
        current--
        changeSlide()
    }
})

nextBtn.addEventListener("click", () => {
    if (!nextBtn.classList.contains("disabled")) {
        current++
        changeSlide()
    }
})

bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
        current = index + 1
        changeSlide()
    })
})

// chenge slide
function changeSlide() {
    slideNumber.innerHTML = current
    slides.forEach(slide => slide.classList.remove("active"));
    slides[current - 1].classList.add("active")
    current === 1 ? prevBtn.classList.add("disabled") : prevBtn.classList.remove("disabled")
    bullets.forEach(bullet => bullet.classList.remove("active"))
    bullets[current - 1].classList.add("active")
    current === slides.length ? nextBtn.classList.add("disabled") : nextBtn.classList.remove("disabled")
}

console.log(bullets);