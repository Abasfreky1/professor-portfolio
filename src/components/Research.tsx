import { Brain, Cpu, Users, Microscope, Shield } from 'lucide-react';
import { useState } from 'react';

export function Research() {
  const [expandedArea, setExpandedArea] = useState<number | null>(null);

  const areas = [
    {
      icon: Cpu,
      title: 'Computational Modeling & Simulation',
      description: 'Advanced computational techniques for modeling complex systems and engineering processes.',
      color: 'blue',
      image: '/computational-modeling.jpg',
      overview: 'The design phase of this project, focused on the development of computational models to simulate the mechanics of cell cytokinesis. Cell cytokinesis is the process by which a single eukaryotic cell divides into two daughter cells. For this module, I developed computational models using Computational Fluid Dynamics (CFD) methods to handle the cell fluid domains, utilizing the renowned Navier-Stokes (NS) fluid motion equations. The cytoplasmic membrane splitting at the cell\'s equator (known as the constriction site) was modeled using coupled constriction force and polar cap functions. The entire model was developed in Python and the final models had interactive features to conduct virtual computational experiments analyzing the influence of membrane curvature, surface tension, contractile ring force, bending energies, and osmotic pressure difference on the vesicle\'s shape.',
      futureWork: [
        'Explore TES-PCM Property Selection and Configuration (PSC) model for thermal energy management applications'
      ]
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence in Education',
      description: 'Exploring AI tools and methodologies to enhance scholarly communication and educational outcomes.',
      color: 'green',
      image: '/poster.jpg',
      overview: 'This research area explores the application of artificial intelligence in educational settings, focusing on how AI tools can enhance scholarly communication, improve learning outcomes, and support evidence-based teaching practices. The work examines both the opportunities and challenges of integrating AI into educational environments.',
      futureWork: [
        'Investigating AI-powered tools for scholarly communication',
        'Developing frameworks for AI integration in education',
        'Analyzing the impact of AI on student learning outcomes',
        'Creating guidelines for responsible AI use in academia',
        'Exploring AI-assisted assessment and feedback mechanisms'
      ]
    },
    {
      icon: Users,
      title: 'Human–AI Teaming & Learning Analytics',
      description: 'Studying human-AI collaboration in learning contexts, team coordination dynamics, and AI-supported instruction.',
      color: 'teal',
      image: '/human-ai-teaming.jpg',
      overview: 'This research area investigates how humans and AI systems can work together effectively in educational and team settings. The work focuses on understanding coordination dynamics, communication patterns, and the cognitive aspects of human-AI collaboration to optimize learning outcomes and team performance.',
      futureWork: [
        'Design and test human–AI teaming setups in classroom/lab deployments',
        'Analyzing team coordination in human-AI collaborative learning',
        'Developing learning analytics frameworks for AI-supported instruction',
        'Investigating cognitive load in human-AI teaming scenarios',
        'Creating metrics for evaluating human-AI team effectiveness',
        'Exploring adaptive AI systems for personalized learning support'
      ]
    },
    {
      icon: Microscope,
      title: 'Machine Learning for Scientific Imaging',
      description: 'Deep learning pipelines for computer vision, pattern recognition, and computational modeling of biological processes.',
      color: 'orange',
      image: '/image.jpg',
      overview: 'Advanced machine learning techniques applied to scientific imaging, with focus on developing deep-learning pipelines that detect fertilization-induced rearrangements of cortical actin and their role in establishing the membrane block to polyspermy. This work combines computer vision, pattern recognition, and computational modeling to advance our understanding of biological processes at the cellular level.',
      futureWork: [
        'Enhance deep learning models for real-time cellular imaging analysis',
        'Develop automated feature extraction for biological processes',
        'Integrate multi-modal imaging data for comprehensive analysis',
        'Create explainable AI models for scientific discovery'
      ]
    },
    {
      icon: Shield,
      title: 'Data Privacy, IoT & Explainable AI',
      description: 'Federated learning, differential privacy, and explainable AI for secure on-device learning across IoT and sensitive data endpoints.',
      color: 'purple',
      image: '/data-privacy-iot.png',
      overview: 'Organizations increasingly require on-device learning over sensitive, heterogeneous data from endpoints, IoT, and clinical devices. Federated learning (FL) reduces raw-data movement by training locally and aggregating updates on a server, yet rigorous evidence for federated reinforcement learning (FedRL) under non-IID clients, partial participation, differential privacy (DP), and communication limits remains limited. This study implements a DDQN-based FedRL pipeline where each client performs genuine RL learning via experience replay and Temporal-Difference (TD)-loss optimization, then exchanges RL-derived weight updates each round. We compare FedAvg vs. FedProx and their server-side update-level DP variants, where client deltas are L2-clipped and perturbed with Gaussian noise before aggregation.',
      futureWork: [
        'Extending FedRL frameworks to support multi-agent scenarios',
        'Investigating privacy-utility tradeoffs in differential privacy mechanisms',
        'Developing explainability methods for federated learning models',
        'Optimizing communication efficiency in IoT federated systems',
        'Creating benchmarks for privacy-preserving reinforcement learning'
      ]
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
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
          {areas.map((area, index) => {
            const Icon = area.icon;
            const colors = colorClasses[area.color];
            const isExpanded = expandedArea === index;
            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-8 hover:shadow-xl transition-all duration-300 ${!isExpanded ? 'hover:scale-105' : ''}`}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border} mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{area.description}</p>

                <button
                  onClick={() => setExpandedArea(isExpanded ? null : index)}
                  className={`text-sm font-semibold ${colors.text} hover:underline focus:outline-none`}
                >
                  {isExpanded ? 'Show less' : 'Learn more'}
                </button>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-fadeIn">
                    <div className="mb-4">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Overview</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{area.overview}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Future Work</h4>
                      <ul className="space-y-2">
                        {area.futureWork.map((work, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className={`${colors.text} mr-2 mt-1`}>•</span>
                            <span>{work}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
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
              <div className="text-4xl font-bold text-green-600">5</div>
              <div className="text-gray-600 font-medium">Key Research Areas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">10+</div>
              <div className="text-gray-600 font-medium">Years of Academic Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
