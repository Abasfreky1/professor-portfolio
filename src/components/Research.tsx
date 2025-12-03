import { Brain, Cpu, Users, Microscope, X, ExternalLink, FileText } from 'lucide-react';
import { useState } from 'react';

interface Project {
  icon: typeof Cpu;
  title: string;
  description: string;
  color: string;
  fullDescription: string;
  ongoingWork: string[];
  image?: string[];
  pdf?: string;
  externalLink?: string;
}

export function Research() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      icon: Cpu,
      title: 'Computational Modeling & Simulation',
      description: 'Advanced computational techniques for modeling complex systems and engineering processes.',
      color: 'blue',
      fullDescription: 'The design phase of this project, focused on the development of computational models to simulate the mechanics of cell cytokinesis. Cell cytokinesis is the process by which a single eukaryotic cell divides into two daughter cells. For this module, I developed computational models using Computational Fluid Dynamics (CFD) methods to handle the cell fluid domains, utilizing the renowned Navier-Stokes (NS) fluid motion equations. The cytoplasmic membrane splitting at the cell’s equator (known as the constriction site) was modeled using coupled constriction force and polar cap functions. The entire model was developed in Python and the final models had interactive features to conduct virtual computational experiments analyzing the influence of membrane curvature, surface tension, contractile ring force, bending energies, and osmotic pressure difference on the vesicle’s shape.',
      ongoingWork: [
        '#@',
        '%^',
        '*&',
        '!^'
      ],
      image: '/computational-modeling.jpg', 
      },
    {
      icon: Brain,
      title: 'Artificial Intelligence in Education',
      description: 'Exploring AI tools and methodologies to enhance scholarly communication and educational outcomes.',
      color: 'green',
      fullDescription: '***',
      ongoingWork: [
        '#@',
        '%^',
        '*&',
        '!^'
      ],
      image: '/ai-education.jpg', 
      },
    {
      icon: Users,
      title: 'Human–AI Teaming & Learning Analytics',
      description: 'Studying human-AI collaboration in learning contexts, team coordination dynamics, and AI-supported instruction.',
      color: 'teal',
      fullDescription: '***',
      ongoingWork: [
        '#@',
        '%^',
        '*&',
        '!^'
     ],
      image: '/human-ai-teaming.jpg', 
      },
    {
      icon: Microscope,
      title: 'Machine Learning for Scientific Imaging',
      description: 'Deep learning pipelines for computer vision, pattern recognition, and computational modeling of biological processes.',
      color: 'orange',
      fullDescription: 'This research develops and applies machine learning techniques to analyze scientific images, with a focus on biological systems. Working with the EMBRIO Institute, we built deep learning pipelines for detecting and quantifying biological phenomena, including cortical actin dynamics during fertilization and cellular processes. Our work combines computer vision, pattern recognition, and domain expertise to extract meaningful insights from complex imaging data.',
      ongoingWork: [
        'Developing deep learning models for detecting cortical actin rearrangements in egg fertilization',
        'Investigating the role of cortical actin in establishing the membrane block to polyspermy',
        'Building automated image analysis pipelines for high-throughput biological imaging',
        'Applying transfer learning techniques to biological image classification tasks',
        'Creating interpretable AI models for scientific discovery in developmental biology'
      ],
      image: ['/poster.jpg', '/image.png'],
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-400' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', hover: 'hover:border-teal-400' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-400' },
  };

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My research focuses on interdisciplinary approaches combining engineering,
            computational methods, and emerging technologies to solve real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color];
            return (
              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className={`${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-left w-full`}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border} mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                <span className={`${colors.text} text-sm font-medium flex items-center`}>
                  Learn more <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">Multiple</div>
              <div className="text-gray-600 font-medium">Publications in High-Impact Journals</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">4</div>
              <div className="text-gray-600 font-medium">Key Research Areas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">10+</div>
              <div className="text-gray-600 font-medium">Years of Academic Experience</div>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`inline-flex p-2 rounded-lg ${colorClasses[selectedProject.color].bg} border ${colorClasses[selectedProject.color].border} mr-3`}>
                  <selectedProject.icon className={`w-6 h-6 ${colorClasses[selectedProject.color].text}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              {selectedProject.image && (
                <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Ongoing Work</h4>
                <ul className="space-y-3">
                  {selectedProject.ongoingWork.map((work, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`${colorClasses[selectedProject.color].text} mr-3 mt-1 text-lg`}>•</span>
                      <span className="text-gray-700 leading-relaxed">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(selectedProject.pdf || selectedProject.externalLink) && (
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  {selectedProject.pdf && (
                    <a
                      href={selectedProject.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 ${colorClasses[selectedProject.color].bg} ${colorClasses[selectedProject.color].text} font-medium rounded-lg border-2 ${colorClasses[selectedProject.color].border} hover:shadow-md transition-all`}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      View PDF
                    </a>
                  )}
                  {selectedProject.externalLink && (
                    <a
                      href={selectedProject.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 ${colorClasses[selectedProject.color].bg} ${colorClasses[selectedProject.color].text} font-medium rounded-lg border-2 ${colorClasses[selectedProject.color].border} hover:shadow-md transition-all`}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Learn More
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
