// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import CollectionSection from './components/CollectionSection'
// import Footer from './components/Footer'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-bone">
//       <Navbar />
//       <Hero />

//       <CollectionSection
//         id="men"
//         eyebrow="For Men"
//         title="Tailoring, reconsidered"
//         copy="Structured outerwear, relaxed knitwear, and trousers cut to move — a modern wardrobe built on quiet precision."
//         image="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80"
//         imageAlt="Man wearing a tailored neutral-toned coat and trousers"
//       />

//       <div className="max-w-[1400px] mx-auto px-6 md:px-10">
//         <div className="hairline opacity-60" />
//       </div>

//       <CollectionSection
//         id="women"
//         eyebrow="For Women"
//         title="Effortless, always"
//         copy="Fluid silhouettes and refined layers designed for the woman who dresses with intention, not occasion."
//         image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
//         imageAlt="Woman wearing a minimal tailored dress in a studio setting"
//         reverse
//       />

//       <Footer />
//     </div>
//   )
// }


import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import NewArrivals from './pages/NewArrivals'
import Sale from './pages/Sale'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}