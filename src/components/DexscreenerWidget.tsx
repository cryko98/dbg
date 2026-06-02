import { useState } from "react";
import { TrendingUp, RefreshCw, BarChart2, Shield } from "lucide-react";

interface DexscreenerWidgetProps {
  contractAddress: string;
}

export default function DexscreenerWidget({ contractAddress }: DexscreenerWidgetProps) {
  const embedUrl = `https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark&trades=1&info=0`;

  return (
    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-red-600/30 to-black/40 border border-white/5">
      <div className="bg-[#040407] rounded-3xl p-5 md:p-6 overflow-hidden relative">
        {/* Neon red backglow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-600/10 text-red-500">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-white text-base">
                  $DATBIHGAH / SOL
                </span>
                <span className="px-1.5 py-0.5 rounded bg-red-950/40 text-red-500 font-mono text-[9px] uppercase font-semibold animate-pulse">
                  LIVE DEXSCREENER FEED
                </span>
              </div>
              <p className="font-mono text-xs text-red-400 font-bold mt-0.5">
                Live Token Pool Chart Tracker
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`https://dexscreener.com/solana/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-[10px] uppercase font-bold tracking-wider transition-all hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
            >
              Open on DexScreener
            </a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                Real-time feed
              </span>
            </div>
          </div>
        </div>

        {/* Real Iframe embed widget of Dexscreener */}
        <div className="relative p-2 rounded-2xl bg-[#010103] border border-white/5 overflow-hidden">
          <div className="w-full h-[450px] md:h-[500px]">
            <iframe 
              src={embedUrl}
              className="w-full h-full border-0 rounded-xl bg-black"
              title="DexScreener Chart Feed"
              allow="clipboard-write"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
