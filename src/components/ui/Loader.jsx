import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-charcoal flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-24 h-24 border-t-4 border-l-4 border-brass rounded-full mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="text-4xl text-softwhite font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Artisan Woodcraft
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader