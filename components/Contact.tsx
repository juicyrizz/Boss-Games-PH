import React, { forwardRef, useState } from 'react';
import Section from './Section';
import SocialLinks from './SocialLinks';
import { SOCIAL_LINKS } from '../constants';

const ContactComponent = forwardRef<HTMLElement, {}>((props, ref) => {
  const inputStyles = "w-full bg-gray-900/30 backdrop-blur-sm border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder-gray-400 disabled:opacity-50";

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };
  
  if (status === 'success') {
    return (
      <Section id="contact" ref={ref} className="bg-gray-800/40">
        <div className="max-w-2xl mx-auto text-center py-10">
          <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-8 rounded-lg shadow-2xl shadow-green-500/10 flex flex-col items-center justify-center transition-all duration-500 animate-kenburns" style={{animation: 'none', transform: 'scale(1)', opacity: 1}}>
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-green-300/80 mb-6">
              Thanks for reaching out! I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-full uppercase tracking-wider hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" ref={ref} className="bg-gray-800/40">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-300">
            Have a business inquiry, a game suggestion, or just want to say hi? Fill out the form below. I'd love to hear from you!
          </p>
        </div>
        
        <form 
          action="https://formsubmit.co/bossgamingph2005@gmail.com" 
          method="POST"
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          {/* Formsubmit.co settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{display: 'none'}} />

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Your Email"
              required 
              className={inputStyles}
              disabled={status === 'submitting'}
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
              disabled={status === 'submitting'}
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
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
            {status === 'error' && (
                <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
            )}
          </div>
        </form>

        <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Or find me on my socials:</p>
            <SocialLinks links={SOCIAL_LINKS} className="justify-center space-x-8" />
        </div>
      </div>
    </Section>
  );
});

export default React.memo(ContactComponent);
