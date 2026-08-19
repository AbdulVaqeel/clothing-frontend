import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'

export default function Sale() {
  const saleProducts = products.filter((p) => p.tags.includes('sale'))

  return (
    <>
      <PageHeader
        eyebrow="Limited Time"
        title="Sale"
        description="Considered pieces at reduced prices, while they last."
        image="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <ProductGrid products={saleProducts} />
      </section>
    </>
  )
}