"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { messages } from "@/db/schema";

export async function addMessage(formData: FormData) {
  const content = String(formData.get("content") ?? "").trim();
  if (!content) return;
  await getDb().insert(messages).values({ content: content.slice(0, 500) });
  revalidatePath("/");
}

export async function deleteMessage(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) return;
  await getDb().delete(messages).where(eq(messages.id, id));
  revalidatePath("/");
}
