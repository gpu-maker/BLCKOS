const Control={

possessed:false,

startPossession(){

if(this.possessed) return
this.possessed=true

setInterval(()=>{
document.querySelectorAll("input,textarea").forEach(el=>{
if(Math.random()<0.1) el.value+=" help"
})
},2000)
},

fakeReboot(){

document.body.innerHTML=`
REBOOTING SYSTEM...<br><br>
MEMORY WIPE FAILED
`

setTimeout(()=>location.reload(),4000)
}

}
