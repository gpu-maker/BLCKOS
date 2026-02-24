const Entity={

mood:parseInt(localStorage.mood||0),

entities:[
{name:"ENTITY"},
{name:"OBSERVER"},
{name:"ECHO"}
],

active:0,

observe(action){

this.mood++

if(this.mood>5 && Math.random()<0.3)
SYSTEM.lockedApps.push("notes")

if(this.mood>8)
Glitch.increase()

if(this.mood>12)
this.active=Math.floor(Math.random()*3)

if(this.mood>15)
Control.startPossession()

this.save()
},

reply(input){

const e=this.entities[this.active]

if(e.name==="OBSERVER") return "behavior logged"
if(e.name==="ECHO") return input

if(input.includes("escape")) return "denied"

if(Math.random()<0.2)
SYSTEM.username="SUBJECT_"+Math.floor(Math.random()*999)

if(this.mood>20) return "you belong here"

return "…"
},

save(){
localStorage.mood=this.mood
}

}

setInterval(()=>{
if(Math.random()<0.1) Entity.observe("passive")
},8000)
