import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    style={{
      position: 'fixed',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--color-bg)',
    }}
  >
    <motion.div
      style={{ width: 48, height: 48, background: 'var(--color-accent-soft)' }}
      animate={{ rotate: [0, 180, 360], borderRadius: ['20%', '50%', '20%'] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);

export default Loader;