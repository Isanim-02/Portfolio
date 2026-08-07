import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaJsSquare, FaHtml5, FaGitAlt, FaFigma, FaChartBar, FaChartPie } from 'react-icons/fa';
import { SiJupyter } from 'react-icons/si';

const icons = [
  { icon: <FaPython size={48} />, name: 'Python' },
  { icon: <FaDatabase size={48} />, name: 'SQL' },
  { icon: <FaJsSquare size={48} />, name: 'JavaScript' },
  { icon: <FaHtml5 size={48} />, name: 'HTML/CSS' },
  { icon: <FaChartBar size={48} />, name: 'Power BI' },
  { icon: <FaChartPie size={48} />, name: 'Tableau' },
  { icon: <SiJupyter size={48} />, name: 'Jupyter' },
  { icon: <FaGitAlt size={48} />, name: 'Git' },
  { icon: <FaFigma size={48} />, name: 'Figma' }
];

const skills = [
  { category: 'Languages & Tools', items: ['Python', 'SQL', 'SQLite', 'JavaScript', 'HTML/CSS', 'Power Query', 'Git'] },
  { category: 'Analytics & Visualization', items: ['Power BI', 'Tableau', 'Data Cleaning', 'Dashboard Design', 'Figma'] },
  { category: 'Data & ML', items: ['Data Analysis', 'Data Processing', 'Machine Learning', 'NLP', 'Sentiment Analysis'] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }
};

export const Skills = () => {
  return (
    <section id="skills" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          skills & expertise
        </motion.h2>
        
        {/* Animated Infinite Marquee */}
        <div style={{
          position: 'relative',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '3rem 0',
          marginBottom: '4rem',
          display: 'flex',
          overflow: 'hidden',
          background: 'transparent',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
        }}>
           <motion.div 
             style={{ display: 'flex', width: 'max-content', gap: '4rem', paddingRight: '4rem' }}
             animate={{ x: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
           >
             {[...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons].map((item, index) => (
               <div key={index} style={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '0.75rem',
                 color: 'var(--text-secondary)',
                 transition: 'color 0.3s ease, transform 0.3s ease',
                 cursor: 'pointer',
                 flexShrink: 0,
                 width: '100px'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.color = 'var(--text-primary)';
                 e.currentTarget.style.transform = 'scale(1.1)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.color = 'var(--text-secondary)';
                 e.currentTarget.style.transform = 'scale(1)';
               }}
               >
                 {item.icon}
                 <span style={{ fontSize: '0.875rem', fontWeight: 500, textAlign: 'center' }}>{item.name}</span>
               </div>
             ))}
           </motion.div>
         </div>
        
        {/* Detailed Skills Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--text-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 style={{
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {skillGroup.items.map(item => (
                  <motion.span 
                    key={item} 
                    variants={itemVariants}
                    style={{
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-secondary)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--bg-primary)';
                      e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                      e.currentTarget.style.borderColor = 'var(--text-primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
