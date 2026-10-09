import type { Metadata } from "next";
import { Projects } from "@/components/pages";
export const metadata: Metadata = { title: "Projects" };
export default function Page() {
  return <Projects />;
}
