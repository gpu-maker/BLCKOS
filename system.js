const screen = document.getElementById("screen")

const SYSTEM = {
  username: "USER_" + Math.floor(Math.random()*999),
  actions: [],
  openApp: "terminal",
  files: {
    "log.txt": "SYSTEM LOG: anomaly detected",
    "subject.txt": "they are watching"
  }
}

function logAction(action){
  SYSTEM.actions.push(action)
  Entity.observe(action)
}

function render(text){
  screen.innerHTML = text
}

document.querySelectorAll(".app").forEach(app=>{
  app.onclick=()=>{
    logAction("open_"+app.dataset.app)
    Apps.open(app.dataset.app)
  }
})

window.onload=()=>{
  Apps.open("terminal")
}
