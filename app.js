const STORAGE_KEY = 'missao-metro-progress-v2';

const steps = [
  {
    id: 1,
    tag: 'Linha 15-Prata',
    title: 'Entrar em São Lucas',
    description: 'Entre na estação São Lucas e procure a Linha 15-Prata. Agora a missão é ir até Vila Prudente.',
    hint: 'Dica ninja: veja se aparece “Vila Prudente” nas placas e painéis.',
    color: 'silver',
    image: 'assets/step-1-sao-lucas.svg',
    imageAlt: 'Ilustração de uma estação com trem prata chegando à plataforma.',
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
    hint: 'Procure setas e o nome “Linha 2-Verde”. Não tenha pressa.',
    color: 'green',
    image: 'assets/step-2-transfer.svg',
    imageAlt: 'Ilustração de corredor de transferência entre plataformas com placas verdes.',
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
    hint: 'Antes de entrar, confira duas vezes o sentido. Sem pressa = mais segurança.',
    color: 'green',
    image: 'assets/step-3-green-train.svg',
    imageAlt: 'Ilustração de trem verde com placa indicando sentido Vila Madalena.',
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
    description: 'Quando chegar em Consolação, saia do trem com calma. Agora vem a parte da caminhada interna.',
    hint: 'Olhe o nome da estação nas placas da plataforma antes de sair andando.',
    color: 'green',
    image: 'assets/step-4-consolacao.svg',
    imageAlt: 'Ilustração de plataforma com placa grande escrito Consolação.',
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
    hint: 'Se vir “Paulista / Linha 4-Amarela”, você está no caminho certo.',
    color: 'walk',
    image: 'assets/step-5-walk.svg',
    imageAlt: 'Ilustração de caminhada em corredor de estação com setas e placas.',
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
    hint: 'A palavra mais importante aqui é: Vila Sônia.',
    color: 'yellow',
    image: 'assets/step-6-yellow-train.svg',
    imageAlt: 'Ilustração de trem amarelo com placa de direção para Vila Sônia.',
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
    description: 'Pronto! Agora é só seguir até a sua estação final na Linha 4-Amarela, sempre no sentido Vila Sônia.',
    hint: 'Você conseguiu! Se precisar, mostre este site para pedir ajuda.',
    color: 'yellow',
    image: 'assets/step-7-destination.svg',
    imageAlt: 'Ilustração lúdica de chegada com trem, estrelas e placa de destino.',
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
    flashCelebration();
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
    el.className = kind === 'arrow' ? 'arrow-pill' : `station-pill ${kind}`;
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
    const hint = node.querySelector('.step-hint');
    const miniMap = node.querySelector('.mini-map');
    const image = node.querySelector('.step-visual');

    number.textContent = step.id;
    number.classList.add(step.color);
    tag.textContent = step.tag;
    title.textContent = step.title;
    description.textContent = step.description;
    hint.textContent = step.hint;
    image.src = step.image;
    image.alt = step.imageAlt;

    renderMiniMap(miniMap, step.map);

    const completed = isCompleted(step.id);
    if (completed) {
      node.classList.add('completed');
      status.textContent = 'Feito';
      doneBtn.textContent = 'Desmarcar';
    }

    if (allExpanded || index === 0 || (!completed && index === state.completed.length)) {
      node.classList.add('open');
      mainBtn.setAttribute('aria-expanded', 'true');
    }

    mainBtn.addEventListener('click', () => {
      const open = node.classList.toggle('open');
      mainBtn.setAttribute('aria-expanded', String(open));
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

function flashCelebration() {
  document.body.classList.remove('party');
  requestAnimationFrame(() => {
    document.body.classList.add('party');
    setTimeout(() => document.body.classList.remove('party'), 1050);
  });
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
