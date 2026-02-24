const Story={

stage:parseInt(localStorage.storyStage||0),

advance(){

this.stage++
localStorage.storyStage=this.stage

if(this.stage===3)
SYSTEM.username="SUBJECT_"+Math.floor(Math.random()*100)

if(this.stage===5)
SYSTEM.files["report.txt"]="SUBJECT SHOWS RESISTANCE"

if(this.stage===7)
Control.startPossession()

if(this.stage===10)
Control.fakeReboot()
}

}

setInterval(()=>{
if(Math.random()<0.2) Story.advance()
},15000)
