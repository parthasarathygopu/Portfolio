import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Parthasarathy G
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4 animate-slide-up">
            Team Lead
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            7+ years of experience in frontend development with expertise in
            JavaScript, ReactJS, and modern web technologies.
          </p>
          <div className="flex justify-center gap-6 text-gray-300 mb-8">
            <a
              href="https://github.com/parthasarathygopu"
              className="hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/parthasarathy-g-048257130/"
              className="hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:parthasarathygopu@gmail.com"
              className="hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
