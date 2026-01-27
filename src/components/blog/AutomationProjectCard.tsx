import { motion } from 'framer-motion';
import { Calendar, Clock, Edit2, MoreVertical, Pause, Play, Trash2, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { AutomationProject, recurrenceLabels, statusLabels, statusColors } from '@/types/blogAutomation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AutomationProjectCardProps {
  project: AutomationProject;
  index: number;
  onEdit: (project: AutomationProject) => void;
  onDelete: (project: AutomationProject) => void;
  onToggleStatus: (project: AutomationProject) => void;
}

const AutomationProjectCard = ({
  project,
  index,
  onEdit,
  onDelete,
  onToggleStatus,
}: AutomationProjectCardProps) => {
  const isActive = project.status === 'active';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>
                  {statusLabels[project.status]}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {recurrenceLabels[project.recurrence]}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors">
                {project.name}
              </h3>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                <DropdownMenuItem onClick={() => onEdit(project)} className="cursor-pointer">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Editar Projeto
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onToggleStatus(project)} className="cursor-pointer">
                  {isActive ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pausar Automação
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Ativar Automação
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => onDelete(project)} 
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Excluir Projeto
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground font-medium mb-1">Tema</p>
            <p className="text-sm text-foreground line-clamp-2">{project.theme}</p>
          </div>
          
          {project.description && (
            <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
          )}
          
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>{project.postsGenerated} posts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{project.scheduledTime}</span>
              </div>
            </div>
            
            {project.status !== 'draft' && (
              <div className="flex items-center gap-1.5 text-xs">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary font-medium">
                  {format(new Date(project.nextRunDate), "dd MMM", { locale: ptBR })}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AutomationProjectCard;
