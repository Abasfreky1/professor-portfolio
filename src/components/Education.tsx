import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'PhD in Computer and Information Technology',
      institution: 'Purdue University West Lafayette',
      location: 'West Lafayette, IN, USA',
      year: '2026',
      color: 'blue',
    },
    {
      degree: 'M.Eng in Mechanical Engineering',
      institution: 'Federal University of Technology Owerri',
      location: 'Owerri, Nigeria',
      year: '2015',
      color: 'green',
    },
    {
      degree: 'B.Eng in Mechanical Engineering',
      institution: 'Igbinedion University',
      location: 'Okada, Nigeria',
      year: '2009',
      color: 'teal',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-700'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      badge: 'bg-green-100 text-green-700'
    },
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
      badge: 'bg-teal-100 text-teal-700'
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strong foundation in engineering and computer science, with ongoing doctoral research
            at one of the world's leading universities.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const colors = colorClasses[edu.color];
            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <GraduationCap className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg font-medium text-gray-700 mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Academic Journey</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            With a comprehensive educational background spanning mechanical engineering and computer science,
            my academic journey reflects a commitment to interdisciplinary research and continuous learning.
            Currently pursuing a PhD at Purdue University, I'm focused on advancing knowledge in computational
            modeling, artificial intelligence, and sustainable engineering solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
