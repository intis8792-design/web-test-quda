import { Link, NavLink } from 'react-router-dom'

const navButtons = ['Button2', 'Button3', 'Button4']

// Full literal tokens so Tailwind JIT definitely generates them (active = inverse block)
const NAV_IDLE = 'bg-transparent text-[#f1eeee]'
const NAV_ACTIVE = 'bg-[#f1eeee] text-[#201d1d]'

const navItemBase =
  'h-[33px] w-[108px] whitespace-nowrap border-0 px-0 text-center hover:bg-[#f1eeee] hover:text-[#201d1d] max-[700px]:h-[28px] max-[700px]:w-[25%] max-[700px]:overflow-hidden max-[700px]:text-ellipsis'

function Header() {
  return (
    <header className="sticky top-0 z-30 h-[81px] w-full bg-[#201d1d] relative">
      <Link
        to="/"
        className="logo-gradient absolute left-[6px] top-[10px] font-bytesized text-[56px] leading-[70.4px] tracking-[-0.02em] max-[700px]:static max-[700px]:block max-[700px]:px-6 max-[700px]:pt-3 max-[700px]:text-[38px] max-[700px]:leading-[48px]"
      >
        Qudarebus
      </Link>

      <nav
        aria-label="Content navigation"
        className="absolute left-[271px] top-[39px] flex h-[33px] items-start gap-[8px] font-mono text-[15px] leading-[19.733px] max-[700px]:static max-[700px]:mt-2 max-[700px]:w-full max-[700px]:px-2 max-[700px]:gap-0 max-[700px]:text-[10px] max-[700px]:leading-[14px]"
      >
        <NavLink
          to="/about-me"
          className={({ isActive }) => `${navItemBase} ${isActive ? NAV_ACTIVE : NAV_IDLE}`}
        >
          About Me
        </NavLink>
        {navButtons.map((label) => (
          <button key={label} type="button" className={`${navItemBase} ${NAV_IDLE}`}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header