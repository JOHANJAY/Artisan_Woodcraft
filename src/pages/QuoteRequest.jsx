import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiCheck, FiAlertTriangle, FiInfo } from 'react-icons/fi'
import PageTransition from '../components/ui/PageTransition'
import useUiStore from '../store/useUiStore'

const QuoteRequest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [files, setFiles] = useState([])
  const { showNotification } = useUiStore()
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors } 
  } = useForm()
  
  const onDrop = (acceptedFiles) => {
    // Only store the first 5 files
    const newFiles = acceptedFiles.slice(0, 5)
    setFiles(prev => [...prev, ...newFiles].slice(0, 5))
  }
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxSize: 5242880, // 5MB
    maxFiles: 5
  })
  
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const onSubmit = (data) => {
    // In a real app, this would submit to an API
    console.log('Form data:', data)
    console.log('Files:', files)
    
    // Show success notification
    showNotification('Your quote request has been submitted successfully!', 'success')
    
    // Set submitted state
    setIsSubmitted(true)
  }

  const projectTypes = [
    'Dining Table',
    'Coffee Table',
    'Desk',
    'Shelving/Bookcase',
    'Cabinetry',
    'Bedroom Furniture',
    'Seating',
    'Custom/Other'
  ]

  const woodTypes = [
    'Walnut',
    'Oak',
    'Maple',
    'Cherry',
    'Ash',
    'Reclaimed Wood',
    'Not Sure (Need Recommendations)'
  ]

  const timeframes = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible/No Rush'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Not sure yet'
  ]

  return (
    <PageTransition>
      <div className="bg-softwhite">
        {/* Hero Section */}
        <section className="py-32 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Request a Quote</h1>
              <p className="text-lg text-slate mb-8">
                Tell us about your dream piece of furniture, and we'll provide a custom quote
                tailored to your specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="section-padding" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto bg-softwhite p-8 md:p-12 shadow-sm"
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck className="text-success text-3xl" />
                  </div>
                  <h2 className="text-2xl mb-4">Thank You for Your Request!</h2>
                  <p className="mb-6 text-slate">
                    We've received your quote request and will review it promptly. 
                    A member of our team will contact you within 48 hours to discuss your project 
                    in more detail and provide a personalized quote.
                  </p>
                  <p className="text-slate">
                    If you have any immediate questions, please don't hesitate to contact us at{' '}
                    <a href="tel:+15035551234" className="text-walnut hover:text-brass transition-colors duration-300">
                      (503) 555-1234
                    </a>{' '}
                    or{' '}
                    <a href="mailto:info@artisanwoodcraft.com" className="text-walnut hover:text-brass transition-colors duration-300">
                      info@artisanwoodcraft.com
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-2xl mb-4">Custom Furniture Quote Request</h2>
                    <p className="text-slate">
                      Please provide as much detail as possible about your project. 
                      The more information we have, the more accurate our quote will be.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block mb-2">
                            First Name *
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            className={`w-full p-3 border ${errors.firstName ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut`}
                            {...register('firstName', { required: true })}
                          />
                          {errors.firstName && (
                            <p className="text-error text-sm mt-1">First name is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block mb-2">
                            Last Name *
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            className={`w-full p-3 border ${errors.lastName ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut`}
                            {...register('lastName', { required: true })}
                          />
                          {errors.lastName && (
                            <p className="text-error text-sm mt-1">Last name is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block mb-2">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`w-full p-3 border ${errors.email ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut`}
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
                          <label htmlFor="phone" className="block mb-2">
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className={`w-full p-3 border ${errors.phone ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut`}
                            {...register('phone', { required: true })}
                          />
                          {errors.phone && (
                            <p className="text-error text-sm mt-1">Phone number is required</p>
                          )}
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="location" className="block mb-2">
                            City/State *
                          </label>
                          <input
                            id="location"
                            type="text"
                            className={`w-full p-3 border ${errors.location ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut`}
                            placeholder="e.g., Portland, OR"
                            {...register('location', { required: true })}
                          />
                          {errors.location && (
                            <p className="text-error text-sm mt-1">Location is required</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Details */}
                    <div>
                      <h3 className="text-xl mb-4">Project Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="projectType" className="block mb-2">
                            Project Type *
                          </label>
                          <Controller
                            control={control}
                            name="projectType"
                            rules={{ required: true }}
                            render={({ field }) => (
                              <select
                                id="projectType"
                                className={`w-full p-3 border ${errors.projectType ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-white`}
                                {...field}
                              >
                                <option value="">Select Project Type</option>
                                {projectTypes.map((type) => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            )}
                          />
                          {errors.projectType && (
                            <p className="text-error text-sm mt-1">Project type is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="dimensions" className="block mb-2">
                            Approximate Dimensions (if known)
                          </label>
                          <input
                            id="dimensions"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-walnut"
                            placeholder="e.g., 72L x 36W x 30H"
                            {...register('dimensions')}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="woodType" className="block mb-2">
                            Preferred Wood Type
                          </label>
                          <Controller
                            control={control}
                            name="woodType"
                            render={({ field }) => (
                              <select
                                id="woodType"
                                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-walnut bg-white"
                                {...field}
                              >
                                <option value="">Select Wood Type</option>
                                {woodTypes.map((type) => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            )}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="timeframe" className="block mb-2">
                            Desired Timeframe *
                          </label>
                          <Controller
                            control={control}
                            name="timeframe"
                            rules={{ required: true }}
                            render={({ field }) => (
                              <select
                                id="timeframe"
                                className={`w-full p-3 border ${errors.timeframe ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-white`}
                                {...field}
                              >
                                <option value="">Select Timeframe</option>
                                {timeframes.map((time) => (
                                  <option key={time} value={time}>{time}</option>
                                ))}
                              </select>
                            )}
                          />
                          {errors.timeframe && (
                            <p className="text-error text-sm mt-1">Timeframe is required</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block mb-2">
                            Budget Range *
                          </label>
                          <Controller
                            control={control}
                            name="budget"
                            rules={{ required: true }}
                            render={({ field }) => (
                              <select
                                id="budget"
                                className={`w-full p-3 border ${errors.budget ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut bg-white`}
                                {...field}
                              >
                                <option value="">Select Budget Range</option>
                                {budgetRanges.map((range) => (
                                  <option key={range} value={range}>{range}</option>
                                ))}
                              </select>
                            )}
                          />
                          {errors.budget && (
                            <p className="text-error text-sm mt-1">Budget range is required</p>
                          )}
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="projectDescription" className="block mb-2">
                            Project Description *
                          </label>
                          <textarea
                            id="projectDescription"
                            rows={5}
                            className={`w-full p-3 border ${errors.projectDescription ? 'border-error' : 'border-gray-300'} rounded-sm focus:outline-none focus:border-walnut`}
                            placeholder="Please describe your project in detail, including any specific features, design preferences, or inspirations."
                            {...register('projectDescription', { required: true })}
                          />
                          {errors.projectDescription && (
                            <p className="text-error text-sm mt-1">Project description is required</p>
                          )}
                        </div>
                      </div>
                      
                      {/* File Upload */}
                      <div>
                        <label className="block mb-2">
                          Upload Images or Sketches (Optional)
                        </label>
                        <div 
                          {...getRootProps()} 
                          className={`border-2 border-dashed p-6 rounded-sm text-center cursor-pointer transition-colors duration-300 ${
                            isDragActive ? 'border-walnut bg-walnut bg-opacity-5' : 'border-gray-300 hover:border-walnut'
                          }`}
                        >
                          <input {...getInputProps()} />
                          <FiUpload className="mx-auto text-3xl text-slate mb-2" />
                          <p className="text-slate">
                            Drag & drop files here, or click to select files
                          </p>
                          <p className="text-sm text-slate mt-2">
                            Accepted formats: JPG, PNG, PDF (Max 5MB each, up to 5 files)
                          </p>
                        </div>
                        
                        {files.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                            <ul className="space-y-2">
                              {files.map((file, index) => (
                                <li key={index} className="flex items-center justify-between bg-cream p-2 rounded-sm">
                                  <span className="truncate max-w-xs">{file.name}</span>
                                  <button 
                                    type="button" 
                                    onClick={() => removeFile(index)}
                                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                  >
                                    Remove
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div>
                      <h3 className="text-xl mb-4">Additional Information</h3>
                      
                      <div>
                        <label htmlFor="additionalInfo" className="block mb-2">
                          Anything else you'd like us to know?
                        </label>
                        <textarea
                          id="additionalInfo"
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-walnut"
                          placeholder="Additional details, questions, or special requests..."
                          {...register('additionalInfo')}
                        />
                      </div>
                      
                      <div className="mt-6 flex items-start">
                        <div className="flex items-center h-6">
                          <input
                            id="mailingList"
                            type="checkbox"
                            className="h-4 w-4 text-walnut border-gray-300 rounded focus:ring-walnut"
                            {...register('mailingList')}
                          />
                        </div>
                        <label htmlFor="mailingList" className="ml-3 text-sm text-slate">
                          Sign me up for the newsletter to receive updates on new projects and availability
                        </label>
                      </div>
                    </div>
                    
                    <div className="bg-cream p-4 rounded-sm flex items-start space-x-3">
                      <FiInfo className="text-walnut text-xl flex-shrink-0 mt-1" />
                      <p className="text-sm text-slate">
                        After receiving your request, we'll review the details and contact you within 
                        48 hours to discuss your project further and provide a personalized quote. 
                        For immediate assistance, please call us at (503) 555-1234.
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <button 
                        type="submit" 
                        className="btn btn-primary px-10"
                      >
                        Submit Quote Request
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default QuoteRequest