import Header from '../../components/Header'
import imgYellow from '../../assets/v2-assets/sapi-dithered-yellowchrome.png'
import imgBotCommands from '../../assets/v2-assets/bot-commands-preview.png'

const sections = [
  {
    id: 'bot-overview',
    sublabel: '// SECTION 01 — OVERVIEW',
    heading: 'Bot Discord Overview',
    body: 'This bot is a Discord bot that have some features, like flight tracking, minecraft seeds tracking for biome and structure(It may be inaccurate), no man sky ship seeds database, and some other features. This bot is still in development, and current usage is limited to private use. (DISCLAIMER) Well, the bot codes are vibecoded, that\'s why I use it for private use for now. When I actually learned how to code, I will rewrite the bot codes to be more efficient and clean, and maybe publish the bot for public use.',
    img: imgYellow,
  },
  {
    id: 'bot-commands',
    sublabel: '// SECTION 02 — COMMANDS',
    heading: 'Bot Discord Commands',
    body: '/flight <callsign> - Get flight information by callsign, /minecraft-seed <seed> - Get biome and structure information by seed,  /nms-ship-seed <seed> - Get ship information by seed, and other commands',
    img: imgBotCommands,
  },
  
]

function BotDiscord() {
  return (
    <div className="min-h-screen w-full bg-[#303001] font-mono text-[#f1eeee]">
      <Header />
      <main className="px-8 pt-10 pb-16 max-[700px]:px-4">
        {/* Top hero headline — Bytesized, satu per halaman */}
        <h1 className="m-0 mb-16 font-silkscreen text-[56px] leading-[1.1] tracking-[-0.02em] text-[#fffedb] max-[700px]:text-[36px]">
          BOT DISCORD
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
                  <h2 className="m-0 mb-5 text-[20px] font-medium leading-[1.3] text-[#fffedb]">
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

export default BotDiscord
