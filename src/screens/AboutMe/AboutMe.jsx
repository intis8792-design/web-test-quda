import { useState } from 'react'
import Header from '../../components/Header'

const panels = [
  { id: 'interest', label: '// 01. Interest' },
  { id: 'dni', label: "// 02. DNI's" },
]

// Full literal tokens so Tailwind JIT definitely generates them
const SUB_IDLE = 'bg-transparent text-[#f1eeee]'
const SUB_ACTIVE = 'bg-[#f1eeee] text-[#201d1d]'

const subItemBase =
  'block w-full whitespace-nowrap border-0 px-2 py-[6px] text-left text-[13px] hover:bg-[#f1eeee] hover:text-[#201d1d]'

function PanelTitle({ children }) {
  return (
    <h2 className="m-0 mb-6 inline-block border-b border-dashed border-[rgba(241,238,238,0.35)] pb-2 text-[20px] font-medium text-[#e6eb52]">
      {children}
    </h2>
  )
}

const music = [
  'Kino',
  'The Lantis',
  'Frank Sinatra',
  'Indonesia 6',
  'Other kind of city pop / musik pop kreatif',
  'Some classical music',
]

function InterestPanel() {
  return (
    <div>
      <PanelTitle>Interest Section</PanelTitle>
      <p className="m-0 max-w-2xl text-[14px] leading-[1.6] text-[#f1eeee]">
        I play some gachaslop like hoyo games (Genshin, Zenless, Honkai Star Rail), WuWa,
        AKEndfield, and other games in general including minecraft, KCD, and roblox.
      </p>
      <h3 className="m-0 mt-8 mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#e6eb52]">
        // Music — favorite artists & genres
      </h3>
      {music.map((m) => (
        <p key={m} className="m-0 mb-2 text-[14px] leading-[1.6]">
          <span className="text-[#e6eb52]">- </span>
          <span className="text-[#f1eeee]">{m}</span>
        </p>
      ))}
    </div>
  )
}

function DniPanel() {
  const items = [
    'fit the DNI criteria (such as queerphobes, racist, ableist, religionphobic, and also zionist)',
    'Pedophilia',
    'Under 18 years',
  ]
  return (
    <div>
      <PanelTitle>Do Not Interact !!</PanelTitle>
      {items.map((t) => (
        <p key={t} className="m-0 mb-2 text-[14px] leading-[1.6]">
          <span className="text-[#e6eb52]">- </span>
          <span className="text-[#f1eeee]">{t}</span>
        </p>
      ))}
    </div>
  )
}

const panelContent = {
  interest: InterestPanel,
  dni: DniPanel,
}

function AboutMe() {
  const [active, setActive] = useState('interest')
  const ActivePanel = panelContent[active]

  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      <Header />

      {/* Splash header — Silkscreen */}
      <h1 className="m-0 px-8 pt-10 pb-8 font-silkscreen text-[56px] leading-[1.1] tracking-[-0.02em] text-[#e6eb52] max-[700px]:px-4 max-[700px]:text-[36px]">
        ABOUT ME
      </h1>

      {/* Console layout: sidebar sub-panel kiri + main panel kanan */}
      <main className="flex gap-8 px-8 pb-16 max-[700px]:flex-col max-[700px]:px-4">
        <aside className="w-[230px] shrink-0" aria-label="Panel navigation">
          {panels.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              aria-pressed={active === p.id}
              className={`${subItemBase} ${active === p.id ? SUB_ACTIVE : SUB_IDLE}`}
            >
              {p.label}
            </button>
          ))}
        </aside>

        <section className="min-w-0 flex-1">
          <ActivePanel />
        </section>
      </main>
    </div>
  )
}

export default AboutMe
