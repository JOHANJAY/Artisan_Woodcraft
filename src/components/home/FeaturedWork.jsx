import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Modal from 'react-modal'
import { FiX } from 'react-icons/fi'

// Ensure Modal is accessible
Modal.setAppElement('#root')

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: 'Custom Walnut Dining Table',
    description: 'A 8-foot dining table crafted from solid black walnut with brass inlays.',
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Dining'
  },
  {
    id: 2,
    title: 'Modern Credenza',
    description: 'Mid-century inspired credenza with custom sliding doors and adjustable shelving.',
    image: 'https://images.pexels.com/photos/6782566/pexels-photo-6782566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Storage'
  },
  {
    id: 3,
    title: 'Live Edge Coffee Table',
    description: 'Oregon maple live edge coffee table with custom steel base.',
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Tables'
  }
]

const FeaturedWork = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const openModal = (project) => {
    setSelectedProject(project)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <section className="section-padding bg-softwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
            className="mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-walnut mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate"
          >
            Each piece is meticulously crafted in our Portland workshop, 
            using time-honored techniques and premium sustainable materials.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-6 py-3 bg-walnut text-softwhite">
                    View Details
                  </div>
                </div>
              </div>
              <h3 className="mt-4 mb-2 font-serif text-xl">{project.title}</h3>
              <p className="text-sm text-slate mb-2">{project.category}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn btn-secondary">
            View Full Portfolio
          </Link>
        </div>

        {/* Project Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="max-w-4xl mx-auto mt-20 bg-softwhite p-0 rounded-sm outline-none"
          overlayClassName="fixed inset-0 bg-charcoal bg-opacity-90 z-50 flex justify-center overflow-y-auto"
        >
          {selectedProject && (
            <div>
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-96 object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-charcoal bg-opacity-70 text-softwhite p-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-2">{selectedProject.title}</h3>
                <p className="text-sm text-brass mb-4">{selectedProject.category}</p>
                <p className="mb-6">{selectedProject.description}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/portfolio/${selectedProject.id}`} className="text-walnut hover:text-brass transition-colors duration-300">
                    View Project Details
                  </Link>
                  <Link to="/quote" className="btn btn-primary">
                    Request Similar Piece
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}

export default FeaturedWork