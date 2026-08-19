const TAG_LABEL = { new: 'New', sale: 'Sale' }

export default function ProductCard({ product }) {
  const { name, price, image, tags = [] } = product

  return (
    <div className="group">
      <div className="relative overflow-hidden bg-bone2">
        {tags.length > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-ink text-bone text-[10px] font-semibold uppercase tracking-widest2 px-2.5 py-1">
            {TAG_LABEL[tags[0]]}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-[380px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-display italic text-lg text-ink">{name}</h3>
        <span className="text-sm text-taupe">${price}</span>
      </div>
    </div>
  )
}