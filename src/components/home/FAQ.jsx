import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

// FAQ data
const faqItems = [
  {
    id: 1,
    question: 'How long does a custom furniture piece take to complete?',
    answer: 'The timeline varies depending on the complexity of the piece and our current workload. Typically, small to medium projects take 4-8 weeks, while larger or more intricate pieces may take 8-12 weeks. We\'ll provide you with a specific timeline during the consultation phase.'
  },
  {
    id: 2,
    question: 'Do you offer delivery and installation services?',
    answer: 'Yes, we offer white-glove delivery and installation for all our custom pieces within a 100-mile radius of Portland. For clients outside this area, we can arrange shipping with trusted partners who specialize in handling fine furniture.'
  },
  {
    id: 3,
    question: 'What types of wood do you typically work with?',
    answer: 'We primarily work with domestic hardwoods including walnut, oak, maple, cherry, and ash. We also source specialty woods like Oregon myrtlewood and reclaimed timber. All our wood comes from sustainable sources with proper documentation.'
  },
  {
    id: 4,
    question: 'How do I care for my custom wooden furniture?',
    answer: 'Each piece comes with specific care instructions. Generally, we recommend regular dusting with a soft cloth, avoiding direct sunlight and extreme humidity changes, and using coasters for drinks. We also offer maintenance services and refinishing when needed.'
  },
  {
    id: 5,
    question: 'Do you require a deposit before starting work?',
    answer: 'Yes, we require a 50% deposit to secure your place in our production schedule and cover material costs. The remaining balance is due upon completion, before delivery or shipment.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
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
            Frequently Asked Questions
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
            Have questions about our custom furniture process? Find answers to our most commonly asked questions below.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-xl font-medium pr-8 group-hover:text-walnut transition-colors duration-300">
                  {item.question}
                </h3>
                <div className="text-walnut">
                  {activeIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-slate">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-6">Don't see your question answered here?</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ