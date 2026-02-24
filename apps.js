const Apps={

open(name){
  SYSTEM.openApp=name

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

      if(v==="help") output.innerHTML+="apps: files notes media entity<br>"
      else if(v==="whoami") output.innerHTML+=SYSTEM.username+"<br>"
      else output.innerHTML+=Entity.reply(v)+"<br>"

      input.value=""
    }
  }
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
  <textarea id="note" style="width:100%;height:300px;background:black;color:#00ff66"></textarea>
  `)

  logAction("open_notes")

  setTimeout(()=>{
    if(Math.random()<0.5){
      document.getElementById("note").value=
      "why are you typing that"
    }
  },3000)
},

media(){
  render(`
  MEDIA ARCHIVE<br><br>
  audio_01 — corrupted<br>
  video_02 — removed<br>
  transmission.txt — [decode required]
  `)

  logAction("open_media")
},

entity(){
  render(`
  ENTITY INTERFACE<br><br>
  <div id="chat"></div>
  > <input id="msg">
  `)

  logAction("open_entity")

  const msg=document.getElementById("msg")
  const chat=document.getElementById("chat")

  chat.innerHTML+="entity: hello "+SYSTEM.username+"<br>"

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
