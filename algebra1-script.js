document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let mistakes = 0;
    let question = generateQuestion();

    function generateQuestion() {
        let equation = '';
        
        // Generate a random coefficient between 2 and 20
        const coefficient = Math.floor(Math.random() * 20) + 1;
        
        // Generate a constant that is a multiple of the coefficient
        // This guarantees the result will be a whole number
        const multiplier = Math.floor(Math.random() * 10) + 1; // Random multiplier
        const constant = coefficient * multiplier; // Constant is now a multiple of coefficient

        // The correct answer is guaranteed to be an integer
        const correctX = constant / coefficient; // This will always yield a whole number
        
        equation = `${coefficient}x = ${constant}`;
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
        window.location.href = 'algebra2-index.html';
    }

    window.evaluateX = evaluateX;
    window.generateNewQuestion = generateNewQuestion;
    window.goToNextLesson = goToNextLesson;
});
