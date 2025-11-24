import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            I'm always open to discussing research collaborations, academic opportunities,
            or consulting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Current Location</h3>
                <p className="text-sm text-gray-600">Purdue University</p>
              </div>
            </div>
            <p className="text-gray-700">
              School of Applied and Creative Computing<br />
              Purdue University West Lafayette<br />
              West Lafayette, IN, USA
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-slate-50 rounded-xl p-8 border border-green-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Connect With Me</h3>
                <p className="text-sm text-gray-600">Professional Networks</p>
              </div>
            </div>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/abasiafakudosenb74737117/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://orcid.org/0000-0002-2421-181X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                ORCID: 0000-0002-2421-181X
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Research Collaboration</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Interested in collaborating on computational modeling, AI in education, or sustainable engineering projects?
            I'd love to hear from you.
          </p>
          <a
            href="https://www.linkedin.com/in/abasiafakudosenb74737117/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Connect on LinkedIn
            <Linkedin className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
