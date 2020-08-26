class Form7{

    constructor(){}
    
    display(){
        textAlign(CENTER);
        var Q7 = createElement('h3');
        Q7.html("Q7. Choose the right meaning for the word: Relegation(n)")
        Q7.position(290,100);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option("Being assigned an inferior rank or position");
                radio.option("A group of high-ranking military officers");
                radio.option("A very skilled and capable group of people");
                radio.option("Trying to learn something over and over again");

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