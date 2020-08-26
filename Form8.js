class Form8{

    constructor(){}
    
    display(){
        textAlign(CENTER);
        var Q8 = createElement('h3');
        Q8.html("Q8. Choose the right meaning for the word: Dereliction(n)")
        Q8.position(290,100);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option("Having a strong suspicion on someone");
                radio.option("A crime executed without any traces");
                radio.option("The state of becoming abandoned");
                radio.option("A misinterpretation of a government policy");

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