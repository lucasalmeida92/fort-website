
import { SponsorsSection } from "@/components/SponsorsSection";
import { FortHashtag } from "@/components/FortHashtag";
import { TeamsList } from "@/components/TeamsSection/TeamsList";
import { Container } from "@/components/Container";

export default function AboutUsPage() {
  return (
    <>
      <Container className="mt-[3rem] md:mt-[5rem] mb-[10rem] text-center">
        <h2 className="mb-8 text-4xl md:text-5xl font-bold uppercase">Conheça nossos times</h2>
        <p className="mb-16 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum est odio quod id.</p>
        <TeamsList />
      </Container>
      <SponsorsSection />
      <FortHashtag />
    </>
  )
}
