const steps = [
  {
    title: 'Entrar na estação São Lucas',
    line: 'Linha 15-Prata',
    description: 'Entre na estação São Lucas e siga as placas da Linha 15-Prata até embarcar.',
    tip: 'Olhe sempre para o nome da estação e para as placas. Se tiver dúvida, peça ajuda a um funcionário do metrô.',
    checks: ['Entrar na estação', 'Procurar a Linha 15-Prata', 'Esperar o trem com calma'],
    image: 'assets/step-1.svg',
    voice: 'Primeiro passo. Entre na estação São Lucas e siga as placas da Linha 15 Prata.'
  },
  {
    title: 'Ir até Vila Prudente',
    line: 'Linha 15-Prata',
    description: 'Continue no monotrilho até chegar à estação Vila Prudente.',
    tip: 'Fique atento ao nome da estação quando o trem parar. Desça somente em Vila Prudente.',
    checks: ['Entrar no trem', 'Acompanhar as estações', 'Descer em Vila Prudente'],
    image: 'assets/step-2.svg',
    voice: 'Segundo passo. Vá de São Lucas até Vila Prudente e desça nessa estação.'
  },
  {
    title: 'Trocar para a Linha 2-Verde',
    line: 'Integração',
    description: 'Em Vila Prudente, siga a sinalização para a Linha 2-Verde, sentido Vila Madalena.',
    tip: 'Procure as placas verdes. Vá com calma e só siga para o lado escrito Vila Madalena.',
    checks: ['Seguir as placas verdes', 'Confirmar sentido Vila Madalena', 'Entrar no metrô correto'],
    image: 'assets/step-3.svg',
    voice: 'Terceiro passo. Em Vila Prudente, troque para a Linha 2 Verde no sentido Vila Madalena.'
  },
  {
    title: 'Descer em Consolação',
    line: 'Linha 2-Verde',
    description: 'Viaje na Linha 2-Verde e desça na estação Consolação.',
    tip: 'Quando ouvir ou ver o nome Consolação, prepare-se para descer com calma.',
    checks: ['Seguir viagem na Linha 2-Verde', 'Ficar atento ao nome das estações', 'Descer em Consolação'],
    image: 'assets/step-4.svg',
    voice: 'Quarto passo. Siga pela Linha 2 Verde e desça em Consolação.'
  },
  {
    title: 'Andar até Paulista',
    line: 'Caminhada interna',
    description: 'Depois de descer em Consolação, siga a ligação interna a pé até a estação Paulista, da Linha 4-Amarela.',
    tip: 'Basta seguir as placas amarelas da Linha 4. É uma conexão a pé dentro da estação.',
    checks: ['Sair da plataforma', 'Seguir as placas amarelas', 'Chegar à estação Paulista'],
    image: 'assets/step-5.svg',
    voice: 'Quinto passo. Em Consolação, caminhe pela ligação interna até a estação Paulista da Linha 4 Amarela.'
  },
  {
    title: 'Pegar a Linha 4-Amarela até Vila Sônia',
    line: 'Linha 4-Amarela',
    description: 'Na estação Paulista, pegue o metrô sentido Vila Sônia e vá até a estação final.',
    tip: 'Confirme que o sentido é Vila Sônia. Quando chegar, você terminou a missão.',
    checks: ['Entrar na Linha 4-Amarela', 'Confirmar sentido Vila Sônia', 'Descer em Vila Sônia'],
    image: 'assets/step-6.svg',
    voice: 'Último passo. Pegue a Linha 4 Amarela no sentido Vila Sônia e siga até a estação final.'
  }
];

const storageKey = 'metro_missao_premium_progress_v1';
let state = loadState();
let deferredPrompt = null;

const currentTitle = document.getElementById('currentTitle');
const currentDescription = document.getElementById('currentDescription');
const currentTip = document.getElementById('currentTip');
const currentIllustration = document.getElementById('currentIllustration');
const currentLineTag = document.getElementById('currentLineTag');
const stepCounter = document.getElementById('stepCounter');
const miniChecks = document.getElementById('miniChecks');
const mascotText = document.getElementById('mascotText');
const mascotTitle = document.getElementById('mascotTitle');
const progressPercent = document.getElementById('progressPercent');
const progressCircle = document.getElementById('progressCircle');
const quickRoute = document.getElementById('quickRoute');
const netStatus = document.getElementById('netStatus');
const saveStatus = document.getElementById('saveStatus');
const nextBtn = document.getElementById('nextBtn');
const voiceBtn = document.getElementById('voiceBtn');
const expandBtn = document.getElementById('expandBtn');
const resetBtn = document.getElementById('resetBtn');
const timelineSection = document.getElementById('timelineSection');
const stepsList = document.getElementById('stepsList');
const finishCard = document.getElementById('finishCard');
const celebrateVoiceBtn = document.getElementById('celebrateVoiceBtn');
const installBtn = document.getElementById('installBtn');
const stepTemplate = document.getElementById('stepTemplate');

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.done)) return defaultState();
    return {
      done: steps.map((_, i) => Boolean(parsed.done[i])),
      expanded: false
    };
  } catch {
    return defaultState();
  }
}

function defaultState() {
  return {
    done: steps.map(() => false),
    expanded: false
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify({ done: state.done }));
  saveStatus.textContent = 'Progresso salvo';
  saveStatus.classList.add('success');
}

function getCurrentIndex() {
  const firstUndone = state.done.findIndex(v => !v);
  return firstUndone === -1 ? steps.length - 1 : firstUndone;
}

function completedCount() {
  return state.done.filter(Boolean).length;
}

function isFinished() {
  return completedCount() === steps.length;
}

function render() {
  renderStatus();
  renderProgress();
  renderQuickRoute();
  renderCurrent();
  renderTimeline();
  finishCard.classList.toggle('hidden', !isFinished());
  nextBtn.textContent = isFinished() ? 'Tudo concluído' : 'Próximo passo';
  nextBtn.disabled = isFinished();
  nextBtn.style.opacity = isFinished() ? '0.6' : '1';
}

function renderStatus() {
  const online = navigator.onLine;
  netStatus.textContent = online ? 'Online e pronto para offline' : 'Modo offline ativo';
  netStatus.className = `status-chip ${online ? 'success' : 'warning'}`;
}

function renderProgress() {
  const done = completedCount();
  const percent = Math.round((done / steps.length) * 100);
  progressPercent.textContent = `${percent}%`;
  const circumference = 314;
  const offset = circumference - (circumference * percent) / 100;
  progressCircle.style.strokeDashoffset = String(offset);
}

function renderQuickRoute() {
  quickRoute.innerHTML = '';
  const activeIndex = getCurrentIndex();
  const labels = ['São Lucas', 'Vila Prudente', 'Linha Verde', 'Consolação', 'Paulista', 'Vila Sônia'];

  labels.forEach((label, i) => {
    const node = document.createElement('div');
    node.className = 'route-node';
    if (state.done[i]) node.classList.add('done');
    if (!state.done[i] && i === activeIndex) node.classList.add('active');

    const bullet = document.createElement('div');
    bullet.className = 'route-bullet';
    bullet.textContent = state.done[i] ? '✓' : String(i + 1);

    const text = document.createElement('div');
    text.className = 'route-label';
    text.textContent = label;

    node.append(bullet, text);
    quickRoute.appendChild(node);
  });
}

function renderCurrent() {
  const index = getCurrentIndex();
  const step = steps[index];

  currentTitle.textContent = isFinished() ? 'Você chegou em Vila Sônia' : step.title;
  currentDescription.textContent = isFinished()
    ? 'Parabéns! Seu trajeto terminou. Agora é só sair com calma da estação.'
    : step.description;
  currentTip.textContent = isFinished()
    ? 'Se precisar, olhe as placas de saída e siga com calma.'
    : step.tip;
  currentIllustration.src = isFinished() ? 'assets/trophy.svg' : step.image;
  currentLineTag.textContent = isFinished() ? 'Destino final' : step.line;
  stepCounter.textContent = isFinished()
    ? 'Etapas concluídas'
    : `Etapa ${index + 1} de ${steps.length}`;

  miniChecks.innerHTML = '';
  const checks = isFinished()
    ? ['Viagem concluída', 'Chegada em Vila Sônia', 'Agora é só seguir a saída']
    : step.checks;

  checks.forEach(item => {
    const div = document.createElement('div');
    div.className = 'mini-check';
    div.innerHTML = `<span class="mini-dot">✓</span><span>${item}</span>`;
    miniChecks.appendChild(div);
  });

  if (isFinished()) {
    mascotTitle.textContent = 'Boa! Você conseguiu.';
    mascotText.textContent = 'Missão concluída com sucesso. Você chegou ao destino.';
  } else {
    const messages = [
      'Tudo certo até aqui. Vamos passo a passo.',
      'Muito bem! Continue olhando as placas.',
      'Você está indo super bem. Falta pouco.',
      'Agora atenção para a troca de linha.',
      'Siga as placas amarelas com calma.',
      'Última parte. Já já você chega.'
    ];
    mascotTitle.textContent = 'Metroquinho te acompanha';
    mascotText.textContent = messages[index] || 'Continue com calma e atenção.';
  }
}

function renderTimeline() {
  timelineSection.classList.toggle('hidden', !state.expanded);
  stepsList.innerHTML = '';

  steps.forEach((step, index) => {
    const fragment = stepTemplate.content.cloneNode(true);
    const item = fragment.querySelector('.step-item');
    const main = fragment.querySelector('.step-main');
    const badge = fragment.querySelector('.step-badge');
    const thumb = fragment.querySelector('.step-thumb');
    const title = fragment.querySelector('h3');
    const line = fragment.querySelector('.step-line');
    const desc = fragment.querySelector('.step-copy p');
    const stateTag = fragment.querySelector('.step-state');
    const stepTip = fragment.querySelector('.step-tip');
    const doneBtn = fragment.querySelector('.mini-done-btn');

    badge.textContent = index + 1;
    thumb.src = step.image;
    thumb.alt = `Ilustração da etapa ${index + 1}`;
    title.textContent = step.title;
    line.textContent = step.line;
    desc.textContent = step.description;
    stepTip.innerHTML = `<strong>Dica:</strong> ${step.tip}`;

    if (state.done[index]) {
      item.classList.add('done');
      stateTag.textContent = 'Feita';
      doneBtn.textContent = 'Etapa concluída';
    }

    main.addEventListener('click', () => {
      item.classList.toggle('open');
    });

    doneBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      markStep(index);
    });

    stepsList.appendChild(fragment);
  });
}

function markStep(index) {
  state.done[index] = true;
  saveState();
  render();
  if (isFinished()) {
    speak('Parabéns. Você concluiu a missão e chegou a Vila Sônia.');
  }
}

nextBtn.addEventListener('click', () => {
  const index = getCurrentIndex();
  if (!isFinished()) {
    markStep(index);
  }
});

voiceBtn.addEventListener('click', () => {
  const index = getCurrentIndex();
  const text = isFinished()
    ? 'Parabéns. Você chegou ao destino final. Agora é só sair com calma da estação Vila Sônia.'
    : steps[index].voice;
  speak(text);
});

celebrateVoiceBtn?.addEventListener('click', () => {
  speak('Parabéns! Missão cumprida. Você chegou em Vila Sônia.');
});

expandBtn.addEventListener('click', () => {
  state.expanded = !state.expanded;
  expandBtn.textContent = state.expanded ? 'Esconder etapas' : 'Ver todas as etapas';
  renderTimeline();
  if (state.expanded) {
    timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

resetBtn.addEventListener('click', () => {
  state = defaultState();
  saveState();
  render();
  speak('Tudo bem. A missão foi reiniciada. Vamos começar de novo.');
});

function speak(text) {
  if (!('speechSynthesis' in window)) {
    mascotText.textContent = text;
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;
  utterance.pitch = 1.08;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

window.addEventListener('online', renderStatus);
window.addEventListener('offline', renderStatus);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(console.error);
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.classList.remove('hidden');
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});

render();
