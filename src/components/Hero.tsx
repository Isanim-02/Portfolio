import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--nav-height)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background Subtle Gradient */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Column: Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Sora', system-ui, sans-serif",
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginLeft: '7px',
              marginBottom: '1rem'
            }}
          >
            Luis Miguel S. Vidal
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'Sora', system-ui, sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginLeft: '0.05em',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}
          >
            Data-driven <br />
            <span style={{ color: 'var(--text-secondary)' }}>Intelligent Systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              maxWidth: '550px',
              lineHeight: 1.6
            }}
          >
            Computer Science student (Summa Cum Laude) focused on data analysis, SQL, and visualization. Building Power BI dashboards and applying machine learning to real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              view work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              contact me
            </a>
            <a href="/Vidal_Resume.pdf" download className="btn btn-outline">
              download cv
            </a>
          </motion.div>
        </div>

        {/* Right Column: Animated Data Core Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            position: 'relative',
            height: '500px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px'
          }}
        >
          {/* Core Glow */}
          <div style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(40px)',
            opacity: 0.4,
            animation: 'pulse 4s ease-in-out infinite alternate'
          }} />

          {/* Orbital Rings representing Data Streams */}
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={`ring-${ring}`}
              animate={{
                rotateX: [60, 60],
                rotateY: [0, 360],
                rotateZ: [0, 360]
              }}
              transition={{
                repeat: Infinity,
                duration: 15 + ring * 5,
                ease: "linear",
                delay: ring * 0.5
              }}
              style={{
                position: 'absolute',
                width: `${200 + ring * 100}px`,
                height: `${200 + ring * 100}px`,
                border: `1px solid rgba(255, 255, 255, ${0.05 + ring * 0.05})`,
                borderRadius: '50%',
                borderTopColor: ring % 2 === 0 ? '#3b82f6' : 'var(--text-primary)',
                borderRightColor: ring % 2 === 0 ? 'transparent' : '#10b981',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Data points on the rings */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0 0 10px #fff'
              }} />
            </motion.div>
          ))}

          {/* Floating Data Nodes (Scatter Plot effect) */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              animate={{
                y: [0, Math.random() * -60 - 20, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [1, Math.random() + 0.5, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 4,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              style={{
                position: 'absolute',
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: i % 3 === 0 ? '#3b82f6' : (i % 4 === 0 ? '#10b981' : '#a1a1aa'),
                borderRadius: '50%',
                boxShadow: i % 3 === 0 ? '0 0 10px #3b82f6' : 'none'
              }}
            />
          ))}

        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};
