import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiTool, FiEdit, FiShoppingBag, FiTruck, FiMessageCircle, FiGrid } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import { Link } from 'react-router-dom'

const Services = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      id: 1,
      title: 'Custom Furniture Design',
      description: 'From concept sketches to 3D models, we collaborate with you to design your perfect piece, tailored to your exact specifications.',
      icon: <FiEdit className="text-walnut text-4xl" />
    },
    {
      id: 2,
      title: 'Handcrafted Furniture',
      description: 'Each piece is meticulously handcrafted in our Portland workshop using time-honored techniques and premium sustainable materials.',
      icon: <FiTool className="text-walnut text-4xl" />
    },
    {
      id: 3,
      title: 'Built-In Cabinetry',
      description: `Custom cabinets, shelving, and storage solutions designed to integrate seamlessly with your home\'s architecture and aesthetic.`,
      icon: <FiGrid className="text-walnut text-4xl" />
    },
    {
      id: 4,
      title: 'Commercial Projects',
      description: 'Elevate your business space with bespoke furniture pieces that reflect your brand\'s identity and values.',
      icon: <FiShoppingBag className="text-walnut text-4xl" />
    },
    {
      id: 5,
      title: 'Design Consultation',
      description: 'Not sure what you need? Our design experts will help you explore options and develop the perfect solution for your space.',
      icon: <FiMessageCircle className="text-walnut text-4xl" />
    },
    {
      id: 6,
      title: 'Delivery & Installation',
      description: 'White-glove delivery and professional installation ensures your furniture arrives safely and is perfectly placed in your home.',
      icon: <FiTruck className="text-walnut text-4xl" />
    }
  ]

  const process = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: 'We begin with a detailed conversation about your needs, preferences, and vision. This can take place in our workshop, your space, or virtually.',
      image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 2,
      title: 'Design & Planning',
      description: 'Our designers create sketches and 3D models based on your input. We select materials, finalize dimensions, and establish a timeline and budget.',
      image: 'https://plus.unsplash.com/premium_photo-1726840832490-c5e188a900f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      title: 'Crafting Process',
      description: 'Our skilled artisans handcraft your piece with meticulous attention to detail. We provide progress updates throughout the build process.',
      image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 4,
      title: 'Delivery & Installation',
      description: 'Your finished piece is carefully delivered and installed in your space. We ensure everything is perfect before we consider the job complete.',
      image: 'https://images.pexels.com/photos/7937802/pexels-photo-7937802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <PageTransition>
      <div className="bg-softwhite">
        {/* Hero Section */}
        <section className="py-32 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Services</h1>
              <p className="text-lg text-slate mb-8">
                We offer a complete range of custom woodworking services, 
                from design consultation to white-glove delivery and installation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4" ref={servicesRef}>
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                What We Offer
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-1 bg-walnut mx-auto mb-6"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl mx-auto text-slate"
              >
                From concept to creation, we handle every aspect of bringing your custom furniture vision to life.
              </motion.p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={servicesInView ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  className="bg-cream p-8 rounded-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-slate">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-cream" ref={processRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                Our Custom Build Process
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={processInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-1 bg-walnut mx-auto mb-6"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={processInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl mx-auto text-slate"
              >
                We follow a structured yet flexible process to ensure every piece meets our high standards
                and your exact specifications.
              </motion.p>
            </div>

            <div className="space-y-24">
              {process.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-80 md:h-96 object-cover relative z-10"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-walnut text-softwhite rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {step.id}
                      </div>
                      <h3 className="text-2xl">{step.title}</h3>
                    </div>
                    <p className="text-slate mb-6">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-charcoal text-softwhite">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8">
                Contact us today to schedule a consultation or request a quote for your custom furniture project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quote" className="btn bg-walnut text-softwhite hover:bg-brass">
                  Request a Quote
                </Link>
                <Link to="/contact" className="btn bg-transparent border-2 border-softwhite text-softwhite hover:bg-softwhite hover:text-charcoal">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default Services