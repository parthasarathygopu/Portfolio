import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'SCAF',
      description:
        'Static Code Analysis Framework - A comprehensive tool for analyzing code quality and patterns.',
      link: 'https://scaf.itsparser.in/',
      tags: ['TypeScript', 'React', 'Node.js'],
    },
    {
      title: 'ORCA',
      description:
        'Open Source Project Management Tool with advanced automation capabilities.',
      link: 'https://github.com/orcaci/orca',
      tags: ['React', 'Python', 'Rust', 'Docker'],
    },
    {
      title: 'Red Bus Clone',
      description:
        'A functional clone of the Red Bus app with core booking features.',
      link: 'https://partharedbus.netlify.app/',
      tags: ['React', 'Javascript', 'HTML&CSS'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
