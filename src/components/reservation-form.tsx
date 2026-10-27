"use client";

import { useActionState } from "react";
import { createReservation, type ReservationState } from "@/app/actions";
import { rooms } from "@/content/hostal";

const input =
  "w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20";

export function ReservationForm() {
  const [state, action, pending] = useActionState<ReservationState, FormData>(createReservation, null);
  const v = state?.values ?? {};

  return (
    <form key={state ? JSON.stringify(state) : "empty"} action={action} className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-1 sm:col-span-2">
        <span className="text-sm font-medium">Nombre completo</span>
        <input name="name" defaultValue={v.name} required maxLength={120} className={input} />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-medium">Correo</span>
        <input name="email" defaultValue={v.email} type="email" required className={input} />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-medium">Teléfono / WhatsApp</span>
        <input name="phone" defaultValue={v.phone} type="tel" className={input} />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-medium">Llegada</span>
        <input name="checkIn" defaultValue={v.checkIn} type="date" required className={input} />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-medium">Salida</span>
        <input name="checkOut" defaultValue={v.checkOut} type="date" required className={input} />
      </label>
      <label className="space-y-1">
        <span className="text-sm font-medium">Habitación</span>
        <select name="roomType" required defaultValue={v.roomType ?? ""} className={input}>
          <option value="" disabled>
            Elige una opción
          </option>
          {rooms.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name} — ${r.price}/noche
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-1">
        <span className="text-sm font-medium">Huéspedes</span>
        <input name="guests" type="number" min={1} max={20} defaultValue={v.guests ?? 1} required className={input} />
      </label>
      <label className="space-y-1 sm:col-span-2">
        <span className="text-sm font-medium">Comentarios (opcional)</span>
        <textarea name="notes" defaultValue={v.notes} rows={3} maxLength={1000} className={input} />
      </label>

      {state && (
        <p
          role="status"
          className={`sm:col-span-2 rounded-lg px-4 py-3 text-sm ${
            state.ok ? "bg-teal-50 text-teal-800" : "bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="sm:col-span-2 rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800 disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Solicitar reserva"}
      </button>
    </form>
  );
}
