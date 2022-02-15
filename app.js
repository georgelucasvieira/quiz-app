const quizData = [
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    },{
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "a"
    },{
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b"
    },{
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b"
    },{
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "d"
    }

]

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answersEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answersEls.forEach((answersEl) => {
        if(answersEl.checked){
            answer = answersEl.id;
            answersEl.checked = false;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer){
        score += answer == quizData[currentQuiz].correct ? 1 : 0;

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<div style="max-width: 500px; margin: 0 auto; height: 50vh; padding:100px 20px 0 20px;"
                                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
                                <button onclick="location.reload()">Reload</button>
                              </div>`;
        }
    }
});