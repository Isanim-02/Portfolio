import { motion } from 'framer-motion';
import { Briefcase, Server, Code, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    id: 1,
    role: "Intern",
    company: "Revery Digitals Technologies Inc. — Makati, Philippines",
    date: "Jun 2025 – Aug 2025",
    description: [
      "Performed QA testing on production applications; logged defects, reproduced issues, and validated fixes to improve system reliability.",
      "Enhanced UI/UX of current company projects, making navigation easier for end users."
    ],
    tags: ["QA Testing", "UI/UX", "System Reliability"],
    icon: <Code size={20} color="#fff" />,
    iconBg: "#1d4ed8"
  },
  {
    id: 2,
    role: "Director of Audit",
    company: "DLSU-D CICSSG — Dasmariñas, Philippines",
    date: "2024 – 2025",
    description: [
      "Led end-to-end financial audit cycles ensuring compliance with university financial regulations.",
      "Reviewed reports with department heads to validate figures, funding alignment, and accuracy for semester financial reporting."
    ],
    tags: ["Financial Audit", "Compliance", "Reporting"],
    icon: <Briefcase size={20} color="#fff" />,
    iconBg: "#15803d"
  },
  {
    id: 3,
    role: "Co-Head of Data Management Committee",
    company: "Data Management Committee",
    date: "2024 – 2025",
    description: [
      "Co-headed the data management initiatives, ensuring data integrity and organizing data collection processes effectively."
    ],
    tags: ["Data Management", "Leadership", "Organization"],
    icon: <Server size={20} color="#fff" />,
    iconBg: "#0f766e"
  }
];

export const Experience = () => {
  const [showAll, setShowAll] = useState(true);

  return (
    <section id="experience" className="section" style={{ position: 'relative', backgroundColor: 'transparent', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          experience
        </motion.h2>

        <div style={{ 
          position: 'relative', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          {/* Timeline Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, var(--accent-color) 10%, var(--accent-color) 90%, transparent)',
            opacity: 0.3
          }} />

          {experiences.slice(0, showAll ? experiences.length : 2).map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '2rem'
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '20.5px',
                top: '24px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-color)',
                boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.5)'
              }} />

              {/* Experience Card */}
              <div style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid #27272a',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3f3f46'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#27272a'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: exp.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '0.25rem' }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid #27272a',
                    color: '#a1a1aa',
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap'
                  }}>
                    {exp.date}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#a1a1aa', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {exp.tags.map((tag, i) => (
                    <span key={i} style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      border: '1px solid #422006',
                      backgroundColor: 'transparent',
                      color: '#d4d4d8',
                      fontSize: '0.75rem',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {experiences.length > 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
          >
            <button 
              className="btn btn-outline"
              onClick={() => setShowAll(!showAll)}
              style={{ 
                borderRadius: '999px',
                padding: '0.5rem 1.25rem',
                fontSize: '0.875rem'
              }}
            >
              {showAll ? 'See less' : 'See more'} 
              <ChevronUp 
                size={16} 
                style={{ 
                  marginLeft: '0.5rem', 
                  transform: showAll ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
