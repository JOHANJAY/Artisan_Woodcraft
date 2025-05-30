import { Link } from 'react-router-dom'

const Logo = ({ color = 'dark' }) => {
  return (
    <Link to="/" className="font-serif font-bold text-2xl flex items-center">
      <span className={color === 'light' ? 'text-softwhite' : 'text-charcoal'}>
        Artisan
      </span>
      <span className="text-brass mx-1">
        Woodcraft
      </span>
    </Link>
  )
}

export default Logo