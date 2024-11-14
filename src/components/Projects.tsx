import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DentaFlex',
    description: `Developed a robust front-end using React and React-Bootstrap, creating a responsive and dynamic user
               interface. Implemented comprehensive user validation mechanisms to ensure data integrity and
              enhance user experience. Utilized Material UI for creating a modern, intuitive design with consistent and
                          professional components. Seamlessly integrated CRUD operations using Axios and MongoDB, enabling
                                 efficient data management and real-time synchronization across the application .`,
    image: '/images/dentaflex.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://dentaflex.ca/'
  },
  {
    title: 'Job-sync',
    description: `a job search platform that connects job seekers and employers.Architected a scalable microservices-based application with multiple independent services, each
                  designed with distinct database contexts to ensure modular and flexible system design. Implemented
                  robust user authentication and authorization mechanisms using GraphQL and JWT, providing secure
                  and granular access control across different user roles. Developed comprehensive job application and
                  review systems with advanced filtering and matching algorithms, enabling seamless interaction between
                  job seekers and employers. `,
    image: '/images/jobsync.png',
    tech: ['React', 'Graphql', 'react-bootstrap','MongoDB'],
    live: 'https://example.com'
  },
  {
    title: 'ResuMagic',
    description: 'A dynamic and customizable Resume Builder application that allows users to create, preview, and download professional resumes in PDF format. This project leverages JavaScript, HTML, CSS, and html2pdf.js to provide an interactive, user-friendly experience. Users can input personal information, education, and work history, choose from custom themes, and instantly download their formatted resume. The application showcases DOM manipulation, event handling, and dynamic PDF generation to create an efficient and visually appealing resume-building tool.',
    image: '/images/resumagic.png',
    tech: ['Html', 'CSS','Javascript'],
    live: 'https://resumagic-resume-builder.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work that showcases my skills</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {/* <a
                   
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a> */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}