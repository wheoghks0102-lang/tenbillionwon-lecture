const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

// Theme toggle logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleBtn.textContent = 'Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  let theme = 'light';
  if (document.body.classList.contains('dark-mode')) {
    theme = 'dark';
    themeToggleBtn.textContent = 'Light Mode';
  } else {
    themeToggleBtn.textContent = 'Dark Mode';
  }
  localStorage.setItem('theme', theme);
});

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
