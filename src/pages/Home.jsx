import Hero from '../components/Hero'
import CollectionSection from '../components/CollectionSection'

export default function Home() {
  return (
    <>
      <Hero />

      <CollectionSection
        eyebrow="For Men"
        title="Tailoring, reconsidered"
        copy="Structured outerwear, relaxed knitwear, and trousers cut to move — a modern wardrobe built on quiet precision."
        image="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Man wearing a tailored neutral-toned coat and trousers"
        to="/men"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="hairline opacity-60" />
      </div>

      <CollectionSection
        eyebrow="For Women"
        title="Effortless, always"
        copy="Fluid silhouettes and refined layers designed for the woman who dresses with intention, not occasion."
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Woman wearing a minimal tailored dress in a studio setting"
        to="/women"
        reverse
      />
    </>
  )
}