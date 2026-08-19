import { useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — this just confirms the form works on the front end.
    // Wire this up to a real API call once the backend exists.
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact us"
        description="Questions about an order, a fitting, or anything else — we'd love to hear from you."
      />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Contact details */}
          <div className="md:w-1/3">
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-taupe mb-5">
              Reach us directly
            </p>
            <ul className="space-y-4 text-ink/80 text-sm">
              <li>
                <a href="mailto:elvoclothing99@gmail.com" className="hover:text-ink transition-colors">
                  elvo4949@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919790890797" className="hover:text-ink transition-colors">
                  +91 9790890797
                </a>
              </li>
              <li className="text-ink/60">No 114, Yelankha, Banglore - 560063</li>
            </ul>
          </div>

          {/* Form */}
          <div className="md:w-2/3">
            {submitted ? (
              <p className="text-ink/80 text-sm">
                Thanks — your message has been noted. We'll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-semibold uppercase tracking-widest2 text-taupe mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-b border-ink/20 bg-transparent py-2.5 text-sm text-ink outline-none focus:border-oxblood transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-widest2 text-taupe mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b border-ink/20 bg-transparent py-2.5 text-sm text-ink outline-none focus:border-oxblood transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-widest2 text-taupe mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border-b border-ink/20 bg-transparent py-2.5 text-sm text-ink outline-none focus:border-oxblood transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center border border-ink px-8 py-3.5 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-300 hover:bg-ink hover:text-bone"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}