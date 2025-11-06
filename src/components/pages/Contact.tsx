import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Users, Building, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-accent-blue/10 via-accent-mint/10 to-accent-peach/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary font-heading">Get in Touch</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-body">
            Have questions about our community, want to propose a partnership, or ready to join our founding members? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">Get in Touch</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed font-body">
                Ready to connect? Click any of the options below to open your email client with a pre-filled message, or reach out directly using our contact information.
              </p>
              
              <div className="space-y-4 mb-8">
                <a
                  href="https://forms.gle/Dd2PPcFYm8Sw2YbdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-accent-blue to-accent-mint text-white px-6 py-4 rounded-xl font-semibold hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-[1.02] shadow-soft hover:shadow-medium text-center font-heading"
                >
                  Apply for Membership
                </a>
                <a
                  href="mailto:info@aigo.org.uk?subject=Collaboration Inquiry"
                  className="block w-full bg-gradient-to-r from-accent-mint to-accent-peach text-white px-6 py-4 rounded-xl font-semibold hover:from-accent-peach hover:to-accent-blue transition-all duration-300 transform hover:scale-[1.02] shadow-soft hover:shadow-medium text-center font-heading"
                >
                  Collaboration Inquiry
                </a>
                <a
                  href="mailto:info@aigo.org.uk?subject=General Question"
                  className="block w-full border-2 border-accent-blue text-accent-blue px-6 py-4 rounded-xl font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300 text-center font-heading"
                >
                  General Questions
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-8 font-heading">Contact Details</h2>
              
              <div className="space-y-8">
                <div className="bg-secondary p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <Mail size={24} className="text-accent-blue mr-3" />
                    <h3 className="text-xl font-bold text-text-primary font-heading">Email</h3>
                  </div>
                  <p className="text-text-secondary mb-2 font-body">For all inquiries:</p>
                  <a 
                    href="mailto:info@aigo.org.uk"
                    className="text-accent-blue font-semibold hover:text-accent-mint transition-colors font-body"
                  >
                    info@aigo.org.uk
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <MapPin size={24} className="text-accent-mint mr-3" />
                    <h3 className="text-xl font-bold text-text-primary font-heading">Location</h3>
                  </div>
                  <p className="text-text-secondary font-body">
                    Oxford, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary mb-4 font-heading">Quick Actions</h2>
            <p className="text-lg text-text-secondary font-body">
              Looking for something specific? These direct links might help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://forms.gle/Dd2PPcFYm8Sw2YbdA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <Users size={32} className="text-accent-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-text-primary mb-2 font-heading">Join as Member</h3>
              <p className="text-text-secondary text-sm font-body">Start your membership application</p>
            </a>

            <a
              href="mailto:info@aigo.org.uk?subject=Partnership%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20exploring%20partnership%20opportunities%20with%AIGO.%0A%0AOrganization%3A%20%0AContact%20Person%3A%20%0AEmail%3A%20%0A%0APlease%20share%20more%20information%20about%20partnership%20options.%0A%0AThank%20you%21"
              className="bg-background p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <Building size={32} className="text-accent-mint mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-text-primary mb-2 font-heading">Partner with Us</h3>
              <p className="text-text-secondary text-sm font-body">Explore partnership opportunities</p>
            </a>

            <a
              href="mailto:info@aigo.org.uk?subject=General%20Question&body=Hello%2C%0A%0AI%20have%20a%20question%20about%20AIGO%3A%0A%0A%5BYour%20question%20here%5D%0A%0AThank%20you%21"
              className="bg-background p-6 rounded-2xl hover:shadow-medium transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <ArrowRight size={32} className="text-accent-peach mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-text-primary mb-2 font-heading">Ask Questions</h3>
              <p className="text-text-secondary text-sm font-body">Get answers about our community</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;