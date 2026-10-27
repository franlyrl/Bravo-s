import { desc } from "drizzle-orm";
import { getDb, isDbConfigured } from "@/db";
import { messages, type Message } from "@/db/schema";
import { addMessage, deleteMessage } from "./actions";

export const dynamic = "force-dynamic";

async function loadMessages(): Promise<{ data: Message[]; error?: string }> {
  if (!isDbConfigured) return { data: [], error: "Falta DATABASE_URL. Copia .env.example a .env y pon tu cadena de conexión de Neon." };
  try {
    const data = await getDb().select().from(messages).orderBy(desc(messages.createdAt)).limit(50);
    return { data };
  } catch (e) {
    console.error(e);
    return { data: [], error: "No se pudo leer la base de datos. ¿Ejecutaste `npm run db:migrate`?" };
  }
}

export default async function Home() {
  const { data, error } = await loadMessages();

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Bravo&apos;s</h1>
        <p className="text-gray-500">Next.js + TypeScript + Tailwind + Drizzle + Neon (Postgres)</p>
      </header>

      <form action={addMessage} className="flex gap-2">
        <input
          name="content"
          required
          maxLength={500}
          placeholder="Escribe un mensaje..."
          className="flex-1 rounded-lg border border-gray-300 bg-transparent px-4 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-gray-700"
        />
        <button
          type="submit"
          disabled={!isDbConfigured}
          className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Guardar
        </button>
      </form>

      {error && (
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
          {error}
        </p>
      )}

      <ul className="space-y-3">
        {data.map((m) => (
          <li
            key={m.id}
            className="flex items-start justify-between gap-4 rounded-lg border border-gray-200 px-4 py-3 dark:border-gray-800"
          >
            <div>
              <p>{m.content}</p>
              <time className="text-xs text-gray-500">{m.createdAt.toLocaleString("es")}</time>
            </div>
            <form action={deleteMessage}>
              <input type="hidden" name="id" value={m.id} />
              <button type="submit" className="text-sm text-gray-400 hover:text-red-600">
                Eliminar
              </button>
            </form>
          </li>
        ))}
        {!error && data.length === 0 && <li className="text-gray-500">Aún no hay mensajes.</li>}
      </ul>
    </main>
  );
}
