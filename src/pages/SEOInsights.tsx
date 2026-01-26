import { ArrowLeft, TrendingUp, TrendingDown, Globe, Link2, Search, FileText, Users, Eye, MousePointer, Clock, Shield, AlertTriangle, CheckCircle, ExternalLink, BarChart3, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

// Mock data for charts
const trafficTrendData = [
  { month: 'Jan', organic: 4200, direct: 2400, social: 1800, referral: 800 },
  { month: 'Fev', organic: 4800, direct: 2600, social: 2100, referral: 900 },
  { month: 'Mar', organic: 5200, direct: 2800, social: 2400, referral: 1100 },
  { month: 'Abr', organic: 6100, direct: 3100, social: 2800, referral: 1300 },
  { month: 'Mai', organic: 7200, direct: 3400, social: 3200, referral: 1500 },
  { month: 'Jun', organic: 8500, direct: 3800, social: 3600, referral: 1800 },
];

const keywordRankingData = [
  { week: 'Sem 1', position: 45 },
  { week: 'Sem 2', position: 38 },
  { week: 'Sem 3', position: 32 },
  { week: 'Sem 4', position: 28 },
  { week: 'Sem 5', position: 22 },
  { week: 'Sem 6', position: 18 },
  { week: 'Sem 7', position: 15 },
  { week: 'Sem 8', position: 12 },
];

const backlinksData = [
  { month: 'Jan', gained: 45, lost: 12 },
  { month: 'Fev', gained: 62, lost: 8 },
  { month: 'Mar', gained: 78, lost: 15 },
  { month: 'Abr', gained: 95, lost: 10 },
  { month: 'Mai', gained: 110, lost: 18 },
  { month: 'Jun', gained: 135, lost: 14 },
];

const trafficSourcesData = [
  { name: 'Orgânico', value: 52, color: '#3b82f6' },
  { name: 'Direto', value: 23, color: '#10b981' },
  { name: 'Social', value: 18, color: '#f59e0b' },
  { name: 'Referência', value: 7, color: '#8b5cf6' },
];

const topKeywords = [
  { keyword: 'segunda guerra mundial brasil', position: 3, volume: 12400, difficulty: 45, change: 2 },
  { keyword: 'feb segunda guerra', position: 5, volume: 8900, difficulty: 38, change: -1 },
  { keyword: 'história segunda guerra', position: 8, volume: 22100, difficulty: 62, change: 3 },
  { keyword: 'batalhas segunda guerra mundial', position: 12, volume: 6700, difficulty: 41, change: 5 },
  { keyword: 'veteranos brasileiros ww2', position: 15, volume: 3200, difficulty: 28, change: 0 },
  { keyword: 'pracinhas brasileiros', position: 18, volume: 4500, difficulty: 32, change: -2 },
];

const topPages = [
  { url: '/blog/participacao-brasil-segunda-guerra', views: 15420, avgTime: '4:32', bounceRate: 32 },
  { url: '/blog/batalha-monte-castelo', views: 12890, avgTime: '5:18', bounceRate: 28 },
  { url: '/blog/feb-forcas-expedicionarias', views: 9870, avgTime: '3:45', bounceRate: 38 },
  { url: '/blog/herois-brasileiros-guerra', views: 8540, avgTime: '4:12', bounceRate: 35 },
  { url: '/blog/dia-d-historia-completa', views: 7230, avgTime: '6:02', bounceRate: 25 },
];

const technicalIssues = [
  { type: 'critical', count: 2, label: 'Páginas sem meta description' },
  { type: 'warning', count: 5, label: 'Imagens sem alt text' },
  { type: 'warning', count: 3, label: 'Links internos quebrados' },
  { type: 'info', count: 8, label: 'Títulos muito longos' },
  { type: 'info', count: 12, label: 'URLs não otimizadas' },
];

const competitors = [
  { name: 'historia-ww2.com.br', authority: 65, keywords: 1250, traffic: 85000 },
  { name: 'guerramundial.org', authority: 58, keywords: 980, traffic: 62000 },
  { name: 'memoriasguerra.com', authority: 52, keywords: 720, traffic: 45000 },
];

const coreWebVitals = [
  { metric: 'LCP', value: 2.1, unit: 's', status: 'good', target: '< 2.5s' },
  { metric: 'FID', value: 45, unit: 'ms', status: 'good', target: '< 100ms' },
  { metric: 'CLS', value: 0.08, unit: '', status: 'warning', target: '< 0.1' },
  { metric: 'TTFB', value: 0.4, unit: 's', status: 'good', target: '< 0.8s' },
];

const chartConfig = {
  organic: { label: 'Orgânico', color: '#3b82f6' },
  direct: { label: 'Direto', color: '#10b981' },
  social: { label: 'Social', color: '#f59e0b' },
  referral: { label: 'Referência', color: '#8b5cf6' },
  gained: { label: 'Ganhos', color: '#10b981' },
  lost: { label: 'Perdidos', color: '#ef4444' },
  position: { label: 'Posição', color: '#3b82f6' },
};

const SEOInsights = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Voltar</span>
              </Link>
              <div className="h-6 w-px bg-slate-200" />
              <div>
                <h1 className="text-xl font-semibold text-slate-900">SEO Insights</h1>
                <p className="text-sm text-slate-500">Análise completa de performance</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>Atualizado há 2 horas</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">Domain Authority</span>
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">47</span>
                <span className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />+3
                </span>
              </div>
              <Progress value={47} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">Tráfego Orgânico</span>
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">8.5K</span>
                <span className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />+18%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">vs. mês anterior</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">Backlinks</span>
                <Link2 className="w-5 h-5 text-purple-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">1,247</span>
                <span className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />+135
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">de 342 domínios</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">Keywords Ranqueadas</span>
                <Search className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">523</span>
                <span className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />+47
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Top 100 do Google</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Traffic Trend */}
          <Card className="lg:col-span-2 bg-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Tendência de Tráfego</CardTitle>
              <CardDescription>Visitas por fonte nos últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <AreaChart data={trafficTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="organic" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="direct" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="social" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="referral" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Traffic Sources Pie */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900">Fontes de Tráfego</CardTitle>
              <CardDescription>Distribuição atual</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <PieChart>
                  <Pie
                    data={trafficSourcesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {trafficSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {trafficSourcesData.map((source) => (
                  <div key={source.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                    <span className="text-xs text-slate-600">{source.name}: {source.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="keywords" className="mb-8">
          <TabsList className="bg-white border border-slate-200 p-1">
            <TabsTrigger value="keywords" className="data-[state=active]:bg-slate-100">
              <Search className="w-4 h-4 mr-2" />
              Keywords
            </TabsTrigger>
            <TabsTrigger value="pages" className="data-[state=active]:bg-slate-100">
              <FileText className="w-4 h-4 mr-2" />
              Páginas
            </TabsTrigger>
            <TabsTrigger value="backlinks" className="data-[state=active]:bg-slate-100">
              <Link2 className="w-4 h-4 mr-2" />
              Backlinks
            </TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-slate-100">
              <Zap className="w-4 h-4 mr-2" />
              Técnico
            </TabsTrigger>
            <TabsTrigger value="competitors" className="data-[state=active]:bg-slate-100">
              <Target className="w-4 h-4 mr-2" />
              Concorrentes
            </TabsTrigger>
          </TabsList>

          {/* Keywords Tab */}
          <TabsContent value="keywords" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Evolução de Ranking</CardTitle>
                  <CardDescription>Posição média das top keywords</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[250px] w-full">
                    <LineChart data={keywordRankingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
                      <YAxis reversed stroke="#64748b" fontSize={12} domain={[1, 50]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="position" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2 }} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Top Keywords</CardTitle>
                  <CardDescription>Melhores posições no Google</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left text-xs font-medium text-slate-500 px-4 py-3">Keyword</th>
                          <th className="text-center text-xs font-medium text-slate-500 px-2 py-3">Pos.</th>
                          <th className="text-center text-xs font-medium text-slate-500 px-2 py-3">Vol.</th>
                          <th className="text-center text-xs font-medium text-slate-500 px-2 py-3">Δ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topKeywords.map((kw, index) => (
                          <tr key={index} className="border-b border-slate-100 last:border-0">
                            <td className="text-sm text-slate-700 px-4 py-3 max-w-[200px] truncate">{kw.keyword}</td>
                            <td className="text-center">
                              <span className="inline-flex items-center justify-center w-8 h-6 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                {kw.position}
                              </span>
                            </td>
                            <td className="text-center text-xs text-slate-500">{(kw.volume / 1000).toFixed(1)}K</td>
                            <td className="text-center">
                              {kw.change > 0 ? (
                                <span className="text-green-600 text-xs flex items-center justify-center">
                                  <TrendingUp className="w-3 h-3 mr-0.5" />+{kw.change}
                                </span>
                              ) : kw.change < 0 ? (
                                <span className="text-red-500 text-xs flex items-center justify-center">
                                  <TrendingDown className="w-3 h-3 mr-0.5" />{kw.change}
                                </span>
                              ) : (
                                <span className="text-slate-400 text-xs">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pages Tab */}
          <TabsContent value="pages" className="mt-6">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Páginas com Melhor Performance</CardTitle>
                <CardDescription>Métricas de engajamento por página</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="text-left text-xs font-medium text-slate-500 px-6 py-3">URL</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Visualizações</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Tempo Médio</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Bounce Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPages.map((page, index) => (
                        <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-blue-600 hover:underline cursor-pointer">{page.url}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Eye className="w-4 h-4 text-slate-400" />
                              <span className="text-sm font-medium text-slate-700">{page.views.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Clock className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-slate-600">{page.avgTime}</span>
                            </div>
                          </td>
                          <td className="text-center">
                            <span className={`text-sm font-medium ${page.bounceRate < 35 ? 'text-green-600' : 'text-orange-500'}`}>
                              {page.bounceRate}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Backlinks Tab */}
          <TabsContent value="backlinks" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Evolução de Backlinks</CardTitle>
                  <CardDescription>Links ganhos vs perdidos por mês</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <BarChart data={backlinksData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="gained" fill="#10b981" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="lost" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Resumo de Backlinks</CardTitle>
                  <CardDescription>Métricas do perfil de links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-500">Total de Backlinks</p>
                        <p className="text-2xl font-bold text-slate-900">1,247</p>
                      </div>
                      <Link2 className="w-10 h-10 text-blue-500" />
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-500">Domínios Referenciadores</p>
                        <p className="text-2xl font-bold text-slate-900">342</p>
                      </div>
                      <Globe className="w-10 h-10 text-purple-500" />
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-500">Links Dofollow</p>
                        <p className="text-2xl font-bold text-slate-900">78%</p>
                      </div>
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Core Web Vitals</CardTitle>
                  <CardDescription>Métricas de performance do Google</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {coreWebVitals.map((vital) => (
                      <div key={vital.metric} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${vital.status === 'good' ? 'bg-green-500' : vital.status === 'warning' ? 'bg-orange-500' : 'bg-red-500'}`} />
                          <div>
                            <p className="text-sm font-medium text-slate-700">{vital.metric}</p>
                            <p className="text-xs text-slate-400">Meta: {vital.target}</p>
                          </div>
                        </div>
                        <span className={`text-lg font-bold ${vital.status === 'good' ? 'text-green-600' : vital.status === 'warning' ? 'text-orange-500' : 'text-red-500'}`}>
                          {vital.value}{vital.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">Problemas Técnicos</CardTitle>
                  <CardDescription>Issues que precisam de atenção</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {technicalIssues.map((issue, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg">
                        {issue.type === 'critical' ? (
                          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        ) : issue.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm text-slate-700">{issue.label}</p>
                        </div>
                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                          issue.type === 'critical' ? 'bg-red-100 text-red-700' :
                          issue.type === 'warning' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {issue.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Competitors Tab */}
          <TabsContent value="competitors" className="mt-6">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Análise de Concorrentes</CardTitle>
                <CardDescription>Comparação com principais competidores do nicho</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="text-left text-xs font-medium text-slate-500 px-6 py-3">Domínio</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Autoridade</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Keywords</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Tráfego Est.</th>
                        <th className="text-center text-xs font-medium text-slate-500 px-4 py-3">Comparação</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 bg-blue-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-blue-700">Seu site</span>
                          </div>
                        </td>
                        <td className="text-center">
                          <span className="text-sm font-bold text-blue-700">47</span>
                        </td>
                        <td className="text-center text-sm text-slate-600">523</td>
                        <td className="text-center text-sm text-slate-600">8.5K</td>
                        <td className="text-center">—</td>
                      </tr>
                      {competitors.map((comp, index) => (
                        <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-slate-700">{comp.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </div>
                          </td>
                          <td className="text-center">
                            <span className={`text-sm font-medium ${comp.authority > 47 ? 'text-red-600' : 'text-green-600'}`}>
                              {comp.authority}
                            </span>
                          </td>
                          <td className="text-center text-sm text-slate-600">{comp.keywords.toLocaleString()}</td>
                          <td className="text-center text-sm text-slate-600">{(comp.traffic / 1000).toFixed(1)}K</td>
                          <td className="text-center">
                            {comp.authority > 47 ? (
                              <span className="text-xs text-red-600 flex items-center justify-center gap-1">
                                <TrendingDown className="w-3 h-3" />-{comp.authority - 47}
                              </span>
                            ) : (
                              <span className="text-xs text-green-600 flex items-center justify-center gap-1">
                                <TrendingUp className="w-3 h-3" />+{47 - comp.authority}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Melhore seu SEO agora</h3>
                <p className="text-blue-100 text-sm">Siga as recomendações para subir no ranking do Google</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm">
                  Ver Recomendações
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition-colors text-sm">
                  Gerar Relatório
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SEOInsights;
