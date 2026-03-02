import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for new opportunities
      </motion.div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scalable architectures</span><br /> for the modern web.
      </h1>
      
      <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10">
        Full Stack Engineer specializing in TypeScript, Next.js, and Distributed Systems. 
        I turn complex logic into seamless user experiences.
      </p>

      <div className="flex gap-4">
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
          View Projects
        </button>
        <div className="flex items-center gap-3 ml-4">
          <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
          <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </section>
  );
}