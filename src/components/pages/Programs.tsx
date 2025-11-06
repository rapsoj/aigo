import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { GraduationCap, BookOpen, Lightbulb, Code, Rocket, ArrowRight, Clock, Users } from 'lucide-react';
import { isFeatureEnabled } from '../../config/features';

const Programs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const showComingSoonBanner = searchParams.get('comingSoon') === '1';

  const programs = [
    {
      icon: <BookOpen size={48} />,
      title: 'AIGO Research Roundtable',
      subtitle: 'Discuss, Present, Collaborate',
      description: 'Weekly forum where students and researchers present work, discuss recent papers, and form short-term collaborations focused on applied AI.',
      features: ['Weekly paper discussions', 'Presentation slots for work-in-progress', 'Peer feedback and critique', 'Project-based working groups'],
      status: 'Launching Soon',
      statusColor: 'bg-accent-blue/20 text-accent-blue',
      href: isFeatureEnabled('PROGRAM_DETAILS') ? '/programs/research-roundtable' : null,
      ctaText: 'Join the Roundtable',
      color: 'from-accent-blue/10 to-accent-mint/10',
      iconColor: 'text-accent-blue',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
    },
    {
      icon: <Users size={48} />,
      title: 'AIGO Impact Network',
      subtitle: 'Connect, Collaborate, Create Change',
      description: 'An initiative connecting researchers working on socially impactful problems with machine learning experts who can provide the technical expertise needed to apply AI methods effectively.',
      features: ['Matchmaking between domain researchers and ML practitioners', 'Collaborative problem scoping and project design', 'Opportunities for cross-disciplinary partnerships', 'Support for applying AI to existing research challenges'],
      status: 'Ongoing – Concept Stage',
      statusColor: 'bg-accent-peach/20 text-accent-peach',
      href: isFeatureEnabled('PROGRAM_DETAILS') ? '/programs/impact-network' : null,
      ctaText: 'Express Interest',
      color: 'from-accent-peach/10 to-accent-blue/10',
      iconColor: 'text-accent-peach',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
    },
    // {
    //   icon: <Lightbulb size={48} />,
    //   title: 'Hackathon',
    //   subtitle: '2 Days to Build AI Solutions for Real Challenges',
    //   description: 'An intensive hackathon where interdisciplinary teams tackle partner-set AI for Good challenges in just 48 hours.',
    //   features: ['2-Day Intensive Format', 'Real-World Challenges', 'Interdisciplinary Teams', 'Prize Competitions'],
    //   status: 'Planned',
    //   statusColor: 'bg-accent-mint/20 text-accent-mint',
    //   href: isFeatureEnabled('PROGRAM_DETAILS') ? '/programs/innovation-sprint' : null,
    //   ctaText: 'Get Notified',
    //   color: 'from-accent-mint/10 to-accent-peach/10',
    //   iconColor: 'text-accent-mint',
    //   image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    // },
    // {
    //   icon: <Rocket size={48} />,
    //   title: 'Startup Launchpad',
    //   subtitle: 'Build AI Ventures with Purpose',
    //   description: 'An equity-free incubator supporting members to turn ideas into ventures with access to mentorship, networks, and resources.',
    //   features: ['Equity-Free Support', 'VC & Expert Network Access', 'Mentorship & Accountability', 'Pathways to Spin-Offs'],
    //   status: 'Ongoing – Early Projects Active',
    //   statusColor: 'bg-accent-blue/20 text-accent-blue',
    //   href: isFeatureEnabled('PROGRAM_DETAILS') ? '/programs/startup-launchpad' : null,
    //   ctaText: 'Register Interest',
    //   color: 'from-accent-blue/10 to-accent-mint/10',
    //   iconColor: 'text-accent-blue',
    //   image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    // }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/10 via-accent-mint/10 to-accent-peach/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary font-heading">Programs in Development</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-body">
            Our programs are in development. Stay tuned for updates.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      {showComingSoonBanner && (
        <section className="py-4 bg-gradient-to-r from-accent-blue/10 to-accent-mint/10 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-text-secondary font-body">
              <strong>Program details are being refreshed.</strong> Join the list to get notified when they go live.
            </p>
          </div>
        </section>
      )}

      {/* Development Notice */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent-blue/10 to-accent-mint/10 p-8 rounded-2xl text-center">
            <Clock size={48} className="text-accent-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-heading">Programs in Development</h2>
            <p className="text-lg text-text-secondary leading-relaxed font-body">
              AIGO programs create opportunities for collaboration between technical and domain experts, helping researchers apply AI and machine learning to real-world challenges. Through knowledge exchange, discussion, and hands-on partnership, AIGO bridges the gap between impactful research and technical expertise to advance AI for social good.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${program.color} p-8 rounded-2xl border border-border hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden`}
              >
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${program.statusColor} font-body`}>
                    {program.status}
                  </span>
                </div>

                {/* Program Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="flex items-start space-x-6">
                  <div className={`${program.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 font-heading">
                      {program.title}
                    </h3>
                    <p className="text-lg font-semibold text-text-secondary mb-4 font-body">
                      {program.subtitle}
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-6 font-body">
                      {program.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary mb-3 font-heading">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-text-secondary font-body">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                {program.href ? (
                      <Link
                        to={program.href}
                        className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-background text-text-primary hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-soft font-heading"
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    ) : (
                      <a
                        href={`mailto:info@aigo.org.uk?subject=Interest in ${encodeURIComponent(program.title)}&body=Hello%2C%0A%0AI%20would%20like%20to%20express%20my%20interest%20in%20the%20${encodeURIComponent(program.title)}%20program.%0A%0AName%3A%20%0AEmail%3A%20%0AOrganization%2FSchool%3A%20%0ARole%3A%20%0A%0APlease%20let%20me%20know%20when%20more%20details%20are%20available.%0A%0AThank%20you%21`}
                        className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-background text-text-primary hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-soft font-heading"
                      >
                        {program.ctaText}
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/20 via-accent-mint/20 to-accent-peach/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-heading">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed font-body">
            Be part of Oxford’s growing network advancing AI for human and societal benefit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/Dd2PPcFYm8Sw2YbdA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-accent-blue to-accent-mint text-white hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
            >
              Get Involved
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 font-heading"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;