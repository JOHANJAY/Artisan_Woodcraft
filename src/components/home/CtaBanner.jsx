import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CtaBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section 
      className="bg-cover bg-center py-24 relative"
      style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/5089152/pexels-photo-5089152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-charcoal opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-softwhite mb-6"
          >
            Ready to Create Your Dream Piece?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-softwhite text-lg mb-8"
          >
            From concept to creation, we'll work with you to bring your vision to life.
            Start your custom furniture journey today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/quote" className="btn btn-primary">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner