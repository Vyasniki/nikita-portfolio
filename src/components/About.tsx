import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Brain, GraduationCap, Trophy } from 'lucide-react';

const education = [
  {
    degree: "Web development",
    school: "Conestoga College",
    description: "Master the essential skills to build dynamic, responsive websites and applications"
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "SVMIT",
    description: "Focus on Full Stack Development and Systems Design"
  }
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022",
    icon: Trophy
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2021",
    icon: Award
  },
  {
    name: "Meta Frontend Developer",
    issuer: "Meta",
    year: "2023",
    icon: BookOpen
  }
];

const additionalSkills = [
  {
    category: "Soft Skills",
    items: ["Leadership", "Problem Solving", "Communication", "Team Management"]
  },
  {
    category: "Languages",
    items: ["English", "Hindi"]
  },
  {
    category: "Interests",
    items: ["AI/ML", "Blockchain", "IoT", "Cloud Computing"]
  }
];

export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              My journey, achievements, and expertise
            </p>
          </motion.div>
  
          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Education
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white shadow-lg"
                >
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {edu.degree}
                  </h4>
                  <p className="mb-2 text-indigo-600">{edu.school}</p>
             
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Certifications Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 mr-3 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white shadow-lg flex items-start space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-indigo-50">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-900">
                        {cert.name}
                      </h4>
                      <p className="text-sm mb-1 text-gray-600">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-500">
                        {cert.year}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
  
          {/* Additional Skills Section */}
          <div>
            <div className="flex items-center mb-8">
              <Brain className="w-6 h-6 mr-3 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Additional Skills
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSkills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white shadow-lg"
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }