import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiMail, FiClock} from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import PageTransition from '../components/ui/PageTransition'
import useUiStore from '../store/useUiStore'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { showNotification } = useUiStore()
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm()

  const onSubmit = (data) => {
    // In a real app, this would submit to an API
    console.log('Form data:', data)
    
    // Show success notification
    showNotification('Your message has been sent successfully!', 'success')
    
    // Set submitted state
    setIsSubmitted(true)
  }

  return (
    <PageTransition>
      <div className="bg-softwhite">
        {/* Hero Section */}
        <section className="py-32 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Contact Us</h1>
              <p className="text-lg text-slate mb-8">
                Have questions or ready to start your custom furniture journey?
                Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="section-padding" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl mb-6">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-sm mr-4">
                      <FiMapPin className="text-walnut text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Workshop Location</h3>
                      <p className="text-slate">123 Workshop Lane</p>
                      <p className="text-slate">Portland, OR 97205</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-sm mr-4">
                      <FiPhone className="text-walnut text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-slate">
                        <a href="tel:+15035551234" className="hover:text-walnut transition-colors duration-300">
                          (503) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-sm mr-4">
                      <FiMail className="text-walnut text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-slate">
                        <a href="mailto:info@artisanwoodcraft.com" className="hover:text-walnut transition-colors duration-300">
                          info@artisanwoodcraft.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cream p-3 rounded-sm mr-4">
                      <FiClock className="text-walnut text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-slate">Monday-Friday: 9am-5pm</p>
                      <p className="text-slate">Saturday: By appointment</p>
                      <p className="text-slate">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-cream p-3 rounded-sm text-walnut hover:bg-walnut hover:text-softwhite transition-all duration-300"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-cream p-3 rounded-sm text-walnut hover:bg-walnut hover:text-softwhite transition-all duration-300"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a 
                      href="https://pinterest.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-cream p-3 rounded-sm text-walnut hover:bg-walnut hover:text-softwhite transition-all duration-300"
                    >
                      <FaPinterestP className="text-xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-cream p-8 rounded-sm">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-success bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCheck className="text-success text-3xl" />
                      </div>
                      <h2 className="text-2xl mb-4">Message Received!</h2>
                      <p className="mb-6 text-slate">
                        Thank you for reaching out. We've received your message and will get back to you 
                        as soon as possible, typically within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl mb-6">Send Us a Message</h2>
                      
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block mb-2">
                            Your Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={`w-full p-3 border ${errors.name ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-softwhite`}
                            {...register('name', { required: true })}
                          />
                          {errors.name && (
                            <p className="text-error text-sm mt-1">Name is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block mb-2">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`w-full p-3 border ${errors.email ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-softwhite`}
                            {...register('email', { 
                              required: true,
                              pattern: /^\S+@\S+\.\S+$/
                            })}
                          />
                          {errors.email && (
                            <p className="text-error text-sm mt-1">Valid email is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block mb-2">
                            Subject *
                          </label>
                          <input
                            id="subject"
                            type="text"
                            className={`w-full p-3 border ${errors.subject ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-softwhite`}
                            {...register('subject', { required: true })}
                          />
                          {errors.subject && (
                            <p className="text-error text-sm mt-1">Subject is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block mb-2">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            className={`w-full p-3 border ${errors.message ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-softwhite`}
                            {...register('message', { required: true })}
                          />
                          {errors.message && (
                            <p className="text-error text-sm mt-1">Message is required</p>
                          )}
                        </div>
                        
                        <div className="flex justify-center">
                          <button 
                            type="submit" 
                            className="btn btn-primary"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Visit Our Workshop</h2>
              <p className="max-w-2xl mx-auto text-slate">
                We welcome visitors by appointment. Contact us to schedule a visit to our workshop
                where you can see our craftspeople at work and discuss your project in person.
              </p>
            </div>
            
            <div className="h-96 bg-gray-200 relative overflow-hidden">
              {/* In a real implementation, this would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate">Interactive map would be embedded here</p>
              </div>
              
              {/* For demo purposes, showing a placeholder image instead */}
              <img 
                src="https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Map location" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default Contact