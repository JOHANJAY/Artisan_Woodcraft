import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-50">
          <Logo color={isScrolled ? 'light' : 'dark'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => `
                    text-lg font-medium relative overflow-hidden
                    ${isScrolled || isActive ? 'text-softwhite' : 'text-charcoal'}
                    hover:text-brass transition-colors duration-300
                  `}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink 
                to="/quote"
                className={`btn ${isScrolled ? 'btn-secondary border-softwhite text-softwhite hover:bg-softwhite hover:text-charcoal' : 'btn-primary'}`}
              >
                Request Quote
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className={isScrolled ? 'text-softwhite' : 'text-charcoal'} />
          ) : (
            <FiMenu className={isScrolled ? 'text-softwhite' : 'text-charcoal'} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-charcoal flex flex-col justify-center items-center z-40"
            >
              <ul className="flex flex-col space-y-8 items-center">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => `
                        text-2xl font-medium
                        ${isActive ? 'text-brass' : 'text-softwhite'}
                        hover:text-brass transition-colors duration-300
                      `}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <NavLink 
                    to="/quote"
                    className="btn btn-secondary border-softwhite text-softwhite hover:bg-softwhite hover:text-charcoal"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Quote
                  </NavLink>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header