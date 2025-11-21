// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

// Parallax Effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".rotating-cube")

  parallaxElements.forEach((element) => {
    element.style.transform = `translateY(${scrolled * 0.3}px)`
  })
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".card, .advantage-item, .info-card, .challenge-card").forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  observer.observe(element)
})

// Floating Animation for Hero
const heroVisual = document.querySelector(".hero-visual")
if (heroVisual) {
  let mouseX = 0
  let mouseY = 0

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 10
    mouseY = (e.clientY / window.innerHeight) * 10
    heroVisual.style.transform = `perspective(1000px) rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`
  })
}

// Button Click Animation
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(0.95)"
    setTimeout(() => {
      this.style.transform = "scale(1)"
    }, 100)
  })
})

// Counter Animation for Stats
function animateCounter(element) {
  const target = Number.parseInt(element.textContent)
  const duration = 1000
  const start = 0
  const increment = target / (duration / 16)
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + "%"
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + "%"
    }
  }, 16)
}

// Observe stats for animation
document.querySelectorAll(".stat-number").forEach((stat) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(stat)
})

// Scroll Reveal Animation
document.addEventListener("scroll", () => {
  document.querySelectorAll("[data-scroll]").forEach((element) => {
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      element.classList.add("visible")
    }
  })
})

console.log("🌍 Présentation Véhicules Électriques - Site chargé avec succès!")
