import type { Metadata } from "next";
import { About } from "@/components/pages";
export const metadata: Metadata = { title: "About" };
export default function Page() {
  return <About />;
}
