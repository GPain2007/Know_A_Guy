import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "I Know A Guy" },
    { name: "description", content: "I Know A Guy" },
  ];
}

export default function Home() {
  return <Welcome />;
}
