import { Mail, Linkedin, BookOpen, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
                PhD Candidate | Research Assistant
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Abasiafak Ndifreke Udosen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Research Assistant at Purdue University West Lafayette, specializing in computational modeling,
              artificial intelligence in education, and IoT applications in waste management systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/abasiafakudosenb74737117/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href="https://scholar.google.com/citations?user=TNpErlUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Google Scholar
              </a>
              <a
                href="https://orcid.org/0000-0002-2421-181X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                ORCID
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Award className="w-24 h-24 mx-auto mb-4 opacity-90" />
                <p className="text-2xl font-bold mb-2">ORCID</p>
                <p className="text-sm opacity-90">0000-0002-2421-181X</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <p className="text-sm font-semibold text-gray-900 mb-1">Current Position</p>
              <p className="text-xs text-gray-600">School of Applied and Creative Computing</p>
              <p className="text-xs text-gray-600">Purdue University West Lafayette</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
