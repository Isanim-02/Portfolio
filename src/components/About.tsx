import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">about me</h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              I am a Computer Science student specializing in Intelligent Systems at De La Salle University - Dasmariñas, achieving a 3.88 GPA (Summa Cum Laude) and as a Dean's Lister for eight consecutive semesters.
            </p>
            <p>
              My professional experience includes serving as the Director of Audit for DLSU-D CICSSG, where I led end-to-end financial audit cycles, and interning at Revery Digitals Technologies Inc., focusing on QA testing and UI/UX enhancements.
            </p>
            <p>
              I have a strong foundation in data analysis, SQL, and visualization, and I love applying data cleaning and machine learning techniques to academic and personal projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Animated Terminal Window */}
          <div style={{
            width: '100%',
            backgroundColor: '#0a0a0a',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            zIndex: 10
          }}>
            {/* Terminal Header */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '1rem',
              borderBottom: '1px solid var(--border-color)',
              backgroundColor: '#111'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            </div>

            {/* Terminal Body */}
            <div style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.6 }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span style={{ color: '#ec4899' }}>import</span> pandas <span style={{ color: '#ec4899' }}>as</span> pd<br />
                <span style={{ color: '#ec4899' }}>import</span> torch<br />
                <br />
                <span style={{ color: '#6b7280' }}># Initialize deep learning model</span><br />
                <span style={{ color: '#3b82f6' }}>model</span> = IntelligentSystem(<br />
                &nbsp;&nbsp;architecture=<span style={{ color: '#10b981' }}>'Transformer'</span>,<br />
                &nbsp;&nbsp;focus=<span style={{ color: '#10b981' }}>'Data Analysis'</span><br />
                )<br />
                <br />
                <span style={{ color: '#6b7280' }}># Process dataset</span><br />
                <span style={{ color: '#3b82f6' }}>data</span> = pd.read_csv(<span style={{ color: '#10b981' }}>'future.csv'</span>)<br />
                results = model.predict(data)<br />
                <br />
                <span style={{ color: '#ec4899' }}>print</span>(<span style={{ color: '#10b981' }}>"Optimizing..."</span>)
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ display: 'inline-block', width: '8px', height: '15px', backgroundColor: '#a1a1aa', marginLeft: '4px', verticalAlign: 'middle' }}
                />
              </motion.div>
            </div>
          </div>

          {/* Animated Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '70%',
              height: '70%',
              background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 0
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
