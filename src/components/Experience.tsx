import React from 'react';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Team Lead</h3>
                <p className="text-blue-400">Kissflow</p>
              </div>
              <span className="text-gray-400">Aug 2019 - present</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                • Played a pivotal role as a core member of the Kissflow
                frontend build system, utilizing technologies such as Module
                Federation and PNPM to enhance efficiency across 15+
                micro-frontends and improve the developer experience.
              </li>
              <li>
                • Developed a critical Case Management module, significantly
                boosting profits and attracting new customers to Kissflow.
              </li>
              <li>
                • Owned and managed the Design System to ensure consistency,
                enhancing usability and maintainability across products.
              </li>
              <li>
                • Developed an AI-powered Copilot using RAG, Vector Databases,
                and OpenAI technologies.
              </li>
              <li>
                • Led the frontend chapter, driving skill development and
                fostering a collaborative culture through initiatives like
                mentorship programs, Chapter Days, and CTO Talks.
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Software Developer
                </h3>
                <p className="text-blue-400">Photon Infotech</p>
              </div>
              <span className="text-gray-400">Jun 2017 - Aug 2019</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>
                • Designed and developed complex UI components within tight
                deadlines, delivering high-fidelity designs that met project
                specifications.
              </li>
              <li>
                • Created reusable components using ReactJS, ensuring
                consistency, scalability, and maintainability across multiple
                projects.
              </li>
              <li>
                • Improved development efficiency by establishing a shared
                component library, reducing redundancy and accelerating the
                release cycle.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
