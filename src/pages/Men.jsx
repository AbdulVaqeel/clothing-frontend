import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'

export default function Men() {
  const menProducts = products.filter((p) => p.category === 'men')

  return (
    <>
      <PageHeader
        eyebrow="Menswear"
        title="Tailoring, reconsidered"
        description="Structured outerwear, relaxed knitwear, and trousers cut to move."
        image="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <ProductGrid products={menProducts} />
      </section>
    </>
  )
}