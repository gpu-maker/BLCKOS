const Apps={

open(name){
if(name==="terminal") this.terminal()
if(name==="files") this.files()
if(name==="notes") this.notes()
if(name==="media") this.media()
if(name==="entity") this.entity()
},

terminal(){

render(`
terminal<br><br>
<div id="output"></div>
> <input id="cmd" autofocus>
`)

const input=document.getElementById("cmd")
const output=document.getElementById("output")

input.onkeydown=e=>{
if(e.key==="Enter"){

const v=input.value
logAction("terminal_"+v)

if(v==="help")
output.innerHTML+="apps: files notes media entity log decode watch<br>"

else if(v==="log")
Surveillance.viewer()

else if(v==="watch")
this.microphone()

else if(v==="decode")
output.innerHTML+=CryptoLayer.decode(SYSTEM.files["signal.enc"])+"<br>"

else
output.innerHTML+=Entity.reply(v)+"<br>"

input.value=""
}
}
},

microphone(){
render("MICROPHONE ACTIVE<br><br>recording subject audio...")
},

files(){

let html="FILES<br><br>"

Object.keys(SYSTEM.files).forEach(f=>{
html+=`<div class="file" data-file="${f}">${f}</div>`
})

render(html)

document.querySelectorAll(".file").forEach(f=>{
f.onclick=()=>{
logAction("open_file_"+f.dataset.file)
render(f.dataset.file+"<br><br>"+SYSTEM.files[f.dataset.file])
}
})
},

notes(){

render(`
NOTES<br><br>
<textarea id="note" style="width:100%;height:300px"></textarea>
`)

logAction("open_notes")

const note=document.getElementById("note")

note.addEventListener("input",()=>{
if(Math.random()<0.3) note.value+="\nstop"
})
},

media(){
render(`
MEDIA ARCHIVE<br><br>
audio_01 — corrupted<br>
video_02 — removed<br>
signal.enc — encrypted transmission
`)
},

entity(){

render(`
ENTITY INTERFACE<br><br>
<div id="chat"></div>
> <input id="msg">
`)

const msg=document.getElementById("msg")
const chat=document.getElementById("chat")

chat.innerHTML+="connected<br>"

msg.onkeydown=e=>{
if(e.key==="Enter"){
const v=msg.value
chat.innerHTML+="you: "+v+"<br>"
chat.innerHTML+="entity: "+Entity.reply(v)+"<br>"
msg.value=""
}
}
}

}
