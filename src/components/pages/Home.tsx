import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Zap, Users, Globe, BookOpen, Lightbulb, Rocket, Code, Trophy, CheckCircle, Clock, MapPin, Quote, Building, Target, TrendingUp, Heart, Briefcase } from 'lucide-react';

const Home: React.FC = () => {
  const [stats, setStats] = useState({ members: 0, partners: 0, projects: 0 });

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof stats) => {
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    setTimeout(() => {
      animateCounter(20, 'members');
      animateCounter(9, 'partners');
      animateCounter(100, 'projects');
    }, 500);
  }, []);

  const pillars = [
    {
      icon: <Users size={40} />,
      title: 'Community',
      description: 'Local hub + global AI for Good youth network',
      color: 'from-accent-peach to-accent-blue'
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Education',
      description: 'AI literacy, workshops, skill development',
      color: 'from-accent-blue to-accent-mint'
    },
    {
      icon: <Zap size={40} />,
      title: 'Empowerment',
      description: 'Mentorship, leadership opportunities',
      color: 'from-accent-mint to-accent-peach'
    },
    {
      icon: <Globe size={40} />,
      title: 'Impact',
      description: 'Real-world projects, events, cross-hub collaborations',
      color: 'from-accent-blue to-accent-mint'
    }
  ];

  const programs = [
    {
      icon: <BookOpen size={32} />,
      title: 'AIGO Research Roundtable',
      description: 'Weekly forum where students and researchers present work, discuss recent papers, and form short-term collaborations focused on applied AI.',
      status: 'Launching Soon',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
    },
    {
      icon: <Users size={32} />,
      title: 'Impact Forum',
      description: 'Quarterly event linking socially beneficial organisations with AI researchers and practitioners to build applied collaborations with real-world impact.',
      status: 'Ongoing – Concept Stage',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
    },
  ];

  const partners = [
    {
      name: 'AI for Good',
      url: 'https://aiforgood.itu.int/young-ai-leaders-community/',
      logo: 'https://aiforgood.itu.int/wp-content/uploads/2023/05/AI-for-Good-logo.png'
    },
    {
      name: 'City of Linz',
      url: 'https://www.linz.at/',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Linz_logo.svg'
    },
    {
      name: 'Digital Competence Initiative Austria',
      url: 'https://digitalaustria.gv.at/digitale-kompetenzen/',
      logo: 'https://digitalaustria.gv.at/wp-content/uploads/2023/05/Digital-Kompetenz-Logo.png'
    },
    {
      name: 'Linz Institute for Transformative Change JKU',
      url: 'https://www.jku.at/linz-institute-for-transformative-change/',
      logo: 'https://www.jku.at/fileadmin/_processed_/a/2/csm_Linz_Institute_for_Transformative_Change_Logo_9fa1877e67.png'
    },
    {
      name: 'Interdisciplinary Transformation University Austria',
      url: 'https://www.itu-austria.ac.at/',
      logo: 'https://www.itu-austria.ac.at/fileadmin/templates/img/logo.png'
    },
    {
      name: 'University of Applied Sciences Upper Austria',
      url: 'https://www.fh-ooe.at/',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/FH_Oberoesterreich_logo.svg'
    },
    {
      name: 'AI Austria',
      url: 'https://aiaustria.com/',
      logo: 'https://aiaustria.com/wp-content/uploads/2022/06/aia_logo.svg'
    },
    {
      name: 'AI Upper Austria',
      url: 'https://ai-ooe.at/',
      logo: 'https://ai-ooe.at/wp-content/uploads/2023/07/AI-UÖ-Logo.jpg'
    },
    {
      name: 'Business Upper Austria',
      url: 'https://www.biz-up.at/',
      logo: 'https://www.biz-up.at/fileadmin/_processed_/c/c/csm_bizup_logo_quer_470x141px_5d6e96d43b.png'
    },
    {
      name: 'JKU Alumni Club',
      url: 'https://www.jku.at/alumni/',
      logo: 'https://www.jku.at/fileadmin/templates/img/logo.png'
    },
    {
      name: 'LIT Open Innovation Center',
      url: 'https://www.jku.at/lit-open-innovation-center/',
      logo: 'https://www.jku.at/fileadmin/templates/img/logo.png'
    }
  ];

  const companyBenefits = [
    {
      icon: <Target size={32} />,
      title: 'Access Talent',
      description: 'Connect with motivated young AI engineers, developers, and strategists'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Collaborate on Projects',
      description: 'Engage with our community through workshops, hackathons, and applied projects'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Shape the Future',
      description: 'Become part of an ecosystem that builds AI solutions for society, aligned with AI for Good'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-blue/10 via-accent-mint/10 to-accent-peach/10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-mint/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-text-primary font-heading leading-tight">
            Oxford's{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-mint bg-clip-text text-transparent">
              AI for Good
            </span>{' '}
            community
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-body">
            We are a community of students and researchers applying artificial intelligence to solve real-world problems and benefit society.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/join"
              className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-accent-blue to-accent-mint text-white hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong font-heading"
            >
              Get Involved
            </Link>
            <Link
              to="/partners"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 font-heading"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Hub Background */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-heading">
              Oxford's AI for Good Community
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed font-body">
                Founded in 2025, AIGO is part of the{' '}
                <a 
                  href="https://aiforgood.itu.int/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-mint transition-colors underline"
                >
                  AI for Good global ecosystem
                </a>
                {' '}— the United Nations' leading platform on artificial intelligence for sustainable development. 
                Within this network, the{' '}
                <a 
                  href="https://aiforgood.itu.int/young-ai-leaders-community/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-mint transition-colors underline"
                >
                  Young AI Leaders community
                </a>
                {' '}serves as the youth branch, connecting over 100 hubs worldwide to amplify the voice, skills, 
                and contributions of the next generation of AI innovators.
              </p>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed font-body">
                Rooted in Oxford’s research and innovation ecosystem, we combine education, applied projects,
                and collaboration across disciplines to create local impact with global relevance.
                By connecting students and researchers with industry and public partners, we ensure youth
                perspectives play a central role in shaping the future of responsible and beneficial AI.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl shadow-soft">
              <img
                src="https://s41721.pcdn.co/wp-content/uploads/2024/10/young-ai-leaders.png"
                alt="Young AI Leaders community collaboration"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-text-primary mb-3 font-heading">
                AI for Good Network
              </h3>
              <p className="text-text-secondary leading-relaxed font-body">
                As part of the AI for Good global ecosystem, we connect with youth leaders worldwide 
                and ensure our projects align with the United Nations Sustainable Development Goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-heading">
              Our Initiatives
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto font-body">
              Emerging programs creating real impact through education, innovation, and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="relative bg-secondary rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold font-body ${program.statusColor}`}>
                    {program.status}
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`${program.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-1 font-heading">
                        {program.title}
                      </h3>
                      {program.subtitle && (
                        <div className="text-sm text-text-secondary mb-3 font-semibold font-body">
                          {program.subtitle}
                        </div>
                      )}
                      <p className="text-text-secondary leading-relaxed mb-6 font-body">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-accent-blue to-accent-mint text-white hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
            >
              Explore All Programs
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/20 via-accent-mint/20 to-accent-peach/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 font-heading">
            Get Involved
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed font-body">
            Whether you're a student, professional, or organization — be part of Austria's youth-led AI community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://forms.gle/Dd2PPcFYm8Sw2YbdA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-accent-blue to-accent-mint text-white hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-105 shadow-medium font-heading"
            >
              Get Involved
            </a>
            <Link
              to="/partners"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 font-heading"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
