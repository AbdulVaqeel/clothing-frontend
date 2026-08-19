// export default function CollectionSection({
//   id,
//   eyebrow,
//   title,
//   copy,
//   image,
//   imageAlt,
//   reverse = false,
// }) {
//   return (
//     <section id={id} className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 md:py-10">
//       <div
//         className={`flex flex-col ${
//           reverse ? 'md:flex-row-reverse' : 'md:flex-row'
//         } items-stretch gap-10 md:gap-16`}
//       >
//         {/* Image */}
//         <div className="md:w-1/2 overflow-hidden group">
//           <img
//             src={image}
//             alt={imageAlt}
//             className="w-full h-[460px] md:h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
//           />
//         </div>

//         {/* Copy */}
//         <div className="md:w-1/2 flex flex-col justify-center">
//           <p className="text-taupe text-[11px] font-semibold uppercase tracking-widest2 mb-4">
//             {eyebrow}
//           </p>
//           <h2 className="font-display italic font-medium text-ink text-4xl md:text-5xl leading-tight mb-6">
//             {title}
//           </h2>
//           <div className="hairline w-16 mb-6 opacity-80" />
//           <p className="text-ink/70 leading-relaxed max-w-sm mb-9">{copy}</p>
//           <a
//             href="#"
//             className="inline-flex w-fit items-center border border-ink px-8 py-3.5 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-300 hover:bg-ink hover:text-bone"
//           >
//             Shop Now
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Link } from 'react-router-dom'

export default function CollectionSection({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  to,
  reverse = false,
}) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 md:py-10">
      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-stretch gap-10 md:gap-16`}
      >
        {/* Image */}
        <div className="md:w-1/2 overflow-hidden group">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[460px] md:h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        {/* Copy */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-taupe text-[11px] font-semibold uppercase tracking-widest2 mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display italic font-medium text-ink text-4xl md:text-5xl leading-tight mb-6">
            {title}
          </h2>
          <div className="hairline w-16 mb-6 opacity-80" />
          <p className="text-ink/70 leading-relaxed max-w-sm mb-9">{copy}</p>
          <Link
            to={to}
            className="inline-flex w-fit items-center border border-ink px-8 py-3.5 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-300 hover:bg-ink hover:text-bone"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}