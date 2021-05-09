class Quiz{
    constructor(){}
    
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val() 
        })
    }

    updateState(state){   
        database.ref("/").update({
        'gameState':state 
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hideDetails();
        background("yellow");
        Player.getInfo()
        textSize(30);
        text("Results",300,90)
        if(allPlayers!=undefined){
           textSize(30)
           var displayAnswers=230
           text("Note: Names In Green Have Answerd Correctly ",100,220)
            for(var plr in allPlayers){
                var correctAns ="2"
                if(correctAns===allPlayers[plr].answer){
                    fill("green")
                }
                else{
                    fill("red")
                }
                displayAnswers+=30
                textSize(20)
                text(allPlayers[plr].name+":"+allPlayers[plr].answer,250,displayAnswers)
            }
                                               
                                            
                                               

        }
       
    }
}