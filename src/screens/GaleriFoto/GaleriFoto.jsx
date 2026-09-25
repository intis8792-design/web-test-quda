import Header from '../../components/Header'
import img10 from '../../assets/v2-assets/IMG_0140_46e8d3.jpg'
import img11 from '../../assets/v2-assets/IMG_0099_5a1ade.jpg'
import img12 from '../../assets/v2-assets/IMG_0100_cef3c6.jpg'
import img13 from '../../assets/v2-assets/IMG_0103_3ccbc9.jpg'
import img14 from '../../assets/v2-assets/IMG_0146_649f90.jpg'
import img15 from '../../assets/v2-assets/IMG_0112_982cb7.jpg'
import img16 from '../../assets/v2-assets/IMG_0111_bd5b32.jpg'

/* Bento Grid — 9 foto dari galeriquda.carrd.co */
const BASE = 'https://galeriquda.carrd.co/assets/images/gallery02'

const photos = [
  { id: '01', src: `${BASE}/8b8f724a.jpg?v=c919e3fa`, full: `${BASE}/8b8f724a_original.jpg?v=c919e3fa`, title: 'Pantai Parangtritis', span: 'col-span-2 row-span-2' },
  { id: '02', src: `${BASE}/c8070441.jpg?v=c919e3fa`, full: `${BASE}/c8070441_original.jpg?v=c919e3fa`, title: 'Pemandangan Sawah', span: '' },
  { id: '03', src: `${BASE}/30eb9ffb.jpg?v=c919e3fa`, full: `${BASE}/30eb9ffb_original.jpg?v=c919e3fa`, title: 'Sawah di Bibis', span: '' },
  { id: '04', src: `${BASE}/aec65cb6.jpg?v=c919e3fa`, full: `${BASE}/aec65cb6_original.jpg?v=c919e3fa`, title: 'Passiflora Foetida', span: 'row-span-2' },
  { id: '05', src: `${BASE}/66a06070.jpg?v=c919e3fa`, full: `${BASE}/66a06070_original.jpg?v=c919e3fa`, title: 'Felis Catus', span: 'col-span-2' },
  { id: '06', src: `${BASE}/0aa34262.jpg?v=c919e3fa`, full: `${BASE}/0aa34262_original.jpg?v=c919e3fa`, title: 'Rembulan bersembunyi di balik ufuk senja', span: '' },
  { id: '07', src: `${BASE}/3be52d5d.jpg?v=c919e3fa`, full: `${BASE}/3be52d5d_original.jpg?v=c919e3fa`, title: 'Morning Glory', span: '' },
  { id: '08', src: `${BASE}/e578c9a3.jpg?v=c919e3fa`, full: `${BASE}/e578c9a3_original.jpg?v=c919e3fa`, title: 'Zinnia', span: '' },
  { id: '09', src: `${BASE}/b29ec431.jpg?v=c919e3fa`, full: `${BASE}/b29ec431_original.jpg?v=c919e3fa`, title: 'Mutiara Hotel — Malioboro', span: 'col-span-2' },
  { id: '10', src: img10, full: img10, title: 'Foto 10', span: 'col-span-2' },
  { id: '11', src: img11, full: img11, title: 'Foto 11', span: '' },
  { id: '12', src: img12, full: img12, title: 'Foto 12', span: '' },
  { id: '13', src: img13, full: img13, title: 'Foto 13', span: '' },
  { id: '14', src: img14, full: img14, title: 'Foto 14', span: 'col-span-2' },
  { id: '15', src: img15, full: img15, title: 'Foto 15', span: '' },
  { id: '16', src: img16, full: img16, title: 'Foto 16', span: '' },
]

function GaleriFoto() {
  return (
    <div className="min-h-screen w-full bg-[#201d1d] font-mono text-[#f1eeee]">
      <Header />

      <h1 className="m-0 px-8 pt-10 pb-4 font-silkscreen text-[56px] leading-[1.1] tracking-[-0.02em] text-[#e6eb52] max-[700px]:px-4 max-[700px]:text-[36px]">
        GALERI FOTO
      </h1>

      <main className="px-8 pb-16 max-[700px]:px-4">
        <p className="m-0 mb-10 max-w-2xl text-[14px] leading-[1.6] text-[rgba(241,238,238,0.65)]">
          Galeri foto amatir — hasil jepretan menggunakan ponsel. Mungkin selanjutnya akan menggunakan kamera.
        </p>

        {/* Bento Grid — 4 kolom, sel modular bervariasi */}
        <div className="grid grid-cols-4 gap-3 max-[700px]:grid-cols-2">
          {photos.map((photo) => (
            <a
              key={photo.id}
              href={photo.full}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Caption overlay — muncul saat hover */}
              <div className="absolute inset-x-0 bottom-0 bg-[rgba(32,29,29,0.75)] px-3 py-2 opacity-100 group-hover:opacity-100">
                <span className="block text-[11px] text-[rgba(241,238,238,0.50)]">
                  // {photo.id}
                </span>
                <span className="block text-[13px] text-[#f1eeee]">
                  {photo.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default GaleriFoto