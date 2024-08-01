var skills = ["html", "css", "javascript", "python", "flask"];
function addClass(skill) {
  document.querySelector("."+skill).classList.add(skill+"-anim")
}
const removeClass = (skill) => {
  document.querySelector("."+skill).classList.remove(skill+"-anim")
}
function progress() {
  if (document.getElementById("portanim").offsetTop<=window.pageYOffset && document.getElementById("portfolio").offsetTop>=window.pageYOffset) {
    for (let i=0;i<skills.length;i++) {
      addClass(skills[i]);
    }
  } else {
    if (document.getElementById("education").offsetTop>=window.pageYOffset || document.getElementById("portfolio").offsetTop<=window.pageYOffset) {
      for (let i=0;i<skills.length;i++) {
        removeClass(skills[i]);
      }
    }
  }
}
window.addEventListener("scroll", progress)

const scrollToTop = () => {
  window.scrollTo(0,0)
  // document.querySelector(".scroll-top").style.bottom="none"
  // document.querySelector(".scroll-top").style.top="-10vw"
}
document.querySelector(".scroll-top").addEventListener("click", ()=>window.scrollTo(0,0))