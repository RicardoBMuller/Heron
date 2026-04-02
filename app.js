
const APP_VERSION = '1.0.0';
const STORAGE_KEYS = {
  route: 'metroquinho.route',
  progress: 'metroquinho.progress',
  filter: 'metroquinho.filter'
};

const LINES = [
  { id:'l15', label:'Linha 15 - Prata', type:'monorail', color:'#9ea2a2', stations:['Vila Prudente','Oratório','São Lucas','Camilo Haddad','Vila Tolstói','Vila União','Jardim Planalto','Sapopemba','Fazenda da Juta','São Mateus','Jardim Colonial'] },
  { id:'l2', label:'Linha 2 - Verde', type:'metro', color:'#1ea54b', stations:['Vila Prudente','Tamanduateí','Sacomã','Alto do Ipiranga','Santos-Imigrantes','Chácara Klabin','Ana Rosa','Paraíso','Brigadeiro','Trianon-Masp','Consolação','Clínicas','Sumaré','Vila Madalena'] },
  { id:'l4', label:'Linha 4 - Amarela', type:'metro', color:'#f2c400', stations:['Luz','República','Higienópolis-Mackenzie','Paulista','Oscar Freire','Fradique Coutinho','Faria Lima','Pinheiros','Butantã','São Paulo-Morumbi','Vila Sônia'] },
  { id:'l1', label:'Linha 1 - Azul', type:'metro', color:'#1f63ff', stations:['Tucuruvi','Parada Inglesa','Jardim São Paulo-Ayrton Senna','Santana','Carandiru','Portuguesa-Tietê','Armênia','Tiradentes','Luz','São Bento','Sé','Japão-Liberdade','São Joaquim','Vergueiro','Paraíso','Ana Rosa','Vila Mariana','Santa Cruz','Praça da Árvore','Saúde','São Judas','Conceição','Jabaquara'] },
  { id:'l3', label:'Linha 3 - Vermelha', type:'metro', color:'#ff4343', stations:['Palmeiras-Barra Funda','Marechal Deodoro','Santa Cecília','República','Anhangabaú','Sé','Pedro II','Brás','Bresser-Mooca','Belém','Tatuapé','Carrão-Assaí Atacadista','Penha','Vila Matilde','Guilhermina-Esperança','Patriarca-Vila Ré','Artur Alvim','Corinthians-Itaquera'] },
  { id:'l5', label:'Linha 5 - Lilás', type:'metro', color:'#8b3faf', stations:['Capão Redondo','Campo Limpo','Vila das Belezas','Giovanni Gronchi','Santo Amaro','Largo Treze','Adolfo Pinheiro','Alto da Boa Vista','Borba Gato','Brooklin','Campo Belo','Eucaliptos','Moema','AACD-Servidor','Hospital São Paulo','Santa Cruz','Chácara Klabin'] },

  { id:'c7', label:'Linha 7 - Rubi', type:'train', color:'#9a9a9a', stations:['Jundiaí','Várzea Paulista','Campo Limpo Paulista','Botujuru','Francisco Morato','Baltazar Fidélis','Franco da Rocha','Caieiras','Perus','Vila Aurora','Jaraguá','Vila Clarice','Pirituba','Piqueri','Lapa','Água Branca','Palmeiras-Barra Funda','Júlio Prestes'] },
  { id:'c8', label:'Linha 8 - Diamante', type:'train', color:'#9fa7b0', stations:['Amador Bueno','Santa Rita','Itapevi','Engenheiro Cardoso','Sagrado Coração','Jandira','Jardim Silveira','Jardim Belval','Barueri','Antônio João','Santa Terezinha','Carapicuíba','General Miguel Costa','Quitaúna','Comandante Sampaio','Osasco','Presidente Altino','Ceasa','Villa-Lobos-Jaguaré','Cidade Universitária','Pinheiros','Hebraica-Rebouças','Cidade Jardim','Vila Olímpia','Berrini','Morumbi','Granja Julieta','João Dias','Santo Amaro','Socorro','Jurubatuba','Autódromo','Primavera-Interlagos','Grajaú','Mendes-Vila Natal'] },
  { id:'c9', label:'Linha 9 - Esmeralda', type:'train', color:'#2abf6d', stations:['Osasco','Presidente Altino','Ceasa','Villa-Lobos-Jaguaré','Cidade Universitária','Pinheiros','Hebraica-Rebouças','Cidade Jardim','Vila Olímpia','Berrini','Morumbi','Granja Julieta','João Dias','Santo Amaro','Socorro','Jurubatuba','Autódromo','Primavera-Interlagos','Grajaú','Mendes-Vila Natal'] },
  { id:'c10', label:'Linha 10 - Turquesa', type:'train', color:'#2fb4c8', stations:['Brás','Juventus-Mooca','Ipiranga','Tamanduateí','São Caetano do Sul-Prefeito Walter Braido','Utinga','Prefeito Saladino','Santo André','Capuava','Mauá','Guapituba','Ribeirão Pires','Rio Grande da Serra'] },
  { id:'c11', label:'Linha 11 - Coral', type:'train', color:'#ff7a29', stations:['Luz','Brás','Tatuapé','Corinthians-Itaquera','Dom Bosco','José Bonifácio','Guaianases','Antonio Gianetti Neto','Ferraz de Vasconcelos','Poá','Calmon Viana','Suzano','Jundiapeba','Braz Cubas','Mogi das Cruzes','Estudantes'] },
  { id:'c12', label:'Linha 12 - Safira', type:'train', color:'#0da1d8', stations:['Brás','Tatuapé','Engenheiro Goulart','USP Leste','Comendador Ermelino','São Miguel Paulista','Jardim Helena-Vila Mara','Itaim Paulista','Jardim Romano','Engenheiro Manoel Feio','Itaquaquecetuba','Aracaré','Calmon Viana'] },
  { id:'c13', label:'Linha 13 - Jade', type:'train', color:'#00a978', stations:['Palmeiras-Barra Funda','Luz','Brás','Tatuapé','Engenheiro Goulart','Guarulhos-Cecap','Aeroporto-Guarulhos'] }
];

const WALK_LINKS = [
  ['Consolação','Paulista', { kind:'walk', label:'Caminhada de integração', time:'Siga a sinalização até Paulista (Linha 4 - Amarela).' }],
  ['Luz','Júlio Prestes', { kind:'walk', label:'Caminhada curta', time:'Passagem entre as estações.' }]
];

const ICONS = {
  start: '🏁',
  move: '🚆',
  change: '🔁',
  walk: '🚶',
  arrive: '🎉'
};

const dom = {
  originInput: document.getElementById('originInput'),
  destinationInput: document.getElementById('destinationInput'),
  stationsList: document.getElementById('stationsList'),
  routeBtn: document.getElementById('routeBtn'),
  clearBtn: document.getElementById('clearBtn'),
  swapBtn: document.getElementById('swapBtn'),
  installBtn: document.getElementById('installBtn'),
  timeline: document.getElementById('timeline'),
  routeSection: document.getElementById('routeSection'),
  summarySection: document.getElementById('summarySection'),
  emptyState: document.getElementById('emptyState'),
  summaryOrigin: document.getElementById('summaryOrigin'),
  summaryDestination: document.getElementById('summaryDestination'),
  summarySteps: document.getElementById('summarySteps'),
  progressPercent: document.getElementById('progressPercent'),
  progressText: document.getElementById('progressText'),
  ringFill: document.getElementById('ringFill'),
  speakCurrentBtn: document.getElementById('speakCurrentBtn'),
  resetProgressBtn: document.getElementById('resetProgressBtn'),
  mascotMessage: document.getElementById('mascotMessage'),
  networkBadge: document.getElementById('networkBadge'),
  savedRouteSection: document.getElementById('savedRouteSection'),
  savedRoutePreview: document.getElementById('savedRoutePreview'),
  reloadSavedBtn: document.getElementById('reloadSavedBtn'),
  summaryDestination: document.getElementById('summaryDestination')
};

let deferredPrompt = null;
let currentFilter = localStorage.getItem(STORAGE_KEYS.filter) || 'all';
let currentRoute = null;
let currentProgress = [];

function normalize(text) {
  return (text || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

function uniqueStations() {
  const map = new Map();
  for (const line of LINES) {
    for (const station of line.stations) {
      if (!map.has(station)) map.set(station, { name: station, types: new Set(), lines: [] });
      map.get(station).types.add(line.type);
      map.get(station).lines.push(line.label);
    }
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
}

const STATIONS = uniqueStations();

function stationTypeLabel(types) {
  if (types.has('metro') && types.has('train') && types.has('monorail')) return 'Metrô • Trem • Monotrilho';
  if (types.has('metro') && types.has('train')) return 'Metrô • Trem';
  if (types.has('metro') && types.has('monorail')) return 'Metrô • Monotrilho';
  if (types.has('train') && types.has('monorail')) return 'Trem • Monotrilho';
  if (types.has('metro')) return 'Metrô';
  if (types.has('train')) return 'Trem';
  return 'Monotrilho';
}

function populateStationList() {
  const filterTypes = currentFilter === 'all'
    ? null
    : currentFilter === 'metro'
      ? ['metro']
      : currentFilter === 'train'
        ? ['train']
        : ['monorail'];

  dom.stationsList.innerHTML = '';
  STATIONS
    .filter(item => !filterTypes || filterTypes.some(type => item.types.has(type)))
    .forEach(item => {
      const option = document.createElement('option');
      option.value = item.name;
      option.label = `${item.name} — ${stationTypeLabel(item.types)}`;
      dom.stationsList.appendChild(option);
    });

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.classList.toggle('chip--active', btn.dataset.filter === currentFilter);
  });
}

function setFilter(value) {
  currentFilter = value;
  localStorage.setItem(STORAGE_KEYS.filter, value);
  populateStationList();
}

function buildGraph() {
  const graph = new Map();
  const stationLines = new Map();

  const ensureNode = (name) => {
    if (!graph.has(name)) graph.set(name, []);
    if (!stationLines.has(name)) stationLines.set(name, []);
  };

  for (const line of LINES) {
    line.stations.forEach(ensureNode);
    line.stations.forEach(name => stationLines.get(name).push(line));
    for (let i = 0; i < line.stations.length - 1; i++) {
      const a = line.stations[i];
      const b = line.stations[i + 1];
      graph.get(a).push({ to: b, weight: 1, line });
      graph.get(b).push({ to: a, weight: 1, line });
    }
  }

  WALK_LINKS.forEach(([a, b, meta]) => {
    ensureNode(a); ensureNode(b);
    graph.get(a).push({ to: b, weight: 1.1, walk: meta });
    graph.get(b).push({ to: a, weight: 1.1, walk: meta });
  });

  return { graph, stationLines };
}

const NETWORK = buildGraph();

function resolveStation(input) {
  const raw = input.trim();
  if (!raw) return null;
  const exact = STATIONS.find(item => normalize(item.name) === normalize(raw));
  if (exact) return exact.name;
  const partial = STATIONS.find(item => normalize(item.name).includes(normalize(raw)));
  return partial ? partial.name : null;
}

function shortestPath(start, end) {
  const { graph } = NETWORK;
  const distances = new Map();
  const previous = new Map();
  const visited = new Set();

  for (const key of graph.keys()) distances.set(key, Infinity);
  distances.set(start, 0);

  while (visited.size < graph.size) {
    let current = null;
    let bestDistance = Infinity;

    for (const [node, distance] of distances.entries()) {
      if (!visited.has(node) && distance < bestDistance) {
        bestDistance = distance;
        current = node;
      }
    }

    if (!current || current === end) break;
    visited.add(current);

    for (const edge of graph.get(current)) {
      const candidate = distances.get(current) + edge.weight;
      if (candidate < distances.get(edge.to)) {
        distances.set(edge.to, candidate);
        previous.set(edge.to, { node: current, edge });
      }
    }
  }

  if (!previous.has(end) && start !== end) return null;

  const path = [];
  let cursor = end;
  while (cursor !== start) {
    const step = previous.get(cursor);
    path.push({ from: step.node, to: cursor, edge: step.edge });
    cursor = step.node;
  }
  path.reverse();
  return path;
}

function lineFromEdge(edge) {
  if (edge.walk) return null;
  return edge.line;
}

function toRouteSteps(start, end, path) {
  if (!path) return null;
  const steps = [];
  steps.push({
    id: crypto.randomUUID(),
    icon: ICONS.start,
    title: `Comece em ${start}`,
    description: 'Confirme a estação de origem e siga as placas da plataforma correta.',
    voice: `Comece em ${start}. Confirme o nome da estação e siga as placas da plataforma correta.`
  });

  let currentLine = null;
  let segmentStart = start;
  let previousStation = start;

  const flushSegment = (lastStation) => {
    if (!currentLine) return;
    const numberOfStops = countStopsOnLine(currentLine, segmentStart, lastStation);
    steps.push({
      id: crypto.randomUUID(),
      icon: ICONS.move,
      title: `Pegue a ${currentLine.label}`,
      description: `Entre no trem na estação ${segmentStart} e siga até ${lastStation}. ${numberOfStops} parada${numberOfStops > 1 ? 's' : ''}.`,
      voice: `Pegue a ${currentLine.label}. Entre em ${segmentStart} e siga até ${lastStation}. São ${numberOfStops} paradas.`
    });
  };

  for (const item of path) {
    if (item.edge.walk) {
      flushSegment(previousStation);
      currentLine = null;
      steps.push({
        id: crypto.randomUUID(),
        icon: ICONS.walk,
        title: `${item.edge.walk.label}`,
        description: `Saia em ${item.from} e caminhe até ${item.to}. ${item.edge.walk.time}`,
        voice: `Saia em ${item.from} e caminhe até ${item.to}. ${item.edge.walk.time}`
      });
      segmentStart = item.to;
      previousStation = item.to;
      continue;
    }

    const edgeLine = lineFromEdge(item.edge);
    if (!currentLine) {
      currentLine = edgeLine;
      segmentStart = item.from;
    } else if (currentLine.id !== edgeLine.id) {
      flushSegment(item.from);
      steps.push({
        id: crypto.randomUUID(),
        icon: ICONS.change,
        title: `Troque de linha em ${item.from}`,
        description: `Siga as placas e embarque na ${edgeLine.label}.`,
        voice: `Troque de linha em ${item.from}. Siga as placas e embarque na ${edgeLine.label}.`
      });
      currentLine = edgeLine;
      segmentStart = item.from;
    }

    previousStation = item.to;
  }

  flushSegment(end);

  steps.push({
    id: crypto.randomUUID(),
    icon: ICONS.arrive,
    title: `Chegou em ${end}!`,
    description: 'Missão concluída. Agora é só sair com calma e seguir a sinalização da estação.',
    voice: `Você chegou em ${end}. Missão concluída!`
  });

  return steps;
}

function countStopsOnLine(line, from, to) {
  const a = line.stations.indexOf(from);
  const b = line.stations.indexOf(to);
  return Math.abs(a - b);
}

function saveRoute(route) {
  localStorage.setItem(STORAGE_KEYS.route, JSON.stringify(route));
}

function loadRoute() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.route) || 'null');
  } catch {
    return null;
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '[]');
  } catch {
    return [];
  }
}

function clearAll() {
  localStorage.removeItem(STORAGE_KEYS.route);
  localStorage.removeItem(STORAGE_KEYS.progress);
  currentRoute = null;
  currentProgress = [];
  dom.originInput.value = '';
  dom.destinationInput.value = '';
  dom.routeSection.classList.add('hidden');
  dom.summarySection.classList.add('hidden');
  dom.emptyState.classList.remove('hidden');
  dom.savedRouteSection.classList.add('hidden');
  dom.mascotMessage.textContent = 'Tudo limpo. Escolha a origem e o destino para montar uma nova rota.';
  showToast('Rota apagada.');
}

function renderSavedRoutePreview(route) {
  dom.savedRoutePreview.innerHTML = `<strong>${route.origin}</strong> → <strong>${route.destination}</strong><br>${route.steps.length} etapa(s) salva(s) para usar offline.`;
  dom.savedRouteSection.classList.remove('hidden');
}

function renderRoute(route) {
  currentRoute = route;
  currentProgress = loadProgress();
  if (!Array.isArray(currentProgress) || currentProgress.length !== route.steps.length) {
    currentProgress = route.steps.map(() => false);
    saveProgress(currentProgress);
  }

  dom.summaryOrigin.textContent = route.origin;
  dom.summaryDestination.textContent = route.destination;
  dom.summarySteps.textContent = String(route.steps.length);
  dom.routeSection.classList.remove('hidden');
  dom.summarySection.classList.remove('hidden');
  dom.emptyState.classList.add('hidden');

  dom.timeline.innerHTML = '';
  route.steps.forEach((step, index) => {
    const item = document.createElement('button');
    item.className = 'timeline-item';
    item.type = 'button';
    item.innerHTML = `
      <div class="timeline-step">${step.icon}</div>
      <div class="timeline-copy">
        <strong>${step.title}</strong>
        <small>${step.description}</small>
      </div>
      <div class="timeline-check">${currentProgress[index] ? '✓' : '○'}</div>
    `;
    if (currentProgress[index]) item.classList.add('is-done');
    if (!currentProgress[index] && index === currentProgress.findIndex(v => !v)) item.classList.add('is-current');
    item.addEventListener('click', () => {
      currentProgress[index] = !currentProgress[index];
      saveProgress(currentProgress);
      renderRoute(currentRoute);
      if (currentProgress[index]) speak(step.voice, false);
    });
    dom.timeline.appendChild(item);
  });

  const done = currentProgress.filter(Boolean).length;
  const total = route.steps.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  dom.progressPercent.textContent = `${percent}%`;
  const circumference = 314;
  dom.ringFill.style.strokeDashoffset = String(circumference - (circumference * percent / 100));
  const nextIndex = currentProgress.findIndex(v => !v);
  dom.progressText.textContent = nextIndex === -1
    ? 'Tudo concluído. Muito bem!'
    : `Próxima etapa: ${route.steps[nextIndex].title}`;
  dom.mascotMessage.textContent = nextIndex === -1
    ? 'Parabéns! Você terminou a rota.'
    : `Agora faça esta parte: ${route.steps[nextIndex].title}`;
}

function buildRouteAndRender() {
  const start = resolveStation(dom.originInput.value);
  const end = resolveStation(dom.destinationInput.value);

  if (!start || !end) {
    showToast('Digite estações válidas.');
    dom.mascotMessage.textContent = 'Não encontrei uma das estações. Tente escolher usando a lista.';
    return;
  }

  if (start === end) {
    showToast('Origem e destino são iguais.');
    dom.mascotMessage.textContent = 'A origem e o destino precisam ser diferentes.';
    return;
  }

  const path = shortestPath(start, end);
  if (!path) {
    showToast('Não encontrei uma rota nesta versão offline.');
    dom.mascotMessage.textContent = 'Não consegui montar a rota offline. Tente outra combinação.';
    return;
  }

  const route = {
    version: APP_VERSION,
    origin: start,
    destination: end,
    generatedAt: new Date().toISOString(),
    steps: toRouteSteps(start, end, path)
  };

  currentProgress = route.steps.map(() => false);
  saveRoute(route);
  saveProgress(currentProgress);
  renderSavedRoutePreview(route);
  renderRoute(route);
  showToast('Rota pronta e salva offline.');
}

function speak(text, announceToast = true) {
  if (!('speechSynthesis' in window)) {
    if (announceToast) showToast('A leitura por voz não é compatível neste aparelho.');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function currentStepVoice() {
  if (!currentRoute) return null;
  const nextIndex = currentProgress.findIndex(v => !v);
  const index = nextIndex === -1 ? currentRoute.steps.length - 1 : nextIndex;
  return currentRoute.steps[index]?.voice || null;
}

function updateNetworkBadge() {
  const online = navigator.onLine;
  dom.networkBadge.textContent = online ? 'Online' : 'Offline';
  dom.networkBadge.style.background = online ? '#e8fff4' : '#fff3e8';
  dom.networkBadge.style.color = online ? '#157a55' : '#9a5c09';
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function initInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    dom.installBtn.classList.remove('hidden');
  });

  dom.installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
      showToast('No iPhone, use Compartilhar > Adicionar à Tela de Início.');
      return;
    }
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      showToast('Metroquinho instalado.');
      dom.installBtn.classList.add('hidden');
    }
    deferredPrompt = null;
  });

  window.addEventListener('appinstalled', () => {
    showToast('Metroquinho foi instalado com sucesso.');
    dom.installBtn.classList.add('hidden');
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

function restoreSavedRoute() {
  const saved = loadRoute();
  if (saved && saved.steps?.length) {
    renderSavedRoutePreview(saved);
  }
}

function boot() {
  populateStationList();
  updateNetworkBadge();
  initInstallPrompt();
  registerServiceWorker();
  restoreSavedRoute();

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  dom.routeBtn.addEventListener('click', buildRouteAndRender);
  dom.clearBtn.addEventListener('click', clearAll);
  dom.swapBtn.addEventListener('click', () => {
    const temp = dom.originInput.value;
    dom.originInput.value = dom.destinationInput.value;
    dom.destinationInput.value = temp;
  });

  dom.reloadSavedBtn.addEventListener('click', () => {
    const saved = loadRoute();
    if (!saved) return;
    dom.originInput.value = saved.origin;
    dom.destinationInput.value = saved.destination;
    renderRoute(saved);
    showToast('Rota salva carregada.');
  });

  dom.speakCurrentBtn.addEventListener('click', () => {
    const text = currentStepVoice();
    if (!text) {
      showToast('Monte uma rota primeiro.');
      return;
    }
    speak(text);
  });

  dom.resetProgressBtn.addEventListener('click', () => {
    if (!currentRoute) return;
    currentProgress = currentRoute.steps.map(() => false);
    saveProgress(currentProgress);
    renderRoute(currentRoute);
    showToast('Rota reiniciada.');
  });

  window.addEventListener('online', updateNetworkBadge);
  window.addEventListener('offline', updateNetworkBadge);

  const saved = loadRoute();
  if (saved && saved.steps?.length) {
    dom.originInput.value = saved.origin;
    dom.destinationInput.value = saved.destination;
  }
}

boot();
