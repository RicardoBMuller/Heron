const STORAGE_KEY = 'missao-metro-progress-v1';

const steps = [
  {
    id: 1,
    tag: 'Linha 15-Prata',
    title: 'Entrar em São Lucas',
    description: 'Entre na estação São Lucas e procure a Linha 15-Prata. O objetivo agora é seguir até Vila Prudente.',
    color: 'silver',
    map: [
      ['São Lucas', 'silver'],
      ['→', 'arrow'],
      ['Vila Prudente', 'silver']
    ]
  },
  {
    id: 2,
    tag: 'Transferência',
    title: 'Trocar para a Linha 2-Verde',
    description: 'Ao chegar em Vila Prudente, siga as placas de transferência e vá para a Linha 2-Verde.',
    color: 'green',
    map: [
      ['Vila Prudente', 'silver'],
      ['→', 'arrow'],
      ['Linha 2-Verde', 'green']
    ]
  },
  {
    id: 3,
    tag: 'Linha 2-Verde',
    title: 'Pegar o metrô sentido Vila Madalena',
    description: 'Confirme nas placas e no letreiro do trem: o sentido precisa ser Vila Madalena. Entre no trem certo.',
    color: 'green',
    map: [
      ['Vila Prudente', 'green'],
      ['→', 'arrow'],
      ['Consolação', 'green']
    ]
  },
  {
    id: 4,
    tag: 'Desembarque',
    title: 'Descer em Consolação',
    description: 'Quando chegar em Consolação, saia do trem e siga com calma. Agora vem a parte da caminhada interna.',
    color: 'green',
    map: [
      ['Linha 2-Verde', 'green'],
      ['→', 'arrow'],
      ['Consolação', 'green']
    ]
  },
  {
    id: 5,
    tag: 'Caminhada interna',
    title: 'Ir a pé para a estação Paulista',
    description: 'Siga as placas dentro da estação até a ligação com Paulista, que é a estação da Linha 4-Amarela.',
    color: 'walk',
    map: [
      ['Consolação', 'green'],
      ['→', 'arrow'],
      ['Paulista', 'walk']
    ]
  },
  {
    id: 6,
    tag: 'Linha 4-Amarela',
    title: 'Pegar o metrô sentido Vila Sônia',
    description: 'Na estação Paulista, entre na Linha 4-Amarela. Confira se o sentido é Vila Sônia antes de embarcar.',
    color: 'yellow',
    map: [
      ['Paulista', 'yellow'],
      ['→', 'arrow'],
      ['Vila Sônia', 'yellow']
    ]
  },
  {
    id: 7,
    tag: 'Chegada',
    title: 'Fim da missão',
    description: 'Pronto! Agora é só descer na estação final desejada da Linha 4-Amarela, seguindo o sentido Vila Sônia.',
    color: 'yellow',
    map: [
      ['Linha 4-Amarela', 'yellow'],
      ['→', 'arrow'],
      ['Destino', 'yellow']
    ]
  }
];

const missionSteps = document.getElementById('missionSteps');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resetBtn = document.getElementById('resetBtn');
const expandAllBtn = document.getElementById('expandAllBtn');
const connectionBadge = document.getElementById('connectionBadge');
const template = document.getElementById('stepTemplate');

let state = loadState();
let allExpanded = false;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.completed)) {
      return saved;
    }
  } catch (error) {
    console.warn('Não foi possível ler o progresso salvo.', error);
  }
  return { completed: [] };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isCompleted(id) {
  return state.completed.includes(id);
}

function toggleCompleted(id) {
  if (isCompleted(id)) {
    state.completed = state.completed.filter(item => item !== id);
    showToast('Etapa desmarcada.');
  } else {
    state.completed.push(id);
    showToast('Boa! Etapa marcada como feita.');
  }
  saveState();
  render();
}

function resetProgress() {
  state = { completed: [] };
  saveState();
  render();
  showToast('Progresso reiniciado.');
}

function renderMiniMap(container, map) {
  container.innerHTML = '';
  map.forEach(([label, kind]) => {
    const el = document.createElement('span');
    el.textContent = label;
    if (kind === 'arrow') {
      el.className = 'arrow-pill';
    } else {
      el.className = `station-pill ${kind}`;
    }
    container.appendChild(el);
  });
}

function render() {
  missionSteps.innerHTML = '';

  steps.forEach((step, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const mainBtn = node.querySelector('.step-main');
    const doneBtn = node.querySelector('.done-btn');
    const number = node.querySelector('.step-number');
    const tag = node.querySelector('.step-tag');
    const title = node.querySelector('.step-title');
    const status = node.querySelector('.step-status');
    const description = node.querySelector('.step-description');
    const miniMap = node.querySelector('.mini-map');

    number.textContent = step.id;
    number.classList.add(step.color);
    tag.textContent = step.tag;
    title.textContent = step.title;
    description.textContent = step.description;

    renderMiniMap(miniMap, step.map);

    const completed = isCompleted(step.id);
    if (completed) {
      node.classList.add('completed');
      status.textContent = 'Feito';
      doneBtn.textContent = 'Desmarcar';
    }

    if (allExpanded || index === 0 || (!completed && index === state.completed.length)) {
      node.classList.add('open');
    }

    mainBtn.addEventListener('click', () => {
      node.classList.toggle('open');
    });

    doneBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleCompleted(step.id);
    });

    missionSteps.appendChild(node);
  });

  const pct = Math.round((state.completed.length / steps.length) * 100);
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${pct}%`;
}

function showToast(message) {
  const oldToast = document.querySelector('.toast');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

function updateConnectionStatus() {
  const online = navigator.onLine;
  connectionBadge.textContent = online ? 'Site carregado e pronto' : 'Usando offline';
  connectionBadge.style.background = online ? 'rgba(34, 197, 94, 0.18)' : 'rgba(250, 204, 21, 0.18)';
  connectionBadge.style.borderColor = online ? 'rgba(34, 197, 94, 0.4)' : 'rgba(250, 204, 21, 0.4)';
  connectionBadge.style.color = online ? '#dcfce7' : '#fef3c7';
}

expandAllBtn.addEventListener('click', () => {
  allExpanded = !allExpanded;
  expandAllBtn.textContent = allExpanded ? 'Fechar tudo' : 'Abrir tudo';
  render();
});

resetBtn.addEventListener('click', resetProgress);
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./sw.js');
      console.log('Service worker ativo.');
    } catch (error) {
      console.error('Falha ao registrar service worker.', error);
    }
  });
}

updateConnectionStatus();
render();
