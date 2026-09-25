import { useEffect, useState } from 'react'
import backgroundImage from '../../assets/v2-assets/sapi-dithered.png'
import transitionYellow from '../../assets/v2-assets/sapi-dithered-yellowchrome.png'
import transitionEx from '../../assets/v2-assets/sapi-dithered-ex.png'
import transitionBlue from '../../assets/v2-assets/sapi-dithered-blue.png'

const separators = [transitionYellow, transitionEx, transitionBlue]

const sections = [
  { id: 'button1', label: 'Button1' },
  { id: 'button2', label: 'Button2' },
  { id: 'button3', label: 'Button3' },
  { id: 'button4', label: 'Button4' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function DiscbotDashboard() {
  const [canvasScale, setCanvasScale] = useState(1)

  useEffect(() => {
    const updateScale = () => setCanvasScale(window.innerWidth / 1400)
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      {/* Sticky topbar — layout persis aslinya: logo kiri 6/10, nav kiri 271/top 39 */}
      <header className="sticky top-0 z-30 h-[81px] w-full overflow-hidden bg-[#201d1d]">
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
              onClick={() => scrollToSection(s.id)}
              className="h-[33px] w-[108px] whitespace-nowrap border-0 bg-transparent px-0 text-center text-[#f1eeee] hover:bg-[#f1eeee] hover:text-[#201d1d] max-[700px]:h-[28px] max-[700px]:w-[25%] max-[700px]:overflow-hidden max-[700px]:text-ellipsis"
            >
              {s.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero pixel-art full-bleed di puncak */}
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

      {/* Konten section, dipisah hero sapi-dithered */}
      <main className="px-8 pt-12 pb-10 max-[700px]:px-4">
        {sections.map((s, i) => (
          <div key={s.id}>
            {i > 0 && (
                          <div className="my-14 max-[700px]:my-10">
                            <img
                              src={separators[i - 1]}
                              alt=""
                              className="w-full"
                              style={{ imageRendering: 'pixelated' }}
                            />
                          </div>
                        )}

            <section id={s.id} className="scroll-mt-[120px]">
              <h2 className="m-0 text-[20px] font-medium leading-[1.3] text-[#f1eeee]">
                {s.label}
              </h2>
              <div className="mt-4 border-b border-dashed border-[rgba(241,238,238,0.35)]" />

              <p className="mt-10 mb-4 text-[13px] font-medium leading-[1.3] tracking-[0.08em] uppercase text-[rgba(241,238,238,0.65)]">
                // SECTION · {s.id}
              </p>
              <p className="m-0 max-w-2xl text-[14px] leading-[1.55] text-[#f1eeee]">
                Konten untuk {s.label}. Bagian ini akan menampilkan sub-konten sesuai
                desain sistem CLI Qudarebus — placeholder sementara sampai konten asli
                dimasukkan.
              </p>
            </section>
          </div>
        ))}
      </main>
    </div>
  )
}

export default DiscbotDashboard