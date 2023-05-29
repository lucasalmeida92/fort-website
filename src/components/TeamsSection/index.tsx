import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TeamsList } from "./TeamsList";

export function TeamsSection() {
  return (
    <Container id="our-teams" className="flex flex-col min-h-[70vh] py-8 items-center justify-center">
      <SectionTitle>Nossos times</SectionTitle>
      <TeamsList />
    </Container>
  );
}
