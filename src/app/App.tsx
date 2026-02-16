import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import heroImage from 'figma:asset/75b009ac815f215fde838856dab18460a7c12874.png';
import hostImage from 'figma:asset/a7b65bcf530aceea30c905d184404f109c0baa41.png';
import tonyRobbinsImage from 'figma:asset/e414d3dce6ca47805d47aedf017eaaac7fb344f5.png';
import decorYellowPink from 'figma:asset/dccc9e209535f5459dad205c7e975586fdc46d48.png';
import decorPink from 'figma:asset/1b2941258021cbad8f47ff4d8e32051f64a95516.png';
import biggerPictureBg from 'figma:asset/bffafcfbe3937a0d8cfa23f3a52fcff50ef1b6ff.png';
import decorPink3D from 'figma:asset/18e24aeceaaa837bb386542291adceb5b81df26b.png';
import conversationBg from 'figma:asset/a6909708441098b2934942550d73ba8d25b2395a.png';
import Logo1 from '../imports/1';
import Logo2 from '../imports/2';
import Logo3 from '../imports/3';
import Logo4 from '../imports/4';
import Logo5 from '../imports/5';
import Logo6 from '../imports/6';
import LongevityLoungeLogo from '../imports/Group1171275810';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

// Reveal component wrapper
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className="font-['Outfit'] bg-[var(--black)] text-[var(--off-white)] overflow-x-hidden antialiased">
      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] py-6 bg-[rgba(10,10,10,0.9)] backdrop-blur-[20px] border-b border-[rgba(255,0,128,0.15)]">
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
          <div className="w-[180px] h-[55px]" style={{ '--fill-0': 'var(--off-white)', '--fill-1': 'var(--pink)' } as React.CSSProperties}>
            <LongevityLoungeLogo />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.1em] uppercase text-white px-7 py-3 bg-[var(--pink)] border-none cursor-pointer transition-all duration-300 font-semibold hover:bg-[var(--pink-bright)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--pink-glow)]"
            style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
          >
            Register Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-[140px] pb-[100px] relative overflow-hidden">
        {/* Background Glows */}
        <div 
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] pointer-events-none animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--pink-glow) 0%, transparent 70%)',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-20 items-center relative z-[2]">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold"
            >
              Free Live Webinar
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-['Outfit'] font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(1.8rem,5.5vw,3.8rem)] mt-6 mb-5"
            >
              <span className="whitespace-nowrap">It's Time to Put</span> <br />
              <span className="text-[var(--pink)]">Your Health First.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[clamp(1.2rem,3vw,1.8rem)] text-[var(--light-gray)] mb-4 max-w-[900px] font-normal"
            >
              Without Slowing Down Your Life, Your Business, or Your Ambition.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-lg text-[var(--light-gray)] max-w-[700px] mb-12 leading-[1.8]"
            >
              A private webinar for high performers who want more energy, clarity, and control — now and for decades to come.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex gap-12 mb-10 flex-wrap"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <span className="font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.05em] uppercase font-medium">Live Webinar</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎟️</span>
                <span className="font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.05em] uppercase font-medium">Free to Attend</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                <span className="font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.05em] uppercase font-medium">Limited Seats</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.1em] uppercase no-underline text-[var(--black)] bg-[var(--pink)] px-12 py-5 border-none cursor-pointer transition-all duration-[0.4s] font-semibold relative hover:bg-[var(--pink-bright)] hover:-translate-y-1 hover:scale-[1.02]"
                style={{
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  animation: 'glow 3s ease-in-out infinite'
                }}
              >
                Save Your Seat
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="mt-12"
            >
              <p className="font-['JetBrains_Mono'] text-[0.75rem] tracking-[0.1em] uppercase text-[var(--light-gray)]">
                Hosted by <span className="text-[var(--pink)] font-semibold">Alessia Minkus</span>, Founder of Longevity Lounge
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="relative md:order-none -order-1 max-w-[400px] md:max-w-none mx-auto"
          >
            <img
              src={heroImage}
              alt="Alessia Minkus"
              className="w-full h-auto block shadow-[0_24px_80px_rgba(255,0,128,0.3)] transition-all duration-[0.6s] hover:-translate-y-2 hover:shadow-[0_32px_100px_rgba(255,0,128,0.4),0_0_60px_rgba(255,255,0,0.2)]"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Credential Strip */}
      <section className="py-8 bg-[var(--near-black)] border-y border-[rgba(255,0,128,0.1)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <p className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--light-gray)] font-semibold">
              As Featured In
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center"
          >
            {[
              { component: Logo1, name: 'Inc 5000' },
              { component: Logo2, name: 'Forbes' },
              { component: Logo3, name: 'Entrepreneur' },
              { component: Logo4, name: 'Fox Business' },
              { component: Logo5, name: 'Media' },
              { component: Logo6, name: 'CBS' }
            ].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="w-[120px] h-[60px] flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ '--fill-0': 'var(--off-white)' } as React.CSSProperties}
              >
                <logo.component />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Who This Is For Section */}
      <section className="py-[120px] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <Reveal>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold">
                Who This Is For
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,5vw,3.5rem)] mb-6 leading-[1.15]">
                This conversation is for you if:
              </h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "You're successful — but feel like your energy costs more than it used to",
              "You don't want health to become something you deal with later",
              "You're tired of conflicting advice and wellness trends",
              "You value education, autonomy, and smart decisions",
              "You want clarity — not overwhelm"
            ].map((text, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-[var(--near-black)] to-[var(--charcoal)] p-9 border-l-[3px] border-[var(--pink)] relative overflow-hidden transition-all duration-[0.4s] cursor-pointer hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--yellow)] hover:shadow-[0_16px_48px_rgba(255,255,0,0.2),0_0_80px_rgba(255,255,0,0.1)] group h-full flex flex-col">
                  <div className="absolute top-6 right-6 text-4xl text-[var(--pink)] opacity-20 transition-all duration-[0.4s] group-hover:text-[var(--yellow)] group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-[360deg]">
                    ✓
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, var(--yellow-subtle), transparent)' }}
                  />
                  <p className="text-lg leading-[1.7] text-[var(--off-white)] relative z-[1] flex-1">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal>
            <div className="bg-gradient-to-br from-[var(--charcoal)] to-[var(--near-black)] p-12 border-2 border-[rgba(255,0,128,0.2)] relative transition-all duration-[0.4s] cursor-pointer hover:border-[var(--yellow)] hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,0,0.2)] group"
              style={{ clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }}
            >
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-[0.4s]"
                style={{ background: 'radial-gradient(circle at 50% 50%, var(--pink-subtle), transparent)' }}
              />
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 50% 50%, var(--yellow-subtle), transparent)' }}
              />
              <p className="text-[1.3rem] text-center relative z-[1] font-medium">
                If you've ever thought: <span className="text-[var(--pink)] font-semibold transition-colors duration-[0.4s] group-hover:text-[var(--yellow)]">"I'll focus on this once things slow down"</span> — this is for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Authority Section */}
      <section className="py-[120px] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
            <Reveal>
              <div className="relative space-y-6">
                <img
                  src={hostImage}
                  alt="Alessia Minkus"
                  className="w-full h-auto block shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  style={{
                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                  }}
                />
                <img
                  src={tonyRobbinsImage}
                  alt="Tony Robbins & Alessia Minkus"
                  className="w-[115%] h-auto block shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-[0.6s] hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(255,0,128,0.3)] -ml-[7.5%]"
                  style={{
                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                  }}
                />
              </div>
            </Reveal>
            
            <Reveal>
              <div>
                <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold mb-6">
                  Meet Your Host
                </div>
                <h3 className="font-['Outfit'] text-4xl font-extrabold mb-4">Alessia Minkus</h3>
                <p className="font-['JetBrains_Mono'] text-[0.75rem] tracking-[0.12em] uppercase text-[var(--pink)] mb-8 font-semibold">
                  Founder, Longevity Lounge
                </p>
                
                <p className="mb-5 text-[var(--light-gray)] leading-[1.8] text-lg">
                  Alessia is a multi-award-winning entrepreneur, Inc. 5000 founder and Power Partner, and advisor to business leaders and founders around the world.
                </p>
                
                <p className="mb-5 text-[var(--light-gray)] leading-[1.8] text-lg">
                  She has built and scaled 10+ companies, generated hundreds of millions in revenue, and spent decades working alongside high performers.
                </p>
                
                <p className="mb-5 text-[var(--light-gray)] leading-[1.8] text-lg">
                  But what shaped her work in longevity wasn't business success — it was what she saw behind the scenes.
                </p>
                
                <blockquote className="bg-[var(--near-black)] p-8 border-l-4 border-[var(--pink)] my-8 italic text-xl text-[var(--off-white)]">
                  "The most capable, driven people I knew were often the ones quietly putting their health last."
                </blockquote>
                
                <p className="mb-5 text-[var(--light-gray)] leading-[1.8] text-lg">
                  After spending time with leaders like Tony Robbins and Sir Richard Branson, one pattern became undeniable:
                </p>
                
                <p className="mb-5 text-[var(--light-gray)] leading-[1.8] text-lg">
                  <strong className="text-[var(--pink)]">They don't treat health as a side conversation. They treat it as a strategic priority.</strong>
                </p>
                
                <p className="mb-5 text-[var(--light-gray)] leading-[1.8] text-lg">
                  This webinar is where Alessia shares how that mindset actually works.
                </p>
                
                <div className="mt-10 grid gap-4">
                  {[
                    'Multi-award-winning entrepreneur',
                    'Inc. 5000 founder and Power Partner',
                    'Built and scaled 10+ companies',
                    'Advisor to global business leaders'
                  ].map((cred, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-4 p-4 px-5 bg-[var(--near-black)] border-l-2 border-[var(--pink)] transition-all duration-[0.4s] cursor-pointer relative overflow-hidden hover:translate-x-2 hover:border-[var(--yellow)] hover:shadow-[0_4px_20px_rgba(255,255,0,0.15)] group"
                    >
                      <span className="text-[var(--pink)] text-xl font-bold transition-all duration-[0.4s] relative z-[1] group-hover:text-[var(--yellow)] group-hover:translate-x-1">▸</span>
                      <span className="relative z-[1]">{cred}</span>
                      <div 
                        className="absolute inset-0 opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100"
                        style={{ background: 'linear-gradient(90deg, var(--yellow-subtle), transparent)' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Urgency Section */}
      <section className="py-[120px] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <Reveal>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold">
                Why Now
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,5vw,3.5rem)] mb-6 leading-[1.15]">
                Why most people wait too long
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-xl text-[var(--light-gray)] max-w-[800px] leading-[1.7]">
                Most people don't lose their health overnight. They lose options.
              </p>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Energy fades gradually', desc: "It becomes your new normal before you realize it's changed" },
                { title: 'Recovery slows quietly', desc: 'What used to take days now takes weeks' },
                { title: 'Focus slips subtly', desc: 'The sharpness dulls, one percentage point at a time' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-[var(--near-black)] p-10 text-center transition-all duration-[0.4s] cursor-pointer relative overflow-hidden hover:scale-105 hover:bg-gradient-to-br hover:from-[var(--near-black)] hover:to-[var(--charcoal)] group"
                >
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100"
                    style={{ background: 'radial-gradient(circle at 50% 50%, var(--yellow-subtle), transparent)' }}
                  />
                  <h4 className="font-['Outfit'] text-2xl mb-3 font-bold relative z-[1] transition-colors duration-[0.4s] group-hover:text-[var(--yellow)]">
                    {item.title}
                  </h4>
                  <p className="text-[var(--light-gray)] text-[0.95rem] relative z-[1]">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal>
            <div className="bg-gradient-to-br from-[var(--charcoal)] to-[var(--near-black)] p-12 border-2 border-[rgba(255,0,128,0.2)] relative transition-all duration-[0.4s] cursor-pointer mt-16 hover:border-[var(--yellow)] hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,0,0.2)] group"
              style={{ clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }}
            >
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-[0.4s]"
                style={{ background: 'radial-gradient(circle at 50% 50%, var(--pink-subtle), transparent)' }}
              />
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 50% 50%, var(--yellow-subtle), transparent)' }}
              />
              <p className="text-[1.3rem] text-center relative z-[1] font-medium">
                By the time something feels "wrong," the conversation changes — from <span className="text-[var(--pink)] font-semibold transition-colors duration-[0.4s] group-hover:text-[var(--yellow)]">choice to constraint</span>.
              </p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="mt-12 text-center">
              <p className="text-xl text-[var(--light-gray)] mb-4">
                This isn't about fear. It's about <strong className="text-[var(--pink)]">leverage</strong>.
              </p>
              <p className="text-lg text-[var(--off-white)] max-w-[700px] mx-auto">
                The earlier you understand what's happening in your body, the more flexibility you keep. And that window doesn't stay open forever.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Teaser Section */}
      <section className="py-[120px] relative overflow-hidden">
        {/* Floating decorative elements */}
        <motion.img
          src={decorYellowPink}
          alt=""
          className="absolute top-[15%] left-[8%] w-[200px] h-auto opacity-50 pointer-events-none z-[1]"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src={decorPink}
          alt=""
          className="absolute bottom-[10%] right-[5%] w-[180px] h-auto opacity-45 pointer-events-none z-[1]"
          animate={{
            y: [0, 20, 0],
            x: [0, -12, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-[900px] mx-auto px-8 relative z-[2]">
          <Reveal>
            <div className="bg-gradient-to-br from-[var(--charcoal)] to-[var(--near-black)] p-[80px_60px] text-center border border-[rgba(255,0,128,0.2)] relative overflow-hidden">
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 40%, var(--pink-subtle), transparent)' }}
              />
              
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold mb-6 relative z-[1]">
                The Core Distinction
              </div>
              
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,4vw,3rem)] mb-8 relative z-[1]">
                Living longer isn't the goal.<br />Living well is.
              </h2>
              
              <p className="text-[1.3rem] text-[var(--off-white)] mb-12 relative z-[1]">
                There's a distinction most people don't learn until much later — one that quietly determines how the second half of life feels.
              </p>
              
              <ul className="text-left max-w-[800px] mx-auto relative z-[1] list-none">
                {[
                  "Why living longer doesn't automatically mean living better",
                  "Why waiting for symptoms changes the entire game",
                  "Why earlier awareness creates radically different outcomes"
                ].map((item, i) => (
                  <li key={i} className="py-5 border-b border-[rgba(255,0,128,0.2)] text-lg text-[var(--off-white)] flex items-start gap-4 last:border-b-0">
                    <span className="text-[var(--pink)] font-bold text-xl flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 relative z-[1]">
                <p className="text-[1.3rem] font-semibold text-[var(--pink)]">
                  This single distinction changes how high performers think about health.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* System Failure Section */}
      <section className="py-[120px] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <Reveal>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--pink)] font-semibold">
                The Real Problem
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,5vw,3.5rem)] mb-6 leading-[1.15]">
                Why health advice feels confusing<br />(and why it's not your fault)
              </h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { num: '01', title: 'Platforms optimize for clicks', desc: 'Algorithms reward sensationalism, not outcomes. The content that reaches you is designed to engage, not educate.' },
              { num: '02', title: 'Extremes outperform nuance', desc: "Moderate, evidence-based advice gets buried. What trends is usually what's most provocative — not most useful." },
              { num: '03', title: 'Trends replace fundamentals', desc: "Every week there's a new protocol, supplement, or hack. The fundamentals that actually matter get lost in the noise." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[var(--near-black)] p-10 border-t-4 border-[var(--pink)] relative transition-all duration-[0.4s] cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(255,255,0,0.15)] hover:bg-gradient-to-br hover:from-[var(--near-black)] hover:to-[var(--charcoal)] group h-full flex flex-col">
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 bg-[var(--yellow)] origin-left scale-x-0 transition-transform duration-[0.4s] group-hover:scale-x-100"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100"
                    style={{ background: 'radial-gradient(circle at 50% 0%, var(--yellow-subtle), transparent)' }}
                  />
                  
                  <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--pink)] mb-4 font-semibold relative z-[1] transition-colors duration-[0.4s] group-hover:text-[var(--yellow)]">
                    Problem {item.num}
                  </div>
                  <h3 className="font-['Outfit'] text-2xl mb-4 font-bold relative z-[1]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--light-gray)] leading-[1.7] relative z-[1] flex-1">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal>
            <div className="bg-[var(--charcoal)] p-16 text-center border border-[rgba(255,0,128,0.2)] mt-16">
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] mb-8 font-semibold">
                Most People Are Stuck Between
              </div>
              <div className="flex justify-center items-center gap-8 flex-wrap mb-8">
                <span className="font-['Outfit'] text-2xl font-bold">Sensationalized wellness content</span>
                <span className="text-[var(--pink)] text-3xl font-extrabold">×</span>
                <span className="font-['Outfit'] text-2xl font-bold">Reactive medical care</span>
              </div>
              <p className="text-[1.3rem] mb-6 leading-[1.6]">
                And <strong className="text-[var(--pink)]">no clear, integrated path forward</strong>.
              </p>
              <p className="text-xl text-[var(--pink)] font-semibold">
                This webinar exists to change that.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Outcomes Section */}
      <section className="py-[120px] relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <Reveal>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold">
                What You'll Get
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,5vw,3.5rem)] mb-6 leading-[1.15]">
                By the end of this session, you'll have:
              </h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { num: '01', title: 'A clearer lens', desc: 'For understanding your health — beyond symptoms, beyond trends.' },
              { num: '02', title: 'A new way to prioritize', desc: 'What actually matters for long-term performance and wellbeing.' },
              { num: '03', title: 'Fewer questions', desc: 'And better ones. The kind that lead to real answers, not more confusion.' },
              { num: '04', title: 'A sense of control', desc: "Most people don't regain until much later — if they regain it at all." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-[var(--near-black)] to-[var(--charcoal)] p-10 border border-[rgba(255,0,128,0.3)] relative overflow-hidden transition-all duration-[0.4s] cursor-pointer hover:-translate-y-3 hover:-rotate-2 hover:border-[var(--yellow)] hover:shadow-[0_20px_60px_rgba(255,255,0,0.2)] group h-full flex flex-col">
                  <div className="font-['Outfit'] text-5xl text-[var(--pink)] opacity-30 font-extrabold mb-4 relative z-[1] transition-all duration-[0.4s] group-hover:text-[var(--yellow)] group-hover:opacity-60 group-hover:scale-110">
                    {item.num}
                  </div>
                  <h3 className="font-['Outfit'] text-2xl mb-3 font-bold relative z-[1]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--light-gray)] leading-[1.7] relative z-[1] flex-1">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal>
            <div className="flex justify-center gap-12 flex-wrap p-14 bg-[var(--near-black)] border border-dashed border-[rgba(255,0,128,0.3)]">
              <span className="font-['Outfit'] text-3xl text-[var(--light-gray)] line-through opacity-40 font-semibold">A Checklist</span>
              <span className="font-['Outfit'] text-3xl text-[var(--light-gray)] line-through opacity-40 font-semibold">A Protocol</span>
              <span className="font-['Outfit'] text-4xl text-[var(--pink)] no-underline opacity-100 font-extrabold">Clarity.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Lounge Section */}
      <section className="bg-gradient-to-br from-[var(--pink-dark)] to-[var(--pink)] text-white py-[120px] relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${biggerPictureBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay for text readability */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom right, rgba(153, 0, 76, 0.85), rgba(255, 0, 128, 0.85))'
          }}
        />
        
        <div className="max-w-[1200px] mx-auto px-8 relative z-[2]">
          <div className="mb-16">
            <Reveal>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.8)] font-semibold">
                The Bigger Picture
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,5vw,3.5rem)] mb-6 leading-[1.15] text-white">
                Why Longevity Lounge Exists
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-xl text-[rgba(255,255,255,0.9)] max-w-[800px] leading-[1.7]">
                Longevity Lounge was built to support people after the realization hits. It's where education, structure, expert insight, and community come together — so health doesn't become another solo project or another thing you start and abandon.
              </p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Community Matters', desc: 'Why real change requires connection, accountability, and shared experience — not just information.' },
              { title: 'Sustainable Progress', desc: 'How people sustain progress without obsession. No extremes. No burnout. Just consistent, informed action.' },
              { title: 'Real Support', desc: 'What support actually looks like in practice — from expert-led guidance to peer-driven accountability.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[rgba(0,0,0,0.3)] p-10 border border-[rgba(255,255,255,0.2)] backdrop-blur-[10px] transition-all duration-[0.4s] cursor-pointer relative overflow-hidden hover:-translate-y-2 hover:scale-[1.03] hover:border-[var(--yellow)] hover:shadow-[0_16px_48px_rgba(255,255,0,0.3)] group h-full flex flex-col">
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-[0.4s] group-hover:opacity-100"
                    style={{ background: 'linear-gradient(135deg, var(--yellow-subtle), transparent)' }}
                  />
                  <h3 className="font-['Outfit'] text-2xl mb-3 font-bold relative z-[1] transition-colors duration-[0.4s] group-hover:text-[var(--yellow)]">
                    {item.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.9)] leading-[1.7] relative z-[1] flex-1">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Proof Section */}
      <section className="py-[100px] text-center">
        <div className="max-w-[1200px] mx-auto px-8">
          <Reveal>
            <div>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold mb-8">
                What People Say
              </div>
              <p className="font-['Outfit'] text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.5] max-w-[900px] mx-auto font-semibold">
                "Most people who attend say the same thing afterward:<br />
                <span className="text-[var(--pink)] font-extrabold">I wish I had learned this earlier.</span>"
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="h-px m-0"
        style={{ background: 'linear-gradient(90deg, transparent, var(--pink-subtle), var(--pink-glow), var(--pink-subtle), transparent)' }}
      />

      {/* Final CTA */}
      <section className="py-[120px] text-center border-t border-b border-[var(--pink)] relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${conversationBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay for text readability */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom right, rgba(20, 20, 20, 0.92), rgba(30, 30, 30, 0.88))'
          }}
        />
        
        <div className="max-w-[1200px] mx-auto px-8 relative z-[2]">
          <Reveal>
            <div>
              <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--pink)] font-semibold mb-8">
                Join the Conversation
              </div>
              <h2 className="font-['Outfit'] font-extrabold text-[clamp(2rem,5vw,3.5rem)] mb-8 leading-[1.3]">
                This is one of those conversations people rarely regret attending —<br />and often regret postponing.
              </h2>
              <p className="text-xl text-[var(--light-gray)] max-w-[700px] mx-auto mb-14 leading-[1.7]">
                Join Alessia Minkus for a candid, no-hype conversation about what it actually takes to protect your health — while building everything else.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.1em] uppercase no-underline text-[var(--black)] bg-[var(--pink)] px-12 py-5 border-none cursor-pointer transition-all duration-[0.4s] font-semibold relative hover:bg-[var(--pink-bright)] hover:-translate-y-1 hover:scale-[1.02]"
                style={{
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  animation: 'glow 3s ease-in-out infinite'
                }}
              >
                Reserve Your Seat
              </button>
              <p className="font-['JetBrains_Mono'] text-[0.75rem] tracking-[0.15em] uppercase text-[var(--light-gray)] mt-8">
                Free • Live • Limited Availability
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final Urgency */}
      <section className="pt-[180px] pb-[140px] text-center relative overflow-visible">
        {/* Floating decorative element - centered at top */}
        <motion.img
          src={decorPink3D}
          alt=""
          className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[200px] h-auto opacity-60 pointer-events-none z-[1]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-[1200px] mx-auto px-8 relative z-[2]">
          <Reveal>
            <div>
              <p className="font-['Outfit'] text-2xl text-white mb-5 font-medium">
                The best time to protect your health was years ago.
              </p>
              <p className="font-['Outfit'] text-[clamp(1.8rem,4vw,2.8rem)] text-[var(--off-white)] mb-14 font-extrabold">
                The second best time is <span className="text-[var(--pink)] border-b-4 border-[var(--pink)] pb-1">now</span>  while your options are still wide open.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.1em] uppercase no-underline text-[var(--black)] bg-[var(--pink)] px-12 py-5 border-none cursor-pointer transition-all duration-[0.4s] font-semibold relative hover:bg-[var(--pink-bright)] hover:-translate-y-1 hover:scale-[1.02]"
                style={{
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  animation: 'glow 3s ease-in-out infinite'
                }}
              >
                Save Your Seat
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--near-black)] py-12 text-center border-t border-[rgba(255,0,128,0.2)]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="w-[200px] h-[60px] mx-auto mb-4" style={{ '--fill-0': 'var(--off-white)', '--fill-1': 'var(--pink)' } as React.CSSProperties}>
            <LongevityLoungeLogo />
          </div>
          <p className="text-[var(--light-gray)] text-sm">
            © 2026 Longevity Lounge. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-[10px] z-[10000] flex items-center justify-center p-6"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--charcoal)] max-w-[560px] w-full p-16 relative border border-[rgba(255,0,128,0.3)]"
            style={{ clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)' }}
          >
            {!isFormSubmitted ? (
              <>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 bg-none border-none text-5xl text-[var(--light-gray)] cursor-pointer transition-colors duration-300 leading-none font-light hover:text-[var(--pink)]"
                >
                  ×
                </button>
                
                <div className="font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--yellow)] font-semibold mb-5">
                  Free Live Webinar
                </div>
                
                <h3 className="font-['Outfit'] text-4xl mb-4 font-extrabold">Save Your Seat</h3>
                
                <p className="text-[var(--light-gray)] mb-10 leading-[1.7]">
                  Register now to join Alessia Minkus for this private webinar on health, longevity, and performance.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.1em] uppercase text-[var(--off-white)] mb-2 font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full p-4 bg-[var(--near-black)] border border-[rgba(255,0,128,0.3)] text-[var(--off-white)] transition-all duration-300 focus:outline-none focus:border-[var(--pink)] focus:shadow-[0_0_0_3px_var(--pink-subtle)]"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.1em] uppercase text-[var(--off-white)] mb-2 font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full p-4 bg-[var(--near-black)] border border-[rgba(255,0,128,0.3)] text-[var(--off-white)] transition-all duration-300 focus:outline-none focus:border-[var(--pink)] focus:shadow-[0_0_0_3px_var(--pink-subtle)]"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.1em] uppercase text-[var(--off-white)] mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full p-4 bg-[var(--near-black)] border border-[rgba(255,0,128,0.3)] text-[var(--off-white)] transition-all duration-300 focus:outline-none focus:border-[var(--pink)] focus:shadow-[0_0_0_3px_var(--pink-subtle)]"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block font-['JetBrains_Mono'] text-[0.7rem] tracking-[0.1em] uppercase text-[var(--off-white)] mb-2 font-semibold">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Your company"
                      className="w-full p-4 bg-[var(--near-black)] border border-[rgba(255,0,128,0.3)] text-[var(--off-white)] transition-all duration-300 focus:outline-none focus:border-[var(--pink)] focus:shadow-[0_0_0_3px_var(--pink-subtle)]"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-4 inline-block font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.1em] uppercase no-underline text-[var(--black)] bg-[var(--pink)] px-12 py-5 border-none cursor-pointer transition-all duration-[0.4s] font-semibold relative hover:bg-[var(--pink-bright)] hover:-translate-y-1 hover:scale-[1.02]"
                    style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
                  >
                    Reserve My Seat
                  </button>
                  
                  <p className="text-center text-xs text-[var(--light-gray)] mt-6">
                    Your information is 100% secure. We'll never share your email.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="text-6xl mb-6 text-[var(--pink)]">✓</div>
                <h3 className="font-['Outfit'] text-3xl mb-4 font-extrabold">You're In!</h3>
                <p className="text-[var(--light-gray)] leading-[1.7] mb-8">
                  Check your inbox for confirmation and webinar details. We can't wait to see you there.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsFormSubmitted(false);
                  }}
                  className="inline-block font-['JetBrains_Mono'] text-[0.85rem] tracking-[0.1em] uppercase no-underline text-[var(--black)] bg-[var(--pink)] px-12 py-5 border-none cursor-pointer transition-all duration-[0.4s] font-semibold relative hover:bg-[var(--pink-bright)] hover:-translate-y-1 hover:scale-[1.02]"
                  style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
                >
                  Got It
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 40px var(--pink-glow), 0 0 80px rgba(255, 0, 128, 0.2);
          }
          50% {
            box-shadow: 0 0 60px var(--pink-glow), 0 0 120px rgba(255, 0, 128, 0.3);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </div>
  );
}