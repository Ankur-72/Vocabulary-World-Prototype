class Form3{

    constructor(){}
    
    display(){
        textAlign(CENTER);
        
        var Q2 = createElement('h3');
        Q2.html("Q2. Choose the right meaning for the word: Indolent(adj)")
        Q2.position(290,100);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option("Successful");
                radio.option("Intolerant");
                radio.option("Lazy");
                radio.option("Active");

                var submitButton = createButton('Submit');
                submitButton.position(620,420);
                submitButton.size(130,50);
                submitButton.style('color: orange');

            //textAlign(CENTER);    
            //fill(255, 0, 0);

                

            let answer = radio.value()

            console.log(answer)

            submitButton.mousePressed(function(){

                if(answer === answerArray[0]){
                    score = score+1
                } else {
                    //to enter in the array of wrong questions. Display at the end.
                    wrongQuestions.push(Q1);
                }

                questionCounter += 1;
                
    
            });       
}

}