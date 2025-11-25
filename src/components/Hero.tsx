import { Mail, Linkedin, BookOpen, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
                Research Assistant @ RoCkeTEd Lab | Purdue Polytechnic
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Abasiafak Ndifreke Udosen, PhD(Cand.)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hey there — my name is <span className="font-bold"> Abasiafak Udosen</span>, but most people call me <span className="font-bold"> Abass</span> or 
               <span className="font-bold"> Aby</span>… 
              I am a PhD candidate in Computer & Information Technology at Purdue University, where I work at the intersection of computational modeling, 
              computing/engineering education and AI/ML applications. Before Purdue, I trained as a Mechanical and Energy/Power Engineer, and over the years I’ve 
              evolved into a broadly interdisciplinary researcher working across computational biology, machine learning, STEM education, and modeling & simulation. 
              At Purdue, I conduct research with the ROCKetED Lab and the NSF-funded EMBRIO Institute, where I study how students reason with computational models, 
              how teams coordinate during complex modeling projects, and how AI can support scientific thinking at scale.I also build applied AI systems — from deep-learning 
              pipelines that detect fertilization-induced rearrangements of cortical actin and their role in establishing the membrane block to polyspermy. My work has been 
              recognized through multiple technical awards (NSBE, ASEE, EMBRIO Summer School, Purdue Polytechnic), peer-reviewed publications, and national presentations.
              
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
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professor-portfolio/profile-photo.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
