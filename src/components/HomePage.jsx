import { FaRocket, FaCogs, FaMagic, FaTools, FaBlog, FaStar, FaArrowRight, FaCheck, FaFire, FaBolt, FaHeart, FaGem, FaCrown, FaZap } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [glitchText, setGlitchText] = useState("Link Aura");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create particle trail
      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        velocity: { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 }
      };
      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Glitch effect for title
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchTexts = ["L1nk Aur@", "Link AurΔ", "Lînk Âurã", "Link Aura", "£ink Aura"];
      setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    }, 2000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Update particle positions
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.velocity.x,
        y: p.y + p.velocity.y,
        size: p.size * 0.98
      })).filter(p => p.size > 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const tools = [
    { icon: FaBlog, name: "Blog Generator", color: "from-pink-500 via-red-500 to-yellow-500", img: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=300&fit=crop", emoji: "📝" },
    { icon: FaMagic, name: "Hashtag Wizard", color: "from-purple-500 via-indigo-500 to-cyan-500", img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop", emoji: "🪄" },
    { icon: FaTools, name: "Meta Tag Creator", color: "from-blue-500 via-teal-500 to-green-500", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", emoji: "🏷️" },
    { icon: FaRocket, name: "Ad Banner Maker", color: "from-green-500 via-lime-500 to-yellow-500", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop", emoji: "🚀" },
    { icon: FaFire, name: "Trend Analyzer", color: "from-orange-500 via-red-500 to-pink-500", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", emoji: "🔥" },
    { icon: FaBolt, name: "Speed Optimizer", color: "from-yellow-500 via-orange-500 to-red-500", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop", emoji: "⚡" },
  ];

  const templates = [
    { title: "Tech Guru", gradient: "from-blue-600 via-purple-600 to-pink-600", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", emoji: "💻", stars: 5 },
    { title: "Fashionista", gradient: "from-pink-600 via-rose-600 to-red-600", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop", emoji: "👗", stars: 5 },
    { title: "Health Coach", gradient: "from-green-600 via-teal-600 to-cyan-600", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", emoji: "🏃‍♀️", stars: 4 },
    { title: "Artist", gradient: "from-purple-600 via-indigo-600 to-blue-600", img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop", emoji: "🎨", stars: 5 },
    { title: "Chef", gradient: "from-orange-600 via-yellow-600 to-red-600", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", emoji: "👨‍🍳", stars: 4 },
    { title: "Musician", gradient: "from-indigo-600 via-purple-600 to-pink-600", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", emoji: "🎵", stars: 5 },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Crazy Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Multiple moving gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-pink-900 via-red-900 to-orange-900 opacity-50 animate-bounce"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-cyan-900 to-blue-900 opacity-30" style={{animation: 'spin 20s linear infinite'}}></div>
        
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-bounce opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className={`w-8 h-8 bg-gradient-to-r ${['from-cyan-400 to-blue-500', 'from-purple-400 to-pink-500', 'from-green-400 to-cyan-500', 'from-yellow-400 to-orange-500', 'from-red-400 to-pink-500'][i % 5]} ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rotate-45' : 'rounded-lg'} animate-spin`}></div>
          </div>
        ))}
        
        {/* Mouse trail particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        
        {/* Scrolling background effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-purple-500/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Glitchy Navbar */}
      <nav className="w-full px-6 py-4 border-b-2 border-gradient-to-r from-cyan-500 to-purple-500 flex justify-between items-center backdrop-blur-xl bg-black/50 sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <FaStar className="text-cyan-400 animate-spin text-2xl" />
            <FaGem className="absolute top-0 left-0 text-purple-400 animate-ping text-xl" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            {glitchText}
          </h1>
          <FaCrown className="text-yellow-400 animate-bounce" />
        </div>
        <div className="hidden md:flex space-x-6">
          {["🚀 Dashboard", "🛠️ Tools", "🎨 Templates", "📝 Blog", "💎 Pricing"].map((item, i) => (
            <a
              key={item}
              href={`#${item.split(' ')[1].toLowerCase()}`}
              className="relative hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 group font-bold animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 shadow-lg"></span>
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="/login" className="text-sm hover:text-cyan-300 transition-all duration-300 animate-pulse border border-cyan-400 px-3 py-2 rounded-full">Login</a>
          <a href="/signup" className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-6 py-2 rounded-full text-sm hover:scale-110 transform transition-all duration-300 shadow-2xl animate-pulse font-bold">
            🚀 Get Started
          </a>
        </div>
      </nav>

      {/* EXPLOSIVE Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(45deg, rgba(15, 23, 42, 0.9), rgba(88, 28, 135, 0.9), rgba(219, 39, 119, 0.8)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop')",
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="text-center px-6 relative z-10">
          <div className="mb-8 animate-bounce">
            <div className="text-8xl animate-spin inline-block">🌟</div>
            <div className="text-6xl animate-pulse inline-block mx-4">🚀</div>
            <div className="text-8xl animate-bounce inline-block">✨</div>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse leading-tight">
            BUILD EPIC BIO PAGES
            <br />
            <span className="text-6xl md:text-9xl animate-bounce inline-block">WITH AI</span>
            <span className="text-4xl animate-spin inline-block ml-4">🔥</span>
          </h2>
          
          <div className="flex justify-center space-x-4 mb-8">
            {["🎯", "💎", "⚡", "🌈", "🎪", "🎭", "🎨", "🎵"].map((emoji, i) => (
              <div key={i} className={`text-4xl animate-bounce`} style={{ animationDelay: `${i * 0.1}s` }}>
                {emoji}
              </div>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 animate-pulse font-bold">
            🚀 Create MIND-BLOWING link-in-bio pages, SMART banners, VIRAL blogs, and SOCIAL tools with ONE CLICK! 
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              ⚡ ZERO CODING REQUIRED ⚡
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-12 py-6 rounded-2xl text-xl font-black hover:scale-110 transform transition-all duration-300 shadow-2xl animate-pulse flex items-center justify-center gap-3 border-4 border-white/30">
              🚀 START CREATING NOW <FaArrowRight className="animate-bounce" />
            </button>
            <button className="border-4 border-purple-400 bg-purple-400/20 px-12 py-6 rounded-2xl text-xl font-black hover:bg-purple-400/40 transition-all duration-300 animate-bounce flex items-center gap-3">
              🎬 WATCH EPIC DEMO <FaBolt className="animate-spin" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-8 animate-pulse">
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-400 animate-bounce">50K+</div>
              <div className="text-sm font-bold">🔥 CREATORS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400 animate-bounce">1M+</div>
              <div className="text-sm font-bold">⚡ BIO PAGES</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400 animate-bounce">99.9%</div>
              <div className="text-sm font-bold">💎 SATISFACTION</div>
            </div>
          </div>
        </div>
        
        {/* Floating action elements */}
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full shadow-2xl">
            <FaRocket className="text-white text-2xl animate-spin" />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full shadow-2xl">
            <FaMagic className="text-white text-2xl animate-bounce" />
          </div>
        </div>
      </div>

      {/* INSANE Tools Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="text-6xl animate-bounce mb-4">🛠️⚡🚀</div>
            <h3 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              LEGENDARY AI TOOLS
            </h3>
            <p className="text-xl font-bold text-gray-300 animate-bounce">
              🔥 UNLEASH YOUR CREATIVE POWER 🔥
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {tools.map(({ icon: Icon, name, color, img, emoji }, i) => (
              <div 
                key={i} 
                className="group cursor-pointer transform hover:scale-110 transition-all duration-500 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-transparent group-hover:border-white/50">
                  <img 
                    src={img} 
                    alt={name}
                    className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80 group-hover:opacity-90 transition-opacity animate-pulse`}></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                  
                  <div className="absolute top-4 right-4 text-4xl animate-bounce">
                    {emoji}
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="text-white text-3xl animate-spin group-hover:animate-pulse" />
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, j) => (
                          <FaStar key={j} className="text-yellow-400 animate-pulse" />
                        ))}
                      </div>
                    </div>
                    <h4 className="text-xl font-black text-white mb-2 group-hover:animate-bounce">
                      {name}
                    </h4>
                    <p className="text-sm text-white/90 font-bold animate-pulse">
                      🚀 INSTANT RESULTS • ⚡ POWERED BY AI
                    </p>
                    <button className="mt-3 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 group-hover:animate-bounce">
                      TRY NOW <FaZap className="animate-pulse" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLOSIVE Templates Section */}
      <section className="px-6 py-20 bg-gradient-to-l from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 rounded-full opacity-10 animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 50%), hsl(${Math.random() * 360}, 70%, 50%))`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="text-6xl animate-spin mb-4">🎨✨🌟</div>
            <h3 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              PREMIUM TEMPLATES
            </h3>
            <p className="text-xl font-bold text-gray-200 animate-bounce">
              💎 HANDCRAFTED BY DESIGN GODS 💎
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {templates.map(({ title, img, emoji, stars }, i) => (
              <div 
                key={i} 
                className="group cursor-pointer transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-gradient-to-r from-purple-500 to-pink-500">
                  <img 
                    src={img} 
                    alt={title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4 text-4xl animate-bounce">
                    {emoji}
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black animate-pulse">
                    HOT 🔥
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-1">
                        {[...Array(stars)].map((_, j) => (
                          <FaStar key={j} className="text-yellow-400 text-sm animate-pulse" />
                        ))}
                      </div>
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold animate-bounce">
                        ✅ VERIFIED
                      </span>
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2 animate-pulse">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-300 mb-4 font-bold">
                      🚀 PROFESSIONAL • 💎 RESPONSIVE • ⚡ FAST
                    </p>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-black flex items-center gap-2 w-full justify-center group-hover:animate-bounce transition-all duration-300">
                      USE TEMPLATE <FaArrowRight className="animate-pulse" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WILD Pricing Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-red-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-red-500/5 animate-pulse"></div>
        
        <div className="relative z-10 text-center">
          <div className="text-6xl animate-bounce mb-6">💰🚀💎</div>
          <h3 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
            INSANE PRICING
          </h3>
          <p className="text-xl font-bold text-gray-300 mb-12 animate-bounce">
            🔥 LIMITED TIME OFFER • ACT FAST! 🔥
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-8 rounded-3xl backdrop-blur-sm border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-pulse">
              <div className="text-6xl animate-bounce mb-4">🆓</div>
              <h4 className="text-3xl font-black mb-4 text-cyan-400">FREE STARTER</h4>
              <p className="text-5xl font-black mb-6 animate-pulse">$0<span className="text-xl text-gray-400">/month</span></p>
              <div className="space-y-4 mb-8 text-left">
                {["🎯 3 Bio Pages", "⚡ Basic Templates", "📞 Email Support", "🚀 AI Assistant"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 animate-bounce" style={{animationDelay: `${i * 0.1}s`}}>
                    <FaCheck className="text-green-400 text-lg" />
                    <span className="font-bold">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-gray-600 to-gray-700 px-8 py-4 rounded-2xl w-full hover:from-gray-500 hover:to-gray-600 transition-all duration-300 font-black text-lg animate-pulse">
                🚀 START FREE
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black animate-bounce">
                🔥 MOST POPULAR 🔥
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="text-6xl animate-spin mb-4">👑</div>
                <h4 className="text-3xl font-black mb-4 text-white">PREMIUM POWER</h4>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl line-through text-white/50">$29</span>
                  <span className="text-5xl font-black animate-pulse">$9</span>
                  <span className="text-xl text-white/80">/month</span>
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-black animate-bounce ml-2">
                    70% OFF!
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 text-left">
                  {["🚀 UNLIMITED Pages", "💎 ALL Templates", "🌐 Custom Domain", "📊 Analytics Pro", "⚡ Priority Support", "🤖 Advanced AI", "🎨 Custom Branding", "📈 Growth Tools"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 animate-bounce" style={{animationDelay: `${i * 0.05}s`}}>
                      <FaCheck className="text-green-300 text-lg" />
                      <span className="font-bold text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-white text-black px-8 py-4rounded-2xl w-full hover:bg-gray-100 transition-all duration-300 font-black text-lg animate-bounce flex items-center justify-center gap-2">
                  👑 UPGRADE NOW <FaRocket className="animate-spin" />
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 animate-pulse border-4 border-yellow-400">
              <div className="text-6xl animate-bounce mb-4">🚀</div>
              <h4 className="text-3xl font-black mb-4 text-white">ENTERPRISE</h4>
              <p className="text-5xl font-black mb-6 animate-pulse text-white">$49<span className="text-xl text-yellow-200">/month</span></p>
              <div className="space-y-4 mb-8 text-left">
                {["🌟 WHITE LABEL", "🏢 Team Management", "📊 Advanced Analytics", "🔐 Enterprise Security", "📞 24/7 Phone Support", "🎯 Custom Integrations", "⚡ API Access", "🚀 Dedicated Account Manager"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 animate-bounce" style={{animationDelay: `${i * 0.05}s`}}>
                    <FaCheck className="text-yellow-300 text-lg" />
                    <span className="font-bold text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-2xl w-full hover:bg-yellow-100 transition-all duration-300 font-black text-lg animate-bounce flex items-center justify-center gap-2">
                🚀 CONTACT SALES <FaBolt className="animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 animate-pulse"></div>
        
        <div className="relative z-10 text-center">
          <div className="text-6xl animate-bounce mb-6">💬⭐🎉</div>
          <h3 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            WHAT CREATORS SAY
          </h3>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mt-12">
            {[
              { name: "Sarah Chen", role: "🎨 Digital Artist", text: "Link Aura changed my life! My follower engagement went through the ROOF! 🚀", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face" },
              { name: "Mike Rodriguez", role: "🎵 Music Producer", text: "The AI tools are INSANE! Created 10 bio pages in under an hour! ⚡", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
              { name: "Emma Thompson", role: "💪 Fitness Coach", text: "My clients love the templates! Conversion rates increased by 300%! 🔥", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex space-x-1 justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className="text-yellow-400 animate-pulse" />
                  ))}
                </div>
                <p className="text-lg font-bold text-white mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-white/30" />
                  <div>
                    <div className="font-black text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-300 font-bold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-t from-black via-purple-900 to-cyan-900 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="text-6xl animate-spin mb-6">🎯🚀✨</div>
          <h3 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            READY TO GO VIRAL?
          </h3>
          <p className="text-xl font-bold text-gray-300 mb-12 max-w-3xl mx-auto animate-bounce">
            🔥 Join 50,000+ creators who are already CRUSHING IT with Link Aura! 
            <br />⚡ Your success story starts NOW! ⚡
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-12 py-6 rounded-2xl text-2xl font-black hover:scale-110 transform transition-all duration-300 shadow-2xl animate-pulse flex items-center justify-center gap-3 border-4 border-white/30">
              🚀 START YOUR JOURNEY <FaArrowRight className="animate-bounce" />
            </button>
            <button className="border-4 border-cyan-400 bg-cyan-400/20 px-12 py-6 rounded-2xl text-xl font-black hover:bg-cyan-400/40 transition-all duration-300 animate-bounce flex items-center gap-3">
              📞 TALK TO EXPERT <FaHeart className="animate-pulse" />
            </button>
          </div>
          
          <div className="mt-12 text-sm text-gray-400 animate-pulse">
            💎 30-Day Money Back Guarantee • 🔐 SSL Secured • ⚡ 99.9% Uptime
          </div>
        </div>
      </section>

      {/* EPIC Footer */}
      <footer className="bg-black px-6 py-12 border-t-4 border-gradient-to-r from-cyan-500 to-purple-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FaStar className="text-cyan-400 animate-spin text-2xl" />
                <h4 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Link Aura
                </h4>
                <FaCrown className="text-yellow-400 animate-bounce" />
              </div>
              <p className="text-gray-400 font-bold animate-pulse">
                🚀 The most EPIC bio page builder on the planet! 
                <br />⚡ Powered by cutting-edge AI technology.
              </p>
            </div>
            
            <div>
              <h5 className="font-black text-white mb-4 animate-pulse">🛠️ TOOLS</h5>
              <div className="space-y-2">
                {["🎨 Bio Builder", "📝 Blog Creator", "🏷️ Meta Tags", "🚀 Ad Banners"].map((item, i) => (
                  <a key={i} href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors font-bold animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-black text-white mb-4 animate-pulse">📚 RESOURCES</h5>
              <div className="space-y-2">
                {["💡 Tutorials", "📖 Documentation", "🎯 Best Practices", "🔥 Success Stories"].map((item, i) => (
                  <a key={i} href="#" className="block text-gray-400 hover:text-purple-400 transition-colors font-bold animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-black text-white mb-4 animate-pulse">🌟 CONNECT</h5>
              <div className="flex space-x-4 mb-4">
                {[FaHeart, FaBolt, FaGem, FaZap].map((Icon, i) => (
                  <Icon key={i} className="text-2xl text-gray-400 hover:text-pink-400 transition-colors cursor-pointer animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <p className="text-gray-400 font-bold animate-pulse">
                💌 hello@linkaura.com
                <br />
                📞 1-800-LINK-EPIC
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-bold animate-pulse">
              © 2024 Link Aura. All rights reserved. Made with 💖 and lots of ☕
              <br />
              🚀 Empowering creators worldwide to build LEGENDARY online presence! ⚡
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}