import React, { forwardRef } from 'react';
import Section from './Section';
import SocialLinks from './SocialLinks';
import { SOCIAL_LINKS } from '../constants';

const ContactComponent = forwardRef<HTMLElement, {}>((props, ref) => {
  const inputStyles = "w-full bg-gray-900/30 backdrop-blur-sm border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 placeholder-gray-400";

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
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit"
              className="w-full sm:w-auto inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
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
