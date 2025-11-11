import { Header, Footer } from "@/components/layout";
import { Hero, Workshops, Challenges, FAQ } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Workshops />
        <Challenges />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
