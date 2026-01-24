// Blog Posts Data
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'dia-d-80-anos',
    title: 'O Dia D: 80 Anos Depois',
    excerpt: 'Uma análise profunda dos eventos que marcaram o desembarque aliado na Normandia e mudaram o rumo da Segunda Guerra Mundial.',
    content: `
# O Dia D: 80 Anos Depois

O dia 6 de junho de 1944 ficou marcado na história como o maior desembarque anfíbio da história militar. Conhecido como Dia D, a Operação Overlord reuniu forças de diversos países aliados em um esforço coordenado para libertar a Europa Ocidental do domínio nazista.

## O Planejamento

A operação foi planejada durante meses, envolvendo milhares de oficiais e estrategistas. O General Dwight D. Eisenhower foi escolhido como comandante supremo das forças aliadas, e sob sua liderança, foi desenvolvido um dos planos militares mais complexos da história.

## As Praias da Normandia

O desembarque ocorreu em cinco praias principais:

- **Utah Beach** - Setor americano
- **Omaha Beach** - Setor americano, onde houve as maiores baixas
- **Gold Beach** - Setor britânico
- **Juno Beach** - Setor canadense
- **Sword Beach** - Setor britânico

## O Legado

O Dia D representou o início do fim para o regime nazista. Apesar das enormes baixas, o sucesso da operação abriu caminho para a libertação da França e, eventualmente, a derrota da Alemanha nazista.

Hoje, 80 anos depois, lembramos o sacrifício de milhares de soldados que deram suas vidas pela liberdade.
    `,
    coverImage: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800&h=450&fit=crop',
    author: {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: '2024-06-06',
    readingTime: '8 min',
    category: 'Batalhas',
    tags: ['Dia D', 'Normandia', 'Segunda Guerra Mundial'],
  },
  {
    id: '2',
    slug: 'stalingrado-batalha-decisiva',
    title: 'Stalingrado: A Batalha que Mudou a Guerra',
    excerpt: 'A história da batalha mais sangrenta da história humana e como ela determinou o destino do front oriental.',
    content: `
# Stalingrado: A Batalha que Mudou a Guerra

Entre agosto de 1942 e fevereiro de 1943, a cidade de Stalingrado foi palco da batalha mais sangrenta da história da humanidade. Com estimativas de mais de 2 milhões de baixas entre mortos, feridos e capturados, Stalingrado marcou o ponto de virada da Segunda Guerra Mundial no front oriental.

## O Avanço Alemão

Em 1942, as forças alemãs avançavam em direção ao Cáucaso, buscando os campos petrolíferos soviéticos. Hitler ordenou a captura de Stalingrado, cidade que carregava o nome de seu maior inimigo: Josef Stalin.

## A Resistência Soviética

Os soviéticos defenderam cada prédio, cada rua, cada metro de terra. A luta urbana brutal ficou conhecida como "Rattenkrieg" (guerra de ratos) pelos alemães, dada a natureza feroz dos combates.

## O Cerco e a Rendição

Em novembro de 1942, a Operação Urano cercou o 6º Exército Alemão. Em 2 de fevereiro de 1943, o marechal Friedrich Paulus se rendeu, marcando a primeira grande derrota alemã na guerra.
    `,
    coverImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop',
    author: {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: '2024-05-20',
    readingTime: '10 min',
    category: 'Batalhas',
    tags: ['Stalingrado', 'Front Oriental', 'Wehrmacht'],
  },
  {
    id: '3',
    slug: 'generais-aliados',
    title: 'Os Grandes Generais Aliados',
    excerpt: 'Conheça os líderes militares que comandaram as forças aliadas à vitória na Segunda Guerra Mundial.',
    content: `
# Os Grandes Generais Aliados

A vitória aliada na Segunda Guerra Mundial foi possível graças à liderança de generais excepcionais. Cada um com seu estilo único de comando, esses homens moldaram o curso da história.

## George S. Patton

O "Old Blood and Guts" era conhecido por sua agressividade em combate e estilo teatral de liderança. Comandou o 3º Exército americano em uma das mais rápidas campanhas da guerra.

## Bernard Montgomery

O meticuloso "Monty" britânico era famoso por sua preparação cuidadosa e recusa em atacar até ter superioridade esmagadora. Sua vitória em El Alamein foi um ponto de virada na África.

## Georgy Zhukov

O marechal soviético foi responsável pelas maiores vitórias do Exército Vermelho, incluindo a defesa de Moscou, Stalingrado e a tomada de Berlim.

## Douglas MacArthur

O comandante do Pacífico liderou a estratégia de "island hopping" que levou as forças americanas até as portas do Japão.
    `,
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=450&fit=crop',
    author: {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: '2024-05-10',
    readingTime: '7 min',
    category: 'Personagens',
    tags: ['Patton', 'Montgomery', 'Zhukov', 'MacArthur'],
  },
  {
    id: '4',
    slug: 'batalha-midway',
    title: 'Midway: O Ponto de Virada no Pacífico',
    excerpt: 'Como uma batalha naval de quatro dias selou o destino do Império Japonês e mudou o curso da guerra no Pacífico.',
    content: `
# Midway: O Ponto de Virada no Pacífico

Entre 4 e 7 de junho de 1942, próximo ao Atol de Midway, ocorreu uma das batalhas navais mais decisivas da história. A vitória americana em Midway marcou o início do declínio do poder naval japonês.

## A Armadilha Americana

Graças à quebra dos códigos japoneses, os americanos sabiam dos planos inimigos. O almirante Chester Nimitz preparou uma emboscada.

## A Batalha

Em quatro dias de combates, a Marinha dos EUA afundou quatro porta-aviões japoneses - Akagi, Kaga, Soryu e Hiryu - perdendo apenas o USS Yorktown.

## Consequências

Midway eliminou a superioridade aérea naval japonesa e iniciou a ofensiva americana no Pacífico que culminaria na rendição do Japão em 1945.
    `,
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop',
    author: {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: '2024-04-25',
    readingTime: '6 min',
    category: 'Batalhas',
    tags: ['Midway', 'Pacífico', 'Marinha'],
  },
  {
    id: '5',
    slug: 'armas-segunda-guerra',
    title: 'As Armas que Definiram a Segunda Guerra',
    excerpt: 'Um olhar sobre as inovações tecnológicas e armamentos que revolucionaram a guerra moderna.',
    content: `
# As Armas que Definiram a Segunda Guerra

A Segunda Guerra Mundial foi um catalisador para inovações tecnológicas sem precedentes. Das trincheiras à era atômica, a tecnologia militar evoluiu dramaticamente.

## Tanques

O tanque emergiu como a arma decisiva da guerra terrestre:
- **Tiger I** alemão - Poder de fogo devastador
- **T-34** soviético - Equilíbrio perfeito entre mobilidade e blindagem
- **Sherman M4** americano - Produzido em massa

## Aviação

O domínio aéreo provou ser crucial:
- **Spitfire** britânico
- **P-51 Mustang** americano
- **Messerschmitt Bf 109** alemão

## Armas Navais

Os porta-aviões substituíram os encouraçados como reis dos mares, enquanto os submarinos U-boat aterrorizavam o Atlântico.

## A Era Atômica

A guerra terminou com a introdução da arma mais devastadora já criada: a bomba atômica.
    `,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop',
    author: {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: '2024-04-15',
    readingTime: '9 min',
    category: 'Tecnologia',
    tags: ['Armas', 'Tecnologia', 'Tanques', 'Aviação'],
  },
  {
    id: '6',
    slug: 'resistencia-francesa',
    title: 'A Resistência Francesa: Heróis nas Sombras',
    excerpt: 'A história dos homens e mulheres que arriscaram tudo para libertar a França da ocupação nazista.',
    content: `
# A Resistência Francesa: Heróis nas Sombras

Após a queda da França em 1940, milhares de franceses se recusaram a aceitar a ocupação alemã. Nas sombras, uma rede de resistência começou a se formar.

## O Início

O apelo do General Charles de Gaulle em 18 de junho de 1940 convocou os franceses a continuarem a luta. Esse chamado inspirou o nascimento da Resistência.

## Ações de Sabotagem

Os resistentes:
- Destruíam linhas férreas
- Transmitiam inteligência aos Aliados
- Escondiam aviadores abatidos
- Publicavam jornais clandestinos

## Jean Moulin

O maior herói da Resistência, Jean Moulin unificou os diferentes movimentos sob o Conselho Nacional da Resistência antes de ser capturado e morto pelos nazistas.

## O Legado

A Resistência Francesa provou que mesmo sob a mais brutal ocupação, o espírito de liberdade não pode ser extinto.
    `,
    coverImage: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&h=450&fit=crop',
    author: {
      name: 'Outro Brasileiro',
      avatar: 'https://vortice-deep-reflection-production.s3.amazonaws.com/resources/286.png',
    },
    publishedAt: '2024-04-05',
    readingTime: '8 min',
    category: 'Personagens',
    tags: ['Resistência', 'França', 'De Gaulle'],
  },
];

export const categories = ['Batalhas', 'Personagens', 'Tecnologia'];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
}
