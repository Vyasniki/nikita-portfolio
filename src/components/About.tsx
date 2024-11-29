import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    degree: "Post-Graduate Diploma in Web Development",
    school: "Conestoga College, Brantford, Canada",
    year: "2023",
    description: "Advanced concepts in web development, responsive design, and modern frameworks.",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Gujarat Technological University (GTU), Gujarat, India",
    year: "2015",
    description: "Comprehensive coursework in full-stack development and systems design.",
  },
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "Poised Genie Inc., Toronto, Canada",
    duration: "June 2023 – May 2024",
    details: [
      "Developed and maintained a comprehensive web application using React.js, Node.js, and MongoDB.",
      "Designed and built RESTful APIs, enabling seamless communication between frontend and backend systems.",
      "Implemented secure authentication mechanisms using JSON Web Tokens (JWT).",
    ],
  },
  {
    title: "Web Developer",
    company: "Atmiya Infosoft, Gujarat, India",
    duration: "June 2015 – June 2018",
    details: [
      "Developed responsive web applications using HTML5, CSS3, JavaScript, and jQuery.",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions.",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600">A snapshot of my education and experience</p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="relative pb-8">
              <div className="absolute w-1 bg-indigo-500 left-5 top-0 bottom-0" />
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 mb-12"
                >
                  <div className="flex-shrink-0 bg-indigo-500 text-white p-3 rounded-full">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="relative pb-8">
              <div className="absolute w-1 bg-indigo-500 left-5 top-0 bottom-0" />
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 mb-12"
                >
                  <div className="flex-shrink-0 bg-indigo-500 text-white p-3 rounded-full">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
