// Banner Gallery Data
// Extracted from public/extras/ directory

export interface BannerCategory {
  id: string;
  name: string;
  count: number;
}

export interface BannerImage {
  id: string;
  url: string;
  category: string;
}

// All categories with their display names
export const BANNER_CATEGORIES: BannerCategory[] = [
  { id: 'abstratos', name: 'Abstratos', count: 10 },
  { id: 'aliens', name: 'Aliens', count: 30 },
  { id: 'anime', name: 'Anime', count: 90 },
  { id: 'anjos', name: 'Anjos', count: 20 },
  { id: 'arte', name: 'Arte', count: 10 },
  { id: 'arvores', name: 'Árvores', count: 10 },
  { id: 'astrologia', name: 'Astrologia', count: 10 },
  { id: 'astronautas', name: 'Astronautas', count: 10 },
  { id: 'automobilismo', name: 'Automobilismo', count: 10 },
  { id: 'aves', name: 'Aves', count: 10 },
  { id: 'aviacao', name: 'Aviação', count: 10 },
  { id: 'avioes-ww2', name: 'Aviões WW2', count: 40 },
  { id: 'baixos-eletricos', name: 'Baixos Elétricos', count: 10 },
  { id: 'bateria', name: 'Bateria', count: 10 },
  { id: 'bebidas-destiladas', name: 'Bebidas Destiladas', count: 10 },
  { id: 'biblicos', name: 'Bíblicos', count: 30 },
  { id: 'brasil-turistico', name: 'Brasil Turístico', count: 40 },
  { id: 'brinquedos', name: 'Brinquedos', count: 10 },
  { id: 'cachorros', name: 'Cachorros', count: 10 },
  { id: 'carnaval', name: 'Carnaval', count: 10 },
  { id: 'carros-antigos', name: 'Carros Antigos', count: 40 },
  { id: 'cartoon', name: 'Cartoon', count: 10 },
  { id: 'cartoons', name: 'Cartoons', count: 10 },
  { id: 'cartunista', name: 'Cartunista', count: 10 },
  { id: 'cavalos', name: 'Cavalos', count: 10 },
  { id: 'cenarios-apocalipticos', name: 'Cenários Apocalípticos', count: 30 },
  { id: 'chuva', name: 'Chuva', count: 10 },
  { id: 'cinema', name: 'Cinema', count: 10 },
  { id: 'circo', name: 'Circo', count: 10 },
  { id: 'cidade', name: 'Cidade', count: 10 },
  { id: 'cidades-futuristas', name: 'Cidades Futuristas', count: 30 },
  { id: 'comida', name: 'Comida', count: 10 },
  { id: 'computadores', name: 'Computadores', count: 10 },
  { id: 'consultoria', name: 'Consultoria', count: 10 },
  { id: 'corrida', name: 'Corrida', count: 10 },
  { id: 'cosmos', name: 'Cosmos', count: 10 },
  { id: 'criancas', name: 'Crianças', count: 10 },
  { id: 'cyberpunk', name: 'Cyberpunk', count: 30 },
  { id: 'danca', name: 'Dança', count: 10 },
  { id: 'dday', name: 'D-Day', count: 30 },
  { id: 'dentista', name: 'Dentista', count: 10 },
  { id: 'desertos', name: 'Desertos', count: 10 },
  { id: 'dinossauros', name: 'Dinossauros', count: 10 },
  { id: 'divulgacao', name: 'Divulgação', count: 10 },
  { id: 'egipto', name: 'Egito', count: 20 },
  { id: 'eletronicos', name: 'Eletrônicos', count: 10 },
  { id: 'empresarios', name: 'Empresários', count: 10 },
  { id: 'enfermagem', name: 'Enfermagem', count: 10 },
  { id: 'engenharia', name: 'Engenharia', count: 10 },
  { id: 'espaco', name: 'Espaço', count: 20 },
  { id: 'esportes', name: 'Esportes', count: 10 },
  { id: 'estudio', name: 'Estúdio', count: 10 },
  { id: 'familia', name: 'Família', count: 10 },
  { id: 'fantasia', name: 'Fantasia', count: 30 },
  { id: 'fazenda', name: 'Fazenda', count: 10 },
  { id: 'filmes', name: 'Filmes', count: 10 },
  { id: 'fitness', name: 'Fitness', count: 10 },
  { id: 'flores', name: 'Flores', count: 10 },
  { id: 'floresta', name: 'Floresta', count: 10 },
  { id: 'fotografia', name: 'Fotografia', count: 10 },
  { id: 'frases', name: 'Frases', count: 10 },
  { id: 'futebol', name: 'Futebol', count: 10 },
  { id: 'games', name: 'Games', count: 30 },
  { id: 'gatos', name: 'Gatos', count: 10 },
  { id: 'gladiadores', name: 'Gladiadores', count: 20 },
  { id: 'grecia', name: 'Grécia', count: 20 },
  { id: 'guitarras', name: 'Guitarras', count: 10 },
  { id: 'halloween', name: 'Halloween', count: 10 },
  { id: 'herois', name: 'Heróis', count: 30 },
  { id: 'hip-hop', name: 'Hip Hop', count: 10 },
  { id: 'historia', name: 'História', count: 20 },
  { id: 'humor', name: 'Humor', count: 10 },
  { id: 'idade-media', name: 'Idade Média', count: 30 },
  { id: 'igrejas', name: 'Igrejas', count: 10 },
  { id: 'infantil', name: 'Infantil', count: 10 },
  { id: 'inverno', name: 'Inverno', count: 10 },
  { id: 'japao', name: 'Japão', count: 20 },
  { id: 'jardim', name: 'Jardim', count: 10 },
  { id: 'jazz', name: 'Jazz', count: 10 },
  { id: 'jogos', name: 'Jogos', count: 10 },
  { id: 'jornalismo', name: 'Jornalismo', count: 10 },
  { id: 'leao', name: 'Leão', count: 10 },
  { id: 'literatura', name: 'Literatura', count: 10 },
  { id: 'lobos', name: 'Lobos', count: 10 },
  { id: 'lua', name: 'Lua', count: 10 },
  { id: 'luxo', name: 'Luxo', count: 10 },
  { id: 'magia', name: 'Magia', count: 10 },
  { id: 'manga', name: 'Mangá', count: 30 },
  { id: 'mar', name: 'Mar', count: 10 },
  { id: 'marcenaria', name: 'Marcenaria', count: 10 },
  { id: 'marketing', name: 'Marketing', count: 10 },
  { id: 'medicina', name: 'Medicina', count: 10 },
  { id: 'meditacao', name: 'Meditação', count: 10 },
  { id: 'moda', name: 'Moda', count: 10 },
  { id: 'montanhas', name: 'Montanhas', count: 10 },
  { id: 'motos', name: 'Motos', count: 10 },
  { id: 'musculacao', name: 'Musculação', count: 10 },
  { id: 'musica', name: 'Música', count: 10 },
  { id: 'natal', name: 'Natal', count: 10 },
  { id: 'natureza', name: 'Natureza', count: 20 },
  { id: 'navios', name: 'Navios', count: 10 },
  { id: 'negocios', name: 'Negócios', count: 10 },
  { id: 'neon', name: 'Neon', count: 10 },
  { id: 'noite', name: 'Noite', count: 10 },
  { id: 'nordeste', name: 'Nordeste', count: 10 },
  { id: 'oceano', name: 'Oceano', count: 10 },
  { id: 'oriente', name: 'Oriente', count: 10 },
  { id: 'outono', name: 'Outono', count: 10 },
  { id: 'paris', name: 'Paris', count: 10 },
  { id: 'pascoa', name: 'Páscoa', count: 10 },
  { id: 'patinacao', name: 'Patinação', count: 10 },
  { id: 'pescaria', name: 'Pescaria', count: 10 },
  { id: 'piano', name: 'Piano', count: 10 },
  { id: 'pintura', name: 'Pintura', count: 10 },
  { id: 'piratas', name: 'Piratas', count: 20 },
  { id: 'podcast', name: 'Podcast', count: 10 },
  { id: 'poesia', name: 'Poesia', count: 10 },
  { id: 'politica', name: 'Política', count: 10 },
  { id: 'por-do-sol', name: 'Pôr do Sol', count: 10 },
  { id: 'praia', name: 'Praia', count: 10 },
  { id: 'primavera', name: 'Primavera', count: 10 },
  { id: 'programacao', name: 'Programação', count: 10 },
  { id: 'psicologia', name: 'Psicologia', count: 10 },
  { id: 'radio', name: 'Rádio', count: 10 },
  { id: 'religiao', name: 'Religião', count: 10 },
  { id: 'retro', name: 'Retrô', count: 10 },
  { id: 'robos', name: 'Robôs', count: 20 },
  { id: 'rock', name: 'Rock', count: 10 },
  { id: 'roma', name: 'Roma', count: 20 },
  { id: 'samurais', name: 'Samurais', count: 30 },
  { id: 'saude', name: 'Saúde', count: 10 },
  { id: 'segunda-guerra', name: 'Segunda Guerra', count: 40 },
  { id: 'series', name: 'Séries', count: 10 },
  { id: 'skate', name: 'Skate', count: 10 },
  { id: 'sol', name: 'Sol', count: 10 },
  { id: 'surf', name: 'Surf', count: 10 },
  { id: 'tanques', name: 'Tanques', count: 30 },
  { id: 'tatuagem', name: 'Tatuagem', count: 10 },
  { id: 'teatro', name: 'Teatro', count: 10 },
  { id: 'tecnologia', name: 'Tecnologia', count: 20 },
  { id: 'tenis', name: 'Tênis', count: 10 },
  { id: 'terror', name: 'Terror', count: 20 },
  { id: 'trabalho', name: 'Trabalho', count: 10 },
  { id: 'treino', name: 'Treino', count: 10 },
  { id: 'universo', name: 'Universo', count: 10 },
  { id: 'vampiros', name: 'Vampiros', count: 10 },
  { id: 'verao', name: 'Verão', count: 10 },
  { id: 'viagem', name: 'Viagem', count: 10 },
  { id: 'video', name: 'Vídeo', count: 10 },
  { id: 'vikings', name: 'Vikings', count: 30 },
  { id: 'vinho', name: 'Vinho', count: 10 },
  { id: 'vintage', name: 'Vintage', count: 10 },
  { id: 'yoga', name: 'Yoga', count: 10 },
  { id: 'zumbis', name: 'Zumbis', count: 20 },
];

// Generate banner URLs for a category
export function getBannersForCategory(categoryId: string): BannerImage[] {
  const category = BANNER_CATEGORIES.find(c => c.id === categoryId);
  if (!category) return [];
  
  return Array.from({ length: category.count }, (_, i) => ({
    id: `${categoryId}-${String(i + 1).padStart(2, '0')}`,
    url: `/extras/${categoryId}-${String(i + 1).padStart(2, '0')}.jpg`,
    category: categoryId,
  }));
}

// Get all banners
export function getAllBanners(): BannerImage[] {
  return BANNER_CATEGORIES.flatMap(cat => getBannersForCategory(cat.id));
}

// Search banners by category name
export function searchBanners(query: string): BannerImage[] {
  const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  const matchingCategories = BANNER_CATEGORIES.filter(cat => {
    const normalizedName = cat.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalizedId = cat.id.toLowerCase();
    return normalizedName.includes(normalizedQuery) || normalizedId.includes(normalizedQuery);
  });
  
  return matchingCategories.flatMap(cat => getBannersForCategory(cat.id));
}
