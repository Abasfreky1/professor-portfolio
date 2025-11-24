import { GraduationCap, Linkedin, BookOpen, Award } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-white">Dr. Abasiafak Udosen</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Research Assistant at Purdue University, specializing in computational modeling,
              AI in education, and sustainable engineering solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#research" className="hover:text-blue-400 transition-colors">Research</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-blue-400 transition-colors">Publications</a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/abasiafakudosenb74737117/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=TNpErlUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-blue-400 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Google Scholar
              </a>
              <a
                href="https://orcid.org/0000-0002-2421-181X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-blue-400 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                ORCID
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">
            © {currentYear} Abasiafak Ndifreke Udosen. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            ResearcherID: D-1402-2019 | Scopus ID: 58837699600
          </p>
        </div>
      </div>
    </footer>
  );
}
