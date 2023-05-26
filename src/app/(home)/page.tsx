import { Container } from "@/components/Container";
import { Hero } from "./Hero";
import { FeaturedSection } from "./FeaturedSection";
import { TeamsSection } from "./TeamsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <TeamsSection />
    </>
  )
}
