"use server";

import { getDb, isDbConfigured } from "@/db";
import { reservations } from "@/db/schema";
import { rooms } from "@/content/hostal";

export type ReservationState = { ok: boolean; message: string; values?: Record<string, string> } | null;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createReservation(_prev: ReservationState, formData: FormData): Promise<ReservationState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();
  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const roomType = get("roomType");
  const checkIn = get("checkIn");
  const checkOut = get("checkOut");
  const guests = Number(get("guests"));
  const notes = get("notes");
  const fail = (message: string): ReservationState => ({
    ok: false,
    message,
    values: { name, email, phone, roomType, checkIn, checkOut, guests: get("guests"), notes },
  });

  if (!name || !EMAIL.test(email)) return fail("Escribe tu nombre y un correo válido.");
  if (!rooms.some((r) => r.id === roomType)) return fail("Elige un tipo de habitación.");
  if (!ISO_DATE.test(checkIn) || !ISO_DATE.test(checkOut) || checkOut <= checkIn)
    return fail("La fecha de salida debe ser posterior a la de llegada.");
  if (!Number.isInteger(guests) || guests < 1 || guests > 20) return fail("Número de huéspedes no válido.");
  if (!isDbConfigured) return fail("Las reservas en línea aún no están activas (falta DATABASE_URL).");

  try {
    await getDb().insert(reservations).values({
      name: name.slice(0, 120),
      email: email.slice(0, 200),
      phone: phone.slice(0, 40) || null,
      roomType,
      checkIn,
      checkOut,
      guests,
      notes: notes.slice(0, 1000) || null,
    });
  } catch (e) {
    console.error(e);
    return fail("No pudimos guardar tu reserva. Inténtalo de nuevo o escríbenos por WhatsApp.");
  }

  return { ok: true, message: `¡Gracias, ${name}! Recibimos tu solicitud y te confirmaremos por correo.` };
}
