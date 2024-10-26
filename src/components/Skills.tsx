import React from 'react';

export default function Skills() {
  const skills = {
    Frontend: [
      'JavaScript',
      'React',
      'TypeScript',
      'CSS & SASS',
      'Tailwind',
      'Redux',
      'Zustand',
      'Angular',
    ],
    Backend: ['Node.js', 'Python', 'SQL', 'Firebase', 'Java', 'Mongo DB'],
    Tools: [
      'Git',
      'VS Code',
      'Jira',
      'Webpack',
      'Jenkins',
      'Docker',
      'Kubernetes',
    ],
  };

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
