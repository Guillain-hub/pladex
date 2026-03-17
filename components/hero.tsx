'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Activity, ShieldCheck, Terminal, Menu, X, Send, Cpu, Globe, Smartphone, Server } from 'lucide-react'
import Header from './header'

// (Bottom-left SystemLog removed — duplicate of the right-card feed)

// --- COMPONENT: INFINITE TECH/PARTNER MARQUEE ---
const TechMarquee = () => {
  const techStack = [
    "AWS CLOUD", "NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "PYTHON", "NODE.JS", "VERCEL", "DOCKER", "KUBERNETES", "GRAPHQL", "POSTGRESQL", "TAILWIND"
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 z-15 border-t border-white/5 bg-[#020617]/80 backdrop-blur-md h-16 flex items-center overflow-hidden">
      {/* Label */}
      <div className="hidden md:flex items-center px-6 border-r border-white/5 h-full bg-[#020617]">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Powered By</span>
      </div>

      {/* Scrolling Text */}
      <div className="flex-1 overflow-hidden relative">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-500 transition-colors" />
              <span className="text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors tracking-widest">{tech}</span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Masks for smooth fade in/out */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />
      </div>

      {/* Optional: Status Indicator */}
      <div className="hidden md:flex items-center px-6 border-l border-white/5 h-full">
         <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Systems Online</span>
         </div>
      </div>
    </div>
  )
}

// --- 2. MAIN COMPONENT ---
export default function PladexHero() {
  const [activeTab, setActiveTab] = useState<'web' | 'app' | 'system'>('web')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Mouse tracking for subtle glow
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  // --- CONFIGURATION FOR EACH TAB ---
  const content = {
    web: { 
      title: "Web Platforms", 
      desc: "High-performance digital hubs with sub-second latency.", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
      themeColor: "text-cyan-400",
      glowColor: "bg-cyan-500/20",
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      // NEW: Web Development Process
      workflow: [
        "> 01: STRATEGY...",
        "> 02: UX/UI DESIGN...",
        "> 03: DEVELOPMENT...",
        "> 04: OPTIMIZATION...",
        "> 05: LAUNCH..."
      ]
    },
    app: { 
      title: "Mobile Apps", 
      desc: "Engineered for high-concurrency. Native-grade execution.", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
      themeColor: "text-purple-400",
      glowColor: "bg-purple-500/20",
      gradient: "from-purple-400 via-pink-500 to-rose-600",
      // NEW: App Development Process
      workflow: [
        "> 01: MOBILE MARKET ANALYSIS...",
        "> 02: TOUCH INTERFACE DESIGN...",
        "> 03: NATIVE APP DEVELOPMENT...",
        "> 04: RIGOROUS DEVICE TESTING...",
        "> 05: APP STORE DEPLOYMENT..."
      ]
    },
    system: { 
      title: "Core Systems", 
      desc: "Secure, scalable infrastructure for global operations.", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      themeColor: "text-emerald-400",
      glowColor: "bg-emerald-500/20",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      // NEW: System Development Process
      workflow: [
        "> 01: AUDITING EXISTING WORKFLOWS...",
        "> 02: DATABASE ARCHITECTURE...",
        "> 03: SECURE API INTEGRATION...",
        "> 04: AUTOMATING BUSINESS LOGIC...",
        "> 05: ENTERPRISE CLOUD SCALING..."
      ]
    }
  }

  const activeContent = content[activeTab]

  // Start with the first step of the active tab
  const [cardLines, setCardLines] = useState<string[]>([activeContent.workflow[0]])

  useEffect(() => {
    let stepIndex = 0;
    // Reset the terminal to Step 1 whenever the user clicks a new tab
    setCardLines([activeContent.workflow[0]]);

    const interval = setInterval(() => {
      stepIndex = (stepIndex + 1) % activeContent.workflow.length;

      setCardLines(prev => {
        const newLines = [...prev, activeContent.workflow[stepIndex]];
        return newLines.slice(-3); // Keep only the last 3 lines visible
      });
    }, 2000); // 2000ms gives the client time to read the step

    return () => clearInterval(interval)
  }, [activeTab]) // Re-run this effect when the tab changes

  return (
    <section className="relative min-h-screen w-full bg-[#020617] overflow-hidden flex flex-col font-sans select-none pb-20">
      
      {/* --- HEADER (extracted) --- */}
      <Header />

      {/* --- BACKGROUND LAYERS (z-0) --- */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
        <AnimatePresence mode="wait">
          {/* 1. The Image that changes based on click */}
          <motion.img
            key={activeTab}
            src={activeContent.img}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* 2. Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
        
        {/* 3. Contextual Pattern Overlay (Changes with tab) */}
        {activeTab === 'web' && (
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        )}
        {activeTab === 'app' && (
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10" />
        )}
        {activeTab === 'system' && (
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        )}

        {/* 4. Mouse Follow Glow */}
        <motion.div 
            style={{ left: springX, top: springY }}
            className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full mix-blend-screen transition-colors duration-700 ${activeContent.glowColor}`}
        />
      </div>

      {/* --- CONTENT LAYER (z-10) --- */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center w-full pt-8 md:pt-16">
            
            {/* LEFT SIDE: Typography */}
            <div className="lg:col-span-7 space-y-10">
                {/* Dynamic Tag */}
                <motion.div 
                    key={activeTab + "tag"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-sm backdrop-blur-md ${activeContent.themeColor}`}
                >
                    <Terminal size={12} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                        System Ready: {activeTab.toUpperCase()}
                    </span>
                </motion.div>

                {/* Animated Headline */}
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-[90px] font-bold text-white tracking-[-0.04em] leading-[0.9]">
                        Pladex <br />
                        <motion.span 
                            key={activeTab + "text"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`text-transparent bg-clip-text bg-gradient-to-r ${activeContent.gradient}`}
                        >
                            Intelligence.
                        </motion.span>
                    </h1>
                    <motion.p 
                        key={activeTab + "desc"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-md font-medium leading-relaxed border-l-2 border-white/10 pl-6"
                    >
                        {activeContent.desc}
                    </motion.p>
                </div>

                {/* Tab Switcher (classic icon buttons) */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Select Infrastructure</span>
                  <div className="flex items-center gap-3 bg-transparent p-1">
                    {(['web', 'app', 'system'] as const).map((key) => {
                      const Icon = key === 'web' ? Globe : key === 'app' ? Smartphone : Server
                      const isActive = activeTab === key
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTab(key)}
                          aria-pressed={isActive}
                          className={`flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold transition-shadow duration-200 border ${isActive ? 'bg-white text-[#020617] border-white/20 shadow' : 'bg-transparent text-white/60 border-white/10 hover:bg-white/5'}`}>
                          <Icon size={16} className={`${content[key].themeColor} ${isActive ? '' : 'opacity-80'}`} />
                          <span className="hidden sm:inline">{content[key].title}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* CTA Button & Customer Satisfaction */}
                <div className="pt-4 flex items-center gap-4 md:gap-8">
                    <Link href="/projects">
                      <button 
                        className={`group relative bg-white text-[#020617] px-10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-sm cursor-pointer`}
                      >
                        <span className="relative z-10">View Portfolio</span>
                        <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r ${activeContent.gradient}`} />
                      </button>
                    </Link>

                    {/* 24/7 Customer Satisfaction Badge */}
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <span className="text-[12px] font-bold text-white">24/7</span>
                      </div>
                      <div className="text-[10px] md:text-[12px] text-slate-300 leading-tight">
                        <div className="font-semibold text-white">Customer Support</div>
                        <div className="text-white/60">Always Available</div>
                      </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Dynamic Stats Card */}
            <div className="lg:col-span-5 mt-8 lg:mt-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35 }}
                        className="relative bg-gradient-to-b from-[#071021]/60 to-[#071021]/40 border border-white/6 backdrop-blur-xl p-3 md:p-6 lg:p-8 rounded-2xl shadow-xl overflow-hidden max-w-full md:max-w-md"
                    >
                        {/* animated accent stripe */}
                        <motion.div
                          initial={{ x: -8, opacity: 0.9 }}
                          animate={{ x: 8 }}
                          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3, ease: 'linear' }}
                          className={`absolute -top-5 left-6 w-28 h-1 rounded-full bg-gradient-to-r ${activeContent.gradient} opacity-90`} />

                        <div className="flex items-start gap-5">
                          {/* icon badge with inner glow */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${activeContent.gradient} text-white`}
                              style={{
                                boxShadow: `0 6px 24px rgba(0,0,0,0.45)`
                              }}
                            >
                              {activeTab === 'web' && <Globe size={18} className="text-white" />}
                              {activeTab === 'app' && <Smartphone size={18} className="text-white" />}
                              {activeTab === 'system' && <Server size={18} className="text-white" />}
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs font-mono uppercase text-white/50">{activeContent.title}</div>
                                <div className="text-lg md:text-xl font-semibold text-white mt-1">{activeContent.title}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-white">{activeTab === 'web' ? '0.3s' : activeTab === 'app' ? 'Native' : 'AES-256'}</div>
                                <div className={`text-[10px] font-mono uppercase ${activeContent.themeColor}`}>{activeTab === 'web' ? 'Latency' : activeTab === 'app' ? 'Performance' : 'Security'}</div>
                              </div>
                            </div>

                            <p className="text-xs md:text-sm lg:text-base text-slate-300 mt-3 max-w-md">{activeContent.desc}</p>

                            <div className="mt-4">
                              <div className="h-2 w-full bg-white/8 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 1, delay: 0.35 }}
                                  className={`h-full bg-gradient-to-r ${activeContent.gradient}`}
                                />
                              </div>
                            </div>

                            {/* System Feed (terminal-style CLI block) */}
                            <div className="mt-5">
                              <div className="bg-[#00110a]/90 border border-green-900/40 rounded-lg p-3 text-xs md:text-sm lg:text-base font-mono text-[#33ff66] shadow-[0_10px_30px_rgba(3,255,100,0.06)]">
                                <div className="flex items-center justify-between mb-2 border-b border-green-900/30 pb-2">
                                  <span className="uppercase text-[11px] text-green-300/80">system@pladex:~/workflow$</span>
                                  <span className="text-[10px] uppercase tracking-widest text-green-300/60 font-bold">Executing</span>
                                </div>

                                <div className="space-y-1 leading-tight whitespace-pre-line">
                                  {cardLines.map((line, i) => (
                                    <motion.span key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="block text-[#33ff66]">
                                      {line}
                                    </motion.span>
                                  ))}
                                </div>

                                <div className="mt-2 text-[#33ff66]">
                                  <span className="animate-pulse">_</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>

      {/* Bottom-left SystemLog removed (duplicate) */}

      {/* NEW: INFINITE MARQUEE AT BOTTOM */}
      <TechMarquee />
    </section>
  )
}