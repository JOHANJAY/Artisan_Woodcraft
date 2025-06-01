import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageTransition from "../components/ui/PageTransition";
import useUiStore from "../store/useUiStore";
import Modal from "react-modal";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Ensure Modal is accessible
Modal.setAppElement("#root");

// Categories
const categories = [
  { id: "all", name: "All" },
  { id: "tables", name: "Tables" },
  { id: "seating", name: "Seating" },
  { id: "storage", name: "Storage & Cabinets" },
  { id: "beds", name: "Bedroom" },
  { id: "custom", name: "Custom Pieces" },
];

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: "Walnut Dining Table",
    description:
      "A 8-foot dining table crafted from solid black walnut with brass inlays.",
    image:
      "https://images.unsplash.com/photo-1729603369774-23019dbf6c9c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tables",
    dimensions: '96"L x 42"W x 30"H',
    materials: "Solid Black Walnut, Brass",
    finishOptions: "Natural oil finish with satin polyurethane topcoat",
    deliveryTime: "8-10 weeks",
  },
  {
    id: 2,
    title: "Modern Credenza",
    description:
      "Mid-century inspired credenza with custom sliding doors and adjustable shelving.",
    image:
      "https://images.pexels.com/photos/6782566/pexels-photo-6782566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "storage",
    dimensions: '72"L x 18"D x 30"H',
    materials: "Maple, Walnut Veneer",
    finishOptions: "Clear satin lacquer",
    deliveryTime: "10-12 weeks",
  },
  {
    id: 3,
    title: "Live Edge Coffee Table",
    description: "Oregon maple live edge coffee table with custom steel base.",
    image:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "tables",
    dimensions: '48"L x 24"W x 18"H',
    materials: "Live Edge Maple, Powder-coated Steel",
    finishOptions: "Natural oil finish with matte polyurethane topcoat",
    deliveryTime: "6-8 weeks",
  },
  {
    id: 4,
    title: "Solid Oak Dining Chairs",
    description:
      "Set of 6 handcrafted dining chairs with comfortable upholstered seats.",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "seating",
    dimensions: '22"W x 24"D x 36"H, Seat Height: 18"',
    materials: "Solid Oak, Premium Wool Upholstery",
    finishOptions: "Clear satin lacquer, Multiple fabric options",
    deliveryTime: "10-12 weeks for set of 6",
  },
  {
    id: 5,
    title: "Four-Poster Bed Frame",
    description: "Elegant four-poster bed frame with optional canopy.",
    image:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "beds",
    dimensions: "Available in Queen, King, and California King",
    materials: "Cherry or Walnut",
    finishOptions: "Oil and wax finish or clear lacquer",
    deliveryTime: "12-14 weeks",
  },
  {
    id: 6,
    title: "Custom Bookshelf",
    description: "Floor-to-ceiling built-in bookshelf with integrated ladder.",
    image:
      "https://images.unsplash.com/photo-1607469256142-12452bece4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "storage",
    dimensions: "Custom sized to your space",
    materials: "Oak, Maple, or Walnut",
    finishOptions: "Multiple stain and finish options",
    deliveryTime: "10-14 weeks depending on size",
  },
  {
    id: 7,
    title: "Ergonomic Desk Chair",
    description:
      "Handcrafted wooden desk chair designed for comfort and support.",
    image:
      "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "seating",
    dimensions: '26"W x 26"D x 36"H, Adjustable Height',
    materials: "Maple or Cherry, Premium Leather",
    finishOptions: "Multiple wood stains, Multiple leather options",
    deliveryTime: "8-10 weeks",
  },
  {
    id: 8,
    title: "Custom Kitchen Island",
    description:
      "Functional kitchen island with butcher block top and storage.",
    image:
      "https://images.unsplash.com/photo-1544614940-686234a602e9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "custom",
    dimensions: "Custom sized to your kitchen",
    materials: "Maple with Walnut Accents, Maple Butcher Block",
    finishOptions: "Food-safe oil finish",
    deliveryTime: "10-12 weeks",
  },
  {
    id: 9,
    title: "Wine Cabinet",
    description:
      "Temperature-controlled wine storage cabinet with display area.",
    image:
      "https://images.unsplash.com/photo-1646442079527-92581f0db655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdpbmUlMjBjYWJpbmV0fGVufDB8fDB8fHww",
    category: "storage",
    dimensions: '36"W x 24"D x 72"H',
    materials: "Cherry, Glass, Metal Hardware",
    finishOptions: "Clear lacquer with satin sheen",
    deliveryTime: "12-14 weeks",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigateProject = (direction) => {
    if (!selectedProject) return;

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }

    setSelectedProject(projects[newIndex]);
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up in case component unmounts while modal is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalIsOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageTransition>
      <div className="bg-softwhite">
        {/* Hero Section */}
        <section className="py-32 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Portfolio</h1>
              <p className="text-lg text-slate mb-8">
                Explore our collection of handcrafted furniture pieces, each one
                a testament to quality craftsmanship and timeless design.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            {/* Filter Categories */}
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              ref={ref}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-walnut text-softwhite"
                      : "bg-cream text-charcoal hover:bg-walnut hover:text-softwhite"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
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
                  <h3 className="mt-4 mb-2 font-serif text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate mb-2">
                    {categories.find((c) => c.id === project.category)?.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p>
                  No projects found in this category. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Project Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="max-w-5xl mx-auto mt-20 bg-softwhite p-0 rounded-sm outline-none"
          overlayClassName="fixed inset-0 bg-softwhite z-50 flex justify-center overflow-y-auto"
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

                <button
                  onClick={() => navigateProject("prev")}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-charcoal bg-opacity-70 text-softwhite p-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                >
                  <FiChevronLeft size={24} />
                </button>

                <button
                  onClick={() => navigateProject("next")}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-charcoal bg-opacity-70 text-softwhite p-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-2">{selectedProject.title}</h3>
                <p className="text-sm text-brass mb-6">
                  {
                    categories.find((c) => c.id === selectedProject.category)
                      ?.name
                  }
                </p>

                <p className="mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Specifications</h4>
                    <ul className="space-y-2 text-slate">
                      <li>
                        <strong>Dimensions:</strong>{" "}
                        {selectedProject.dimensions}
                      </li>
                      <li>
                        <strong>Materials:</strong> {selectedProject.materials}
                      </li>
                      <li>
                        <strong>Finish Options:</strong>{" "}
                        {selectedProject.finishOptions}
                      </li>
                      <li>
                        <strong>Delivery Time:</strong>{" "}
                        {selectedProject.deliveryTime}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">
                      Customization Options
                    </h4>
                    <p className="text-slate">
                      This design can be customized to fit your specific needs
                      and preferences. Adjustments to dimensions, materials, and
                      finishes are available.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <p className="text-slate">
                    Like what you see? Request a similar piece or your own
                    custom design.
                  </p>
                  <a href="/quote" className="btn btn-primary">
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
