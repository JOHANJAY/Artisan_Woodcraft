import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Jennifer L.',
    location: 'Portland, OR',
    quote: `The dining table we commissioned is the centerpiece of our home. The attention to detail and craftsmanship is exceptional. It's a piece we'll cherish for generations.`,
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'Michael T.',
    location: 'Seattle, WA',
    quote: 'After searching for the perfect desk for months, I decided to have one custom made. The team understood exactly what I wanted and delivered a piece that exceeded my expectations.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'Sarah W.',
    location: 'Bend, OR',
    quote: 'Our live edge coffee table is not just furniture, it\'s a work of art. Guests always comment on its beauty. The natural character of the wood was preserved perfectly.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
]

const Testimonials = () => {
  const swiperRef = useRef(null)
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start()
    }
  }, [inView])

  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
            className="mb-4"
          >
            Client Testimonials
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
            Hear what our clients have to say about their custom furniture experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-softwhite p-8 md:p-12 shadow-sm mb-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl italic mb-6 text-slate">{testimonial.quote}</p>
                      <div>
                        <p className="font-serif text-lg font-medium">{testimonial.name}</p>
                        <p className="text-sm text-slate">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials