import { motion } from 'framer-motion';
import { Download, ExternalLink, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
}

const PRODUCTS: Product[] = [
  {
    title: "Dia D: A Verdade Por Trás da Batalha da Normandia",
    description: "Imagine o som do mar calmo, quebrando suavemente na areia. Agora, imagine esse som sendo subitamente engolido por um rugido ensurdecedor.",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
  {
    title: "Stalingrado: O Inferno na Terra",
    description: "A batalha mais sangrenta da história humana. Descubra os detalhes da luta desesperada que mudou o rumo da guerra.",
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

const SERVICES: Service[] = [
  {
    title: "Consultoria Histórica",
    description: "Oferecemos consultoria especializada para produções audiovisuais e pesquisas acadêmicas.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
  {
    title: "Palestras e Workshops",
    description: "Apresentações dinâmicas sobre os principais eventos da Segunda Guerra Mundial.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
  {
    title: "Produção de Conteúdo",
    description: "Criação de roteiros e documentários personalizados sobre temas históricos.",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
  {
    title: "Tours Históricos Virtuais",
    description: "Experiências imersivas em realidade virtual pelos campos de batalha históricos.",
    imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop",
    linkUrl: "#",
  },
];

// Editorial Layout - Magazine style horizontal cards
const EditorialProducts = () => (
  <div className="space-y-20">
    {/* Products - Editorial Magazine Layout */}
    <section>
      <div className="border-b-4 border-foreground mb-8">
        <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tight pb-4">
          Produtos
        </h2>
      </div>
      <div className="space-y-12">
        {PRODUCTS.map((product, index) => (
          <motion.article
            key={product.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Edição {index + 1}</span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight">{product.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              <a href={product.downloadUrl} className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-4 transition-all">
                Baixar Agora <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    {/* Services - Editorial Cards */}
    <section>
      <div className="border-b-4 border-foreground mb-8">
        <h2 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tight pb-4">
          Serviços
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-foreground/20">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-background p-8 hover:bg-accent/10 transition-colors"
          >
            <span className="text-6xl font-serif font-black text-muted-foreground/30">0{index + 1}</span>
            <h3 className="font-serif text-2xl font-bold mt-2">{service.title}</h3>
            <p className="text-muted-foreground mt-3">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Brutalist Layout - Raw industrial style
const BrutalistProducts = () => (
  <div className="space-y-20">
    {/* Products - Brutalist Grid */}
    <section>
      <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 bg-foreground text-background inline-block px-4 py-2 -rotate-1">
        PRODUTOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-4 border-foreground bg-background p-0 hover:bg-foreground hover:text-background transition-colors group"
          >
            <div className="h-48 overflow-hidden border-b-4 border-foreground">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black uppercase">{product.title}</h3>
              <p className="mt-3 text-sm">{product.description}</p>
              <a href={product.downloadUrl} className="mt-4 inline-block border-2 border-current px-4 py-2 font-bold uppercase text-sm hover:bg-background hover:text-foreground transition-colors">
                Download ↓
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Brutalist List */}
    <section>
      <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 bg-foreground text-background inline-block px-4 py-2 rotate-1">
        SERVIÇOS
      </h2>
      <div className="space-y-2">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-4 border-foreground p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-foreground hover:text-background transition-colors group"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl font-black">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-black uppercase">{service.title}</h3>
                <p className="text-sm mt-1">{service.description}</p>
              </div>
            </div>
            <a href={service.linkUrl} className="border-2 border-current px-4 py-2 font-bold uppercase text-sm shrink-0">
              Ver Mais →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Glass Layout - Glassmorphism cards
const GlassProducts = () => (
  <div className="space-y-20">
    {/* Products - Glass Cards */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        ✨ Produtos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="h-48 relative">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-8 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{product.title}</h3>
              <p className="text-white/70 mt-3 text-sm">{product.description}</p>
              <a href={product.downloadUrl} className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                <Download className="w-4 h-4" /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Glass Floating Cards */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        🚀 Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
            <p className="text-white/60 mt-2 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Neon Layout - Cyberpunk neon style
const NeonProducts = () => (
  <div className="space-y-20">
    {/* Products - Neon Cards */}
    <section>
      <h2 className="text-5xl md:text-7xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
        PRODUTOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-black border border-cyan-500/50 rounded-2xl overflow-hidden">
              <div className="h-48 relative">
                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400">{product.title}</h3>
                <p className="text-gray-400 mt-3 text-sm">{product.description}</p>
                <a href={product.downloadUrl} className="mt-4 inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-black transition-all">
                  <Zap className="w-4 h-4" /> DOWNLOAD
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Neon Grid */}
    <section>
      <h2 className="text-5xl md:text-7xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500">
        SERVIÇOS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-black border border-purple-500/50 p-6 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all"
          >
            <div className="text-4xl font-black text-purple-500/30">0{index + 1}</div>
            <h3 className="text-lg font-bold text-pink-400 mt-2">{service.title}</h3>
            <p className="text-gray-500 mt-2 text-xs">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Retro Layout - Vintage 80s style
const RetroProducts = () => (
  <div className="space-y-20">
    {/* Products - Retro Cards */}
    <section>
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-b from-yellow-300 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          ★ PRODUTOS ★
        </h2>
        <div className="w-40 h-1 mx-auto mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-lg overflow-hidden border-4 border-yellow-400 shadow-[8px_8px_0_0_rgba(251,191,36,1)]"
          >
            <div className="h-48 relative overflow-hidden">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-yellow-400 text-black font-black px-3 py-1 text-sm transform rotate-12">
                HOT!
              </div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mt-4">{product.title}</h3>
              <p className="text-purple-200 mt-3 text-sm">{product.description}</p>
              <a href={product.downloadUrl} className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded hover:from-orange-500 hover:to-pink-500 transition-all">
                <Download className="w-4 h-4" /> BAIXAR
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Retro Horizontal Scroll */}
    <section>
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-b from-cyan-300 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          ★ SERVIÇOS ★
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-b from-cyan-600 to-purple-700 p-6 rounded-lg border-4 border-cyan-300 text-center transform hover:scale-105 transition-transform shadow-[4px_4px_0_0_rgba(103,232,249,1)]"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-black text-black">
              ★
            </div>
            <h3 className="text-lg font-bold text-cyan-200 mt-4">{service.title}</h3>
            <p className="text-cyan-100/70 mt-2 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Minimal Layout - Clean zen style
const MinimalProducts = () => (
  <div className="space-y-32">
    {/* Products - Minimal Cards */}
    <section>
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground">Coleção</span>
        <h2 className="text-4xl md:text-5xl font-light mt-2">Produtos</h2>
        <div className="w-16 h-px mx-auto mt-6 bg-foreground/20" />
      </div>
      <div className="space-y-16">
        {PRODUCTS.slice(0, 3).map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className={`aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-light">{product.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              <a href={product.downloadUrl} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all">
                Download <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Minimal List */}
    <section>
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground">O que oferecemos</span>
        <h2 className="text-4xl md:text-5xl font-light mt-2">Serviços</h2>
        <div className="w-16 h-px mx-auto mt-6 bg-foreground/20" />
      </div>
      <div className="max-w-3xl mx-auto divide-y divide-foreground/10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-8 flex justify-between items-center group cursor-pointer"
          >
            <div>
              <h3 className="text-xl font-light group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Cards Layout - Stacked cards
const CardsProducts = () => (
  <div className="space-y-20">
    {/* Products - Stacked Cards */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Produtos
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-card border-2 border-border rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl"
            >
              <div className="w-full md:w-1/3 h-48 md:h-auto">
                <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                    Destaque #{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-muted-foreground mt-3">{product.description}</p>
                </div>
                <a href={product.downloadUrl} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity w-fit">
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services - Circular Cards */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Serviços
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors shadow-lg">
              <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold mt-4">{service.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Gradient Layout - Flowing gradients
const GradientProducts = () => (
  <div className="space-y-20">
    {/* Products - Gradient Cards */}
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-3xl" />
      <div className="relative p-8 md:p-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-background/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <div className="h-48 relative">
                  <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{product.description}</p>
                  <a href={product.downloadUrl} className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services - Gradient List */}
    <section>
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Serviços
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 flex items-center gap-6 hover:from-primary/10 transition-colors"
          >
            <div className="w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
              0{index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
            <ArrowRight className="w-6 h-6 text-primary" />
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Split Layout - Alternating split
const SplitProducts = () => (
  <div className="space-y-20">
    {/* Products - Split Layout */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Produtos</h2>
      <div className="space-y-0">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 h-64 md:h-80">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'bg-accent/50' : 'bg-muted/50'}`}>
              <h3 className="text-2xl font-bold">{product.title}</h3>
              <p className="text-muted-foreground mt-4">{product.description}</p>
              <a href={product.downloadUrl} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium w-fit hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4" /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Split Grid */}
    <section>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`p-8 md:p-12 ${index % 2 === 0 ? 'bg-accent/30' : 'bg-muted/30'} border border-border/50`}
          >
            <span className="text-5xl font-black text-foreground/10">0{index + 1}</span>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-muted-foreground mt-3">{service.description}</p>
            <a href={service.linkUrl} className="mt-4 inline-flex items-center gap-2 text-primary hover:gap-4 transition-all">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Magazine Layout - Editorial magazine
const MagazineProducts = () => (
  <div className="space-y-20">
    {/* Products - Magazine Featured */}
    <section>
      <div className="border-y-2 border-foreground py-4 mb-12">
        <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-center">Produtos</h2>
      </div>
      {PRODUCTS.slice(0, 1).map((product) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="md:col-span-2 aspect-[16/10] overflow-hidden">
            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Destaque</span>
            <h3 className="text-3xl font-serif font-bold mt-2">{product.title}</h3>
            <p className="text-muted-foreground mt-4 leading-relaxed">{product.description}</p>
            <a href={product.downloadUrl} className="mt-6 inline-flex items-center gap-2 font-medium hover:text-primary transition-colors">
              Baixar Agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.slice(1).map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="aspect-[4/3] overflow-hidden mb-4">
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif font-bold">{product.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm line-clamp-2">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services - Magazine Columns */}
    <section>
      <div className="border-y-2 border-foreground py-4 mb-12">
        <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-center">Serviços</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-l-2 border-foreground/20 pl-6"
          >
            <span className="text-4xl font-serif font-black text-muted-foreground/30">0{index + 1}</span>
            <h3 className="text-lg font-serif font-bold mt-2">{service.title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Corporate Navy Layout - Professional executive style
const CorporateNavyProducts = () => (
  <div className="space-y-20">
    {/* Products Section */}
    <section className="space-y-10">
      <div className="flex items-end justify-between border-b-2 border-primary/30 pb-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Materiais Exclusivos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 tracking-tight">Nossos Produtos</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image with overlay */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 md:hidden">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">
                    Produto #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <span className="hidden md:inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium uppercase tracking-wider mb-3">
                    Produto #{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                {product.downloadUrl && (
                  <a
                    href={product.downloadUrl}
                    className="mt-5 inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm w-fit"
                  >
                    <Download className="w-4 h-4" />
                    Download Gratuito
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services Section */}
    <section className="space-y-10">
      <div className="flex items-end justify-between border-b-2 border-primary/30 pb-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Soluções Profissionais</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 tracking-tight">Nossos Serviços</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-lg font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              
              {service.linkUrl && (
                <a
                  href={service.linkUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

// Map layouts to themes - using actual theme IDs from ThemeContext
const layoutThemes: string[] = ['magazine-editorial', 'brutalist-raw', 'split-screen', 'glassmorphism', 'gradient-flow', 'card-stack', 'retro-wave', 'neon-gamer', 'nature-organic', 'minimal-zen', 'corporate-navy'];

const layoutMap: Record<string, React.FC> = {
  'magazine-editorial': EditorialProducts,
  'brutalist-raw': BrutalistProducts,
  'split-screen': SplitProducts,
  'glassmorphism': GlassProducts,
  'gradient-flow': GradientProducts,
  'card-stack': CardsProducts,
  'retro-wave': RetroProducts,
  'neon-gamer': NeonProducts,
  'nature-organic': MagazineProducts,
  'minimal-zen': MinimalProducts,
  'corporate-navy': CorporateNavyProducts,
};

const ThemedProductsSection = () => {
  const { currentTheme } = useTheme();
  
  // Check if current theme has a unique layout
  if (layoutThemes.includes(currentTheme)) {
    const LayoutComponent = layoutMap[currentTheme];
    if (LayoutComponent) {
      return <LayoutComponent />;
    }
  }
  
  // Return null for non-layout themes (they will use default ProductsSection)
  return null;
};

export default ThemedProductsSection;
