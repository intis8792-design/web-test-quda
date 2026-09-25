import Header from '../../components/Header'

function PanelTitle({ children }) {
  return (
    <h2 className="m-0 mb-6 inline-block border-b border-dashed border-[rgba(241,238,238,0.35)] pb-2 text-[20px] font-medium text-[#e6eb52]">
      {children}
    </h2>
  )
}

// Intro & Interest sudah DIPINDAHKAN ke laman utama (Section 01 & 02) — halaman ini tinggal DNI.
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

function AboutMe() {
  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      <Header />

      {/* Splash header — Silkscreen */}
      <h1 className="m-0 px-8 pt-10 pb-8 font-silkscreen text-[56px] leading-[1.1] tracking-[-0.02em] text-[#e6eb52] max-[700px]:px-4 max-[700px]:text-[36px]">
        ABOUT ME
      </h1>

      <main className="px-8 pb-16 max-[700px]:px-4">
        <DniPanel />
      </main>
    </div>
  )
}

export default AboutMe
