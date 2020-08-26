class Form1{

    constructor(){}

    hide(){
        this.button.hide();
        this.input.hide();
    }
    
        display(){
            if(frameCount > 105 && gameState <2){

                var button = createButton('Play!');
                button.position(620,420);
                button.size(130,50);
                button.style('color: orange');
                //button.center();
        
                var button1 = createButton('Instructions');
                button1.position(620,500);
                button1.size(130,50);
                button1.style('color: purple');
                //button1.center();

               var button2 = createButton('Home Screen');
                button2.position(620,580);
                button2.size(130,50);
                button2.style('color: black');
                //button2.center();
                        
                
            button1.mousePressed(function(){
                gameState = 2;
            });   

            button2.mousePressed(function(){
                gameState = 1;
            });

            button.mousePressed(function(){
                console.log(gameState)
                gameState = 3;
               // this.button.hide();
            });

            }

            


           
    }
    
    
}