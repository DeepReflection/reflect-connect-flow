// ============================================
// Data - Native HTML5 Version
// ============================================

const PROFILE_DATA = {
  name: "outrobrasileironodiad",
  description: "O Projeto Outro Brasileiro é uma iniciativa independente e sem fins lucrativos dedicada à criação de conteúdos audiovisuais sobre a Segunda Guerra Mundial, explorando de forma aprofundada seus principais eventos, batalhas, personagens e contextos históricos.",
  avatarUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png",
};

const AGENDA_EVENTS = [
  {
    date: "15 Jan 2025",
    time: "19:00",
    title: "Palestra: O Dia D - 80 Anos Depois",
    description: "Uma análise profunda dos eventos que marcaram o desembarque aliado na Normandia.",
    imageUrl: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=400&h=300&fit=crop",
    location: "Centro Cultural São Paulo",
  },
  {
    date: "22 Jan 2025",
    time: "14:30",
    title: "Workshop: Pesquisa Histórica na Era Digital",
    description: "Técnicas modernas para pesquisar e documentar eventos da Segunda Guerra Mundial.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    location: "Biblioteca Nacional",
  },
  {
    date: "05 Fev 2025",
    time: "20:00",
    title: "Live: Batalha de Stalingrado",
    description: "Transmissão ao vivo discutindo os momentos decisivos da batalha mais sangrenta da história.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=300&fit=crop",
    location: "YouTube & Instagram",
  },
  {
    date: "18 Fev 2025",
    time: "10:00",
    title: "Visita Guiada: Museu da Segunda Guerra",
    description: "Tour exclusivo pelo acervo histórico com comentários especializados.",
    imageUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=400&h=300&fit=crop",
    location: "Museu Histórico Nacional",
  },
];

const PRODUCTS = [
  {
    title: "Dia D: A Verdade Por Trás da Batalha da Normandia",
    description: "Imagine o som do mar calmo, quebrando suavemente na areia. Agora, imagine esse som sendo subitamente engolido por um rugido ensurdecedor, um prenúncio de algo que mudaria o curso da história para sempre.",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
  {
    title: "Stalingrado: O Inferno na Terra",
    description: "A batalha mais sangrenta da história humana. Descubra os detalhes da luta desesperada que mudou o rumo da guerra no front oriental.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
  {
    title: "A Batalha de Midway",
    description: "O ponto de virada no Pacífico. Como uma batalha naval de quatro dias selou o destino do Império Japonês.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
  {
    title: "A Queda de Berlim",
    description: "Os últimos dias do Terceiro Reich. A corrida entre soviéticos e aliados para conquistar a capital alemã.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
];

const SERVICES = [
  {
    title: "Consultoria Histórica",
    description: "Oferecemos consultoria especializada para produções audiovisuais, pesquisas acadêmicas e projetos educacionais sobre a Segunda Guerra Mundial.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
  {
    title: "Palestras e Workshops",
    description: "Apresentações dinâmicas e interativas sobre os principais eventos e personagens da Segunda Guerra Mundial para escolas e empresas.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
  {
    title: "Produção de Conteúdo",
    description: "Criação de roteiros, documentários e materiais educacionais personalizados sobre temas históricos da Segunda Guerra.",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
  {
    title: "Curadoria de Exposições",
    description: "Planejamento e organização de exposições temáticas com peças históricas, fotografias e documentos da época.",
    imageUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
];

const REFLECTIONS = [
  { title: "General Patton", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png" },
  { title: "Montgomery", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png" },
  { title: "MacArthur", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png" },
  { title: "Zhukov", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png" },
  { title: "Churchill", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png" },
  { title: "Rommel", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png" },
  { title: "Eisenhower", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png" },
  { title: "De Gaulle", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png" },
  { title: "Roosevelt", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png" },
  { title: "Stalin", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png" },
  { title: "Bradley", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/276.png" },
  { title: "Nimitz", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/277.png" },
  { title: "Yamamoto", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/272.png" },
  { title: "Guderian", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/273.png" },
  { title: "Manstein", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/274.png" },
  { title: "Konev", imageUrl: "https://vortice-deep-reflection-production.s3.amazonaws.com/resources/275.png" },
];

const THEMES = [
  { id: 'vintage-sepia', name: 'Sépia Vintage', isLight: false },
  { id: 'midnight-gold', name: 'Ouro da Meia-Noite', isLight: false },
  { id: 'military-olive', name: 'Oliva Militar', isLight: false },
  { id: 'ocean-deep', name: 'Oceano Profundo', isLight: false },
  { id: 'crimson-war', name: 'Carmesim de Guerra', isLight: false },
  { id: 'sunset-bronze', name: 'Bronze do Pôr do Sol', isLight: false },
  { id: 'royal-purple', name: 'Púrpura Real', isLight: false },
  { id: 'forest-emerald', name: 'Esmeralda da Floresta', isLight: false },
  { id: 'arctic-frost', name: 'Gelo Ártico', isLight: true },
  { id: 'desert-sand', name: 'Areia do Deserto', isLight: true },
  { id: 'cloud-silver', name: 'Prata das Nuvens', isLight: true },
  { id: 'rose-garden', name: 'Jardim de Rosas', isLight: true },
  { id: 'mint-fresh', name: 'Menta Fresca', isLight: true },
  { id: 'lavender-dream', name: 'Sonho de Lavanda', isLight: true },
];
