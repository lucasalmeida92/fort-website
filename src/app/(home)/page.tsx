import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TeamsSection } from "@/components/TeamsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FortHashtag } from "@/components/FortHashtag";
import { Hero } from "./Hero";
import { FeaturedSection } from "./FeaturedSection";
import { NextEventsCard } from "./NextEventsCard";
import { CommunityCard } from "./CommunityCard";
import './styles.scss';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <TeamsSection />
      <Container id="keep-up" className="flex flex-col items-center justify-center py-8 min-h-[70vh]">
        <SectionTitle className="w-full text-center">Acompanhe</SectionTitle>
        <div className="flex flex-col w-full md:flex-row">
          <NextEventsCard />
          <div className="divider md:divider-horizontal"></div>
          <CommunityCard />
        </div>
      </Container>
      <SponsorsSection />
      <FortHashtag />
    </>
  )
}
