import React, { forwardRef, useState } from 'react';
import Section from './Section';
import SocialLinks from './SocialLinks';
import { SOCIAL_LINKS } from '../constants';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactComponent = forwardRef<HTMLElement, {}>((props, ref) => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const inputStyles = "w-full bg-gray-800/50 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder-gray-400 disabled:opacity-50";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/bossgamingph2005@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'An unexpected error occurred. Please try again.');
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('A network error occurred. Please check your connection and try again.');
      setFormStatus('error');
    }
  };
  
  const renderContent = () => {
    if (formStatus === 'success') {
      return (
        <div className="text-center p-6 bg-indigo-900/30 backdrop-blur-lg border border-indigo-500/50 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ minHeight: '350px' }}>
          <svg className="h-20 w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="success-checkmark__circle stroke-current text-indigo-400" cx="26" cy="26" r="25" fill="none" strokeWidth="3"/>
            <path className="success-checkmark__check stroke-current text-white" fill="none" d="M14 27l5.917 4.917L37.5 22.5" strokeWidth="4"/>
          </svg>
          <h3 className="text-2xl font-bold text-white mt-5">Message Sent!</h3>
          <p className="text-gray-300 mt-2">Thanks for reaching out. We'll get back to you as soon as possible.</p>
        </div>
      );
    }

    if (formStatus === 'error') {
      return (
         <div className="text-center p-6 bg-red-900/30 backdrop-blur-lg border border-red-500/50 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ minHeight: '350px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-bold text-white mt-5">Oops! Something went wrong.</h3>
          <p className="text-red-300 mt-2 mb-6">{errorMessage}</p>
          <button 
              onClick={() => setFormStatus('idle')}
              className="w-full sm:w-auto inline-block text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 bg-indigo-600/40 hover:bg-indigo-500/60 border-2 border-indigo-500/80 backdrop-blur-sm transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40"
            >
              Try Again
            </button>
        </div>
      );
    }
    
    return (
        <form 
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col"
          style={{ minHeight: '350px' }}
        >
          {/* Formsubmit.co settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{display: 'none'}} />

          <div className="flex-grow space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Your Email"
                required 
                className={inputStyles}
                disabled={formStatus === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                name="message" 
                id="message"
                rows={5}
                placeholder="Your Message"
                required
                className={inputStyles}
                disabled={formStatus === 'sending'}
              ></textarea>
            </div>
          </div>
          
          <div className="text-center pt-2">
            <button 
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 bg-indigo-600/40 hover:bg-indigo-500/60 border-2 border-indigo-500/80 backdrop-blur-sm transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            >
              {formStatus === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
    );
  };
  
  return (
    <Section id="contact" ref={ref} className="bg-black/20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight scroll-animate">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-300 scroll-animate" style={{ transitionDelay: '100ms' }}>
              Have a business inquiry, a game suggestion, or just want to say hi? Fill out the form below. I'd love to hear from you!
            </p>
          </div>
          
          <div className="mt-12 scroll-animate" style={{ transitionDelay: '200ms' }}>
            {renderContent()}
          </div>

          <div className="mt-12 text-center scroll-animate" style={{ transitionDelay: '300ms' }}>
              <p className="text-gray-400 mb-4">Or find me on my socials:</p>
              <SocialLinks links={SOCIAL_LINKS} className="justify-center space-x-8" />
          </div>
        </div>
      </div>
    </Section>
  );
});

export default React.memo(ContactComponent);
