import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'rate_limited'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Security Feature: Rate limiting to prevent spam
    const MAX_EMAILS = 2; // Maximum 2 emails allowed
    const TIME_FRAME = 60 * 60 * 1000; // per 1 hour
    
    try {
      const now = Date.now();
      const storedHistory = localStorage.getItem('portfolio_contact_submissions');
      let history: number[] = storedHistory ? JSON.parse(storedHistory) : [];
      
      // Filter out submissions older than 1 hour
      history = history.filter(time => now - time < TIME_FRAME);
      
      if (history.length >= MAX_EMAILS) {
        setStatus('rate_limited');
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
        return;
      }
      
      // Add current submission and save back to local storage
      history.push(now);
      localStorage.setItem('portfolio_contact_submissions', JSON.stringify(history));
    } catch (err) {
      console.warn("Could not enforce rate limit due to localStorage errors.", err);
    }

    setStatus('sending');
    
    // Integrated actual EmailJS credentials
    emailjs.sendForm('service_o0xum0q', 'template_occkw0w', form.current, 'fc-PUA4T4clA3fibw')
      .then(() => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
          console.error(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>get in touch</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Animated Card Column */}
          <div style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
            <motion.div
              animate={{ 
                y: [-15, 15, -15],
                rotateZ: [-3, 3, -3],
                rotateY: [-5, 5, -5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '280px',
                height: '400px',
                backgroundColor: '#0a0a0a',
                borderRadius: '24px',
                border: '1px solid #27272a',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              {/* Left Edge Glow */}
              <motion.div 
                animate={{ top: ['20%', '50%', '20%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  left: '-2px',
                  width: '3px',
                  height: '30%',
                  backgroundColor: 'var(--accent-color)',
                  boxShadow: '0 0 15px 3px var(--accent-color)',
                  borderRadius: '4px'
                }} 
              />
              
              {/* Right Edge Glow */}
              <motion.div 
                animate={{ top: ['50%', '20%', '50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  right: '-2px',
                  width: '3px',
                  height: '30%',
                  backgroundColor: 'var(--accent-color)',
                  boxShadow: '0 0 15px 3px var(--accent-color)',
                  borderRadius: '4px'
                }} 
              />
              
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                border: '2px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <Mail size={40} color="#fff" />
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textAlign: 'center', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Get In<br/>Touch!
              </h3>
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="user_name" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="user_name"
                  required 
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border-color)',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="user_email" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="user_email"
                  required 
                  pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address (e.g., name@gmail.com or name@yahoo.com)"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border-color)',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  required 
                  rows={5}
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border-color)',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={status === 'sending' || status === 'rate_limited'} style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && <><CheckCircle size={18} color="#4ade80" /> Sent Successfully</>}
                {status === 'error' && <><AlertCircle size={18} color="#f87171" /> Error Sending</>}
                {status === 'rate_limited' && <><Clock size={18} color="#facc15" /> Try again later</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
