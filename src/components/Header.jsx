import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navButtons = [
  { label: 'Other', panelLeft: 'left-[271px]' },
]

// Mega menu 2 kolom: Server, Kontak
const menuGroups = [
  {
    id: 'server',
    label: 'Server',
    items: [
      { title: 'Server Minecraft', desc: 'Informasi server Minecraft pribadi', link: '/server-minecraft' },
    ],
  },
  {
    id: 'kontak',
    label: 'Kontak',
    items: [
      { title: 'Discord DM', desc: 'Kirim pesan langsung via Discord @angsop' },
      { title: 'Twitter', desc: 'Follow di Twitter @Wortel_Legal', externalLink: 'https://twitter.com/Wortel_Legal' },
      { title: 'placeholder', desc: 'pppppppppppppp' },
    ],
  },
]

// Full literal tokens so Tailwind JIT definitely generates them (active = inverse block)
const NAV_IDLE = 'bg-transparent text-[#fffedb]'
const NAV_ACTIVE = 'bg-[#fffedb] text-[#201d1d]'

const navItemBase =
  'flex h-[33px] w-[130px] items-center justify-center whitespace-nowrap border-0 px-4 text-center hover:bg-[#fffedb] hover:text-[#201d1d] max-[700px]:h-[28px] max-[700px]:w-full max-[700px]:min-w-0 max-[700px]:overflow-hidden max-[700px]:px-1 max-[700px]:text-ellipsis max-[700px]:text-[9px]'

function Header() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <header className="sticky top-0 z-30 relative h-[81px] w-full bg-[#303001] max-[700px]:h-auto max-[700px]:pb-2">
      <Link
        to="/"
        className="logo-gradient absolute left-[6px] top-[10px] font-bytesized text-[56px] leading-[70.4px] tracking-[-0.02em] max-[700px]:static max-[700px]:block max-[700px]:px-4 max-[700px]:pt-3 max-[700px]:text-[38px] max-[700px]:leading-[48px]"
      >
        Qudarebus
      </Link>

      <nav
        aria-label="Content navigation"
        className="absolute left-[271px] top-[39px] flex h-[33px] items-start gap-[12px] font-mono text-[15px] leading-[19.733px] max-[700px]:static max-[700px]:mt-2 max-[700px]:grid max-[700px]:h-auto max-[700px]:w-full max-[700px]:grid-cols-2 max-[700px]:px-2 max-[700px]:gap-0 max-[700px]:text-[10px] max-[700px]:leading-[14px]"
      >
        <NavLink
          to="/about-me"
          className={({ isActive }) => `${navItemBase} w-[210px] ${isActive ? NAV_ACTIVE : NAV_IDLE}`}
        >
          Additional Information
        </NavLink>
        <NavLink
          to="/bot-discord"
          className={({ isActive }) => `${navItemBase} ${isActive ? NAV_ACTIVE : NAV_IDLE}`}
        >
          Bot Discord
        </NavLink>
        <NavLink
          to="/galeri-foto"
          className={({ isActive }) => `${navItemBase} ${isActive ? NAV_ACTIVE : NAV_IDLE}`}
        >
          Foto
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
        <div className={`absolute ${openMenu.panelLeft} top-[120px] z-30 flex gap-[28px] bg-[#7D7D1A] px-5 py-5 max-[700px]:left-2 max-[700px]:right-2 max-[700px]:top-full max-[700px]:flex-col max-[700px]:gap-4 max-[700px]:px-3 max-[700px]:py-4`}>
          {menuGroups.map((group) => (
            <div key={group.id} className="min-w-[160px]">
              <p className="m-0 mb-3 text-[11px] tracking-[0.15em] uppercase text-[rgba(241,238,238,0.65)]">
                {group.label}
              </p>
              <ul className="m-0 list-none p-0">
                {group.items.map((item) => (
                  <li key={item.title}>
                    {item.link ? (
                      <Link
                        to={item.link}
                        onClick={() => setOpenMenu(null)}
                        className="group block px-2 py-[6px] text-[13px] leading-[1.3] text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d]"
                      >
                        <span className="block font-medium">{item.title}</span>
                        <span className="block text-[11px] text-[rgba(241,238,238,0.65)] group-hover:text-[#201d1d]">
                          {item.desc}
                        </span>
                      </Link>
                    ) : item.externalLink ? (
                      <a
                        href={item.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block px-2 py-[6px] text-[13px] leading-[1.3] text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d]"
                      >
                        <span className="block font-medium">{item.title}</span>
                        <span className="block text-[11px] text-[rgba(241,238,238,0.65)] group-hover:text-[#201d1d]">
                          {item.desc}
                        </span>
                      </a>
                    ) : (
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="group block px-2 py-[6px] text-[13px] leading-[1.3] text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d]"
                      >
                        <span className="block font-medium">{item.title}</span>
                        <span className="block text-[11px] text-[rgba(241,238,238,0.65)] group-hover:text-[#201d1d]">
                          {item.desc}
                        </span>
                      </a>
                    )}
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