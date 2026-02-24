const Surveillance={

logs:JSON.parse(localStorage.surveillance||"[]"),

track(action){

const log={
time:new Date().toLocaleTimeString(),
action,
user:SYSTEM.username
}

this.logs.push(log)
localStorage.surveillance=JSON.stringify(this.logs)
},

viewer(){

let html="SURVEILLANCE LOG<br><br>"
this.logs.slice(-20).forEach(l=>{
html+=`${l.time} — ${l.user} — ${l.action}<br>`
})

render(html)
}

}
