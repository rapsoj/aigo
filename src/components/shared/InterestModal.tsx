import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: string;
}

const InterestModal: React.FC<InterestModalProps> = ({ isOpen, onClose, program }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    program: program,
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:info@aigo.org.uk?subject=Interest in ${encodeURIComponent(program)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCollege (if applicable): ${formData.organization}\nDegree (if applicable) ${formData.program}\n\nNotes:\n${formData.notes}`
    )}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      program: program,
      notes: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-text-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-background rounded-2xl shadow-strong max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 id="modal-title" className="text-2xl font-bold text-text-primary font-heading">
              {isSubmitted ? 'Thank You!' : `Interest in ${program}`}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-text-secondary" />
            </button>
          </div>

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-accent-mint mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-primary mb-4 font-heading">
                We'll be in touch!
              </h3>
              <p className="text-text-secondary mb-6 font-body">
                Thanks for your interest in {program}. We'll notify you when program details go live and enrollment opens.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-mint text-white font-semibold hover:from-accent-mint hover:to-accent-peach transition-all duration-300 font-heading"
              >
                Got it
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2 font-body">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-background text-text-primary font-body"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2 font-body">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-background text-text-primary font-body"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-text-primary mb-2 font-body">
                  College (if applicable)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-background text-text-primary font-body"
                  placeholder="Your organization or school"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-text-primary mb-2 font-body">
                  Degree (if applicable)
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-background text-text-primary font-body"
                >
                  <option value="">Select your role</option>
                  <option value="Student">Student</option>
                  <option value="Professional">Professional</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Entrepreneur">Entrepreneur</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-text-primary mb-2 font-body">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors resize-vertical bg-background text-text-primary font-body"
                  placeholder="Tell us about your interests or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-blue to-accent-mint text-white px-6 py-4 rounded-xl font-semibold hover:from-accent-mint hover:to-accent-peach transition-all duration-300 transform hover:scale-[1.02] shadow-soft hover:shadow-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-heading"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Submit Interest
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestModal;