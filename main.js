const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
  lottoNumbersContainer.innerHTML = ''; // Clear previous numbers

  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  for (const number of numbers) {
    const lottoBall = document.createElement('div');
    lottoBall.classList.add('lotto-ball');
    lottoBall.textContent = number;
    lottoNumbersContainer.appendChild(lottoBall);
  }
});
