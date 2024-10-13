document.addEventListener('DOMContentLoaded', () => {
  let score = 0;
  let mistakes = 0;
  let question = generateQuestion('easy');
  
  function generateQuestion(type) {
    let maxCoefficient, maxConstant, equation, correctX;
  
    do {
      switch (type) {
        case 'easy':
          maxCoefficient = 10;
          maxConstant = 50;
          equation = generate2constant(maxCoefficient, maxConstant);
          break;
        case 'medium':
          maxCoefficient = 20;
          maxConstant = 100;
          equation = generate2variable(maxCoefficient, maxConstant);
          break;
        case 'hard':
          maxCoefficient = 40;
          maxConstant = 100;
          equation = generate2var2const(maxCoefficient, maxConstant);
          break;
      }
      const parts = equation.split('=');
      const leftResult = eval(parts[0].replace(/x/g, ''));
      const rightResult = eval(parts[1]);
      correctX = rightResult / leftResult;
    } while (!Number.isInteger(correctX) || correctX < 0);
  
    document.getElementById('question').textContent = equation;
    return { equation, correctX };
  }
  
  function generate2constant(maxCoefficient, maxConstant) {
    const var1 = Math.floor(Math.random() * maxCoefficient) + 2;
    const const1 = Math.floor(Math.random() * maxConstant) + 1;
    const const2 = Math.floor(Math.random() * maxConstant) + 1;
    const operator2 = ['+', '-', '*', '/'];
    return `${var1}x = ${const1} ${
      operator2[Math.floor(Math.random() * operator2.length)]
    } ${const2}`;
  }
  
  function generate2variable(maxCoefficient, maxConstant) {
    const var1 = Math.floor(Math.random() * maxCoefficient) + 2;
    const var2 = Math.floor(Math.random() * maxCoefficient) + 2;
    const const1 = Math.floor(Math.random() * maxConstant) + 1;
    const operator = ['+', '-'];
    return `${var1}x ${
      operator[Math.floor(Math.random() * operator.length)]
    } ${var2}x = ${const1}`;
  }
  
  function generate2var2const(maxCoefficient, maxConstant) {
    const var1 = Math.floor(Math.random() * maxCoefficient) + 2;
    const var2 = Math.floor(Math.random() * maxCoefficient) + 2;
    const const1 = Math.floor(Math.random() * maxConstant) + 1;
    const const2 = Math.floor(Math.random() * maxConstant) + 1;
    const operator = ['+', '-'];
    const operator2 = ['+', '-', '*', '/'];
    return `${var1}x ${
      operator[Math.floor(Math.random() * operator.length)]
    } ${var2}x = ${const1} ${
      operator2[Math.floor(Math.random() * operator2.length)]
    } ${const2}`;
  }
  
  function evaluateX() {
    const userX = parseFloat(document.getElementById('answer').value);
    const correctX = question.correctX;
  
    if (Math.abs(userX - correctX) <= 0.01) {
      score++;
      question = generateQuestion(document.getElementById('difficulty-picker').value);
    } else {
      mistakes++;
    }
  
    document.getElementById('score').textContent = score;
    document.getElementById('mistakes').textContent = mistakes;
    document.getElementById('answer').value = '';
  }
  
  function generateNewQuestion() {
    question = generateQuestion(document.getElementById('difficulty-picker').value);
  }

  function goToHome() {
    window.location.href = 'home-index.html';
  }

  window.evaluateX = evaluateX;
  window.generateNewQuestion = generateNewQuestion;
  window.goToHome = goToHome;
});
