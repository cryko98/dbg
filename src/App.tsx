import { useState, useEffect } from "react";
import { 
  Flame, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronRight, 
  Info, 
  Sparkles, 
  Tv, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Heart,
  Smartphone,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";
import SmokeEffect from "./components/SmokeEffect";
import HowToBuy from "./components/HowToBuy";

// Mini iPhone Frame Component for highly responsive video streams
function IPhoneFrame({ videoId, author, title }: { videoId: string; author?: string; title?: string }) {
  return (
    <div className="relative w-full max-w-[270px] sm:max-w-[280px] mx-auto aspect-[9/18.5] rounded-[40px] border-[8px] border-zinc-850 bg-black shadow-[0_15px_35px_rgba(239,68,68,0.15)] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_45px_rgba(239,68,68,0.25)] flex flex-col justify-between">
      {/* Dynamic Island Speaker / Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
        <div className="w-1.5 h-1.5 bg-[#0e0e11] rounded-full border border-zinc-800" />
        <div className="w-1 h-1 bg-[#14141a] rounded-full" />
      </div>
      
      {/* iPhone Frame Screen Top Status Indicators */}
      <div className="absolute top-0 inset-x-0 h-8 px-4 flex items-end justify-between text-[8px] font-mono text-zinc-400 z-20 pointer-events-none pb-1 bg-gradient-to-b from-black/80 to-transparent">
        <span>09:41</span>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[7px]">5G</span>
        </div>
      </div>

      {/* Main Embed Content viewport frame with English language translation query enforced */}
      <div className="w-full h-full pt-8 pb-3 bg-zinc-950 relative">
        <iframe 
          src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en-US`} 
          className="w-full h-full border-0 rounded-xl bg-black" 
          allowFullScreen 
          referrerPolicy="no-referrer"
          title={`TikTok video ${videoId} by ${author || "creator"}`}
        />
      </div>

      {/* Home navigation swipe indicator bar at bottom */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-0.75 bg-zinc-700 rounded-full z-20 pointer-events-none" />
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contractAddress = "DMU6LRnRBV7URLdpCYadHNKxXxyf4MRkdqSqC2tkpump";

  const logoUrl = "https://berjrozgwqoqpeqozceu.supabase.co/storage/v1/object/public/werld/loooo.jpg";
  const promoImageUrl = "https://berjrozgwqoqpeqozceu.supabase.co/storage/v1/object/public/werld/bsnnnnn.jpg";

  // Handle scrolling status to keep navbar beautiful
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tiktokVideos = [
    {
      id: "7645104036152134925",
      author: "@michael_ovo",
      title: "TikTok Reaction 1"
    },
    {
      id: "7646249582925581598",
      author: "@pontiacmadeddg",
      title: "TikTok Reaction 2"
    },
    {
      id: "7645472276787285262",
      author: "@kamcordd",
      title: "TikTok Reaction 3"
    },
    {
      id: "7646182867810159886",
      author: "@casiinosmooth",
      title: "TikTok Reaction 4"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030305] text-white overflow-x-hidden font-sans select-none pb-12">
      {/* 1. Smoke and Sparks particles background animation (Converted to Red) */}
      <SmokeEffect />

      {/* Retro Grid moving sheet in background */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-20 z-0" />

      {/* Background radial red neon lights */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Ticker Bar aligned with Red Design specifications */}
      <div className="relative bg-red-600 h-8 flex items-center overflow-hidden whitespace-nowrap border-b border-white/20 z-50">
        <div className="flex animate-marquee absolute">
          <div className="flex whitespace-nowrap gap-x-8 text-[11px] font-mono font-black tracking-widest text-white uppercase py-1">
            <span>$DATBIHGAH • OFFICIAL SOLANA TOKEN • DEV IS IN THE VIDEO • 100% COMMUNITY OWNED • DAT BIH GAH</span>
            <span>$DATBIHGAH • OFFICIAL SOLANA TOKEN • DEV IS IN THE VIDEO • 100% COMMUNITY OWNED • DAT BIH GAH</span>
            <span>$DATBIHGAH • OFFICIAL SOLANA TOKEN • DEV IS IN THE VIDEO • 100% COMMUNITY OWNED • DAT BIH GAH</span>
          </div>
        </div>
      </div>

      {/* 2. Top Navigation Bar */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "py-3 bg-[#030305]/95 backdrop-blur-md border-b border-red-900/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 blur opacity-60 group-hover:opacity-100 transition duration-300" />
              <img 
                src={logoUrl} 
                alt="Dat Bih Gah Logo" 
                className="relative w-11 h-11 rounded-full border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-black italic text-xl text-white tracking-tighter uppercase flex items-center gap-1.5 leading-none">
                DAT BIH GAH <span className="text-red-500 text-glow">🔥</span>
              </span>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5 block font-bold">
                $DATBIHGAH SOLANA OFFICIAL
              </span>
            </div>
          </div>

          {/* Social Icons & Launch Action Button */}
          <div className="flex items-center gap-3">
            <a 
              href="https://x.com/datbihgahPF" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-full bg-zinc-900/60 hover:bg-zinc-800 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 flex items-center justify-center gap-1.5 text-xs font-bold"
              title="Official X Channel"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="hidden sm:inline font-mono text-[10px] tracking-wider uppercase">FOLLOW X</span>
            </a>

            <a 
              href="#how-to-buy-section" 
              className="bg-white text-black px-5 py-1.5 rounded-full font-bold text-xs hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 duration-200"
            >
              HOW TO SWAP
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <main className="relative w-full py-8 md:py-16 px-4 md:px-8 z-20">
        <div className="w-full max-w-7xl mx-auto space-y-12">
          
          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: Brand presentation + core token data */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 border border-red-900/30">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest animate-pulse">
                  DEV IS THE GUY IN THE VIDEO 
                </span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-tight uppercase tracking-tight text-white">
                THE OFFICIAL <span className="text-red-500 text-glow">DAT BIH GAH</span> COIN ON SOLANA
              </h1>

              <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                Tired of fake promises and VC over-engineered tokens? The term <b className="text-white">DAT BIH GAH</b> is the ultimate viral slang used for culinary recipes and lifestyles that are straight stupid fire. To protect the culture, <b className="text-white">the guy who made the original TikTok audio</b> launched the official coin themselves. No limits, pure raw taste.
              </p>

              {/* Verified Badge Row */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#09090b] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-xs text-white uppercase">100% Authentic Dev</h3>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">The real video creator controls the token.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#09090b] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-xs text-white uppercase">Fair Pump Launch</h3>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5">Community owned with burned liquidity locks.</p>
                  </div>
                </div>
              </div>

              {/* Integrated copy component */}
              <div className="bg-black/80 border border-red-500/20 rounded-2xl p-4 md:p-5 relative md:max-w-2xl">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-black flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" /> OFFICIAL $DATBIHGAH CONTRACT ADDRESS:
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/20 px-1.5 py-0.5 rounded">
                    VERIFIED SAFE
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <code className="font-mono text-xs md:text-sm font-semibold tracking-wider text-red-400 truncate select-all">
                    {contractAddress}
                  </code>
                  <button
                    onClick={handleCopyCA}
                    className={`p-2.5 rounded-xl text-white transition-all hover:scale-105 shrink-0 ${
                      copied 
                        ? "bg-emerald-500" 
                        : "bg-red-600 hover:bg-red-500 cursor-pointer"
                    }`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] font-mono text-emerald-400 mt-1.5 block animate-bounce">
                    ✓ Contract accurately copied! Ready to paste and transact.
                  </span>
                )}
              </div>

              {/* Quick links header action buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#how-to-buy-section"
                  className="px-6 py-3 bg-red-600 text-white font-display font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-red-500 transition-all transform hover:scale-105 duration-200 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                >
                  HOW TO SWAP
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: iPhone screen frame embedding Main TikTok Video (English Localized) */}
            <div className="lg:col-span-5 flex justify-center py-6">
              <div className="relative w-full max-w-[310px] sm:max-w-[340px] md:max-w-[350px] aspect-[9/18.5] rounded-[48px] border-[10px] border-zinc-800 bg-black shadow-[0_25px_60px_-15px_rgba(239,68,68,0.25)] overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_25px_70px_-10px_rgba(239,68,68,0.35)]">
                
                {/* Dynamic Island Speaker / Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 bg-[#0e0e11] rounded-full border border-zinc-800" />
                  <div className="w-1.5 h-1.5 bg-[#14141a] rounded-full" />
                </div>
                
                {/* iPhone Frame Screen Top Status Indicators */}
                <div className="absolute top-0 inset-x-0 h-10 px-5 flex items-end justify-between text-[10px] font-mono text-zinc-400 z-20 pointer-events-none pb-1.5 bg-gradient-to-b from-black/80 to-transparent">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 items-end h-2">
                      <span className="w-0.5 h-1 bg-zinc-400 rounded-full" />
                      <span className="w-0.5 h-1.5 bg-zinc-400 rounded-full" />
                      <span className="w-0.5 h-2 bg-zinc-400 rounded-full" />
                      <span className="w-0.5 h-2.5 bg-red-500 rounded-full" />
                    </div>
                    <span>5G</span>
                    <div className="w-4.5 h-2.5 border border-zinc-500 rounded-sm flex items-center p-0.5">
                      <div className="h-full w-full bg-red-500 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Main Embed Content viewport frame with English Translation query string parameter */}
                <div className="w-full h-full pt-10 pb-4 bg-zinc-950 relative">
                  <iframe 
                    src="https://www.tiktok.com/embed/v2/7644664323956067614?lang=en-US" 
                    className="w-full h-full border-0 rounded-2xl bg-black" 
                    allowFullScreen 
                    referrerPolicy="no-referrer"
                    title="Featured TikTok Video Embed in English"
                  />
                </div>

                {/* Home navigation swipe indicator bar at bottom */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-600 rounded-full z-20 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* NEW SECTION: 4 iPhones Side-by-Side (Highly responsive and beautifully structured above the chart) */}
          <section className="pt-8 border-t border-white/5">
            <div className="space-y-6">
              <div className="text-center md:text-left max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-red-600/10 border border-red-900/30 text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest inline-block mb-2">
                  VIRAL INVASION CHANNEL
                </span>
                <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wider text-white">
                  DAT BIH GAH VIRAL ARMY
                </h2>
              </div>

              {/* Grid of 4 iPhones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {tiktokVideos.map((vid, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <IPhoneFrame videoId={vid.id} author={vid.author} title={vid.title} />
                    <div className="mt-3.5 text-center">
                      <span className="font-mono text-red-500 text-xs font-bold block">{vid.author}</span>
                      <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-semibold mt-0.5 block">Verified Creator reaction</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chart section removed */}

          {/* PROMOTIONAL SHOWCASE SECTION: Displaying bsnnnnn.jpg professionally */}
          <section className="pt-8 border-t border-white/5">
            <div className="bg-zinc-950/80 border border-red-900/10 rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[90px] pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Text Grid */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 border border-red-900/30">
                    <ImageIcon className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest">
                      SHOWCASE GALLERY ART
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl md:text-4xl uppercase text-white leading-tight">
                    DAT BIH GAH SUPREME LIFESTYLE
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed">
                    Check out the official street aesthetic capture! The original brand fuses real urban culture with high-stakes crypto memetics. No overlays, no fake designs, just raw culture in motion.
                  </p>

                  <div className="border-l-2 border-red-600 pl-4 py-1 italic font-sans text-xs text-slate-400 leading-normal">
                    "Every community post, every TikTok remix represents the taste of pure victory. We keep scaling the culture."
                  </div>
                </div>

                {/* Right Image Grid beautifully framed */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative group p-1.5 bg-gradient-to-br from-red-650/40 to-black/90 rounded-2xl border border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(239,68,68,0.15)] max-w-md w-full">
                    <img 
                      src={promoImageUrl} 
                      alt="Dat Bih Gah Promotional Street Frame" 
                      className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none rounded-xl" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="bg-red-600 text-white font-mono text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                        $DATBIHGAH OFFICIAL ART
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: How To Buy Step-by-Step Sequence */}
          <section id="how-to-buy-section" className="pt-8 border-t border-white/5">
            <HowToBuy />
          </section>

          {/* QUICK FOOTER CONVERSION BANNER */}
          <div className="rounded-3xl bg-red-600 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-left max-w-2xl z-10">
              <span className="px-2.5 py-0.5 rounded bg-black/40 text-white font-mono text-[9px] uppercase font-bold tracking-widest inline-block mb-2">
                HEATED TREND REPORT
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase leading-none tracking-tight">
                DAT BIH GAH!
              </h3>
              <p className="text-xs text-red-100 font-sans leading-relaxed mt-2">
                Join the ultimate community parade. Swap some SOL inside Phantom and trade verified meme slang securely with zero tax.
              </p>
            </div>

            <div className="flex gap-4 shrink-0 w-full md:w-auto z-10">
              <button 
                onClick={handleCopyCA}
                className="w-full md:w-auto px-8 py-3.5 bg-white text-black font-display font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                {copied ? "COPIED CONTRACT ADDRESS!" : "COPY CONTRACT ADDRESS"}
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Styled marquee CSS keyframes for smooth horizontal flow */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* 4. FOOTER */}
      <footer className="relative w-full py-12 px-4 md:px-8 z-20 border-t border-white/10 bg-[#030305]">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2">
              <img 
                src={logoUrl} 
                alt="Dat Bih Gah Logo" 
                className="w-7 h-7 rounded-full object-cover border border-red-500/20"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-black text-sm tracking-tight text-white uppercase italic">
                DAT BIH GAH COIN
              </span>
            </div>
            <p className="font-sans text-[10px] text-zinc-500 leading-normal max-w-xs uppercase font-semibold">
              $DATBIHGAH — The official Solana memecoin based on the TikTok sensation. Created and held directly by the video star.
            </p>
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase text-zinc-500">
            <span>No Taxes</span>
            <span>LP Burned</span>
            <span>Dev is Him</span>
            <span>TikTok Trending</span>
          </div>

          <div className="max-w-xs text-right md:text-left">
            <p className="font-sans text-[9px] text-zinc-600 leading-relaxed uppercase">
              $DATBIHGAH is purely an entertainment joke token. No expectation of financial return. Cryptocurrencies are highly volatile. Invest content safely.
            </p>
          </div>

        </div>

        <div className="w-full max-w-7xl mx-auto mt-8 pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
            © 2026 DAT BIH GAH CORPS. THE REAL ORIGINAL.
          </span>
          <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-500 uppercase">
            <a href="#how-to-buy-section" className="hover:text-red-500 transition-colors">How to Swap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
