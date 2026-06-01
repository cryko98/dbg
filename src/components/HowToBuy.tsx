import { useState } from "react";
import { Download, Landmark, ArrowRightLeft, Percent, Wallet, Copy, Check, ExternalLink } from "lucide-react";

interface Step {
  num: string;
  icon: any;
  title: string;
  desc: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "xxxxxxxxxxxxxxxxxxxxxxxxx";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps: Step[] = [
    {
      num: "01",
      icon: Wallet,
      title: "CREATE A SOLANA WALLET",
      desc: "Download Phantom or your favorite Solana Web3 wallet from the App Store or Google Play for free. If you are on desktop, install the Chrome extension.",
      ctaText: "Get Phantom Wallet",
      ctaLink: "https://phantom.app/",
    },
    {
      num: "02",
      icon: Landmark,
      title: "GET SOME SOLANA ($SOL)",
      desc: "Buy SOL directly inside your Phantom wallet, swap from other digital assets, or withdraw from native exchanges like Coinbase, Binance or Kraken directly to your address.",
    },
    {
      num: "03",
      icon: ExternalLink,
      title: "VISIT PUMP.FUN PLATFORM",
      desc: "Head over to pump.fun directly inside your Phantom browser tab or click our official quick link. Connect your new Web3 wallet in one click.",
      ctaText: "Go to Pump.fun",
      ctaLink: `https://pump.fun/coin/${contractAddress}`,
    },
    {
      num: "04",
      icon: ArrowRightLeft,
      title: "SWAP FOR $DATBIHGAH",
      desc: "Input our official contract address (CA) listed below into the search bar. Set your slippage preference, enter the SOL amount you want to swap, and click BUY!",
    },
  ];

  return (
    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/5 via-red-900/10 to-transparent">
      <div className="bg-[#040406]/95 rounded-3xl p-6 md:p-8 border border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-red-600/10 border border-red-900/30 text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest inline-block mb-3">
            Secure Entry Guide
          </span>
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight uppercase">
            HOW TO GET STARTED
          </h3>
          <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2">
            No VC allocations, no complex tokenomics, no fake locks. Just absolute, verified taste. Follow these simple steps to join the supreme coin.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              className="relative p-6 rounded-2xl bg-[#09090b] border border-white/5 hover:border-red-900/40 transition-all flex flex-col justify-between group"
            >
              {/* Backlight on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all pointer-events-none" />

              <div>
                {/* Number index & icon layout */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono font-black text-2xl text-red-600/60 group-hover:text-red-500 transition-colors">
                    {st.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-zinc-950 text-slate-400 group-hover:text-red-400 border border-white/5 flex items-center justify-center transition-colors">
                    <st.icon className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="font-display font-extrabold text-sm md:text-base text-white uppercase tracking-wide mb-2">
                  {st.title}
                </h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {/* Step CTA button if available */}
              {st.ctaText && st.ctaLink && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={st.ctaLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>{st.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Highlighted Contract Address Quickcopy widget */}
        <div className="bg-black border border-red-900/20 rounded-2xl p-5 md:p-6 text-center max-w-xl mx-auto">
          <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">
            🚨 MAKE SURE YOU COPY THE CORRECT CONTRACT ADDRESS
          </label>
          <div className="flex items-center gap-2 max-w-md mx-auto bg-zinc-950 px-3.5 py-2.5 rounded-xl border border-white/5">
            <span className="font-mono text-xs md:text-sm font-semibold truncate text-slate-300 tracking-wider">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              className={`p-2 rounded-lg transition-all shrink-0 ${
                copied
                  ? "bg-emerald-500 text-white"
                  : "bg-red-600 hover:bg-red-500 text-white cursor-pointer"
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          {copied && (
            <span className="inline-block text-[10px] text-emerald-400 font-mono mt-2 animate-bounce">
              ✓ Address copied to clipboard! Ready to paste into pump.fun.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
