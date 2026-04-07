"use client";

import { motion } from "framer-motion";

export default function TropojaDeliceLandingPage() {
  const galleryImages = [
    {
      title: "Salle chaleureuse",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Burger gourmand",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Grillades savoureuses",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sandwich et assiette",
      image:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const openingHours = [
    { day: "Lundi", hours: "08:00 - 00:00" },
    { day: "Mardi", hours: "08:00 - 00:00" },
    { day: "Mercredi", hours: "08:00 - 00:00" },
    { day: "Jeudi", hours: "08:00 - 00:00" },
    { day: "Vendredi", hours: "08:00 - 00:00" },
    { day: "Samedi", hours: "08:00 - 00:00" },
    { day: "Dimanche", hours: "08:00 - 00:00" },
  ];

  const strengths = [
    {
      title: "Portions généreuses",
      text: "Des plats copieux préparés pour satisfaire toutes les envies.",
    },
    {
      title: "Produits de qualité",
      text: "Des ingrédients savoureux et une préparation soignée à chaque commande.",
    },
    {
      title: "Service chaleureux",
      text: "Une équipe accueillante pour vous servir rapidement et avec le sourire.",
    },
    {
      title: "Sur place ou à emporter",
      text: "Profitez du restaurant comme vous le souhaitez, selon votre journée.",
    },
  ];

  const reviews = [
    {
      name: "Karim",
      text: "Très bonne adresse, les portions sont généreuses et le service est rapide.",
      rating: "5.0",
    },
    {
      name: "Sarah",
      text: "Accueil chaleureux, plats savoureux et très bon rapport qualité-prix.",
      rating: "5.0",
    },
    {
      name: "Yacine",
      text: "Une adresse à retenir à Montpellier, surtout pour les grillades et sandwichs.",
      rating: "4.9",
    },
  ];

  const stats = [
    { value: "7j/7", label: "Ouvert toute la semaine" },
    { value: "08:00 - 00:00", label: "Horaires larges" },
    { value: "Sur place & à emporter", label: "Simple et pratique" },
  ];

  const specialties = [
    {
      title: "Burgers",
      text: "Des burgers généreux préparés avec des ingrédients savoureux.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tacos",
      text: "Des tacos gourmands avec plusieurs choix de viandes.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Assiettes",
      text: "Des assiettes copieuses pour profiter pleinement des grillades.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const interactiveMenu = {
    hamburgers: [
      { name: "Cheese Burger", price: "7,50€" },
      { name: "Double Cheese", price: "8,50€" },
      { name: "Baps", price: "8,50€" },
      { name: "Chicken Burger", price: "7,50€" },
      { name: "Chèvre Miel", price: "8,50€" },
      { name: "Végétarien", price: "7,50€" },
    ],
    tacos: [
      { name: "1 Viande", price: "8,00€" },
      { name: "2 Viandes", price: "9,00€" },
      { name: "3 Viandes", price: "10,50€" },
    ],
    boissons: [
      { name: "Coca-Cola", price: "1,50€" },
      { name: "Fanta Orange", price: "1,50€" },
      { name: "Oasis", price: "1,50€" },
      { name: "Tropico", price: "1,50€" },
      { name: "Lipton", price: "1,50€" },
      { name: "Ayran", price: "1,50€" },
    ],
    assiettes: [
      { name: "Kefta Marinée x3", price: "9,00€" },
      { name: "Poulet Mariné x3", price: "9,00€" },
      { name: "Bœuf Mariné x3", price: "9,00€" },
      { name: "Merguez Marinées x3", price: "9,00€" },
      { name: "Émincés de Kebab", price: "8,00€" },
      { name: "Côtelettes x3", price: "10,00€" },
    ],
    sandwichs: [
      { name: "Kefta Marinée", price: "8,00€" },
      { name: "Poulet Mariné", price: "8,00€" },
      { name: "Bœuf Mariné", price: "8,00€" },
      { name: "Américain", price: "8,00€" },
      { name: "Merguez", price: "8,00€" },
      { name: "Kebab", price: "7,50€" },
    ],
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,214,153,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,186,104,0.22),transparent_26%),linear-gradient(180deg,#fff8ef_0%,#f8ead8_45%,#f5e1cb_100%)] text-[#2b1d12]">
      <header className="sticky top-0 z-50 border-b border-[#ead4be] bg-[#fff7ee]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
              Montpellier
            </p>
            <h1 className="text-xl font-semibold text-[#2b1d12]">
              Tropoja Délice
            </h1>
          </div>

          <nav className="hidden gap-6 text-sm text-[#6a5140] md:flex">
            <a href="#specialites" className="transition hover:text-[#2b1d12]">
              Spécialités
            </a>
            <a href="#menu" className="transition hover:text-[#2b1d12]">
              Menu
            </a>
            <a href="#galerie" className="transition hover:text-[#2b1d12]">
              Galerie
            </a>
            <a href="#avis" className="transition hover:text-[#2b1d12]">
              Avis
            </a>
            <a href="#infos" className="transition hover:text-[#2b1d12]">
              Infos
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/33956287322"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#dfc3a7] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#5a3d2b] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              WhatsApp
            </a>
            <a
              href="tel:+33956287322"
              className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Appeler
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#fff7ef]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff4e8]/95 via-[#fff4e8]/78 to-[#fff4e8]/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.2),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center"
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 w-fit rounded-full border border-amber-300 bg-white/80 px-4 py-2 text-sm text-amber-800 shadow-sm backdrop-blur"
            >
              Grillades • Burgers • Tacos • Sandwichs
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-4xl font-bold leading-tight text-[#2b1d12] md:text-6xl"
            >
              Des plats généreux et savoureux dans une ambiance chaleureuse.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-[#5f4a3b]"
            >
              Découvrez Tropoja Délice, votre adresse gourmande à Montpellier
              pour profiter de burgers, tacos, assiettes et sandwichs préparés
              avec soin.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Voir le menu
              </a>
              <a
                href="tel:+33956287322"
                className="rounded-2xl border border-[#d9c1aa] bg-white/85 px-6 py-3 font-medium text-[#5a3d2b] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Appeler
              </a>
              <a
                href="https://wa.me/33956287322"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#d9c1aa] bg-white/85 px-6 py-3 font-medium text-[#5a3d2b] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid gap-4 md:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-[#ead8c8] bg-white/75 p-6 shadow-2xl shadow-orange-100 backdrop-blur md:col-span-2"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-[#f0dfd0] bg-[#fffaf6] p-5 shadow-sm"
                >
                  <p className="text-sm text-[#9a7a5b]">Ambiance</p>
                  <p className="mt-3 text-2xl font-semibold text-[#2b1d12]">
                    Cuisine généreuse
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#6a5140]">
                    Une adresse conviviale où l’on vient pour bien manger et
                    passer un bon moment.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-400 to-orange-400 p-5 text-white shadow-lg"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.2em]">
                    Ouvert 7j/7
                  </p>
                  <p className="mt-3 text-4xl font-bold">08:00</p>
                  <p className="text-lg font-medium">→ 00:00</p>
                  <p className="mt-3 text-sm font-medium">
                    Commandez facilement toute la journée
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-[#f0dfd0] bg-[#fffaf6] p-5 shadow-sm"
                >
                  <p className="text-sm text-[#9a7a5b]">Adresse</p>
                  <p className="mt-3 text-xl font-semibold text-[#2b1d12]">
                    704 Av. Professeur Louis Ravas
                  </p>
                  <p className="mt-2 text-sm text-[#6a5140]">
                    34080 Montpellier, France
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-[#ead8c8] bg-white/75 p-6 shadow-xl shadow-orange-50 backdrop-blur md:col-span-2"
            >
              <p className="text-sm text-amber-700">Nos engagements</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Qualité",
                    description:
                      "Des ingrédients sélectionnés avec soin pour des plats savoureux.",
                  },
                  {
                    title: "Rapidité",
                    description:
                      "Un service pratique pour commander facilement au quotidien.",
                  },
                  {
                    title: "Simplicité",
                    description:
                      "Toutes les informations utiles réunies en quelques clics.",
                  },
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-[#f0dfd0] bg-[#fffaf6] p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#2b1d12]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#6a5140]">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="specialites"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-12 md:py-16"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-[2.25rem] border border-[#ead8c8] bg-[linear-gradient(180deg,rgba(255,250,243,0.95),rgba(255,245,235,0.92))] p-8 shadow-xl shadow-orange-50 md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
            Nos spécialités
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-[#2b1d12]">
            Une carte pensée pour tous les goûts.
          </h3>
          <p className="mt-4 max-w-3xl leading-8 text-[#6a5140]">
            Tropoja Délice vous propose une cuisine généreuse avec burgers,
            tacos, assiettes et sandwichs préparés pour allier goût, rapidité et
            plaisir.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {specialties.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.75rem] border border-[#f0dfd0] bg-white shadow-lg shadow-orange-50"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#2b1d12]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-[#6a5140]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="menu"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-7xl px-6 py-4 md:py-10"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-[2.25rem] border border-[#ead8c8] bg-[linear-gradient(180deg,rgba(255,249,241,0.96),rgba(252,241,228,0.94))] p-8 shadow-xl shadow-orange-50 md:p-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                Menu détaillé
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#2b1d12]">
                Consultez les produits et les prix en un coup d’œil.
              </h3>
            </div>

            <a
              href="tel:+33956287322"
              className="inline-flex w-fit rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Commander par téléphone
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              ["Hamburgers", interactiveMenu.hamburgers],
              ["Tacos", interactiveMenu.tacos],
              ["Boissons", interactiveMenu.boissons],
              ["Assiettes", interactiveMenu.assiettes],
              ["Sandwichs", interactiveMenu.sandwichs],
            ].map(([title, items]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#f0dfd0] bg-white/90 p-6 shadow-md shadow-orange-50"
              >
                <h4 className="text-2xl font-semibold text-[#2b1d12]">
                  {title}
                </h4>
                <div className="mt-6 space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-[#f3e4d6] bg-[#fffaf6] px-4 py-3 transition hover:bg-[#fff4ea]"
                    >
                      <span className="text-[#4e382b]">{item.name}</span>
                      <span className="font-semibold text-amber-700">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="galerie"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-7xl px-6 py-12 md:py-16"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[2.25rem] border border-[#ead8c8] bg-white/85 shadow-xl shadow-orange-50"
          >
            <div className="border-b border-[#f0dfd0] px-8 py-6">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                Galerie
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#2b1d12]">
                Un aperçu du restaurant et de l’univers gourmand.
              </h3>
            </div>

            <div className="grid gap-3 p-3 md:grid-cols-2">
              {galleryImages.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[1.5rem] border border-[#f0dfd0] bg-[#fffaf6] shadow-sm"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#4e382b]">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[2.25rem] border border-[#ead8c8] bg-[linear-gradient(180deg,rgba(255,244,229,0.98),rgba(255,249,240,0.96))] p-8 shadow-xl shadow-orange-50"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
              Pourquoi nous choisir
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-[#2b1d12]">
              Une adresse gourmande pour tous les moments de la journée.
            </h3>

            <div className="mt-8 space-y-4">
              {strengths.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="rounded-[1.5rem] border border-[#f0dfd0] bg-white p-5 shadow-sm"
                >
                  <p className="text-lg font-semibold text-[#2b1d12]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#6a5140]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="avis"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-12 md:py-16"
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
            Avis clients
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-[#2b1d12]">
            Ce que nos clients apprécient.
          </h3>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-[#ead8c8] bg-white/90 p-6 shadow-lg shadow-orange-50"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 font-bold text-white shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2b1d12]">
                      {review.name}
                    </p>
                    <p className="text-sm text-[#8d725d]">Client</p>
                  </div>
                </div>

                <span className="rounded-full border border-[#f0dfd0] bg-[#fffaf6] px-3 py-1 text-sm text-amber-700">
                  {review.rating} ★
                </span>
              </div>

              <p className="mt-5 leading-8 text-[#6a5140]">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="infos"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-7xl px-6 py-12 md:py-16"
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            className="rounded-[2.25rem] border border-[#ead8c8] bg-white/90 p-8 shadow-xl shadow-orange-50"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
              Informations pratiques
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-[#2b1d12]">
              Contact & accès
            </h3>

            <div className="mt-8 space-y-5 text-[#6a5140]">
              <div>
                <p className="text-sm text-[#8d725d]">Restaurant</p>
                <p className="text-lg font-medium text-[#2b1d12]">
                  Tropoja Délice
                </p>
              </div>
              <div>
                <p className="text-sm text-[#8d725d]">Adresse</p>
                <p className="text-lg font-medium text-[#2b1d12]">
                  704 Av. Professeur Louis Ravas, 34080 Montpellier
                </p>
              </div>
              <div>
                <p className="text-sm text-[#8d725d]">Téléphone</p>
                <p className="text-lg font-medium text-[#2b1d12]">
                  +33 9 56 28 73 22
                </p>
              </div>
              <div>
                <p className="text-sm text-[#8d725d]">Services</p>
                <p className="text-lg font-medium text-[#2b1d12]">
                  Sur place • À emporter • Livraison • Livraison sans contact
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+33956287322"
                className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Appeler maintenant
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=704+Av.+Professeur+Louis+Ravas+34080+Montpellier"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#d9c1aa] bg-white px-6 py-3 font-medium text-[#5a3d2b] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff7f0]"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[2.25rem] border border-[#ead8c8] bg-white/90 p-8 shadow-xl shadow-orange-50"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
              Horaires
            </p>

            <div className="mt-6 space-y-3">
              {openingHours.map((item) => (
                <motion.div
                  key={item.day}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between rounded-2xl border border-[#f0dfd0] bg-[#fffaf6] px-4 py-3"
                >
                  <span className="text-[#6a5140]">{item.day}</span>
                  <span className="font-medium text-[#2b1d12]">
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#f0dfd0] shadow-sm">
              <iframe
                title="Google Maps Tropoja Délice"
                src="https://www.google.com/maps?q=704%20Av.%20Professeur%20Louis%20Ravas%2034080%20Montpellier&z=16&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 pb-24 pt-4 md:pb-24"
      >
        <div className="rounded-[2.25rem] border border-amber-200 bg-[linear-gradient(135deg,#fff1da,#fff8ee,#fff3e0)] p-8 shadow-xl shadow-orange-100 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
              Commande rapide
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-[#2b1d12]">
              Envie de commander ou d’obtenir une information ?
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-[#6a5140]">
              Contactez directement le restaurant par téléphone ou retrouvez
              facilement l’itinéraire depuis votre position.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="tel:+33956287322"
              className="inline-flex rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
