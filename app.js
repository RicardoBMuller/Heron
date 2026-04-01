const STORAGE_KEY = 'metro-missao-v2';
const THEME_KEY = 'metro-missao-theme';

const steps = [
  {
    id: 1,
    kicker: 'Etapa 1',
    title: 'Entrar em São Lucas',
    summary: 'Comece na estação São Lucas da Linha Prata.',
    details: 'Entre na estação São Lucas e pegue o monotrilho no sentido Vila Prudente. Confira o nome da estação nas placas.',
    line: 'Linha Prata',
    lineColor: '#9CA3AF',
    type: 'Embarcar',
    icon: 'assets/step-station.svg',
    mapLabel: 'São Lucas'
  },
  {
    id: 2,
    kicker: 'Etapa 2',
    title: 'Ir até Vila Prudente',
    summary: 'Siga no monotrilho até a estação Vila Prudente.',
    details: 'Permaneça no trem até chegar em Vila Prudente. Quando descer, procure as placas da Linha Verde.',
    line: 'Linha Prata',
    lineColor: '#9CA3AF',
    type: 'Viajar',
    icon: 'assets/step-train-prata.svg',
    mapLabel: 'Vila Prudente'
  },
  {
    id: 3,
    kicker: 'Etapa 3',
    title: 'Pegar a Linha Verde',
    summary: 'Entre no metrô sentido Vila Madalena.',
    details: 'Na integração, siga para a Linha Verde e embarque no metrô com destino a Vila Madalena. Depois siga até Consolação.',
    line: 'Linha Verde',
    lineColor: '#16A34A',
    type: 'Trocar de linha',
    icon: 'assets/step-train-green.svg',
    mapLabel: 'Linha Verde'
  },
  {
    id: 4,
    kicker: 'Etapa 4',
    title: 'Descer em Consolação',
    summary: 'Saia do trem e caminhe até Paulista.',
    details: 'Ao chegar em Consolação, siga as placas de transferência para Paulista, que faz ligação com a Linha Amarela.',
    line: 'Transferência',
    lineColor: '#F59E0B',
    type: 'Caminhar',
    icon: 'assets/step-walk.svg',
    mapLabel: 'Paulista'
  },
  {
    id: 5,
    kicker: 'Etapa 5',
    title: 'Pegar a Linha Amarela',
    summary: 'Entre no sentido Vila Sônia e vá até o destino.',
    details: 'Em Paulista, pegue a Linha Amarela no sentido Vila Sônia. Siga até a estação Vila Sônia e pronto: missão concluída!',
    line: 'Linha Amarela',
    lineColor: '#EAB308',
    type: 'Destino final',
    icon: 'assets/step-train-yellow.svg',
    mapLabel: 'Vila Sônia'
  }
];

const state = {
  open: new Set(),
  done: new Set(loadProgress()),
};

const stepsContainer = document.getElementById('steps');
const template = document.getElementById('stepTemplate');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const doneCount = document.getElementById('doneCount');
const starsBox = document.getElementById('starsBox');
const lineVisual = document.getElementById('lineVisual');
const networkPill = document.getElementById('networkPill');
const themeToggle = document.getElementById('themeToggle');

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.done]));
}

function renderMap() {
  lineVisual.innerHTML = '';
  steps.forEach((step, index) => {
    const wrap = document.createElement('div');
    const isDone = state.done.has(step.id);
    wrap.className = `line-stop ${isDone ? 'done' : ''}`;

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Focar na etapa ${index + 1}`);
    button.innerHTML = `<div class="line-dot" style="background:${step.lineColor}"></div><span>${step.mapLabel}</span>`;
    button.addEventListener('click', () => {
      const card = document.querySelector(`[data-step-id="${step.id}"]`);
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    wrap.appendChild(button);
    lineVisual.appendChild(wrap);
  });
}

function renderSteps() {
  stepsContainer.innerHTML = '';
  steps.forEach((step) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector('.step-card');
    const mainBtn = fragment.querySelector('.step-main');
    const details = fragment.querySelector('.step-details');
    const icon = fragment.querySelector('.step-icon');
    const kicker = fragment.querySelector('.step-kicker');
    const title = fragment.querySelector('h3');
    const summary = fragment.querySelector('.step-summary');
    const detailText = fragment.querySelector('.step-detail-text');
    const chipLine = fragment.querySelector('.chip-line');
    const chipType = fragment.querySelector('.chip-type');
    const markBtn = fragment.querySelector('.mark-btn');

    const isOpen = state.open.has(step.id);
    const isDone = state.done.has(step.id);

    card.dataset.stepId = step.id;
    icon.src = step.icon;
    icon.alt = `Ilustração da etapa ${step.id}`;
    kicker.textContent = step.kicker;
    title.textContent = step.title;
    summary.textContent = step.summary;
    detailText.textContent = step.details;
    chipLine.textContent = step.line;
    chipLine.style.background = step.lineColor;
    chipType.textContent = step.type;
    markBtn.textContent = isDone ? 'Concluído! 🎉' : 'Marcar como concluído';

    if (isOpen) {
      card.classList.add('open');
      details.hidden = false;
    }
    if (isDone) card.classList.add('done');

    mainBtn.addEventListener('click', () => {
      if (state.open.has(step.id)) {
        state.open.delete(step.id);
      } else {
        state.open.add(step.id);
      }
      renderSteps();
    });

    markBtn.addEventListener('click', () => {
      state.done.add(step.id);
      state.open.add(step.id);
      saveProgress();
      updateProgress();
      renderSteps();
      renderMap();
      celebrate();
    });

    stepsContainer.appendChild(fragment);
  });
}

function updateProgress() {
  const total = steps.length;
  const done = state.done.size;
  const percentage = (done / total) * 100;
  progressFill.style.width = `${percentage}%`;
  doneCount.textContent = String(done);
  starsBox.textContent = `⭐ ${done}`;

  if (done === 0) progressText.textContent = 'Começando a aventura';
  else if (done < total) progressText.textContent = 'Muito bem! Continue assim';
  else progressText.textContent = 'Missão concluída! Você chegou 🎉';
}

function celebrate() {
  if (navigator.vibrate) navigator.vibrate(40);
}

function resetAll() {
  state.done.clear();
  state.open.clear();
  saveProgress();
  renderSteps();
  renderMap();
  updateProgress();
}

function openAll() {
  steps.forEach(step => state.open.add(step.id));
  renderSteps();
}

function updateNetwork() {
  const online = navigator.onLine;
  networkPill.textContent = online ? 'Pronto para offline ✓' : 'Usando offline ✓';
  networkPill.className = `pill pill-status ${online ? 'online' : 'offline'}`;
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark') document.body.classList.add('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
  themeToggle.textContent = dark ? '☀️' : '🌙';
});

document.getElementById('resetBtn').addEventListener('click', resetAll);
document.getElementById('openAllBtn').addEventListener('click', openAll);
window.addEventListener('online', updateNetwork);
window.addEventListener('offline', updateNetwork);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(console.error);
  });
}

initTheme();
updateNetwork();
renderMap();
renderSteps();
updateProgress();
