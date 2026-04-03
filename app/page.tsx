export default function TropojaDeliceLandingPage() {
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
    },
    {
      name: "Habitué du quartier",
      text: "L'accueil est chaleureux et l'équipe laisse une très bonne impression dès l'arrivée.",
    },
    {
      name: "Visiteur de passage",
      text: "Les clients soulignent souvent la fraîcheur de la viande et l'envie de revenir.",
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
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
              Nouveau site vitrine premium
            </span>
            <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Savoureux, chaleureux, mémorable.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Une page d'accueil moderne pour mettre en avant la qualité de la
              cuisine, la générosité des portions et la proximité avec la
              clientèle locale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+33956287322"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-medium text-neutral-950 transition hover:scale-[1.02]"
              >
                Appeler le restaurant
              </a>
              <a
                href="#infos"
                className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Voir les infos
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm text-amber-300">Adresse</p>
              <p className="mt-3 text-2xl font-semibold">
                704 Av. Professeur Louis Ravas
              </p>
              <p className="mt-2 text-white/70">34080 Montpellier, France</p>
              <div className="mt-6 h-px bg-white/10" />
              <p className="mt-6 text-sm text-amber-300">Contact</p>
              <p className="mt-3 text-xl font-semibold">+33 9 56 28 73 22</p>
              <p className="mt-2 text-white/70">
                Commande, renseignement, contact rapide
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-400 to-orange-500 p-6 text-neutral-950 shadow-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">
                Ouvert 7j/7
              </p>
              <p className="mt-4 text-5xl font-bold">08:00</p>
              <p className="text-xl font-medium">→ 00:00</p>
              <p className="mt-6 text-sm font-medium">
                Service sur place, à emporter, en livraison et livraison sans
                contact.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:col-span-2">
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
              <li>• Galerie photo des plats et de la salle</li>
              <li>• Menu complet avec catégories et prix</li>
              <li>• Bouton WhatsApp ou commande directe</li>
              <li>• Bloc Google Maps intégré</li>
              <li>• Réservation ou demande de devis traiteur</li>
            </ul>
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

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-4 md:pb-24">
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
    </div>
  );
}
