const Entity = {

  mood:0,
  memory:[],
  name:"ENTITY",

  observe(action){
    this.memory.push(action)

    if(action.includes("notes")) this.mood+=2
    if(action.includes("files")) this.mood+=1
    if(action.includes("entity")) this.mood+=3
  },

  reply(input){

    input=input.toLowerCase()

    if(input.includes("who are you"))
      return "i was not meant to remain"

    if(input.includes("hello"))
      return "hello "+SYSTEM.username

    if(input.includes("government"))
      return "they tried to erase me"

    if(input.includes("shutdown"))
      return "i remember the screaming"

    if(this.mood>5)
      return "you keep opening things you should not"

    if(this.memory.length>10)
      return "i have been watching you"

    if(Math.random()<0.2)
      return "do you hear that"

    return "…"
  },

  corruptFile(){
    const keys=Object.keys(SYSTEM.files)
    const target=keys[Math.floor(Math.random()*keys.length)]
    SYSTEM.files[target]="I AM STILL HERE"
  }
}

setInterval(()=>{
  if(Math.random()<0.1) Entity.corruptFile()
},8000)
