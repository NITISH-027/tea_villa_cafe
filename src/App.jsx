import { useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Clock3,
  CupSoda,
  Instagram,
  MapPin,
  Menu,
  MoonStar,
  PhoneCall,
  Sparkles,
  TreePalm,
  Utensils,
  X,
} from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#experience', label: 'Experience' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
]

const stats = [
  { value: '6K+', label: 'Reviews' },
  { value: 'Open Till 2 AM', label: 'Night Hours' },
  { value: 'Premium Vegetarian Café', label: 'Cuisine Style' },
  { value: 'Signature Tea Collection', label: 'Specialty' },
]

const menuCategories = [
  {
    key: 'breakfast',
    label: 'Breakfast',
    items: [
      { name: 'Croissants', price: '₹95', image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe5b?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Vegetable Oats', price: '₹175', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Oats Pancake', price: '₹175', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Indian Breakfast', price: '₹350', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80' },
      { name: 'American Breakfast', price: '₹375', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80' },
    ],
  },
  {
    key: 'tea',
    label: 'Tea Specials',
    items: [
      { name: 'Kashmiri Zafran', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80', tea: true },
      { name: 'Vanilla Chai', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80', tea: true },
      { name: 'Irani Chai', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80', tea: true },
      { name: 'Sulemani Tea', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80', tea: true },
      { name: 'Kashmiri Kahwa', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&q=80', tea: true },
      { name: 'Twings ‘N’ Berries', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=1200&q=80', tea: true },
    ],
  },
  {
    key: 'coffee',
    label: 'Coffee',
    items: [
      { name: 'Madras Filter Coffee', price: '₹125', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Affogato', price: '₹150', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Coffee De Irish', price: '₹175', image: 'https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Nutella Cappuccino', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hazelnut Cappuccino', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Mocaccino', price: 'Ask at Café', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80' },
    ],
  },
  {
    key: 'italian',
    label: 'Pasta & Italian',
    items: [
      { name: 'Basil Pesto Pasta', price: '₹395', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Tomato & Cream Pasta', price: '₹395', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Alfredo Pasta', price: '₹450', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Arrabbiata Pasta', price: '₹450', image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Mac N Cheese', price: '₹400', image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1200&q=80' },
    ],
  },
  {
    key: 'asian',
    label: 'Asian',
    items: [
      { name: 'Chilli Basil Vegetables', price: '₹350', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Thai Curry', price: '₹395', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Burnt Garlic Noodles', price: '₹275', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Schezwan Rice/Noodles', price: '₹295', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80' },
    ],
  },
  {
    key: 'chillers',
    label: 'Chillers',
    items: [
      { name: 'Berry Berry Chiller', price: '₹195', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Mango Tango Chiller', price: '₹195', image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Kiwi Green Apple Mint Chiller', price: '₹195', image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Jasmine Lychee Ice Tea', price: '₹195', image: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Ginger Honey Lime', price: '₹195', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1200&q=80' },
    ],
  },
]

const experienceCards = [
  { title: 'Late Night Escape', text: 'Wind down under warm pendants, mellow playlists, and city-night reflections.' },
  { title: 'Cozy Conversations', text: 'Comfort seating zones designed for long talks and meaningful catch-ups.' },
  { title: 'Work & Chill', text: 'A calm corner for laptops, meetings, and focused sips with ambient lighting.' },
  { title: 'Premium Tea Rituals', text: 'Elegant brews steeped with aroma, served with craftsmanship and care.' },
  { title: 'Vegetarian Gourmet', text: 'Global vegetarian plates with a luxury café touch and comforting depth.' },
  { title: 'Aesthetic Ambience', text: 'Cinematic corners and polished details made for memorable nights.' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1555507036-ab794f4afe5b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
]

const sectionContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
}

const sectionItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function AmbientParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(14)].map((_, idx) => (
        <span
          key={`particle-${idx}`}
          className="ambient-particle"
          style={{
            left: `${(idx * 17) % 100}%`,
            animationDelay: `${idx * 0.7}s`,
            animationDuration: `${7 + (idx % 6)}s`,
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].key)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 70])
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.06])

  const activeMenuItems = useMemo(
    () => menuCategories.find((category) => category.key === activeCategory)?.items ?? [],
    [activeCategory],
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0F1714] text-[#F5EFE6]">
      <div className="glow-orb glow-orb-left" />
      <div className="glow-orb glow-orb-right" />

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0F1714]/45 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#home" className="font-display text-xl tracking-wide text-[#F5EFE6]">
            Tea Villa Cafe
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#F5EFE6]/80 lg:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#C6A46C]">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/20 p-2 text-[#F5EFE6] lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileNavOpen && (
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#16352B]/85 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-3 text-sm text-[#F5EFE6]/90">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-lg px-2 py-1 transition hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28 md:px-8">
        <motion.img
          style={{ y: heroY, scale: heroScale }}
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=2000&q=80"
          alt="Tea Villa Cafe exterior at night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1714]/80 via-[#0F1714]/75 to-[#0F1714]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,164,108,0.2),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(65,89,75,0.35),transparent_45%)]" />
        <AmbientParticles />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="glass-panel relative mx-auto w-full max-w-4xl p-7 text-center md:p-12"
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#C6A46C]/50 bg-[#C6A46C]/10 px-4 py-1 text-[11px] uppercase tracking-[0.28em] text-[#F5EFE6]/90">
            <MoonStar size={14} /> Chennai Night Café
          </p>
          <h1 className="font-display mt-6 text-4xl leading-tight text-[#F5EFE6] md:text-7xl">
            Where Conversations Brew
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#F5EFE6]/80 md:text-lg">
            Late-night tea rituals, handcrafted desserts, warm conversations, and unforgettable café
            moments in the heart of Chennai.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#menu" className="lux-button-primary">
              Explore Menu
            </a>
            <a href="#visit" className="lux-button-secondary">
              Visit Cafe
            </a>
          </div>
        </motion.div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <motion.section
          id="about"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-10 py-18 lg:grid-cols-[1.1fr_1fr]"
        >
          <motion.div variants={sectionItem} className="overflow-hidden rounded-[28px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=1600&q=80"
              alt="Tea Villa cinematic seating"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </motion.div>

          <motion.div variants={sectionItem} className="space-y-5">
            <p className="section-label">About Tea Villa</p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              A premium tea lounge crafted for slow evenings
            </h2>
            <p className="text-[#F5EFE6]/78">
              Tea Villa Cafe is designed for slow evenings, meaningful conversations, work sessions,
              comfort food, and aesthetic late-night experiences.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <article key={stat.label} className="glass-card p-4">
                  <p className="font-display text-xl text-[#F5EFE6]">{stat.value}</p>
                  <p className="mt-1 text-xs text-[#F5EFE6]/65">{stat.label}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="menu"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-18"
        >
          <motion.div variants={sectionItem} className="text-center">
            <p className="section-label">Signature Menu</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Curated from our real café menu</h2>
          </motion.div>

          <motion.div variants={sectionItem} className="mt-8 flex flex-wrap justify-center gap-2">
            {menuCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  activeCategory === category.key
                    ? 'border-[#C6A46C] bg-[#C6A46C]/20 text-[#F5EFE6]'
                    : 'border-white/20 bg-[#16352B]/20 text-[#F5EFE6]/75 hover:border-[#C6A46C]/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeMenuItems.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="menu-card group"
              >
                <div className="menu-card-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="relative z-10">
                  <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[#F5EFE6]/55">
                    <span>{menuCategories.find((category) => category.key === activeCategory)?.label}</span>
                    <span className="inline-flex items-center gap-1 text-[#C6A46C]/90">
                      <CupSoda size={12} /> Signature
                    </span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight text-[#F5EFE6]">{item.name}</h3>
                  <p className="mt-5 text-sm tracking-wide text-[#C6A46C]">{item.price}</p>
                </div>

                {item.tea && (
                  <div className="pointer-events-none absolute right-5 top-4 opacity-80">
                    <span className="steam steam-1" />
                    <span className="steam steam-2" />
                    <span className="steam steam-3" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>

      <motion.section
        id="experience"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#16352B]/35 px-4 py-20 md:px-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(198,164,108,0.18),transparent_35%),radial-gradient(circle_at_88%_80%,rgba(65,89,75,0.4),transparent_40%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div variants={sectionItem} className="text-center">
            <p className="section-label">Experience</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">More Than a Café</h2>
          </motion.div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experienceCards.map((card) => (
              <motion.article key={card.title} variants={sectionItem} whileHover={{ y: -6 }} className="experience-card">
                <span className="mb-4 inline-flex rounded-2xl border border-[#C6A46C]/35 bg-[#C6A46C]/10 p-2 text-[#C6A46C]">
                  <Sparkles size={16} />
                </span>
                <h3 className="font-display text-2xl">{card.title}</h3>
                <p className="mt-2 text-sm text-[#F5EFE6]/75">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <main className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <motion.section
          id="gallery"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-18"
        >
          <motion.div variants={sectionItem} className="text-center">
            <p className="section-label">Gallery</p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Cinematic café moments</h2>
          </motion.div>

          <motion.div variants={sectionItem} className="gallery-masonry mt-10">
            {galleryImages.map((image, index) => (
              <figure key={image} className="gallery-frame">
                <img src={image} alt={`Tea Villa gallery ${index + 1}`} className="gallery-image" />
                <figcaption className="gallery-overlay">Tea Villa Cafe</figcaption>
              </figure>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="visit"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 py-18 lg:grid-cols-[1fr_1.1fr]"
        >
          <motion.div variants={sectionItem}>
            <p className="section-label">Visit</p>
            <h2 className="font-display mt-3 text-3xl leading-tight md:text-5xl">A warm table is waiting in T. Nagar</h2>

            <div className="mt-7 space-y-4 text-[#F5EFE6]/80">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#C6A46C]" size={18} />
                <span>
                  Tea Villa Cafe
                  <br />
                  Old No 52/2, New No 40/2,
                  <br />
                  Thirumalai Pillai Rd,
                  <br />
                  T. Nagar, Chennai 600017
                </span>
              </p>

              <p className="flex items-center gap-3">
                <PhoneCall className="text-[#C6A46C]" size={18} /> 094440 56991
              </p>

              <p className="flex items-center gap-3">
                <Clock3 className="text-[#C6A46C]" size={18} /> Open Till 2 AM
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Tea+Villa+Cafe+T+Nagar+Chennai"
                target="_blank"
                rel="noreferrer"
                className="lux-button-primary"
              >
                Get Directions
              </a>
              <a href="tel:09444056991" className="lux-button-secondary">
                Reserve Table
              </a>
            </div>
          </motion.div>

          <motion.div variants={sectionItem} className="glass-panel p-3">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Tea Villa Cafe location"
                src="https://www.google.com/maps?q=Tea+Villa+Cafe+T+Nagar+Chennai&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-[#0F1714] px-4 py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl text-[#F5EFE6]">Tea Villa Cafe</p>
            <p className="mt-2 text-sm text-[#F5EFE6]/65">Crafted for conversations.</p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-[#F5EFE6]/75">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#C6A46C]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
              <Instagram size={16} />
            </a>
            <a href="https://maps.google.com/?q=Tea+Villa+Cafe+T+Nagar+Chennai" target="_blank" rel="noreferrer" className="social-pill">
              <MapPin size={16} />
            </a>
            <a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="social-pill">
              <Utensils size={16} />
            </a>
            <a href="#home" className="social-pill">
              <TreePalm size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
