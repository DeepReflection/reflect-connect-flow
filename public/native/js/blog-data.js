// ============================================
// Blog Data - Native HTML5 Version
// ============================================

const BLOG_POSTS = [
  {
    id: '1',
    slug: 'dia-d-80-anos',
    title: 'O Dia D: 80 Anos Depois',
    excerpt: 'Uma análise profunda dos eventos que marcaram o desembarque aliado na Normandia e mudaram o rumo da Segunda Guerra Mundial.',
    content: `
      <h1>O Dia D: 80 Anos Depois</h1>
      <p>O dia 6 de junho de 1944 ficou marcado na história como o maior desembarque anfíbio da história militar. Conhecido como Dia D, a Operação Overlord reuniu forças de diversos países aliados em um esforço coordenado para libertar a Europa Ocidental do domínio nazista.</p>
      
      <h2>O Planejamento</h2>
      <p>A operação foi planejada durante meses, envolvendo milhares de oficiais e estrategistas. O General Dwight D. Eisenhower foi escolhido como comandante supremo das forças aliadas, e sob sua liderança, foi desenvolvido um dos planos militares mais complexos da história.</p>
      
      <h2>As Praias da Normandia</h2>
      <p>O desembarque ocorreu em cinco praias principais:</p>
      <ul>
        <li><strong>Utah Beach</strong> - Setor americano</li>
        <li><strong>Omaha Beach</strong> - Setor americano, onde houve as maiores baixas</li>
        <li><strong>Gold Beach</strong> - Setor britânico</li>
        <li><strong>Juno Beach</strong> - Setor canadense</li>
        <li><strong>Sword Beach</strong> - Setor britânico</li>
      </ul>
      
      <h2>O Legado</h2>
      <p>O Dia D representou o início do fim para o regime nazista. Apesar das enormes baixas, o sucesso da operação abriu caminho para a libertação da França e, eventualmente, a derrota da Alemanha nazista.</p>
      <p>Hoje, 80 anos depois, lembramos o sacrifício de milhares de soldados que deram suas vidas pela liberdade.</p>
    `,
    contentImages: {
      'O Planejamento': 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&h=450&fit=crop',
      'As Praias da Normandia': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      'O Legado': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
    },
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
      <h1>Stalingrado: A Batalha que Mudou a Guerra</h1>
      <p>Entre agosto de 1942 e fevereiro de 1943, a cidade de Stalingrado foi palco da batalha mais sangrenta da história da humanidade. Com estimativas de mais de 2 milhões de baixas entre mortos, feridos e capturados, Stalingrado marcou o ponto de virada da Segunda Guerra Mundial no front oriental.</p>
      
      <h2>O Avanço Alemão</h2>
      <p>Em 1942, as forças alemãs avançavam em direção ao Cáucaso, buscando os campos petrolíferos soviéticos. Hitler ordenou a captura de Stalingrado, cidade que carregava o nome de seu maior inimigo: Josef Stalin.</p>
      
      <h2>A Resistência Soviética</h2>
      <p>Os soviéticos defenderam cada prédio, cada rua, cada metro de terra. A luta urbana brutal ficou conhecida como "Rattenkrieg" (guerra de ratos) pelos alemães, dada a natureza feroz dos combates.</p>
      
      <h2>O Cerco e a Rendição</h2>
      <p>Em novembro de 1942, a Operação Urano cercou o 6º Exército Alemão. Em 2 de fevereiro de 1943, o marechal Friedrich Paulus se rendeu, marcando a primeira grande derrota alemã na guerra.</p>
    `,
    contentImages: {
      'O Avanço Alemão': 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&h=450&fit=crop',
      'A Resistência Soviética': 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=450&fit=crop',
      'O Cerco e a Rendição': 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?w=800&h=450&fit=crop',
    },
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
      <h1>Os Grandes Generais Aliados</h1>
      <p>A vitória aliada na Segunda Guerra Mundial foi possível graças à liderança de generais excepcionais. Cada um com seu estilo único de comando, esses homens moldaram o curso da história.</p>
      
      <h2>George S. Patton</h2>
      <p>O "Old Blood and Guts" era conhecido por sua agressividade em combate e estilo teatral de liderança. Comandou o 3º Exército americano em uma das mais rápidas campanhas da guerra.</p>
      
      <h2>Bernard Montgomery</h2>
      <p>O meticuloso "Monty" britânico era famoso por sua preparação cuidadosa e recusa em atacar até ter superioridade esmagadora. Sua vitória em El Alamein foi um ponto de virada na África.</p>
      
      <h2>Georgy Zhukov</h2>
      <p>O marechal soviético foi responsável pelas maiores vitórias do Exército Vermelho, incluindo a defesa de Moscou, Stalingrado e a tomada de Berlim.</p>
      
      <h2>Douglas MacArthur</h2>
      <p>O comandante do Pacífico liderou a estratégia de "island hopping" que levou as forças americanas até as portas do Japão.</p>
    `,
    contentImages: {
      'George S. Patton': 'https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=800&h=450&fit=crop',
      'Bernard Montgomery': 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&h=450&fit=crop',
      'Georgy Zhukov': 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=450&fit=crop',
      'Douglas MacArthur': 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?w=800&h=450&fit=crop',
    },
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
      <h1>Midway: O Ponto de Virada no Pacífico</h1>
      <p>Entre 4 e 7 de junho de 1942, próximo ao Atol de Midway, ocorreu uma das batalhas navais mais decisivas da história. A vitória americana em Midway marcou o início do declínio do poder naval japonês.</p>
      
      <h2>A Armadilha Americana</h2>
      <p>Graças à quebra dos códigos japoneses, os americanos sabiam dos planos inimigos. O almirante Chester Nimitz preparou uma emboscada.</p>
      
      <h2>A Batalha</h2>
      <p>Em quatro dias de combates, a Marinha dos EUA afundou quatro porta-aviões japoneses - Akagi, Kaga, Soryu e Hiryu - perdendo apenas o USS Yorktown.</p>
      
      <h2>Consequências</h2>
      <p>Midway eliminou a superioridade aérea naval japonesa e iniciou a ofensiva americana no Pacífico que culminaria na rendição do Japão em 1945.</p>
    `,
    contentImages: {
      'A Armadilha Americana': 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&h=450&fit=crop',
      'A Batalha': 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?w=800&h=450&fit=crop',
      'Consequências': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    },
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
      <h1>As Armas que Definiram a Segunda Guerra</h1>
      <p>A Segunda Guerra Mundial foi um catalisador para inovações tecnológicas sem precedentes. Das trincheiras à era atômica, a tecnologia militar evoluiu dramaticamente.</p>
      
      <h2>Tanques</h2>
      <p>O tanque emergiu como a arma decisiva da guerra terrestre:</p>
      <ul>
        <li><strong>Tiger I</strong> alemão - Poder de fogo devastador</li>
        <li><strong>T-34</strong> soviético - Equilíbrio perfeito entre mobilidade e blindagem</li>
        <li><strong>Sherman M4</strong> americano - Produzido em massa</li>
      </ul>
      
      <h2>Aviação</h2>
      <p>O domínio aéreo provou ser crucial:</p>
      <ul>
        <li><strong>Spitfire</strong> britânico</li>
        <li><strong>P-51 Mustang</strong> americano</li>
        <li><strong>Messerschmitt Bf 109</strong> alemão</li>
      </ul>
      
      <h2>Armas Navais</h2>
      <p>Os porta-aviões substituíram os encouraçados como reis dos mares, enquanto os submarinos U-boat aterrorizavam o Atlântico.</p>
      
      <h2>A Era Atômica</h2>
      <p>A guerra terminou com a introdução da arma mais devastadora já criada: a bomba atômica.</p>
    `,
    contentImages: {
      'Tanques': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      'Aviação': 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=450&fit=crop',
      'Armas Navais': 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?w=800&h=450&fit=crop',
      'A Era Atômica': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop',
    },
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
      <h1>A Resistência Francesa: Heróis nas Sombras</h1>
      <p>Após a queda da França em 1940, milhares de franceses se recusaram a aceitar a ocupação alemã. Nas sombras, uma rede de resistência começou a se formar.</p>
      
      <h2>O Início</h2>
      <p>O apelo do General Charles de Gaulle em 18 de junho de 1940 convocou os franceses a continuarem a luta. Esse chamado inspirou o nascimento da Resistência.</p>
      
      <h2>Ações de Sabotagem</h2>
      <p>Os resistentes:</p>
      <ul>
        <li>Destruíam linhas férreas</li>
        <li>Transmitiam inteligência aos Aliados</li>
        <li>Escondiam aviadores abatidos</li>
        <li>Publicavam jornais clandestinos</li>
      </ul>
      
      <h2>Jean Moulin</h2>
      <p>O maior herói da Resistência, Jean Moulin unificou os diferentes movimentos sob o Conselho Nacional da Resistência antes de ser capturado e morto pelos nazistas.</p>
      
      <h2>O Legado</h2>
      <p>A Resistência Francesa provou que mesmo sob a mais brutal ocupação, o espírito de liberdade não pode ser extinto.</p>
    `,
    contentImages: {
      'O Início': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=450&fit=crop',
      'Ações de Sabotagem': 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&h=450&fit=crop',
      'Jean Moulin': 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&h=450&fit=crop',
      'O Legado': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
    },
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

const BLOG_CATEGORIES = ['Batalhas', 'Personagens', 'Tecnologia'];
const POSTS_PER_PAGE = 3;

function getPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

function getRelatedPosts(currentPost, limit = 3) {
  return BLOG_POSTS
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatFullDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

// Render content with inline images after H2 headers
function renderContentWithImages(content, contentImages) {
  if (!contentImages || Object.keys(contentImages).length === 0) {
    return content;
  }
  
  // Parse HTML and insert images after matching H2 headers
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  
  const h2Elements = tempDiv.querySelectorAll('h2');
  h2Elements.forEach(h2 => {
    const sectionTitle = h2.textContent.trim();
    if (contentImages[sectionTitle]) {
      const figure = document.createElement('figure');
      figure.className = 'content-image';
      figure.innerHTML = `
        <div class="content-image-wrapper">
          <img src="${contentImages[sectionTitle]}" alt="${sectionTitle}" loading="lazy">
          <div class="content-image-overlay"></div>
        </div>
        <figcaption>${sectionTitle}</figcaption>
      `;
      h2.insertAdjacentElement('afterend', figure);
    }
  });
  
  return tempDiv.innerHTML;
}
