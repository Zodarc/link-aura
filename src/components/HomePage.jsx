import { FaRocket, FaCogs, FaMagic, FaTools, FaBlog, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md bg-black/50 sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <FaStar className="text-cyan-400 animate-pulse" />
          <h1 className="text-2xl font-bold">Link Aura</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
          <a href="#tools" className="hover:text-cyan-400">Tools</a>
          <a href="#templates" className="hover:text-cyan-400">Templates</a>
          <a href="#blogs" className="hover:text-cyan-400">Blog</a>
          <a href="#pricing" className="hover:text-cyan-400">Pricing</a>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="text-sm hover:text-cyan-300">Login</Link>
          <Link to="/signup" className="bg-cyan-500 px-4 py-2 rounded-md text-sm hover:bg-cyan-600">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Build Your Dream Bio Page with AI ✨</h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Link Aura lets you create stunning link-in-bio pages, smart banners, blogs, and social tools with one click.
        </p>
      </header>

      {/* Tools */}
      <section id="tools" className="px-6 py-16 bg-gray-900">
        <h3 className="text-3xl font-bold mb-8 text-center">Built-in Tools</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            { icon: FaBlog, name: "Blog Generator" },
            { icon: FaMagic, name: "Hashtag Wizard" },
            { icon: FaTools, name: "Meta Tag Creator" },
            { icon: FaRocket, name: "Ad Banner Maker" },
            { icon: FaCogs, name: "SEO Analyzer" },
            { icon: FaStar, name: "Link-in-Bio Optimizer" },
          ].map(({ icon: Icon, name }, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition">
              <Icon className="text-cyan-400 text-3xl mb-4" />
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-sm text-gray-400">Click to explore this tool</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">User Templates</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {["Tech Guru", "Fashionista", "Health Coach"].map((title, i) => (
            <div key={i} className="bg-white/5 rounded-xl overflow-hidden hover:shadow-xl transition">
              <div className="h-40 bg-gray-700 flex items-center justify-center text-3xl font-bold text-white/30">
                {title}
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-sm text-gray-400">Ready-made bio page template for {title.toLowerCase()}s</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="px-6 py-16 bg-gray-900">
        <h3 className="text-3xl font-bold mb-8 text-center">From Our Blog</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
              <h4 className="text-xl font-bold mb-2">How to Grow on Social Media in 2025</h4>
              <p className="text-sm text-gray-400">
                Learn the new algorithm trends and how to optimize your content for maximum visibility.
              </p>
              <button className="mt-3 text-cyan-400 hover:underline text-sm">Read More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Simple Pricing</h3>
        <p className="text-gray-400 mb-10">Start for free. Upgrade anytime.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          <div className="bg-white/5 p-8 rounded-lg w-full md:w-1/2 hover:bg-white/10 transition">
            <h4 className="text-xl font-bold mb-2">Free Plan</h4>
            <p className="text-gray-400 mb-4">Get access to basic features and tools</p>
            <p className="text-2xl font-bold mb-4">$0/month</p>
            <button className="bg-cyan-500 px-6 py-2 rounded hover:bg-cyan-600 transition">Start Free</button>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-lg w-full md:w-1/2 shadow-lg">
            <h4 className="text-xl font-bold mb-2">Premium Plan</h4>
            <p className="text-white/80 mb-4">Unlock all tools + custom domain + analytics</p>
            <p className="text-2xl font-bold mb-4">$9/month</p>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition">Upgrade Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/70 text-center text-sm text-gray-400 py-6 border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Link Aura. All rights reserved.</p>
      </footer>
    </div>
  );
}
