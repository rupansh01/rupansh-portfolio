"use client";

import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { BrainCircuit, Database, GitFork, Send, Webhook, Wrench, Cpu, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
type CustomNodeData = {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  onClick: () => void;
};

// --- Custom Node Component ---
const icons: Record<string, LucideIcon> = {
  BrainCircuit, Database, GitFork, Send, Webhook, Wrench, Cpu
};

const CustomNode = ({ data, isConnectable }: { data: CustomNodeData, isConnectable: boolean }) => {
  const Icon = icons[data.icon] || BrainCircuit;
  const isCenter = data.title === "AI AGENT";
  
  if (isCenter) {
    return (
      <div 
        className="bg-[#0A1220] border border-cyan-500/30 rounded-3xl w-48 h-48 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(0,255,255,0.15)] cursor-pointer group transition-all hover:border-cyan-400/60 hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]"
        onClick={data.onClick}
      >
        <Handle type="target" position={Position.Top} className="opacity-0" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Bottom} className="opacity-0" isConnectable={isConnectable} />
        <Handle type="target" position={Position.Left} className="opacity-0" id="left" isConnectable={isConnectable} />
        <Handle type="source" position={Position.Right} className="opacity-0" id="right" isConnectable={isConnectable} />
        
        <BrainCircuit className="w-12 h-12 text-[#00FFFF] mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
        <span className="text-white font-bold text-xl tracking-widest">{data.title}</span>
      </div>
    );
  }

  return (
    <div 
      className="bg-[#0A101D] border border-white/10 rounded-[2rem] px-5 py-3 flex items-center gap-4 shadow-lg cursor-pointer group transition-all hover:border-[#00FFFF]/50 hover:bg-[#0F172A]"
      onClick={data.onClick}
    >
      <Handle type="target" position={Position.Right} className="opacity-0" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Right} className="opacity-0" id="right" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Left} className="opacity-0" id="left" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Left} className="opacity-0" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Bottom} className="opacity-0" id="bottom" isConnectable={isConnectable} />
      
      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
        <Icon className="w-5 h-5 text-[#00FFFF]" strokeWidth={2} />
      </div>
      <div className="flex flex-col min-w-max pr-2">
        <span className="text-white font-bold text-[11px] tracking-widest">{data.title}</span>
        <span className="text-[#00FFFF] text-[10px] font-medium">{data.subtitle}</span>
      </div>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// --- Initial Data ---
const initialNodes = [
  { id: 'center', type: 'custom', position: { x: 400, y: 300 }, data: { title: 'AI AGENT', subtitle: '', icon: 'BrainCircuit', description: 'The central orchestration core running LLM reasoning loops. It decides which tools to call, parses memory, and dynamically routes the workflow.' } },
  { id: 'trigger', type: 'custom', position: { x: 50, y: 100 }, data: { title: 'TRIGGER', subtitle: 'Webhook / API', icon: 'Webhook', description: 'Incoming webhooks from CRMs, ATS platforms, or scheduled cron jobs that initiate the automation pipeline.' } },
  { id: 'llm', type: 'custom', position: { x: 400, y: 50 }, data: { title: 'LLM ENGINE', subtitle: 'OpenAI / GPT-4o', icon: 'Cpu', description: 'The intelligence layer that processes unstructured data, makes routing decisions, and formats structured JSON outputs.' } },
  { id: 'memory', type: 'custom', position: { x: 750, y: 150 }, data: { title: 'MEMORY', subtitle: 'Vector Store', icon: 'Database', description: 'Long-term semantic storage using PostgreSQL + pgvector to recall historical candidate interactions and context.' } },
  { id: 'tools', type: 'custom', position: { x: 800, y: 350 }, data: { title: 'TOOLS', subtitle: 'API Calls / Functions', icon: 'Wrench', description: 'Custom Python functions and REST API wrappers allowing the agent to fetch external data (e.g., LinkedIn profiles).' } },
  { id: 'output', type: 'custom', position: { x: 750, y: 550 }, data: { title: 'OUTPUT', subtitle: 'Notify / CRM', icon: 'Send', description: 'The final execution step where structured data is pushed back to the ATS (Greenhouse) or team Slack channels.' } },
  { id: 'db', type: 'custom', position: { x: 400, y: 650 }, data: { title: 'DATABASE', subtitle: 'Supabase / PostgreSQL', icon: 'Database', description: 'The relational database where all workflow state, logs, and structured candidate records are securely stored.' } },
  { id: 'workflow', type: 'custom', position: { x: 50, y: 550 }, data: { title: 'WORKFLOW', subtitle: 'n8n Automation', icon: 'GitFork', description: 'The low-code workflow automation engine that wires the entire system together, handling retries and rate limits.' } },
];

const initialEdges = [
  { id: 'e-trigger-center', source: 'trigger', target: 'center', sourceHandle: 'right', targetHandle: 'left', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#00FFFF' } },
  { id: 'e-center-llm', source: 'center', target: 'llm', sourceHandle: 'top', targetHandle: 'bottom', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 } },
  { id: 'e-center-memory', source: 'center', target: 'memory', sourceHandle: 'right', targetHandle: 'left', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 } },
  { id: 'e-center-tools', source: 'center', target: 'tools', sourceHandle: 'right', targetHandle: 'left', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 } },
  { id: 'e-center-output', source: 'center', target: 'output', sourceHandle: 'right', targetHandle: 'left', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#00FFFF' } },
  { id: 'e-center-db', source: 'center', target: 'db', sourceHandle: 'bottom', targetHandle: 'top', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 } },
  { id: 'e-workflow-center', source: 'workflow', target: 'center', sourceHandle: 'right', targetHandle: 'left', animated: true, style: { stroke: '#00FFFF', strokeWidth: 2, opacity: 0.5 } },
];

export function ArchitectureFlow() {
  const [activeModal, setActiveModal] = useState<CustomNodeData | null>(null);

  // Inject click handler into nodes
  const nodesWithHandlers = initialNodes.map(node => ({
    ...node,
    data: {
      ...node.data,
      onClick: () => setActiveModal(node.data as CustomNodeData)
    }
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(nodesWithHandlers);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[600px] bg-[#050814] rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.05)] relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        className="bg-[#050814]"
        proOptions={{ hideAttribution: true }}
        minZoom={0.5}
        maxZoom={1.5}
      >
        <Background 
          color="rgba(255,255,255,0.05)" 
          gap={40} 
          size={1} 
        />
        <Controls className="!bg-[#0A101D] !border-white/10 !fill-white" />
      </ReactFlow>

      {/* Interactive Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#050814]/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0A101D] border border-cyan-500/30 p-8 rounded-3xl max-w-md w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white/50 hover:text-white"
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
              
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                {(() => {
                  const Icon = icons[activeModal.icon] || BrainCircuit;
                  return <Icon className="w-6 h-6 text-cyan-400" />;
                })()}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{activeModal.title}</h3>
              {activeModal.subtitle && (
                <p className="text-cyan-400 font-mono text-sm mb-6 pb-4 border-b border-white/10">
                  {activeModal.subtitle}
                </p>
              )}
              
              <p className="text-muted-foreground leading-relaxed">
                {activeModal.description}
              </p>
              
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Close Implementation Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0A101D]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
        <span className="text-xs text-cyan-400 font-medium">Click any node to view implementation details</span>
      </div>
    </div>
  );
}
