import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ imageUrl, children, height = 'h-screen-80', overlayOpacity = 0.4 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  // Handle image preloading
  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
  }, [imageUrl])

  return (
    <div ref={ref} className={`relative overflow-hidden ${height}`}>
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          y,
          opacity
        }}
      />
      <div 
        className={`absolute inset-0 bg-charcoal opacity-${overlayOpacity * 10}`}
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative h-full flex items-center justify-center container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}

export default Parallax