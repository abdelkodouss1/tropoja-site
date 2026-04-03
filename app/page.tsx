export default function TropojaDeliceLandingPage() {
  const galleryImages = [
    {
      title: "Devanture du restaurant",
      image: "/images/restaurant-exterieur.jpg",
    },
    {
      title: "Carte burgers et tacos",
      image: "/images/menu-hamburgers-tacos.jpg",
    },
    {
      title: "Carte boissons",
      image: "/images/menu-boissons.jpg",
    },
    {
      title: "Carte assiettes et sandwichs",
      image: "/images/menu-assiettes-sandwichs.jpg",
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
    "Portions généreuses",
    "Viandes fraîches et de qualité",
    "Service chaleureux",
    "Sur place, à emporter et en livraison",
  ];

  const reviews = [
    {
      name: "Client satisfait",
      text: "Une adresse appréciée pour ses plats savoureux, ses portions généreuses et son excellent rapport qualité-prix.",
      rating: "5.0",
    },
    {
      name: "Habitué du quartier",
      text: "L'accueil est chaleureux et l'équipe laisse une très bonne impression dès l'arrivée.",
      rating: "5.0",
    },
    {
      name: "Visiteur de passage",
      text: "Les clients soulignent souvent la fraîcheur de la viande et l'envie de revenir.",
      rating: "4.9",
    },
  ];

  const featuredCards = [
    {
      title: "Cuisine généreuse",
      description:
        "Un site pensé pour donner faim immédiatement avec une mise en avant des portions, de la fraîcheur et de la qualité.",
    },
    {
      title: "Conversion locale",
      description:
        "Boutons d'appel, itinéraire, commande et réservation placés aux bons endroits pour transformer les visiteurs en clients.",
    },
    {
      title: "Image plus premium",
      description:
        "Design moderne, plus rassurant et plus professionnel qu'une simple page annuaire ou menu basique.",
    },
  ];

  const menuPreview = [
    {
      title: "Hamburgers & Tacos",
      subtitle:
        "Les classiques du restaurant avec les prix visibles directement sur le site.",
      badge: "Menu",
      image: "/images/menu-hamburgers-tacos.jpg",
    },
    {
      title: "Boissons",
      subtitle: "Toutes les boissons proposées avec un aperçu clair et propre.",
      badge: "Menu",
      image: "/images/menu-boissons.jpg",
    },
    {
      title: "Assiettes & Sandwichs",
      subtitle: "Assiettes généreuses, sandwichs et options supplémentaires.",
      badge: "Menu",
      image: "/images/menu-assiettes-sandwichs.jpg",
    },
  ];

  const stats = [
    { value: "7j/7", label: "Ouvert toute la semaine" },
    { value: "08:00 - 00:00", label: "Grande amplitude horaire" },
    {
      value: "4 services",
      label: "Sur place, emporter, livraison, sans contact",
    },
  ];

  const premiumBlocks = [
    {
      title: "Image plus haut de gamme",
      text: "Une présence en ligne qui inspire confiance dès les premières secondes et valorise mieux le restaurant.",
    },
    {
      title: "Plus de commandes locales",
      text: "Des boutons d'appel et d'itinéraire visibles immédiatement pour transformer les visiteurs en clients.",
    },
    {
      title: "Présentation plus claire de l’offre",
      text: "Le menu, les horaires, l’adresse et les visuels sont organisés pour être compris en un coup d’œil.",
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
      { name: "Tendres x6", price: "6,00€" },
      { name: "Wings x6", price: "6,00€" },
      { name: "Nuggets", price: "6,00€" },
    ],
    tacos: [
      { name: "1 Viande", price: "8,00€" },
      { name: "2 Viandes", price: "9,00€" },
      { name: "3 Viandes", price: "10,50€" },
    ],
    boissons: [
      { name: "Fanta Exotique", price: "1,50€" },
      { name: "Golden Eagle", price: "1,50€" },
      { name: "B52", price: "1,50€" },
      { name: "Bravo Pêche", price: "1,50€" },
      { name: "Bravo Raisin", price: "1,50€" },
      { name: "Bravo Pomme", price: "1,50€" },
      { name: "Ivi Orange", price: "1,50€" },
      { name: "Ayran", price: "1,50€" },
      { name: "Pepsi", price: "1,50€" },
      { name: "Coca-Cola", price: "1,50€" },
      { name: "Fanta Orange", price: "1,50€" },
      { name: "Fanta Citron", price: "1,50€" },
      { name: "Schweppes", price: "1,50€" },
      { name: "Oasis", price: "1,50€" },
      { name: "Tropico", price: "1,50€" },
      { name: "Lipton", price: "1,50€" },
    ],
    assiettes: [
      { name: "Kefta Mariné x3", price: "9,00€" },
      { name: "Poulet Mariné x3", price: "9,00€" },
      { name: "Bœuf Mariné x3", price: "9,00€" },
      { name: "Merguez Marinées x3", price: "9,00€" },
      { name: "Emincés de Kebab", price: "8,00€" },
      { name: "Cotelettes x3", price: "10,00€" },
    ],
    sandwichs: [
      { name: "Kefta Mariné", price: "8,00€" },
      { name: "Poulet Mariné", price: "8,00€" },
      { name: "Bœuf Mariné", price: "8,00€" },
      { name: "Cœur Mariné", price: "8,00€" },
      { name: "Foie", price: "8,00€" },
      { name: "Americain", price: "8,00€" },
      { name: "Merguez", price: "8,00€" },
      { name: "Kébap", price: "7,50€" },
    ],
    menuExtra: [
      "Cordon Bleu",
      "Kefta",
      "Nuggets",
      "Escalope de Poulet",
      "Merguez",
      "Kébap",
    ],
    tacosMeats: [
      "Kefta",
      "Poulet",
      "Bœuf",
      "Kébap",
      "Nuggets",
      "Escalope de Poulet",
      "Merguez",
      "Cordon Bleu",
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Montpellier
            </p>
            <h1 className="text-xl font-semibold">Tropoja Délice</h1>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#concept" className="hover:text-white">
              Concept
            </a>
            <a href="#menu" className="hover:text-white">
              Menu
            </a>
            <a href="#atouts" className="hover:text-white">
              Atouts
            </a>
            <a href="#avis" className="hover:text-white">
              Avis
            </a>
            <a href="#infos" className="hover:text-white">
              Infos
            </a>
          </nav>
          <a
            href="tel:+33956287322"
            className="hidden rounded-2xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] md:inline-flex"
          >
            Appeler
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/restaurant-exterieur.jpg')" }}
        />
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300 backdrop-blur">
              Nouveau site vitrine premium
            </span>
            <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Le goût, la générosité et la confiance dès le premier clic.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Une page d'accueil moderne pensée pour donner faim, rassurer les
              clients et transformer plus de visiteurs en commandes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+33956287322"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-medium text-neutral-950 transition hover:scale-[1.02]"
              >
                Appeler le restaurant
              </a>
              <a
                href="#menu"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Voir le menu
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
                  <p className="text-sm text-white/50">Signature</p>
                  <p className="mt-3 text-2xl font-semibold">
                    Cuisine généreuse
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Une présentation premium pour une adresse locale qui mérite
                    mieux qu’une simple page menu.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400 to-orange-500 p-5 text-neutral-950">
                  <p className="text-sm font-medium uppercase tracking-[0.2em]">
                    Ouvert 7j/7
                  </p>
                  <p className="mt-3 text-4xl font-bold">08:00</p>
                  <p className="text-lg font-medium">→ 00:00</p>
                  <p className="mt-3 text-sm font-medium">
                    Commande rapide toute la journée
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
                  <p className="text-sm text-white/50">Adresse</p>
                  <p className="mt-3 text-xl font-semibold">
                    704 Av. Professeur Louis Ravas
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    34080 Montpellier, France
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 md:col-span-2 backdrop-blur">
              <p className="text-sm text-amber-300">
                Pourquoi ce site vend mieux
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {featuredCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center"
            >
              <p className="text-2xl font-bold text-amber-300">{stat.value}</p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="concept" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              L'esprit du lieu
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Un restaurant présenté comme une vraie marque locale.
            </h3>
            <p className="mt-5 leading-8 text-white/75">
              Le design met l'accent sur ce qui déclenche l'achat : confiance,
              faim, simplicité de contact et repères clairs. Le site peut être
              montré au restaurateur comme une version plus moderne, plus
              rassurante et plus rentable de sa présence en ligne actuelle.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Ce qu'on peut ajouter après
            </p>
            <ul className="mt-4 space-y-4 text-white/75">
              <li>• Vraies photos des plats et de la salle</li>
              <li>• Menu complet avec prix</li>
              <li>• Bouton WhatsApp ou commande directe</li>
              <li>• Google Maps intégré</li>
              <li>• Réservation ou demande de devis traiteur</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Aperçu du menu
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Une carte mise en scène comme un vrai site de restaurant.
              </h3>
            </div>
            <a
              href="tel:+33956287322"
              className="inline-flex w-fit rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Commander maintenant
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {menuPreview.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900/60"
              >
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                        {item.badge}
                      </span>
                      <h4 className="mt-4 text-2xl font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-black/30 p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-[1.25rem] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Menu interactif
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Un vrai menu texte avec prix lisibles immédiatement.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                Cette section permet au client de consulter rapidement les
                produits et les tarifs sans zoomer sur une photo.
              </p>
            </div>
            <a
              href="tel:+33956287322"
              className="inline-flex w-fit rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
            >
              Commander par téléphone
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Hamburgers</h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-amber-300">
                  Classiques
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {interactiveMenu.hamburgers.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-4 py-3"
                  >
                    <span className="text-white/85">{item.name}</span>
                    <span className="font-semibold text-amber-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Tacos</h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-amber-300">
                  Très demandés
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {interactiveMenu.tacos.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-4 py-3"
                  >
                    <span className="text-white/85">{item.name}</span>
                    <span className="font-semibold text-amber-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-semibold text-white">Les viandes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interactiveMenu.tacosMeats.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Boissons</h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-amber-300">
                  1,50€
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {interactiveMenu.boissons.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-4 py-3"
                  >
                    <span className="text-white/85">{item.name}</span>
                    <span className="font-semibold text-amber-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Assiettes</h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-amber-300">
                  Généreux
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {interactiveMenu.assiettes.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-4 py-3"
                  >
                    <span className="text-white/85">{item.name}</span>
                    <span className="font-semibold text-amber-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Sandwichs</h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-amber-300">
                  Populaires
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {interactiveMenu.sandwichs.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-4 py-3"
                  >
                    <span className="text-white/85">{item.name}</span>
                    <span className="font-semibold text-amber-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/60 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold">Menu Extra</h4>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  Prix non visibles
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Les options ci-dessous sont bien visibles sur la carte, mais
                leur prix n’apparaît pas sur la photo fournie.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {interactiveMenu.menuExtra.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-8 py-6">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Galerie
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                Des visuels qui aident le client à se projeter.
              </h3>
            </div>
            <div className="grid gap-3 p-3 md:grid-cols-2">
              {galleryImages.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-medium text-white/85">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400/10 to-orange-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Version agence
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              Une présentation pensée pour vendre, pas juste montrer.
            </h3>
            <div className="mt-8 space-y-4">
              {premiumBlocks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="atouts" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
            Points forts
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <p className="text-lg font-semibold">{item}</p>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Mis en avant visuellement pour rassurer le visiteur et donner
                  envie dès les premières secondes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Avis clients
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              Une réputation qui mérite un site à la hauteur.
            </h3>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-bold text-neutral-950">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-white/50">
                      Avis mis en forme pour le site
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-amber-300">
                  {review.rating} ★
                </span>
              </div>
              <p className="mt-5 leading-8 text-white/75">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="infos" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Informations pratiques
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Simple, clair, utile.
            </h3>
            <div className="mt-8 space-y-5 text-white/75">
              <div>
                <p className="text-sm text-white/50">Restaurant</p>
                <p className="text-lg font-medium text-white">Tropoja Délice</p>
              </div>
              <div>
                <p className="text-sm text-white/50">Adresse</p>
                <p className="text-lg font-medium text-white">
                  704 Av. Professeur Louis Ravas, 34080 Montpellier
                </p>
              </div>
              <div>
                <p className="text-sm text-white/50">Téléphone</p>
                <p className="text-lg font-medium text-white">
                  +33 9 56 28 73 22
                </p>
              </div>
              <div>
                <p className="text-sm text-white/50">Services</p>
                <p className="text-lg font-medium text-white">
                  Sur place • À emporter • Livraison • Livraison sans contact
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+33956287322"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-medium text-neutral-950 transition hover:scale-[1.02]"
              >
                Appeler maintenant
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=704+Av.+Professeur+Louis+Ravas+34080+Montpellier"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Voir l'itinéraire
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Horaires
            </p>
            <div className="mt-6 space-y-3">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3"
                >
                  <span className="text-white/75">{item.day}</span>
                  <span className="font-medium text-white">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-4 md:pb-24">
        <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-400/15 to-orange-500/10 p-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
              Proposition commerciale
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              Un site qui aide le restaurant à inspirer confiance et vendre
              plus.
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              Cette maquette peut être personnalisée avec leurs vraies photos,
              leur carte complète et un système de commande ou réservation.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="tel:+33956287322"
              className="inline-flex rounded-2xl bg-amber-400 px-6 py-3 font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              Présenter la démo
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
        <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-neutral-900/95 p-3 shadow-2xl backdrop-blur">
          <div>
            <p className="text-sm font-semibold">Tropoja Délice</p>
            <p className="text-xs text-white/55">Ouvert de 08:00 à 00:00</p>
          </div>
          <a
            href="tel:+33956287322"
            className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-950"
          >
            Appeler
          </a>
        </div>
      </div>
    </div>
  );
}
