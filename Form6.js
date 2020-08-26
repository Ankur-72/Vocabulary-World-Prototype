class Form6{

    constructor(){}
    
    display(){
        textAlign(CENTER);
        var Q6 = createElement('h3');
        Q6.html("Q6. Choose the right meaning for the word: Suave(adj)")
        Q6.position(290,100);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option("Being very charming and elegant");
                radio.option("A person who sets a benchmark for others");
                radio.option("An extremely introverted person");
                radio.option("The act of committing an outrageous crime");

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