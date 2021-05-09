class Player{
    constructor(){
        this.index=null;
        this.answer=null;
        this.name=null;
        //this.button=createButton();
        
    }
    
    
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
    database.ref("/").update({
        "playerCount":count
    })
    }
    
    update(){
        var playerIndex= "Players/Player"+ player.index;  
        database.ref(playerIndex).set({
            name:this.name,
            answer:this.answer       
                          
        })                                   
    }
    
    static getInfo(){
     database.ref("Players").on("value",(data)=>{
         allPlayers=data.val()
     })   
    }
}
