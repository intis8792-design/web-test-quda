import Header from '../../components/Header'

function ServerMinecraft() {
  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      <Header />

      <h1 className="m-0 px-8 pt-10 pb-8 font-silkscreen text-[56px] leading-[1.1] tracking-[-0.02em] text-[#e6eb52] max-[700px]:px-4 max-[700px]:text-[36px]">
        SERVER MINECRAFT
      </h1>

      <main className="px-8 pb-16 max-[700px]:px-4">
        <p className="m-0 mb-10 max-w-2xl text-[14px] leading-[1.6] text-[rgba(241,238,238,0.65)]">
          Informasi server Minecraft pribadi. Detail server akan ditambahkan segera.
        </p>

        <div className="flex flex-col gap-2 text-[13px] leading-[1.4]">
          <div className="flex gap-3">
            <span className="w-[140px] shrink-0 text-[rgba(241,238,238,0.50)]">// server address</span>
            <span className="text-[#e6eb52]">segera hadir</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[140px] shrink-0 text-[rgba(241,238,238,0.50)]">// version</span>
            <span className="text-[#e6eb52]">—</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[140px] shrink-0 text-[rgba(241,238,238,0.50)]">// gamemode</span>
            <span className="text-[#e6eb52]">—</span>
          </div>
          <div className="flex gap-3">
            <span className="w-[140px] shrink-0 text-[rgba(241,238,238,0.50)]">// status</span>
            <span className="text-[#e6eb52]">offline</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ServerMinecraft