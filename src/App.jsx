import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  Clock3,
  CupSoda,
  Dessert,
  Camera,
  Leaf,
  MapPin,
  MoonStar,
  PhoneCall,
  Sparkles,
  Users,
  Utensils,
} from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Signature Menu' },
  { href: '#experience', label: 'Experience' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
]

const stats = [
  { value: '6K+', label: 'Happy Customers' },
  { value: '50+', label: 'Signature Dishes' },
  { value: 'Open till 2 AM', label: 'Every Day' },
]

const menuItems = [
  {
    name: 'Chocolate Churros',
    description: 'Crisp golden churros dusted with cinnamon and warm chocolate dip.',
    price: '₹295',
    image:
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cheese Fondue',
    description: 'Silky molten cheese served with artisan bread and roasted vegetables.',
    price: '₹460',
    image:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Crispy Lotus Root',
    description: 'Thin-cut lotus root tossed in aromatic spices and sea salt flakes.',
    price: '₹280',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Hot Chocolate',
    description: 'Velvety dark cocoa with hand-whipped cream and cocoa nibs.',
    price: '₹240',
    image:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Pasta & Sizzlers',
    description: 'Comfort pasta and sizzling platters designed for sharing moments.',
    price: '₹520',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
  },
]

const experiences = [
  {
    title: 'Cozy Ambience',
    text: 'Soft lights, warm wood, and curated music crafted for calm conversations.',
    icon: Sparkles,
  },
  {
    title: 'Perfect for Hangouts',
    text: 'Comfortable seating and sharing plates that make every meetup effortless.',
    icon: Users,
  },
  {
    title: 'Late Night Café',
    text: 'Open till 2 AM for post-work cravings and unhurried midnight tea rituals.',
    icon: MoonStar,
  },
  {
    title: 'Vegetarian Friendly',
    text: 'Thoughtfully curated vegetarian specials with global café inspirations.',
    icon: Leaf,
  },
  {
    title: 'Premium Desserts',
    text: 'From churros to indulgent chocolate creations, every bite feels special.',
    icon: Dessert,
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80',
]

const sectionAnim = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: 'easeOut' },
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#F8F5F0] text-[#1F3A32]">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F5F0]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="loader-ring" aria-label="Loading" />
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-[#1F3A32]/70 py-3 shadow-xl backdrop-blur-xl' : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 text-sm md:px-8">
          <a href="#home" className="font-display text-xl text-[#F8F5F0]">
            Tea Villa Cafe
          </a>
          <div className="hidden items-center gap-6 text-[#F8F5F0]/90 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#C9A86A] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-28 md:px-8"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1920&q=80"
            alt="Tea Villa Cafe ambience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F3A32]/72 via-[#1F3A32]/55 to-[#1F3A32]/70" />
        </motion.div>

        <div className="pointer-events-none absolute -left-16 top-24 h-52 w-52 rounded-full bg-[#C9A86A]/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-16 right-4 h-44 w-44 rounded-full bg-[#7B4F2A]/30 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative mx-auto w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-7 text-center text-[#F8F5F0] shadow-2xl backdrop-blur-xl md:p-12"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A86A]/60 bg-[#C9A86A]/15 px-4 py-1 text-xs uppercase tracking-[0.28em]">
            <CupSoda size={14} /> Premium Tea Lounge
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Brewed for Conversations</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-[#F8F5F0]/90 md:text-lg">
            A cozy destination for handcrafted teas, desserts, and unforgettable café moments.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#menu"
              className="rounded-full bg-[#C9A86A] px-7 py-3 text-sm font-medium text-[#1F3A32] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-[#F8F5F0]/70 bg-transparent px-7 py-3 text-sm font-medium text-[#F8F5F0] transition hover:bg-[#F8F5F0]/15"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-8">
        <motion.section id="about" {...sectionAnim} className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80"
              alt="Friends enjoying tea at cafe"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.26em] text-[#7B4F2A]">About Tea Villa Cafe</p>
            <h2 className="font-display mt-3 text-3xl leading-tight md:text-5xl">Your everyday escape in Chennai</h2>
            <p className="mt-5 text-[#1F3A32]/80">
              Tea Villa Cafe is designed for meaningful pauses—whether it is work sessions over artisanal tea,
              dessert dates, or long late-night conversations with friends. Every corner is crafted to feel warm,
              calm, and thoughtfully premium.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#1F3A32]/10 bg-white p-4 shadow-sm">
                  <p className="font-display text-xl text-[#1F3A32]">{stat.value}</p>
                  <p className="mt-1 text-xs text-[#1F3A32]/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="menu" {...sectionAnim} className="py-14 md:py-20">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.26em] text-[#7B4F2A]">Signature Menu</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Crafted with comfort and character</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <motion.article
                key={item.name}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-[#1F3A32]/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-2xl text-[#1F3A32]">{item.name}</h3>
                  <p className="text-sm text-[#1F3A32]/75">{item.description}</p>
                  <p className="pt-2 text-sm font-semibold tracking-widest text-[#7B4F2A]">{item.price}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>

      <motion.section
        id="experience"
        {...sectionAnim}
        className="bg-[#1F3A32] px-4 py-14 text-[#F8F5F0] md:px-8 md:py-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C9A86A]">The Experience</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Moments curated beyond the menu</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-3xl border border-[#F8F5F0]/12 bg-white/5 p-5">
                  <div className="mb-4 inline-flex rounded-2xl border border-[#C9A86A]/50 bg-[#C9A86A]/15 p-3 shadow-[0_0_24px_rgba(201,168,106,0.35)]">
                    <Icon size={18} className="text-[#C9A86A]" />
                  </div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#F8F5F0]/80">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </motion.section>

      <main className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
        <motion.section id="gallery" {...sectionAnim}>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.26em] text-[#7B4F2A]">Gallery</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Aesthetic café frames</h2>
          </div>
          <div className="gallery-masonry mt-10">
            {galleryImages.map((image, index) => (
              <div key={image} className="mb-4 overflow-hidden rounded-3xl">
                <img
                  src={image}
                  alt={`Tea Villa gallery ${index + 1}`}
                  className="w-full transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="visit" {...sectionAnim} className="grid gap-8 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-[#7B4F2A]">Visit Us</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Find your table at Tea Villa Cafe</h2>
            <div className="mt-6 space-y-4 text-[#1F3A32]/85">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-[#7B4F2A]" size={18} />
                <span>
                  Old No 52/2, New No 40/2,
                  <br />
                  Thirumalai Pillai Rd,
                  <br />
                  T. Nagar, Chennai 600017
                </span>
              </p>
              <p className="flex items-center gap-3">
                <PhoneCall className="text-[#7B4F2A]" size={18} /> 094440 56991
              </p>
              <p className="flex items-center gap-3">
                <Clock3 className="text-[#7B4F2A]" size={18} /> Open till 2 AM
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Tea+Villa+Cafe+T+Nagar+Chennai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#1F3A32] px-6 py-3 text-sm font-medium text-[#F8F5F0] transition hover:bg-[#27483d]"
              >
                Get Directions
              </a>
              <a
                href="tel:09444056991"
                className="rounded-full border border-[#1F3A32] bg-transparent px-6 py-3 text-sm font-medium text-[#1F3A32] transition hover:bg-[#1F3A32]/10"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#1F3A32]/10 bg-white p-2 shadow-lg">
            <iframe
              title="Tea Villa Cafe location"
              src="https://www.google.com/maps?q=Tea+Villa+Cafe+T+Nagar+Chennai&output=embed"
              className="h-[340px] w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#1F3A32] px-4 py-10 text-[#F8F5F0] md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-t border-[#F8F5F0]/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">Tea Villa Cafe</p>
            <p className="mt-2 text-sm text-[#F8F5F0]/75">Brewed for conversations, made for memories.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-[#F8F5F0]/85">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#C9A86A] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
              <Camera size={16} />
            </a>
            <a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="social-pill">
              <Utensils size={16} />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 w-full max-w-6xl text-xs text-[#F8F5F0]/65">
          © {new Date().getFullYear()} Tea Villa Cafe. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
