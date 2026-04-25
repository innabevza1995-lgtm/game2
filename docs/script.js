const cards = [
  { id: "lighthouse", name: "Маяк",      symbol: "🏮", roleText: "Главная тема",    interpretation: "Дайте аудитории ясность и опору.",              advice: "Сделайте пост со структурой: проблема → путь → результат." },
  { id: "labyrinth",  name: "Лабиринт",  symbol: "🌀", roleText: "Энергия подачи",  interpretation: "Тема сложная, но ценная.",                       advice: "Разбейте тему на 3 простых шага." },
  { id: "mirror",     name: "Зеркало",   symbol: "🪞", roleText: "Главная тема",    interpretation: "Нужен честный разговор с аудиторией.",           advice: "Покажите боль клиента и мягкое решение." },
  { id: "spark",      name: "Искра",     symbol: "✨", roleText: "Энергия подачи",  interpretation: "Сработает короткий эмоциональный формат.",       advice: "Снимите Reels с одной сильной мыслью." },
  { id: "key",        name: "Ключ",      symbol: "🗝", roleText: "Следующий шаг",   interpretation: "У вас есть рабочий принцип — поделитесь им.",    advice: "Сделайте материал: «мой метод в 3 правилах»." },
  { id: "gate",       name: "Врата",     symbol: "🌌", roleText: "Следующий шаг",   interpretation: "Время переводить аудиторию дальше.",             advice: "Добавьте лид-магнит или мини-урок." },
  { id: "river",      name: "Река",      symbol: "🌊", roleText: "Энергия подачи",  interpretation: "Важна плавность и ритм публикаций.",             advice: "Запустите регулярную рубрику в Telegram." },
  { id: "comet",      name: "Комета",    symbol: "☄️", roleText: "Следующий шаг",   interpretation: "Момент для смелого появления.",                  advice: "Сделайте яркий запуск поста с личной историей." },
  { id: "tower",      name: "Башня",     symbol: "🗼", roleText: "Главная тема",    interpretation: "Нужно усилить позиционирование.",                advice: "Опубликуйте экспертный разбор-кейс." },
  { id: "mask",       name: "Маска",     symbol: "🎭", roleText: "Энергия подачи",  interpretation: "Больше искренности, меньше глянца.",             advice: "Покажите закулисье и личный урок." },
  { id: "moon",       name: "Луна",      symbol: "🌙", roleText: "Энергия подачи",  interpretation: "Заходит мягкий, эмоциональный тон.",             advice: "Сделайте вечерний пост-размышление." },
  { id: "bridge",     name: "Мост",      symbol: "🌉", roleText: "Следующий шаг",   interpretation: "Соединяйте форматы и каналы.",                   advice: "Пост + видео + лид-магнит в одной связке." }
];

const prompts = [
  "О чём мне снять следующий Reels?",
  "Какую тему развивать в Telegram?",
  "Какой следующий шаг в моей воронке?",
  "Какой AI-инструмент мне сейчас нужен?"
];

const roles = ["Главная тема", "Энергия подачи", "Следующий шаг"];

// DOM-элементы
const screens      = { intro: document.getElementById("intro-screen"), deck: document.getElementById("deck-screen"), reveal: document.getElementById("reveal-screen"), result: document.getElementById("result-screen") };
const questionInput = document.getElementById("question-input");
const promptList    = document.getElementById("prompt-list");
const startBtn      = document.getElementById("start-btn");
const deckBtn       = document.getElementById("deck-btn");
const cardsGrid     = document.getElementById("cards-grid");
const revealTip     = document.getElementById("reveal-tip");
const toResultBtn   = document.getElementById("to-result-btn");
const resultQuestion = document.getElementById("result-question");
const resultList    = document.getElementById("result-list");
const practicalBlock = document.getElementById("practical-block");
const restartBtn    = document.getElementById("restart-btn");
const particles     = document.getElementById("particles");

let selected      = [];
let revealedCount = 0;
let nextCardIndex = 0;

// ===== Вспомогательные =====

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
}

function pickThree() {
  const pool = [...cards].sort(() => Math.random() - 0.5);
  return pool.slice(0, 3).map((card, i) => ({ ...card, roleText: roles[i] }));
}

// ===== Рендер карт (без внешних картинок — всё через CSS) =====

function renderReveal() {
  cardsGrid.innerHTML = "";

  selected.forEach((card, index) => {
    const isOpen     = index < revealedCount;
    const isNext     = index === nextCardIndex;
    const isDisabled = !isOpen && !isNext;

    const cardEl = document.createElement("button");
    cardEl.className = `card${isOpen ? " open" : ""}`;
    cardEl.disabled  = isDisabled;

    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back">
          <strong>✶</strong>
        </div>
        <div class="card-face card-front scene-${card.id}">
          <div class="scene">
            <div class="scene-glow"></div>
            <div class="scene-art">${card.symbol}</div>
            <div class="scene-title">${card.name}</div>
          </div>
          <div class="card-info">
            <div class="card-role">${card.roleText}</div>
            <div class="card-interp">${card.interpretation}</div>
            <p class="reveal-hint">${index < 2 ? "Нажмите следующую карту" : ""}</p>
          </div>
        </div>
      </div>
    `;

    // Открытие по клику
    cardEl.onclick = () => {
      if (index === nextCardIndex) {
        revealedCount += 1;
        nextCardIndex += 1;
        renderReveal();
      }
    };

    // 3D-эффект на открытой карте
    cardEl.onmousemove = (e) => {
      if (!isOpen) return;
      const r = cardEl.getBoundingClientRect();
      const rx = ((e.clientY - r.top)  / r.height - 0.5) * -10;
      const ry = ((e.clientX - r.left) / r.width  - 0.5) *  10;
      cardEl.querySelector(".card-inner").style.transform = `rotateY(${180 + ry}deg) rotateX(${rx}deg)`;
    };
    cardEl.onmouseleave = () => {
      const inner = cardEl.querySelector(".card-inner");
      inner.style.transform = isOpen ? "rotateY(180deg)" : "rotateY(0deg)";
    };

    cardsGrid.appendChild(cardEl);
  });

  if (revealedCount >= 3) {
    revealTip.textContent = "Все карты раскрыты!";
    toResultBtn.classList.remove("hidden");
  } else {
    revealTip.textContent = `Откройте карту ${revealedCount + 1} из 3`;
    toResultBtn.classList.add("hidden");
  }
}

// ===== Результат =====

function renderResult() {
  resultQuestion.textContent = `Запрос: «${questionInput.value.trim()}»`;
  resultList.innerHTML = "";

  selected.forEach((card) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `<div class="mini">${card.roleText}</div><strong>${card.symbol} ${card.name}</strong><p style="margin:4px 0 0;font-size:14px;opacity:0.9">${card.interpretation}</p>`;
    resultList.appendChild(item);
  });

  practicalBlock.innerHTML = `<strong>✦ Практический шаг:</strong><p style="margin:6px 0 0;font-size:14px;line-height:1.45">${selected.map((c) => c.advice).join(" ")}</p>`;
}

// ===== Частицы =====

function createParticles() {
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("i");
    dot.style.left           = `${5 + ((i * 11) % 90)}vw`;
    dot.style.top            = `${5 + ((i * 13) % 88)}vh`;
    dot.style.animationDelay = `${i * 0.27}s`;
    dot.style.opacity        = `${0.3 + (i % 5) * 0.12}`;
    dot.style.width          = `${3 + (i % 3)}px`;
    dot.style.height         = dot.style.width;
    particles.appendChild(dot);
  }
}

// ===== Анимация подмигивания девушки =====

function startWinkLoop() {
  const eyeRight     = document.querySelector(".eye-right");
  const eyeIris      = document.querySelector(".eye-right-iris");
  const eyePupil     = document.querySelector(".eye-right-pupil");
  const eyeShine     = document.querySelector(".eye-right-shine");
  const winkLine     = document.querySelector(".wink-line");

  if (!eyeRight) return;

  function doWink() {
    // Закрываем глаз
    eyeRight.setAttribute("ry", "1");
    eyeIris.setAttribute("ry", "0.5");
    eyePupil.setAttribute("ry", "0.3");
    eyeShine.style.display  = "none";
    winkLine.setAttribute("display", "block");

    setTimeout(() => {
      // Открываем глаз
      eyeRight.setAttribute("ry", "8");
      eyeIris.setAttribute("ry", "6");
      eyePupil.setAttribute("ry", "3.5");
      eyeShine.style.display  = "";
      winkLine.setAttribute("display", "none");

      // Следующее подмигивание через 3-5 секунд
      setTimeout(doWink, 3000 + Math.random() * 2000);
    }, 220);
  }

  // Первое подмигивание через 2 секунды
  setTimeout(doWink, 2000);
}

// ===== Подсказки =====

prompts.forEach((prompt) => {
  const btn = document.createElement("button");
  btn.textContent = prompt;
  btn.onclick = () => (questionInput.value = prompt);
  promptList.appendChild(btn);
});

// ===== Навигация =====

startBtn.onclick = () => {
  if (!questionInput.value.trim()) {
    questionInput.focus();
    return;
  }
  showScreen("deck");
};

deckBtn.onclick = () => {
  selected       = pickThree();
  revealedCount  = 0;
  nextCardIndex  = 0;
  renderReveal();
  showScreen("reveal");
};

toResultBtn.onclick = () => {
  renderResult();
  showScreen("result");
};

restartBtn.onclick = () => {
  showScreen("intro");
  selected       = [];
  revealedCount  = 0;
  nextCardIndex  = 0;
  questionInput.value = "";
};

// ===== Инициализация =====
createParticles();
startWinkLoop();
