export default function PageHeader({ eyebrow, title, description, image }) {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden mt-[76px]">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/55" />
        </>
      )}
      <div
        className={`relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-center ${
          image ? 'text-bone' : 'text-ink'
        }`}
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest2 mb-4 opacity-80">
          {eyebrow}
        </p>
        <h1 className="font-display italic font-medium text-4xl md:text-6xl leading-tight max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-md text-sm md:text-[15px] leading-relaxed opacity-80">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}