# Bravo's

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Drizzle ORM + [Neon](https://neon.tech) (Postgres serverless).

Página de un hostal con servicios: portada, servicios, habitaciones, sección "Nosotros" y un formulario de reservas que guarda las solicitudes en la tabla `reservations` de Neon (Server Action).

**Para cambiar textos, servicios, habitaciones, precios y datos de contacto, edita `src/content/hostal.ts`.**

## Estructura

```
src/
  app/
    page.tsx       # Página principal del hostal
    actions.ts     # Server Action: guardar reservas
  components/
    reservation-form.tsx  # Formulario de reservas
    icon.tsx       # Íconos (lucide-react)
  content/
    hostal.ts      # Textos, servicios, habitaciones y contacto
  db/
    schema.ts      # Tablas (Drizzle)
    index.ts       # Conexión a Neon (driver HTTP serverless)
drizzle/           # Migraciones SQL generadas
drizzle.config.ts
```

## 1. Crear la base de datos en Neon

1. Crea una cuenta y un proyecto en https://console.neon.tech
2. En el dashboard pulsa **Connect** y copia la cadena de conexión (la versión *pooled*).

## 2. Configurar el proyecto en local

```bash
npm install
cp .env.example .env      # pega tu DATABASE_URL de Neon en .env
npm run db:migrate        # crea las tablas en Neon
npm run dev               # http://localhost:3000
```

## Scripts de base de datos

| Script | Qué hace |
| --- | --- |
| `npm run db:generate` | Genera una migración SQL a partir de `src/db/schema.ts` |
| `npm run db:migrate` | Aplica las migraciones pendientes en la base de datos |
| `npm run db:push` | Sincroniza el esquema directamente (útil para prototipar) |
| `npm run db:studio` | Abre Drizzle Studio para ver/editar datos |

Flujo para cambiar tablas: edita `src/db/schema.ts` → `npm run db:generate` → `npm run db:migrate`.

## 3. Desplegar la web (Vercel)

Neon aloja solo la base de datos; la web se despliega en Vercel:

1. Entra a https://vercel.com/new e importa este repositorio de GitHub.
2. En **Environment Variables** agrega `DATABASE_URL` con tu cadena de Neon
   (o usa la integración oficial de Neon en Vercel, que la crea automáticamente).
3. Pulsa **Deploy**. Cada `git push` a `main` vuelve a desplegar.
