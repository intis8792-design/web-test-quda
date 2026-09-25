import Header from '../../components/Header'

function GaleriFoto() {
  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      <Header />

      <h1 className="m-0 px-8 pt-10 pb-8 font-silkscreen text-[56px] leading-[1.1] tracking-[-0.02em] text-[#e6eb52] max-[700px]:px-4 max-[700px]:text-[36px]">
        GALERI FOTO
      </h1>

      <main className="px-8 pb-16 max-[700px]:px-4">
        <p className="m-0 mb-10 max-w-2xl text-[14px] leading-[1.6] text-[rgba(241,238,238,0.65)]">
          Koleksi foto pribadi dan hasil jepretan sehari-hari. Foto akan ditambahkan secara bertahap.
        </p>

        {/* Grid foto — placeholder, siap diisi */}
        <div className="grid grid-cols-3 gap-4 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center border border-dashed border-[rgba(241,238,238,0.35)] text-[13px] text-[rgba(241,238,238,0.35)]"
            >
              foto {String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default GaleriFoto