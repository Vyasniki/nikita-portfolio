import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    category: 'DevOps',
    icon: Settings,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
  },
  {
    category: 'Languages',
    icon: Code2,
    items: ['JavaScript', 'Python', 'Java', 'C++']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}