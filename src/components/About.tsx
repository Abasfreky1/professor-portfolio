import { Users, Briefcase, Award } from 'lucide-react';

export function About() {
  const memberships = [
    'American Society for Engineering Education',
    'National Society of Black Engineers',
    'American Society of Mechanical Engineers',
  ];

  const positions = [
    {
      title: 'Research Assistant',
      institution: 'Purdue University West Lafayette',
      department: 'School of Applied and Creative Computing',
      period: '2022 - Present',
    },
    {
      title: 'Instructor, Mechanical Engineering',
      institution: 'University of Cape Town',
      period: '2020 - 2022',
    },
    {
      title: 'Lecturer 1, Mechanical Engineering',
      institution: 'University of Nigeria, Nsukka',
      period: '2015 - 2022',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An experienced educator and researcher with a passion for computational modeling,
            artificial intelligence in education, and sustainable engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">{position.title}</h4>
                  <p className="text-sm text-gray-600">{position.institution}</p>
                  {position.department && (
                    <p className="text-sm text-gray-600">{position.department}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{position.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Professional Memberships</h3>
            </div>
            <ul className="space-y-4">
              {memberships.map((membership, index) => (
                <li key={index} className="flex items-start">
                  <Award className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{membership}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">External Identifiers</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <span className="font-medium">ResearcherID:</span> D-1402-2019
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Scopus Author ID:</span> 58837699600
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
