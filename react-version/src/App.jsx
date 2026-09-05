import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(saved);
    document.documentElement.className = saved;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.className = nextTheme;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg font-mono text-indigo-400">&lt;AR/&gt; <span className="text-slate-100 font-sans">Alex Rivera</span></a>
          <nav className="hidden md:flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-full border border-slate-800 hover:border-indigo-500 text-slate-300">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white">Let's Talk</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">
        <section id="hero" className="grid lg:grid-cols-2 gap-12 items-center pt-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {portfolioData.personal.status}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">{portfolioData.personal.name}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {portfolioData.personal.tagline}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:opacity-95">Explore Projects</a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-slate-800 hover:border-indigo-500 text-slate-200 font-semibold">Contact Me</a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              <img src="/assets/profile.svg" alt="Alex Rivera" className="w-80 h-80 rounded-xl object-cover bg-slate-950" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Featured Work</span>
            <h2 className="text-3xl font-bold">Production Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 flex flex-col justify-between hover:border-indigo-500/50 transition-all">
                <div>
                  <img src={p.image} alt={p.title} className="w-full h-44 object-cover rounded-lg mb-4 border border-slate-800" />
                  <span className="text-xs font-mono text-indigo-400">{p.badge}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{p.summary}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a href={p.repoUrl} target="_blank" rel="noreferrer" className="w-full py-2 px-3 text-center rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors">
                    View Project on GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Project Quick View Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-cyan-400">{activeProject.badge}</span>
                <h3 className="text-xl font-bold text-white mt-1">{activeProject.title}</h3>
              </div>
              <button onClick={() => setActiveProject(null)} className="text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
            </div>
            <img src={activeProject.image} alt={activeProject.title} className="w-full h-52 object-cover rounded-lg border border-slate-800" />
            <p className="text-sm text-slate-300">{activeProject.summary}</p>
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">Key Highlights:</h4>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                {activeProject.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div className="flex gap-3 pt-4 border-t border-slate-800">
              <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-lg text-white">View Live Demo</a>
              <a href={activeProject.repoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-slate-700 hover:border-slate-500 text-xs font-semibold rounded-lg text-slate-200">GitHub Source</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
