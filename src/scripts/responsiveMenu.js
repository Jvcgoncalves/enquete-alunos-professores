export default function toggleMenu(ev){
  if(ev.type === "touchstart") ev.preventDefault()
  if(window.innerWidth >= 800) return
  const menu = document.querySelector(".question-to-menu")
  menu.classList.toggle("active")
}