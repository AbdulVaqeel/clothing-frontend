import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'

export default function Women() {
  const womenProducts = products.filter((p) => p.category === 'women')

  return (
    <>
      <PageHeader
        eyebrow="Womenswear"
        title="Effortless, always"
        description="Fluid silhouettes and refined layers designed for everyday intention."
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <ProductGrid products={womenProducts} />
      </section>
    </>
  )
}