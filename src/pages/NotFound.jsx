import { Link } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen bg-softwhite px-4 -mt-20">
        <h1 className="text-6xl md:text-8xl font-bold text-walnut mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-center">Page Not Found</h2>
        <p className="text-slate max-w-md text-center mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </PageTransition>
  )
}

export default NotFound