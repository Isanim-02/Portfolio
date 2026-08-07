import { ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Philippine Marine Litter Monitoring Data Dashboard',
    description: 'Built a Power BI dashboard for marine litter trends; cleaned and standardized multi-source datasets with Power Query for reliable environmental reporting.',
    tech: ['Power BI', 'Power Query', 'Data Transformation'],
    link: '/Vidal_PowerBi_Visualization1.pbix',
    linkText: 'Download .pbix'
  },
  {
    title: 'Multimodal Mental Health Detection System',
    description: 'Combined NLP, computer vision, and sentiment analysis to score emotional states from social media; documented methodology, evaluation, and ethical use cases.',
    tech: ['NLP', 'Computer Vision', 'Sentiment Analysis'],
    link: '#'
  },
  {
    title: 'Pocket Salon',
    description: 'Python backend and API pipeline for image preprocessing and structured feature extraction from user-submitted photos.',
    tech: ['Python', 'Computer Vision', 'API Integration'],
    link: 'https://drive.google.com/file/d/13z3M_szOd4smJKlZQ1FYT2E4lDa28F_e/view?fbclid=IwY2xjawSGiZNleHRuA2FlbQIxMABicmlkETFWRDBDckxLcWhzanRiMXp2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvcM29J4UeOFjk8gfy8ZJFcD45gAw5U2ckJIYj--6Cs3FsrbbR2GRbzFcLlF_aem_hInQUi1syVsxb6SWR6-wSA',
    linkText: 'Download APK',
    note: 'Only available for Android'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
};

export const Projects = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">selected work</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {projects.map((project, index) => {
            const isDownload = project.linkText && project.linkText.toLowerCase().includes('download');
            const isExternal = project.link.startsWith('http');
            return (
              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15)',
                  borderColor: 'var(--text-secondary)'
                }}
                key={index} 
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Decorative top gradient glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }} className="card-glow"></div>

                <motion.h3 
                  style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '-0.02em' }}
                >
                  {project.title}
                </motion.h3>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.7 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tech.map(tech => (
                    <motion.span 
                      key={tech} 
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent-color)' }}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '999px',
                        color: 'var(--text-secondary)',
                        cursor: 'default',
                        transition: 'color 0.2s ease, background-color 0.2s ease'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minHeight: '3.5rem', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex' }}>
                    <motion.a 
                      href={project.link}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      download={project.linkText === 'Download .pbix'}
                      whileHover={{ x: 3, color: 'var(--text-primary)' }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                    >
                      {isDownload ? <Download size={18} /> : <ExternalLink size={18} />} 
                      {project.linkText || 'View Project'}
                    </motion.a>
                  </div>
                  
                  {project.note && (
                    <span style={{ fontSize: '0.78rem', color: '#a1a1aa', opacity: 0.8, fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>
                      * {project.note}
                    </span>
                  )}
                </div>

                <style>{`
                  div:hover > .card-glow { opacity: 0.5 !important; }
                `}</style>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
