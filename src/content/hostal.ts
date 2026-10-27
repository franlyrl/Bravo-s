// Edita este archivo para cambiar los textos, servicios, habitaciones y datos de contacto.

export const hostal = {
  name: "Bravo's",
  tagline: "Hostal & Servicios",
  heroTitle: "Tu casa lejos de casa",
  heroText:
    "Habitaciones cómodas, desayuno incluido y todo lo que necesitas para disfrutar tu viaje en un solo lugar.",
  about:
    "En Bravo's te recibimos como familia. Somos un hostal acogedor pensado para viajeros, parejas y familias que buscan comodidad, buen precio y atención cercana.",
  contact: {
    address: "Calle Principal #123, Centro",
    phone: "+505 8888 8888",
    whatsapp: "50588888888",
    email: "reservas@bravos.com",
    checkIn: "Check-in desde las 2:00 pm",
    checkOut: "Check-out hasta las 11:00 am",
  },
} as const;

export const services = [
  { icon: "Wifi", title: "Wi-Fi gratis", text: "Internet de alta velocidad en todo el hostal." },
  { icon: "Coffee", title: "Desayuno incluido", text: "Café, frutas y desayuno típico cada mañana." },
  { icon: "Clock", title: "Recepción 24 h", text: "Siempre hay alguien para ayudarte." },
  { icon: "CookingPot", title: "Cocina compartida", text: "Equipada para que prepares tus comidas." },
  { icon: "WashingMachine", title: "Lavandería", text: "Servicio de lavado y secado de ropa." },
  { icon: "Car", title: "Parqueo", text: "Estacionamiento privado y vigilado." },
  { icon: "Map", title: "Tours y excursiones", text: "Organizamos paseos a los mejores lugares." },
  { icon: "Plane", title: "Traslado al aeropuerto", text: "Te recogemos y te llevamos." },
  { icon: "Snowflake", title: "Aire acondicionado", text: "Habitaciones frescas todo el año." },
  { icon: "ShowerHead", title: "Agua caliente", text: "Baños limpios con agua caliente." },
  { icon: "Lock", title: "Lockers y seguridad", text: "Casilleros personales y cámaras 24 h." },
  { icon: "Wine", title: "Bar y terraza", text: "Relájate con una bebida al atardecer." },
  { icon: "Bike", title: "Alquiler de bicicletas", text: "Recorre la ciudad a tu ritmo." },
  { icon: "PawPrint", title: "Pet friendly", text: "Tu mascota también es bienvenida." },
] as const;

export const rooms = [
  {
    id: "dormitorio",
    name: "Dormitorio compartido",
    icon: "BedSingle",
    price: 12,
    capacity: "6 camas",
    features: ["Locker personal", "Baño compartido", "Aire acondicionado"],
  },
  {
    id: "privada",
    name: "Habitación privada",
    icon: "BedDouble",
    price: 35,
    capacity: "2 personas",
    features: ["Cama matrimonial", "Baño privado", "TV y Wi-Fi"],
  },
  {
    id: "familiar",
    name: "Habitación familiar",
    icon: "Users",
    price: 55,
    capacity: "4 personas",
    features: ["2 camas dobles", "Baño privado", "Mini refrigerador"],
  },
] as const;

export type RoomId = (typeof rooms)[number]["id"];
