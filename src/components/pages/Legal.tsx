import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/10 via-accent-mint/10 to-accent-peach/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary font-heading">Legal</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-body">
            Imprint and Privacy Policy for AIGO – AI for Good Oxford
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Imprint */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">Imprint</h2>
            <div className="bg-secondary p-8 rounded-2xl shadow-soft">
              <p className="text-lg text-text-primary mb-4 font-body">
                <strong>AIGO – AI for Good Oxford</strong>
              </p>
              <p className="text-text-secondary mb-4 font-body">
                Student-led initiative based at the University of Oxford, fostering applied and socially beneficial uses of artificial intelligence.
              </p>
              <p className="text-text-secondary mb-4 font-body">
                <strong>Registered office:</strong> Oxford, United Kingdom
              </p>
              <p className="text-text-secondary mb-6 font-body">
                📧 contact@aigo.org.uk
              </p>
              
              <h3 className="text-xl font-bold text-text-primary mb-4 font-heading">Image Credits</h3>
              <p className="text-text-secondary font-body">
                Some images used on this website are sourced from Pexels and Unsplash under free-to-use licenses.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">Privacy Policy</h2>
            <div className="bg-secondary p-8 rounded-2xl shadow-soft space-y-6">
              <p className="text-text-secondary leading-relaxed font-body">
                AIGO values your privacy and handles personal data according to applicable data protection laws, including the UK GDPR and Data Protection Act 2018.
              </p>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 font-heading">Cookies</h3>
                <p className="text-text-secondary leading-relaxed font-body">
                  This website uses only essential cookies required for basic functionality and analytics. 
                  You can adjust your browser settings to block cookies if preferred, though some features may be limited as a result.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 font-heading">Your Rights & Contact</h3>
                <p className="text-text-secondary leading-relaxed mb-4 font-body">
                  You have the right to request access to, correction of, or deletion of your personal data. 
                  If you believe your data is being used improperly, you may contact the UK Information Commissioner’s Office (ICO).
                </p>
                <p className="text-text-secondary leading-relaxed mb-4 font-body">
                  Data shared with AIGO through forms or email is stored only as long as necessary to respond to your query. 
                  We do not share personal data with third parties without consent.
                </p>
                <p className="text-text-secondary font-body">
                  <strong>For inquiries:</strong> contact[at]aigo.org.uk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
