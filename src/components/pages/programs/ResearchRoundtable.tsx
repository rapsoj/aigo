import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, BookOpen, Code, Brain, ArrowRight, Target, Lightbulb, CheckCircle, MessageSquare } from 'lucide-react';

const ResearchRoundtable: React.FC = () => {
  const whatYoullGet = [
    {
      icon: <BookOpen size={32} />,
      title: 'Weekly Discussions',
      description: 'One-hour sessions focused on recent papers, methods, and applied work'
    },
    {
      icon: <Code size={32} />,
      title: 'Presentations',
      description: 'Opportunities for students and researchers to present work and receive peer feedback'
    },
    {
      icon: <Target size={32} />,
      title: 'Practical Focus',
      description: 'Emphasis on applied AI and projects that address real-world problems'
    }
  ];

  const targetAudience = [
    'Undergraduate and Graduate Students',
    'Researchers and PhD Candidates',
    'Early-career Practitioners',
    'Interdisciplinary Collaborators'
  ];

  const learningPhases = [
    {
      phase: 'Discuss',
      title: 'Weekly Paper & Progress Sessions',
      description: 'Group discussion of recent developments and short progress reports from participants',
      duration: 'Recurring (weekly)'
    },
    {
      phase: 'Present',
      title: 'Research Presentations',
      description: 'Structured slots for presenting work in progress and receiving structured feedback',
      duration: 'Ongoing'
    },
    {
      phase: 'Collaborate',
      title: 'Form Working Groups',
      description: 'Identify opportunities for applied projects and form short-term collaboration teams',
      duration: 'Project-based'
    }
  ];

  const keyFeatures = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Weekly cadence',
      description: 'Consistent weekly meetings to build momentum and shared knowledge'
    },
    {
      icon: <Code size={24} />,
      title: 'Presentation slots',
      description: 'Regular opportunities to present research or project updates'
    },
    {
      icon: <Users size={24} />,
      title: 'Peer feedback',
      description: 'Focused feedback from students and researchers across disciplines'
    },
    {
      icon: <Brain size={24} />,
      title: 'Applied emphasis',
      description: 'Priority on work that targets concrete societal problems'
    }
  ];

  const joinSteps = [
    {
      step: 1,
      title: 'Register Interest',
      description: 'Sign up so organisers can share weekly topics and presentation slots'
    },
    {
      step: 2,
      title: 'Propose a Topic',
      description: 'Suggest papers, short talks, or projects you want to present or discuss'
    },
    {
      step: 3,
      title: 'Attend Weekly',
      description: 'Join the sessions, present when scheduled, and engage in working groups'
    }
  ];

  const faqs = [
    {
      question: 'How often does the roundtable meet?',
      answer: 'The roundtable runs weekly with an agenda of paper discussions and presentations.'
    },
    {
      question: 'Who can present?',
      answer: 'Students and researchers are encouraged to present work in progress and recent findings.'
    },
    {
      question: 'What is the focus?',
      answer: 'Applied AI work that addresses real-world problems and opportunities for collaboration.'
    },
    {
      question: 'Do I need formal experience?',
      answer: 'No single background is required. Participants range from early-stage students to researchers.'
    }
  ];

  const relatedPrograms = [
    {
      title: 'Impact Forum',
      description: 'Matchmaking between socially beneficial projects and AI technical experts',
      href: '/programs/impact-forum'
    },
    {
      title: 'Applied AI Labs',
      description: 'Semester projects that partner with external organisations',
      href: '/programs/applied-ai-labs'
    },
    {
      title: 'Open Talks',
      description: 'Public lectures connecting research and real-world applications',
      href: '/programs/open-talks'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/10 via-accent-mint/10 to-accent-peach/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-semibold mb-6 font-body">
                <Clock size={16} className="mr-2" />
                Launching Soon
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary font-heading">AIGO Research Roundtable</h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed font-body">
                Weekly forum for students and researchers to discuss AI research and present applied work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/join"
                  className="bg-gradient-to-r from-accent-blue to-accent-mint text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-mint hover:to-accent-peach transition-all duration-300 text-center font-heading transform hover:scale-105 shadow-medium"
                >
                  Join the Roundtable
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-accent-blue text-accent-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300 text-center font-heading"
                >
                  Contact Organisers
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="Research discussion"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              What You'll Get
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              A focused forum for presenting research, discussing methods, and forming applied collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatYoullGet.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-accent-blue mb-4 flex justify-center">
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
              Designed for those engaged in research and applied AI who want peer feedback and collaboration.
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
            <h3 className="text-xl font-bold text-text-primary mb-6 font-heading">Ideal participants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Active students and researchers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Presenters with work in progress</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Practitioners seeking collaboration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-mint mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Those committed to regular participation</span>
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
              Structure & Timeline
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Regular weekly meetings with slots for discussion, presentations, and follow-up collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPhases.map((phase, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-mint rounded-full flex items-center justify-center text-white font-bold text-lg font-heading">
                    {index + 1}
                  </div>
                  <span className="text-sm text-text-secondary font-semibold font-body">{phase.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 font-heading">{phase.phase}</h3>
                <h4 className="text-lg font-semibold text-accent-blue mb-3 font-heading">{phase.title}</h4>
                <p className="text-text-secondary leading-relaxed font-body">{phase.description}</p>
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
              Core elements of the roundtable experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="text-accent-blue mb-4">
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

      {/* How to Join */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              How to Join
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Three steps to participate in the research roundtable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {joinSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-mint rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 font-heading">
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

          <div className="text-center">
            <Link
              to="/join"
              className="bg-gradient-to-r from-accent-blue to-accent-mint text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-mint hover:to-accent-peach transition-all duration-300 font-heading transform hover:scale-105 shadow-medium"
            >
              Join the Roundtable
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MessageSquare size={48} className="text-accent-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Practical details about the roundtable
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
              Other AIGO activities and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((program, index) => (
              <Link
                key={index}
                to={program.href}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors font-heading">
                  {program.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  {program.description}
                </p>
                <div className="flex items-center text-accent-blue font-semibold mt-4 group-hover:text-accent-mint transition-colors font-body">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-blue/20 via-accent-mint/20 to-accent-peach/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-heading">
            Ready to Join?
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed font-body">
            Register your interest to receive the weekly agenda and presentation schedule.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center bg-gradient-to-r from-accent-blue to-accent-mint text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
          >
            Join the Roundtable
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResearchRoundtable;
