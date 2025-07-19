import { FaRocket, FaCogs, FaMagic, FaTools, FaBlog, FaStar, FaArrowRight, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      setIsVisible(prev => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30 pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: 'scale(1.5)',
          }}
        ></div>
      </div>

      {/* Navbar */}
      <nav className="w-full px-6 py-4 border-b border-white/10 flex justify-between items-center backdrop-blur-xl bg-black/30 sticky top-0 z-50 transition-all duration-300">
        <div className="flex items-center space-x-2 group">
          <FaStar className="text-cyan-400 animate-spin group-hover:animate-pulse transition-all duration-300" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Link Aura
          </h1>
        </div>
        <div className="hidden md:flex space-x-6">
          {["Dashboard", "Tools", "Templates", "Blog", "Pricing"].map((item, i) => (
            <a
              key={item}
              href={item === "Dashboard" ? "/dashboard" : `#${item.toLowerCase()}`}
              className="relative hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="/login" className="text-sm hover:text-cyan-300 transition-colors duration-300">Login</a>
          <a href="/signup" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-sm hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20 px-6 relative">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Build Your Dream Bio Page with AI ✨
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Link Aura lets you create stunning link-in-bio pages, smart banners, blogs, and social tools with one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 flex items-center gap-2">
              Start Creating <FaArrowRight className="animate-bounce" />
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Tools */}
      <section id="tools" className="px-6 py-16 bg-gradient-to-r from-slate-900/50 to-purple-900/30 backdrop-blur-sm" data-animate>
        <div className={`transition-all duration-1000 ${isVisible.tools ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Built-in Tools
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { icon: FaBlog, name: "Blog Generator", color: "from-pink-500 to-rose-500" },
              { icon: FaMagic, name: "Hashtag Wizard", color: "from-purple-500 to-indigo-500" },
              { icon: FaTools, name: "Meta Tag Creator", color: "from-blue-500 to-cyan-500" },
              { icon: FaRocket, name: "Ad Banner Maker", color: "from-green-500 to-teal-500" },
              { icon: FaCogs, name: "SEO Analyzer", color: "from-yellow-500 to-orange-500" },
              { icon: FaStar, name: "Link-in-Bio Optimizer", color: "from-red-500 to-pink-500" },
            ].map(({ icon: Icon, name, color }, i) => (
              <div 
                key={i} 
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-white/10 hover:border-purple-400/50 group cursor-pointer backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                  <Icon className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {name}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Click to explore this tool
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="px-6 py-16" data-animate>
        <div className={`transition-all duration-1000 ${isVisible.templates ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            User Templates
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              { title: "Tech Guru", gradient: "from-blue-600 to-purple-600", icon: "💻" },
              { title: "Fashionista", gradient: "from-pink-600 to-rose-600", icon: "👗" },
              { title: "Health Coach", gradient: "from-green-600 to-teal-600", icon: "🏃‍♀️" }
            ].map(({ title, gradient, icon }, i) => (
              <div 
                key={i} 
                className="bg-white/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/10 hover:border-purple-400/50 group cursor-pointer backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`h-40 bg-gradient-to-br ${gradient} flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  <span className="animate-bounce">{icon}</span>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-3">
                    Ready-made bio page template for {title.toLowerCase()}s
                  </p>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Use Template <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="px-6 py-16 bg-gradient-to-r from-purple-900/30 to-slate-900/50 backdrop-blur-sm" data-animate>
        <div className={`transition-all duration-1000 ${isVisible.blogs ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            From Our Blog
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              { title: "How to Grow on Social Media in 2025", category: "Growth" },
              { title: "AI-Powered Bio Pages: The Future", category: "Technology" },
              { title: "Converting Followers to Customers", category: "Marketing" }
            ].map(({ title, category }, id) => (
              <div 
                key={id} 
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-white/10 hover:border-cyan-400/50 group cursor-pointer backdrop-blur-sm"
                style={{ animationDelay: `${id * 0.1}s` }}
              >
                <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 rounded-full text-white mb-3 inline-block">
                  {category}
                </span>
                <h4 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {title}
                </h4>
                <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Learn the new algorithm trends and how to optimize your content for maximum visibility.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Read More <FaArrowRight className="text-xs animate-bounce" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 text-center" data-animate>
        <div className={`transition-all duration-1000 ${isVisible.pricing ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Simple Pricing
          </h3>
          <p className="text-gray-400 mb-10">Start for free. Upgrade anytime.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-2xl w-full md:w-1/2 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-white/10 backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-4">Free Plan</h4>
              <p className="text-gray-400 mb-6">Get access to basic features and tools</p>
              <p className="text-3xl font-bold mb-6">$0<span className="text-lg text-gray-400">/month</span></p>
              <div className="text-left mb-6 space-y-2">
                {["3 Bio Pages", "Basic Templates", "Standard Support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-400 text-sm" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 w-full">
                Start Free
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 p-8 rounded-2xl w-full md:w-1/2 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                POPULAR
              </div>
              <h4 className="text-2xl font-bold mb-4">Premium Plan</h4>
              <p className="text-white/90 mb-6">Unlock all tools + custom domain + analytics</p>
              <p className="text-3xl font-bold mb-6">$9<span className="text-lg text-white/70">/month</span></p>
              <div className="text-left mb-6 space-y-2">
                {["Unlimited Bio Pages", "All Premium Templates", "Custom Domain", "Advanced Analytics", "Priority Support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-300 text-sm" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 w-full font-semibold">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/70 text-center text-sm text-gray-400 py-8 border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <FaStar className="text-cyan-400 animate-pulse" />
              <span className="font-semibold">Link Aura</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Link Aura. All rights reserved. Made with ❤️ for creators.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}