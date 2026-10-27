import { Check, Clock, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Icon } from "@/components/icon";
import { ReservationForm } from "@/components/reservation-form";
import { hostal, rooms, services } from "@/content/hostal";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Home() {
  const whatsappUrl = `https://wa.me/${hostal.contact.whatsapp}`;

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="text-xl font-extrabold tracking-tight text-teal-800">
            {hostal.name}
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-teal-700">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#reservar" className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">
            Reservar
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-amber-600 text-white">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-200">{hostal.tagline}</p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-6xl">{hostal.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg text-teal-50">{hostal.heroText}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#reservar" className="rounded-full bg-white px-6 py-3 font-semibold text-teal-800 hover:bg-amber-50">
                Reservar ahora
              </a>
              <a href="#servicios" className="rounded-full border border-white/60 px-6 py-3 font-semibold hover:bg-white/10">
                Ver servicios
              </a>
            </div>
            <div className="mt-12 flex items-center gap-2 text-amber-200">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
              <span className="ml-2 text-sm text-teal-50">Huéspedes felices todo el año</span>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-16 bg-stone-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Nuestros servicios</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">Todo lo que necesitas durante tu estadía, en un solo lugar.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700">
                    <Icon name={s.icon} className="size-6" />
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="habitaciones" className="scroll-mt-16 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Habitaciones</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">Opciones para viajeros solos, parejas y familias.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {rooms.map((r) => (
                <div key={r.id} className="flex flex-col rounded-2xl border border-stone-200 p-6 shadow-sm">
                  <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-teal-100 text-teal-800">
                    <Icon name={r.icon} className="size-12" />
                  </div>
                  <h3 className="text-xl font-semibold">{r.name}</h3>
                  <p className="text-sm text-stone-500">{r.capacity}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-stone-700">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="size-4 text-teal-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-end justify-between">
                    <p>
                      <span className="text-3xl font-bold text-teal-800">${r.price}</span>
                      <span className="text-sm text-stone-500"> / noche</span>
                    </p>
                    <a href="#reservar" className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600">
                      Reservar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-16 bg-teal-900 py-20 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Sobre {hostal.name}</h2>
              <p className="mt-4 text-lg text-teal-100">{hostal.about}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: `${services.length}+`, label: "Servicios" },
                { value: "24 h", label: "Atención" },
                { value: `${rooms.length}`, label: "Tipos de habitación" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-3xl font-extrabold text-amber-300">{s.value}</p>
                  <p className="mt-1 text-sm text-teal-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reservar" className="scroll-mt-16 bg-stone-50 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
            <div id="contacto" className="scroll-mt-16 lg:col-span-2">
              <h2 className="text-3xl font-bold sm:text-4xl">Reserva y contacto</h2>
              <p className="mt-3 text-stone-600">Envíanos tu solicitud y te confirmamos disponibilidad lo antes posible.</p>
              <ul className="mt-8 space-y-4 text-stone-700">
                <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-teal-700" />{hostal.contact.address}</li>
                <li className="flex gap-3"><Phone className="size-5 shrink-0 text-teal-700" />{hostal.contact.phone}</li>
                <li className="flex gap-3"><Mail className="size-5 shrink-0 text-teal-700" />{hostal.contact.email}</li>
                <li className="flex gap-3">
                  <Clock className="size-5 shrink-0 text-teal-700" />
                  <span>{hostal.contact.checkIn}<br />{hostal.contact.checkOut}</span>
                </li>
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
              >
                <MessageCircle className="size-5" /> Escríbenos por WhatsApp
              </a>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:col-span-3">
              <ReservationForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} {hostal.name} · {hostal.tagline}
      </footer>
    </>
  );
}
