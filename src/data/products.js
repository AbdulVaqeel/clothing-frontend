// Placeholder catalogue. Replace with real API/database data once the
// backend exists — every page below reads from this single source.
const products = [
  {
    id: 'm-01',
    name: 'Wool Overcoat',
    price: 289,
    category: 'men',
    tags: ['new'],
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm-02',
    name: 'Merino Crewneck',
    price: 95,
    category: 'men',
    tags: ['sale'],
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm-03',
    name: 'Tailored Trousers',
    price: 145,
    category: 'men',
    tags: [],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm-04',
    name: 'Structured Shirt',
    price: 110,
    category: 'men',
    tags: ['new'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'w-01',
    name: 'Silk Wrap Dress',
    price: 210,
    category: 'women',
    tags: ['new'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'w-02',
    name: 'Tailored Blazer',
    price: 265,
    category: 'women',
    tags: [],
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'w-03',
    name: 'Cashmere Sweater',
    price: 175,
    category: 'women',
    tags: ['sale'],
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'w-04',
    name: 'Pleated Midi Skirt',
    price: 130,
    category: 'women',
    tags: ['sale'],
    image: 'https://plus.unsplash.com/premium_photo-1671379102281-7225f3d3d97d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default products