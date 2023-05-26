import Image from "next/image";
import { Container } from "@/components/Container";
import { Hero } from "./Hero";
import { FeaturedSection } from "./FeaturedSection";
import { TeamsSection } from "./TeamsSection";
import { SponsorsSection } from "./SponsorsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <TeamsSection />
      <SponsorsSection />
      <Container className="flex items-center justify-center min-h-[25vh]">
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-xl">
          <em className="text-pink">#</em>JuntosSomosMaisFort
        </span>
      </Container>
    </>
  )
}
