import { motion, AnimatePresence } from 'framer-motion';

/**
 * Tela de boot com barra de progresso.
 * Antes duplicada em luxjson.jsx e Blog.jsx.
 *
 * Props:
 *  - isLoading: boolean
 *  - progress: 0-100
 */
export default function BootLoader({ isLoading, progress }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="sh-boot-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="sh-boot-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="sh-boot-logo">luxjson</h1>
            {progress !== undefined && (
              <div
                className="sh-boot-progress-bar"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
