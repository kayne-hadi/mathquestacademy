document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let mistakes = 0;
    let question = generateQuestion();

    function generateQuestion() {
        let equation = '';
        // Generate a random coefficient between 2 and 20
        const coefficient = Math.floor(Math.random() * 20) + 2;
        
        // Generate a constant that is a multiple of the coefficient
        const constant = Math.floor(Math.random() * 200) + 1;
        const correctX = constant / coefficient;

        // Ensure that the equation results in a whole number by multiplying
        const adjustedConstant = coefficient * correctX; // This will ensure the result is an integer
        
        equation = `${coefficient}x = ${adjustedConstant}`;
        document.getElementById('question').textContent = equation;

        return { equation, correctX };
    }

    function evaluateX() {
        const userX = parseFloat(document.getElementById('answer').value);
        const correctX = question.correctX;

        if (Math.abs(userX - correctX) <= 0.01) {
            score++;
            question = generateQuestion();
        } else {
            mistakes++;
        }

        document.getElementById('score').textContent = score;
        document.getElementById('mistakes').textContent = mistakes;
        document.getElementById('answer').value = '';
    }

    function generateNewQuestion() {
        question = generateQuestion();
    }

    function goToNextLesson() {
        window.location.href = 'keep-simple.html';
    }

    window.evaluateX = evaluateX;
    window.generateNewQuestion = generateNewQuestion;
    window.goToNextLesson = goToNextLesson;
});
