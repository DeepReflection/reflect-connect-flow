import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
}

const PRODUCTS: Product[] = [
  {
    title: "Dia D: A Verdade Por Trás da Batalha da Normandia",
    description: "Imagine o som do mar calmo, quebrando suavemente na areia. Agora, imagine esse som sendo subitamente engolido por um rugido ensurdecedor, um prenúncio de algo que mudaria o curso da história para sempre.",
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
  {
    title: "O Dia D: A Invasão da Normandia que Mudou a Guerra",
    description: "Uma análise profunda dos eventos que marcaram o dia 6 de junho de 1944 e mudaram o rumo da Segunda Guerra Mundial.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    downloadUrl: "#",
  },
];

const ProductsSection = () => {
  return (
    <section className="space-y-6">
      <SectionTitle title="Produtos & Serviços" />
      
      <div className="space-y-4">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 h-40 sm:h-auto">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-foreground/70 line-clamp-3">
                    {product.description}
                  </p>
                </div>
                {product.downloadUrl && (
                  <motion.a
                    href={product.downloadUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-medium text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
