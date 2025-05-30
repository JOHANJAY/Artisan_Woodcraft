import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import Logo from '../ui/Logo'
import Newsletter from '../ui/Newsletter'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-charcoal text-softwhite">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-16 pb-8">
          <div className="md:col-span-1">
            <Logo color="light" />
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Crafting bespoke furniture pieces with passion and precision since 2010. Each creation tells a unique story.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-softwhite hover:text-brass transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-softwhite hover:text-brass transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-softwhite hover:text-brass transition-colors duration-300">
                <FaPinterestP size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brass transition-colors duration-300">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-brass transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brass transition-colors duration-300">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brass transition-colors duration-300">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brass transition-colors duration-300">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-brass transition-colors duration-300">Request Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Workshop Lane</li>
              <li className="text-gray-300">Portland, OR 97205</li>
              <li className="text-gray-300">Monday-Friday: 9am-5pm</li>
              <li className="text-gray-300">Saturday: By appointment</li>
              <li className="text-gray-300">Sunday: Closed</li>
              <li><a href="tel:+15035551234" className="text-gray-300 hover:text-brass transition-colors duration-300">(503) 555-1234</a></li>
              <li><a href="mailto:info@artisanwoodcraft.com" className="text-gray-300 hover:text-brass transition-colors duration-300">info@artisanwoodcraft.com</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new projects and limited availability spots.
            </p>
            <Newsletter />
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Artisan Woodcraft. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-brass transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brass transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer