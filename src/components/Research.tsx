import { Brain, Cpu, Users, Microscope } from 'lucide-react';

export function Research() {
  const areas = [
    {
      icon: Cpu,
      title: 'Computational Modeling & Simulation',
      description: 'Advanced computational techniques for modeling complex systems and engineering processes.',
      color: 'blue',
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence in Education',
      description: 'Exploring AI tools and methodologies to enhance scholarly communication and educational outcomes.',
      color: 'green',
    },
    {
      icon: Users,
      title: 'Human–AI Teaming & Learning Analytics',
      description: 'Studying human-AI collaboration in learning contexts, team coordination dynamics, and AI-supported instruction.',
      color: 'teal',
    },
    {
      icon: Microscope,
      title: 'Machine Learning for Scientific Imaging',
      description: 'Deep learning pipelines for computer vision, pattern recognition, and computational modeling of biological processes.',
      color: 'orange',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
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
            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border} mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
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
              <div className="text-4xl font-bold text-green-600">3</div>
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
