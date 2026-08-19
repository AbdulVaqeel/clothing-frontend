import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'

export default function NewArrivals() {
  const newProducts = products.filter((p) => p.tags.includes('new'))

  return (
    <>
      <PageHeader
        eyebrow="Just In"
        title="New arrivals"
        description="The latest pieces to enter the collection, for men and women."
        image="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <ProductGrid products={newProducts} />
      </section>
    </>
  )
}