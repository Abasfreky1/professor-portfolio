import { Users, Briefcase, Award } from 'lucide-react';

export function About() {
  const memberships = [
    'American Society for Engineering Education',
    'National Society of Black Engineers',
    'American Society of Mechanical Engineers',
  ];

  const positions = [
    {
      title: 'Research Assistant, Computer & Info tech',
      institution: 'RoCkeTEd Laboratory, Purdue University West Lafayette',
      department: 'School of Applied and Creative Computing',
      period: '2022 - Present',
    },
    {
      title: 'Instructor, Biomedical Engineering',
      institution: 'EMBRIO, Purdue University West Lafayette',
      period: '2024 - 2025',
    },
    {
      title: 'Instructor, Mechanical Engineering',
      institution: 'University of Cape Town',
      period: '2019 - 2022',
    },
    {
      title: 'Faculty Member (Lecturer I-II), Mechanical Engineering',
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
            I study how engineers and machines learn and think. My PhD work investigates scientific (model-based and mechanistic) reasonings in engineering teams using qualitative, quantitative, mixed/multimethods and artificial intelligence-based approaches. I am also involved with sustainable thermo-fluids and biophysics systems modeling and simulations. I have conducted independent studies in using AI/ML, XAI, FedRL and DL approaches to solve problems in biomedical and cybersecurity spaces.
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
              <h4 className="font-semibold text-gray-900 mb-3">Taught Courses</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <span className="font-medium">Ungergraduate:</span> Thermodynamics, Measurement & Instrumentation, Engineering Metallurgy, Quantitative Methods 
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Graduate:</span> Power Plant Systems, Computational Bio-Sys & Data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
