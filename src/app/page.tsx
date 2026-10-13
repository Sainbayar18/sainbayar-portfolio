import { Home } from "@/components/home";
export default function Page() {
  return <Home initialDate={new Date().toISOString().slice(0, 10)} />;
}
