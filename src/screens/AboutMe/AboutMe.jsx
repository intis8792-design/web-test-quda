import { useState } from 'react'
import Header from '../../components/Header'

const panels = [
  { id: 'overview', label: '// 01. Overview & Bio' },
  { id: 'skills', label: '// 02. Technical Skills' },
  { id: 'experience', label: '// 03. Experience Log' },
  { id: 'specs', label: '// 04. System Specs / Setup' },
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

function KeyLine({ k, v, lime }) {
  return (
    <p className="m-0 mb-2 text-[14px] leading-[1.6]">
      <span className="text-[rgba(241,238,238,0.65)]">{`${k}          `.slice(0, 12)}:</span>{' '}
      <span className={lime ? 'text-[#e6eb52]' : 'text-[#f1eeee]'}>{v}</span>
    </p>
  )
}

function OverviewPanel() {
  return (
    <div>
      <PanelTitle>Overview & Bio</PanelTitle>
      <KeyLine k="STATUS" v="ACTIVE / AVAILABLE FOR PROJECTS" lime />
      <KeyLine k="ROLE" v="Fullstack Developer / UI Designer" />
      <KeyLine k="LOCATION" v="Indonesia" />
      <KeyLine k="MAIN STACK" v="React, Tailwind CSS, Node.js" />
      <p className="mt-6 mb-0 max-w-2xl bg-[rgba(241,238,238,0.05)] py-3 pl-4 pr-3 text-[14px] leading-[1.6] text-[rgba(241,238,238,0.65)]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua — dibangun satu baris pada satu waktu, diverifikasi tiap
        langkah.
      </p>
    </div>
  )
}

function pad(s, n) {
  return (s + ' '.repeat(n)).slice(0, n)
}

function SkillsPanel() {
  const rows = [
    ['Frontend', 'React, Next.js, Tailwind CSS', 'ADVANCED'],
    ['Backend', 'Node.js, Express, PostgreSQL', 'INTERMEDIATE'],
    ['Tools', 'Git, Docker, Linux CLI', 'ADVANCED'],
  ]
  return (
    <div>
      <PanelTitle>Technical Skills</PanelTitle>
      <div className="text-[14px] leading-[1.8]">
        <p className="m-0 text-[rgba(241,238,238,0.65)]">
          {`${pad('CATEGORY', 12)}| ${pad('TECHNOLOGIES', 32)}| LEVEL`}
        </p>
        {rows.map(([cat, tech, level]) => (
          <p key={cat} className="m-0">
            <span className="text-[#f1eeee]">{`${pad(cat, 12)}| ${pad(tech, 32)}| `}</span>
            <span className="text-[#e6eb52]">{level}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

function ExperiencePanel() {
  const logs = [
    ['2024', 'Fullstack Developer', 'Qudarebus Landing'],
    ['2023', 'UI Designer', 'Discord Bot Dashboard'],
    ['2022', 'Hobbyist', 'Ayamlaut Bot Experiment'],
  ]
  return (
    <div>
      <PanelTitle>Experience Log</PanelTitle>
      {logs.map(([year, role, place]) => (
        <p key={year} className="m-0 mb-2 text-[14px] leading-[1.6]">
          <span className="text-[#e6eb52]">{`[${year}]`}</span>
          <span className="text-[rgba(241,238,238,0.65)]">{' — '}</span>
          <span className="text-[#f1eeee]">{`${role} @ ${place}`}</span>
          <span className="text-[rgba(241,238,238,0.65)]">{' — log entry placeholder.'}</span>
        </p>
      ))}
    </div>
  )
}

function SpecsPanel() {
  return (
    <div>
      <PanelTitle>System Specs / Setup</PanelTitle>
      <KeyLine k="OS" v="Windows 11" />
      <KeyLine k="EDITOR" v="VS Code + Hermes Agent" />
      <KeyLine k="RUNTIME" v="Node.js 22 / npm" />
      <KeyLine k="TERMINAL" v="Git-Bash / PowerShell" />
      <KeyLine k="THEME" v="Qudarebus CLI (#201d1d / #f1eeee / #e6eb52)" lime />
    </div>
  )
}

const panelContent = {
  overview: OverviewPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  specs: SpecsPanel,
}

function AboutMe() {
  const [active, setActive] = useState('overview')
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
