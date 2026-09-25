import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import backgroundImage from '../../assets/v2-assets/sapi-dithered.png'
import imgBlue from '../../assets/v2-assets/sapi-dithered-blue.png'
import imgRed from '../../assets/v2-assets/sapi-dithered-red.png'
import imgYellow from '../../assets/v2-assets/sapi-dithered-yellowchrome.png'
import imgGreen from '../../assets/v2-assets/sapi-dithered-green.png'

const sections = [
  {
    id: 'button1',
    label: 'About Me',
    sublabel: '// SECTION 01',
    heading: 'About Me',
    body: 'Maybe not minor friendly, and posts about random things, but mainly posts about video games. I also repost some memes and shitpost.',
    img: imgBlue,
  },
  {
    id: 'button2',
    label: 'Button2',
    sublabel: '// SECTION 02',
    heading: 'Interest',
    body: 'I play Minecraft and other games, for detail, see About me tab on the nav bar above. The other interest are musics, animanga, photography.',
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
    id: 'section5',
    sublabel: '// SECTION 04',
    heading: 'Tumbuh satu langkah lebih dekat',
    body: 'Kemajuan tidak selalu datang dengan perubahan besar. Kadang ia hadir sebagai satu keputusan kecil yang berani dibuat, satu percobaan yang dijalankan, dan satu langkah yang membuat jalan berikutnya menjadi lebih jelas.',
    img: imgGreen,
  },
]

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
      <Header />

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
            <section key={s.id} id={s.id} className="mx-auto mb-20 max-w-6xl max-[700px]:mb-12">
              <div className="flex items-center gap-[32px] max-[700px]:flex-col">
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
