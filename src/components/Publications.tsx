import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: 'Artificial intelligence tools: a potential for error-free scholarly communication in Nigerian universities',
      year: 2025,
      type: 'Journal Article',
      status: 'Recent',
    },
    {
      title: 'Scaffolded team-based computational modeling and simulation projects',
      year: 2024,
      type: 'Conference Paper',
      status: 'Published',
    },
    {
      title: 'The Evolution of Team Coordination Commitments in Computational Projects',
      year: 2023,
      type: 'Research Article',
      status: 'Published',
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Selected recent publications showcasing research in artificial intelligence,
            computational modeling, and educational technology.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-400"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      pub.status === 'Recent'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {pub.year}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{pub.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">View Complete Publication List</h3>
              <p className="text-gray-600">
                Explore my full research portfolio on Google Scholar and ORCID
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://scholar.google.com/citations?user=TNpErlUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Google Scholar
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://orcid.org/0000-0002-2421-181X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                ORCID
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
