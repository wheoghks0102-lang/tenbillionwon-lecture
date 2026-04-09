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

const storyTemplates = [
  (f1, f2) => `// ${f1}님은 ${f2}님과 함께 영원한 대학원생 형벌을 받았습니다. 🎓`,
  (f1, f2) => `if (${f1} !== ${f2}) { console.log("${f1}님이 ${f2}님에게 똥을 던졌습니다! 💩"); }`,
  (f1, f2) => `function trade() { ${f1}님이 ${f2}님에게 27,000원을 입금했습니다. 💸 }`,
  (f1, f2) => `// ${f1}님이 ${f2}님의 코드를 몰래 삭제하고 도망갑니다. 🏃‍♂️💨`,
  (f1, f2) => `while (true) { ${f1}님은 ${f2}님의 잔소리를 듣고 있습니다. 👂 }`,
  (f1, f2) => `// ${f1}님과 ${f2}님은 오늘 점심 메뉴로 심각한 토론 중입니다. 🍱`,
  (f1, f2) => `try { ${f1}님이 ${f2}님에게 고백을 시도합니다... } catch (error) { "차였습니다." }`,
  (f1, f2) => `// ${f1}님이 ${f2}님의 키보드에서 'Enter' 키를 빼버렸습니다. ⌨️`,
  (f1, f2) => `const friendship = ${f1}.love(${f2}); // 우정이 +100 증가했습니다. ✨`,
  (f1, f2) => `// ${f1}님은 ${f2}님이 잠든 사이 노트북에 시나몬롤 스티커를 붙였습니다. 🐰`,
  (f1, f2) => `if (${f1}.isHungry()) { ${f2}님의 도시락을 뺏어먹습니다. 🍱 }`,
  (f1, f2) => `// ${f1}님은 ${f2}님보다 코딩을 1초 더 빨리 해서 기분이 좋습니다. 😎`
];

function generateRandomStory() {
  const storyLines = ['// 시나몬롤과 친구들의 우당탕탕 코딩 라이프...', ''];
  
  // Create 10 random funny interactions
  for (let i = 0; i < 10; i++) {
    const shuffled = [...friends].sort(() => Math.random() - 0.5);
    const f1 = shuffled[0];
    const f2 = shuffled[1];
    const template = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
    
    storyLines.push(template(f1, f2));
    storyLines.push(''); // Add space between stories
  }
  
  storyLines.push('console.log("오늘도 평화로운 팀 시나몬롤! ✨");');
  return storyLines;
}

let codeLines = generateRandomStory();
let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 30; // Slightly faster for longer text
const lineDelay = 600;

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
