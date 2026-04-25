const cards = [
  {
    id: "lighthouse",
    name: "Маяк",
    roleText: "Главная тема",
    interpretation:
      "В центре расклада стоит ясность. Аудитории сейчас нужен не просто красивый контент, а понятный ориентир: что происходит, почему это важно и какой путь вы предлагаете. Эта карта просит говорить проще, увереннее и структурнее.",
    advice:
      "Соберите материал по схеме «проблема → причина → путь → результат». Начните с боли аудитории, затем покажите один понятный принцип решения и завершите конкретным итогом, который человек сможет представить на себе."
  },
  {
    id: "labyrinth",
    name: "Лабиринт",
    roleText: "Энергия подачи",
    interpretation:
      "Тема может казаться запутанной, но именно в этом её ценность. Люди готовы слушать, если вы проведёте их через сложность постепенно и не перегрузите терминами. Карта советует быть проводником, а не лектором.",
    advice:
      "Разбейте тему на три небольших шага: сначала объясните, где обычно возникает путаница, затем покажите простой ориентир, после этого дайте мини-пример. Такой формат хорошо подходит для карусели, серии сторис или короткого поста."
  },
  {
    id: "mirror",
    name: "Зеркало",
    roleText: "Главная тема",
    interpretation:
      "Расклад показывает запрос на честность. Аудитории важно увидеть в вашем контенте себя: свои сомнения, ошибки, ожидания и скрытые страхи. Чем точнее вы назовёте реальную ситуацию клиента, тем сильнее будет отклик.",
    advice:
      "Сделайте пост в формате «узнаёте себя?». Опишите типичную ситуацию клиента без давления и осуждения, затем объясните, почему это происходит, и предложите мягкий следующий шаг: вопрос, упражнение или маленькое действие."
  },
  {
    id: "spark",
    name: "Искра",
    roleText: "Энергия подачи",
    interpretation:
      "Здесь нужна короткая, живая и эмоциональная подача. Сильнее всего сработает не длинное объяснение, а одна точная мысль, которая быстро цепляет внимание и оставляет желание узнать больше.",
    advice:
      "Снимите короткий Reels или клип с одной главной фразой. Начните с контрастного тезиса, например «вы думаете, что проблема в X, но чаще она в Y», затем добавьте один пример и закончите вопросом к аудитории."
  },
  {
    id: "key",
    name: "Ключ",
    roleText: "Следующий шаг",
    interpretation:
      "У вас уже есть рабочий принцип, который можно превратить в узнаваемый метод. Карта предлагает не искать новую идею, а оформить то, что вы уже делаете интуитивно, в понятную систему для аудитории.",
    advice:
      "Создайте материал «мой метод в 3 правилах». Назовите каждое правило коротко, объясните, какую ошибку оно помогает избежать, и добавьте пример применения. В конце предложите сохранить пост или написать вам для разбора."
  },
  {
    id: "gate",
    name: "Врата",
    roleText: "Следующий шаг",
    interpretation:
      "Аудитория готова перейти на следующий уровень контакта с вами. Одних постов уже недостаточно: нужен вход в более глубокое взаимодействие, где человек сможет попробовать ваш подход на практике.",
    advice:
      "Добавьте лид-магнит, мини-урок или чек-лист. Свяжите его с текущей темой: сначала объясните проблему в контенте, затем предложите бесплатный первый шаг, который помогает человеку получить быстрый маленький результат."
  },
  {
    id: "river",
    name: "Река",
    roleText: "Энергия подачи",
    interpretation:
      "Карта говорит о ритме и регулярности. Вам не нужно каждый раз начинать с нуля или придумывать громкую идею. Лучше создать поток контента, где аудитория привыкает к вашему темпу и ждёт продолжения.",
    advice:
      "Запустите регулярную рубрику в Telegram или сторис. Выберите один повторяемый формат: разбор ошибки, ответ на вопрос, мини-наблюдение или совет недели. Держите рубрику минимум 5 выпусков, чтобы появился узнаваемый ритм."
  },
  {
    id: "comet",
    name: "Комета",
    roleText: "Следующий шаг",
    interpretation:
      "Сейчас уместен более смелый выход. Карта Кометы поддерживает яркий жест: заявление, запуск, личную историю или контент, который показывает вашу позицию без чрезмерной осторожности.",
    advice:
      "Сделайте пост-заявление с историей. Начните с момента, где вы изменили взгляд на тему, затем покажите вывод и объясните, как он влияет на вашу работу сейчас. В финале дайте читателю повод ответить или поделиться опытом."
  },
  {
    id: "tower",
    name: "Башня",
    roleText: "Главная тема",
    interpretation:
      "Эта карта про опору, экспертность и позиционирование. Сейчас важно показать, на чём стоит ваш подход: опыт, кейсы, принципы, наблюдения, цифры или ясная точка зрения. Аудитории нужно почувствовать вашу устойчивость.",
    advice:
      "Опубликуйте экспертный разбор-кейс. Возьмите одну ситуацию, покажите исходную проблему, объясните ход ваших решений и отдельно выделите выводы. Такой материал укрепляет доверие и помогает аудитории понять вашу ценность."
  },
  {
    id: "mask",
    name: "Маска",
    roleText: "Энергия подачи",
    interpretation:
      "Карта просит снять лишний глянец. Если контент выглядит слишком идеальным, аудитория может не почувствовать живого контакта. Здесь лучше сработает честная интонация, закулисье и признание реального процесса.",
    advice:
      "Покажите закулисье: как вы принимаете решения, где сомневались, что не получилось с первого раза. Завершите не оправданием, а уроком: чему вас это научило и как аудитория может применить этот вывод у себя."
  },
  {
    id: "moon",
    name: "Луна",
    roleText: "Энергия подачи",
    interpretation:
      "Луна указывает на мягкую, интуитивную и эмоциональную подачу. Сейчас не обязательно давить экспертностью. Лучше создать пространство размышления, где аудитория сможет прислушаться к себе.",
    advice:
      "Сделайте вечерний пост-размышление или сторис с вопросом. Выберите одну тонкую тему: страх начать, усталость от контента, сомнение в выборе. Пишите спокойно, образно и завершите вопросом, который приглашает к диалогу."
  },
  {
    id: "bridge",
    name: "Мост",
    roleText: "Следующий шаг",
    interpretation:
      "Карта говорит о соединении. Сейчас важно связать разрозненные форматы, каналы или идеи в единую цепочку, чтобы человек не просто увидел пост, а прошёл по понятному маршруту к следующему действию.",
    advice:
      "Соберите связку из трёх элементов: пост объясняет идею, видео показывает её живо, лид-магнит помогает применить. В каждом элементе оставьте мягкий переход к следующему, чтобы аудитория двигалась без ощущения давления."
  }
];

const prompts = [
  "О чем мне снять следующий Reels?",
  "Какую тему развивать в Telegram?",
  "Какой следующий шаг в моей воронке?",
  "Какой AI-инструмент мне сейчас нужен?"
];

const roles = ["Главная тема", "Энергия подачи", "Следующий шаг"];
const imageByCard = {
  // Stable "real images" hosted on Unsplash CDN (no local assets folder).
  lighthouse: "https://images.unsplash.com/photo-1586712762548-9fa10a195532?auto=format&fit=crop&w=900&h=1350&q=80",
  labyrinth: "https://images.unsplash.com/photo-1583077300486-8e4e2c773422?auto=format&fit=crop&w=900&h=1350&q=80",
  mirror: "https://images.unsplash.com/photo-1512075622870-bcc3993c173e?auto=format&fit=crop&w=900&h=1350&q=80",
  spark: "https://images.unsplash.com/photo-1748362918862-c3be586094bc?auto=format&fit=crop&w=900&h=1350&q=80",
  key: "https://images.unsplash.com/photo-1562701447-8ec5d514a2a1?auto=format&fit=crop&w=900&h=1350&q=80",
  gate: "https://images.unsplash.com/photo-1773402176390-23af909d7ad6?auto=format&fit=crop&w=900&h=1350&q=80",
  river: "https://images.unsplash.com/photo-1723320011923-5829a70b5248?auto=format&fit=crop&w=900&h=1350&q=80",
  comet: "https://images.unsplash.com/photo-1623284577359-a0130bb9a86d?auto=format&fit=crop&w=900&h=1350&q=80",
  tower: "https://images.unsplash.com/photo-1740938895667-d647f44e4835?auto=format&fit=crop&w=900&h=1350&q=80",
  mask: "https://images.unsplash.com/photo-1508557446787-73acf2380f97?auto=format&fit=crop&w=900&h=1350&q=80",
  moon: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&h=1350&q=80",
  bridge: "https://images.unsplash.com/photo-1666962647530-4762af97e062?auto=format&fit=crop&w=900&h=1350&q=80"
};

const screens = {
  intro: document.getElementById("intro-screen"),
  deck: document.getElementById("deck-screen"),
  reveal: document.getElementById("reveal-screen"),
  result: document.getElementById("result-screen")
};

const questionInput = document.getElementById("question-input");
const promptList = document.getElementById("prompt-list");
const deckBtn = document.getElementById("deck-btn");
const cardsGrid = document.getElementById("cards-grid");
const revealTip = document.getElementById("reveal-tip");
const toResultBtn = document.getElementById("to-result-btn");
const resultQuestion = document.getElementById("result-question");
const resultList = document.getElementById("result-list");
const practicalBlock = document.getElementById("practical-block");
const statusNote = document.getElementById("status-note");
const restartBtn = document.getElementById("restart-btn");
const saveBtn = document.getElementById("save-btn");
const particles = document.getElementById("particles");

let selected = [];
let revealedCount = 0;
let nextCardIndex = 0;
let currentScreen = "intro";
let statusMessage = "";

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
  currentScreen = name;
  updateDebugState();
}

function pickThree() {
  const pool = [...cards].sort(() => Math.random() - 0.5);
  return pool.slice(0, 3).map((card, index) => ({ ...card, roleText: roles[index] }));
}

function cardImage(cardId) {
  return imageByCard[cardId] || imageByCard.mirror;
}

function fallbackImage(cardId) {
  // запасной источник, если Unsplash блокируется
  return `https://picsum.photos/seed/${encodeURIComponent(cardId)}/900/1350`;
}

function renderReveal() {
  cardsGrid.innerHTML = "";
  selected.forEach((card, index) => {
    const cardEl = document.createElement("button");
    cardEl.className = `card ${index < revealedCount ? "open" : ""}`;
    const art = cardImage(card.id);
    const fallback = fallbackImage(card.id);
    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back">
          <strong>✶</strong>
        </div>
        <div class="card-face card-front scene-${card.id}">
          <div class="scene">
            <img
              src="${art}"
              alt=""
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
              data-fallback-src="${fallback}"
            />
            <div class="scene-title">${card.name}</div>
          </div>
          <p class="reveal-hint">${index < revealedCount ? card.roleText : "Нажмите, чтобы открыть"}</p>
        </div>
      </div>
    `;
    cardEl.querySelector("img").addEventListener("error", (event) => {
      const image = event.currentTarget;
      image.onerror = null;
      image.src = image.dataset.fallbackSrc;
    });
    cardEl.disabled = !(index === nextCardIndex || index < revealedCount);
    cardEl.onclick = () => {
      if (index === nextCardIndex) {
        revealedCount += 1;
        nextCardIndex += 1;
        renderReveal();
      }
    };
    cardEl.onmousemove = (event) => {
      if (index >= revealedCount) return;
      const rect = cardEl.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      cardEl.querySelector(".card-inner").style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    cardEl.onmouseleave = () => {
      const inner = cardEl.querySelector(".card-inner");
      inner.style.transform = "rotateY(0deg)";
    };
    cardsGrid.appendChild(cardEl);
  });

  if (revealedCount >= 3) {
    revealTip.textContent = "Все карты раскрыты. Нажмите перейти к толкованию.";
    toResultBtn.classList.remove("hidden");
  } else {
    revealTip.textContent = `Откройте карту ${revealedCount + 1} из 3`;
    toResultBtn.classList.add("hidden");
  }
}

function renderResult() {
  const question = questionInput.value.trim() || "без запроса";
  resultQuestion.textContent = `Запрос: "${question}"`;
  resultList.innerHTML = "";
  selected.forEach((card, index) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `
      <div class="mini">${card.roleText}</div>
      <strong>${index + 1}. ${card.name}</strong>
      <p>${card.interpretation}</p>
    `;
    resultList.appendChild(item);
  });
  practicalBlock.innerHTML = `
    <strong>Практические шаги:</strong>
    ${selected
      .map(
        (card, index) => `
          <div class="practice-item">
            <div class="mini">${index + 1}. ${card.roleText} — ${card.name}</div>
            <p>${card.advice}</p>
          </div>
        `
      )
      .join("")}
  `;
  statusMessage = "";
  statusNote.textContent = "";
  updateDebugState();
}

function setStatus(message) {
  statusMessage = message;
  statusNote.textContent = message;
  updateDebugState();
}

function createParticles() {
  for (let i = 0; i < 18; i += 1) {
    const dot = document.createElement("i");
    dot.style.left = `${8 + ((i * 11) % 84)}vw`;
    dot.style.top = `${6 + ((i * 13) % 86)}vh`;
    dot.style.animationDelay = `${i * 0.25}s`;
    dot.style.opacity = `${0.35 + (i % 4) * 0.15}`;
    particles.appendChild(dot);
  }
}

prompts.forEach((prompt) => {
  const btn = document.createElement("button");
  btn.textContent = prompt;
  btn.onclick = () => {
    questionInput.value = prompt;
    beginDeck();
  };
  promptList.appendChild(btn);
});

function beginDeck() {
  if (!questionInput.value.trim()) {
    statusMessage = "Введите вопрос или выберите подсказку";
    updateDebugState();
    questionInput.focus();
    return;
  }
  showScreen("deck");
}

questionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    beginDeck();
  }
});

questionInput.addEventListener("input", () => {
  statusMessage = "";
  updateDebugState();
});

questionInput.focus();

deckBtn.onclick = () => {
  selected = pickThree();
  revealedCount = 0;
  nextCardIndex = 0;
  renderReveal();
  showScreen("reveal");
};

toResultBtn.onclick = () => {
  renderResult();
  showScreen("result");
};

restartBtn.onclick = () => {
  showScreen("intro");
  selected = [];
  revealedCount = 0;
  nextCardIndex = 0;
  questionInput.value = "";
  statusMessage = "";
  updateDebugState();
};

saveBtn.onclick = () => {
  if (!selected.length) return;
  const summary = selected.map((card) => `${card.roleText}: ${card.name}. ${card.advice}`).join("\n");
  if (!navigator.clipboard?.writeText) {
    setStatus("Скопируйте расклад вручную");
    return;
  }
  setStatus("Сохраняю расклад...");
  navigator.clipboard.writeText(`Content Oracle\n${resultQuestion.textContent}\n${summary}`).then(
    () => {
      setStatus("Расклад скопирован");
    },
    () => {
      setStatus("Скопируйте расклад вручную");
    }
  );
};

function renderGameToText() {
  return JSON.stringify({
    screen: currentScreen,
    question: questionInput.value.trim(),
    selected: selected.map((card) => ({ id: card.id, name: card.name, role: card.roleText })),
    revealedCount,
    nextCardIndex,
    canOpenResult: revealedCount >= 3,
    statusMessage
  });
}

function updateDebugState() {
  window.render_game_to_text = renderGameToText;
}

createParticles();
updateDebugState();
