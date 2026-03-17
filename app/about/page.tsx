'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Lightbulb, Users, Target, Zap, ShieldCheck, Rocket, Terminal, Github, Linkedin, Mail } from 'lucide-react'

export default function About() {
  
  // --- The 4-Person Team Data ---
  const team = [
    {
      name: "ISHIMWE Pacific",
      role: "CO-FOUNDER & CREATIVE DIRECTOR",
      code: "OP_01",
      image: "/IMG_5025.JPG.jpeg", // Placeholder tech portrait
      specialty: "Creative Design & Branding",
      bio: "Crafts compelling visual identity and content to strengthen branding and elevate marketing impact."
    },
    {
      name: "BYIRINGIRO Olivier",
      role: "CO-FOUNDER & HEAD OF OPERATIONS & GROWTH",
      code: "OP_02",
      image: "/IMG_3591.JPG.jpeg", // Placeholder tech portrait
      specialty: "Business Strategy & Growth",
      bio: "Drives operations and growth through client acquisition, strategic partnerships, and market-focused execution."
    },
    {
      name: "INEZA Placide Guillain",
      role: "CO-FOUNDER & CTO",
      code: "OP_03",
      image: "/ChatGPT Image Mar 17, 2026, 02_39_45 PM.png", // Placeholder tech portrait
      specialty: "Full-Stack Digital Engineering",
      bio: "Builds secure, scalable web and mobile platforms with modern technologies and high-performance architecture."
    },
    {
      name: "RUBERWA Patrick",
      role: "CO-FOUNDER & HEAD OF PROJECT OPERATIONS",
      code: "OP_04",
      image: "/WhatsApp Image 2026-03-09 at 9.53.12 PM.jpeg", 
      specialty: "Project Management Systems",
      bio: "Ensures smooth project delivery through efficient planning, coordination, and quality control."
    }
  ]

  return (
    <main className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navigation />

      {/* --- GLOBAL FIXED BACKGROUND --- */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80" />
      </div>

      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden z-10">
        
        {/* Abstract Glows */}
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-40 left-1/4 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* --- HEADER --- */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-[-0.04em] mb-8">
              Architects of the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                Digital Frontier.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
              We are an elite squad of four senior engineers. We don't outsource; we don't dilute. When you hire Pladex, you get direct access to the architects building your system.
            </p>

            {/* Quick CTAs */}
            <div className="mt-8 flex justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-3 bg-white text-[#020617] px-6 py-3 rounded-sm font-bold uppercase text-[10px] tracking-[0.2em] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition">Contact the Team</a>
              <a href="/projects" className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-sm text-slate-300 hover:border-cyan-500/40 transition">View Projects</a>
            </div>
          </div>

          {/* --- THE 4-PERSON TEAM GRID --- */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={member.image} alt={member.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                    
                    {/* Operator Code */}
                    <div className="absolute top-4 right-4 bg-[#020617]/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded-sm">
                      <span className="font-mono text-[10px] text-cyan-400 tracking-widest">{member.code}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 relative z-10 -mt-12">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4">{member.role}</p>
                    <p className="text-sm text-slate-400 border-t border-white/10 pt-4">
                      Protocol: <span className="text-white">{member.specialty}</span>
                    </p>

                    {/* Short bio for clarity */}
                    {member.bio && (
                      <p className="mt-3 text-sm text-slate-400">{member.bio}</p>
                    )}

                    {/* Social/Contact Links */}
                    <div className="flex items-center gap-4 mt-6 opacity-50 group-hover:opacity-100 transition-opacity">
                      <a href="#" aria-label={`Open ${member.name} GitHub`}>
                        <Github size={16} className="text-slate-400 hover:text-white" />
                      </a>
                      <a href="#" aria-label={`Open ${member.name} LinkedIn`}>
                        <Linkedin size={16} className="text-slate-400 hover:text-white" />
                      </a>
                      <a href={`mailto:hello@pladex.co?subject=Hello%20${encodeURIComponent(member.name)}`} aria-label={`Email ${member.name}`}>
                        <Mail size={16} className="text-slate-400 hover:text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>


          {/* --- MISSION & PROTOCOLS (Formerly "Who We Are & Values") --- */}
          <div className="grid lg:grid-cols-12 gap-16 mb-16">
            
            {/* Left Side: Mission */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0f172a]/50 border border-white/5 rounded-sm p-8 lg:p-10 backdrop-blur-xl sticky top-32">
                <h2 className="text-3xl font-bold text-white mb-6">Execution Standard</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Our multidisciplinary team blends strategy, design, and engineering to deliver solutions that are elegant, secure, and built for real-world stress.
                </p>
                <p className="text-slate-400 leading-relaxed pb-8 border-b border-white/10">
                  We believe in transparency, collaborative problem-solving, and pushing the boundaries of what's technically possible for our clients.
                </p>
                
                {/* Stats Grid inside the left panel */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: 'Combined Exp.', value: '25 Yrs' },
                    { label: 'Deployments', value: '50+' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-4 rounded-sm text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Core Values (Protocols) */}
            <div className="lg:col-span-7">
              <h2 className="text-sm font-mono text-slate-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-white/20"></span>
                Operational Protocols
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Focused Solutions', desc: 'Every line of code serves a strategic business purpose.' },
                  { icon: Users, title: 'Direct Access', desc: 'No project managers. You speak directly to the engineers building your product.' },
                  { icon: Zap, title: 'Modern Stack', desc: 'We utilize edge-networks and modern frameworks for maximum performance.' },
                  { icon: ShieldCheck, title: 'Zero-Trust Security', desc: 'Data integrity and security are built into the foundation, not added later.' },
                  { icon: Rocket, title: 'Scalable Architecture', desc: 'We build for day one, but architect for day one thousand.' },
                  { icon: Lightbulb, title: 'Creative Logic', desc: 'Complex problems solved with elegant, maintainable code.' },
                ].map((value, i) => {
                  const Icon = value.icon
                  return (
                    <div key={i} className="group p-6 rounded-sm border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-sm bg-[#0f172a] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                          <Icon className="h-4 w-4 text-cyan-400" />
                        </div>
                        <h3 className="font-bold text-white text-sm tracking-wide">{value.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}