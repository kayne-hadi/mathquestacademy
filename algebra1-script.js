document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let mistakes = 0;
    let question = generateQuestion();

    function generateQuestion() {
        let equation = '';
        const coefficient = Math.floor(Math.random() * 20) + 2;
        const constant = Math.floor(Math.random() * 200) + 1;

        equation = `${coefficient}a = ${constant}`;
        document.getElementById('question').textContent = equation;

        const correctX = constant / coefficient;
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
