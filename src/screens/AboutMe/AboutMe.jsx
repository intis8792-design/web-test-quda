import Header from '../../components/Header'
import backgroundImage from '../../assets/v2-assets/sapi-dithered.png'
import imgBlue from '../../assets/v2-assets/sapi-dithered-blue.png'
import imgRed from '../../assets/v2-assets/sapi-dithered-red.png'

const sections = [
  {
    id: 'about-bio',
    sublabel: '// SECTION 01 — BIO',
    heading: 'Lorem Ipsum Dolor Sit Amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: backgroundImage,
  },
  {
    id: 'about-skills',
    sublabel: '// SECTION 02 — SKILLS',
    heading: 'Consectetur Adipiscing Elit',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.',
    img: imgBlue,
  },
  {
    id: 'about-experience',
    sublabel: '// SECTION 03 — EXPERIENCE',
    heading: 'Sed Do Eiusmod Tempor',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi.',
    img: imgRed,
  },
]

function AboutMe() {
  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      <Header />
      <main className="px-8 pt-10 pb-16 max-[700px]:px-4">
      {/* Top hero headline — Bytesized, satu per halaman */}
      <h1 className="m-0 mb-16 font-bytesized text-[64px] leading-[1.1] tracking-[-0.02em] text-[#e6eb52] max-[700px]:text-[40px]">
        ABOUT ME
      </h1>

      {/* Section alternating: ganjil (idx 0,2) = teks kiri/gambar kanan; genap (idx 1) = gambar kiri/teks kanan */}
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

export default AboutMe