import React from 'react';
import { Users, Building, Lightbulb, Target, Zap, Trophy, Heart, Briefcase } from 'lucide-react';

const Projects: React.FC = () => {
  const communityProjects = [
    {
      icon: <Users size={32} />,
      title: 'AI Workshops & Bootcamps',
      description: 'Hands-on learning sessions covering everything from ML basics to advanced neural networks, designed by and for young practitioners.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Monthly Hackathons',
      description: 'Regular innovation sprints tackling local challenges, from sustainable mobility to digital inclusion in Austrian communities.'
    },
    {
      icon: <Trophy size={32} />,
      title: 'AI Challenge Competitions',
      description: 'Competitive events addressing UN SDGs, with winners advancing to regional and global Young AI Leaders competitions.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Local Impact Projects',
      description: 'Community-driven initiatives improving life in Linz, from elderly care solutions to smart city applications.'
    }
  ];

  const industryProjects = [
    {
      icon: <Building size={32} />,
      title: 'Partner-Led Innovation',
      description: 'Collaborative projects with leading Austrian companies, giving members real-world experience with industry-grade AI challenges.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation Sprints',
      description: 'Intensive 48-72 hour innovation sessions with partner companies, focusing on breakthrough AI applications and solutions.'
    },
    {
      icon: <Target size={32} />,
      title: 'Talent Pipeline Program',
      description: 'Direct pathway from community membership to internships and full-time opportunities with our industry partners.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'CSR Collaborations',
      description: 'Corporate social responsibility projects that align business objectives with social impact through AI solutions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Where community passion meets industry expertise to create AI solutions that matter
          </p>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community-Driven Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Grassroots initiatives led by our members, fostering learning and local impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Recent Community Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <p className="text-blue-800 font-semibold">Workshops Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
                <p className="text-blue-800 font-semibold">Participants Trained</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <p className="text-blue-800 font-semibold">Local Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Led Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional development opportunities through partnerships with leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-orange-500 mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">Partnership Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                <p className="text-orange-800 font-semibold">Industry Partners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <p className="text-orange-800 font-semibold">Job Placement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">€2M+</div>
                <p className="text-orange-800 font-semibold">Project Funding Secured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Application CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Lead Your Own Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you have an idea for a community initiative or want to tackle an industry challenge, 
            we provide the platform, mentorship, and resources to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Propose a Project
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              Browse Open Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;