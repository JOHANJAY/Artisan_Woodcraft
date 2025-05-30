import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Loader from '../components/ui/Loader'

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (can be replaced with actual asset loading logic)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Header />
            <main className="flex-grow">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout