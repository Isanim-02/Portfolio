import { motion } from 'framer-motion';

const awards = [
  {
    id: 1,
    icon: "🏆",
    title: "3rd Place - Best in Thesis",
    details: [
      "DLSU-D CICSSG - June 2026"
    ]
  },
  {
    id: 2,
    icon: "🏅",
    title: "Excellence in Student Leadership Award",
    details: [
      "DLSU-D CICSSG - June 2025"
    ]
  },
  {
    id: 3,
    icon: "🌟",
    title: "3-Time Academic Scholarship Awardee",
    details: [
      "Top 1 College-wide (1st semester of AY 2025-2026)",
      "Top 3 University-wide (1st Semester of AY 2024-2025)",
      "Top 2 University-wide (2nd Semester of AY 2024-2025)"
    ]
  }
];

export const Awards = () => {
  return (
    <section id="awards" className="section" style={{ position: 'relative', backgroundColor: 'transparent', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          awards
        </motion.h2>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          backgroundColor: '#27272a',
          border: '1px solid #27272a',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: '#0a0a0a',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#111'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0a0a0a'}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {award.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {award.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {award.details.map((detail, i) => (
                  <span key={i} style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>
                    {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
