import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Users, Building, Calendar, Target, Lightbulb, Award, ArrowRight, CheckCircle, Filter, MessageSquare, Shield } from 'lucide-react';

const CommunityProjects: React.FC = () => {
  const whatYoullDo = [
    {
      icon: <Target size={32} />,
      title: 'Sprints',
      description: 'Work on real partner problems in focused 4-8 week project sprints with clear deliverables'
    },
    {
      icon: <Users size={32} />,
      title: 'Mentorship',
      description: 'Get guidance from industry experts and experienced practitioners throughout your project'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Impact',
      description: 'Create solutions that address real challenges aligned with AI for Good principles'
    }
  ];

  const targetAudience = [
    'Academy Graduates',
    'Motivated Beginners',
    'Design Thinkers',
    'Data Enthusiasts',
    'Domain Experts'
  ];

  const projectPhases = [
    {
      phase: 'Onboarding',
      title: 'Project Introduction',
      description: 'Meet your team, understand the challenge, and set project goals with mentor guidance',
      duration: '1 week'
    },
    {
      phase: 'Team Match',
      title: 'Skill Alignment',
      description: 'Form balanced teams based on complementary skills and project requirements',
      duration: '1 week'
    },
    {
      phase: '4-8 Week Sprint',
      title: 'Development Phase',
      description: 'Build your solution with weekly check-ins, mentor support, and iterative feedback',
      duration: '4-8 weeks'
    },
    {
      phase: 'Demo/Showcase',
      title: 'Present Results',
      description: 'Demonstrate your solution to partners and the community at our showcase event',
      duration: '1 week'
    }
  ];

  const keyFeatures = [
    {
      icon: <Target size={24} />,
      title: 'Project Sprints',
      description: 'Focused development cycles with clear milestones and deliverables'
    },
    {
      icon: <Users size={24} />,
      title: 'Mentored Teams',
      description: 'Expert guidance from industry professionals and academic researchers'
    },
    {
      icon: <Building size={24} />,
      title: 'Partner Briefs',
      description: 'Real challenges from leading organizations and institutions'
    },
    {
      icon: <Award size={24} />,
      title: 'Demo Day',
      description: 'Showcase your work to partners, peers, and potential employers'
    }
  ];

  const activeBriefs = [
    {
      title: 'Smart City Traffic Optimization',
      partner: 'City of Linz',
      skills: ['Computer Vision', 'Data Analysis'],
      timeCommitment: '8-10 hours/week',
      startDate: 'March 2025',
      description: 'Develop AI solutions to optimize traffic flow and reduce congestion in urban areas'
    },
    {
      title: 'Healthcare Data Privacy',
      partner: 'JKU Medical Faculty',
      skills: ['Privacy Tech', 'Machine Learning'],
      timeCommitment: '6-8 hours/week',
      startDate: 'April 2025',
      description: 'Create privacy-preserving AI models for medical research and patient care'
    },
    {
      title: 'Sustainable Manufacturing',
      partner: 'Voestalpine',
      skills: ['IoT', 'Predictive Analytics'],
      timeCommitment: '10-12 hours/week',
      startDate: 'May 2025',
      description: 'Build AI systems to optimize energy usage and reduce waste in industrial processes'
    }
  ];

  const microBadges = [
    {
      name: 'Google Cloud: Generative AI Fundamentals',
      description: 'Quick on-ramp for GenAI tasks and applications',
      provider: 'Google Cloud Skills Boost',
      level: 'Beginner'
    },
    {
      name: 'IBM AI Fundamentals',
      description: 'Reinforces ethics and core AI concepts for responsible development',
      provider: 'IBM SkillsBuild',
      level: 'Beginner'
    }
  ];

  const joinSteps = [
    {
      step: 1,
      title: 'Pick a Brief',
      description: 'Browse active project briefs and find one that matches your interests and skills'
    },
    {
      step: 2,
      title: 'Apply',
      description: 'Submit your application explaining your motivation and relevant experience'
    },
    {
      step: 3,
      title: 'Kickoff',
      description: 'Join your team for the project kickoff and begin your development sprint'
    }
  ];

  const faqs = [
    {
      question: 'Who owns the intellectual property of projects?',
      answer: 'IP ownership varies by project and is clearly defined in each brief. Most community projects are open source, while some partner projects may have specific attribution requirements.'
    },
    {
      question: 'How much time do I need to commit?',
      answer: 'Time commitment varies by project, typically ranging from 6-12 hours per week. Each brief clearly states the expected time investment.'
    },
    {
      question: 'What tools and platforms do we use?',
      answer: 'We provide access to necessary tools through our partner network. Common platforms include Google Cloud, Microsoft Azure, and various open-source frameworks.'
    },
    {
      question: 'What can I expect from mentors?',
      answer: 'Mentors provide weekly guidance, technical support, and career advice. They help with problem-solving, code reviews, and connecting you with industry networks.'
    },
    {
      question: 'Can I propose my own project?',
      answer: 'Yes! We encourage members to propose projects that align with AI for Good principles. Contact us with your idea and we\'ll help you develop it into a brief.'
    }
  ];

  const relatedPrograms = [
    {
      title: 'Research Roundtable',
      description: 'Weekly student-led discussions on new AI research, ethics, and applied work.',
      href: '/programs/research-roundtable'
    },
    {
      title: 'Hackathon',
      description: 'Test your skills in intensive 48-hour innovation challenges',
      href: '/programs/innovation-sprint'
    },
    {
      title: 'Startup Launchpad',
      description: 'Turn successful projects into viable business ventures',
      href: '/programs/startup-launchpad'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-mint/10 via-accent-blue/10 to-accent-peach/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-mint/20 text-accent-mint text-sm font-semibold mb-6 font-body">
                <Target size={16} className="mr-2" />
                Ongoing – Concept Stage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary font-heading">Community Projects</h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed font-body">
                Apply Your Skills, Create Real Impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-accent-mint to-accent-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-blue hover:to-accent-peach transition-all duration-300 text-center font-heading transform hover:scale-105 shadow-medium"
                >
                  Browse Active Briefs
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-accent-mint text-accent-mint px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-mint hover:text-white transition-all duration-300 text-center font-heading"
                >
                  Pitch a Project
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Community projects collaboration"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              What You'll Do
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Work on real partner problems aligned with AI for Good principles while building practical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatYoullDo.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-accent-mint mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Who It's For
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Perfect for Academy learners and motivated beginners seeking hands-on practice with real impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {targetAudience.map((audience, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-background rounded-full text-text-primary font-semibold shadow-soft border border-border font-body"
              >
                {audience}
              </span>
            ))}
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-soft">
            <h3 className="text-xl font-bold text-text-primary mb-6 font-heading">Ideal candidates have:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Completed AI Academy or equivalent knowledge</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">6-12 hours per week availability</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Passion for solving real-world problems</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Collaborative mindset and team spirit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure & Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Project Sprint Structure
            </h2>
            <p className="text-lg text-text-secondary font-body">
              From team formation to demo day - a structured approach to collaborative development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectPhases.map((phase, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-mint to-accent-blue rounded-full flex items-center justify-center text-white font-bold font-heading">
                    {index + 1}
                  </div>
                  <span className="text-sm text-text-secondary font-semibold font-body">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 font-heading">{phase.phase}</h3>
                <h4 className="text-md font-semibold text-accent-mint mb-3 font-heading">{phase.title}</h4>
                <p className="text-text-secondary leading-relaxed text-sm font-body">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Key Features
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Everything you need for successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="text-accent-mint mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Briefs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Active Briefs
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Current project opportunities from our partner network
            </p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-text-secondary" />
              <span className="text-text-secondary font-body">Filter by skills, time commitment, or start date</span>
            </div>
            <button className="px-4 py-2 bg-accent-mint/20 text-accent-mint rounded-full font-semibold hover:bg-accent-mint hover:text-white transition-colors font-body">
              Save Brief
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeBriefs.map((brief, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-primary font-heading">{brief.title}</h3>
                  <span className="text-sm text-accent-mint font-semibold font-body">{brief.startDate}</span>
                </div>
                <p className="text-accent-mint font-semibold mb-3 font-body">{brief.partner}</p>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed font-body">{brief.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {brief.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-background text-text-primary rounded-full text-xs font-semibold font-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary font-body">
                    <strong>Time:</strong> {brief.timeCommitment}
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-accent-mint to-accent-blue text-white py-2 rounded-full font-semibold hover:from-accent-blue hover:to-accent-peach transition-colors font-body">
                  Apply for Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Delivery */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield size={48} className="text-accent-mint mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Responsible Delivery
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              All projects follow strict ethics, privacy, and data security guidelines aligned with AI for Good principles
            </p>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-soft">
            <h3 className="text-xl font-bold text-text-primary mb-6 font-heading">Our Commitment to Responsible AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle size={32} className="text-accent-mint mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2 font-heading">Ethics First</h4>
                <p className="text-text-secondary text-sm font-body">Every project undergoes ethical review and impact assessment</p>
              </div>
              <div className="text-center">
                <CheckCircle size={32} className="text-accent-mint mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2 font-heading">Privacy Protected</h4>
                <p className="text-text-secondary text-sm font-body">Strict data handling protocols and privacy-by-design principles</p>
              </div>
              <div className="text-center">
                <CheckCircle size={32} className="text-accent-mint mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2 font-heading">Security Assured</h4>
                <p className="text-text-secondary text-sm font-body">Enterprise-grade security measures and regular audits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Micro-Badges */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Recommended Micro-Badges
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Boost your project readiness with these quick skill certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {microBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-text-primary font-heading">{badge.name}</h3>
                  <span className="px-3 py-1 bg-accent-mint/20 text-accent-mint rounded-full text-sm font-semibold font-body">
                    {badge.level}
                  </span>
                </div>
                <p className="text-text-secondary mb-3 font-body">{badge.description}</p>
                <p className="text-accent-mint font-semibold text-sm font-body">{badge.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              How to Join
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Three simple steps to start contributing to real-world AI projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {joinSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-mint to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 font-heading">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-accent-mint to-accent-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-blue hover:to-accent-peach transition-all duration-300 font-heading transform hover:scale-105 shadow-medium"
            >
              Browse Active Briefs
            </Link>
            <Link
              to="/contact"
              className="border-2 border-accent-mint text-accent-mint px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-mint hover:text-white transition-all duration-300 font-heading"
            >
              Pitch a Project
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MessageSquare size={48} className="text-accent-mint mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Everything you need to know about Community Projects
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary p-6 rounded-2xl shadow-soft">
                <h3 className="text-lg font-bold text-text-primary mb-3 font-heading">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Related Programs
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Explore other ways to grow your AI skills and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((program, index) => (
              <Link
                key={index}
                to={program.href}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-mint transition-colors font-heading">
                  {program.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {program.description}
                </p>
                <div className="flex items-center text-accent-mint font-semibold mt-4 group-hover:text-accent-blue transition-colors font-body">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-mint/20 via-accent-blue/20 to-accent-peach/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-heading">
            Ready to Contribute?
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed font-body">
            Join a project and start making real impact with AI solutions that matter.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-mint to-accent-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-blue hover:to-accent-peach transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
          >
            Join a Project
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CommunityProjects;