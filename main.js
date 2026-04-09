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
const friends = ['심우성', '최준', '조윤혜', '전유희', '채의진', '조대환'];
const actions = [
  'is debugging the universe...',
  'found a legendary bug!',
  'is refactoring the secret recipe.',
  'just pushed a massive update!',
  'is crafting a masterpiece code.',
  'optimized the coffee machine algorithm.'
];

function generateRandomStory() {
  const storyLines = ['// Cinnamoroll and friends are coding...', ''];
  
  // Shuffle friends and actions for randomness
  const shuffledFriends = [...friends].sort(() => Math.random() - 0.5);
  
  shuffledFriends.forEach((friend, index) => {
    const action = actions[Math.floor(Math.random() * actions.length)];
    storyLines.push(`const ${getEnglishName(friend)} = "${friend}";`);
    storyLines.push(`${getEnglishName(friend)}.${action.replace(/ /g, '_').replace('...', '')}();`);
    storyLines.push('');
  });
  
  storyLines.push('console.log("Team Cinnamoroll is the best! ✨");');
  return storyLines;
}

function getEnglishName(name) {
  const mapping = {
    '심우성': 'woosung',
    '최준': 'choijun',
    '조윤혜': 'yunhye',
    '전유희': 'yuhee',
    '채의진': 'uijin',
    '조대환': 'daehwan'
  };
  return mapping[name] || 'friend';
}

let codeLines = generateRandomStory();
let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 40;
const lineDelay = 400;

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
      
      // Auto-scroll to bottom of editor body
      const editorBody = document.querySelector('.editor-body');
      editorBody.scrollTop = editorBody.scrollHeight;
    }
  } else {
    // Reset and generate a new random story
    setTimeout(() => {
      codeOutput.textContent = '';
      lineIndex = 0;
      charIndex = 0;
      codeLines = generateRandomStory();
      typeCode();
    }, 4000);
  }
}

// Start typing animation
typeCode();
