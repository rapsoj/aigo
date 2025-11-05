import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Users, TrendingUp, Building, Calendar, Target, Award, ChevronDown, ArrowRight, CheckCircle, Lightbulb, MessageSquare, Shield } from 'lucide-react';

const StartupLaunchpad: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatYoullDo = [
    {
      icon: <Target size={32} />,
      title: 'Validate',
      description: 'Test problem-solution fit through customer interviews and market research'
    },
    {
      icon: <Shield size={32} />,
      title: 'Design Responsibly',
      description: 'Build AI solutions with ethics, safety, and governance at the core'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Prepare for Scale',
      description: 'Develop MVPs, pilot programs, and funding readiness under AI for Good principles'
    }
  ];

  const targetAudience = [
    'Student Founders',
    'Social Innovators',
    'SME Leaders',
    'Hackathon Winners',
    'Project Alumni'
  ];

  const milestones = [
    {
      phase: 'Discovery',
      title: 'Problem Validation',
      description: 'Validate your problem hypothesis through customer research and market analysis',
      duration: '3 weeks'
    },
    {
      phase: 'Design',
      title: 'Responsible AI Framework',
      description: 'Design your solution with ethics, privacy, and social impact considerations',
      duration: '3 weeks'
    },
    {
      phase: 'Build',
      title: 'MVP Development',
      description: 'Create a minimum viable product and run pilot programs with real users',
      duration: '4 weeks'
    },
    {
      phase: 'Demo/Readiness',
      title: 'Investment Preparation',
      description: 'Prepare for funding, partnerships, and scaling with demo day presentation',
      duration: '2 weeks'
    }
  ];

  const keyFeatures = [
    {
      icon: <Users size={24} />,
      title: 'Expert Mentors',
      description: 'Weekly sessions with successful entrepreneurs, VCs, and industry leaders'
    },
    {
      icon: <Building size={24} />,
      title: 'Go-to-Market Basics',
      description: 'Learn customer acquisition, pricing strategies, and business model validation'
    },
    {
      icon: <Shield size={24} />,
      title: 'Responsible AI by Design',
      description: 'Integrate ethical AI principles and governance frameworks from day one'
    },
    {
      icon: <Award size={24} />,
      title: 'Demo Day',
      description: 'Present to investors, partners, and the startup ecosystem for funding opportunities'
    }
  ];

  const learningBoosters = [
    {
      name: 'Google AI Essentials',
      description: 'Non-technical teammates stay fluent in AI concepts and applications',
      provider: 'Coursera',
      level: 'Beginner'
    },
    {
      name: 'DeepLearning.AI: Generative AI for Everyone',
      description: 'Leadership-friendly AI literacy with audit option available',
      provider: 'DeepLearning.AI',
      level: 'Beginner'
    }
  ];

  const joinSteps = [
    {
      step: 1,
      title: 'Submit Interest',
      description: 'Complete our application form detailing your idea, team, and motivation'
    },
    {
      step: 2,
      title: 'Mentor Match',
      description: 'Get paired with experienced mentors who align with your industry and goals'
    },
    {
      step: 3,
      title: 'Cohort Kickoff',
      description: 'Join your cohort for the 12-week intensive program launch'
    }
  ];

  const faqs = [
    {
      question: 'What does equity-free mean?',
      answer: 'We don\'t take any ownership stake in your startup. Our goal is to support the ecosystem and create successful companies that give back to the community, not to profit from your success.'
    },
    {
      question: 'What stage should my startup be at?',
      answer: 'We accept startups from idea stage to early MVP. The ideal candidate has identified a clear problem they want to solve and is committed to building a scalable, responsible AI solution.'
    },
    {
      question: 'What makes up an ideal team?',
      answer: 'We value diverse founding teams that combine technical skills, domain expertise, and business acumen. If you\'re missing key skills, we can help you find co-founders within our community.'
    },
    {
      question: 'How much time do I need to commit?',
      answer: 'Plan for 15-20 hours per week over 12 weeks. This includes mentor sessions, workshops, customer interviews, and development work. The program is intensive but designed to accelerate your progress significantly.'
    },
    {
      question: 'What happens after the 12 weeks?',
      answer: 'You join our alumni network with continued access to mentors, investors, and resources. Many alumni continue working from our space, collaborating with new cohorts, and accessing ongoing support.'
    },
    {
      question: 'How competitive is selection?',
      answer: 'We typically accept 8-12 startups per cohort from 100+ applications. We look for strong teams, clear market opportunity, alignment with AI for Good principles, and commitment to responsible development.'
    }
  ];

  const relatedPrograms = [
    {
      title: 'Hackathon',
      description: 'Test and validate your initial ideas in intensive innovation challenges',
      href: '/programs/innovation-sprint'
    },
    {
      title: 'Community Projects',
      description: 'Develop your skills and build your network through collaborative projects',
      href: '/programs/community-projects'
    },
    {
      title: 'AI Academy',
      description: 'Build foundational AI knowledge to strengthen your technical foundation',
      href: '/programs/ai-academy'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/10 via-accent-peach/10 to-accent-mint/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-semibold mb-6 font-body">
                <Rocket size={16} className="mr-2" />
                Ongoing – Early Projects Active
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary font-heading">Startup Launchpad</h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed font-body">
                Build AI Ventures with Purpose
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/join"
                  className="bg-gradient-to-r from-accent-blue to-accent-peach text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-peach hover:to-accent-mint transition-all duration-300 text-center font-heading transform hover:scale-105 shadow-medium"
                >
                  Register Interest (Team or Solo)
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-accent-blue text-accent-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300 text-center font-heading"
                >
                  Apply as Mentor/Partner
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Startup development environment"
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
              Validate problem-solution fit, design for responsibility, and prepare for pilots and funding under AI for Good principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatYoullDo.map((item, index) => (
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
              Perfect for hackathon teams, project alumni, and venture-curious founders ready to build responsible AI solutions
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
            <h3 className="text-xl font-bold text-text-primary mb-6 font-heading">Ideal for founders who:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-blue mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Have a clear problem they want to solve</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-blue mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Are committed to responsible AI development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-blue mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Can dedicate 15-20 hours per week</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-accent-blue mr-3 flex-shrink-0" />
                <span className="text-text-secondary font-body">Want to create positive social impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Program Milestones
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Four key phases to take your idea from concept to investment-ready venture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-accent-peach rounded-full flex items-center justify-center text-white font-bold font-heading">
                    {index + 1}
                  </div>
                  <span className="text-sm text-text-secondary font-semibold font-body">{milestone.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 font-heading">{milestone.phase}</h3>
                <h4 className="text-md font-semibold text-accent-blue mb-3 font-heading">{milestone.title}</h4>
                <p className="text-text-secondary leading-relaxed text-sm font-body">{milestone.description}</p>
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
              Everything you need to build a successful, responsible AI venture
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

      {/* Responsible AI Checklist */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield size={48} className="text-accent-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Responsible AI Checklist
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
              All ventures follow strict ethics, safety, and governance guidelines aligned with AI for Good charter and values
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-2xl shadow-soft">
            <h3 className="text-xl font-bold text-text-primary mb-6 font-heading">Our Responsible AI Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle size={32} className="text-accent-blue mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2 font-heading">Ethics by Design</h4>
                <p className="text-text-secondary text-sm font-body">Integrate ethical considerations from the earliest design phases</p>
              </div>
              <div className="text-center">
                <CheckCircle size={32} className="text-accent-blue mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2 font-heading">Safety & Security</h4>
                <p className="text-text-secondary text-sm font-body">Implement robust safety measures and security protocols</p>
              </div>
              <div className="text-center">
                <CheckCircle size={32} className="text-accent-blue mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2 font-heading">Governance Framework</h4>
                <p className="text-text-secondary text-sm font-body">Establish clear governance structures and accountability measures</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-accent-blue/20 text-accent-blue hover:bg-accent-blue hover:text-white transition-colors duration-300 font-heading"
              >
                Download Checklist
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Learning Boosters */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Optional Learning Boosters
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Recommended courses to strengthen your team's AI literacy and leadership skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningBoosters.map((booster, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-text-primary font-heading">{booster.name}</h3>
                  <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-semibold font-body">
                    {booster.level}
                  </span>
                </div>
                <p className="text-text-secondary mb-3 font-body">{booster.description}</p>
                <p className="text-accent-blue font-semibold text-sm font-body">{booster.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              How to Join
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Three steps to start building your responsible AI venture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {joinSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-secondary rounded-2xl hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-peach rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 font-heading">
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
              to="/join"
              className="bg-gradient-to-r from-accent-blue to-accent-peach text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-peach hover:to-accent-mint transition-all duration-300 font-heading transform hover:scale-105 shadow-medium"
            >
              Register Interest
            </Link>
            <Link
              to="/contact"
              className="border-2 border-accent-blue text-accent-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300 font-heading"
            >
              Apply as Mentor/Partner
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MessageSquare size={48} className="text-accent-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Everything you need to know about our Startup Launchpad
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-soft">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary transition-colors duration-200"
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
              Related Programs
            </h2>
            <p className="text-lg text-text-secondary font-body">
              Build your foundation and network through our other programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((program, index) => (
              <Link
                key={index}
                to={program.href}
               className="bg-secondary p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group"
              >
               <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors font-heading">
                  {program.title}
                </h3>
               <p className="text-text-secondary leading-relaxed font-body">
                  {program.description}
                </p>
               <div className="flex items-center text-accent-blue font-semibold mt-4 group-hover:text-accent-peach transition-colors font-body">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-blue/20 via-accent-peach/20 to-accent-mint/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-heading">
            Turn Your Prototype into a Pilot
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed font-body">
            Join the next cohort of entrepreneurs building responsible AI solutions that create positive impact.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center bg-gradient-to-r from-accent-blue to-accent-peach text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-accent-peach hover:to-accent-mint transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
          >
            Register Interest
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StartupLaunchpad;