import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Zap, 
  Calendar,
  FileText,
  TrendingUp,
  Filter,
  LayoutGrid,
  List
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeSelector from '@/components/ThemeSelector';
import AutomationProjectCard from '@/components/blog/AutomationProjectCard';
import AutomationProjectForm from '@/components/blog/AutomationProjectForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { sampleProjects } from '@/data/automationProjects';
import { AutomationProject, ProjectStatus, statusLabels } from '@/types/blogAutomation';

type ViewMode = 'grid' | 'list';
type FilterStatus = 'all' | ProjectStatus;

const BlogAutomation = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<AutomationProject[]>(sampleProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<AutomationProject | null>(null);
  const [deletingProject, setDeletingProject] = useState<AutomationProject | null>(null);

  // Stats
  const stats = useMemo(() => ({
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    totalPosts: projects.reduce((acc, p) => acc + p.postsGenerated, 0),
  }), [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.theme.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [projects, searchQuery, filterStatus]);

  const handleCreateProject = (data: any) => {
    const newProject: AutomationProject = {
      id: Date.now().toString(),
      ...data,
      status: 'draft',
      postsGenerated: 0,
      nextRunDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setProjects(prev => [newProject, ...prev]);
    toast({
      title: 'Projeto criado!',
      description: 'Seu projeto de automação foi criado com sucesso.',
    });
  };

  const handleEditProject = (data: any) => {
    if (!editingProject) return;
    setProjects(prev => prev.map(p => 
      p.id === editingProject.id 
        ? { ...p, ...data, updatedAt: new Date() }
        : p
    ));
    setEditingProject(null);
    toast({
      title: 'Projeto atualizado!',
      description: 'As alterações foram salvas com sucesso.',
    });
  };

  const handleDeleteProject = () => {
    if (!deletingProject) return;
    setProjects(prev => prev.filter(p => p.id !== deletingProject.id));
    setDeletingProject(null);
    toast({
      title: 'Projeto excluído',
      description: 'O projeto foi removido permanentemente.',
      variant: 'destructive',
    });
  };

  const handleToggleStatus = (project: AutomationProject) => {
    const newStatus: ProjectStatus = project.status === 'active' ? 'paused' : 'active';
    setProjects(prev => prev.map(p =>
      p.id === project.id
        ? { ...p, status: newStatus, updatedAt: new Date() }
        : p
    ));
    toast({
      title: newStatus === 'active' ? 'Automação ativada!' : 'Automação pausada',
      description: newStatus === 'active' 
        ? 'Os artigos serão gerados conforme programado.'
        : 'A geração de artigos foi pausada.',
    });
  };

  const openEditForm = (project: AutomationProject) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeSelector />
      <ParticleBackground />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Voltar ao Blog</span>
            </Link>
          </div>
          <Button onClick={() => setIsFormOpen(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Projeto
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Automação Inteligente</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projetos de Automação
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crie projetos para gerar artigos automaticamente com IA. 
              Configure temas e agende publicações recorrentes.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          >
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <LayoutGrid className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                  <p className="text-sm text-muted-foreground">Projetos Criados</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.active}</p>
                  <p className="text-sm text-muted-foreground">Projetos Ativos</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalPosts}</p>
                  <p className="text-sm text-muted-foreground">Artigos Gerados</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="relative z-10 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar projetos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v as FilterStatus)}>
                <SelectTrigger className="w-[140px] bg-card border-border">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">{statusLabels.active}</SelectItem>
                  <SelectItem value="paused">{statusLabels.paused}</SelectItem>
                  <SelectItem value="draft">{statusLabels.draft}</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border border-border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-4'
            }>
              {filteredProjects.map((project, index) => (
                <AutomationProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onEdit={openEditForm}
                  onDelete={setDeletingProject}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {searchQuery || filterStatus !== 'all' 
                  ? 'Nenhum projeto encontrado'
                  : 'Nenhum projeto criado ainda'
                }
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                {searchQuery || filterStatus !== 'all'
                  ? 'Tente ajustar os filtros de busca.'
                  : 'Crie seu primeiro projeto de automação para começar a gerar artigos automaticamente.'
                }
              </p>
              {!searchQuery && filterStatus === 'all' && (
                <Button onClick={() => setIsFormOpen(true)} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Criar Primeiro Projeto
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Form Dialog */}
      <AutomationProjectForm
        open={isFormOpen}
        onOpenChange={closeForm}
        project={editingProject}
        onSave={editingProject ? handleEditProject : handleCreateProject}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingProject} onOpenChange={() => setDeletingProject(null)}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir projeto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. O projeto "{deletingProject?.name}" será 
              removido permanentemente junto com todo o histórico de geração.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteProject}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © 2024 Outro Brasileiro no D-Day
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          Automação de conteúdo com inteligência artificial
        </p>
      </footer>
    </div>
  );
};

export default BlogAutomation;
