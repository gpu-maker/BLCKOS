const screen=document.getElementById("screen")

const SYSTEM={
username:localStorage.username||"USER_"+Math.floor(Math.random()*999),
actions:JSON.parse(localStorage.actions||"[]"),
lockedApps:[],
openApp:"terminal",

files:JSON.parse(localStorage.files||JSON.stringify({
"log.txt":"SYSTEM LOG: anomaly detected",
"transmission.txt":"... --- ...",
"signal.enc":CryptoLayer.hiddenMessages[0]
}))
}

localStorage.username=SYSTEM.username

function saveSystem(){
localStorage.actions=JSON.stringify(SYSTEM.actions)
localStorage.files=JSON.stringify(SYSTEM.files)
localStorage.username=SYSTEM.username
}

function logAction(action){
SYSTEM.actions.push(action)
Entity.observe(action)
Surveillance.track(action)
saveSystem()
}

function render(text){
screen.innerHTML=text
}

function initializeSystem(){

document.querySelectorAll(".app").forEach(app=>{
app.onclick=()=>{
if(SYSTEM.lockedApps.includes(app.dataset.app)){
render("ACCESS REVOKED")
return
}
logAction("open_"+app.dataset.app)
Apps.open(app.dataset.app)
}
})

// time-based haunting
const last=localStorage.lastVisit
if(last){
const diff=Date.now()-parseInt(last)
if(diff>60000){
SYSTEM.files["return.txt"]="you came back"
}
}

localStorage.lastVisit=Date.now()

Apps.open("terminal")
}
