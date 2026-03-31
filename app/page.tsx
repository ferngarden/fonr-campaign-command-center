'use client';

import React, { useState } from 'react';
import {
  Menu,
  BarChart3,
  CheckSquare,
  Users,
  Radio,
  TrendingUp,
  Calendar,
  Search,
  Settings,
  ChevronRight,
  CheckCircle2,
  Circle,
  TrendingDown,
  ArrowRight,
  Award,
  Target,
  Mail,
  Zap,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

type Tab = 'overview' | 'tasks' | 'segments' | 'channels' | 'pipeline' | 'timeline';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  phase: number;
}

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [tasks, setTasks] = useState<Task[]>([
    // Phase 1: Strategy & Setup (4/4)
    { id: 1, title: 'Define target segments (RMD + DINK)', completed: true, phase: 1 },
    { id: 2, title: 'Set campaign budget ($30K paid + $60K Google Grants)', completed: true, phase: 1 },
    { id: 3, title: 'Map channel strategy per segment', completed: true, phase: 1 },
    { id: 4, title: 'Design AI scoring pipeline architecture', completed: true, phase: 1 },
    // Phase 2: Pre-Launch Build (2/10)
    { id: 5, title: 'Build donor enrichment pipeline (SmartyStreets + Zillow + FEC)', completed: true, phase: 2 },
    { id: 6, title: 'Configure Claude AI scoring agent', completed: true, phase: 2 },
    { id: 7, title: 'Design direct mail piece (RMD segment)', completed: false, phase: 2 },
    { id: 8, title: 'Create Meta ad creatives (DINK segment)', completed: false, phase: 2 },
    { id: 9, title: 'Set up Google Grants campaigns', completed: false, phase: 2 },
    { id: 10, title: 'Build landing pages (RMD + DINK variants)', completed: false, phase: 2 },
    { id: 11, title: 'Configure SMS opt-in flows', completed: false, phase: 2 },
    { id: 12, title: 'Set up display retargeting pixels', completed: false, phase: 2 },
    { id: 13, title: 'Design email nurture sequences', completed: false, phase: 2 },
    { id: 14, title: 'QA scoring pipeline with test data', completed: false, phase: 2 },
    // Phase 3: Launch & Execute (0/8)
    { id: 15, title: 'DM Wave 1 - Send RMD segment', completed: false, phase: 3 },
    { id: 16, title: 'Meta Ads launch - DINK segment', completed: false, phase: 3 },
    { id: 17, title: 'Activate Google Grants campaigns', completed: false, phase: 3 },
    { id: 18, title: 'Launch SMS campaigns', completed: false, phase: 3 },
    { id: 19, title: 'Enable display retargeting ads', completed: false, phase: 3 },
    { id: 20, title: 'Deploy email nurture sequences', completed: false, phase: 3 },
    { id: 21, title: 'DM Wave 2 - Follow-up mailing', completed: false, phase: 3 },
    { id: 22, title: 'Year-end giving push - all channels', completed: false, phase: 3 },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const phaseData = [
    { phase: 1, name: 'Strategy & Setup', total: 4, completed: 4 },
    { phase: 2, name: 'Pre-Launch Build', total: 10, completed: 2 },
    { phase: 3, name: 'Launch & Execute', total: 8, completed: 0 },
  ];

  const tasksComplete = tasks.filter(t => t.completed).length;
  const budgetAllocated = 30000;
  const budgetTotal = 90000;

  const budgetChartData = [
    { name: 'Direct Mail RMD', value: 10500, fill: '#8B6914' },
    { name: 'Meta Ads', value: 9000, fill: '#999999' },
    { name: 'Display', value: 4500, fill: '#16a34a' },
    { name: 'Other', value: 6000, fill: '#E5E5E5' },
  ];

  const timelineData = [
    { name: 'Pre-Launch Build', start: 0, duration: 60, color: '#f59e0b' },
    { name: 'DM Wave 1', start: 60, duration: 30, color: '#8B6914' },
    { name: 'Meta Ads', start: 60, duration: 90, color: '#999999' },
    { name: 'Google Grants', start: 60, duration: 210, color: '#4285f4' },
    { name: 'SMS', start: 90, duration: 60, color: '#7c3aed' },
    { name: 'Display', start: 90, duration: 120, color: '#16a34a' },
    { name: 'DM Wave 2', start: 150, duration: 60, color: '#8B6914' },
    { name: 'Year-End Push', start: 210, duration: 60, color: '#ec4899' },
  ];

  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const renderNavIcon = (tabName: Tab) => {
    const iconProps = { size: 20 };
    switch (tabName) {
      case 'overview':
        return <BarChart3 {...iconProps} />;
      case 'tasks':
        return <CheckSquare {...iconProps} />;
      case 'segments':
        return <Users {...iconProps} />;
      case 'channels':
        return <Radio {...iconProps} />;
      case 'pipeline':
        return <TrendingUp {...iconProps} />;
      case 'timeline':
        return <Calendar {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-fonr-cream flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo Area */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-fonr-gold rounded-lg flex items-center justify-center text-white font-bold text-lg">
              FN
            </div>
            <div>
              <div className="font-bold text-fonr-dark">FONR</div>
              <div className="text-xs text-fonr-gray">Command Center</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'tasks', label: 'Tasks' },
            { id: 'segments', label: 'Segments' },
            { id: 'channels', label: 'Channels' },
            { id: 'pipeline', label: 'Pipeline' },
            { id: 'timeline', label: 'Timeline' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-fonr-gold text-white'
                  : 'text-fonr-gray hover:bg-gray-100'
              }`}
            >
              {renderNavIcon(item.id as Tab)}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-fonr-gray">
            FONR Campaign Command Center v0.1.0
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center flex-1 gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fonr-gray" size={18} />
                <input
                  type="text"
                  placeholder="Search campaigns, segments..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-fonr-gold"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
              <span className="text-sm font-medium text-fonr-dark">Q3 2026 Donor Acquisition</span>
              <ChevronRight size={16} className="text-fonr-gray" />
</div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={20} className="text-fonr-gray" />
            </button>
            <div className="w-10 h-10 bg-fonr-gold rounded-full flex items-center justify-center text-white font-bold">
              DF
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {activeTab === 'overview' && (
            <div className="p-8 space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-3xl font-bold text-fonr-dark mb-2">Campaign Overview</h1>
                <p className="text-fonr-gray">Q3 2026 Multichannel Donor Acquisition Campaign</p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-6">
                {/* Tasks Complete */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-fonr-gray mb-1">Tasks Complete</p>
                      <p className="text-3xl font-bold text-fonr-dark">{tasksComplete}</p>
                      <p className="text-sm text-fonr-gray">of 22 total</p>
                    </div>
                    <CheckCircle2 size={32} className="text-fonr-success" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-fonr-success h-2 rounded-full"
                      style={{ width: `${(tasksComplete / 22) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-fonr-gray mt-2">{Math.round((tasksComplete / 22) * 100)}% complete</p>
                </div>

                {/* Campaign Budget */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-fonr-gray mb-1">Campaign Budget</p>
                      <p className="text-2xl font-bold text-fonr-dark">$30K</p>
                      <p className="text-xs text-fonr-gold font-medium">+ $60K Google Grants</p>
                    </div>
                    <Award size={32} className="text-fonr-success" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-fonr-success h-2 rounded-full" style={{ width: '50%' }} />
                  </div>
                  <p className="text-xs text-fonr-gray mt-2">$45K of $90K allocated</p>
                </div>

                {/* Target Segments */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-fonr-gray mb-1">Target Segments</p>
                      <p className="text-3xl font-bold text-fonr-dark">2</p>
                      <p className="text-xs text-fonr-gray">RMD + DINK</p>
                    </div>
                    <Target size={32} className="text-blue-500" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <p className="text-xs text-fonr-gray mt-2">100% defined</p>
                </div>

                {/* Days to Launch */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-fonr-gray mb-1">Days to Launch</p>
                      <p className="text-3xl font-bold text-fonr-dark">62</p>
                      <p className="text-xs text-fonr-gray">July 1, 2026</p>
                    </div>
                    <Calendar size={32} className="text-fonr-gold" />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-fonr-gold h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <p className="text-xs text-fonr-gray mt-2">62% through prep</p>
                </div>
              </div>

              {/* Phase Progress */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-fonr-dark mb-4">Phase Progress</h2>
                <div className="space-y-3">
                  {phaseData.map((phase) => (
                    <div key={phase.phase}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-fonr-dark">{phase.name}</span>
                        <span className="text-sm text-fonr-gray">
                          {phase.completed} / {phase.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full transition-all ${
                            phase.completed === phase.total
                              ? 'bg-fonr-success'
                              : phase.completed > 0
                                ? 'bg-fonr-warning'
                                : 'bg-gray-400'
                          }`}
                          style={{ width: `${(phase.completed / phase.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Allocation & Target Segments */}
              <div className="grid grid-cols-2 gap-6">
                {/* Budget Allocation */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-fonr-dark">Budget Allocation</h2>
                    <span className="px-2 py-1 bg-fonr-gold text-white text-xs font-bold rounded">
                      + $60K Google Grants
                    </span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={budgetChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {budgetChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 text-sm">
                    {budgetChartData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flexitems-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.fill }}
                          />
                          <span className="text-fonr-gray">{item.name}</span>
                        </div>
                        <span className="font-medium text-fonr-dark">
                          ${(item.value / 1000).toFixed(1)}K
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-fonr-dark">Total Paid Budget</span>
                      <span className="text-lg font-bold text-fonr-dark">$30,000</span>
                    </div>
                  </div>
                </div>

                {/* Target Segments */}
                <div className="space-y-4">
                  {/* RMD Segment */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-fonr-dark">RMD Segment</h3>
                        <p className="text-sm text-fonr-gray">Lead: Dan</p>
                      </div>
                      <Users size={20} className="text-fonr-gold" />
                    </div>
                    <p className="text-sm text-fonr-gray">
                      70+ age, $100K+ income, QCD/RMD focus
                    </p>
                  </div>

                  {/* DINK Segment */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-fonr-dark">DINK Segment</h3>
                        <p className="text-sm text-fonr-gray">Lead: Naomi</p>
                      </div>
                      <Users size={20} className="text-blue-500" />
                    </div>
                    <p className="text-sm text-fonr-gray">
                      28-45 age, $150K+ combined, urban professionals
                    </p>
                  </div>

                  {/* AI Pipeline */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h3 className="font-bold text-fonr-dark mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-fonr-gold" />
                      AI Scoring Pipeline
                    </h3>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-fonr-gray">Entry</span>
                      <ArrowRight size={16} className="text-fonr-gold" />
                      <span className="text-fonr-gray">Enrich</span>
                      <ArrowRight size={16} className="text-fonr-gold" />
                      <span className="text-fonr-gray">Score</span>
                      <ArrowRight size={16} className="text-fonr-gold" />
                      <span className="text-fonr-gray">Route</span>
                    </div>
                    <p className="text-xs text-fonr-gold font-medium">
                      ~$110/month vs $3,745/yr for iWave
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Activity */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-fonr-dark mb-4">Team Activity</h2>
                <div className="space-y-4">
   <div className="flex items-start justify-between pb-4 border-b border-gray-200">
                    <div>
                      <p className="font-medium text-fonr-dark">Dan Fernelius</p>
                      <p className="text-sm text-fonr-gray">President</p>
                      <p className="text-sm text-fonr-gray mt-1">
                        RMD segment lead + overall strategy
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      12 active tasks
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-fonr-dark">Naomi</p>
                      <p className="text-sm text-fonr-gray">Outreach Lead</p>
                      <p className="text-sm text-fonr-gray mt-1">
                        DINK segment creative brief
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      4 active tasks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-fonr-dark mb-2">Campaign Tasks</h1>
                <p className="text-fonr-gray">
                  {tasksComplete} of 22 tasks completed ({Math.round((tasksComplete / 22) * 100)}%)
                </p>
              </div>

              {phaseData.map((phase) => {
                const phaseTasks = tasks.filter(t => t.phase === phase.phase);
                const phaseCompleted = phaseTasks.filter(t => t.completed).length;
                const isExpanded = expandedPhase === phase.phase;

                return (
                  <div key={phase.phase} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() =>
                        setExpandedPhase(isExpanded ? null : phase.phase)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-1">
                          <h3 className="font-bold text-fonr-dark">{phase.name}</h3>
                          <p className="text-sm text-fonr-gray">
                            {phaseCompleted} of {phase.total} tasks
                          </p>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              phaseCompleted === phase.total
                                ? 'bg-fonr-success'
                                : phaseCompleted > 0
                                  ? 'bg-fonr-warning'
                                  : 'bg-gray-400'
                            }`}
                            style={{ width: `${(phaseCompleted / phase.total) * 100}%` }}
                          />
                        </div>
                      </div>
                      <ChevronRight
                        size={20}
                        className={`text-fonr-gray transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-6 py-4 space-y-2 border-t border-gray-200">
                        {phaseTasks.map((task) => (
                          <label
                            key={task.id}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all group"
                          >
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => toggleTask(task.id)}
                              className="w-5 h-5 rounded border-gray-300 text-fonr-gold cursor-pointer"
                            />
                            <span
                              className={`flex-1 ${
                                task.completed
                                  ? 'line-through text-fonr-gray'
                                  : 'text-fonr-dark'
                              }`}
                            >
                              {task.title}
                            </span>
                            {task.completed && (
                              <CheckCircle2 size={18} className="text-fonr-success" />
                            )}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'segments' && (
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-fonr-dark mb-2">Target Segments</h1>
                <p className="text-fonr-gray">Two primary donor segments for Q3 campaign</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* RMD Segment */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-fonr-gold rounded-lg flex items-center justify-center text-white">
                      <Target size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-fonr-dark">RMD Households</h2>
                      <p className="text-sm text-fonr-gray">Primary focus: Retirement accounts</p>
                    </div>
                  </div>

                  <div className="space-y-3 py-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-fonr-gray uppercase font-bold">Age</p>
                      <p className="text-lg font-bold text-fonr-dark">65+</p>
                    </div>
                    <div>
                      <p className="text-xs text-fonr-gray uppercase font-bold">Income</p>
                      <p className="text-lg font-bold text-fonr-dark">$100K+</p>
                    </div>
                    <div>
                      <p className="text-xs text-fonr-gray uppercase font-bold">Focus</p>
                      <p className="text-lg font-bold text-fonr-dark">QCD/RMD eligible</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-900">
                      <strong>Key Insight:</strong> Required Minimum Distributions create natural giving trigger
                    </p>
                  </div>

                  <div className="space-y-2 py-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-fonr-dark">Channel Priorities</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-fonr-gold rounded-full" />
                        <span className="text-sm text-fonr-gray">Direct Mail (primary)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-fonr-gold rounded-full" />
                        <span className="text-sm text-fonr-gray">Google Search</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-fonr-gold rounded-full" />
                        <span className="text-sm text-fonr-gray">Email</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 py-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-fonr-dark mb-3">Scoring Tiers</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm text-fonr-dark">HIGH (80+)</span>
                        <span className="text-xs text-green-700 font-medium">Personal outreach</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-sm text-fonr-dark">MEDIUM (50-79)</span>
                        <span className="text-xs text-yellow-700 font-medium">Warm nurture</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                        <span className="text-sm text-fonr-dark">STANDARD (&lt;50)</span>
                        <span className="text-xs text-gray-700 font-medium">Automated drip</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DINK Segment */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      <Target size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-fonr-dark">DINK Households</h2>
                      <p className="text-sm text-fonr-gray">Focus: Young professionals, high income</p>
                    </div>
                  </div>

                  <div className="space-y-3 py-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-fonr-gray uppercase font-bold">Age</p>
                      <p className="text-lg font-bold text-fonr-dark">28-50</p>
                    </div>
                    <div>
                      <p className="text-xs text-fonr-gray uppercase font-bold">Income</p>
                      <p className="text-lg font-bold text-fonr-dark">$150K+ combined</p>
                    </div>
                    <div>
                      <p className="text-xs text-fonr-gray uppercase font-bold">Focus</p>
                      <p className="text-lg font-bold text-fonr-dark">Urban professionals</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="text-sm text-purple-900">
                      <strong>Key Insight:</strong> High discretionary income + social impact motivation
                    </p>
                  </div>

                  <div className="space-y-2 py-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-fonr-dark">Channel Priorities</p>
                    <divclassName="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm text-fonr-gray">Meta/Instagram (primary)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm text-fonr-gray">Display</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm text-fonr-gray">SMS</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 py-4 border-t border-gray-200">
                    <p className="text-sm font-bold text-fonr-dark mb-3">Scoring Tiers</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm text-fonr-dark">HIGH (80+)</span>
                        <span className="text-xs text-green-700 font-medium">Personal outreach</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-sm text-fonr-dark">MEDIUM (50-79)</span>
                        <span className="text-xs text-yellow-700 font-medium">Warm nurture</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                        <span className="text-sm text-fonr-dark">STANDARD (&lt;50)</span>
                        <span className="text-xs text-gray-700 font-medium">Automated drip</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'channels' && (
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-fonr-dark mb-2">Campaign Channels</h1>
                <p className="text-fonr-gray">Multi-channel donor acquisition strategy</p>
              </div>

              {/* Budget Donut Chart */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-fonr-dark mb-4">Budget Distribution</h2>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={budgetChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {budgetChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {budgetChartData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.fill }}
                       />
                        <span className="text-sm text-fonr-gray">{item.name}</span>
                      </div>
                      <span className="font-bold text-fonr-dark">
                        ${(item.value / 1000).toFixed(1)}K
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Grants Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Google Ad Grants</p>
                    <p className="text-3xl font-bold">$60K FREE</p>
                  </div>
                  <Award size={48} className="opacity-80" />
                </div>
              </div>

              {/* AI ROI Comparison */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="font-bold text-fonr-dark mb-2 flex items-center gap-2">
                  <TrendingUp size={20} className="text-fonr-success" />
                  AI Agent ROI Comparison
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-fonr-gray mb-1">Claude AI Agent</p>
                    <p className="text-2xl font-bold text-fonr-dark">~$110/month</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">vs</div>
                  <div className="flex-1">
                    <p className="text-sm text-fonr-gray mb-1">iWave Software</p>
                    <p className="text-2xl font-bold text-fonr-dark">$3,745/year</p>
                  </div>
                </div>
              </div>

              {/* Channel Status Cards */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-fonr-dark">Channel Status</h2>
                {[
                  { name: 'Direct Mail (RMD)', budget: 10500, status: 'Planning', color: 'bg-orange-100' },
                  { name: 'Meta Ads (DINK)', budget: 9000, status: 'Creative', color: 'bg-gray-100' },
                  { name: 'Display Retargeting', budget: 4500, status: 'Setup', color: 'bg-green-100' },
                  { name: 'Google Grants', budget: 60000, status: 'Application', color: 'bg-blue-100', free: true },
                  { name: 'SMS Campaigns', budget: 3000, status: 'Planning', color: 'bg-purple-100' },
                  { name: 'Email Nurture', budget: 3000, status: 'Design', color: 'bg-indigo-100' },
                ].map((channel) => (
                  <div key={channel.name} className={`${channel.color} rounded-lg p-4 flex items-center justify-between border border-gray-300`}>
                    <div className="flex-1">
                      <p className="font-bold text-fonr-dark">{channel.name}</p>
                      <p className="text-sm text-fonr-gray">${(channel.budget / 1000).toFixed(1)}K budget</p>
                    </div>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-fonr-dark border border-gray-300">
                      {channel.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pipeline' && (
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-fonr-dark mb-2">AI Scoring Pipeline</h1>
                <p className="text-fonr-gray">Donor enrichment and routing architecture</p>
              </div>

              {/* Pipeline Diagram */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 overflow-x-auto">
                <div className="min-w-full flex items-center justify-between gap-4 py-4">
                  {/* Entry Sources */}
                  <div className="flex flex-col gap-2 items-center">
                    <div className="text-xs font-bold text-fonr-gray uppercase mb-2">Entry Sources</div>
                    <div className="space-y-2">
                      {['Direct Mail', 'Meta', 'Google', 'Website', 'SMS', 'Referral'].map((source) => (
                        <div key={source} className="px-3 py-2 bg-blue-50 border border-blue-300 rounded text-xs font-medium text-fonr-dark whitespace-nowrap">
                          {source}
                        </div>
                      ))}
                    </div>
                  </div>

                  <ArrowRight size={24} className="text-fonr-gold flex-shrink-0" />

                  {/* Enrichment */}
                  <div className="flex flex-col gap-2 items-center">
                    <div className="text-xs font-bold text-fonr-gray uppercase mb-2">Enrichment</div>
                    <div className="space-y-2">
                      {['SmartyStreets', 'Zillow', 'FEC/ProPublica', 'Claude AI'].map((source) => (
                        <div key={source} className="px-3 py-2 bg-yellow-50 border border-yellow-300 rounded text-xs font-medium text-fonr-dark whitespace-nowrap">
                          {source}
                        </div>
                      ))}
                    </div>
                  </div>

                  <ArrowRight size={24} className="text-fonr-gold flex-shrink-0" />

                  {/* Scoring */}
                  <div className="flex flex-col gap-2 items-center">
                    <div className="text-xs font-bold text-fonr-gray uppercase mb-2">Scoring Tiers</div>
                    <div className="space-y-2">
                      <div className="px-3 py-2 bg-green-100 border border-green-400 rounded text-xs font-medium text-fonr-dark whitespace-nowrap">
                        HIGH 80+
                      </div>
                      <div className="px-3 py-2 bg-yellow-100 border border-yellow-400 rounded text-xs font-medium text-fonr-dark whitespace-nowrap">
                        MEDIUM 50-79
                      </div>
                      <div className="px-3 py-2 bg-gray-200 border border-gray-400 rounded text-xs font-medium text-fonr-dark whitespace-nowrap">
                        STANDARD &lt;50
                      </div>
                    </div>
                  </div>

                  <ArrowRight size={24} className="text-fonr-gold flex-shrink-0" />

                  {/* Routing */}
                  <div className="flex flex-col gap-2 items-center">
                    <div className="text-xs font-bold text-fonr-gray uppercase mb-2">Routing</div>
                    <div className="space-y-2">
                      {['Personal Outreach', 'Warm Nurture', 'Automated Drip'].map((route) => (
                        <div key={route} className="px-3 py-2 bg-purple-50 border border-purple-300 rounded text-xs font-medium text-fonr-dark whitespace-nowrap">
                          {route}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pipeline Details */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-fonr-dark mb-3">Data Enrichment</h3>
                  <p className="text-sm text-fonr-gray mb-4">
                    Append wealth, property, political, and financial data from multiple authoritative sources.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">SmartyStreets validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Zillow property data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">FEC contribution history</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-fonr-dark mb-3">AI Scoring</h3>
                  <p className="text-sm text-fonr-gray mb-4">
                    Claude AI agent evaluates propensity to give based on wealth, giving history, and engagement signals.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Multi-factor scoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Segment affinity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Channel recommendation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-fonr-dark mb-3">Smart Routing</h3>
                  <p className="text-sm text-fonr-gray mb-4">
                    Route donors to most effective channel and engagement strategy based on scoring and segment.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Budget optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Conversion likelihood</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-fonr-success" />
                      <span className="text-fonr-dark">Lifetime value projection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-fonr-dark mb-2">Campaign Timeline</h1>
                <p className="text-fonr-gray">April - December 2026 campaign phases</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  {timelineData.map((phase) => (
                    <div key={phase.name} className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium text-fonr-dark text-right">
                        {phase.name}
                      </div>
                      <div className="flex-1 h-10 bg-gray-200 rounded-lg relative overflow-hidden">
                        <div
                          className="h-full rounded-lg flex items-center px-3 text-xs font-bold text-white"
                          style={{
                            backgroundColor: phase.color,
                            width: `${(phase.duration / 270) * 100}%`,
                            marginLeft: `${(phase.start / 270) * 100}%`,
                          }}
                        >
                          {phase.duration} days
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-fonr-gray uppercase font-bold mb-2">Timeline Markers</p>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-fonr-dark">Apr-May</p>
                      <p className="text-xs text-fonr-gray">Pre-Launch Build</p>
                    </div>
                    <div>
                      <p className="font-bold text-fonr-dark">Jun-Aug</p>
                      <p className="text-xs text-fonr-gray">Initial waves (DM, Meta, GG)</p>
                    </div>
                    <div>
                      <p className="font-bold text-fonr-dark">Jul-Oct</p>
                      <p className="text-xs text-fonr-gray">SMS + Display sustain</p>
                    </div>
                    <div>
                      <p className="font-bold text-fonr-dark">Nov-Dec</p>
                      <p className="text-xs text-fonr-gray">Year-end giving push</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase Detail Cards */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    phase: 'DM Wave 1',
                    duration: '4 weeks',
                    start: 'June 2026',
                    objective: 'Launch first direct mail piece to RMD segment households',
                  },
                  {
                    phase: 'Meta Ads',
                    duration: '13 weeks',
                    start: 'June 2026',
                    objective: 'Continuous DINK segment acquisition across Instagram and Facebook',
                  },
                  {
                    phase: 'Google Grants',
                    duration: '26 weeks',
                    start: 'June 2026',
                    objective: 'Maximize free search advertising budget across both segments',
                  },
                  {
                    phase: 'SMS Campaigns',
                    duration: '9 weeks',
                    start: 'July 2026',
                    objective: 'High-touch follow-up messaging to engaged DINK prospects',
                  },
                  {
                    phase: 'Display Retargeting',
                    duration: '17 weeks',
                    start: 'July 2026',
                    objective: 'Re-engage website visitors and previous engagement segments',
                  },
                  {
                    phase: 'Year-End Push',
                    duration: '8 weeks',
                    start: 'November 2026',
                    objective: 'Tax incentive messaging and urgency-driven final push',
                  },
                ].map((item) => (
                  <div key={item.phase} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h3 className="font-bold text-fonr-dark mb-2">{item.phase}</h3>
                    <div className="space-y-1 text-sm text-fonr-gray">
                      <p><strong>Duration:</strong> {item.duration}</p>
                      <p><strong>Starts:</strong> {item.start}</p>
                      <p><strong>Objective:</strong> {item.objective}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

