import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Parallax from '../ui/Parallax'

const Hero = () => {
  return (
    <Parallax 
      imageUrl="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1920&w=1080"
      height="h-screen"
      overlayOpacity={0.5}
    >
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-softwhite mb-6"
        >
          Handcrafted Furniture,<br /> Built for Generations
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-softwhite text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Each piece tells a story of craftsmanship and timeless design,
          created with passion and precision in our Portland workshop.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/portfolio" className="btn btn-primary">
            View Our Work
          </Link>
          <Link to="/quote" className="btn btn-secondary border-softwhite text-softwhite hover:bg-softwhite hover:text-charcoal">
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </Parallax>
  )
}

export default Hero