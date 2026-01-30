/**
 * Utility to generate random training schedules for demonstration purposes.
 */

const TRAINING_TYPES = [
  { id: 'NR-10', title: 'NR-10 - Segurança em Instalações Elétricas', desc: 'Curso Básico e SEP. Segurança para eletricistas e profissionais da área.', duration: '40h' },
  { id: 'NR-20', title: 'NR-20 - Segurança com Inflamáveis', desc: 'Capacitação para postos de combustível, refinarias e áreas com inflamáveis.', duration: '8h' },
  { id: 'NR-33', title: 'NR-33 - Espaços Confinados', desc: 'Vigias e Trabalhadores Autorizados. Entrada e resgate em áreas confinadas.', duration: '16h' },
  { id: 'NR-35', title: 'NR-35 - Trabalho em Altura', desc: 'Treinamento prático com técnicas de ancoragem, nós e resgate.', duration: '8h' },
  { id: 'NR-12', title: 'NR-12 - Máquinas e Equipamentos', desc: 'Segurança na operação de maquinário industrial conforme a norma.', duration: '8h' },
  { id: 'NR-06', title: 'NR-06 - Equipamento de Proteção Individual', desc: 'Uso correto, guarda e conservação de EPIs.', duration: '4h' },
  { id: 'NR-05', title: 'NR-05 - CIPA', desc: 'Comissão Interna de Prevenção de Acidentes e Assédio.', duration: '20h' }
];

const INSTRUCTORS = [
  "Eng. Carlos Silva", "Téc. Maria Oliveira", "Eng. Roberto Santos", "Bombeiro Civil Pedro Lima", "Enf. Ana Costa"
];

const LOCATIONS = [
  "Centro de Treinamento", "Auditório Principal", "Sala 02 - Prática", "Área Externa - Simulação"
];

export const generateRandomCalendar = (count = 12) => {
  const items = [];
  const today = new Date();
  
  for (let i = 0; i < count; i++) {
    // Random date in next 90 days
    const date = new Date(today);
    date.setDate(today.getDate() + Math.floor(Math.random() * 90) + 2);
    
    // Skip weekends roughly
    if (date.getDay() === 0) date.setDate(date.getDate() + 1); // skip sunday
    if (date.getDay() === 6) date.setDate(date.getDate() + 2); // skip saturday

    // Random times
    const hours = [8, 9, 13, 14, 15];
    const timeHour = hours[Math.floor(Math.random() * hours.length)];
    const timeStr = `${timeHour.toString().padStart(2, '0')}:00`;
    
    const type = TRAINING_TYPES[Math.floor(Math.random() * TRAINING_TYPES.length)];
    const instructor = INSTRUCTORS[Math.floor(Math.random() * INSTRUCTORS.length)];
    
    items.push({
      id: `evt-${i}-${Date.now()}`,
      typeId: type.id,
      title: type.title,
      description: type.desc,
      date: date,
      dateStr: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      weekday: date.toLocaleDateString('pt-BR', { weekday: 'long' }),
      time: timeStr,
      duration: type.duration,
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      instructor: instructor,
      spots: Math.floor(Math.random() * 15) + 5
    });
  }
  
  // Sort by date
  return items.sort((a, b) => a.date - b.date);
};