import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navButtons = [
  { label: 'Button3', panelLeft: 'left-[503px]' },
]

// Mega menu 2 kolom (pola LAYOUT-VARIATIONS): label kategori + item judul+deskripsi
const menuGroups = [
  {
    id: 'category-a',
    label: 'Kategori A',
    items: [
      { title: 'Judul A1', desc: 'Deskripsi singkat A1' },
      { title: 'Judul A2', desc: 'Deskripsi singkat A2' },
      { title: 'Judul A3', desc: 'Deskripsi singkat A3' },
      { title: 'Judul A4', desc: 'Deskripsi singkat A4' },
      { title: 'Judul A5', desc: 'Deskripsi singkat A5' },
    ],
  },
  {
    id: 'category-b',
    label: 'Kategori B',
    items: [
      { title: 'Judul B1', desc: 'Deskripsi singkat B1' },
      { title: 'Judul B2', desc: 'Deskripsi singkat B2' },
      { title: 'Judul B3', desc: 'Deskripsi singkat B3' },
      { title: 'Judul B4', desc: 'Deskripsi singkat B4' },
      { title: 'Judul B5', desc: 'Deskripsi singkat B5' },
    ],
  },
]

// Full literal tokens so Tailwind JIT definitely generates them (active = inverse block)
const NAV_IDLE = 'bg-transparent text-[#f1eeee]'
const NAV_ACTIVE = 'bg-[#f1eeee] text-[#201d1d]'

const navItemBase =
  'flex h-[33px] w-[108px] items-center justify-center whitespace-nowrap border-0 px-0 text-center hover:bg-[#f1eeee] hover:text-[#201d1d] max-[700px]:h-[28px] max-[700px]:w-[25%] max-[700px]:overflow-hidden max-[700px]:text-ellipsis'

function Header() {
  const [openMenu, setOpenMenu] = useState(null)

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
        <NavLink
          to="/bot-discord"
          className={({ isActive }) => `${navItemBase} ${isActive ? NAV_ACTIVE : NAV_IDLE}`}
        >
          Bot Discord
        </NavLink>
        {navButtons.map((btn) => (
          <button
            key={btn.label}
            type="button"
            onClick={() => setOpenMenu((prev) => (prev === btn ? null : btn))}
            aria-expanded={openMenu === btn}
            className={`${navItemBase} ${openMenu === btn ? NAV_ACTIVE : NAV_IDLE}`}
          >
            {btn.label}
          </button>
        ))}
      </nav>

      {openMenu && (
        <div className={`absolute ${openMenu.panelLeft} top-[120px] z-30 flex gap-[28px] bg-[#201d1d] px-5 py-5`}>
          {menuGroups.map((group) => (
            <div key={group.id} className="min-w-[160px]">
              <p className="m-0 mb-3 text-[11px] tracking-[0.15em] uppercase text-[rgba(241,238,238,0.65)]">
                {group.label}
              </p>
              <ul className="m-0 list-none p-0">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="block px-2 py-[6px] text-[13px] leading-[1.3] text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d]"
                    >
                      <span className="block font-medium">{item.title}</span>
                      <span className="block text-[11px] text-[rgba(241,238,238,0.65)]">
                        {item.desc}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header