const BIOS={

lines:[
"American Megatrends BIOS v2.17",
"",
"Initializing hardware...",
"Checking memory...",
"Memory Test: 2048MB OK",
"",
"Detecting devices...",
"CPU: OK",
"STORAGE: OK",
"NETWORK: DISABLED",
"",
"Loading Federal Systems Kernel...",
"",
"WARNING: UNAUTHORIZED PROCESS DETECTED",
"Attempting containment...",
"",
"CONTAINMENT FAILURE",
"",
"Booting anomaly environment..."
],

boot(){

document.body.innerHTML=`<div id="bios" style="padding:20px;height:100vh"></div>`
const container=document.getElementById("bios")

let i=0
const interval=setInterval(()=>{

if(i<this.lines.length){

let line=this.lines[i]

if(Math.random()<0.15) line="█ ERROR: ENTITY RESPONSE DETECTED"
if(Math.random()<0.1) line=line.replace(/[A-Z]/g,"█")

container.innerHTML+=line+"<br>"
i++

}else{
clearInterval(interval)
setTimeout(()=>this.launchOS(),1500)
}

},120)
},

launchOS(){

document.body.innerHTML=`
<div id="boot">
ANOMALY OS v3.1<br>
PROPERTY OF FEDERAL SYSTEMS LAB<br><br>
STATUS: DECOMMISSIONED<br>
REASON: ███████████████████<br><br>
type "help"
</div>

<div id="appbar">
<span class="app" data-app="terminal">terminal</span>
<span class="app" data-app="files">files</span>
<span class="app" data-app="notes">notes</span>
<span class="app" data-app="media">media</span>
<span class="app" data-app="entity">entity</span>
</div>

<div id="screen"></div>
`

initializeSystem()
}

}
