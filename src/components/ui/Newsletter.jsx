import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    
    // In a real app, this would connect to an API
    // For demo purposes, just show success state
    setIsSubmitted(true)
    setError('')
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="p-4 bg-walnut bg-opacity-20 rounded-sm">
          <p className="text-softwhite">
            Thank you for subscribing! We'll be in touch with our latest projects and news.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-charcoal border border-gray-700 p-3 text-softwhite rounded-sm focus:outline-none focus:border-brass"
              required
            />
            {error && <p className="text-error text-sm mt-1">{error}</p>}
          </div>
          <button 
            type="submit" 
            className="bg-walnut text-softwhite py-3 px-4 rounded-sm hover:bg-brass transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}

export default Newsletter