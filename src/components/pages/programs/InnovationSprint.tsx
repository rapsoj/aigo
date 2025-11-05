import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, Trophy, Clock, Target, Rocket, Calendar, MessageSquare, ArrowRight, CheckCircle, Award, Code, Palette, FileText, ChevronDown } from 'lucide-react';

const InnovationSprint: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyJoin = [
    {
      icon: <Target size={32} />,
      title: 'Real Briefs',
      description: 'Work on authentic challenges from partner organizations with genuine impact potential'
    },
    {
      icon: <Users size={32} />,
      title: 'Mentors',
      description: 'Get guidance from industry experts and experienced practitioners throughout the event'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Visibility',
      description: 'Showcase your work to partners, investors, and the broader AI community'
    }
  ];

  const targetAudience = [
    'Tech Developers',
    'UX/UI Designers',
    'Policy Experts',
    'Domain Specialists',
    'Academy Graduates'
  ];

  const eventFlow = [
    {
      phase: 'Kickoff',
      title: 'Challenge Presentation',
      description: 'Meet partners, understand challenges, form teams, and get your starter kits',
      duration: 'Friday Evening'
    },
    {
      phase: 'Build',
      title: 'Development Sprint',
      description: 'Intensive building with workshops, mentor clinics, and office hours available',
      duration: 'Saturday - Sunday'
    },
    {
      phase: 'Pitch',
      title: 'Solution Presentations',
      description: 'Present your prototypes to judges and demonstrate real-world impact',
      duration: 'Sunday Evening'
    },
    {
      phase: 'Awards',
      title: 'Recognition & Next Steps',
      description: 'Celebrate winners and explore opportunities for continued development',
      duration: 'Sunday Night'
    }
  ];

  const keyFeatures = [
    {
      icon: <Code size={24} />,
      title: 'Starter Kits',
      description: 'Pre-configured datasets, APIs, and development environments to accelerate building'
    },
    {
      icon: <Users size={24} />,
      title: 'Mentor Clinics',
      description: 'Scheduled sessions with experts in AI, design, business, and domain areas'
    },
    {
      icon: <Trophy size={24} />,
      title: 'Tracks & Prizes',
      description: 'Multiple award categories including technical excellence, social impact, and innovation'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Post-Event Support',
      description: 'Continued mentorship and resources to develop winning solutions further'
    }
  ];

  const readinessBadges = [
    {
      name: 'Microsoft AI-900',
      description: 'Shared fundamentals baseline for all participants',
      provider: 'Microsoft Learn',
      level: 'Beginner'
    },
    {
      name: 'Google Cloud Generative AI',
      description: 'Speed with GenAI tools and applications',
      provider: 'Google Cloud Skills Boost',
      level: 'Intermediate'
    }
  ];

  const joinOptions = [
    {
      type: 'Participants',
      title: 'Form a Team / Find Teammates',
      description: 'Join as an individual or bring your team to tackle real-world challenges',
      cta: 'Get Notified'
    },
    {
      type: 'Mentors/Sponsors',
      title: 'Share Your Expertise',
      description: 'Guide teams, provide challenges, or sponsor prizes for the next generation',
      cta: 'Interest Form'
    }
  ];

  const faqs = [
    {
      question: 'What is a Hackathon?',
      answer: 'A 48-hour intensive innovation event where interdisciplinary teams work together to solve real-world AI challenges set by our partners. It combines rapid prototyping, mentorship, and competition in a collaborative environment.'
    },
    {
      question: 'Who can participate?',
      answer: 'Anyone passionate about AI and innovation! We welcome developers, designers, business strategists, domain experts, and Academy graduates. Teams work best with diverse skill sets.'
    },
    {
      question: 'What are the eligibility requirements?',
      answer: 'Open to individuals aged 18-30. No specific technical requirements - we value diverse perspectives and interdisciplinary collaboration over pure technical skills.'
    },
    {
      question: 'How is intellectual property handled?',
      answer: 'Participants retain ownership of their creations. We encourage open-source solutions when possible, but respect proprietary needs. All IP terms are clearly communicated before the event.'
    },
    {
      question: 'What judging criteria are used?',
      answer: 'Solutions are evaluated on technical implementation, social impact potential, innovation, presentation quality, and alignment with AI for Good principles.'
    },
    {
      question: 'What tools and resources are provided?',
      answer: 'We provide workspace, meals, starter kits with datasets/APIs, cloud computing credits, and access to mentors. Participants bring their own laptops and creativity.'
    },
    {
      question: 'Are there accessibility accommodations?',
      answer: 'Yes! We ensure our venue and activities are accessible to all participants. Contact us in advance to discuss specific accommodation needs.'
    }
  ];

  const relatedPrograms = [
    {
      title: 'AI Academy',
      description: 'Build foundational skills before tackling hackathon challenges',
      href: '/programs/ai-academy'
    },
    {
      title: 'Community Projects',
      description: 'Continue developing your hackathon ideas in longer-term projects',
      href: '/programs/community-projects'
    },
    {
      title: 'Startup Launchpad',
      description: 'Turn winning solutions into viable business ventures',
      href: '/programs/startup-launchpad'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-peach/10 via-accent-blue/10 to-accent-mint/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-peach/20 text-accent-peach text-sm font-semibold mb-6 font-body">
                <Calendar size={16} className="mr-2" />
                Planned
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary font-heading">Hackathon</h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed font-body">
                2 Days to Build AI Solutions for Real Challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/join"
                  className="bg-gradient-to-r from-accent-peach to-accent-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-blue hover:to-accent-mint transition-all duration-300 text-center font-heading transform hover:scale-105 shadow-medium"
                >
                  Get Notified for Next Hackathon
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-accent-peach text-accent-peach px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-peach hover:text-white transition-all duration-300 text-center font-heading"
                >
                  Mentor or Sponsor
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Hackathon innovation environment"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Why Join
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Prototype with purpose, meet mentors and partners, and showcase your innovation to the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyJoin.map((reason, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-accent-peach mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">
                  {reason.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {reason.description}
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
              Interdisciplinary teams welcome - we need diverse skills and perspectives to solve complex challenges
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
            <h3 className="text-xl font-bold text-text-primary mb-6 font-heading">We're looking for:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Code size={20} className="text-accent-peach mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Developers & AI practitioners</span>
              </div>
              <div className="flex items-center">
                <Palette size={20} className="text-accent-peach mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">UX/UI designers & creative minds</span>
              </div>
              <div className="flex items-center">
                <FileText size={20} className="text-accent-peach mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Policy experts & domain specialists</span>
              </div>
              <div className="flex items-center">
                <Users size={20} className="text-accent-peach mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Collaborative team players</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Flow */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Event Flow
            </h2>
            <p className="text-lg text-text-secondary font-body">
              48 hours of intensive innovation, collaboration, and impact creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventFlow.map((phase, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-peach to-accent-blue rounded-full flex items-center justify-center text-white font-bold font-heading">
                    {index + 1}
                  </div>
                  <span className="text-sm text-text-secondary font-semibold font-body">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 font-heading">{phase.phase}</h3>
                <h4 className="text-md font-semibold text-accent-peach mb-3 font-heading">{phase.title}</h4>
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
              Everything you need to build amazing solutions in 48 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="text-accent-peach mb-4">
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

      {/* Readiness Badges */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Readiness Badges
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Optional micro-credentials to boost your hackathon readiness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {readinessBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-text-primary font-heading">{badge.name}</h3>
                  <span className="px-3 py-1 bg-accent-peach/20 text-accent-peach rounded-full text-sm font-semibold font-body">
                    {badge.level}
                  </span>
                </div>
                <p className="text-text-secondary mb-3 font-body">{badge.description}</p>
                <p className="text-accent-peach font-semibold text-sm font-body">{badge.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join / Contribute */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              How to Join / Contribute
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Multiple ways to be part of our innovation community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joinOptions.map((option, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-text-primary mb-2 font-heading">{option.type}</h3>
                <h4 className="text-lg font-semibold text-accent-peach mb-4 font-heading">{option.title}</h4>
                <p className="text-text-secondary leading-relaxed mb-6 font-body">{option.description}</p>
                <Link
                  to="/join"
                  className="inline-flex items-center bg-gradient-to-r from-accent-peach to-accent-blue text-white px-6 py-3 rounded-full font-semibold hover:from-accent-blue hover:to-accent-mint transition-colors duration-300 font-heading"
                >
                  {option.cta}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MessageSquare size={48} className="text-accent-peach mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Everything you need to know about participating in our hackathon
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary rounded-2xl overflow-hidden shadow-soft">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background transition-colors duration-200"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  <h3 className="text-lg font-semibold text-text-primary font-heading">{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-text-secondary transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div id={`faq-${index}`} className="px-6 pb-4">
                    <p className="text-text-secondary leading-relaxed font-body">{faq.answer}</p>
                  </div>
                )}
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
              Explore other ways to develop your AI skills and create impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((program, index) => (
              <Link
                key={index}
                to={program.href}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-peach transition-colors font-heading">
                  {program.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {program.description}
                </p>
                <div className="flex items-center text-accent-peach font-semibold mt-4 group-hover:text-accent-blue transition-colors font-body">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-peach/20 via-accent-blue/20 to-accent-mint/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-heading">
            Build with Purpose in 48h
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed font-body">
            Join us for an intensive weekend of innovation, collaboration, and impact creation.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center bg-gradient-to-r from-accent-peach to-accent-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-blue hover:to-accent-mint transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
          >
            Get Notified
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InnovationSprint;