class Form10{

    constructor(){}
    
    display(){
        textAlign(CENTER);
        var Q10 = createElement('h3');
        Q10.html("Q10. Choose the antonym of the word: Perennial(adj)")
        Q10.position(displayWidth - 30,displayHeight - 50);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option("Lasting for an infinite amount of time");
                radio.option("Having no expiry date");
                radio.option("Present for a very short period of time");
                radio.option("Practical application of virtues and ideals");

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