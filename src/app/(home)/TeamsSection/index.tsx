import Image from "next/image";
import { Container } from "@/components/Container";
import coverImage from "./top-cover.png";

export function TeamsSection() {
  return (
    <div className="bg-violet-950 py-8">
      <Container className="flex flex-col items-center content-center">
        <h2 className="text-xl mb-4">Nossos times</h2>
        <ul className="flex gap-6">
          <li className="team">Valorant Masculino</li>
          <li className="team">Valorant Feminino</li>
          <li className="team">CS:GO Masculino</li>
        </ul>
      </Container>
    </div>
  );
}
