const LINES = [
  {
    id: 'L1',
    kind: 'metro',
    name: 'Linha 1-Azul',
    short: '1-Azul',
    color: '#005CA8',
    icon: 'assets/train.svg',
    travelMinutes: 2,
    stations: ['Tucuruvi','Parada Inglesa','Jardim São Paulo-Ayrton Senna','Santana','Carandiru','Portuguesa-Tietê','Armênia','Tiradentes','Luz','São Bento','Sé','Japão-Liberdade','São Joaquim','Vergueiro','Paraíso','Ana Rosa','Vila Mariana','Santa Cruz','Praça da Árvore','Saúde-Ultrafarma','São Judas','Conceição','Jabaquara']
  },
  {
    id: 'L2',
    kind: 'metro',
    name: 'Linha 2-Verde',
    short: '2-Verde',
    color: '#009739',
    icon: 'assets/train.svg',
    travelMinutes: 2,
    stations: ['Vila Madalena','Santuário Nossa Senhora de Fátima-Sumaré','Clínicas','Consolação','Trianon-Masp','Brigadeiro','Paraíso','Ana Rosa','Chácara Klabin','Santos-Imigrantes','Alto do Ipiranga','Sacomã','Tamanduateí','Vila Prudente']
  },
  {
    id: 'L3',
    kind: 'metro',
    name: 'Linha 3-Vermelha',
    short: '3-Vermelha',
    color: '#EE1C25',
    icon: 'assets/train.svg',
    travelMinutes: 2,
    stations: ['Palmeiras-Barra Funda','Marechal Deodoro','Santa Cecília','República','Anhangabaú','Sé','Pedro II','Brás','Bresser-Mooca','Belém','Tatuapé','Carrão-Assaí Atacadista','Penha-Lojas Besni','Vila Matilde','Guilhermina-Esperança','Patriarca-Vila Ré','Artur Alvim','Corinthians-Itaquera']
  },
  {
    id: 'L4',
    kind: 'metro',
    name: 'Linha 4-Amarela',
    short: '4-Amarela',
    color: '#FFD100',
    icon: 'assets/train.svg',
    travelMinutes: 2,
    stations: ['Luz','República','Higienópolis-Mackenzie','Paulista','Oscar Freire','Fradique Coutinho','Faria Lima','Pinheiros','Butantã','São Paulo-Morumbi','Vila Sônia']
  },
  {
    id: 'L5',
    kind: 'metro',
    name: 'Linha 5-Lilás',
    short: '5-Lilás',
    color: '#A05EB5',
    icon: 'assets/train.svg',
    travelMinutes: 2,
    stations: ['Capão Redondo','Campo Limpo','Vila das Belezas','Giovanni Gronchi','Santo Amaro','Largo Treze','Adolfo Pinheiro','Alto da Boa Vista','Borba Gato','Brooklin','Campo Belo','Eucaliptos','Moema','AACD-Servidor','Hospital São Paulo','Santa Cruz','Chácara Klabin']
  },
  {
    id: 'L7',
    kind: 'trem',
    name: 'Linha 7-Rubi',
    short: '7-Rubi',
    color: '#CA016B',
    icon: 'assets/train.svg',
    travelMinutes: 3,
    stations: ['Jundiaí','Várzea Paulista','Campo Limpo Paulista','Botujuru','Francisco Morato','Baltazar Fidélis','Franco da Rocha','Caieiras','Perus','Vila Aurora','Jaraguá','Vila Clarice','Pirituba','Piqueri','Lapa','Água Branca','Palmeiras-Barra Funda','Luz']
  },
  {
    id: 'L8',
    kind: 'trem',
    name: 'Linha 8-Diamante',
    short: '8-Diamante',
    color: '#97A098',
    icon: 'assets/train.svg',
    travelMinutes: 3,
    stations: ['Júlio Prestes','Palmeiras-Barra Funda','Lapa','Domingos de Moraes','Imperatriz Leopoldina','Presidente Altino','Osasco','Comandante Sampaio','Quitaúna','General Miguel Costa','Carapicuíba','Santa Terezinha','Antônio João','Barueri','Jardim Belval','Jardim Silveira','Jardim Paulista','Itapevi','Santa Rita','Amador Bueno']
  },
  {
    id: 'L9',
    kind: 'trem',
    name: 'Linha 9-Esmeralda',
    short: '9-Esmeralda',
    color: '#00A88E',
    icon: 'assets/train.svg',
    travelMinutes: 3,
    stations: ['Osasco','Presidente Altino','Ceasa','Villa-Lobos-Jaguaré','Cidade Universitária','Pinheiros','Hebraica-Rebouças','Cidade Jardim','Vila Olímpia','Berrini','Morumbi','Granja Julieta','João Dias','Santo Amaro','Socorro','Jurubatuba-Senac','Autódromo','Primavera-Interlagos','Grajaú','Bruno Covas-Mendes-Vila Natal']
  },
  {
    id: 'L10',
    kind: 'trem',
    name: 'Linha 10-Turquesa',
    short: '10-Turquesa',
    color: '#00A7CE',
    icon: 'assets/train.svg',
    travelMinutes: 3,
    stations: ['Rio Grande da Serra','Ribeirão Pires','Guapituba','Mauá','Capuava','Prefeito Saladino','Santo André','Utinga','São Caetano do Sul-Prefeito Walter Braido','Tamanduateí','Juventus-Mooca','Ipiranga','Brás','Luz']
  },
  {
    id: 'L11',
    kind: 'trem',
    name: 'Linha 11-Coral',
    short: '11-Coral',
    color: '#F26522',
    icon: 'assets/train.svg',
    travelMinutes: 3,
    stations: ['Estudantes','Mogi das Cruzes','Braz Cubas','Jundiapeba','César de Souza','Suzano','Poá','Calmon Viana','Engenheiro Manoel Feio','Itaquaquecetuba','Aracaré','Antônio Gianetti Neto','Ferraz de Vasconcelos','Guaianases','José Bonifácio','Dom Bosco','Corinthians-Itaquera','Tatuapé','Brás','Luz','Palmeiras-Barra Funda']
  },
  {
    id: 'L12',
    kind: 'trem',
    name: 'Linha 12-Safira',
    short: '12-Safira',
    color: '#133C8B',
    icon: 'assets/train.svg',
    travelMinutes: 3,
    stations: ['Brás','Tatuapé','Engenheiro Goulart','USP Leste','Comendador Ermelino','São Miguel Paulista','Jardim Helena-Vila Mara','Itaim Paulista','Jardim Romano','Engenheiro Manoel Feio','Itaquaquecetuba','Aracaré','Calmon Viana']
  },
  {
    id: 'L13',
    kind: 'trem',
    name: 'Linha 13-Jade',
    short: '13-Jade',
    color: '#01A4E6',
    icon: 'assets/train.svg',
    travelMinutes: 4,
    stations: ['Engenheiro Goulart','Guarulhos-Cecap','Aeroporto-Guarulhos']
  },
  {
    id: 'L15',
    kind: 'monotrilho',
    name: 'Linha 15-Prata',
    short: '15-Prata',
    color: '#B1B3B3',
    icon: 'assets/train.svg',
    travelMinutes: 2,
    stations: ['Vila Prudente','Oratório','São Lucas','Camilo Haddad','Vila Tolstói','Vila União','Jardim Planalto','Sapopemba','Fazenda da Juta','São Mateus','Jardim Colonial']
  }
];

const TRANSFERS = [
  ['Paraíso','L1','L2',4,'Troque de plataforma em Paraíso.'],
  ['Ana Rosa','L1','L2',4,'Troque de plataforma em Ana Rosa.'],
  ['Sé','L1','L3',4,'Troque de linha dentro da estação Sé.'],
  ['Luz','L1','L4',4,'Troque de linha dentro da estação Luz.'],
  ['Luz','L1','L7',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L1','L10',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L1','L11',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L4','L7',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L4','L10',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L4','L11',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L7','L10',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L7','L11',4,'Siga a sinalização dentro da estação Luz.'],
  ['Luz','L10','L11',4,'Siga a sinalização dentro da estação Luz.'],
  ['República','L3','L4',4,'Troque de linha dentro da estação República.'],
  ['Brás','L3','L10',4,'Troque de linha dentro da estação Brás.'],
  ['Brás','L3','L11',4,'Troque de linha dentro da estação Brás.'],
  ['Brás','L3','L12',4,'Troque de linha dentro da estação Brás.'],
  ['Brás','L10','L11',4,'Troque de linha dentro da estação Brás.'],
  ['Brás','L10','L12',4,'Troque de linha dentro da estação Brás.'],
  ['Brás','L11','L12',4,'Troque de linha dentro da estação Brás.'],
  ['Tatuapé','L3','L11',4,'Troque de linha em Tatuapé.'],
  ['Tatuapé','L3','L12',4,'Troque de linha em Tatuapé.'],
  ['Tatuapé','L11','L12',4,'Troque de linha em Tatuapé.'],
  ['Corinthians-Itaquera','L3','L11',4,'Troque de linha em Corinthians-Itaquera.'],
  ['Tamanduateí','L2','L10',4,'Troque de linha em Tamanduateí.'],
  ['Vila Prudente','L2','L15',4,'Troque de linha em Vila Prudente.'],
  ['Santa Cruz','L1','L5',4,'Troque de linha em Santa Cruz.'],
  ['Chácara Klabin','L2','L5',4,'Troque de linha em Chácara Klabin.'],
  ['Pinheiros','L4','L9',5,'Troque de linha em Pinheiros.'],
  ['Santo Amaro','L5','L9',5,'Troque de linha em Santo Amaro.'],
  ['Osasco','L8','L9',5,'Troque de linha em Osasco.'],
  ['Presidente Altino','L8','L9',4,'Troque de linha em Presidente Altino.'],
  ['Lapa','L7','L8',5,'Troque de linha em Lapa.'],
  ['Palmeiras-Barra Funda','L3','L7',5,'Troque de linha em Palmeiras-Barra Funda.'],
  ['Palmeiras-Barra Funda','L3','L8',5,'Troque de linha em Palmeiras-Barra Funda.'],
  ['Palmeiras-Barra Funda','L3','L11',5,'Troque de linha em Palmeiras-Barra Funda.'],
  ['Palmeiras-Barra Funda','L7','L8',4,'Troque de linha em Palmeiras-Barra Funda.'],
  ['Palmeiras-Barra Funda','L7','L11',4,'Troque de linha em Palmeiras-Barra Funda.'],
  ['Palmeiras-Barra Funda','L8','L11',4,'Troque de linha em Palmeiras-Barra Funda.'],
  ['Calmon Viana','L11','L12',4,'Troque de linha em Calmon Viana.'],
  ['Engenheiro Manoel Feio','L11','L12',4,'Troque de linha em Engenheiro Manoel Feio.'],
  ['Itaquaquecetuba','L11','L12',4,'Troque de linha em Itaquaquecetuba.'],
  ['Aracaré','L11','L12',4,'Troque de linha em Aracaré.'],
  ['Engenheiro Goulart','L12','L13',5,'Troque de linha em Engenheiro Goulart.']
];

const SPECIAL_WALKS = [
  {
    fromStation: 'Consolação',
    fromLine: 'L2',
    toStation: 'Paulista',
    toLine: 'L4',
    minutes: 7,
    text: 'Na estação Consolação, siga as placas para a estação Paulista e faça a caminhada interna até a Linha 4-Amarela.'
  },
  {
    fromStation: 'Paulista',
    fromLine: 'L4',
    toStation: 'Consolação',
    toLine: 'L2',
    minutes: 7,
    text: 'Na estação Paulista, siga as placas para a estação Consolação e faça a caminhada interna até a Linha 2-Verde.'
  }
];

const APP_STATE_KEY = 'metroquinho-route-v2';
const RECENT_KEY = 'metroquinho-recent-v1';
const KINDS = {
  metro: 'Metrô',
  trem: 'Trem',
  monotrilho: 'Monotrilho'
};

const lineById = Object.fromEntries(LINES.map(line => [line.id, line]));
const stationCatalog = buildStationCatalog();
const graph = buildGraph();

const dom = {
  originValue: document.getElementById('originValue'),
  originMeta: document.getElementById('originMeta'),
  destinationValue: document.getElementById('destinationValue'),
  destinationMeta: document.getElementById('destinationMeta'),
  originField: document.getElementById('originField'),
  destinationField: document.getElementById('destinationField'),
  findRouteBtn: document.getElementById('findRouteBtn'),
  resetRouteBtn: document.getElementById('resetRouteBtn'),
  swapBtn: document.getElementById('swapBtn'),
  stationModal: document.getElementById('stationModal'),
  modalEyebrow: document.getElementById('modalEyebrow'),
  modalTitle: document.getElementById('modalTitle'),
  stationSearchInput: document.getElementById('stationSearchInput'),
  stationList: document.getElementById('stationList'),
  recentStations: document.getElementById('recentStations'),
  summaryCard: document.getElementById('summaryCard'),
  emptyState: document.getElementById('emptyState'),
  routeTitle: document.getElementById('routeTitle'),
  etaValue: document.getElementById('etaValue'),
  linesValue: document.getElementById('linesValue'),
  changesValue: document.getElementById('changesValue'),
  routeTimeline: document.getElementById('routeTimeline'),
  template: document.getElementById('timelineCardTemplate'),
  ringProgress: document.getElementById('ringProgress'),
  progressPercent: document.getElementById('progressPercent'),
  speakRouteBtn: document.getElementById('speakRouteBtn'),
  speakCurrentBtn: document.getElementById('speakCurrentBtn'),
  networkBadge: document.getElementById('networkBadge'),
  saveBadge: document.getElementById('saveBadge')
};

const state = {
  origin: null,
  destination: null,
  modalTarget: 'origin',
  filter: 'all',
  route: null,
  doneStepIds: [],
  recentStations: loadRecentStations()
};

function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

function buildStationCatalog() {
  const map = new Map();

  for (const line of LINES) {
    line.stations.forEach((station, index) => {
      if (!map.has(station)) {
        map.set(station, { name: station, kinds: new Set(), lines: [], normalized: normalize(station) });
      }
      const entry = map.get(station);
      entry.kinds.add(line.kind);
      entry.lines.push({ lineId: line.id, lineName: line.name, lineShort: line.short, lineColor: line.color, index });
    });
  }

  return [...map.values()]
    .map(item => ({ ...item, kinds: [...item.kinds] }))
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
}

function buildGraph() {
  const nodes = new Map();

  function ensureNode(id) {
    if (!nodes.has(id)) nodes.set(id, []);
    return nodes.get(id);
  }

  function connect(a, b, weight, meta) {
    ensureNode(a).push({ to: b, weight, meta });
    ensureNode(b).push({ to: a, weight, meta });
  }

  for (const line of LINES) {
    line.stations.forEach((station, index) => {
      const nodeId = `${line.id}:${station}`;
      ensureNode(nodeId);

      if (index > 0) {
        const prev = `${line.id}:${line.stations[index - 1]}`;
        connect(prev, nodeId, line.travelMinutes, {
          type: 'ride',
          lineId: line.id,
          lineName: line.name,
          stationA: line.stations[index - 1],
          stationB: station
        });
      }
    });
  }

  for (const [station, lineA, lineB, minutes, text] of TRANSFERS) {
    connect(`${lineA}:${station}`, `${lineB}:${station}`, minutes, {
      type: 'transfer',
      station,
      minutes,
      text
    });
  }

  for (const item of SPECIAL_WALKS) {
    connect(`${item.fromLine}:${item.fromStation}`, `${item.toLine}:${item.toStation}`, item.minutes, {
      type: 'walk',
      fromStation: item.fromStation,
      toStation: item.toStation,
      minutes: item.minutes,
      text: item.text
    });
  }

  return nodes;
}

function getStationDetails(stationName) {
  return stationCatalog.find(item => item.name === stationName) || null;
}

function setStation(target, stationName) {
  const details = getStationDetails(stationName);
  state[target] = details ? details.name : null;
  updateStationFields();
  saveAppState();
}

function updateStationFields() {
  if (state.origin) {
    const info = getStationDetails(state.origin);
    dom.originValue.textContent = info.name;
    dom.originMeta.textContent = info.lines.map(line => line.lineShort).join(' • ');
  } else {
    dom.originValue.textContent = 'Escolher estação';
    dom.originMeta.textContent = 'Metrô, trem ou monotrilho';
  }

  if (state.destination) {
    const info = getStationDetails(state.destination);
    dom.destinationValue.textContent = info.name;
    dom.destinationMeta.textContent = info.lines.map(line => line.lineShort).join(' • ');
  } else {
    dom.destinationValue.textContent = 'Escolher estação';
    dom.destinationMeta.textContent = 'Metrô, trem ou monotrilho';
  }
}

function openModal(target) {
  state.modalTarget = target;
  dom.modalEyebrow.textContent = target === 'origin' ? 'Origem' : 'Destino';
  dom.modalTitle.textContent = target === 'origin' ? 'Escolher estação de origem' : 'Escolher estação de destino';
  dom.stationModal.hidden = false;
  dom.stationSearchInput.value = '';
  state.filter = 'all';
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderStationList();
  requestAnimationFrame(() => dom.stationSearchInput.focus());
}

function closeModal() {
  dom.stationModal.hidden = true;
}

function renderStationList() {
  const query = normalize(dom.stationSearchInput.value.trim());
  const items = stationCatalog.filter(item => {
    const kindOk = state.filter === 'all' || item.kinds.includes(state.filter);
    const queryOk = !query || item.normalized.includes(query);
    return kindOk && queryOk;
  });

  if (!items.length) {
    dom.stationList.innerHTML = '<div class="empty-search">Nenhuma estação encontrada.</div>';
    return;
  }

  dom.stationList.innerHTML = '';
  const frag = document.createDocumentFragment();

  for (const item of items) {
    const card = document.createElement('div');
    card.className = 'station-option';
    const kinds = [...new Set(item.kinds.map(kind => KINDS[kind]))].join(' • ');
    const lines = item.lines.map(line => line.lineShort).join(' • ');

    card.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <small>${kinds}</small>
        <small>${lines}</small>
      </div>
      <button class="pick-btn" type="button">Escolher</button>
    `;

    card.querySelector('.pick-btn').addEventListener('click', () => {
      setStation(state.modalTarget, item.name);
      pushRecentStation(item.name);
      if (state.origin && state.destination) {
        findAndRenderRoute();
      }
      closeModal();
    });

    frag.appendChild(card);
  }

  dom.stationList.appendChild(frag);
}

function pushRecentStation(station) {
  state.recentStations = [station, ...state.recentStations.filter(item => item !== station)].slice(0, 8);
  localStorage.setItem(RECENT_KEY, JSON.stringify(state.recentStations));
  renderRecentStations();
}

function loadRecentStations() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
  } catch {
    return [];
  }
}

function renderRecentStations() {
  dom.recentStations.innerHTML = '';
  if (!state.recentStations.length) {
    const placeholder = document.createElement('span');
    placeholder.className = 'chip';
    placeholder.textContent = 'São Lucas';
    placeholder.addEventListener('click', () => {
      const target = !state.origin ? 'origin' : 'destination';
      setStation(target, 'São Lucas');
      if (state.origin && state.destination) findAndRenderRoute();
    });
    dom.recentStations.appendChild(placeholder);
    return;
  }

  state.recentStations.forEach(station => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.textContent = station;
    btn.addEventListener('click', () => {
      const target = !state.origin ? 'origin' : 'destination';
      setStation(target, station);
      if (state.origin && state.destination) findAndRenderRoute();
    });
    dom.recentStations.appendChild(btn);
  });
}

function candidateNodesForStation(stationName) {
  const station = getStationDetails(stationName);
  if (!station) return [];
  return station.lines.map(line => `${line.lineId}:${station.name}`);
}

function shortestPath(startStation, endStation) {
  const starts = candidateNodesForStation(startStation);
  const ends = new Set(candidateNodesForStation(endStation));
  if (!starts.length || !ends.size) return null;

  const dist = new Map();
  const prev = new Map();
  const visited = new Set();
  const queue = [];

  function push(node, score) {
    queue.push({ node, score });
    queue.sort((a, b) => a.score - b.score);
  }

  starts.forEach(node => {
    dist.set(node, 0);
    push(node, 0);
  });

  while (queue.length) {
    const current = queue.shift();
    if (!current || visited.has(current.node)) continue;
    visited.add(current.node);

    if (ends.has(current.node)) {
      const path = [];
      let cursor = current.node;
      while (cursor) {
        path.unshift(cursor);
        cursor = prev.get(cursor)?.node;
      }
      return {
        nodes: path,
        cost: current.score
      };
    }

    const edges = graph.get(current.node) || [];
    for (const edge of edges) {
      const nextScore = current.score + edge.weight;
      if (nextScore < (dist.get(edge.to) ?? Infinity)) {
        dist.set(edge.to, nextScore);
        prev.set(edge.to, { node: current.node, edge });
        push(edge.to, nextScore);
      }
    }
  }

  return null;
}

function breakdownPath(pathResult) {
  if (!pathResult) return null;
  const nodes = pathResult.nodes;
  const steps = [];
  const edges = [];
  let totalMinutes = 0;

  for (let i = 1; i < nodes.length; i += 1) {
    const from = nodes[i - 1];
    const to = nodes[i];
    const edge = (graph.get(from) || []).find(item => item.to === to);
    if (edge) {
      edges.push({ from, to, edge });
      totalMinutes += edge.weight;
    }
  }

  let currentRide = null;
  let stepIndex = 1;
  const allStationsVisited = [stationFromNode(nodes[0]).station];

  function closeCurrentRide() {
    if (!currentRide) return;
    const line = lineById[currentRide.lineId];
    const startIndex = line.stations.indexOf(currentRide.fromStation);
    const endIndex = line.stations.indexOf(currentRide.toStation);
    const direction = startIndex <= endIndex ? line.stations[line.stations.length - 1] : line.stations[0];
    steps.push({
      id: `step-${stepIndex++}`,
      type: 'ride',
      lineId: line.id,
      lineName: line.name,
      color: line.color,
      icon: 'assets/train.svg',
      title: `Pegue a ${line.name} sentido ${direction}`,
      text: `Entre em ${currentRide.fromStation} e siga até ${currentRide.toStation}.`,
      stations: currentRide.stations.slice(),
      minutes: currentRide.minutes,
      summaryLabel: line.short
    });
    currentRide = null;
  }

  for (const item of edges) {
    const parsedFrom = stationFromNode(item.from);
    const parsedTo = stationFromNode(item.to);

    if (item.edge.meta.type === 'ride') {
      allStationsVisited.push(parsedTo.station);

      if (!currentRide || currentRide.lineId !== item.edge.meta.lineId) {
        closeCurrentRide();
        currentRide = {
          lineId: item.edge.meta.lineId,
          fromStation: parsedFrom.station,
          toStation: parsedTo.station,
          stations: [parsedFrom.station, parsedTo.station],
          minutes: item.edge.weight
        };
      } else {
        currentRide.toStation = parsedTo.station;
        currentRide.stations.push(parsedTo.station);
        currentRide.minutes += item.edge.weight;
      }
    } else {
      closeCurrentRide();
      if (item.edge.meta.type === 'transfer') {
        steps.push({
          id: `step-${stepIndex++}`,
          type: 'transfer',
          lineId: parsedTo.lineId,
          lineName: lineById[parsedTo.lineId].name,
          color: lineById[parsedTo.lineId].color,
          icon: 'assets/station.svg',
          title: `Troca na estação ${item.edge.meta.station}`,
          text: item.edge.meta.text,
          stations: [item.edge.meta.station],
          minutes: item.edge.weight,
          summaryLabel: 'Troca'
        });
      }
      if (item.edge.meta.type === 'walk') {
        steps.push({
          id: `step-${stepIndex++}`,
          type: 'walk',
          lineId: parsedTo.lineId,
          lineName: lineById[parsedTo.lineId].name,
          color: lineById[parsedTo.lineId].color,
          icon: 'assets/walk.svg',
          title: `Caminhe de ${item.edge.meta.fromStation} para ${item.edge.meta.toStation}`,
          text: item.edge.meta.text,
          stations: [item.edge.meta.fromStation, item.edge.meta.toStation],
          minutes: item.edge.weight,
          summaryLabel: 'Caminhada'
        });
      }
    }
  }

  closeCurrentRide();

  const uniqueLines = [...new Set(steps.filter(step => step.type === 'ride').map(step => step.lineName))];
  const rideSteps = steps.filter(step => step.type === 'ride');
  if (rideSteps.length) {
    const lastRide = rideSteps[rideSteps.length - 1];
    steps.push({
      id: `step-${stepIndex++}`,
      type: 'finish',
      lineId: lastRide.lineId,
      lineName: lastRide.lineName,
      color: '#0fcb8a',
      icon: 'assets/finish.svg',
      title: `Chegou em ${lastRide.stations[lastRide.stations.length - 1]} 🎉`,
      text: 'Missão concluída. Agora é só sair da estação com calma.',
      stations: [lastRide.stations[lastRide.stations.length - 1]],
      minutes: 0,
      summaryLabel: 'Destino'
    });
  }

  return {
    totalMinutes,
    steps,
    linesUsed: uniqueLines,
    changes: steps.filter(step => step.type === 'transfer' || step.type === 'walk').length
  };
}

function stationFromNode(nodeId) {
  const [lineId, ...stationParts] = nodeId.split(':');
  return { lineId, station: stationParts.join(':') };
}

function findAndRenderRoute() {
  if (!state.origin || !state.destination) {
    showToast('Escolha a origem e o destino.');
    return;
  }
  if (state.origin === state.destination) {
    showToast('A origem e o destino são iguais.');
    return;
  }

  const shortest = shortestPath(state.origin, state.destination);
  const route = breakdownPath(shortest);

  if (!route) {
    showToast('Não encontrei um caminho com as estações cadastradas.');
    return;
  }

  state.route = route;
  state.doneStepIds = [];
  saveAppState();
  renderRoute();
  speakText(`Rota pronta. ${buildSpeakRouteText(route.steps, true)}`);
}

function renderRoute() {
  const route = state.route;
  if (!route) {
    dom.summaryCard.hidden = true;
    dom.emptyState.hidden = false;
    return;
  }

  dom.emptyState.hidden = true;
  dom.summaryCard.hidden = false;
  dom.routeTitle.textContent = `${state.origin} → ${state.destination}`;
  dom.etaValue.textContent = `${Math.max(1, Math.round(route.totalMinutes))} min`;
  dom.linesValue.textContent = `${route.linesUsed.length}`;
  dom.changesValue.textContent = `${route.changes}`;
  renderProgress();
  renderTimeline();
}

function renderProgress() {
  if (!state.route) return;
  const actionable = state.route.steps.filter(step => step.type !== 'finish');
  const finished = actionable.filter(step => state.doneStepIds.includes(step.id)).length;
  const percent = actionable.length ? Math.round((finished / actionable.length) * 100) : 100;
  const circumference = 2 * Math.PI * 32;
  const offset = circumference - ((percent / 100) * circumference);
  dom.ringProgress.style.strokeDasharray = `${circumference}`;
  dom.ringProgress.style.strokeDashoffset = `${offset}`;
  dom.progressPercent.textContent = `${percent}%`;
}

function renderTimeline() {
  dom.routeTimeline.innerHTML = '';
  if (!state.route) return;

  const actionableIds = state.route.steps.filter(step => step.type !== 'finish').map(step => step.id);
  const nextPendingId = actionableIds.find(id => !state.doneStepIds.includes(id));

  state.route.steps.forEach((step, index) => {
    const node = dom.template.content.firstElementChild.cloneNode(true);
    const lineTag = node.querySelector('.line-tag');
    const badge = node.querySelector('.step-badge');
    const title = node.querySelector('.timeline-title');
    const text = node.querySelector('.timeline-text');
    const stations = node.querySelector('.stations-strip');
    const icon = node.querySelector('.timeline-icon');
    const stepBtn = node.querySelector('.step-btn');
    const voiceBtn = node.querySelector('.voice-btn');

    icon.src = step.icon;
    icon.alt = step.title;
    title.textContent = step.title;
    text.textContent = step.text;
    badge.textContent = `Etapa ${index + 1}`;

    lineTag.textContent = step.summaryLabel;
    lineTag.style.background = step.type === 'walk' ? '#2bcdb6' : step.type === 'finish' ? '#0fcb8a' : step.color;

    step.stations.forEach(station => {
      const pill = document.createElement('span');
      pill.className = 'station-pill';
      pill.textContent = station;
      stations.appendChild(pill);
    });

    const done = state.doneStepIds.includes(step.id);
    const current = nextPendingId === step.id || (!nextPendingId && step.type === 'finish');

    node.classList.toggle('done', done);
    node.classList.toggle('current', current);

    if (step.type === 'finish') {
      stepBtn.textContent = 'Concluir missão';
      stepBtn.disabled = !state.route.steps.slice(0, -1).every(item => state.doneStepIds.includes(item.id) || item.type === 'finish');
      stepBtn.addEventListener('click', () => {
        if (!state.doneStepIds.includes(step.id)) state.doneStepIds.push(step.id);
        saveAppState();
        renderProgress();
        renderTimeline();
        speakText('Parabéns. Você chegou ao destino.');
        showToast('Missão concluída 🎉');
      });
    } else {
      stepBtn.textContent = done ? 'Etapa concluída' : 'Marcar como feita';
      stepBtn.addEventListener('click', () => toggleStepDone(step.id));
    }

    voiceBtn.addEventListener('click', () => speakText(step.title + '. ' + step.text));

    dom.routeTimeline.appendChild(node);
  });
}

function toggleStepDone(stepId) {
  if (state.doneStepIds.includes(stepId)) {
    state.doneStepIds = state.doneStepIds.filter(id => id !== stepId);
  } else {
    state.doneStepIds.push(stepId);
    const currentStep = state.route.steps.find(step => step.id === stepId);
    if (currentStep) speakText(currentStep.title + '. Ok, seguindo para a próxima etapa.');
  }
  saveAppState();
  renderProgress();
  renderTimeline();
}

function saveAppState() {
  const payload = {
    origin: state.origin,
    destination: state.destination,
    route: state.route,
    doneStepIds: state.doneStepIds
  };
  localStorage.setItem(APP_STATE_KEY, JSON.stringify(payload));
  dom.saveBadge.textContent = 'Tudo salvo no aparelho';
}

function loadAppState() {
  try {
    const saved = JSON.parse(localStorage.getItem(APP_STATE_KEY) || 'null');
    if (!saved) return;
    state.origin = saved.origin ?? null;
    state.destination = saved.destination ?? null;
    state.route = saved.route ?? null;
    state.doneStepIds = saved.doneStepIds ?? [];
  } catch {
    // ignore
  }
}

function resetRoute() {
  state.origin = null;
  state.destination = null;
  state.route = null;
  state.doneStepIds = [];
  saveAppState();
  updateStationFields();
  renderRoute();
  showToast('Rota limpa.');
}

function swapStations() {
  const temp = state.origin;
  state.origin = state.destination;
  state.destination = temp;
  updateStationFields();
  saveAppState();
  if (state.origin && state.destination) findAndRenderRoute();
}

function updateNetworkBadge() {
  const online = navigator.onLine;
  dom.networkBadge.textContent = online ? 'Online: app pronto e atualizado' : 'Offline: funcionando no celular';
  dom.networkBadge.classList.toggle('online', online);
  dom.networkBadge.classList.toggle('offline', !online);
}

function showToast(message) {
  const old = document.querySelector('.toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2100);
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showToast('A voz do aparelho não está disponível aqui.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;
  utterance.pitch = 1.02;
  window.speechSynthesis.speak(utterance);
}

function buildSpeakRouteText(steps, compact = false) {
  const filtered = steps.filter(step => step.type !== 'finish');
  const text = filtered.map((step, index) => `Etapa ${index + 1}: ${step.title}. ${step.text}`).join(' ');
  return compact ? text : `${text} Depois, ${steps[steps.length - 1]?.title || 'chegue ao destino'}.`;
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // ignore
    });
  }
}

function bindEvents() {
  dom.originField.addEventListener('click', () => openModal('origin'));
  dom.destinationField.addEventListener('click', () => openModal('destination'));
  dom.findRouteBtn.addEventListener('click', findAndRenderRoute);
  dom.resetRouteBtn.addEventListener('click', resetRoute);
  dom.swapBtn.addEventListener('click', swapStations);
  dom.stationSearchInput.addEventListener('input', renderStationList);
  dom.speakRouteBtn.addEventListener('click', () => {
    if (state.route) speakText(buildSpeakRouteText(state.route.steps));
  });
  dom.speakCurrentBtn.addEventListener('click', () => {
    if (!state.route) {
      speakText('Escolha a origem e o destino para começar.');
      return;
    }
    const current = state.route.steps.find(step => !state.doneStepIds.includes(step.id)) || state.route.steps[state.route.steps.length - 1];
    speakText(current.title + '. ' + current.text);
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      document.querySelectorAll('.filter-pill').forEach(item => item.classList.toggle('active', item === btn));
      renderStationList();
    });
  });

  window.addEventListener('online', updateNetworkBadge);
  window.addEventListener('offline', updateNetworkBadge);
}

function init() {
  loadAppState();
  updateStationFields();
  renderRecentStations();
  renderRoute();
  updateNetworkBadge();
  bindEvents();
  registerServiceWorker();

  if (state.origin && state.destination && !state.route) {
    findAndRenderRoute();
  }
}

init();
