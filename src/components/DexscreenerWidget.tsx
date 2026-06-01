import { useState } from "react";
import { TrendingUp, RefreshCw, BarChart2, Shield } from "lucide-react";

interface DexscreenerWidgetProps {
  contractAddress: string;
}

export default function DexscreenerWidget({ contractAddress }: DexscreenerWidgetProps) {
  const isDefaultCA = contractAddress === "xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  // Custom benchmark Solana/USDC chart on Raydium as placeholder, or user's custom CA if they put one
  const embedUrl = isDefaultCA 
    ? "https://dexscreener.com/solana/8s5u7Gv99DeT3NqUHKN3XzScdS8S56R39e9pUcYx1A1?embed=1&theme=dark&trades=1&info=0"
    : `https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark&trades=1&info=0`;

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
                <span className="px-1.5 py-0.5 rounded bg-red-950/40 text-red-500 font-mono text-[9px] uppercase font-semibold">
                  {isDefaultCA ? "DEMO CHART SCREENER" : "LIVE DEXSCREENER FEED"}
                </span>
              </div>
              <p className="font-mono text-xs text-red-400 font-bold mt-0.5">
                {isDefaultCA ? "Showing SOL/USDC (Replace CA to load $DATBIHGAH)" : "Live Token Pool Chart"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
              Real-time feed
            </span>
          </div>
        </div>

        {/* Real Iframe embed widget of Dexscreener */}
        <div className="relative p-2 rounded-2xl bg-[#010103] border border-white/5 overflow-hidden">
          <div className="w-full h-[450px] md:h-[500px]">
            <iframe 
              src={embedUrl}
              className="w-full h-full border-0 rounded-xl"
              title="DexScreener Chart Feed"
              allow="clipboard-write"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Informative notice explaining that they can add CA later */}
        {isDefaultCA && (
          <div className="mt-4 p-3 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-[10px] font-mono text-slate-300 leading-normal">
              <b>PRO TIP:</b> When your coin launches on Solana, replace the placeholder contract address with your real token pool ID or mint address inside <code>App.tsx</code> to lock in the true $DBG tracker!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
