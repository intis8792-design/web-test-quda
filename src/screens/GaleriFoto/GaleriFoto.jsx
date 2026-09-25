import Header from '../../components/Header'

/* Bento Grid — foto utama 2×2, foto medium, foto kecil */
const bentoItems = [
  { id: '01', span: 'col-span-2 row-span-2', label: 'foto utama' },
  { id: '02', span: '', label: '' },
  { id: '03', span: '', label: '' },
  { id: '04', span: 'row-span-2', label: '' },
  { id: '05', span: 'col-span-2', label: '' },
  { id: '06', span: '', label: '' },
  { id: '07', span: '', label: '' },
  { id: '08', span: '', label: '' },
  { id: '09', span: 'col-span-2', label: '' },
]

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

        {/* Bento Grid — 4 kolom, sel modular bervariasi */}
        <div className="grid grid-cols-4 gap-3 max-[700px]:grid-cols-2">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`flex min-h-[160px] flex-col items-center justify-center border border-dashed border-[rgba(241,238,238,0.35)] p-3 ${item.span}`}
            >
              <span className="text-[11px] text-[rgba(241,238,238,0.35)]">
                // {item.id}
              </span>
              {item.label && (
                <span className="mt-1 text-[13px] text-[rgba(241,238,238,0.35)]">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default GaleriFoto