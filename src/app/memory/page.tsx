import { redirect } from "next/navigation";

export const metadata = {
  title: "Memory Board",
};

export default function MemoryPage() {
  redirect("/");
}
