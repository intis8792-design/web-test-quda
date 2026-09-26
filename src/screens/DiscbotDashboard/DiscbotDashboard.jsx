import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import backgroundImage from '../../assets/v2-assets/sapi-dithered-yellowchrome-hero.png'
import bodyImage from '../../assets/v2-assets/body-dithered.png'
import minecraftScenery from '../../assets/v2-assets/minecraft-scenery-dithered-section1.png'
import minecraftScenery4 from '../../assets/v2-assets/minecraft-scenery4-dithered.png'
import minecraftScenery5 from '../../assets/v2-assets/minecraft-scenery5-dithered.png'

const sections = [
  {
    id: 'button1',
    label: 'New Website',
    sublabel: '// SECTION 01',
    heading: 'A new place to share some information about me and my interest.',
    body: 'This website is a replacement to my carrd page',
    img: minecraftScenery,
  },
  {
    id: 'button2',
    label: 'About Me',
    sublabel: '// SECTION 02',
    heading: 'About Me',
    body: 'Maybe not minor friendly, speak in Indonesian and English, like to posts about random things, but mainly posts about video games. I also repost some memes and shitpost.',
    img: bodyImage,
  },
  {
    id: 'button3',
    label: 'Interest',
    sublabel: '// SECTION 03',
    heading: 'Interest',
    body: <>I play Minecraft and other games, for detail, see{' '}<Link to="/about-me" className="text-[#fffedb] underline">Additional Information</Link>{' '}tab on the nav bar above. The other interest are musics, animanga, photography.</>,
    img: minecraftScenery4,
  },
  {
    id: 'section5',
    sublabel: '// SECTION 04',
    heading: 'Disclaimer',
    body: 'Most of the code are not mine, a.k.a vibecoded, and for the image assets, I use minecraft png, and edited it using ibispaint and ditherit web, and some minecraft screenshot.',
    img: minecraftScenery5,
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
    <div className="min-h-screen w-full bg-[#303001] font-mono text-[#f1eeee]">
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
              <p className="m-0">Skibidi</p>
              <p className="m-0">Toilet</p>
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
                  <h2 className="m-0 mb-5 text-[20px] font-medium leading-[1.3] text-[#fffedb]">
                    {s.heading}
                  </h2>
                  <p className="m-0 max-w-xl text-[14px] leading-[1.55] text-[rgba(241,238,238,0.65)]">
                    {s.body}
                  </p>
                </div>
                <div className={`w-[45%] max-[700px]:w-full ${imageRight ? 'order-2' : 'order-1'}`}>
                  <img
                    src={s.img}
                    alt=""
                    className="w-full"
                    style={{ imageRendering: 'pixelated' }}
                  />
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
