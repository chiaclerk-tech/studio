const interventions = {
  documents: {
    before: 'Leer · copiar · revisar · volver a copiar',
    after: 'Un borrador estructurado y trazable',
    text: 'Extraemos los datos, señalamos contradicciones y dejamos a una persona la validación final. El piloto se mide por minutos ahorrados y errores evitados.',
    metrics: ['tiempo / expediente', 'la decisión humana', '10 casos reales']
  },
  search: {
    before: 'Abrir pestañas · buscar · dudar · repetir',
    after: 'Evidencias reunidas y verificables',
    text: 'Reunimos las fuentes correctas, priorizamos lo relevante y enseñamos siempre de dónde sale cada afirmación. La persona conserva el criterio y la última palabra.',
    metrics: ['tiempo de investigación', 'la trazabilidad', 'una pregunta concreta']
  },
  legacy: {
    before: 'Entrar · copiar · cambiar de sistema · pegar',
    after: 'Un flujo continuo sobre lo que ya existe',
    text: 'Conectamos las herramientas actuales o construimos una capa sencilla encima. Modernizar no tiene por qué significar tirar lo que ya funciona.',
    metrics: ['pasos eliminados', 'el sistema existente', 'un solo recorrido']
  },
  decision: {
    before: 'Reunir opiniones · perder contexto · improvisar',
    after: 'Opciones claras con evidencia y límites',
    text: 'Ordenamos señales dispersas, explicitamos dudas y proponemos alternativas. Automatizamos la preparación de la decisión, no la responsabilidad.',
    metrics: ['calidad y consistencia', 'el criterio experto', 'decisiones históricas']
  }
};

const buttons = document.querySelectorAll('[data-problem]');
const fields = {
  before: document.querySelector('#before-title'),
  after: document.querySelector('#after-title'),
  text: document.querySelector('#intervention-text'),
  metrics: [
    document.querySelector('#metric-one'),
    document.querySelector('#metric-two'),
    document.querySelector('#metric-three')
  ]
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = interventions[button.dataset.problem];
    buttons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    fields.before.textContent = item.before;
    fields.after.textContent = item.after;
    fields.text.textContent = item.text;
    fields.metrics.forEach((field, index) => { field.textContent = item.metrics[index]; });
  });
});
