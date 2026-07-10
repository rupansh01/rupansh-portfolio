"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { candidatesData, marketData } from '@/content/projects/data/recruitment-data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { User, Target, Globe2, Languages, ShieldCheck, AlertTriangle, Search, Briefcase } from 'lucide-react';

const COLORS = ['#22d3ee', '#34d399', '#f472b6', '#a78bfa', '#fbbf24', '#f87171'];

export function RecruitmentDashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState<typeof candidatesData[0] | null>(null);

  // Prepare data for the Score Pie Chart
  const scoreDistribution = marketData.reduce((acc, market) => {
    // We'll just generate a quick distribution for the pie chart using dummy ratios based on the averages
    // because the original CSV had specific score columns we didn't extract, 
    // but we can just use the strong vs total metric.
    return acc;
  }, []);
  
  // Real pie chart data based on market stats
  const pipelineData = [
    { name: 'Total Screened', value: marketData.reduce((acc, m) => acc + m.screened, 0) },
    { name: 'Strong Fits', value: marketData.reduce((acc, m) => acc + m.strong, 0) }
  ];

  return (
    <div className="w-full flex flex-col gap-8 rounded-3xl bg-[#0A101D] border border-cyan-500/20 p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Target className="w-8 h-8 text-cyan-400" />
          Production Analytics & LLM Extraction
        </h3>
        <p className="text-muted-foreground text-lg">
          The visualization below demonstrates an AI pipeline specifically configured for a <strong>Relationship Manager</strong> role, strictly aligning with the hiring team&apos;s exact evaluation criteria. While sensitive candidate data has been anonymized, the system&apos;s architecture is infinitely scalable and can be instantly adapted to <strong>any hiring domain or industry</strong>.
        </p>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Bar Chart: Market Performance */}
        <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.01]">
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-cyan-400" />
            Applications by Market
          </h4>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="market" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  cursor={{fill: '#ffffff05'}}
                  contentStyle={{ backgroundColor: '#0A101D', borderColor: '#22d3ee40', borderRadius: '12px', color: '#fff' }} 
                />
                <Bar dataKey="total" name="Total Apps" fill="#22d3ee" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="strong" name="Strong CVs" fill="#34d399" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Pipeline Conversion */}
        <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.01]">
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-400" />
            Global CV Screening Conversion
          </h4>
          <div className="h-[250px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#0A101D', borderColor: '#22d3ee40', borderRadius: '12px', color: '#fff' }} 
                />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Candidate Grid Section */}
      <div className="mt-8">
        <h4 className="text-xl font-bold text-white mb-6">LLM Extracted Candidate Profiles (Anonymized)</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {candidatesData.map((cand) => (
            <motion.div 
              key={cand.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedCandidate(cand)}
              className="glass-card p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 cursor-pointer group bg-[#0D1220]/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-950/50 flex items-center justify-center border border-cyan-500/20">
                    <User className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">{cand.pseudonym}</h5>
                    <div className="text-xs text-muted-foreground">{cand.id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
                  <Target className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Score: {cand.score}/5</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-300 line-clamp-2 mb-3 h-10">
                {cand.role}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20">
                  {cand.market}
                </span>
                <span className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">
                  {cand.topQualities.length} Qualities
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for deep dive */}
      <AnimatePresence>
        {selectedCandidate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCandidate(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card border border-cyan-500/30 rounded-3xl p-8 bg-[#0D1220] shadow-[0_0_50px_rgba(0,255,255,0.1)] no-scrollbar"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedCandidate.pseudonym}</h2>
                  <div className="text-cyan-400">{selectedCandidate.role}</div>
                </div>
                <button 
                  onClick={() => setSelectedCandidate(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                
                {/* Metric Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-cyan-950/20 border border-cyan-500/10 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-[10px] text-cyan-400/70 uppercase tracking-wider mb-1 font-semibold">Processing Status</div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      {selectedCandidate.processingStatus || 'OK'}
                    </div>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-500/10 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-[10px] text-emerald-400/70 uppercase tracking-wider mb-1 font-semibold">Interview Match</div>
                    <div className="text-sm font-bold text-white">{selectedCandidate.cvInterview || 'Maybe'}</div>
                  </div>
                  <div className="bg-purple-950/20 border border-purple-500/10 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-[10px] text-purple-400/70 uppercase tracking-wider mb-1 font-semibold">Extracted Length</div>
                    <div className="text-sm font-bold text-white">{selectedCandidate.extractedLength || 'N/A'} chars</div>
                  </div>
                  <div className="bg-amber-950/20 border border-amber-500/10 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-[10px] text-amber-400/70 uppercase tracking-wider mb-1 font-semibold">HNWI Proximity</div>
                    <div className="text-sm font-bold text-white">{selectedCandidate.hnwiProximity || 'Unknown'}</div>
                  </div>
                </div>

                {/* Job Variant Banner */}
                {selectedCandidate.jobVariant && (
                  <div className="w-full bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">Variant: <span className="text-white font-medium">{selectedCandidate.jobVariant}</span></span>
                  </div>
                )}

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Top Extracted Qualities
                  </h4>
                  <ul className="space-y-3">
                    {selectedCandidate.topQualities.map((q, i) => (
                      <li key={i} className="text-sm text-gray-300 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedCandidate.concerns.length > 0 && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      Identified Concerns
                    </h4>
                    <ul className="space-y-3">
                      {selectedCandidate.concerns.map((q, i) => (
                        <li key={i} className="text-sm text-gray-300 bg-amber-500/5 p-3 rounded-lg border border-amber-500/10">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Overall LLM Assessment</h4>
                  <p className="text-sm text-gray-300 leading-relaxed p-4 bg-white/5 rounded-lg border border-white/10">
                    {selectedCandidate.assessment}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
