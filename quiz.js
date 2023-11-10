 var questionBank=[
    {
        ques:["What is the largest planet in our solar system?"], //001
        opt:['<input name=option type=radio value="Jupiter">Jupiter<br><input name=option type=radio value="Mars">Mars<br><input name=option type=radio value="Earth">Earth<br><input name=option type=radio value="Venus">Venus<br>'],
        ans:"Jupiter",
        imgUrl: "imgs/q1.jpg"
    },
    {
        ques:["In what year did Neil Armstrong and Buzz Aldrin become the first people on the Moon?"], //002
        opt:['<input name=option type=radio value="1869">1869<br> <input name=option type=radio value="1920">1920<br> <input name=option type=radio value="1969">1969<br> <input name=option type=radio value="2005">2005<br>'],
        ans:"1969",
        imgUrl: "imgs/q2.jpg"
    },
    {
        ques:["How old is planet Earth estimated to be?"], //003
        opt:['<input name=option type=radio value="4,500 years old">4,500 years old<br> <input  name=option type=radio value="4.5 million years old">4.5 million years old<br> <input name=option type=radio value="450 million years old">450 million years old<br><input name=option type=radio value="4.5 billion years old">4.5 billion years old<br>'],
        ans:"4.5 billion years old",
        imgUrl: "imgs/q3.jpg"
    },
    {
        ques:["Which planet is closest to the Sun?"], //004
        opt:['<input name=option type=radio value="Mercury">Mercry<br> <input name=option type=radio value="Venus">Venus<br> <input name=option value="Mars" type=radio>Mars<br><input name=option type=radio value="Earth">Earth<br>'],
        ans:"Mercury",
        imgUrl: "imgs/q4.jpg"
        
    },
    {
        ques:["What is it called when the Moon blocks our view of the Sun?"], //005
        opt:['<input name=option type=radio value="Black Hole">Black Hole<br> <input name=option type=radio value="Solar Eclipse">Solar Eclipse<br> <input name=option type=radio value="Shooting Star">Shooting Star<br> <input name=option type=radio value="Equinox">Equinox<br>'],
        ans:"Solar Eclipse",
        imgUrl: "imgs/q5.jpg"
    },
    {
        ques:["Which planet is NOT in this picture?"], //006
        opt:['<input name=option type=radio value="Saturn">Saturn<br> <input name=option type=radio value="Uranus">Uranus<br> <input name=option type=radio value="Jupiter">Jupiter<br> <input name=option type=radio value="Mars">Mars<br>'],
        ans:"Mars",
        imgUrl: "imgs/q6.jpg"
    },
    {
        ques:["What is the most distant object in the universe that astronomers have discovered?"], //007
        opt:['<input  name=option type=radio value="The Moon">The Moon<br> <input name=option type=radio value="A star called Proxima Centauri">A star called Proxima Centauri<br> <input name=option type=radio value="A Galaxy called GN-z11">A Galaxy called GN-z11<br> <input name=option type=radio value="The International Space Station">The International Space Station<br>'],
        ans:"A Galaxy called GN-z11",
        imgUrl: "imgs/q7.jpg"
    },
    {
        ques:["How much time does it take for sunlight to reach Earth?"],//008
        opt:['<input name=option type=radio value="8.20 seconds">8.20 seconds<br> <input name=option type=radio value="8 minutes 20 seconds">8 minutes 20 seconds<br> <input name=option type=radio value="8 hours 20 minutes">8 hours 20 minutes<br> <input name=option type=radio value="8 days 20 hours">8 days 20 hours<br>'],
        ans:"8 minutes 20 seconds",
        imgUrl: "imgs/q8.jpg"
    },
    {
        ques:["Which Guinness World Records title does astronaut Peggy Whitson hold?"],//009
        opt:['<input name=option type=radio value="Most spacewalks by a female (10)">Most spacewalks by a female (10)<br> <input name=option type=radio value="First person on the Moon (1969)">First person on the Moon (1969)<br> <input name=option type=radio value="Oldest person in space (82 years 169 days)">Oldest person in space (82 years 169 days)<br> <input name=option type=radio value="Youngest person to go to space (18 years 334 days)">Youngest person to go to space (18 years 334 days)<br>'],
        ans:"Most spacewalks by a female (10)",
        imgUrl: "imgs/q9.jpg"
    },
    {
        ques:["What planet is this?"], //010
        opt:['<input name=option type=radio value="Neptune">Neptune<br> <input name=option type=radio value="Venus">Venus<br> <input name=option type=radio value="Mars">Mars<br> <input name=option type=radio value="Saturn">Saturn<br>'],
        ans:"Saturn",
        imgUrl: "imgs/q10.jpg"
    }
 ]



var score=0;
var i=0; // for iterating through the questions
var timer;
var timerCount = 30; // Initial timer count in seconds

function setTimer() {
    var timerDisplay = document.getElementById("timer");
    var timerSlider = document.getElementById("timerSlider");

    timerDisplay.textContent = timerCount + "s";
    timerSlider.value = timerCount;

    timer = setInterval(function () {
        timerCount--;
        timerDisplay.textContent = timerCount + "s";
        timerSlider.value = timerCount;

        if (timerCount <= 0) {
            clearInterval(timer);
            timerCount = 30; // Reset timer
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timerCount = 30;
    var timerDisplay = document.getElementById("timer");
    var timerSlider = document.getElementById("timerSlider");

    timerDisplay.textContent = "";
    timerSlider.value = timerCount;
}

function DisplayImage(imgUrl) {
    const questionImage = document.getElementById('question-image');
    questionImage.src = imgUrl;
}

function setNext(){
    setTimer(); 
    message.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].ques;
    options.innerHTML= questionBank[i].opt;
    click01.innerHTML='<button onclick=nextQuestion() id="btn1">Next</button>';
    click02.innerHTML='<button onclick=prevQuestion() id="btn2">Prev</button>';
}

function setPrev(){
    message.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].ques;
    options.innerHTML= questionBank[i].opt;
    click01.innerHTML='<button onclick=nextQuestion() id="btn1">Next</button>';
    click02.innerHTML='<button onclick=prevQuestion() id="btn2">Prev</button>';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption && selectedOption.value === questionBank[i].ans) {
            score++;
    }
}
}

function nextQuestion(){
    if(i!=(questionBank.length))
    {
        checkAnswer();
        resetTimer();
        i++;
        DisplayImage(questionBank[i].imgUrl);
        setNext();
        comment.innerHTML=" ";
    }
    else{
        message.innerHTML="End of  quiz";
        options.innerHTML="";
        comment.innerHTML="Your Score:"+score+"/"+questionBank.length;
        click01.innerHTML="";
        timerSlider.innerHTML=" ";
        timerDisplay.textContent = "";
    }
}
    
function prevQuestion(){
     if(i!=0)
    {
        resetTimer(); 
        setTimer();
        i--;
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption && selectedOption.value !== questionBank[i].ans) {
            score--;
        } /*decrement score as the user goes to previious*/
        setPrev();
        DisplayImage(questionBank[i].imgUrl);
        comment.innerHTML=" ";
    }
    else{
        comment.innerHTML="No Previous Question";
        click01.innerHTML='<button onclick=nextQuestion() id="btn1">Next</button>';
    }
}


resetTimer(); 
setTimer(); 
message.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].ques;
options.innerHTML= questionBank[i].opt;
DisplayImage(questionBank[i].imgUrl);
click01.innerHTML='<button onclick=nextQuestion() id="btn1">Next</button>';
click02.innerHTML='<button onclick=prevQuestion() id="btn2">Prev</button>';


