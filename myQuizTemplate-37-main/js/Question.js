class Form{
    constructor(){
        this.input=createInput("Name");
        this.input2=createInput("Answer")
        this.question=createElement("h3");
        this.option1=createElement("h4");
        this.option2=createElement("h4");
        this.option3=createElement("h4");
        this.option4=createElement("h4");
        this.title=createElement("h2")
        this.button=createButton("submit")
    }
    hideDetails(){
        this.input.hide();
        this.input2.hide();
        this.question.hide();
        this.button.hide();
    }
    display(){
        
        this.title.html("My Quiz Game")
        this.title.position(300,50);
        this.question.html("Question:- What starts and ends with letter E but ony one letter in it?");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
        this.option3.html("3: Example");
        this.option3.position(150,140);
        this.option4.html("4: Estimate");
        this.option4.position(150,160);

        this.input2.position(500,200);
        this.input.position(500,170);
        this.button.position(550,230);

    this.button.mousePressed(()=>{
    this.title.hide();
    this.input.hide();
    this.input2.hide();
    this.button.hide();
    player.name = this.input.value();
    player.answer = this.input2.value();
    playerCount+=1;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);
    
    })
        

}
}
