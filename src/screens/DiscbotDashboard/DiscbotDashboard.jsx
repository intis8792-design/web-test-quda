import { useEffect, useState } from 'react'
import backgroundImage from '../../assets/v2-assets/sapi-dithered.png'
import imgBlue from '../../assets/v2-assets/sapi-dithered-blue.png'
import imgRed from '../../assets/v2-assets/sapi-dithered-red.png'
import imgYellow from '../../assets/v2-assets/sapi-dithered-yellowchrome.png'
import imgEx from '../../assets/v2-assets/sapi-dithered-ex.png'

const sections = [
  {
    id: 'button1',
    label: 'Button1',
    sublabel: '// SECTION 01',
    heading: 'Selesaikan dengan fokus',
    body: 'Tiap butir pekerjaan dikerjakan satu per satu tanpa berpindah tengah jalan. Hasilnya terlihat nyata, tertulis, dan bisa diverifikasi langkah demi langkah.',
    img: imgBlue,
  },
  {
    id: 'button2',
    label: 'Button2',
    sublabel: '// SECTION 02',
    heading: 'Karya berawal dari detail',
    body: 'Celah kecil sering kali menyimpan keputusan paling menentukan. Memperhatikan detil bukan soal kesempurnaan, melainkan cara memahami bagaimana satu hal dibangun dari banyak bagian kecil.',
    img: imgYellow,
  },
  {
    id: 'button3',
    label: 'Button3',
    sublabel: '// SECTION 03',
    heading: 'Dari ide menjadi wujud nyata',
    body: 'Sebuah ide baru berarti ketika sampai ke tangan yang merawatnya. Dicoba, dikoreksi, lalu dipakai — itulah cara sebuah wujud benar-benar tercipta dan berkembang.',
    img: imgRed,
  },
  {
    id: 'button4',
    label: 'Button4',
    sublabel: '// SECTION 04',
    heading: 'Eksplorasi tanpa batas',
    body: 'Rasa ingin tahu adalah bahan bakar paling awet yang pernah ada. Mencoba hal yang belum dikenal tidak selalu berujung rumit — kadang justru di situlah hal menarik muncul.',
    img: imgEx,
  },
]

const menuItems = Array.from({ length: 10 }, (_, i) => `-test menu ${String.fromCharCode(65 + i)}`)

function DiscbotDashboard() {
  const [canvasScale, setCanvasScale] = useState(1)
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    const updateScale = () => setCanvasScale(window.innerWidth / 1400)
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      {/* Sticky topbar — layout persis aslinya: logo kiri 6/10, nav kiri 271/top 39 */}
      <header className="sticky top-0 z-30 h-[81px] w-full bg-[#201d1d] relative">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="logo-gradient absolute left-[6px] top-[10px] font-bytesized text-[56px] leading-[70.4px] tracking-[-0.02em] max-[700px]:static max-[700px]:block max-[700px]:px-6 max-[700px]:pt-3 max-[700px]:text-[38px] max-[700px]:leading-[48px]"
        >
          Qudarebus
        </a>

        <nav
                  aria-label="Content navigation"
                  className="absolute left-[271px] top-[39px] flex h-[33px] items-start gap-[8px] font-mono text-[15px] leading-[19.733px] max-[700px]:static max-[700px]:mt-2 max-[700px]:w-full max-[700px]:px-2 max-[700px]:gap-0 max-[700px]:text-[10px] max-[700px]:leading-[14px]"
                >
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setOpenMenu((prev) => (prev === s.label ? null : s.label))}
                                    aria-expanded={openMenu === s.label}
                                    className={`h-[33px] w-[108px] whitespace-nowrap border-0 bg-transparent px-0 text-center text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d] ${
                                      openMenu === s.label ? 'bg-[#f1eeee] text-[#201d1d]' : ''
                                    } max-[700px]:h-[28px] max-[700px]:w-[25%] max-[700px]:overflow-hidden max-[700px]:text-ellipsis`}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>

                {openMenu && (
                  <div className="absolute left-[271px] top-[120px] z-30 w-[260px] border-[1px] border-[#f1eeee] bg-[#201d1d]">
                    <div className="border-b-[1px] border-[#f1eeee]/30 px-3 py-2 text-[11px] tracking-[0.15em] uppercase text-[rgba(241,238,238,0.65)]">
                      {openMenu}
                    </div>
                    <ul className="m-0 list-none p-0">
                      {menuItems.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="block px-3 py-[7px] text-[13px] text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d]"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
      </header>

      {/* Hero full-bleed — satu-satunya headline besar (level halaman, bukan per-section) */}
      <section id="hero" aria-label="Hero visual" style={{ height: `${484 * canvasScale}px` }}>
        <div
          className="w-[1400px]"
          style={{ transform: `scale(${canvasScale})`, transformOrigin: 'top left' }}
        >
          <div className="relative h-[484px] w-[1400px] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-[0.66]">
              <img
                src={backgroundImage}
                alt=""
                className="absolute left-[-2.07%] top-0 h-full w-[104.5%] max-w-none"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="absolute left-[57px] top-[304px] w-[364px] font-bytesized text-[64px] leading-[40px] tracking-[-0.02em] text-[#e6eb52]">
              <p className="m-0">Lorem Ipsum</p>
              <p className="m-0">Dolor Sit Amet</p>
            </div>
            <div className="absolute left-[1042px] top-[142px] w-[364px] font-bytesized text-[64px] leading-[40px] tracking-[-0.02em] text-[#e6eb52]">
              <p className="m-0">Lorem Ipsum</p>
              <p className="m-0">Dolor Sit Amet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section alternating: ganjil = teks kiri/gambar kanan; genap = gambar kiri/teks kanan */}
      <main className="px-8 pt-14 pb-16 max-[700px]:px-4">
        {sections.map((s, i) => {
          const imageRight = i % 2 === 0
          return (
            <section
              key={s.id}
              id={s.id}
              className="mx-auto mb-20 max-w-6xl max-[700px]:mb-12"
            >
              <div className="flex items-center gap-[32px] max-[700px]:flex-col">
                {/* Kolom teks */}
                <div className={`flex-1 max-[700px]:w-full ${imageRight ? 'order-1' : 'order-2'}`}>
                  <p className="m-0 mb-4 text-[13px] font-medium leading-[1.3] tracking-[0.08em] uppercase text-[rgba(241,238,238,0.65)]">
                    {s.sublabel}
                  </p>
                  <h2 className="m-0 mb-5 text-[20px] font-medium leading-[1.3] text-[#e6eb52]">
                    {s.heading}
                  </h2>
                  <p className="m-0 max-w-xl text-[14px] leading-[1.55] text-[rgba(241,238,238,0.65)]">
                    {s.body}
                  </p>
                </div>

                {/* Kolom gambar dither */}
                <div className={`w-[45%] max-[700px]:w-full ${imageRight ? 'order-2' : 'order-1'}`}>
                  <img src={s.img} alt="" className="w-full" style={{ imageRendering: 'pixelated' }} />
                </div>
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default DiscbotDashboard