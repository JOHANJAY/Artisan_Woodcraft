import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '../components/ui/PageTransition'
import { Link } from 'react-router-dom'

const About = () => {
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: workshopRef, inView: workshopInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const team = [
    {
      id: 1,
      name: 'Michael Thompson',
      title: 'Founder & Master Craftsman',
      bio: 'With over 20 years of experience in fine woodworking, Michael founded Artisan Woodcraft to pursue his passion for creating heirloom-quality furniture. He trained under master craftsmen in both the US and Europe before establishing his own workshop.',
      image: 'https://images.pexels.com/photos/8961449/pexels-photo-8961449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'Lead Designer',
      bio: 'Sarah brings 15 years of interior design experience to the team. Her background in architecture and furniture design helps bridge client visions with practical, beautiful solutions. She specializes in translating ideas into detailed plans.',
      image: 'https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 3,
      name: 'James Wilson',
      title: 'Senior Woodworker',
      bio: 'James has been crafting fine furniture for over a decade. His specialty is joinery and detail work, ensuring every piece not only looks beautiful but will stand the test of time. He leads our apprenticeship program.',
      image: 'https://images.pexels.com/photos/8961459/pexels-photo-8961459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    }
  ]

  return (
    <PageTransition>
      <div className="bg-softwhite">
        {/* Hero Section */}
        <section className="py-32 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Story</h1>
              <p className="text-lg text-slate mb-8">
                Discover the passion, people, and process behind Artisan Woodcraft's
                commitment to exceptional craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding" ref={storyRef}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-6">The Artisan Woodcraft Story</h2>
                <p className="mb-4">
                  Artisan Woodcraft was founded in 2010 by master craftsman Michael Thompson, 
                  whose vision was to create a workshop where traditional woodworking techniques 
                  would be preserved and celebrated in the creation of modern, timeless furniture.
                </p>
                <p className="mb-4">
                  What began as a small one-person operation has grown into a thriving studio 
                  of dedicated artisans who share a commitment to exceptional quality and 
                  sustainable practices. Today, our team combines time-honored woodworking 
                  methods with contemporary design sensibilities.
                </p>
                <p>
                  Every piece that leaves our workshop tells a story – not just of the tree it 
                  came from, but of the hands that shaped it and the vision that inspired it. 
                  We believe that furniture should be more than functional; it should be a 
                  meaningful part of your home for generations to come.
                </p>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 md:-inset-8 border-2 border-walnut transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0"></div>
                  <img 
                    src="https://images.pexels.com/photos/6308089/pexels-photo-6308089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Artisan woodworker in workshop" 
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-charcoal text-softwhite">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-walnut mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-2xl mb-4">Craftsmanship</h3>
                <p>
                  We uphold the highest standards of woodworking, paying attention to every detail and using time-tested techniques to create furniture that lasts generations.
                </p>
              </div>
              
              <div className="text-center p-6">
                <h3 className="text-2xl mb-4">Sustainability</h3>
                <p>
                  We source wood responsibly, minimize waste, and create pieces designed to last for generations – the ultimate form of sustainability.
                </p>
              </div>
              
              <div className="text-center p-6">
                <h3 className="text-2xl mb-4">Client Partnership</h3>
                <p>
                  We believe in collaborative relationships with our clients, working together to bring your vision to life through open communication and shared creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-padding" ref={teamRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                Meet The Team
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-1 bg-walnut mx-auto mb-6"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl mx-auto text-slate"
              >
                Our talented team of craftspeople brings diverse skills and perspectives 
                to every project, united by a shared passion for exceptional woodworking.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-cream"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-walnut mb-4">{member.title}</p>
                    <p className="text-slate">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Workshop */}
        <section className="section-padding bg-cream" ref={workshopRef}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={workshopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-6">Our Workshop</h2>
                <p className="mb-4">
                  Located in Portland, Oregon, our 3,000-square-foot workshop is the heart of our operation. 
                  It's equipped with both traditional hand tools and select modern machinery, allowing us to 
                  honor traditional techniques while meeting contemporary production needs.
                </p>
                <p className="mb-4">
                  We maintain dedicated areas for wood selection and storage, joinery, assembly, and finishing. 
                  Our finishing room uses low-VOC, environmentally friendly products, reflecting our commitment 
                  to sustainability.
                </p>
                <p>
                  Clients are welcome to visit our workshop by appointment to see works in progress, 
                  discuss projects, and experience firsthand the care and craftsmanship that goes into each piece.
                </p>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={workshopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.pexels.com/photos/4993095/pexels-photo-4993095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Workshop with tools" 
                    className="w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3637784/pexels-photo-3637784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Woodworking detail" 
                    className="w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/6153734/pexels-photo-6153734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Workshop materials" 
                    className="w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/8961496/pexels-photo-8961496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Craftsman at work" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-charcoal text-softwhite">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Visit Our Workshop</h2>
              <p className="text-lg mb-8">
                We welcome clients to visit our workshop by appointment to discuss projects, 
                see our craftspeople at work, and experience our process firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn bg-walnut text-softwhite hover:bg-brass">
                  Schedule a Visit
                </Link>
                <Link to="/portfolio" className="btn bg-transparent border-2 border-softwhite text-softwhite hover:bg-softwhite hover:text-charcoal">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default About