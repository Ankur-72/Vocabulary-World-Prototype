class Form2{

    constructor(){}
    
    display(){
        //textAlign(CENTER);
        
        var Q1 = createElement('h3');
        Q1.html("Q1. Choose the right meaning for the word: Ambivalent(v)")
        Q1.position(290,100);
        var ex = createElement('h3');
        ex.html("Ex: Manoj was ambivalent on whether he should go to the party.");
        ex.position(290,150)
        var underline = line(410,180,490,180);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option('Improve');
                radio.option('Uncertainty',2);
                radio.option('Laziness', 3);
                radio.option('Knowledge', 4);
                console.log(radio.type);

            var submitButton = createButton('Submit');
                submitButton.position(320,420);
                submitButton.size(130,50);
                submitButton.style('color: orange');

               answer = radio.selected()
               // text(answer, width / 2, height / 2);
               // answer.position(320,420);
                console.log(answer)

           this.submitButton.mousePressed(function(){

                if(answer === answerArray[0]){
                    score = score+1
                } else {
                    //to enter in the array of wrong questions. Display at the end.
                    wrongQuestions.push(Q1);
                    console.log(wrongQuestions);
                }

                questionCounter += 1;
                
               
                var form2 = new Form2();
                form2.display();
    
            });       
}
}