import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isFeatureEnabled } from './config/features';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import Projects from './components/pages/Projects';
import ResearchRoundtable from './components/pages/programs/ResearchRoundtable';
import InnovationSprint from './components/pages/programs/InnovationSprint';
import CommunityProjects from './components/pages/programs/CommunityProjects';
import StartupLaunchpad from './components/pages/programs/StartupLaunchpad';
import Contact from './components/pages/Contact';
import Legal from './components/pages/Legal';

// Component for redirecting disabled program detail pages
function ProgramDetailRedirect() {
  const location = useLocation();
  
  useEffect(() => {
    // Redirect to programs page with coming soon parameter
    window.location.replace('/programs?comingSoon=1');
  }, [location]);
  
  return null;
}

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              {isFeatureEnabled('PROGRAM_DETAILS') ? (
                <>
                  <Route path="/programs/research-roundtable" element={<ResearchRoundtable />} />
                  <Route path="/programs/innovation-sprint" element={<InnovationSprint />} />
                  <Route path="/programs/community-projects" element={<CommunityProjects />} />
                  <Route path="/programs/startup-launchpad" element={<StartupLaunchpad />} />
                </>
              ) : (
                <>
                  <Route path="/programs/research-roundtable" element={<ProgramDetailRedirect />} />
                  <Route path="/programs/innovation-sprint" element={<ProgramDetailRedirect />} />
                  <Route path="/programs/community-projects" element={<ProgramDetailRedirect />} />
                  <Route path="/programs/startup-launchpad" element={<ProgramDetailRedirect />} />
                </>
              )}
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;