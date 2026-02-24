const Glitch={

level:0,

increase(){
this.level++
if(this.level>3) this.textCorruption()
if(this.level>10) this.shutdown()
},

textCorruption(){
document.body.innerHTML=document.body.innerHTML
.replace(/[A-Z]/g,()=>Math.random()<0.1?"█":"A")
},

shutdown(){
document.body.innerHTML=`
SYSTEM FAILURE<br><br>
ENTITY CONTAINMENT FAILED<br><br>
DO NOT POWER OFF
`
}

}
