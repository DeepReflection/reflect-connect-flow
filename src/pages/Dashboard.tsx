import { ArrowLeft, TrendingUp, HelpCircle, Clock, FileText, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TRENDING_QUESTIONS = [
  { id: 1, question: "Qual foi o papel do Brasil na Segunda Guerra Mundial?", views: 342 },
  { id: 2, question: "Como foi a Batalha de Stalingrado?", views: 289 },
  { id: 3, question: "Quem foi o General Patton?", views: 256 },
  { id: 4, question: "O que foi o Dia D?", views: 234 },
  { id: 5, question: "Como terminou a guerra no Pacífico?", views: 198 },
];

const FREQUENT_QUESTIONS = [
  { id: 1, question: "Quando começou a Segunda Guerra Mundial?", count: 1245 },
  { id: 2, question: "Quantas pessoas morreram na Segunda Guerra?", count: 1102 },
  { id: 3, question: "Quais países participaram da Segunda Guerra?", count: 987 },
  { id: 4, question: "O que foi o Holocausto?", count: 876 },
  { id: 5, question: "Como foi a participação da FEB?", count: 754 },
];

const RECENT_QUESTIONS = [
  { id: 1, question: "Qual foi a importância da Batalha de Midway?", time: "2 min atrás" },
  { id: 2, question: "Como funcionavam os códigos Enigma?", time: "15 min atrás" },
  { id: 3, question: "Quem foi Winston Churchill?", time: "32 min atrás" },
  { id: 4, question: "O que aconteceu em Pearl Harbor?", time: "1 hora atrás" },
  { id: 5, question: "Como foi a resistência francesa?", time: "2 horas atrás" },
];

const STATS = [
  { label: "Conteúdos", value: 1677, icon: FileText },
  { label: "Expressões", value: 0, icon: Sparkles },
  { label: "Conversas", value: 423, icon: MessageSquare },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>
            <div className="h-6 w-px bg-slate-200" />
            <h1 className="text-xl font-semibold text-slate-900">Dashboard de Insights</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {STATS.map((stat) => (
            <Card key={stat.label} className="bg-white border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      {stat.value.toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-full">
                    <stat.icon className="w-6 h-6 text-slate-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Questions Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trending Questions */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Perguntas em Alta
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {TRENDING_QUESTIONS.map((item, index) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700 leading-tight">{item.question}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.views} visualizações</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Frequent Questions */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <HelpCircle className="w-5 h-5 text-blue-500" />
                Perguntas Frequentes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {FREQUENT_QUESTIONS.map((item, index) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700 leading-tight">{item.question}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.count.toLocaleString('pt-BR')} vezes</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Recent Questions */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Clock className="w-5 h-5 text-green-500" />
                Últimas Perguntas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {RECENT_QUESTIONS.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700 leading-tight">{item.question}</p>
                      <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Resumo de Atividades
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Artigos publicados</span>
                  <span className="text-sm font-medium text-slate-900">6</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Categorias ativas</span>
                  <span className="text-sm font-medium text-slate-900">3</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Personagens documentados</span>
                  <span className="text-sm font-medium text-slate-900">16</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-slate-600">Eventos agendados</span>
                  <span className="text-sm font-medium text-slate-900">2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Engajamento
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Visitantes hoje</span>
                  <span className="text-sm font-medium text-slate-900">127</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Tempo médio na página</span>
                  <span className="text-sm font-medium text-slate-900">4:32</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-sm text-slate-600">Taxa de retorno</span>
                  <span className="text-sm font-medium text-slate-900">68%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-slate-600">Compartilhamentos</span>
                  <span className="text-sm font-medium text-slate-900">45</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
