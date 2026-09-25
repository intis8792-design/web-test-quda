import { useState } from 'react'
import Header from '../../components/Header'

const panels = [
  { id: 'intro', label: '// 01. Intro' },
  { id: 'dni', label: "// 02. DNI's" },
  { id: 'interest', label: '// 03. Interest' },
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

function IntroPanel() {
  return (
    <div>
      <PanelTitle>Intro</PanelTitle>
      <p className="m-0 mb-3 max-w-2xl text-[14px] leading-[1.6] text-[#f1eeee]">
        You can call me Qudarebus. Maybe not minor friendly (current moots okay, but feel free to
        bub), and posts about random things, but mainly posts about video games.
      </p>
      <p className="m-0 max-w-2xl text-[14px] leading-[1.6] text-[rgba(241,238,238,0.65)]">
        I also post my amateur photography things, and sometimes repost some memes and shitpost.
      </p>
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

function InterestPanel() {
  return (
    <div>
      <PanelTitle>Interest Section</PanelTitle>
      <p className="m-0 mb-3 max-w-2xl text-[14px] leading-[1.6] text-[#f1eeee]">
        I play some gachaslop like hoyo games (Genshin, Zenless, Honkai Star Rail), WuWa,
        AKEndfield, and other games in general including minecraft, KCD, and roblox.
      </p>
      <p className="m-0 max-w-2xl text-[14px] leading-[1.6] text-[rgba(241,238,238,0.65)]">
        The other interest are musics, animanga, photography.
      </p>
    </div>
  )
}

const panelContent = {
  intro: IntroPanel,
  dni: DniPanel,
  interest: InterestPanel,
}

function AboutMe() {
  const [active, setActive] = useState('intro')
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
