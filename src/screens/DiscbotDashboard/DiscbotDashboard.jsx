import { useEffect, useState } from 'react'
import backgroundImage from '../../assets/v2-assets/sapi-dithered.png'

const tabs = [
  { id: 'button1', label: 'Button1' },
  { id: 'button2', label: 'Button2' },
  { id: 'button3', label: 'Button3' },
  { id: 'button4', label: 'Button4' },
]

function DiscbotDashboard() {
  const [canvasScale, setCanvasScale] = useState(1)
  const [pageScale, setPageScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const scale = window.innerWidth / 1400
      setPageScale(window.innerWidth >= 700 ? scale : 1)
      setCanvasScale(window.innerWidth < 700 ? scale : 1)
    }
    updateScale()
    window.addEventListener('resize', updateScale)

    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <main
      className="relative h-[609px] w-[1400px] overflow-hidden bg-[#201d1d] text-[#f1eeee] max-[699px]:h-auto max-[699px]:min-h-screen max-[699px]:w-full"
      style={pageScale !== 1 ? { transform: `scale(${pageScale})`, transformOrigin: 'top left' } : undefined}
      data-node-id="2:11"
    >
      <header className="relative z-10 h-[81px] w-full overflow-hidden bg-[#201d1d] max-[700px]:h-[112px]">
        <a
          href="#content"
          className="logo-gradient absolute left-[6px] top-[10px] font-bytesized text-[56px] leading-[70.4px] tracking-[-0.02em] max-[700px]:text-[38px] max-[700px]:leading-[48px]"
        >
          Qudarebus
        </a>

        <nav
          aria-label="Content navigation"
          className="absolute left-[271px] top-[39px] flex h-[33px] w-[536px] items-start gap-[8px] font-mono text-[15px] leading-[19.733px] max-[700px]:left-[6px] max-[700px]:right-[6px] max-[700px]:top-[68px] max-[700px]:h-[28px] max-[700px]:w-auto max-[700px]:gap-0 max-[700px]:text-[10px] max-[700px]:leading-[14px]"
        >
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                type="button"
                className="h-[33px] w-[108px] whitespace-nowrap border-0 bg-transparent px-0 text-center text-[#f1eeee] transition-colors hover:bg-[#f1eeee] hover:text-[#201d1d] max-[700px]:h-[28px] max-[700px]:w-[25%] max-[700px]:overflow-hidden max-[700px]:text-ellipsis"
              >
                {tab.label}
              </button>
            )
          })}
        </nav>
      </header>

      <section
        id="content"
        className="relative w-full overflow-visible"
        style={{ height: `${484 * canvasScale}px` }}
        aria-label="Bijiakbar visual"
        data-node-id="2:14"
      >
        <div
          className="absolute left-[-23px] top-0 h-[484px] w-[1422px]"
          style={{ transform: `scale(${canvasScale})`, transformOrigin: 'top left' }}
          data-node-id="9:167"
        >
          <div
            className="absolute left-[23px] top-0 h-[516px] w-[1399px] overflow-hidden opacity-[0.66] backdrop-blur-[2px]"
            data-node-id="8:166"
          >
            <img
              src={backgroundImage}
              alt=""
              className="absolute left-[-2.07%] top-0 h-full w-[104.5%] max-w-none"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          <div
            className="absolute left-[57px] top-[304px] w-[364px] font-bytesized text-[64px] leading-[40px] tracking-[-0.02em] text-[#e6eb52]"
            data-node-id="23:3"
          >
            <p className="m-0">Lorem Ipsum</p>
            <p className="m-0">Dolor Sit Amet</p>
          </div>

          <div
            className="absolute left-[1042px] top-[142px] w-[364px] font-bytesized text-[64px] leading-[40px] tracking-[-0.02em] text-[#e6eb52]"
            data-node-id="26:7"
          >
            <p className="m-0">Lorem Ipsum</p>
            <p className="m-0">Dolor Sit Amet</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DiscbotDashboard
