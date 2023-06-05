const helpToggler = document.querySelector(".help-toggler")
const helpContent = document.querySelector(".help-content")

helpToggler.addEventListener("click", toggleHelp)

function toggleHelp(){
  helpContent.classList.toggle("active")
}