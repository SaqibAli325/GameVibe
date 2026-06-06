import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-linear-to-tr from-zinc-950 via-purple-950/40 to-slate-950 text-zinc-100 relative overflow-hidden flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_45%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-lg px-4 flex flex-col items-center">
        
        <h1 className="text-8xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 font-gaming drop-shadow-[0_5px_20px_rgba(168,85,247,0.4)] animate-pulse">
          404
        </h1>

        <span className="mt-4 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold uppercase rounded-md tracking-wider">
          ⚠️ Connection Glitch: Mission Failed
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-6 font-gaming">
          GAME OVER, BRO!
        </h2>

        <p className="text-zinc-400 text-sm mt-3 leading-relaxed font-sans">
          Jis game map ya file ko aap dhood rahe hain, woh server ke khazane se delete ho chuki hai ya uska URL crash ho gaya hai. 
        </p>

        <Link 
          to="/" 
          className="mt-8 relative group overflow-hidden rounded-xl p-0.5 focus:outline-none transition-transform active:scale-95"
        >
          <span className="absolute inset-0 bg-linear-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-xl"></span>
          
          <span className="relative block px-6 py-3 bg-zinc-900 rounded-[10px] text-white font-bold text-sm transition-colors group-hover:bg-zinc-900/80 font-gaming">
            🎮 Respawn At Home
          </span>
        </Link>
        
      </div>
    </div>
  );
}