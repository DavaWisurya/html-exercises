'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Mail, Code, Camera, MapPin, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'HTML/CSS Project', 'JavaScript Project', 'UI/UX Design', 'Tugas Sekolah'];

  const skills = [
    { name: 'HTML & CSS', level: 'Expert' },
    { name: 'JavaScript (Dasar)', level: 'Intermediate' },
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'Figma (Desain UI/UX)', level: 'Intermediate' },
    { name: 'Algoritma & Logika Pemrograman', level: 'Intermediate' },
    { name: 'React / Laravel (Sedang Dipelajari)', level: 'Beginner' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Website PointBlank',
      category: 'HTML/CSS Project',
      description: 'Landing page game PointBlank dengan desain menarik dan responsif',
      technologies: ['HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Website Porsche',
      category: 'HTML/CSS Project',
      description: 'Website showcase produk Porsche dengan layout modern dan elegan',
      technologies: ['HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Website Game',
      category: 'HTML/CSS Project',
      description: 'Website game interaktif dengan animasi dan fitur gameplay dinamis',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Website iPhone',
      category: 'HTML/CSS Project',
      description: 'Landing page produk iPhone dengan desain premium dan responsive',
      technologies: ['HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Form Input Siswa',
      category: 'HTML/CSS Project',
      description: 'Form input data siswa dengan validasi dan styling profesional',
      technologies: ['HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Tugas Algoritma',
      category: 'Tugas Sekolah',
      description: 'Implementasi berbagai algoritma dasar dengan JavaScript vanilla',
      technologies: ['JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
    },
    {
      id: 7,
      title: 'Tugas Array',
      category: 'Tugas Sekolah',
      description: 'Program manipulasi dan analisis array dengan berbagai operasi',
      technologies: ['JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
    },
    {
      id: 8,
      title: 'Tugas Looping',
      category: 'Tugas Sekolah',
      description: 'Program dengan berbagai struktur looping (for, while, do-while)',
      technologies: ['JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
    },
    {
      id: 9,
      title: 'Tugas Geometry',
      category: 'Tugas Sekolah',
      description: 'Program perhitungan geometri dan visualisasi bentuk-bentuk 2D',
      technologies: ['JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur z-50 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold text-amber-400">
              DAVA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-amber-400 transition">Home</a>
              <a href="#about" className="hover:text-amber-400 transition">About Me</a>
              <a href="#portfolio" className="hover:text-amber-400 transition">Portfolio</a>
              <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-amber-500/20 pt-4 space-y-3">
              <a href="#home" className="block hover:text-amber-400 transition">Home</a>
              <a href="#about" className="block hover:text-amber-400 transition">About Me</a>
              <a href="#portfolio" className="block hover:text-amber-400 transition">Portfolio</a>
              <a href="#contact" className="block hover:text-amber-400 transition">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 text-lg mb-2">Hi, My Name is</p>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
              Muhammad Dava Wisurya
            </h1>
            <div className="bg-amber-400/20 border border-amber-400/50 inline-block px-4 py-2 rounded mb-6">
              <p className="text-amber-300 font-semibold">
                Student at SMKN 1 Cianjur - PPLG (Pengembangan Perangkat Lunak dan Gim)
              </p>
            </div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Passionate about web development and game programming. Currently learning and building projects to master modern technologies.
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded font-semibold hover:bg-amber-300 transition"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/profile.png"
                alt="Muhammad Dava Wisurya"
                fill
                className="rounded-full object-cover border-4 border-amber-400/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-700/50 border border-amber-500/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Background</h3>
              <p className="text-gray-300 leading-relaxed">
                Saya adalah siswa PPLG di SMKN 1 Cianjur. Saya sedang belajar pengembangan perangkat lunak dan gim.
              </p>
            </div>
            
            <div className="bg-slate-700/50 border border-amber-500/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Current Skills</h3>
              <p className="text-gray-300 leading-relaxed">
                Saat ini saya sudah menguasai dasar HTML, CSS, JavaScript, dan desain UI/UX dengan Figma.
              </p>
            </div>
            
            <div className="bg-slate-700/50 border border-amber-500/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Activities</h3>
              <p className="text-gray-300 leading-relaxed">
                Saya aktif mengerjakan proyek-proyek sekolah dan latihan coding di GitHub.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-white">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-500/30 p-4 rounded-lg hover:border-amber-400 transition"
                >
                  <p className="font-semibold text-white mb-1">{skill.name}</p>
                  <p className="text-amber-300 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Portfolio
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeCategory === category
                    ? 'bg-amber-400 text-slate-900'
                    : 'bg-slate-700 text-white hover:bg-slate-600 border border-amber-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-slate-700/50 border border-amber-500/30 rounded-lg overflow-hidden hover:border-amber-400 transition cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-slate-600">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <ExternalLink className="text-amber-400" size={32} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-amber-400 text-sm font-semibold mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
            Contact Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="bg-slate-700/50 border border-amber-500/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-400" size={20} />
                  <a href="mailto:pixelaraa@email.com" className="text-gray-300 hover:text-amber-400 transition">
                    pixelaraa@email.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-400" size={20} />
                  <span className="text-gray-300">Cianjur, Indonesia</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-white font-semibold mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-amber-400/20 text-amber-400 rounded hover:bg-amber-400 hover:text-slate-900 transition"
                  >
                    <Camera size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-amber-400/20 text-amber-400 rounded hover:bg-amber-400 hover:text-slate-900 transition"
                  >
                    <Code size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-700/50 border border-amber-500/30 p-8 rounded-lg">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-slate-600/50 border border-amber-500/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-slate-600/50 border border-amber-500/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-slate-600/50 border border-amber-500/30 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-slate-900 py-3 rounded font-semibold hover:bg-amber-300 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-amber-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">© 2026 Dava Wisurya. All rights reserved.</p>
          <p className="text-sm">
            Designed & Built with passion | SMKN 1 Cianjur
          </p>
        </div>
      </footer>
    </div>
  );
}
