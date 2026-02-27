import { useState } from 'react'
import { Menu, X } from 'react-feather'
import { cn } from '@/lib/cn'
import Logo from '../../images/swb_logos/Kolo_SWB-03.svg'

const navLinks = [
  { href: '/mozambique', label: 'Mozambique' },
  { href: '/zambia', label: 'Zambia' },
  { href: '/swaziland', label: 'Swaziland' },
  { href: '/ethiopia', label: 'Ethiopia' },
  { href: '/lesotho', label: 'Lesotho' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[99] bg-dark shadow-[0_0_6px_1px_rgba(61,68,71,0.45)]">
      <nav className="flex items-center justify-between px-4 py-2">
        {/* Mobile logo */}
        <a href="/" className="lg:hidden">
          <img className="w-[60px]" src={Logo} alt="Skate World Better logo" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={32} /> : <Menu className="text-white" size={32} />}
        </button>

        {/* Navigation links */}
        <div className={cn(
          'flex-col lg:flex-row items-center lg:mx-5',
          isOpen
            ? 'flex absolute top-full left-0 right-0 bg-dark py-6 z-50'
            : 'hidden lg:flex',
        )}>
          {/* Desktop logo */}
          <a href="/" className="hidden lg:block pl-3 pr-12">
            <img className="w-[60px]" src={Logo} alt="Skate World Better logo" />
          </a>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="lg:px-4 py-2 lg:py-0 text-base text-white no-underline hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
