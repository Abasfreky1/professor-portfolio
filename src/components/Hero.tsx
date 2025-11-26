import { Mail, Linkedin, BookOpen, Award, FileDown } from 'lucide-react';
import { useEffect } from 'react';

export function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
              Abasiafak Udosen, PhD(ABD)
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hey there — my name is <span className="font-bold text-gray-900">Abasiafak</span> pronounced as <span className="font-bold text-gray-900">Ah-bah-SEE-ah-fak</span>, but most people call me <span className="font-bold text-gray-900">Abass</span> or <span className="font-bold text-gray-900">Aby</span>…
              </p>

              <p className="text-base text-gray-600 leading-relaxed mt-4">
                I am a <span className="font-semibold text-gray-900">PhD candidate in Computer & Information Technology at Purdue University</span>, where I work at the intersection of <span className="font-semibold">computational modeling, computing/engineering education, and AI/ML applications</span>. Before Purdue, I trained as a Mechanical and Energy/Power Engineer, and over the years I've evolved into a broadly interdisciplinary researcher working across computational biology, machine learning, STEM education, and modeling & simulation.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mt-3">
                At Purdue, I conduct research with the <span className="font-semibold text-gray-900">ROCKetED Lab</span> and the <span className="font-semibold text-gray-900">NSF-funded EMBRIO Institute</span>, where I study how students reason with computational models, how teams coordinate during complex modeling projects, and how AI can support scientific thinking at scale. I also build applied AI systems — from deep-learning pipelines that detect fertilization-induced rearrangements of cortical actin and their role in establishing the membrane block to polyspermy.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mt-3">
                Before coming to Purdue, I taught mechanical engineering for several years at the <span className="font-semibold">University of Nigeria</span> and later served as an instructor and mentor in engineering and quantitative methods at the <span className="font-semibold">University of Cape Town</span> in South Africa.
              </p>

              <div className="mt-6 bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Research Interests</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Model-based and mechanistic scientific reasoning in STEM learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Human–AI teaming in learning and decision-making contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>STEM education, learning analytics, and AI-supported instruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Team-based modeling and simulation, coordination dynamics, and complex systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Machine learning and AI for scientific imaging (DL, computer vision, pattern recognition)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Computational modeling of thermo-fluids systems (e.g TES-PCM property selection and configuration model), biological processes (CFD, biophysics, cellular dynamics)</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 italic mt-4">
                Thanks for stopping by — and feel free to explore my work, publications, and ongoing projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
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
              <a
                href="/professor-portfolio/11_5_Updated_Abas_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
            <div className="flex gap-6 pt-2">
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
                alt="Abasiafak Udosen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
