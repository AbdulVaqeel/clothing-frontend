import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Full-bleed editorial image */}
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80"
        alt="Model wearing a tailored ÉTOFFE coat in a minimal studio setting"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/40" />

      {/* Hero copy */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-24">
        <p className="text-bone/80 text-[11px] font-semibold uppercase tracking-widest2 mb-5">
          For Men &amp; Women
        </p>
        <h1 className="font-display italic font-medium text-bone text-[13vw] leading-[0.95] md:text-[6.4vw] max-w-[16ch]">
          Where craft meets character
        </h1>
        <p className="mt-6 max-w-md text-bone/75 text-[15px] leading-relaxed">
          Considered silhouettes, honest materials, and tailoring built to outlast
          the season it was made for.
        </p>

        <div className="mt-9 flex items-center gap-5">
          <Link
            to="/men"
            className="inline-flex items-center border border-bone text-bone px-8 py-3.5 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-300 hover:bg-bone hover:text-ink"
          >
            Discover the Collection
          </Link>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 hairline opacity-70" />
    </section>
  )
}