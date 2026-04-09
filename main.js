const themeToggleBtn = document.getElementById('theme-toggle');
const codeOutput = document.getElementById('code-output');

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

// Typing Effect logic
const codeLines = [
  '// Cinnamoroll is coding...',
  'const world = "sweet";',
  'function makeCinnamonRolls(count) {',
  '  return Array(count).fill("🧁");',
  '}',
  '',
  'console.log("Cinnamoroll says: Hello World!");',
  'const rolls = makeCinnamonRolls(5);',
  'console.log("Baked rolls:", rolls.join(" "));',
  '',
  'if (world === "sweet") {',
  '  console.log("Life is delicious! ✨");',
  '}'
];

let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 50;
const lineDelay = 500;

function typeCode() {
  if (lineIndex < codeLines.length) {
    const currentLine = codeLines[lineIndex];
    if (charIndex < currentLine.length) {
      codeOutput.textContent += currentLine[charIndex];
      charIndex++;
      setTimeout(typeCode, typingSpeed);
    } else {
      codeOutput.textContent += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeCode, lineDelay);
    }
  } else {
    // Reset or stop
    setTimeout(() => {
      codeOutput.textContent = '';
      lineIndex = 0;
      charIndex = 0;
      typeCode();
    }, 3000);
  }
}

// Start typing animation
typeCode();
