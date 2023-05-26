import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import csGoLogo from "./csgo-logo.png";
import valorantLogo from "./valorant-logo.png";
import './styles.css';

export function TeamsSection() {
  return (
    <div className="min-h-[50vh] py-8">
      <Container className="flex flex-col items-center content-center">
        <h2 className="text-3xl mb-8 uppercase font-bold">Nossos times</h2>
        <ul className="flex gap-6 flex-wrap justify-center">
          <li>
            <Link
              href="/teams/valorant-male"
              title="Valorant Masculino"
              className="p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 team"
            >
              <h3 className="text-lg">Valorant Masculino</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={valorantLogo} alt="Logo Valorant" className="game-logo" />
              </figure>
            </Link>
          </li>
          <li>
            <Link
              href="/teams/valorant-male"
              title="Valorant Feminino"
              className="p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 team"
            >
              <h3 className="text-lg">Valorant Feminino</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={valorantLogo} alt="Logo Valorant" className="game-logo" />
              </figure>
            </Link>
          </li>
          <li>
            <Link
              href="/teams/valorant-male"
              title="CS:GO Masculino"
              className="p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 team"
            >
              <h3 className="text-lg">CS:GO Masculino</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={csGoLogo} alt="Logo CS:GO" className="game-logo" />
              </figure>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
