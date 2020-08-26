class Form5{

    constructor(){}
    
    display(){
        textAlign(CENTER);
        var Q4 = createElement('h3');
        Q4.html("Q4. Choose the right meaning for the word: Hiatus(n)")
        Q4.position(290,100);

            var radio = createRadio();
                radio.position(320,220);
                radio.size(430,450);
                radio.style('color: orange');
                //textAlign(CENTER)
                radio.option("A group of pessimistic people");
                radio.option("An extremely insecure person");
                radio.option("A slight pause in a sequence or activity"); 
                radio.option("A very hardworking group of people");

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